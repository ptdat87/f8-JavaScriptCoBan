const myString = "     Hello world - This is - My message   js js js ";

//1.Length
console.log(myString.length);

//2.Find index
console.log(myString.indexOf("-"));
console.log(myString.lastIndexOf("-"));
console.log(myString.search("This"));
//3.Cut string
console.log(myString.slice(11, 16));
console.log(myString.slice(-16, -5));
//4.Replase
console.log(myString.replace("js", "javascript"));
console.log(myString.replace(/js/g, "javascript")); //Dung bieu thuc chinh quy
//5.Convert to upper case
console.log(myString.toUpperCase());
//6.Convert to lower case
console.log(myString.toLowerCase());
//7.Trim
console.log(myString.trim());
//8.Split
console.log(myString.split("-"));
//9.Get a character by index
console.log(myString.charAt(11));