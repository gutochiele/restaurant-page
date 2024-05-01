const header = document.querySelector('header')
const nav = document.querySelector('nav')
const homeBtn = document.getElementById('home')
const menuBtn = document.getElementById('menu')
const contactBtn = document.getElementById('contact')

function loadPage(){

    function addTittle(){
        let h2 = document.createElement('h2')
        let h2Content = document.createTextNode("Piccola Osteria Vicentina")
        h2.appendChild(h2Content)
        header.insertBefore(h2, nav)
    }

    function addFooter(){
        let footer = document.createElement('div')
        footer.classList.add('footer')
        let footerText = document.createTextNode('The Odin Project @ 2024')
        footer.appendChild(footerText)
        document.body.appendChild(footer)
    }

    function btnTabs(){
        homeBtn.classList.add('tablinks')
        menuBtn.classList.add('tablinks')
        contactBtn.classList.add('tablinks')
    }


addFooter()
addTittle()
btnTabs()

}

export { loadPage }

