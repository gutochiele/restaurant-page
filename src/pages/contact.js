
const content = document.querySelector('.content')

function contactTab(){

    let div = document.createElement('div')
    let divContent = document.createTextNode("contactTab")
    div.appendChild(divContent)
    div.classList.add('tabcontent')
    div.setAttribute('id', 'contactpg')
    content.appendChild(div)
    
}

export { contactTab }

