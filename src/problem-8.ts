{

// 
type Person={
    name:string;
    age:number;
    email:string;

}
const person:Person = { name: "Alice", age: 25, email: "alice@example.com" };

const validateKeys=<T extends Person>(obj:T, key:(keyof T)[]):boolean=>{

const value= key.every(key=>key in obj)
return value
}


validateKeys(person,['name','email'])



// 

}