//import { getDocks, getHaulingShips, getShippingShips } from "./database.js";
import { ShippingShipList  } from "./shippingShips.js";
import { HaulerList } from "./haulers.js";
import { DockList } from "./dockList.js";

const applicationHTML = `
<h1>Shipping Ship Tracker</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Docks</h2>
        ${DockList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Haulers</h2>
        ${HaulerList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Shipping Ships</h2>
        ${ShippingShipList()}
    </section>
</article>


`
const mainContainer = document.querySelector("#container")
mainContainer.innerHTML = applicationHTML