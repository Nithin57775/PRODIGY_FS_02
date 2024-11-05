var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["employeeid"] = document.getElementById("employeeid").value;
    formData["employeename"] = document.getElementById("employeename").value;
    formData["designation"] = document.getElementById("designation").value;
    formData["salary"] = document.getElementById("salary").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.employeeid;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.employeename;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.designation;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.salary;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("employeeid").value = selectedRow.cells[0].innerHTML;
    document.getElementById("employeename").value = selectedRow.cells[1].innerHTML;
    document.getElementById("designation").value = selectedRow.cells[2].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.employeeid;
    selectedRow.cells[1].innerHTML = formData.employeename;
    selectedRow.cells[2].innerHTML = formData.designation;
    selectedRow.cells[3].innerHTML = formData.salary;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("employeeid").value = '';
    document.getElementById("employeename").value = '';
    document.getElementById("designation").value = '';
    document.getElementById("salary").value = '';
    selectedRow = null;
}
