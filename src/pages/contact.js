
const content = document.querySelector('.content')

function contactTab(){
    let h2 = document.createElement('h2')
    let h2Content = document.createTextNode("contactTab")
    h2.appendChild(h2Content)
    h2.classList.add('tabcontent')
    h2.setAttribute('id', 'contactpg')
    content.appendChild(h2)
}

export { contactTab }

