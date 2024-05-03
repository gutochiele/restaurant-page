import { menuTab } from "./menu"
import { homeTab } from "./home"
import { contactTab } from "./contact"


const header = document.querySelector('header')
const nav = document.querySelector('nav')
const btns = document.querySelectorAll('button')

function loadPage(){

    function addTittle(){
        let h1 = document.createElement('h1')
        let h1Content = document.createTextNode("La Osteria Vicentina")
        h1.appendChild(h1Content)
        header.insertBefore(h1, nav)
    }
    
    function addFooter(){
        let footer = document.createElement('div')
        footer.classList.add('footer')
        let footerText = document.createTextNode('The Odin Project @ 2024')
        footer.appendChild(footerText)
        document.body.appendChild(footer)
    }

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
    }

    btns.forEach(btn => btn.classList.add('tablinks'));
    btns.forEach(btn => btn.addEventListener('click', openTab))

    addTittle()
    addFooter()
    homeTab()
    menuTab()
    contactTab()
}

export { loadPage }

