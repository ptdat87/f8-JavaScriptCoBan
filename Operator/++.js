var a = 10;
// i++ means 'tell me the value of i, then increment'
// ++i means 'increment i, then tell me the value'
a_copy = a++;
console.log("a_copy: ", a_copy);
console.log( "a: ",a);
// create new variable a_copy                    (a_copy = NAN , a = 10)
// assign value to variable a_copy equal    (a_copy = 10     , a = 10)
// increase a by 1                                        (a_copy = 10    ,  a =11)