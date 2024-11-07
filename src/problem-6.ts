{
    // 


interface Profile {
name:string;
age:number;
email:string;

}

const myProfile:Profile = { name: "Alice", age: 25, email: "alice@example.com" };


const updateProfile=(params:Profile,update)=>{


if(update.age){
 params.age=update.age

 return params
}else if(update.name){
    params.name=update.name

    return params
}else if(update.email){

    params.email=update.email

    return params
}
}


console.log(updateProfile(myProfile,{name:'sdfjsafj'}))







    // 



}