function datum()
{
let today = new Date();
let day = today.getDay();

let daylist = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];

console.log(`Idag är det ${daylist[day]}.`);

let timme = today.getHours();
let minut = today.getMinutes();
let sekund = today.getSeconds();


console.log(`Klockan är ${timme} : ${minut} : ${sekund}`);
}
datum();