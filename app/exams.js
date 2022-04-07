let number = '10' + 10
console.log(number)

let number2 = + '10' + 10
console.log(number2)

let numbe3 = 10
numbe3++
console.log(++number)

const myArr = [1,2,3];
const arrTwo = myArr.splice(0,4).slice (0,2)
arrTwo[0] = 9;
console.log(arrTwo);

function truthy(x){
    if(5 ===x){
        return true;
    }else{
        return false;
    }

    }
    console.log(truthy(6));

    let mydinner = [
        { name: "burger", price: 500},
        { name: "meat", price: 600},
        { name: "chicken", price: 400},
    ]
    let totalPrices = [500, 600, 400];
    {
        console.log(500+600+400);
    }

    const race = "100 dash";
    const runners = ["Usain Bolt","Asafa power","justin Gatlin"];
              const results = runners.map((runner,i) =>({name:runner,race,place:i +1}))
                console.log(results);

                const carOne = {
                    color: 'blue',
                    status: {
                      running: true,
                      passengers: 4,
                      wiperFluid: 'empty'
                    },
                    age: 5,
                    miles: 50000,
                    value: '8000'
                  }
                  const carTwo = {
                    color: 'green',
                    status: {
                      running: 'yes',
                      passengers: 2,
                      fuelTank: 'empty'
                    },
                    value: 9000
                  }
                  const combinedCar = {
                  ...carOne,
                  ...carTwo
                  }
                  
   const obj = {
       name: "faisal",
       age: 18,
       ispresent: true,
   } 
   let faislaInfo = {...obj}
   
   console.log(faislaInfo)
                  
                  
                  
                  


    





