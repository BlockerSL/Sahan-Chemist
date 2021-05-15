function sahand(){
var x = document.getElementById("Tag").value;

if (x == "Cl") {
    document.getElementById("MyForm").action = "/sahand/index.html";


   

}
else if (x == "F"){


document.getElementById("MyForm").action = "sahand1/index.html";

}
else {
  document.write("Erore");
}
}
