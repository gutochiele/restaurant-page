
const content = document.querySelector('.content')

function menuTab(){

    let div = document.createElement('div')
    let divContent = document.createTextNode("menuTab")
    div.appendChild(divContent)
    div.classList.add('tabcontent')
    div.setAttribute('id', 'menupg')
    content.appendChild(div)
    
}

export { menuTab }

