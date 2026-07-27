function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("register here");
            resolve();
        }, 5000);
    });
}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login here");
            resolve();
        }, 10000);
    });
}

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("fetch data");
            resolve();
        }, 6000);
    });
}

function displayData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("view user data");
            resolve();
        }, 8000);
    });
}

// Promise Chaining
register()
    .then(login)
    .then(getData)
    .then(displayData)
    .catch((err) => {
        console.log("Error:", err);
    });

console.log("Call another function");