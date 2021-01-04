//Skapa en funktion som räknar ord i en sträng.

function countWords(string)
{
    //Exclude the start and end spaces of a string. The following line of regex expression will remove the start and end spaces of the given string.
    string = string.replace(/(^\s*)|(\s*$)/gi,"");
    //Try to reduce multiple spaces to a single space.
    string = string.replace(/[ ]{2,}/gi," ");
    //Try to exclude a new line with a start spacing.
    string = string.replace(/\n /,"\n");

    //After performing all the above mention steps we will have a string with a single spaced words. On splitting the resulted string using split() method the words are going to join by a comma instead of spaces. Now using length() method we can get the resulted word count as shown in the following example.

    return string.split(' ').length;
}
// words only, not spaces or question mark.
console.log('Hello World, how are you?');
console.log(countWords('Hello World, how are you?'));
