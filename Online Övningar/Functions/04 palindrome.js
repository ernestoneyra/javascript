// Write a JavaScript function that checks whether a passed string is palindrome or not? 

function palindrome(str_entry)
// Change the string into lower case and remove  all non-alphanumeric characters
{
    let cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    let ccount = 0;
    // Check whether the string is empty or not
    if (cstr === "")
    {
        console.log('nothing found');
        return false;
    }
       // Check if the length of the string is even or odd 
    if ((cstr.length) % 2 === 0)
    {
        ccount = (cstr.length) /2;
    }
    else
       // If the length of the string is 1 then it becomes a palindrome
    {
        if (cstr.length === 1)
        {
            console.log('This is a palindrome');
            return true;
        }
        else
        {
            ccount = (cstr.length -1) / 2; 
        }
    }
    for (let x = 0; x < ccount; x++)
            // Compare characters and drop them if they do not match 
    {
        if (cstr[x] != cstr.slice(-1-x) [0])
        {
            console.log('This entry is not a palindrome');
            return false;
        }
    }
    console.log('This entry is a palindrome');
    return true;
    
}

  
palindrome('madam');
palindrome('nurses run');
palindrome('fox');
palindrome('ni talar bra latin');
palindrome('');