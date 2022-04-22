const States = {
    EvenNumberOfStudents: 0,
    OddNumberOfStudents: 1,
    G: 2,
    B: 3,
    GG: 4,
    GB: 5,
    BG: 6,
    BB: 7,
};

const transitions = new Map();

const allStates = [States.GG, States.GB, States.BG, States.BB];
const allStatesExceptBB = [States.GG, States.GB, States.BG];

transitions.set(States.EvenNumberOfStudents, allStates);
transitions.set(States.OddNumberOfStudents, [States.G, States.B]);

transitions.set(States.G, allStates);
transitions.set(States.B, allStatesExceptBB)

transitions.set(States.GG, allStates);
transitions.set(States.GB, allStatesExceptBB);
transitions.set(States.BG, allStates);
transitions.set(States.BB, [States.GG, States.GB]);

/**
 * @param {number} studentsCount 
 * @returns {number}
 */
function countCombinations(studentsCount) {
    let transitionsCount = Math.floor(studentsCount / 2);
    let rootState;

    if (studentsCount % 2 === 0) {
        rootState = States.EvenNumberOfStudents;
    }
    else {
        rootState = States.OddNumberOfStudents;
        ++transitionsCount;
    }

    return countCombinationsStartingFrom(rootState, transitionsCount);
}

/**
 * @param {number} transitionsCount
 * @param {number} depth 
 * @returns {number}
 */
function countCombinationsStartingFrom(rootState, transitionsCount) {
    let currentTrees = [rootState];
    let transitionsMade = 0;

    while (transitionsMade < transitionsCount) {
        currentTrees = currentTrees.flatMap(state => transitions.get(state));
        ++transitionsMade;
    }

    return currentTrees.length;
}

const repl = require('./repl');
repl(countCombinations);
