
const content = document.querySelector('.content')

function homeTab(){

    let div = document.createElement('div')
    let divContent = document.createTextNode("homeTab")
    div.appendChild(divContent)
    div.classList.add('tabcontent')
    div.setAttribute('id', 'homepg')
    content.appendChild(div)
    
}

export { homeTab }

