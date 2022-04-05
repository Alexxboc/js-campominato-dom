/* 

L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:

- con difficoltà 1 => tra 1 e 100
- con difficoltà 2 => tra 1 e 81
- con difficoltà 3 => tra 1 e 49

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

*/

// Seleziono il bottone nella DOM dal quale estrapolare il livello di difficoltà
const button = document.getElementById('button');
// console.log(button);
// Creo un evento di ascolto dove il giocatore selezionerà il livello di difficoltà
button.addEventListener('click', function(){
    // console.log('click');
    // Estrapolo il livello scelto dal giocatore
    const level = document.getElementById('level').value;
    // console.log(level);
    // Dichiaro due variabili per il numero delle celle e il numero delle colonne
    let number_of_cells, number_of_cols;
    // creo le condizioni per la disposizione della griglia in ogni livello
    switch (level) {
        case 'easy':
          number_of_cells = 100;
          number_of_cols = 10; 
          break;
        case 'medium':
          number_of_cells = 81;
          number_of_cols = 9;
          break;
        case 'hard':
          number_of_cells = 49;
          number_of_cols = 7;
          break;
      }
    // console.log(number_of_cells, number_of_cols);
    generateGrid(number_of_cells, number_of_cols)
    addActiveStyle('.cell','selected')
})

// Creo una funzione che generi la griglia
function generateGrid (number_of_cells, number_of_cols) {
    // Dichiaro una variabile che selezioni l'area di gioco
    const gameArea = document.querySelector('.cells')
    // Pulisco l'area di gioco
    gameArea.innerHTML = ''
    for(let i = 1; i <= number_of_cells; i++){
        const cell = document.createElement('div')
        // Appendo alla cella il numero progressivo
        cell.append(i)
        cell.classList.add('cell')
        // Dimensiono la larghezza della cella
        cell.style.width = `calc(100% / ${number_of_cols})`
        // Appendo la cella all'area di gioco
        gameArea.append(cell)
    }
}

// Creo una funzione per cambiare lo stile delle caselle al click
function addActiveStyle (selector, style_class) {
    // Seleziono tutti gli elememnti della DOM da modificare
    const cells = document.querySelectorAll(selector);
    // Creo un ciclo for per tutti gli elementi
    for (let i = 0; i < cells.length; i++) {
        const cellsElement = cells[i];
        // Creo un evento al click
        cellsElement.addEventListener('click', function () {
            //console.log(this);
            // Coloro la casella 
            this.classList.add(style_class);
          });
        
    }
}



  

  
