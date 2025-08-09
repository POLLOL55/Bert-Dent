const subPages = {}

function addSubPage(link, content, id){
    subPages[id] = {link: link, content: content, id: id}
    //console.log(subPages)
}

addSubPage("./o-nas", "O nas", "o-nas")
addSubPage("./kontakt", "Kontakt", "kontakt")
addSubPage("./cennik", "Cennki", "cennik")
addSubPage("./dla-dzieci", "Dla dzieci", "dla-dzieci")
addSubPage("./oferta", "Oferta", "oferta")
addSubPage("./wspolpraca", "Współpraca", "wspolpraca")
addSubPage("./niezbednik-pacjenta", "Niezbędnik Pacjęta", "niezbednik-pacjenta")
addSubPage("./rodo", "Rodo", "rodo")
addSubPage("./galeria-zdjenc", "Zdjęncia", "galeria-zdjec")

export default {
    getItem(id, menuClass) {
        const link = subPages[id].link
        const content = subPages[id].content
        return `<span id="${id}" class="${menuClass}">${content}</span>`
    },
    subPages,
}