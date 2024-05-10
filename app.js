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

function getPlantsGrowth(weekNumb, weekPerc){
    if(weekPerc > 80)
        return `Plants in week #${weekNumb} need to be pruned`;
    else if(weekPerc>=50 && weekPerc <=80)
        return `Plants in week #${weekNumb} need to be monitored`;
    else
        return `Plants in week #${weekNumb} need to be planted`;
}

console.log(getPlantsGrowth(1, week1Perc));
console.log(getPlantsGrowth(3, week2Perc));
console.log(getPlantsGrowth(3, week3Perc));

//PART TWO: THINK BIGGER
let newStartingPlants = 100; 
let week =1;
let additionalSpace = 0;
let currentPlants = initialPlants;

while (week <=10){
    currentPlants*=2;
    additionalSpace = (currentPlants*minSpace)-area;
    week++;
}

console.log(`The additonal space required after 10 weeks is ${additionalSpace}`)

let expandedRadious = (additionalSpace +area)/PI;
console.log(`The expanded radious is ${expandedRadious.toFixed(2)}`)