/*Skriv en funktion som tar emot två arrayer och returnerar en ny array som innehåller de värden som finns i båda arrayerna. Ex:

console.log(compare_arrays([1, 2, 3, 4, 5], [2, 3, 6])); // [2, 3]*/

function compare(a,b)
{
    let arr1 = [1,2,3,4,5,6,7];
    let arr2 = [2,3,12,13,45];
    let matches = [];

    for (let i =0; i < arr1.length; i++)
        {
            for (var e = 0;e < arr2.length; i++)
            {
                if (arr1[i] === arr2[e]) matches.push(arr1[i]);
            }
        }
        console.log(matches);
}

compare();

/*

let array1 = ["cat", "sun", "fun", "run"],
    array2 = ["bat", "cat", "dog", "sun", "hut", "gut"];

function getMatch(a, b) {
    var matches = [];

    for ( var i = 0; i < a.length; i++ ) {
        for ( var e = 0; e < b.length; e++ ) {
            if ( a[i] === b[e] ) matches.push( a[i] );
        }
    }
    return matches;
}

console.log(getMatch(array1, array2)); // ["cat"]*/