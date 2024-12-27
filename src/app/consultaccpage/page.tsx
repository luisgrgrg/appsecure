"use client";

export default function ConsultaPage() {

    return (
        <div className="min-h-screen grid grid-cols-3 place-items-center sm:grid-cols-1">
            {/* Columna Izquierda Vacía */}
            <div></div>

            {/* Columna Central */}
            <div className="bg-gradient-to-r from-mainColor to-mainColorDeg w-72 shadow rounded-[30px] p-4 flex flex-col items-center pt-10">
                <div className="bg-mainColor2 bg-opacity-5 rounded-[30px] shadow p-4 w-72 h-[445px] flex flex-col  items-center justify-center  justify-start relative">
                    <h2 className="text-center text-xl font-bold mb-4 text-white">Busca por Cédula del Colaborador</h2>
                    <form className="place-items-center">
                        <div className="mb-5">
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="cc_buscador"
                                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Ingrese la Cedula..." required />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="text-white focus:ring-4 w-full
                            bg-gradient-to-r from-purpleButton to-orangeButton
                           focus:outline-none focus:ring-blue-300 rounded-lg 
                           text-sm sm:w-auto px-5 py-2.5 text-center font-bold">
                            Buscar
                        </button>
                    </form>
                </div>

                <p className="text-xxs opacity-40 mt-1 pt-2 text-white">- BY LuisDev -</p>
            </div>

            {/* Columna Derecha Vacía */}
            <div></div>
        </div>
    );
}
