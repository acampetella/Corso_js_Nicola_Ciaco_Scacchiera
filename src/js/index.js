/*
    Scacchiera costruita dinamicamente
    modificando i valori delle costanti rows, columns e squareSide
    si possono creare scacchiere con numero di righe, numero di colonne
    e dimensioni in pixel a piacere
*/

const rows = 8;
const columns = 8;
const squareSide = 80;
let newRowTag;
let newDivTag;

const h1Tag = document.querySelector("h1");
h1Tag.textContent = `Crea una scacchiera (${rows}X${columns}), alternando quadrati bianchi e neri`;
const divContainerTag = document.querySelector("div.chessboard");
divContainerTag.style.width = `${squareSide * columns}px`;
for(let i = 1; i <= rows; i++) {
    newRowTag = document.createElement("div");
    newRowTag.classList.add("row");
    for(j = 1; j <= columns; j++) {
        newDivTag = document.createElement("div");
        newDivTag.classList.add("square");
        newDivTag.style.width = `${squareSide}px`;
        newDivTag.style.height = `${squareSide}px`;
        if (i % 2 === 0) {
            if (j % 2 === 0) {
                newDivTag.classList.add("black");
            } else {
                newDivTag.classList.add("white");
            }
        } else {
            if (j % 2 === 0) {
                newDivTag.classList.add("white");
            } else {
                newDivTag.classList.add("black");
            }
        }
        newRowTag.append(newDivTag);
    }
    divContainerTag.append(newRowTag);
}