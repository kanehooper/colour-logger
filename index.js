import chalk from 'chalk'

const log = (str, ...args) => {
    console.log(chalk.green(str, ...args))
}

const error = (str, ...args) => {
    console.error(chalk.red(str, ...args))
}

const warning = (str, ...args) => {
    console.warn(chalk.yellow(str, ...args))
}

const assert = (str, ...arg) => {
    console.assert(chalk.red(str, ...args))
}

const clear = () => {
    console.clear()
}

const objectDirOptions = {
    showHidden: true,
    depth: null,
    colors: true
}


const objectDir = (obj) => {
    console.dir(obj, objectDirOptions)
}

const info = (str, ...args) => {
    console.info(chalk.blue(str, ...args))
}

const startTimer = (label = 'default') => {
    console.time(label)
    console.log(chalk.magenta('Timer started: ', label))
}

const endTimer = (label = 'default') => {
    console.timeEnd(label)
}

startTimer('Hi')
endTimer('Hi')
export {log, error, warning, assert, clear, objectDir, info, startTimer}
