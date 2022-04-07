let nums = [1, 2, 3, 4, 5]
for (let i = 0; i < nums.length; i++){
  if(i == 2){
    console.log('i have stopped');
    break;
  }
  console.log(nums[i])
}

//for ...in
const names = {
    fname: 'Ahmed',
    sname: 'abdi',
    lname: 'moha',
}
for (const name in names) {
    // console.log(name)
    // console.log(names[name])
    console.log(`${name}` + ` ${names[name]}`.toUpperCase())
}
     let animals = ['cows', 'cats','dogs','donkey',]
    for ([index,animal] of animals.entries()) {
        console.log(index,animal);
    }
    
    

    


    

    

    

