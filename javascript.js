function opneclose()
{
var pwd= document.getElementById("pwd");
var open=document.getElementById("open");
var close =document.getElementById("close")
 if (pwd.type == "password")
 {
    pwd.type="text";
    open.style.display="block";
    close.style.display="none";
   } 
    else 
   {
    pwd.type="password";
    open.style.display="none";
    close.style.display="block";
   }
}





function valitation()
{
    var name=document.getElementById("name");
    var pass=document.getElementById("pwd");
    var error1=document.getElementById("error1");
    var error2=document.getElementById("error2");
    if (name.value.trim()=="")    
    {
      error1.style.display="block";
       return false;
    }
   

  else if(pass.value.trim()=="")
{
   error2.style.display="block";
   return false;
} 
else if(name.value==pass.value)
{
   
   return true;
} 
else 
{
   alert("Please Enter valid values Name and Password will be the same  Example:Name:thirupathi,Passwor:thirupathi ")
   return false;
}   

}