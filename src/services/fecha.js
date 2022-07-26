//Funcion returnDate actual -2 dias para asegurar que las peticiones de las imagenes funcione
export const returnDate = () => {
    const fecha = [new Date().getDate() - 2, new Date().getMonth(), new Date().getFullYear()];
    const meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const resultado = (fecha[0] < 1 ? `${fecha[2]}-${meses[fecha[1]] - 1}-29` : `${fecha[2]}-${meses[fecha[1]]}-${fecha[0]}`);
    return resultado
}