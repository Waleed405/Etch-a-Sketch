const grid = document.querySelector('#grids');
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', function(){
    reset();
})
generateGrid(grid, 16);
registerEvents();

function generateGrid(grid, dimension) {
    for(let i = 0; i < dimension**2; i++) {
        let box = document.createElement('div');
        box.classList.add('box');

        grid.appendChild(box);
    }
}

function registerEvents() {
    grid.addEventListener('mouseover', function(e) {
        if(e.target.matches('.box')){
            e.target.classList.add('active')
        }
    });
}

function reset() {
    document.querySelectorAll('.active').forEach(box => {
        box.classList.remove('active')
    })
}