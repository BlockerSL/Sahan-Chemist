function sahand(){
var x = document.getElementById("Tag").value;

if (x == "Cl") {
    

  document.forms['h'].action='sahand/index.html';

}
else if (x == "F"){

document.forms['h'].action='sahand1/index.html';


}
else {
  document.write("Erore");
}
}
