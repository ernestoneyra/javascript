function firstJanuary()
{
    for (let year = 1990; year <= 2056; year++)
    {
        let end = new Date(year, 0, 1)
        if (end.getDay() === 0)
        console.log(`The first of January is being a Sunday year ${year}.`);
    }
}

firstJanuary();