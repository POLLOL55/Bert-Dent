import itemModel from "./MenuItemModel.js"

const spaceForItemContent = 120 // px
const safetyMargin = 10 //px
const galleryMenu = document.getElementById("gallery-menu")
const listMenu = document.getElementById("list-menu")

function changeParrent(element, newParrent) {
    newParrent.appendChild(element)
}

function setGalleryMenuMaxWidth() {
    //console.log(Object.keys(itemModel.subPages).length)
    //console.log(galleryMenu)
    document.querySelector(":root").style.setProperty('--gallery-menu-max-width', `${Object.keys(itemModel.subPages).length * spaceForItemContent + safetyMargin}px`)
}

function handleItems(){ //handler for the items transfer
    //console.log(Math.floor(galleryMenu.clientWidth/120))
    //console.log(Math.floor(galleryMenu.clientWidth))
    if(galleryMenu.clientWidth < 360){ //hanldes the case where teh window is too small for more than 2 items therefore we want all items in list menu
        console.log("why?")
        while (galleryMenu.children.length > 0) {
            console.log(galleryMenu.children.length)
            changeParrent(galleryMenu.children[galleryMenu.children.length-1], listMenu)
        }
        return //so the later code doesnt execute, stop the items from going back to teh gallery menu
    }
    while (galleryMenu.children.length > Math.floor(galleryMenu.clientWidth/spaceForItemContent)) { //handles the transfer of items to list menu, when there is too little space in gallery menu
        changeParrent(galleryMenu.children[galleryMenu.children.length-1], listMenu)
    }
    while (galleryMenu.children.length < Math.floor(galleryMenu.clientWidth/spaceForItemContent)) { //handles the transfer of items to gallery menu, when there is plaze for them in gallery menu
        changeParrent(listMenu.children[listMenu.children.length-1], galleryMenu)
    }
}

export default {
    generateMenu() {
        //console.log("gen menu")
        setGalleryMenuMaxWidth()
        for(let i in itemModel.subPages) {
            //console.log(i, itemModel.subPages[i])
            galleryMenu.innerHTML += itemModel.getItem(i, "gallery-menu-item")
        }
        handleItems()
    },
    checkForChange(){
        //console.log("cheching for change")
        handleItems()
    },
}