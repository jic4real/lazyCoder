//data array
let data =[
    {principal:2500, time:1.8},
    {principal:1000, time:5},
    {principal:3000, time:1},
    {principal:2000, time:3},
];
//new empty array 
let interestData = [];
//rate assignment
let interest = 0;
//function to calculate interest

function interestCalculator (interestData){
    //looping through the array
    data.forEach((looping)=>{
        
        if(looping.principal>=2500 && looping.time>1<3){
            interest=3;
            let interestCal = (looping.principal * interest * looping.time) /  100;
            interestData.push(
                {   principal: looping.principal, 
                    time:looping.time, 
                    interest: interestCal,
                    rate:interest
                },);
        
        }
        else if(looping.principal>=2500 && looping.time>=3){
            interest=4;
            let interestCal = (looping.principal * interest * looping.time) /  100;
            interestData.push(
                {   principal: looping.principal, 
                    time:looping.time, 
                    interest: interestCal,
                    rate:interest
                },);

        }
        else if(looping.principal<=2500 && looping.time<=1){
            interest=2;
            let interestCal = (looping.principal * interest * looping.time) /  100;
            interestData.push(
                {   principal: looping.principal, 
                    time:looping.time, 
                    interest: interestCal,
                    rate:interest
                },);
            
        }else{
            interest=1;
            let interestCal = (looping.principal * interest * looping.time) /  100;
            interestData.push(
                {   principal: looping.principal, 
                    time:looping.time,
                    interest: interestCal, 
                    rate:interest},);
            
        }
        
    });
    console.log(interestData);
    return interestData;
};
//calling the function
interestCalculator(interestData);
   
    

    
   
    










    
