// scripts for index.html only
// useing ES6+ syntax to check if babel works

const greet = (name: string): string => {
    return `Hello, ${name}!`
}

const user = 'Home Page'
console.log(greet(user))

const promiseExample = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved!')
    }, 1000)
})

promiseExample.then((message) => {
    console.log(message)
})