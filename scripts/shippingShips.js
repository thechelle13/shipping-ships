import {getShippingShips } from "./database.js"

const shippingShips = getShippingShips()
// debugger
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        
        if(itemClicked.dataset.type === "shippingShips") {
            const shippingShipId = itemClicked.dataset.shippingforeignkey
            let shipCounter = 0
            const shippingShips =getShippingShips()
            for (const shippingShip of shippingShips) {
                if (parseInt(shippingShipId) === shippingShip.shippingShipId) {
                    shipCounter++
                }
            }
            window.alert(`This Carrier is carrying ${shipCounter} shipping ships.`)
        }
        
    }
)
export const ShippingShipList = () => {
    const ships = getShippingShips()
    let shipsHTML = ""
    for (const shippingShip of shippingShips) {
        shipsHTML += `<ul>`
        shipsHTML += `<li data-id=${shippingShip.id} data-type="shippingShips">${shippingShip.name}</li>`
        shipsHTML += `</ul>`
    }
    return shipsHTML
}