
const content = document.querySelector('.content')

function homeTab(){
    let h2 = document.createElement('h2')
    let h2Content = document.createTextNode("homeTab")
    h2.appendChild(h2Content)
    h2.classList.add('tabcontent')
    h2.setAttribute('id', 'homepg')
    content.appendChild(h2)
}

export { homeTab }

