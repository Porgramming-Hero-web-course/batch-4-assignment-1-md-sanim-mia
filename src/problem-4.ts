{
// 


type Circle={
    shape:string;
    radius:number;
}


type Rectangle={
    shape:string;
    width:number;
    height:number;

}



const calculateShapeArea=(params:Circle|Rectangle)=>{

if('radius' in params){
const value=Math.PI*params.radius*params.radius
return value
    }else{

const val=params.height*params.width
return val
    }

}

const circleArea=calculateShapeArea({ shape: "circle", radius: 5 })
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });









// 




}