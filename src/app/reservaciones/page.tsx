"use client";
import React from "react";
import axios from "axios";
import { Tarjeta } from "../components/Tarjeta";
import { useRouter } from "next/navigation";



export default function Reservaciones() {
    const [reservaciones, setReservaciones] = React.useState([]);
    const router = useRouter()

    const solicitarDatos = async () => {
        const axios2 = axios.create({
            withCredentials: true,
        });

        try {
            const respuesta = await axios2.get(
                "http://localhost:5000/api/reservaciones"
            );
            setReservaciones(respuesta.data);
            console.log("res:", reservaciones);
        } catch (error) {
            console.log(error);
        }
    };

    const cerrarSesion = async () => {
        const axios2 = axios.create({
            withCredentials: true,
        });
        try {
            await axios2.get("http://localhost:5000/api/cerrarsesion");
            router.push('../login')
        } catch (error) {
            console.log(error)            
        }
    };

    React.useEffect(() => {
        solicitarDatos();
    }, []);

    return (
        <div className="d-flex flex-col items-center">
            <h1 className="text-center m-4 text-2xl">Reservaciones</h1>
            {/* <button
                type="button"
                className="bg-blue-500"
                onClick={solicitarDatos}
            >
                Ver datos
            </button> */}
            {reservaciones.length > 0 && <Tarjeta Datos={reservaciones} />}
            <button type="button" className="bg-red-700 p-2" onClick={cerrarSesion}>
                Cerrar Sesion
            </button>
        </div>
    );

}
