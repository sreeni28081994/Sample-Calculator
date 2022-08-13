function display(inp)
{
    
    document.getElementById("screen").value=document.getElementById("screen").value+inp;
}
function cleardisplay()
{
    document.getElementById("screen").value=" ";
}
function  equalto()
{
var que=document.getElementById("screen").value;
var ans=eval(que);
document.getElementById("screen").value=ans;
}