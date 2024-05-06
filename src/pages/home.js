
const content = document.querySelector('.content')

function homeTab(){

    let div = document.createElement('div')
    div.innerHTML += "balbalbalbal"
    div.classList.add('tabcontent')
    div.setAttribute('id', 'homepg')
    content.appendChild(div)
    
}




export { homeTab }
