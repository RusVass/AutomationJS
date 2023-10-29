/** 1.Напиши функцію map(fn, array), яка приймає на вхід функцію та масив,
 та обробляє кожен елемент масиву цією функцією, повертаючи новий масив.
 Приклад:
 */
function map(fn, array) {

    //first solution
    let newArray = [];
    for (let item of array) {
        newArray.push(fn(item));
    }
    return newArray;

    //second solution
    // let newArray = [];
    // array.forEach(elem  => {
    //     newArray.push(fn(elem))
    // })
    // return newArray;
}

function square(x) {
    return x * x;
} // повертає квадрат числа

console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []

// Зверніть увагу: функція не повинна змінювати переданий їй масив:

let arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]

/**
 2. Написати функцію яка форматує текст:
 - прибирає пробіли з початку і кінця,
 - прибарає всі займі пробіли (два і більше підряд)
 - кожне речення починає з великої букви, а всі наступні символи в речені робить маленькими*/
function formatText(text) {
    const arr = text.split(/[.]/)
    const newContent = arr.map(elem => {
        const gap = elem.trim()
        const upCont = gap.charAt(0).toUpperCase()
        const lowCont = gap.slice(1).toLowerCase()
        return upCont + lowCont;
    })
    return newContent.join(". ");
}

console.log(formatText("heLLo, this! is My teXT.   have A NiCe DaY  ")); // "Hello, this is my text. Have a nice day"
console.log(formatText(" Hello woRld   ")); // "Hello worWorld

/**3. Написати функцію, яка поверне число голосних букв в строкі */
function countVowels(str) {
    let vowelList = 'aeiouAEIOU';
    let vowelCount = 0;

    for(let i = 0; i < str.length ; i++) {
        if (vowelList.includes(str[i])) {
            vowelCount ++;
        }

    }
    return vowelCount;
}

console.log(countVowels('aaaat')); // виводить 4
console.log(countVowels('Hello world')); // виводить 3

/** 4. Написати функцію, яка видаляє всі спеціальні символи зі строки (залишає лише числа, букви і пробіли в будь-якому регістрі) */
function clearStr(strs) {
    const newReg = /[^a-zA-Z0-9\s]/g;
    return strs.replaceAll(newReg, "").trim().replaceAll("  ", " ");
}

console.log(clearStr("My var: 22 ")); // виведе "My var 22"
console.log(clearStr("Foo %$#% bar")); // виведе "Foo bar"
console.log(clearStr("; SELECT * FROM passwords ")); // виведе "SELECT FROM passwords"


