import Link from "next/link";

function Nav() {
    return (
        <div >
            <ul className="flex justify-center containt-center flex-row">
                <Link href={"/"}>
                    <li className="p-2">Home</li>
                </Link>
                <Link href={"../login"}>
                    <li className="p-2">Login</li>
                </Link>
                <Link href={"../registro"}>
                    <li className="p-2">Registro</li>
                </Link>
                <Link href={"../reservaciones"}>
                    <li className="p-2"s>Reservaciones</li>
                </Link>
            </ul>
        </div>
    );
}

export { Nav };
