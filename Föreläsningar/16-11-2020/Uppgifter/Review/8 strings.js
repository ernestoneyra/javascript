function findchars(string_to_clean) // master variable, så att säga. 
{
    let allowed_chars = "Ernesto,welcometotheworldofFinalFantasy";
    let cleaned = "";

    for (let int of string_to_clean)
    {   
        if (allowed_chars.includes(int))
        {
            cleaned += int; // varför cleaned? varför +=?
        }
        
    }
    return cleaned;
}

// en ny variabel som innehåller functionen findchars().

let result = findchars("!Ernesto, hejsan to the world23");

console.log(result);

/*for (let namn of name)
{
    console.log(namn);
}*/

/*let str = name.includes("whejsan");

console.log(str);*/

/*if (allowed_chars.includes("z"))
    {
        console.log(allowed_chars);
    }
    else
    {
        console.log("false");
    }*/