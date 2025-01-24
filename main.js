function showStars(n) {
    console.log('*'.repeat(n));
}

function showRectangle(height, length) {
    for (let i = 0; i < height; i++) {
        showStars(length);
    }
}

function addDeco(stars) {
    let decoratedLine = '';
    for (let i = 0; i < stars.length; i++) {
        if (stars[i] === '*') {
            if (Math.random() > 0.8) {
                decoratedLine += (Math.random() > 0.5) ? 'o' : '+';
            } else {
                decoratedLine += '*';
            }
        } else {
            decoratedLine += stars[i];
        }
    }
    return decoratedLine;
}

function showStage(height, top_offset, space) {
    const alignSpace = ' '.repeat(space);
    for (let i = top_offset + 1; i <= height; i++) {
        const spacesLeft = ' '.repeat(height - i);
        const starsLeft = '*'.repeat(i);
        const starsRight = '*'.repeat(i);

        const line = addDeco(starsLeft + '|' + starsRight);

        console.log(alignSpace + spacesLeft + '/' + line + '\\');
    }
}

function showFirtree(stage, height_stage) {
    let top_offset = 0;
    let espacement = stage - 1;

    console.log(' '.repeat(stage) + '+');

    for (let i = 1; i <= stage; i++) {
        showStage(height_stage, top_offset, espacement);
        top_offset += 1;
        espacement -= 1;
    }

    const troncLargeur = (height_stage * 2) - 1;
    showRectangle(3, troncLargeur);
}

console.log("Sapin complet avec 3 étages et décorations:");
showFirtree(3, 3);
