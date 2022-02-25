

 
let bottone = document.getElementById('add_btn');
bottone.addEventListener("click", righe )
function righe() {
  let aggiunta = document.getElementById('task_txt').value;
  let parole = document.getElementById('task_list_html')

  let li = document.createElement('li')
  li.innerHTML = aggiunta
  li.classList.add('item')

  parole.prepend(li)

  //libera l'imput 
  document.getElementById('task_txt').value = ' '

  //cancella il coso scritto 
  li.addEventListener('click', rimozione )
  function rimozione(){
    li.remove()
  }
   salvaDatiNelDb(aggiunta)
}




 //con questa funzione salvo e aggiorno i dati in localstorage
 function salvaDatiNelDb(aggiunta){
   
   //salvataggio dati
        /*versione estesa  
        if( localStorage.getItem('elementiSalvati') == null ){
            var db = [aggiunta]
        }else{
        var db = JSON.parse(localStorage.getItem('elementiSalvati'))
        db.push(aggiunta)
        }
         */
  
    
    var ls = localStorage.getItem('elementiSalvati') 

    var db = ls ? JSON.parse(ls) : []
    db.push(aggiunta)
    
    localStorage.setItem('elementiSalvati',JSON.stringify(db))
  }

//con questa funzione rimuovo un elemento da localstorage
function rimuoviElementodaDb(el){

    let ls = localStorage.getItem('elementiSalvati')
    let db = JSON.parse(ls)

    let indiceElemento = db.indexOf(el.innerHTML)

    db.splice(indiceElemento,1)

    localStorage.setItem('elementiSalvati',JSON.stringify(db))
}

/* 
function creaHtml(){
  var elementiSalvati = JSON.parse(localStorage.getItem('elementiSalvati'))

  elementiSalvati.forEach(function (elementoo) {
    var li = document.createElement('li')

    li.innerHTML = elementoo
    li.classList.add('item')

    li.addEventListener('click', function(){
      li.remove()
      rimuoviElementodaDb()
    })
  })
}

creaHtml()
*/