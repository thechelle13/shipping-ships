import { getShippingShips } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a hauler list item clicked?

            // Get the id of the hauler clicked

            // Start a counter variable at 0

            // Iterate all of the shipping ships

                // Does the haulerId foreign key match the id?

                    // Increase the counter by 1

    }
)
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