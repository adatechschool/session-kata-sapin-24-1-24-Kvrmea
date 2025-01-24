/* function afficherPointesapin(top) {
    for (let i = 1; i <= top; i++) {
        const space = ' '.repeat(top - i);
        const stars = '*'.repeat(2 * i - 1);
        console.log(space + stars);
    }
}

afficherPointesapin(4); */

function showStars(n) {
    console.log('*'.repeat(n));
}

function showRectangle(height, length) {
    for (let i = 0; i < height; i++) {
        showStars(length);
    }
}

// showRectangle(5, 5);

function showRightTriangle(n) {
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i) + '\\');
    }
}

showRightTriangle(5);


function showLeftTriangle(n) {
    for (let i = 1; i <= n; i++) {
      const stars = '*'.repeat(i);
      const spaces = ' '.repeat(n - i);
      console.log(spaces + '/' + stars);
    }
}
  
showLeftTriangle(5);
  
function showTopFirtree(top) {
    console.log(' '.repeat(top + 1) + '+');
    
    for (let i = 1; i <= top; i++) {
        const starsLeft = '*'.repeat(i);
        const spacesLeft = ' '.repeat(top - i);
        const starsRight = '*'.repeat(i);
        
        console.log(spacesLeft + '/' + starsLeft + '|' + starsRight + '\\');
    }
    
    console.log(' '.repeat(top + 1) + '|');
}

showTopFirtree(5);
