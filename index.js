function sahand(){
var x = document.getElementById("Tag").value;

if (x == "Cl") {
   

formObject.action ="https://sahand-chemist-i.netlify.app";

   

}
else if (x == "F"){


formObject.action = "https://sahand-chemist-f.netlify.app";

}
else {
  document.write("Erore");
}
}
