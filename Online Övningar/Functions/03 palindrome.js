// Write a JavaScript function that checks whether a passed string is palindrome or not? 

function check_string(string_entry)
// Change the string into lower case and remove  all non-alphanumeric characters
{
    let cstr = string_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    let ccount = 0;
// Check whether the string is empty or not

    if (cstr === '')
    {
        console.log('Nothing found');
        return false;
    }
    // Check if the length of the string is even or odd 
    if ((cstr.length) % 2 === 0)
        {
            ccount = (cstr.length) / 2;
        }
        else
        // If the length of the string is 1 then it becomes a palindrome
        {
            if (cstr.length === 1)
            {
                console.log('Entry is a palindrome');
                return true;
            }
            else
            // If the length of the string is odd ignore middle character
            {
                ccount = (cstr.length -1) / 2;
            }
            
        }
        // Loop through to check the first character to the last character and then move next
        for (let x = 0; x < ccount; x++)
        // Compare characters and drop them if they do not match 
        {
            if (cstr[x] != cstr.slice(-1-x)[0])
            {
                console.log('The entry is not a palindrom')
                return false;
            }
        }
    console.log('The entry is a palindrom');
    return true;
}
check_string('madam');
check_string('nurses run');
check_string('fox');
check_string('ni talar bra latin');
