"use client"
import "../app/globals.css";

export function Dashboard() {

    return (
        <div className="grid grid-cols-3 h-screen place-items-center sm:grid-cols-1 lg:grid-cols-3">
            {/* Columna Izquierda Vacía */}
            <div></div>

            {/* Columna Central con Tarjeta Negra */}
            <div className="bg-gradient-to-r from-mainColor to-mainColorDeg w-72 shadow rounded-30  p-4 flex flex-col items-center pt-10">
                {/* Tarjeta INTERNA */}
                <div className="bg-mainColor2 bg-opacity-005 rounded-30 shadow p-4 w-72 h-[445px] place-items-center">
                    {/* Espacio Superior (Espacio Estético) */}
                    <img className="rounded-t-lg object-contain w-[200]" src="/images/icon-secureobyco.png" alt="" />
                    <div className="mt-[50]">
                        <button
                            type="submit"
                            className="text-white focus:ring-4 w-full
                            bg-gradient-to-r from-purpleButton to-orangeButton
                           focus:outline-none focus:ring-blue-300 rounded-lg 
                           text-sm sm:w-auto px-5 py-2.5 text-center font-bold">
                            Ingresa
                        </button>
                    </div>
                    <div className="mt-[30]">
                        <button
                            type="submit"
                            className="text-white focus:ring-4 w-full
                            bg-gradient-to-r from-purpleButton to-orangeButton
                           focus:outline-none focus:ring-blue-300 rounded-lg 
                           text-sm sm:w-auto px-5 py-2.5 text-center font-bold">
                            Ingresa
                        </button>

                    </div>
                </div>

                <p className="text-xxs opacity-40 mt-1 pt-2 text-white">- BY LuisDev -</p>
            </div>
            {/* Columna Derecha Vacía */}
            <div>
            </div>
        </div>
    )
}

export default Dashboard