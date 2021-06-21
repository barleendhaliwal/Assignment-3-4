/// <reference path="./node_modules/@types/jquery/JQuery.d.ts" />;

// const data = require('./data.json')
// console.log(data[0].Address);
//import * as data from './data.json';
enum Role { SuperAdmin, Admin, Subscriber };
let users: any = [];
const data = [
    {
        "id": "1",
        "First Name": "Barleen",
        "Middle Name": "",
        "Last Name": "Dhaliwal",
        "Email": "barleen@soe.com",
        "Phone Number": "99999999",
        "Role": Role.Subscriber,
        "Address": "4133"
    },
    {
        "id": "2",
        "First Name": "Jai",
        "Middle Name": "",
        "Last Name": "Sharma",
        "Email": "xyz@sourcefuse.com",
        "Phone Number": "900900090",
        "Role": Role.Admin,
        "Address": "8A"
    },
    {
        "id": "3",
        "First Name": "Harry",
        "Middle Name": "Singh",
        "Last Name": "Chahal",
        "Email": "abc@abc.com",
        "Phone Number": "809090809",
        "Role": Role.Subscriber,
        "Address": "Mohali"
    },
    {
        "id": "4",
        "First Name": "Palak",
        "Middle Name": "",
        "Last Name": "Bansal",
        "Email": "abc@abc.com",
        "Phone Number": "809079809",
        "Role": Role.SuperAdmin,
        "Address": "Zirakpur"
    },
    {
        "id": "5",
        "First Name": "Priyanka",
        "Middle Name": "Kaur",
        "Last Name": "",
        "Email": "xyz@abc.com",
        "Phone Number": "909090456",
        "Role": Role.Admin,
        "Address": "Lucknow"
    }
]

interface USER {

    id: string;
    "First Name": string;
    "Middle Name": string;
    "Last Name": string;
    Email: string;
    "Phone Number": string;
    Role: Role;
    Address: string;

}

//DECORATOR FUNCTION
function FormatDate() {
    return function (target: any, name: string, descriptor: PropertyDescriptor) {
        const dtm = document.getElementById("date_time") as HTMLInputElement;
        dtm.innerHTML = new Date().toLocaleString();
        setInterval(function () {
            dtm.innerHTML = new Date().toLocaleString();
        }, 1000);
    }
}

class CRUD<T> {

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
        showtable();
    }
    delete(i: number): void {
        this.items.splice(i, 1);
        console.log(this.items);
        showtable();
    }
}




