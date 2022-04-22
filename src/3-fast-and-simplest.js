/**
 * @param {number} studentsCount 
 * @returns {number}
 */
function countStudentsCombinations(studentsCount) {
    if (studentsCount === 0) {
        return 0;
    }

    return countLoop(1, 0, 0, studentsCount) + countLoop(0, 1, 0, studentsCount);
}

/**
 * @param {number} g
 * @param {number} b1
 * @param {number} b2
 * @param {number} studentsCount 
 * @returns {number}
 */
function countLoop(g, b1, b2, studentsCount) {
    for (let i = 0; i < studentsCount - 1; ++i) {
        let G = g;
        let B1 = b1;
        let B2 = b2;

        g = G + B1 + B2;
        b1 = G;
        b2 = B1;
    }

    return g + b1 + b2;
}

const repl = require('./repl');
repl(countStudentsCombinations);
