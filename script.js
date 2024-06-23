
var screen=document.getElementById('display');
function display(value){
screen.value+=value;
}
function clr(){
    screen.value="";
}
function equate(){
    try{
        var result=eval(screen.value);
        screen.value=result;
    }
   catch(err){
  screen.value="syntax error";
   }
}
function del() {
    screen.value = screen.value.slice(0, -1);
}
