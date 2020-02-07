let fname;
let lname;
let first;
let last;
let btn1;
let btn2;
let cell1;
let cell2;
let table;
let row;
let arr = [{ firstname: "Vishal", lastname: "Vyas" },
{ firstname: "Mehul", lastname: "Gajera" },
{ firstname: "Utsav", lastname: "Mevada" },
{ firstname: "Chirag", lastname: "Prajapati" },
{ firstname: "Gunjan", lastname: "Parekh" },
{ firstname: "Pratik", lastname: "Makadia" },
{ firstname: "Abhi", lastname: "Soni" },
{ firstname: "Sarthak", lastname: "Shah" },
{ firstname: "Harshvardhan", lastname: "Rajpurohit" },
{ firstname: "Rushi", lastname: "Bhagat" },
];

function clear_textbox(){
  document.getElementById('fname').value = "";
  document.getElementById('lname').value = "";
}
function createTable() {
fname=document.getElementById('fname').value;
lname=document.getElementById('lname').value;
  if (document.getElementById("add").innerHTML == "Add") {
    
    if(fname != "" && lname != ""){
    AddRow()
    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    clear_textbox();
    }else{
        alert("Please enter Value in text box");
    }
  }
  
  else {
    first.innerHTML =fname; 
    last.innerHTML =lname;
    clear_textbox();
  }

}


function Remove(button) {

   row = button.parentNode.parentNode;
  // table = document.getElementById("tab");
  table.deleteRow(row.rowIndex);
  document.getElementById("add").innerHTML = "Add";
  clear_textbox();
};


function AddRow() {
  table = document.getElementById("tab");
  btn1 = document.createElement("input");
  btn2 = document.createElement("input");
  btn1.type = "button";
  btn2.type = "button";
  btn1.value = "Edit";
  btn2.value = "Delete";
  btn1.className = "btn btn-outline-primary";
  btn2.className = "btn btn-outline-primary";
  row = table.insertRow(-1);
  cell1 = row.insertCell(0);
  cell2 = row.insertCell(1);
  cell3 = row.insertCell(2);
  cell4 = row.insertCell(3);

  cell3.appendChild(btn1);
  cell4.appendChild(btn2);


  btn2.setAttribute("onclick", "Remove(this);");
  btn1.setAttribute("onclick", "editData(this);");


}
function getData() {
  for (var i = 0; i < arr.length; i++) {
    AddRow();
    cell1.innerHTML = arr[i].firstname;
    cell2.innerHTML = arr[i].lastname;
  }
}


function editData() {
  let table = document.getElementById("tab");
  for (let j = 0; j < table.rows.length; j++) {
    table.rows[j].onclick = function () {
      rindex = this.rowIndex;
      document.getElementById("fname").value = this.cells[0].innerHTML;
      document.getElementById("lname").value = this.cells[1].innerHTML;
      table.rows[rindex].cells[0].innerHTML = document.getElementById("fname").value;
      table.rows[rindex].cells[1].innerHTML = document.getElementById("lname").value;
      document.getElementById("add").innerHTML = "Update";

      first = this.cells[0];
      last = this.cells[1];
    };
  }

}