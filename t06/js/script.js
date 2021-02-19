let f = prompt("enter your first name");
let l = prompt("enter your last name");

if(isNaN(f), isNaN(l))
{
    f = f.charAt(0).toUpperCase() + f.substr(1);
    l = l.slice(0,1).toUpperCase() + l.substr(1);
    console.log(f+" "+l);
    String = f+" "+l;
    alert(String);
}
else if(f=="",l=="")
{
    alert("Wrong input!");
    console.log('Wrong input!')
}
else
{
    alert("Wrong input!");
    console.log('Wrong input!');
}