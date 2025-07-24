const formElement = document.getElementById("form")
const outputElement = document.getElementById("output")
const inputElement = document.getElementById("number")
const convertButton = document.getElementById("convert-btn")

// inputElement.innerText = "";
// // has to be enabled when input changes but not when the input is the same
// inputElement.addEventListener("input", () => {
//     convertButton.disabled = false;
// })

formElement.addEventListener("submit", (e) => {
    let str = []; // reset the array

    e.preventDefault();
    const number = Number(inputElement.value);

    if (!number) {
        outputElement.classList.add('alert');
        outputElement.innerText = "Please enter a valid number."
        return
    } else if (number > 3999) {
        outputElement.classList.add('alert');
        outputElement.innerText = "Please enter a number less than or equal to 3999."
        return
    }
    else if(number <= 0){
        outputElement.classList.add('alert');
        outputElement.innerText = "Please enter a number greater than or equal to 1."
        return
    }

    outputElement.innerText = "";
    outputElement.classList.remove('alert');
    convertToRoman(number, str)
    // convertButton.disabled = true;
})

const setOutput = (array) => {
    const properString = array.join("");
    console.log(properString)
    outputElement.innerText = properString;
}

const convertToRoman = (n, arr) => {

    if (n >= 1000) {
        arr.push("M");
        convertToRoman(n - 1000, arr)
    }
    else if (n >= 900) {
        arr.push("CM");
        convertToRoman(n - 900, arr)
    }
    else if (n >= 500) {

        arr.push("D");
        convertToRoman(n - 500, arr)
    }
    else if (n >= 400) {
        arr.push("CD");
        convertToRoman(n - 400, arr)
    }
    else if (n >= 100) {
        arr.push("C");
        convertToRoman(n - 100, arr)
    }
    else if (n >= 90) {
        arr.push("XC");
        convertToRoman(n - 90, arr)
    }
    else if (n >= 50) {
        arr.push("L");
        convertToRoman(n - 50, arr)
    }
    else if (n >= 40) {
        arr.push("XL");
        convertToRoman(n - 40, arr)
    }
    else if (n >= 10) {
        arr.push("X");
        convertToRoman(n - 10, arr)
    }
    else if (n >= 9) {
        arr.push("IX");
        convertToRoman(n - 9, arr)
    }
    else if (n >= 5) {
        arr.push("V");
        convertToRoman(n - 5, arr)
    }
    else if (n >= 4) {
        arr.push("IV");
        convertToRoman(n - 4, arr)
    }
    else if (n >= 1) {
        arr.push("I");
        convertToRoman(n - 1, arr)
    }
    else if (n === 0) {
        // console.log(arr)
        setOutput(arr);
    }
}