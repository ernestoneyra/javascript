let allowed_chars = "abcdefghijklmnopqrstuvwxyzåäö1234567890 .";

/*function rensar()
if (allowed_chars.includes("<>.,!¤%&/()=?`¨'-+*") ){
    console.log("notallowe" + allowed_char);
}

console.log(rensar())*/

/*for (let current_char of allowed_chars){
    console.log(("Just nu är vi på tecknet: " + current_char));
    if (allowed_chars.includes(".")){
    
    }
}*/



//console.log("Strängen " + allowed_chars + " innehåller " + allowed_chars.length + " tecken");


function clean_string(string_to_clean){
    let allowed_chars = "abcdefghijklmnopqrstuvwxyzåäö1234567890 ";
    let cleaned = "";

    for (let char of string_to_clean ) {
        if (allowed_chars.includes (char)){
            cleaned+= char;
        }
    }
    //console.log(string_to_clean)
    return cleaned;
}

let result = clean_string("hello world, welcome!" );

console.log(result);