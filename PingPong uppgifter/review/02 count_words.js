/*Skapa en funktion som räknar ord i en sträng.*/

function count_words(string)
{
    //Exclude the start and end spaces of a string. The following line of regex expression will remove the start and end spaces of the given string.
    string = string.replace(/(^\s*)|(\s*$)/gi,"");
    //Try to reduce multiple spaces to a single space.
    string = string.replace(/[ ]{2,}/gi," ");
    //Try to exclude a new line with a start spacing.
    string = string.replace(/\n /,"\n");
    //let arr = string.split(' ');
    //console.log(arr.length);
    console.log(string.split(' ').length);
}

count_words('Här är en sträng med ord');
count_words('en kortare sträng');