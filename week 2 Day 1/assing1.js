function find_seven(param) 
{

    if(!Array.isArray(param) || !param.every((e)=> typeof e === 'number') )
        return("Error ! only array of numbers");
    else
        console.log( param.some((e)=> e == 7)? "Boom !" : "there is no 7 in Array");
   
}

console.log(find_seven([1,2,3,4,5,6,7,8,9]));