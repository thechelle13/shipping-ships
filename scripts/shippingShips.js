import { getShippingShips } from "./database.js"


export const ShippingShipList = () => {
    const shippingShips = getShippingShips()

    let shippingShipsHTML = "<ul>"

    for (const ship of shippingShips) {
        // Convert each dock object to an <li> and append to the docksHTML string
    }
    shippingShipsHTML += `<li>${ship.name}</li>`
    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}