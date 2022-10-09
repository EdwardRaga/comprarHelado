let montoDisponible = (prompt("Ingresar monto"))
//1.5

if (montoDisponible >= 0.66 && montoDisponible < 1) {
    let vuelto = (montoDisponible - 0.66)
    alert("Palito de helado de agua " + "su vuelto es " + vuelto)
}
else if (montoDisponible >= 1 && montoDisponible < 1.6) {
    let vuelto = (montoDisponible - 1)
    alert("Palito de helado de crema " + "su vuelto es " + vuelto)
}
else if (montoDisponible >= 1.6 && montoDisponible < 1.7) {
    let vuelto = (montoDisponible - 1.6)
    alert("Bombón de helado marca heladix " + "su vuelto es " + vuelto)
}
else if (montoDisponible >= 1.7 && montoDisponible < 1.8) {
    let vuelto = (montoDisponible - 1.7)
    alert("Bombón de helado marca heladovich " + "su vuelto es " + vuelto)
}
else if (montoDisponible >= 1.8 && montoDisponible < 2.9) {
    let vuelto = (montoDisponible - 1.8)
    alert("Bombón de helado marca helardo " + "su vuelto es " + vuelto)
}
else if (montoDisponible >= 2.9) {
    let vuelto = (montoDisponible - 2.9)
    alert("Helado disponible para ti: Potecito de helado con confites & " + "Pote de 1/4 KG " + "su vuelto es " + vuelto)

}





