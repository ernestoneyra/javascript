function remove_char(string, char_pos)
{
    part1 = string.substring(0, char_pos);
    part2 = string.substring(char_pos+1, string.length);
    return (part1+part2);
}

console.log(remove_char("Python",0));
console.log(remove_char("Python",3));
console.log(remove_char("Python",5));