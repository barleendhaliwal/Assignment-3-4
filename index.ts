enum Role { SUPERADMIN, ADMIN, SUBSCRIBER };
let users: any = [];
const DATA = [
    {
        "id": "1",
        "firstName": "Barleen",
        "middleName": "",
        "lastName": "Dhaliwal",
        "email": "barleen@soe.com",
        "phoneNumber": "99999999",
        "role": Role.SUBSCRIBER,
        "address": "4133"
    },
    {
        "id": "2",
        "firstName": "Jai",
        "middleName": "",
        "lastName": "Sharma",
        "email": "xyz@sourcefuse.com",
        "phoneNumber": "900900090",
        "role": Role.ADMIN,
        "address": "8A"
    },
    {
        "id": "3",
        "firstName": "Harry",
        "middleName": "Singh",
        "lastName": "Chahal",
        "email": "abc@abc.com",
        "phoneNumber": "809090809",
        "role": Role.SUBSCRIBER,
        "address": "Mohali"
    },
    {
        "id": "4",
        "firstName": "Palak",
        "middleName": "",
        "lastName": "Bansal",
        "email": "abc@abc.com",
        "phoneNumber": "809079809",
        "role": Role.SUPERADMIN,
        "address": "Zirakpur"
    },
    {
        "id": "5",
        "firstName": "Priyanka",
        "middleName": "Kaur",
        "lastName": "",
        "email": "xyz@abc.com",
        "phoneNumber": "909090456",
        "role": Role.ADMIN,
        "address": "Lucknow"
    }
]

interface User {

    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    role: Role;
    address: string;

}

//DECORATOR FUNCTION - naming convention for Decorators - Pascal Case
function FormatDate() {
    return function (target: any, name: string, descriptor: PropertyDescriptor) {
        const dateTime = document.getElementById("dateTime") as HTMLInputElement;
        dateTime.innerHTML = new Date().toLocaleString();
        setInterval(function () {
            dateTime.innerHTML = new Date().toLocaleString();
        }, 1000);
    }
}

class Crud<T> {

    items: Array<T>;

    constructor() {
        this.items = [];
    }
    @FormatDate()
    create(e: T): void {
        this.items.push(e)
    }

    update(i: number, e: T) {

        this.items[i] = e;
        showTable();
    }
    delete(i: number): void {
        this.items.splice(i, 1);
        console.log(this.items);
        showTable();
    }
}




