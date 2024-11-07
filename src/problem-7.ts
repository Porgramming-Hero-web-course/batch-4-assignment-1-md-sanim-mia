{

// 

class Car {
    make:string;
    model:string;
    year:number;

    constructor(make:string,model:string,year:number){
        this.make=make,
        this.model=model,
        this.year=year
    };


    getCarAge(){
const currentValue=new Date().getFullYear()

const values=currentValue-this.year

return console.log(`${values} assuming current year is ${currentValue}`)
    }
}



const car = new Car("Honda", "Civic", 2015);
car.getCarAge()








// 
}