import { getHaulingShips } from "./database.js"

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


export const HaulerList = () => {
    const haulers = getHaulingShips()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        // Convert each dock object to an <li> and append to the docksHTML string
    }

    haulersHTML += "</ul>"

    return haulersHTML
}