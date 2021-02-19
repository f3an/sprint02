
let sortEvenOdd = (x) =>
{
    function pr(a,b)
    {
        return a%2 - b%2;
    }
    function p(a,b)
    {
        return a-b;
    }
    (x.sort(p).sort(pr));
}

const arr= [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
sortEvenOdd(arr);
console.log(arr);
