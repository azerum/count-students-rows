/**
 * @param {number} gg 
 * @param {number} gb 
 * @param {number} bg 
 * @param {number} bb 
 * @param {number} iterationsCount 
 * @returns {number}
 */
function countLoop(gg, gb, bg, bb, iterationsCount) {
    for (let i = 0; i < iterationsCount; ++i) {
        let GG = gg;
        let GB = gb;
        let BG = bg;
        let BB = bb;

        const totalSum = GG + GB + BG + BB;

        gg = totalSum;
        gb = totalSum;

        bg = GG + GB + BG;
        bb = GG + BG;
    }

    return gg + gb + bg + bb;
}

/**
 * @param {number} studentsCount 
 * @returns {number}
 */
function countCombinations(studentsCount) {
    if (studentsCount === 0) {
        return 0;
    }

    if (studentsCount === 1) {
        return 2;
    }

    const iterationsCount = Math.floor(studentsCount / 2) - 1;

    if (studentsCount % 2 === 0) {
        return countLoop(1, 1, 1, 1, iterationsCount);
    }
    else {
        return countLoop(1, 1, 1, 0, iterationsCount) + countLoop(1, 1, 1, 1, iterationsCount);
    }
}

const repl = require('./repl');
repl(countCombinations);
