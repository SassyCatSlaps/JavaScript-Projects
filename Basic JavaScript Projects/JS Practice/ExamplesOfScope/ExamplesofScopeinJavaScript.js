// EXAMPLES OF SCOPE

// A global variable would be written as follows:
var X = 10;
function Add_numbers_1()
{
    document.write(20 + X + "<br>");
}
function Add_numbers_2()
{
    document.write(X + 100);    
}
Add_numbers_1();
Add_numbers_2();
/* Code above will return '30' and '110'.
The variable X was assigned the value 10 outside of our function, but we still accessed it – therefore, the above is an example of a global variable */

// The following would be an example of a local variable:
function Add_numbers_1() 
{
    var X = 10;
    document.write(X + 100);
}
function Add_numbers_2()
{
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();
/*This time, the code would only return “30” because the variable was local – meaning it was written 
within the function Add_numbers_1 and couldn’t be accessed outside of it.*/

/* Let’s say you wrote the above code and didn’t understand why Add_numbers_2 didn’t display a result.
We could use the console.log() method to help us debug our code as follows: */
function Add_numbers_1()
{
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2()
{
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();
/* If you executed this code in the browser, no result will be shown. But if you open the console, you’ll see the error “X is not defined.” */