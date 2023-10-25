"use client";
import React, { FormEvent, useState } from "react";
import "@/styles/Login.css";
import axios, { AxiosError } from "axios";
import {Alert} from '@/app/components/alert'
import { useRouter } from "next/navigation";

export default function Login() {
    const [error, setError] = React.useState('');
    const router = useRouter();

    const manejadorSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const nombre = formData.get("nombre");
        const correo = formData.get("correo");
        const telefono = formData.get("telefono");
        const clave = formData.get("clave");

        const dataUser = { nombre, email: correo, telefono, clave };
        try {
            const respuesta = await axios.post(
                "http://localhost:5000/api/registro",
                dataUser
            );
            router.push('../login')
            console.log(respuesta.data);
        } catch (error) {
            console.log(error);
            if (error instanceof AxiosError) {
                setError(error.response?.data.Error);
            }
        }
    };

    return (
        <div className="login">
            {error && <Alert mensaje = {error}/>}
            {/* <div className="bg-red-500 text-white flex items-center justify-center m-2 p-1 text-center">
                {error}
            </div> */}
            <form onSubmit={manejadorSubmit}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    required={true}
                />
                <input
                    type="text"
                    name="correo"
                    placeholder="Correo"
                    required={true}
                />
                <input
                    type="number"
                    name="telefono"
                    placeholder="Telefono"
                    required={true}
                />
                <input
                    type="password"
                    name="clave"
                    placeholder="Clave"
                    required={true}
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block btn-large"
                >
                    Registrarse
                </button>
            </form>
        </div>
    );
}
