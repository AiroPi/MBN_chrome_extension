let tableau = document.querySelectorAll("#releve-eleve > table > tbody.yui-dt-data > tr");
let notes = [];

for (const row of tableau) {
    let note = row.querySelector("td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").textContent;
    note = parseFloat(note.replace(",", "."))
    if (note) notes.push(note);
}

function arrondi(nombre, decimal) { 
    const nb = Math.pow(10, decimal)
    return Math.round(nombre * nb)/nb
}

const average = (array) => arrondi(array.reduce((a, b) => a + b) / array.length, 1);

let clone = tableau[0].cloneNode(true);
clone.id = "average";

clone.querySelector("td.yui-dt0-col-moyenneEleve.yui-dt-col-moyenneEleve.yui-dt-sortable > div").textContent = average(notes);
clone.querySelector("td.yui-dt0-col-matiere.yui-dt-col-matiere.yui-dt-sortable.yui-dt-first > div > div > div.bulletin-matiere-libelle.ellipse.fw-700").textContent = "MOYENNE GENERAL";
clone.querySelector("td.yui-dt0-col-matiere.yui-dt-col-matiere.yui-dt-sortable.yui-dt-first > div > div > div.releve-matiere-professeur.f-left.c-both.ellipse").textContent = "Eleve";


let row_elements = clone.querySelectorAll('td')
for (let i = 2; i < row_elements.length; i++) {
    row_elements[i].remove()
}

document.querySelector("#releve-eleve > table > tbody.yui-dt-data").after(clone)
