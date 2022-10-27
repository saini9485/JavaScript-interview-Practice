// let Rajesh = {
//     name: "Rajesh",
//     age: 22,
//     place: "Noida",
// }
// let Virendra = {
//     name: "Virendra",
//     age: 21,
//     place: "Meerut",
// }
// let Riyaj = {
//     name: "Riyaj",
//     age: 23,
//     place: "Sultanpur",
// }
// console.log(Virendra)
// console.log(Riyaj)
// console.log(Rajesh)


//With factory method
function createPerson(name, age, place) {
    return {
        name: name,
        age: age,
        place: place,
    }
}
const Riyaj  = createPerson("riyaj", 23, "Sultanpur")
const Virendra  = createPerson("Virendra", 21, "Meerut")
const Rajesh  = createPerson("Rajesh", 22, "Noida")
console.log(Riyaj)
console.log(Virendra)
console.log(Rajesh)
