"use client";
import "../app/globals.css";
import { useState } from "react";
import { QrReader } from "react-qr-reader";

export function Qrpage() {
  const [qrData, setQrData] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleScan = (data: string | null) => {
    if (!data || typeof data !== "string") {
      console.error("Data no válida:", data);
      return;
    }
    const processedData = data.split(" ");
    console.log("Datos procesados:", processedData);
    setQrData(data);
  };

  const onResult = (result: any, err: any) => {
    if (result?.text) {
      try {
        console.log("Texto del QR:", result.text);
        handleScan(result.text);
      } catch (error) {
        console.error("Error al procesar el texto del QR:", error);
        setError(String(error));
      }
    }

    if (err) {
      console.warn("Error al escanear:", err);
      setError(err.message || String(err));
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-3 place-items-center sm:grid-cols-1">
      {/* Columna Izquierda Vacía */}
      <div></div>

      {/* Columna Central */}
      <div className="bg-gradient-to-r from-mainColor to-mainColorDeg w-72 shadow rounded-[30px] p-4 flex flex-col items-center pt-10">
        <div className="bg-mainColor2 bg-opacity-5 rounded-[30px] shadow p-4 w-72 h-[445px] flex flex-col items-center justify-start relative">
          <h2 className="text-xl font-bold mb-4 text-white">Escanea un Código QR</h2>

          {/* Contenedor del QRReader */}
          <div
            className="w-full flex-grow relative flex items-center justify-center"
            style={{ minHeight: "200px" }}
          >
            <QrReader
              onResult={onResult}
              constraints={{
                facingMode: "environment", // o "user"
              }}
              containerStyle={{
                width: "100%",
                maxWidth: "320px",
                margin: "0 auto",
                position: "relative",
              }}
              videoStyle={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </div>

          {/* Mostrar resultado o error */}
          <div className="mt-4 text-white text-center">
            {qrData ? (
              <p className="mb-2">
                <strong>QR Leído:</strong> {qrData}
              </p>
            ) : (
              <p className="mb-2">No se ha leído ningún QR aún.</p>
            )}

            {error && (
              <p className="text-red-300">
                <strong>Error:</strong> {error}
              </p>
            )}
          </div>
        </div>

        <p className="text-xxs opacity-40 mt-1 pt-2 text-white">- BY LuisDev -</p>
      </div>

      {/* Columna Derecha Vacía */}
      <div></div>
    </div>
  );
}

export default Qrpage;
