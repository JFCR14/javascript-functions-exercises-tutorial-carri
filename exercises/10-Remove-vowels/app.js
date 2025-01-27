const rapid = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!"aeiouAEIOU".includes(char)) {
            result += char.toUpperCase();
        }
    }
    return result;  
    
}
    


// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
