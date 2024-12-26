"use client";
import "../app/globals.css";
import { useState } from "react";

export function Qrpage() {


    return (
        <div className="min-h-screen grid grid-cols-3 place-items-center sm:grid-cols-1">
            {/* Columna Izquierda Vacía */}
            <div></div>

            {/* Columna Central */}
            <div className="bg-gradient-to-r from-mainColor to-mainColorDeg w-72 shadow rounded-[30px] p-4 flex flex-col items-center pt-10">
                <div className="bg-mainColor2 bg-opacity-5 rounded-[30px] shadow p-4 w-72 h-[445px] flex flex-col items-center justify-start relative">
                    <h2 className="text-xl font-bold mb-4 text-white">Escanea un Cdigo QR</h2>



                </div>

                <p className="text-xxs opacity-40 mt-1 pt-2 text-white">- BY LuisDev -</p>
            </div>

            {/* Columna Derecha Vacía */}
            <div></div>
        </div>
    );
}

export default Qrpage;