function showTable() //function specific to type of object
{

    var table: HTMLTableElement = <HTMLTableElement>document.createElement("table"); // TS knows that only a generic html element is returned by createElement, hence we need to specify
    table.className = 'table table-hover';

    // EXTRACT VALUE FOR HTML HEADER. 
    let tr = table.insertRow(-1);
    let headerElements = ["ID", "First Name", "Middle Name", "Last Name", "Email", "Phone Number", "Role", "Address"];

    for (let i = 0; i < headerElements.length; i++) {
        let th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = headerElements[i];
        tr.appendChild(th);
    }
    let thEdit = document.createElement("th");      // TABLE HEADER.
    thEdit.innerHTML = "Edit";
    tr.appendChild(thEdit);
    let thDelete = document.createElement("th");      // TABLE HEADER.
    thDelete.innerHTML = "Delete";
    tr.appendChild(thDelete);
    let thSave = document.createElement("th");      // TABLE HEADER. 
    thSave.innerHTML = "Save";
    tr.appendChild(thSave);
    let thCancel = document.createElement("th");      // TABLE HEADER. 
    thCancel.innerHTML = "Cancel";
    tr.appendChild(thCancel);


    thSave.style.display = "none";
    thCancel.style.display = "none";
    thSave.id = "headerSave";
    thCancel.id = "headerCancel";


    //populate from json file

    for (let i = 0; i < users.items.length; i++) {

        tr = table.insertRow(-1);

        tr.id = "row" + (i);

        let cell1 = tr.insertCell(-1);
        let id = users.items[i].id;
        cell1.innerHTML = id;
        cell1.id = "row" + (i) + "Id";

        let cell2 = tr.insertCell(-1);
        let fname = users.items[i].firstName;
        cell2.innerHTML = fname;
        cell2.id = "row" + (i) + "Fname";


        let cell3 = tr.insertCell(-1);
        let mname = users.items[i].middleName;;
        cell3.innerHTML = mname;
        cell3.id = "row" + (i) + "Mname";

        let cell4 = tr.insertCell(-1);
        let lname = users.items[i].lastName;
        cell4.innerHTML = lname;
        cell4.id = "row" + (i) + "Lname";

        let cell5 = tr.insertCell(-1);
        let email = users.items[i].email;
        cell5.innerHTML = email;
        cell5.id = "row" + (i) + "Email";

        let cell6 = tr.insertCell(-1);
        let phone = users.items[i].phoneNumber;
        cell6.innerHTML = phone;
        cell6.id = "row" + (i) + "Phone";

        let cell7 = tr.insertCell(-1);
        let role = Role[users.items[i].role];
        cell7.innerHTML = role;
        cell7.id = "row" + (i) + "Role";

        let cell8 = tr.insertCell(-1);
        let add = users.items[i].address;
        cell8.innerHTML = add;
        cell8.id = "row" + (i) + "Address";

        cell1.className = "editable";
        cell2.className = "editable";
        cell3.className = "editable";
        cell4.className = "editable";
        cell5.className = "editable";
        cell6.className = "editable";
        cell7.className = "editable";
        cell8.className = "editable";

        //BUTTONS ON EACH ROW

        //EDIT
        let cellForEditButton = tr.insertCell(-1);
        let editButton = document.createElement('button');
        editButton.type = 'button';
        editButton.innerHTML = 'Edit';
        cellForEditButton.appendChild(editButton);
        editButton.addEventListener('click', function () { editRow(i) });

        //DELETE
        let cellForDeleteButton = tr.insertCell(-1);
        let deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.innerHTML = 'Delete';
        cellForDeleteButton.appendChild(deleteButton);
        deleteButton.addEventListener('click', function () { users.delete(i); });

        //SAVE
        let cellForSaveButton = tr.insertCell(-1);
        let saveButton = document.createElement('button');
        saveButton.type = 'button';
        saveButton.innerHTML = 'Save';
        cellForSaveButton.className = 'hiddenElements';
        cellForSaveButton.id = 'saveButtonRow' + i;
        cellForSaveButton.appendChild(saveButton);
        cellForSaveButton.style.display = "none";
        saveButton.addEventListener('click', function () {

            let updatedRowObject = getCurrentRowData(i);
            console.log(updatedRowObject);

            users.update(i, updatedRowObject);



            let saveButton = document.getElementById("saveButtonRow" + i)!;
            let cancelButton = document.getElementById("cancelButtonRow" + i)!;
            let headerSave = document.getElementById("headerSave")!;
            let headerCancel = document.getElementById("headerCancel")!;

            saveButton.style.display = "none";
            cancelButton.style.display = "none";
            headerSave.style.display = "none";
            headerCancel.style.display = "none";
        });

        //CANCEL
        var cellForCancelButton = tr.insertCell(-1);
        var cancelButton = document.createElement('button');
        cancelButton.type = 'button';
        cancelButton.innerHTML = 'Cancel';
        cellForCancelButton.className = 'hiddenElements';
        cellForCancelButton.id = 'cancelButtonRow' + (i);
        cellForCancelButton.appendChild(cancelButton);
        cellForCancelButton.style.display = "none";
        cancelButton.addEventListener('click', function () { cancelRow(i); });


    }

    var divContainer = document.getElementById("showData")!;
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    let loadButton = <HTMLButtonElement>document.getElementById("showDataButton")!;
    loadButton.value = "Refresh";


}
function getCurrentRowData(no: number) {


    let rowId = document.getElementById("row" + no + "Id")!.innerHTML;
    let rowFname = document.getElementById("row" + no + "Fname")!.innerHTML;
    let rowMname = document.getElementById("row" + no + "Mname")!.innerHTML;
    let rowLname = document.getElementById("row" + no + "Lname")!.innerHTML;
    let rowEmail = document.getElementById("row" + no + "Email")!.innerHTML;
    let rowPhone = document.getElementById("row" + no + "Phone")!.innerHTML;
    let rowRole = document.getElementById("row" + no + "Role")!.innerHTML;
    let rowAddress = document.getElementById("row" + no + "Address")!.innerHTML;
    let r = -1;
    if (rowRole.toLowerCase() === "superadmin")
        r = 0;
    else if (rowRole.toLowerCase() === "admin")
        r = 1;
    else
        r = 2;

    let obj: User = {
        id: rowId,
        firstName: rowFname,
        middleName: rowMname,
        lastName: rowLname,
        email: rowEmail,
        phoneNumber: rowPhone,
        role: r,
        address: rowAddress

    }

    return obj;
}

