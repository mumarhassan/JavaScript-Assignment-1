let username;
let firstname;
let lastname;
console.log(username)
console.log(firstname)
console.log(lastname)

document.writeln("<h1>Rules for naming JS variables</h1><br><br><br>")

document.writeln("Variable name can only contain , numbers, $ and_ ,For example : $my_1stVariable<br>")
document.writeln("Variable must begin with a letter, $ or _, For Example :  $name,_name or name<br>")
document.writeln("Variable names are case sensitive<br>")
document.writeln("Variable names should not be JS keywords<br>")


let sum = 5
let sum1= 4

console.log(sum+sum1)

document.writeln("sum of")

let sub = 53
let sub1 = 23

console.log(sub-sub1)

let mul =23
let mul1= 23

console.log(mul*mul1)

let div=40
let div1=10

console.log(div/div1)

// answer 2



document.writeln("<h3>Answer 2</h3>")
document.writeln("<h1>Legal name's</h1>")
document.writeln("A letter (a-z or A-Z)<br>")
document.writeln("A dollar sign $<br>")
document.writeln("An underscores_<br>")
document.writeln("name<br>")
document.writeln("Total<br>")
document.writeln("<h1>Illegal name</h1>")
document.writeln("Function<br>")
document.writeln("var<br>")
document.writeln("1st<br>")
document.writeln("!username<br>")
document.writeln("delete")

// chapter 5
// answer 1
let num1 = 5., num2 = 3
result = num1 + num2
document.writeln("<h3>Answer 1</h3>")
document.writeln("Sum of 3 and 5 is : ",result)

// answer 2

result = num1 - num2
document.writeln("<h3>Answer 2</h3>")
document.writeln("<br>Sub of 3 and 5 is : ",result )
result = num1 * num2
document.writeln("<br>Mul of 3 and 5 is : ",result) 
result = num1 / num2
document.writeln("<br>div of 3 and 5 is : ",result)
result = num1 % num2
document.writeln("<br>Reminder of 3 and 5 is : ",result)


// answer 3

let a;
document.writeln("<h3>Answer 3</h3>")
document.writeln("<br>Value after variable declaration is: ",a)

let b = 11
document.writeln("<br>Initial Value", b)
let c = 11
document.writeln("<br>Value after increment is : ", ++c)
let d = 11
result = d + 9
document.writeln("<br>Value after addition is : ", result)
document.writeln("<br>Value after decrement is : ", --result)
reminder = result % 2
document.writeln("<br>The reminder is " ,reminder)

// answer 4

let ticket_price = 600
total = ticket_price * 5
document.writeln("<h3>Answer 4</h3>")
document.writeln("Total cost to buy 5 tickets to a movie is : ", total, " PKR")

// answer 5

let num = "4";
document.writeln("<h3>ANSWER 5</h3>")
document.writeln(`<h3>Table of `, num, "<br/></h3>")
document.writeln("<h3>", num, "x", "1", "=", num, "<br/>")
document.writeln(num, "x", "2", "=", num * 2, "<br/>")
document.writeln(num, "x", "3", "=", num * 3, "<br/>")
document.writeln(num, "x", "4", "=", num * 4, "<br/>")
document.writeln(num, "x", "5", "=", num * 5, "<br/>")
document.writeln(num, "x", "6", "=", num * 6, "<br/>")
document.writeln(num, "x", "7", "=", num * 7, "<br/>")
document.writeln(num, "x", "8", "=", num * 8, "<br/>")
document.writeln(num, "x", "9", "=", num * 9, "<br/>")
document.writeln(num, "x", "10", "=", num * 10, "<br/></h3>")


// answer 6


let C_temp = 15; F_temp = 20;
F = (C_temp * 9 / 5) + 32
document.writeln("<h3>ANSWER 6</h3>")
document.writeln("15C is", F, "F")

C = (F_temp - 32) * 5 / 9
document.writeln("<br/>20F is", C, "C")

// answer 7

document.writeln("<h3>Answer 7</h3>")
document.writeln("<h1>Shopping cart</h1>")

let price_item1 = 500; price_item2 = 600; quantity_item1 = 5; quantity_item2 = 5; shipping_charges = 100;
Total = price_item1 * 5 + price_item2 * 5 + shipping_charges;
document.writeln("<br/>Price of item 1 is:", price_item1)
document.writeln("<br/>Quantity of item 1 is:", quantity_item1)
document.writeln("<br/>Price of item 2 is:", price_item2)
document.writeln("<br/>Quantity of item 2 is:", quantity_item2)
document.writeln("<br/>Shipping charges is:", shipping_charges)
document.writeln("<br/>Total cost of your order is:", price_item1 * 5 + price_item2 * 5 + shipping_charges,)

//ANSWER 8

let Total_marks = 980; marks_obtained = 804;
percentage = marks_obtained * 100 / Total_marks
document.writeln("<h3>ANSWER 8</h3>")
document.writeln("<h1> MARK SHEET:</h1>")
document.writeln(" Total marks:", Total_marks)
document.writeln(" <br/>Marks Obtained:", marks_obtained)
document.writeln("<br/>Percentage is :", percentage, )

// answer 9

let dollor = 10; riyal = 25;
total = 104.8 * 10 + 25 * 28
document.writeln("<h3>ANSWER 9</h3>")
document.writeln("<h1> Currency in PKR:</h1>")
document.writeln("Total Currency in PKR is :", total, )

// answer 10

let f = 10;
result = f + 5 * 10 / 2
document.writeln("<h3>ANSWER 10</h3>")
document.writeln("Answer 10 is : ", result, )

// answer 11

let current_year = 2025; birth_year = 2007;
age = current_year - birth_year
document.writeln("<h3>ANSWER 11</h3>")
document.writeln("<h1>Age Calculator</h1>")
document.writeln("Current Year : ", current_year)
document.writeln("<br/> Birth Year : ", birth_year)
document.writeln(" <br/>My Age is : ", age, )

// answer 12

let radius = 20;
circumference = 2 * 3.141 * 20
area = 3.141 * 20 * 20
document.writeln("<h3>ANSWER 12</h3>")
document.writeln("<h1>The Geometrizer</h1>")
document.writeln("<br>Radius of a Circle : ", radius)
document.writeln("<br/>The circumference is : ", circumference)
document.writeln("<br/>The Area is : ", area,)

// answer 13

document.writeln("<h3>ANSWER 13</h3>")
document.writeln("<h1>The Lifetime Supply Calculator</h1>")
let fav_snack = "SUPER biscuit";
C_age = 15;
m_age = 65;
per_day = 3;
Total_rest = (m_age - C_age) * per_day;

document.writeln("Favourite Snack : ", fav_snack)
document.writeln("<br/>Current age : ", C_age)
document.writeln("<br/> Estimated maximam age : ", m_age)
document.writeln("<br/>Amount of snacks per day : ", per_day)
document.writeln(`<br/>You will need `, Total_rest, ` Super biscuit to last you until the ripe old age of `, m_age,)   
