{

// 

const getProperty=<T,Y extends keyof T>(problem:T,key:Y)=>{


return problem[key]
}


const person = { name: "Alice", age: 30 };

getProperty(person,'age')




// 

}