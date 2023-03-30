



function   letvarDemo()
{
//let is block scoped
//var is function scoped
const pi=3.14;
alert(pi);
var i=100;
alert(i);
if (i==100)
{
alert(pi);
let i=10;
alert(i);
let j=200;
alert(j);

}
alert(i);
alert(j);



}

function evaldemo()
{
var i="10";
var j=20;
//var res=eval(i*j);
var res=eval(i*j);
alert (res);


}

function f2()
{
var x=10;
var y=10;
if (x===y)
{
alert("they r equal");

}
else
{

    alert("not equal");
}

}

function  acceptDatausingPrompt()
{
// var i=prompt("enter  first number","100");
// var yourAns=confirm("do u confirm the input of i= "  + i);
// alert(yourAns);
// if(yourAns==false)
// {
//     alert("You denied" + i);
// }
// else   
// {

//     alert("You accept" + i);
// }

// var j=prompt("enter  second number","2000");
// confirm(j);
// var ans=parseInt(i) + parseInt(j);
// alert (ans);



}

function dateData()
{
    const pi=3.14;
    alert(pi);
    //var d1=11;
    //  d:Number=22;
    //  s:String="Hello";
    //  s1:Date="29-03-2023";
    //  b:Boolean=true;
    //  alert(d);
    //  alert(s);
    //  alert(s1);
    //  alert(b);




//var d=new Date()
// alert(d.getDate());
// alert(d.getMonth()+1);
// alert(d.getFullYear());


}

    function acceptData()
    {
        
        var n,a
         n=document.getElementById("txtname").value;
        alert(n);
        console.log(n);
        a=document.getElementById("txtage").value;
        alert(a);
        console.log(a);
        var ans=parseInt(document.getElementById("fno").value) + parseInt(document.getElementById("sno").value);
        alert (ans);
        console.log(ans);

    }
    function f1() {
        // var i=10;
        // console.log(i);
        // alert("Welcome");   
      alert(document.getElementById("d1").innerHTML);
      alert(document.getElementById("d1").innerText);
    //   document.getElementById("p1").innerHTML+="I am appending this text";
    //   alert(document.getElementById("p1").innerHTML);
    //   alert(document.getElementById("d1").innerHTML);
    
    }
