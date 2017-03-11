var a = +prompt("Check Your Grade", "Enter Your Percentage(Out of 100)");

if (a <= 100 && a >= 80) {
    alert('You Got "A+" Grade - Very Good For Excellent Understanding');
}
else if (a < 80 && a >= 70) {
    alert('You Got "A" Grade - Good Understanding');
}
else if (a < 70 && a >= 60) {
    alert('You Got "B" Grade - Basic Understanding');
}
else if (a < 60 && a >= 50) {
    alert('You Got "C" Grade - Limited Understanding');
}
else if (a < 50 && a >= 0) {
    alert('You Are "Fail" - Lack of Understanding and Concepts');
}