function showtable() //function specific to type of object
{

    var table: HTMLTableElement = <HTMLTableElement>document.createElement("table"); // TS knows that only a generic html element is returned by createElement, hence we need to specify
    table.className = 'table table-hover';

    // EXTRACT VALUE FOR HTML HEADER. 
    let tr = table.insertRow(-1);
    let header_elements = ["ID", "First Name", "Middle Name", "Last Name", "Email", "Phone Number", "Role", "Address"];

    for (let i = 0; i < header_elements.length; i++) {
        let th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = header_elements[i];
        tr.appendChild(th);
    }
    let th_edit = document.createElement("th");      // TABLE HEADER.
    th_edit.innerHTML = "Edit";
    tr.appendChild(th_edit);
    let th_delete = document.createElement("th");      // TABLE HEADER.
    th_delete.innerHTML = "Delete";
    tr.appendChild(th_delete);
    let th_save = document.createElement("th");      // TABLE HEADER. 
    th_save.innerHTML = "Save";
    tr.appendChild(th_save);
    let th_cancel = document.createElement("th");      // TABLE HEADER. 
    th_cancel.innerHTML = "Cancel";
    tr.appendChild(th_cancel);


    th_save.style.display = "none";
    th_cancel.style.display = "none";
    th_save.id = "header_save";
    th_cancel.id = "header_cancel";


    //populate from json file

    for (let i = 0; i < users.items.length; i++) {

        tr = table.insertRow(-1);

        tr.id = "row" + (i);

        let cell1 = tr.insertCell(-1);
        let id = users.items[i].id;
        cell1.innerHTML = id;
        cell1.id = "row_" + (i) + "_id";

        let cell2 = tr.insertCell(-1);
        let fname = users.items[i]["First Name"];
        cell2.innerHTML = fname;
        cell2.id = "row_" + (i) + "_fname";


        let cell3 = tr.insertCell(-1);
        let mname = users.items[i]["Middle Name"];;
        cell3.innerHTML = mname;
        cell3.id = "row_" + (i) + "_mname";

        let cell4 = tr.insertCell(-1);
        let lname = users.items[i]["Last Name"];
        cell4.innerHTML = lname;
        cell4.id = "row_" + (i) + "_lname";

        let cell5 = tr.insertCell(-1);
        let email = users.items[i].Email;
        cell5.innerHTML = email;
        cell5.id = "row_" + (i) + "_email";

        let cell6 = tr.insertCell(-1);
        let phone = users.items[i]["Phone Number"];
        cell6.innerHTML = phone;
        cell6.id = "row_" + (i) + "_phone";

        let cell7 = tr.insertCell(-1);
        let role = Role[users.items[i].Role];
        cell7.innerHTML = role;
        cell7.id = "row_" + (i) + "_role";

        let cell8 = tr.insertCell(-1);
        let add = users.items[i].Address;
        cell8.innerHTML = add;
        cell8.id = "row_" + (i) + "_address";

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
        let cell_for_edit_button = tr.insertCell(-1);
        let edit_button = document.createElement('button');
        edit_button.type = 'button';
        edit_button.innerHTML = 'Edit';
        cell_for_edit_button.appendChild(edit_button);
        edit_button.addEventListener('click', function () { edit_row(i) });

        //DELETE
        let cell_for_delete_button = tr.insertCell(-1);
        let delete_button = document.createElement('button');
        delete_button.type = 'button';
        delete_button.innerHTML = 'Delete';
        cell_for_delete_button.appendChild(delete_button);
        delete_button.addEventListener('click', function () { users.delete(i); });

        //SAVE
        let cell_for_save_button = tr.insertCell(-1);
        let save_button = document.createElement('button');
        save_button.type = 'button';
        save_button.innerHTML = 'Save';
        cell_for_save_button.className = 'hidden_elements';
        cell_for_save_button.id = 'save_buttonrow' + i;
        cell_for_save_button.appendChild(save_button);
        cell_for_save_button.style.display = "none";
        save_button.addEventListener('click', function () {

            let updated_row_object = get_current_row_data(i);
            console.log(updated_row_object);

            users.update(i, updated_row_object);



            let save_button = document.getElementById("save_buttonrow" + i)!;
            let cancel_button = document.getElementById("cancel_buttonrow" + i)!;
            let header_save = document.getElementById("header_save")!;
            let header_cancel = document.getElementById("header_cancel")!;

            save_button.style.display = "none";
            cancel_button.style.display = "none";
            header_save.style.display = "none";
            header_cancel.style.display = "none";
        });

        //CANCEL
        var cell_for_cancel_button = tr.insertCell(-1);
        var cancel_button = document.createElement('button');
        cancel_button.type = 'button';
        cancel_button.innerHTML = 'Cancel';
        cell_for_cancel_button.className = 'hidden_elements';
        cell_for_cancel_button.id = 'cancel_buttonrow' + (i);
        cell_for_cancel_button.appendChild(cancel_button);
        cell_for_cancel_button.style.display = "none";
        cancel_button.addEventListener('click', function () { cancel_row(i); });


    }

    var divContainer = document.getElementById("showData")!;
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    let load_button = <HTMLButtonElement>document.getElementById("show_data_button")!;
    load_button.value = "Refresh";


}
function get_current_row_data(no: number) {


    let row_id = document.getElementById("row_" + no + "_id")!.innerHTML;
    let row_fname = document.getElementById("row_" + no + "_fname")!.innerHTML;
    let row_mname = document.getElementById("row_" + no + "_mname")!.innerHTML;
    let row_lname = document.getElementById("row_" + no + "_lname")!.innerHTML;
    let row_email = document.getElementById("row_" + no + "_email")!.innerHTML;
    let row_phone = document.getElementById("row_" + no + "_phone")!.innerHTML;
    let row_role = document.getElementById("row_" + no + "_role")!.innerHTML;
    let row_address = document.getElementById("row_" + no + "_address")!.innerHTML;
    let r = -1;
    if (row_role.toLowerCase() === "SuperAdmin")
        r = 0;
    else if (row_role.toLowerCase() === "Admin")
        r = 1;
    else
        r = 2;

    let obj: USER = {
        id: row_id,
        "First Name": row_fname,
        "Middle Name": row_mname,
        "Last Name": row_lname,
        Email: row_email,
        "Phone Number": row_phone,
        Role: r,
        Address: row_address

    }

    return obj;
}

