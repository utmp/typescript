// type annotation
interface Person {
    first: string
    last: string
    age?: number //optional value
    sex?: 'male' | 'female'
    [key: string]: any
}
const person: Person = {
    first: 'John',
    last: 'Snow',
    sex: 'male',
    job: 'knight'
}
const person2: Person = {
    first: 'Edward',
    last: 'Snowden',
    sex: 'male',
    age: 43

}
// :string is return value
function powNums(x:number,y:number):string{
    return Math.pow(x,y).toString();
}
console.log(powNums(4,9))
//Arrays
const arr: number[]= []
arr.push(1)
arr.push(8)

type myArrayTypes = [number?,string?,boolean?]
const arr1: myArrayTypes = []
arr1.push('23')