console.log("Initializing...");

let div = document.querySelector('#grids');

generateGrid(div, 16);

function generateGrid(div, dimension) {
    for(let i = 0; i < dimension**2; i++) {
        let box = document.createElement('div');
        box.id = 'box';

        div.appendChild(box);
    }

    console.log(dimension**2)
}
