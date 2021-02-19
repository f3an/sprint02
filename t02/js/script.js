let animal = prompt('What animal is the superhero most similar to?');
if(animal.length>20)
{
    alert("max length is 20 and only one word");
}
else
{
    let gender = prompt('Is the superhero male or female? Leave blank if unknown or other.');
    if(gender == "male")
    {
        let age=prompt('how old are you?')
        if(isNaN(age),age.length>5,age == 0)
        {
            alert("Only digits,cannot start with a zero");
        }
        else{
            if(age>=18)
            {
                gender="man";
                alert("The superhero name is: "+animal+"-"+gender);
            }
            else 
            {
                gender="kid";
                alert("The superhero name is: "+animal+"-"+gender);
            }
        }
    }
    else if(gender == "female")
    {
        let age=prompt('how old are you?')
        if(isNaN(age),age.length>5,age == 0)
        {
            alert("Only digits,cannot start with a zero");
        }
        else{
            if(age>=18)
            {
                gender="Woman";
                alert("The superhero name is: "+animal+"-"+gender);
            }
            else 
            {
                gender="girl";
                alert("The superhero name is: "+animal+"-"+gender);
            }
        }
    }
    else if(gender == "")
    {
        let age=prompt('how old are you?')
        if(isNaN(age),age.length>5,age == 0)
        {
            alert("Only digits,cannot start with a zero");
        }
        else
        {
            gender="hero";
            alert("The superhero name is: "+animal+"-"+gender);
        }
    }
    else
    {
        alert("only male or female. Or leave");
    }    
}
