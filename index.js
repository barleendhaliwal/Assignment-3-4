"use strict";
/// <reference path="./node_modules/@types/jquery/JQuery.d.ts" />;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// const data = require('./data.json')
// console.log(data[0].Address);
//import * as data from './data.json';
var Role;
(function (Role) {
    Role[Role["SuperAdmin"] = 0] = "SuperAdmin";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["Subscriber"] = 2] = "Subscriber";
})(Role || (Role = {}));
;
var users = [];
var data = [
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
];
//DECORATOR FUNCTION
function FormatDate() {
    return function (target, name, descriptor) {
        var dtm = document.getElementById("date_time");
        dtm.innerHTML = new Date().toLocaleString();
        setInterval(function () {
            dtm.innerHTML = new Date().toLocaleString();
        }, 1000);
    };
}
var CRUD = /** @class */ (function () {
    function CRUD() {
        this.items = [];
    }
    CRUD.prototype.create = function (e) {
        this.items.push(e);
    };
    CRUD.prototype.update = function (i, e) {
        this.items[i] = e;
        showtable();
    };
    CRUD.prototype.delete = function (i) {
        this.items.splice(i, 1);
        console.log(this.items);
        showtable();
    };
    __decorate([
        FormatDate(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CRUD.prototype, "create", null);
    return CRUD;
}());
function showtable() {
    var table = document.createElement("table"); // TS knows that only a generic html element is returned by createElement, hence we need to specify
    table.className = 'table table-hover';
    // EXTRACT VALUE FOR HTML HEADER. 
    var tr = table.insertRow(-1);
    var header_elements = ["ID", "First Name", "Middle Name", "Last Name", "Email", "Phone Number", "Role", "Address"];
    for (var i = 0; i < header_elements.length; i++) {
        var th = document.createElement("th"); // TABLE HEADER.
        th.innerHTML = header_elements[i];
        tr.appendChild(th);
    }
    var th_edit = document.createElement("th"); // TABLE HEADER.
    th_edit.innerHTML = "Edit";
    tr.appendChild(th_edit);
    var th_delete = document.createElement("th"); // TABLE HEADER.
    th_delete.innerHTML = "Delete";
    tr.appendChild(th_delete);
    var th_save = document.createElement("th"); // TABLE HEADER. 
    th_save.innerHTML = "Save";
    tr.appendChild(th_save);
    var th_cancel = document.createElement("th"); // TABLE HEADER. 
    th_cancel.innerHTML = "Cancel";
    tr.appendChild(th_cancel);
    th_save.style.display = "none";
    th_cancel.style.display = "none";
    th_save.id = "header_save";
    th_cancel.id = "header_cancel";
    var _loop_1 = function (i) {
        tr = table.insertRow(-1);
        tr.id = "row" + (i);
        var cell1 = tr.insertCell(-1);
        var id = users.items[i].id;
        cell1.innerHTML = id;
        cell1.id = "row_" + (i) + "_id";
        var cell2 = tr.insertCell(-1);
        var fname = users.items[i]["First Name"];
        cell2.innerHTML = fname;
        cell2.id = "row_" + (i) + "_fname";
        var cell3 = tr.insertCell(-1);
        var mname = users.items[i]["Middle Name"];
        ;
        cell3.innerHTML = mname;
        cell3.id = "row_" + (i) + "_mname";
        var cell4 = tr.insertCell(-1);
        var lname = users.items[i]["Last Name"];
        cell4.innerHTML = lname;
        cell4.id = "row_" + (i) + "_lname";
        var cell5 = tr.insertCell(-1);
        var email = users.items[i].Email;
        cell5.innerHTML = email;
        cell5.id = "row_" + (i) + "_email";
        var cell6 = tr.insertCell(-1);
        var phone = users.items[i]["Phone Number"];
        cell6.innerHTML = phone;
        cell6.id = "row_" + (i) + "_phone";
        var cell7 = tr.insertCell(-1);
        var role = Role[users.items[i].Role];
        cell7.innerHTML = role;
        cell7.id = "row_" + (i) + "_role";
        var cell8 = tr.insertCell(-1);
        var add = users.items[i].Address;
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
        var cell_for_edit_button = tr.insertCell(-1);
        var edit_button = document.createElement('button');
        edit_button.type = 'button';
        edit_button.innerHTML = 'Edit';
        cell_for_edit_button.appendChild(edit_button);
        edit_button.addEventListener('click', function () { edit_row(i); });
        //DELETE
        var cell_for_delete_button = tr.insertCell(-1);
        var delete_button = document.createElement('button');
        delete_button.type = 'button';
        delete_button.innerHTML = 'Delete';
        cell_for_delete_button.appendChild(delete_button);
        delete_button.addEventListener('click', function () { users.delete(i); });
        //SAVE
        var cell_for_save_button = tr.insertCell(-1);
        var save_button = document.createElement('button');
        save_button.type = 'button';
        save_button.innerHTML = 'Save';
        cell_for_save_button.className = 'hidden_elements';
        cell_for_save_button.id = 'save_buttonrow' + i;
        cell_for_save_button.appendChild(save_button);
        cell_for_save_button.style.display = "none";
        save_button.addEventListener('click', function () {
            var updated_row_object = get_current_row_data(i);
            console.log(updated_row_object);
            users.update(i, updated_row_object);
            var save_button = document.getElementById("save_buttonrow" + i);
            var cancel_button = document.getElementById("cancel_buttonrow" + i);
            var header_save = document.getElementById("header_save");
            var header_cancel = document.getElementById("header_cancel");
            save_button.style.display = "none";
            cancel_button.style.display = "none";
            header_save.style.display = "none";
            header_cancel.style.display = "none";
        });
        //CANCEL
        cell_for_cancel_button = tr.insertCell(-1);
        cancel_button = document.createElement('button');
        cancel_button.type = 'button';
        cancel_button.innerHTML = 'Cancel';
        cell_for_cancel_button.className = 'hidden_elements';
        cell_for_cancel_button.id = 'cancel_buttonrow' + (i);
        cell_for_cancel_button.appendChild(cancel_button);
        cell_for_cancel_button.style.display = "none";
        cancel_button.addEventListener('click', function () { cancel_row(i); });
    };
    var cell_for_cancel_button, cancel_button;
    //populate from json file
    for (var i = 0; i < users.items.length; i++) {
        _loop_1(i);
    }
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    var load_button = document.getElementById("show_data_button");
    load_button.value = "Refresh";
}
function get_current_row_data(no) {
    var row_id = document.getElementById("row_" + no + "_id").innerHTML;
    var row_fname = document.getElementById("row_" + no + "_fname").innerHTML;
    var row_mname = document.getElementById("row_" + no + "_mname").innerHTML;
    var row_lname = document.getElementById("row_" + no + "_lname").innerHTML;
    var row_email = document.getElementById("row_" + no + "_email").innerHTML;
    var row_phone = document.getElementById("row_" + no + "_phone").innerHTML;
    var row_role = document.getElementById("row_" + no + "_role").innerHTML;
    var row_address = document.getElementById("row_" + no + "_address").innerHTML;
    var r = -1;
    if (row_role.toLowerCase() === "SuperAdmin")
        r = 0;
    else if (row_role.toLowerCase() === "Admin")
        r = 1;
    else
        r = 2;
    var obj = {
        id: row_id,
        "First Name": row_fname,
        "Middle Name": row_mname,
        "Last Name": row_lname,
        Email: row_email,
        "Phone Number": row_phone,
        Role: r,
        Address: row_address
    };
    return obj;
}
function cancel_row(no) {
    var row = 'row' + no;
    var current_row = document.getElementById(row);
    current_row.style.background = "white";
    //REVERT BACK TO ORIGINAL CONTENT
    var row_id = document.getElementById("row_" + no + "_id");
    var row_fname = document.getElementById("row_" + no + "_fname");
    var row_mname = document.getElementById("row_" + no + "_mname");
    var row_lname = document.getElementById("row_" + no + "_lname");
    var row_email = document.getElementById("row_" + no + "_email");
    var row_phone = document.getElementById("row_" + no + "_phone");
    var row_role = document.getElementById("row_" + no + "_role");
    var row_address = document.getElementById("row_" + no + "_address");
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
    var save_button = document.getElementById("save_buttonrow" + no);
    var cancel_button = document.getElementById("cancel_buttonrow" + no);
    var header_save = document.getElementById("header_save");
    var header_cancel = document.getElementById("header_cancel");
    save_button.style.display = "none";
    cancel_button.style.display = "none";
    header_save.style.display = "none";
    header_cancel.style.display = "none";
}
//MAKES THE CONTENT OF CURRENT ROW EDITABLE
function edit_row(no) {
    var current_row = document.getElementById("row" + no);
    current_row.style.background = "yellow";
    //SHOW SAVE & CANCEL BUTTON
    var save_button = document.getElementById("save_buttonrow" + no);
    var cancel_button = document.getElementById("cancel_buttonrow" + no);
    var header_save = document.getElementById("header_save");
    var header_cancel = document.getElementById("header_cancel");
    save_button.style.display = "";
    cancel_button.style.display = "";
    header_save.style.display = "";
    header_cancel.style.display = "";
    //MAKE ROW EDITABLE 
    var row_id = document.getElementById("row_" + no + "_id");
    var row_fname = document.getElementById("row_" + no + "_fname");
    var row_mname = document.getElementById("row_" + no + "_mname");
    var row_lname = document.getElementById("row_" + no + "_lname");
    var row_email = document.getElementById("row_" + no + "_email");
    var row_phone = document.getElementById("row_" + no + "_phone");
    var row_role = document.getElementById("row_" + no + "_role");
    var row_address = document.getElementById("row_" + no + "_address");
    row_id.setAttribute("contenteditable", "true");
    row_fname.setAttribute("contenteditable", "true");
    row_mname.setAttribute("contenteditable", "true");
    row_lname.setAttribute("contenteditable", "true");
    row_email.setAttribute("contenteditable", "true");
    row_phone.setAttribute("contenteditable", "true");
    row_role.setAttribute("contenteditable", "true");
    row_address.setAttribute("contenteditable", "true");
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            users = new CRUD(); //creating object of crud with generic type of user
            data.forEach(function (e) { users.create(e); }); //pushing objects of user type in array
            console.log(users);
            showtable();
            return [2 /*return*/];
        });
    });
}
