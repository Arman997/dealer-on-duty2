function parse(url) 
{
    const res = {};

    const paraString = url.split('?')[1]
    if(paraString)
    {
        const dict = paraString.split('&');
        dict.forEach(e => {
            const [key,value] = e.split('=');
            res[key] = value;
        });
    }
    return res;
}

console.log(parse("https://translate.google.com/?sl=en&tl=hy&text=assignment"));