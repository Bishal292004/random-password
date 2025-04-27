const passwordBox = document.getElementById("password");

//All possible alphabets and symbols which will be usd in password
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbol = "!@#$%^&*/?{}";
const allChar = upperCase + lowerCase + symbol;

//will generate a random integer between the given interval min - max
function randomIntLength(min, max){
    int = Math.floor(Math.random()* (max - min + 1) + min);
    return int;
}

// function to generate a random password
function createPassword(){
    
    const length = randomIntLength(6, 12);//will give a random length of the password
    password = "";// initializing the password

    //creating  a random combination of symbols and alphabets
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length>password.length){// if password length is not the desired, this will add more randon character
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    return password;
}

// function to display the randomly generated password in the input field
function showPassword(){
    const generatedPassword = createPassword();
    passwordBox.value = generatedPassword;//assigning the password value to the input field value
}

// to copy the generated password
function copyPassword(){
    passwordBox.select();
    document.execCommand('copy');
}