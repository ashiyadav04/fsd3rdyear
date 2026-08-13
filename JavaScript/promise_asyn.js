function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Register here");
            resolve();
        }, 5000);
    });
}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Login here");
            resolve();
        }, 10000);
    });
}

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetch data");
            resolve();
        }, 6000);
    });
}

function displayData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("View user data");
            resolve();
        }, 8000);
    });
}

// Async function
async function start() {
    try {
        await register();
        await login();
        await getData();
        await displayData();

        console.log("All tasks completed.");
    } catch (err) {
        console.log("Error:", err);
    }
}

start();

console.log("Call another function");