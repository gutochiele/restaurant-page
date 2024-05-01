import { menuTab } from "./menu"
import { homeTab } from "./home"
import { contactTab } from "./contact"

const header = document.querySelector('header')
const nav = document.querySelector('nav')
const btns = document.querySelectorAll('button')

function loadPage(){

    function addTittle(){
        let h2 = document.createElement('h2')
        let h2Content = document.createTextNode("Piccola Osteria Vicentina")
        h2.appendChild(h2Content)
        header.insertBefore(h2, nav)

    }
    addTittle()

    function addFooter(){
        let footer = document.createElement('div')
        footer.classList.add('footer')
        let footerText = document.createTextNode('The Odin Project @ 2024')
        footer.appendChild(footerText)
        document.body.appendChild(footer)
    }
    addFooter()

        homeTab()
        menuTab()
        contactTab()

    function openTab(e, btnId){

         let i, tabcontent, tablinks;
         btnId = this.id
         let homePage = document.getElementById('homepg')
         let menuPage = document.getElementById('menupg')
         let contactPage = document.getElementById('contactpg')

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        e.currentTarget.className += " active";

        if(btnId == 'home'){
            homePage.style.display = "block";
        } else if(btnId == 'menu'){
            menuPage.style.display = "block";
        } else if (btnId == 'contact'){
            contactPage.style.display = "block";
        }
        console.log(e, btnId)
    }

    btns.forEach(btn => btn.classList.add('tablinks'));
    btns.forEach(btn => btn.addEventListener('click', openTab))

}

export { loadPage }

