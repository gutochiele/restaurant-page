
const content = document.querySelector('.content')

function menuTab(){

    let div = document.createElement('div')
    div.innerHTML += `<h3>Antipasti <i>10€</i></h3>
    -Carpaccio di angus affumicato, rucola e grana<br>
    -Carpaccio di manzo, rucola fresca del nostro orto e grana padano DOP 60 mesi<br>
    -Baccalà mantecato, chips di polenta e caviale di salmone<br>
    -Baccalà bollito e mantecato all’olio servito con tacos di polenta fritta e uova di salmone<br>
    -Flan ai piselli e fonduta di asiago<br>
    -Flan ai piselli, fonduta di asiago del caseificio di bolzano vicentino<br>
    -Sgombro in saor di cipolla<br>
    -Filetto di sgombro fresco fritto con cipolla in saor tradizionale e polenta<br>
    <br>
    <h3>Primi <i>14€</i></h3>
    -Tortelli ripieni di coda alla vaccinara<br>
    -Tortelli fatti in casa ripieni alla coda di manzo az. al confin, serviti con sugo di cottura<br>
    -La nostra pasta al farro al pesto di ortiche, carletti e bruscandoli<br>
    -Pasta secca prodotta con il nostro farro, condita con pesto di primizie primaverili<br>
    -Risotto agli asparagi bianchi secondo tradizione (min. 2 persone)<br>
    -Riso carnaroli di grumolo delle abbadesse agli asparagi bianchi<br>
    -Pappardelle all’uovo ai piselli e guanciale<br>
    -Pappardelle all’uovo con crema di piselli e guanciale croccante<br><br>
    <h3>Secondi <i>19€</i></h3>
    -Gallo arrosto, carote e scalogno<br>
    -Coscia di pollo disossata, tostata, servita con carote e scalogno alla bourguignonne<br>
    -Fritto di avannotti con polenta, piatto tradizionale di bolzano vicentino<br>
    -Avannotti di trota DECO di bolzano vic.no serviti con polenta fritta<br>
    -Tagliata di manzo con patate al forno<br>
    -Tagli di manzo secondo disponibilità serviti con patate al forno aromatizzate<br>
    -Sfogliata di pasta sfoglia alle erbette primaverili e mezzano<br>
    -Tortino caldo di pasta sfoglia con erbette spontanee, radicchio di campo e mezzano<br><br>
    <h3>Dolci <i>6€</i> </h3>
    -Come un tiramisù<br
    -Nuvola di mascarpone, biscotto al cacao e salsa al caffè<br>
    -Panna cotta alla vaniglia e frutti di bosco<br
    -Panna cotta al forno aromatizzata alla vaniglia servita con frutti di bosco<br>
    -Piña colada (vegan)<br
    -Ananas grigliato sciroppato, salsa al cocco e gelatina al rum<br>
    -Torta caprese e caramello salato<br>
    -Torta morbida al cioccolato fondente servita con salsa al caramello salato<br>
    
    
    `
    div.classList.add('tabcontent')
    div.setAttribute('id', 'menupg')
    content.appendChild(div)
    
}

export { menuTab }

