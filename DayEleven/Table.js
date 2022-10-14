function addRow(tableID) {
    var x=document.getElementById('myTable').insertRow(-1);
    var row1 = x.insertCell(0);
    var row2 = x.insertCell(1);
    var row3 = x.insertCell(2);
    var row4 = x.insertCell(3);
    var row5 = x.insertCell(4);
}

function changeContent()
{
row = window.prompt("Input the Row number(0,1,2,3,4)", "0");
col = window.prompt("Input the Column number(0,1,2,3,4)","0");
content = window.prompt("Input the Cell content");  
var x = document.getElementById('myTable1').rows[parseInt(row)].cells;
x[parseInt(col)].innerHTML=content;
}

function createTable()
{
row = window.prompt("Input number of rows", 1);
col = window.prompt("Input number of columns",1);
  
 for(var r=0;r<parseInt(row);r++)
  {
   var x=document.getElementById('myTable2').insertRow(r);
   for(var c=0;c<parseInt(col);c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c; 
    }
   }
}