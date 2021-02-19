const date0= new Date(1993, 11, 1);
const date1= new Date(1998, 0, -33);
const date2= new Date('42 03:24:00');

function appendLeadingZeroes(n)
{
    if(n <= 9){
      return "0" + n;
    }
    return n;
}

function formeteddate(x)
{
    let str = appendLeadingZeroes(x.getDate())+ "." + appendLeadingZeroes(x.getMonth()+1) + "."+x.getFullYear()+" "+ appendLeadingZeroes(x.getHours()) + ":" + appendLeadingZeroes(x.getMinutes()) +" "+dayweek(x);
    return str;
}
function dayweek(a)
{   
    let x = a.getDay();
    switch (x)
    {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "";
    }
}

console.log(formeteddate(date0));
console.log(formeteddate(date1));
console.log(formeteddate(date2));
