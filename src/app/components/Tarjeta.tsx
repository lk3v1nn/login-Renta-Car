interface Datos {
    fechaInicio: string;
    fechaFin: string;
    ubicacion: string;
}

function Tarjeta(pronp: { Datos: Datos[] }) {
    if (pronp.Datos.length == 0) {
        return <p>No tiene reservas pendientes</p>;
    }
    return (
        <>
            {pronp.Datos.map((d) => {
                return (
                    <div className="flex align-items-center " key={d.usuario}>
                        <div className="d-flex max-w-lg mx-auto m-4 justify-content-center">
                            <div className="bg-white rounded-lg border border-gray-200 w-48 text-gray-900 text-sm font-medium">
                                <a
                                    aria-current="true"
                                    className="block px-4 py-2 border-b border-gray-200 w-full rounded-t-lg bg-blue-700 text-white cursor-pointer"
                                >
                                    Reservacion
                                </a>
                                <a className="block px-4 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer">
                                    {d.fechaInicio}
                                </a>
                                <a className="block px-4 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer">
                                    {d.fechaFin}
                                </a>
                                <a className="block px-4 py-2 border-b border-gray-200 w-full rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer">
                                    {d.ubicacion}
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export { Tarjeta };
