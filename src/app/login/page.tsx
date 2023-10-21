"use client"
import React, { FormEvent, useState } from "react";
import axios, {AxiosError} from 'axios'
import "@/styles/Login.css";
import { useRouter } from "next/navigation";
import { Alert } from "../components/alert";

const axiosInstance = axios.create({
    withCredentials: true,
  });

export default function Login() {
    const [error, setError] = React.useState('');
    const [correo, setCorreo] = useState("");
    const [clave, setClave] = useState("");
    const route = useRouter();

    const manejadorSumit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {email:correo, clave}

        try {
            const res = await axiosInstance.post('http://localhost:5000/api/login', userData)
            console.log(res)
            route.push('../reservaciones')
        } catch (error) {
            if (error instanceof AxiosError) {
            setError(error.response?.data.Error);
        }

        }
    }

    return (
        <div className="login">
            {error && <Alert mensaje = {error}/>}
            <form onSubmit={manejadorSumit}>
                <input
                    type="text"
                    name="correo"
                    placeholder="Correo"
                    required={true}
                    onChange={(e) => {
                        setCorreo(e.target.value);
                    }}
                />
                <input
                    type="password"
                    name="clave"
                    placeholder="Clave"
                    required={true}
                    onChange={(e) => {
                        setClave(e.target.value);
                    }}
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block btn-large"
                >
                    Iniciar Sesion
                </button>
                <p className="text-center m-1">ó</p>
                <button
                    type="button"
                    className="btn btn-primary btn-block btn-large"
                    onClick={() => {route.push('../registro')}}
                >
                    Registrarse
                </button>
            </form>
        </div>
    )
}
