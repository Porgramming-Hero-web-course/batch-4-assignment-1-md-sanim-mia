{
    // 


interface Profile {
name:string;
age:number;
email:string;

}

const myProfile:Profile = { name: "Alice", age: 25, email: "alice@example.com" };


const updateProfile=(params:Profile,update:Partial<Profile>)=>{


return {...params,...update}
}


updateProfile(myProfile, { age: 26 })







    // 



}