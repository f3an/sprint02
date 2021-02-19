let a=0;
do
{
    a=prompt("enter number 1-10");
}while(isNaN(a) || a>10 || a<=0|| a=="");

if(a==1)
{
    alert("Back to square 1");
}
else if(a==2)
{
    alert("Goody 2-shoes");
}
else if(a==3||a==6)
{
    alert("Two's company, three's a crowd");
}
else if(a==4||a==9)
{
    alert("Counting sheep");
}
else if(a==5)
{
    alert("Take Five");
}
else if(a==7)
{
    alert("Seventh heaven");
}
else if(a==8)
{
    alert("behind the eight-ball");
}
else if(a==10)
{
    alert("Cheaper by the dozen");
}