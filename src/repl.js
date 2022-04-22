const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function repl(f) {
    rl.question('> ', answer => {
        if (answer === 'clear') {
            console.clear();
        }
        else {
            const number = Number.parseInt(answer, 10);
            console.log(f(number));
        }

        repl(f);
    });
}

module.exports = repl;
