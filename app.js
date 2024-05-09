const radious = 5;
const PI = 3.1415;
let area = PI*radious*radious;
let minSpace =0.8;
let plantSpace = area/0.8;
let plantsNumb = 20;
let week1 = 1*(plantsNumb**2)*plantSpace;
let week2= 2*(plantsNumb**2)*plantSpace;
let week3= 3*(plantsNumb**2)*plantSpace;
let areaCapacity = plantSpace/100;

 let number = prompt("Enter a week from 1 to 3");

switch(number){
    case 1:{
        if(week1>80){
            console.log("The plants to be proned")
        }
        if(week1>=50&&week1<=80){
            console.log("The plants to be monitored")
        }
        if(week1<50){
            console.log("The plants to be planted")
        }  }
    case 2: 
    {
    if(week2>80){
        console.log("The plants to be proned")
    }
    if(week2>=50&&week1<=80){
        console.log("The plants to be monitored")
    }
    if(week2<50){
        console.log("The plants to be planted")
    }  }

    case 3:{
        if(week3>80){
            console.log("The plants to be proned")
        }
        if(week3>=50&&week1<=80){
            console.log("The plants to be monitored")
        }
        if(week3<50){
            console.log("The plants to be planted")
        }  }
}





