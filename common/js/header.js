import menuHandler from "./menuHandler.js"

console.log("header")

// menu handler section
menuHandler.generateMenu()

window.addEventListener("resize", (e)=>{
    menuHandler.checkForChange()
})

//