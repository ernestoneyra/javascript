let response = `
{
     "firstName": "Jason",
     "lastName": "Smith",
     "age": 25,
     "address": {
         "streetAddress": "21 2nd Street",
         "city": "New York",
         "state": "NY",
         "postalCode": "10021"
     },
     "phoneNumber": [
         { "type": "home", "number": "212 555-1234" },
         { "type": "fax", "number": "646 555-4567" }
     ],
     "newSubscription": false,
     "companyName": null
}`;

console.log(typeof response)
console.log(response)

let data = JSON.parse(response);

console.log(typeof data)
console.log(data)

console.log(data.age)
console.log(data.phoneNumber[0].number)


