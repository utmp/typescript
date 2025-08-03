let sales: number = 1234
let course: string = 'TypeScript'
let is_published: boolean = true

// any type
function display(img: any){
    console.log(img)
}
//arrays 
let numbers: number[] = [1,2,3,4]
//tuples
let user: [number,string] = [1,'John']
//enum
// const small = 1
// const med = 2
// const large = 3
enum Size {
    Small = 1,
    Med,
    Large
}
let mySize:Size = Size.Med
console.log(mySize) //2
//objects
let employee: {
    id: number
    name?: string
}={id:1}
employee.name="John"

function kgToLbs(weight: number | string): number{
 // narrowing
 if(typeof weight === 'number'){
    return weight*2.2
 }else{
   return parseInt(weight) * 2.2
 }
}
kgToLbs('20kg')
//intersection types
type Draggable = {
    drag: ()=> void
}
type Resizable = {
    resize: ()=> void
}

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
    drag: ()=> {},
    resize: ()=>{}
}

// exact or specific types
let quantity: 50 | 100 = 100
type Color = 'red' | 'blue'
let tShirt: Color = 'blue'

// null types
function greet(name:string|null){
    if(name)
        console.log(name.toUpperCase())
    else
        console.log('Hola !')
}
greet(null)
// optional chaining
type Customer = {
    birthday: Date
}
function getCustomer(id:number): Customer | null{
    return id === 0 ? null : {birthday: new Date()};
}
let customer =  getCustomer(0)
// optional property access operator
console.log(customer?.birthday)
//optional element access operator
// array?.[0]

// optinal call 
let log: any = null;
log?.('a');