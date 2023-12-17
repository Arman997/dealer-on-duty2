function  camelize(str) 
{
    if(typeof str !== 'string')
    {
        alert("string required")
        return null
    }
    let arr = str.replace(/^-+|-+$/g, '').split('-').map((e)=>e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(''); 
    return arr;
    
}

console.log(camelize('listStyleImage'));