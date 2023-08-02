const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [{id:1, name:"The Stewie"}, {id:2, name:"The Lois"}, {id:3, name:"The Griffin"}, {id:4, name:"The Giddie, Giddie"}, {id:5, name:"The Ninja"}], 
    
    shippingShips: [{id:1, name:"The Marge"}, {id:2, name:"The Bart"}, {id: 3, name:"The Lisa"}, {id:4, name:"The Homer"}, {id:5, name:"The Santa's Helper"} ]
}

export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}

export const getHaulingShips = () => {
    return database.haulers.map(hauler => ({...hauler}))
}

export const getShippingShips = () => {
    return database.shippingShips.map(shippingShip => ({...shippingShip}))
}

