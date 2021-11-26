var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    formData["UserName"] = document.getElementById("UserName").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["Mobile"] = document.getElementById("Mobile").value;
    formData["Address"] = document.getElementById("Address").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.productCode;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.product;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.qty;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.perPrice;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.UserName;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.Email;
    var cell7 = newRow.insertCell(6);
        cell7.innerHTML = data.Mobile;
    var cell8 = newRow.insertCell(7);
        cell8.innerHTML = data.Address;
    var cell9 = newRow.insertCell(8);
        cell9.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('productCode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('product').value = selectedRow.cells[1].innerHTML;
    document.getElementById('qty').value = selectedRow.cells[2].innerHTML;
    document.getElementById('perPrice').value = selectedRow.cells[3].innerHTML;
    document.getElementById('UserName').value = selectedRow.cells[4].innerHTML;
    document.getElementById('Email').value = selectedRow.cells[5].innerHTML;
    document.getElementById('Mobile').value = selectedRow.cells[6].innerHTML;
    document.getElementById('Address').value = selectedRow.cells[7].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.perPrice;
    selectedRow.cells[4].innerHTML = formData.UserName;
    selectedRow.cells[5].innerHTML = formData.Email;
    selectedRow.cells[6].innerHTML = formData.Mobile;
    selectedRow.cells[7].innerHTML = formData.Address;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('productCode').value = '';
    document.getElementById('product').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('perPrice').value = '';
    document.getElementById('UserName').value = '';
    document.getElementById('Email').value = '';
    document.getElementById('Mobile').value = '';
    document.getElementById('Address').value = '';
}