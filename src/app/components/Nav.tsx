import Link from "next/link";

function Nav() {
    return (
        <ul>
            <Link href={"/"}>
                <li>Home</li>
            </Link>
            <Link href={"../login"}>
                <li>Login</li>
            </Link>
            <Link href={"../registro"}>
                <li>Registro</li>
            </Link>
            <Link href={"../reservaciones"}>
                <li>Reservaciones</li>
            </Link>
        </ul>
    );
}

export { Nav };
