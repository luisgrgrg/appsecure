"use client"
import "../app/globals.css";

export function Login() {

    return (
        <div className="grid grid-cols-3 h-screen place-items-center sm:grid-cols-1 lg:grid-cols-3">
            {/* Columna Izquierda Vacía */}
            <div></div>

            {/* Columna Central con Tarjeta Negra */}
            <div className="bg-gradient-to-r from-mainColor to-mainColorDeg lg:w-72  md:w-72 sm:w-72  min-h-[250px] shadow rounded-30  p-4 flex flex-col items-center pt-10">
                {/* Espacio Superior (Espacio Estético) */}
                <img className="rounded-t-lg" src="/images/icon-secureobyco.png" alt="" />
                {/* Tarjeta INTERNA */}
                <div className="bg-mainColor2 bg-opacity-005 rounded-30 shadow p-4 lg:w-72  md:w-72 sm:w-11/12  h-[305px] mt-5 pt-10">
                    <h1 className="text-center text-white mb-4 text-2xl">OBYSecure</h1>
                    <form className="place-items-center">
                        <div className="mb-5">
                            <input
                                type="email"
                                id="email"
                                className="bg-mainColor2 sm:mx-4 bg-opacity-1  text-sm text-gray-100 rounded-lg 
                             focus:ring-blue-500 focus:border-001 block p-2.5"
                                placeholder="usuario"
                                required 
                            />
                        </div>
                        <div className="mb-5"> 
                            <input
                                type="password"
                                id="password"
                                className="bg-mainColor2 sm:mx-4 bg-opacity-1  text-gray-100 text-sm rounded-lg 
                             focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                                placeholder="contraseña"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-white focus:ring-4 w-full
                            bg-gradient-to-r from-purpleButton to-orangeButton
                           focus:outline-none focus:ring-blue-300 rounded-lg 
                           text-sm sm:w-auto px-5 py-2.5 text-center font-bold">
                            Ingresa
                        </button>
                    </form>
                </div>
                <p className="text-xxs opacity-40 mt-1 pt-2 text-white">- BY LuisDev -</p>
            </div>
            {/* Columna Derecha Vacía */}
            <div>
            </div>
        </div>
    )
}

export default Login