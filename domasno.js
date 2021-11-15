const temp = [12, 13, 20, 31, 41, 17]

let largest = temp[0]
let smallest = temp[0]

for (let i = 0; i < temp.length; i++) {
    let num = temp[i]
    if ( num > largest)
    {
        largest = temp[i]
    }
    if (num < smallest)
{
    smallest = temp[i]

}
}
console.log(largest)
console.log(smallest)
