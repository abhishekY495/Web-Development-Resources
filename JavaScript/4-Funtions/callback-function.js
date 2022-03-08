const greet8 = (user='User') => {
    console.log(`Hello ${user}`);
}

const userPrompt = (callback) => {
    // let name = prompt('Enter your name');
    callback(name);
    
}

userPrompt(greet8)