function cancel_row(no: number) {

    let row = 'row' + no;
    let current_row = document.getElementById(row)!;
    current_row.style.background = "white";
    //REVERT BACK TO ORIGINAL CONTENT


    let row_id = document.getElementById("row_" + no + "_id")!;
    let row_fname = document.getElementById("row_" + no + "_fname")!;
    let row_mname = document.getElementById("row_" + no + "_mname")!;
    let row_lname = document.getElementById("row_" + no + "_lname")!;
    let row_email = document.getElementById("row_" + no + "_email")!;
    let row_phone = document.getElementById("row_" + no + "_phone")!;
    let row_role = document.getElementById("row_" + no + "_role")!;
    let row_address = document.getElementById("row_" + no + "_address")!;

    row_id.innerHTML = users.items[no].id;
    row_fname.innerHTML = users.items[no]["First Name"];
    row_mname.innerHTML = users.items[no]["Middle Name"];
    row_lname.innerHTML = users.items[no]["Last Name"];
    row_email.innerHTML = users.items[no].Email;
    row_phone.innerHTML = users.items[no]["Phone Number"];
    row_role.innerHTML = Role[users.items[no].Role];
    row_address.innerHTML = users.items[no].Address;


    //MAKE ROWS NON EDITABLE
    row_id.setAttribute("contenteditable", "false");
    row_fname.setAttribute("contenteditable", "false");
    row_mname.setAttribute("contenteditable", "false");
    row_lname.setAttribute("contenteditable", "false");
    row_email.setAttribute("contenteditable", "false");
    row_phone.setAttribute("contenteditable", "false");
    row_role.setAttribute("contenteditable", "false");
    row_address.setAttribute("contenteditable", "false");

    //HIDE SAVE AND DELETE COLUMNS

    let save_button = document.getElementById("save_buttonrow" + no)!;
    let cancel_button = document.getElementById("cancel_buttonrow" + no)!;
    let header_save = document.getElementById("header_save")!;
    let header_cancel = document.getElementById("header_cancel")!;

    save_button.style.display = "none";
    cancel_button.style.display = "none";
    header_save.style.display = "none";
    header_cancel.style.display = "none";

}

//MAKES THE CONTENT OF CURRENT ROW EDITABLE
function edit_row(no: number) {
    let current_row = document.getElementById("row" + no)!;
    current_row.style.background = "yellow";

    //SHOW SAVE & CANCEL BUTTON
    let save_button = document.getElementById("save_buttonrow" + no)!;
    let cancel_button = document.getElementById("cancel_buttonrow" + no)!;
    let header_save = document.getElementById("header_save")!;
    let header_cancel = document.getElementById("header_cancel")!;


    save_button.style.display = "";
    cancel_button.style.display = "";
    header_save.style.display = "";
    header_cancel.style.display = "";

    //MAKE ROW EDITABLE 

    let row_id = document.getElementById("row_" + no + "_id")!;
    let row_fname = document.getElementById("row_" + no + "_fname")!;
    let row_mname = document.getElementById("row_" + no + "_mname")!;
    let row_lname = document.getElementById("row_" + no + "_lname")!;
    let row_email = document.getElementById("row_" + no + "_email")!;
    let row_phone = document.getElementById("row_" + no + "_phone")!;
    let row_role = document.getElementById("row_" + no + "_role")!;
    let row_address = document.getElementById("row_" + no + "_address")!;

    row_id.setAttribute("contenteditable", "true");
    row_fname.setAttribute("contenteditable", "true");
    row_mname.setAttribute("contenteditable", "true");
    row_lname.setAttribute("contenteditable", "true");
    row_email.setAttribute("contenteditable", "true");
    row_phone.setAttribute("contenteditable", "true");
    row_role.setAttribute("contenteditable", "true");
    row_address.setAttribute("contenteditable", "true");
}


async function main() {



    users = new CRUD<USER>(); //creating object of crud with generic type of user
    data.forEach(function (e: USER) { users.create(e) }) //pushing objects of user type in array
    console.log(users);
    showtable();

}





