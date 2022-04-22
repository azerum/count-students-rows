/**
 * @param {number} studentsCount 
 * @returns {number}
 */
function countCombinations(studentsCount) {
    if (studentsCount === 0) {
        return 0;
    }

    return doCount(0, 0);

    /**
     * @param {number} boysSteak 
     * @param {number} currentStudentsCount 
     * @returns {number}
     */
    function doCount(boysSteak, currentStudentsCount) {
        if (currentStudentsCount === studentsCount) {
            return 1;
        }
        
        const countWithBoy = (boysSteak !== 2) 
            ? doCount(boysSteak + 1, currentStudentsCount + 1)
            : 0;

        const countWithGirl = doCount(0, currentStudentsCount + 1);

        return countWithBoy + countWithGirl;
    }
}

const repl = require('./repl');
repl(countCombinations);
