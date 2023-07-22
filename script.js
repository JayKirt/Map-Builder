document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const colorPicker = document.getElementById('colorPicker');
    let isDrawing = false;
  
    function createSquare() {
      const square = document.createElement('div');
      square.classList.add('square');
  
      square.addEventListener('mousedown', () => {
        isDrawing = true;
        square.style.backgroundColor = colorPicker.value;
      });
  
      square.addEventListener('mouseover', () => {
        if (isDrawing) {
          square.style.backgroundColor = colorPicker.value;
        }
      });
  
      square.addEventListener('mouseup', () => {
        isDrawing = false;
      });
  
      return square;
    }
  
    function createGrid(rows, cols) {
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const square = createSquare();
          grid.appendChild(square);
        }
      }
    }
  
    createGrid(20, 20); // You can adjust the number of rows and columns here
  });