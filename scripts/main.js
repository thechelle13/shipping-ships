import { getDocks, getHaulingShips, getShippingShips } from "./database.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ships</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Docks with Service</h2>
        ${getDocks()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Cargo Haulers</h2>
        ${getHaulingShips()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Ships that Ship Ships</h2>
        ${getShippingShips()}
    </section>
</article>

<article class="assignments">
    <h2>Current Assignments</h2>
    
</article>
`

mainContainer.innerHTML = applicationHTML