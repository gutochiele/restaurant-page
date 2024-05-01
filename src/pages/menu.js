
const content = document.querySelector('.content')

function menuTab(){
    let h2 = document.createElement('h2')
    let h2Content = document.createTextNode("menuTab")
    h2.appendChild(h2Content)
    h2.classList.add('tabcontent')
    content.appendChild(h2)
}

export { menuTab }

