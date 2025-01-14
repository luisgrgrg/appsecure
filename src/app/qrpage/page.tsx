"use client";
import { useState, useEffect } from "react";
import { Html5QrcodeScanner, Html5QrcodeScanType } from "html5-qrcode";
import loginService from '@/pages/api/user/login'
import Swal from "sweetalert2";

export default function Qrpage() {

    const [scanResult, setScanResult] = useState('');
    const [dataEmployees, setDataEmployees] = useState([]);

    const loginservice = new loginService();

    async function getEmployees() {
        const datosEmpleados = await loginservice.getEmpleadosActivos();
        setDataEmployees(datosEmpleados)
    }
    useEffect(() => {

        getEmployees()
        // Asegúrate de inicializar el escáner dentro de useEffect
        const scanner = new Html5QrcodeScanner(
            "reader",
            {
                qrbox: {
                    width: 250,
                    height: 250,
                },
                fps: 5,
                supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
            },
            true // verbose para depuración
        );

        scanner.render(
            (result: string) => {
                // Callback de éxito
                console.log("Resultado escaneado:", result);
                setScanResult(result);
                const found = dataEmployees.find((element) => element > 10);

                if (found) {
                    Swal.fire({
                        title: "EMPLEADO EXISTENTE",
                        icon: "success",
                        draggable: true
                    });
                } else {
                    Swal.fire({
                        title: "EL EMPLEADO NO EXISTE",
                        icon: "error",
                        draggable: true
                    });
                }

                scanner.clear();
            },
            (error: string) => {
                // Callback de error
                console.warn("Error al escanear:", error);
            }
        );

        // Limpieza del escáner al desmontar el componente
        return () => {
            scanner.clear();
        };
    }, []);

    return (
        <div className="min-h-screen grid grid-cols-3 place-items-center sm:grid-cols-1">
            {/* Columna Izquierda Vacía */}
            <div></div>

            {/* Columna Central */}
            <div className="bg-gradient-to-r from-mainColor to-mainColorDeg w-72 shadow rounded-[30px] p-4 flex flex-col items-center pt-10">
                <div className="bg-mainColor2 bg-opacity-5 rounded-[30px] shadow p-4 w-72 h-[445px] flex flex-col items-center justify-start relative">
                    <h2 className="text-xl font-bold mb-4 text-white">Escanea un Código QR</h2>
                    {scanResult
                        ?
                        <div>Success</div>
                        :
                        <div id="reader"></div>
                    }
                </div>

                <p className="text-xxs opacity-40 mt-1 pt-2 text-white">- BY LuisDev -</p>
            </div>

            {/* Columna Derecha Vacía */}
            <div></div>
        </div>
    );
}

