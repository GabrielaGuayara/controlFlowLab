const radious = 5;
const PI = 3.1415;
let area = PI*radious*radious;
let minSpace =0.8;
let plantsNumb = 20;
let week1 = plantsNumb*minSpace;
let week2= 2*week1;
let week3= 2*week2
console.log(week1, week2, week3)

let week1Perc = (week1/area)*100;
let week2Perc = (week2/area)*100;
let week3Perc = (week3/area)*100;


//WEEK1
        if(week1Perc>80){
            console.log("The plants to be proned")
        }
        if(week1Perc>=50&&week1<=80){
            console.log("The plants to be monitored")
        }
        if(week1Perc<50){
            console.log("The plants to be planted")
        }  

//WEEK2
    if(week2Perc>80){
        console.log("The plants to be proned")
    }
    if(week2Perc>=50&&week1<=80){
        console.log("The plants to be monitored")
    }
    if(week2Perc<50){
        console.log("The plants to be planted")
    }  

//WEEK3
        if(week3Perc>80){
            console.log("The plants to be proned")
        }
        if(week3Perc>=50&&week1<=80){
            console.log("The plants to be monitored")
        }
        if(week3Perc<50){
            console.log("The plants to be planted")
        } 





