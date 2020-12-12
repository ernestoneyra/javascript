function first_january()
{
    for (let year = 1990; year <= 2052; year++)
    {
        let end = new Date(year, 0, 1);
        if  (end.getDay() === 0)
            console.log(`1st of January is being a Sunday ${year}.`);

    }
}

first_january();