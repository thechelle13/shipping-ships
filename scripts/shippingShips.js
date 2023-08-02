import { getHaulingShips, getShippingShips } from "./database.js"

const shippingShips = getShippingShips()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.dataset.type === "hauler") {
            const haulerId = itemClicked.dataset.haulerId
            let shipCounter = 0
            const shippingShips =getShippingShips()
            for (const ship of shippingShips) {
                if (parseInt(haulerId) === ship.haulerId) {
                    shipCounter++
                }
            }
        }
                    window.alert(`This hauler is carrying ${shipCounter} shipping ships.`)
    }
)
export const ShippingShipList = () => {
    const ships = getHaulingShips()
    let shipsHTML = ""
    for (const ship of ships) {
        // Convert each dock object to an <li> and append to the docksHTML string
        shipsHTML += `<ul>`
        shipsHTML += `<li data-type="hauler" data-id=${ship.id}>${ship.name}</li>`
    shipsHTML += "</ul>"
    }
    return shipsHTML
}