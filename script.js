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

function showRightTriangle(n) {
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i) + '\\');
    }
}

function showLeftTriangle(n) {
    for (let i = 1; i <= n; i++) {
      const stars = '*'.repeat(i);
      const spaces = ' '.repeat(n - i);
      console.log(spaces + '/' + stars);
    }
}
  
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

function showFirtree(stage, height_stage) {
    let top_offset = 0;
    let espacement = stage - 1;

    for (let i = 1; i <= stage; i++) {
        showStage(height_stage, top_offset, espacement);

        top_offset += 1;
        espacement -= 1;
        }
}

showFirtree(3, 3);

function showStage(height, top_offset, space) {
    const alignSpace = ' '.repeat(space)
    for (let i = top_offset + 1; i <= height; i++) {
        const spacesLeft = ' '.repeat(height - i);
        const starsLeft = '*'.repeat(i);
        const starsRight = '*'.repeat(i);

        console.log(alignSpace + spacesLeft + '/' + starsLeft + '|' + starsRight + '\\');
    }
}

console.log("showStage(3, 0, 3):");
showStage(3, 0, 3);

console.log("\nshowStage(3, 1, 2):");
showStage(3, 1, 2);

console.log("\nshowStage(3, 2, 1):");
showStage(3, 2, 1);