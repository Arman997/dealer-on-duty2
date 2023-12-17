function perfectNumber(num) 
{
    if(num <= 1)
        return false;
    let sum = 1;
    let i = 1;
    while (++i <= num/2) 
    {
        if(num % i === 0)
            sum += i;

    }    
    return num === sum;
}

console.log(perfectNumber(29));