function cancelRow(no: number) {

    let row = 'row' + no;
    let currentRow = document.getElementById(row)!;
    currentRow.style.background = "white";
    //REVERT BACK TO ORIGINAL CONTENT


    let rowId = document.getElementById("row" + no + "Id")!;
    let rowFname = document.getElementById("row" + no + "Fname")!;
    let rowMname = document.getElementById("row" + no + "Mname")!;
    let rowLname = document.getElementById("row" + no + "Lname")!;
    let rowEmail = document.getElementById("row" + no + "Email")!;
    let rowPhone = document.getElementById("row" + no + "Phone")!;
    let rowRole = document.getElementById("row" + no + "Role")!;
    let rowAddress = document.getElementById("row" + no + "Address")!;

    rowId.innerHTML = users.items[no].id;
    rowFname.innerHTML = users.items[no].firstName;
    rowMname.innerHTML = users.items[no].middleName;
    rowLname.innerHTML = users.items[no].lastName;
    rowEmail.innerHTML = users.items[no].email;
    rowPhone.innerHTML = users.items[no].phoneNumber;
    rowRole.innerHTML = Role[users.items[no].role];
    rowAddress.innerHTML = users.items[no].address;


    //MAKE ROWS NON EDITABLE
    rowId.setAttribute("contenteditable", "false");
    rowFname.setAttribute("contenteditable", "false");
    rowMname.setAttribute("contenteditable", "false");
    rowLname.setAttribute("contenteditable", "false");
    rowEmail.setAttribute("contenteditable", "false");
    rowPhone.setAttribute("contenteditable", "false");
    rowRole.setAttribute("contenteditable", "false");
    rowAddress.setAttribute("contenteditable", "false");

    //HIDE SAVE AND DELETE COLUMNS

    let saveButton = document.getElementById("saveButtonRow" + no)!;
    let cancelButton = document.getElementById("cancelButtonRow" + no)!;
    let headerSave = document.getElementById("headerSave")!;
    let headerCancel = document.getElementById("headerCancel")!;

    saveButton.style.display = "none";
    cancelButton.style.display = "none";
    headerSave.style.display = "none";
    headerCancel.style.display = "none";

}

//MAKES THE CONTENT OF CURRENT ROW EDITABLE
function editRow(no: number) {
    let currentRow = document.getElementById("row" + no)!;
    currentRow.style.background = "yellow";

    //SHOW SAVE & CANCEL BUTTON
    let saveButton = document.getElementById("saveButtonRow" + no)!;
    let cancelButton = document.getElementById("cancelButtonRow" + no)!;
    let headerSave = document.getElementById("headerSave")!;
    let headerCancel = document.getElementById("headerCancel")!;


    saveButton.style.display = "";
    cancelButton.style.display = "";
    headerSave.style.display = "";
    headerCancel.style.display = "";

    //MAKE ROW EDITABLE 

    let rowId = document.getElementById("row" + no + "Id")!;
    let rowFname = document.getElementById("row" + no + "Fname")!;
    let rowMname = document.getElementById("row" + no + "Mname")!;
    let rowLname = document.getElementById("row" + no + "Lname")!;
    let rowEmail = document.getElementById("row" + no + "Email")!;
    let rowPhone = document.getElementById("row" + no + "Phone")!;
    let rowRole = document.getElementById("row" + no + "Role")!;
    let rowAddress = document.getElementById("row" + no + "Address")!;

    rowId.setAttribute("contenteditable", "true");
    rowFname.setAttribute("contenteditable", "true");
    rowMname.setAttribute("contenteditable", "true");
    rowLname.setAttribute("contenteditable", "true");
    rowEmail.setAttribute("contenteditable", "true");
    rowPhone.setAttribute("contenteditable", "true");
    rowRole.setAttribute("contenteditable", "true");
    rowAddress.setAttribute("contenteditable", "true");
}


async function main() {



    users = new Crud<User>(); //creating object of crud with generic type of user
    DATA.forEach(function (e: User) { users.create(e) }) //pushing objects of user type in array
    console.log(users);
    showTable();

}





