"use strict";
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
var Role;
(function (Role) {
    Role[Role["SUPERADMIN"] = 0] = "SUPERADMIN";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["SUBSCRIBER"] = 2] = "SUBSCRIBER";
})(Role || (Role = {}));
;
var users = [];
var DATA = [
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
];
//DECORATOR FUNCTION - naming convention for Decorators - Pascal Case
function FormatDate() {
    return function (target, name, descriptor) {
        var dateTime = document.getElementById("dateTime");
        dateTime.innerHTML = new Date().toLocaleString();
        setInterval(function () {
            dateTime.innerHTML = new Date().toLocaleString();
        }, 1000);
    };
}
var Crud = /** @class */ (function () {
    function Crud() {
        this.items = [];
    }
    Crud.prototype.create = function (e) {
        this.items.push(e);
    };
    Crud.prototype.update = function (i, e) {
        this.items[i] = e;
        showTable();
    };
    Crud.prototype.delete = function (i) {
        this.items.splice(i, 1);
        console.log(this.items);
        showTable();
    };
    __decorate([
        FormatDate(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Crud.prototype, "create", null);
    return Crud;
}());
function showTable() {
    var table = document.createElement("table"); // TS knows that only a generic html element is returned by createElement, hence we need to specify
    table.className = 'table table-hover';
    // EXTRACT VALUE FOR HTML HEADER. 
    var tr = table.insertRow(-1);
    var headerElements = ["ID", "First Name", "Middle Name", "Last Name", "Email", "Phone Number", "Role", "Address"];
    for (var i = 0; i < headerElements.length; i++) {
        var th = document.createElement("th"); // TABLE HEADER.
        th.innerHTML = headerElements[i];
        tr.appendChild(th);
    }
    var thEdit = document.createElement("th"); // TABLE HEADER.
    thEdit.innerHTML = "Edit";
    tr.appendChild(thEdit);
    var thDelete = document.createElement("th"); // TABLE HEADER.
    thDelete.innerHTML = "Delete";
    tr.appendChild(thDelete);
    var thSave = document.createElement("th"); // TABLE HEADER. 
    thSave.innerHTML = "Save";
    tr.appendChild(thSave);
    var thCancel = document.createElement("th"); // TABLE HEADER. 
    thCancel.innerHTML = "Cancel";
    tr.appendChild(thCancel);
    thSave.style.display = "none";
    thCancel.style.display = "none";
    thSave.id = "headerSave";
    thCancel.id = "headerCancel";
    var _loop_1 = function (i) {
        tr = table.insertRow(-1);
        tr.id = "row" + (i);
        var cell1 = tr.insertCell(-1);
        var id = users.items[i].id;
        cell1.innerHTML = id;
        cell1.id = "row" + (i) + "Id";
        var cell2 = tr.insertCell(-1);
        var fname = users.items[i].firstName;
        cell2.innerHTML = fname;
        cell2.id = "row" + (i) + "Fname";
        var cell3 = tr.insertCell(-1);
        var mname = users.items[i].middleName;
        ;
        cell3.innerHTML = mname;
        cell3.id = "row" + (i) + "Mname";
        var cell4 = tr.insertCell(-1);
        var lname = users.items[i].lastName;
        cell4.innerHTML = lname;
        cell4.id = "row" + (i) + "Lname";
        var cell5 = tr.insertCell(-1);
        var email = users.items[i].email;
        cell5.innerHTML = email;
        cell5.id = "row" + (i) + "Email";
        var cell6 = tr.insertCell(-1);
        var phone = users.items[i].phoneNumber;
        cell6.innerHTML = phone;
        cell6.id = "row" + (i) + "Phone";
        var cell7 = tr.insertCell(-1);
        var role = Role[users.items[i].role];
        cell7.innerHTML = role;
        cell7.id = "row" + (i) + "Role";
        var cell8 = tr.insertCell(-1);
        var add = users.items[i].address;
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
        var cellForEditButton = tr.insertCell(-1);
        var editButton = document.createElement('button');
        editButton.type = 'button';
        editButton.innerHTML = 'Edit';
        cellForEditButton.appendChild(editButton);
        editButton.addEventListener('click', function () { editRow(i); });
        //DELETE
        var cellForDeleteButton = tr.insertCell(-1);
        var deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.innerHTML = 'Delete';
        cellForDeleteButton.appendChild(deleteButton);
        deleteButton.addEventListener('click', function () { users.delete(i); });
        //SAVE
        var cellForSaveButton = tr.insertCell(-1);
        var saveButton = document.createElement('button');
        saveButton.type = 'button';
        saveButton.innerHTML = 'Save';
        cellForSaveButton.className = 'hiddenElements';
        cellForSaveButton.id = 'saveButtonRow' + i;
        cellForSaveButton.appendChild(saveButton);
        cellForSaveButton.style.display = "none";
        saveButton.addEventListener('click', function () {
            var updatedRowObject = getCurrentRowData(i);
            console.log(updatedRowObject);
            users.update(i, updatedRowObject);
            var saveButton = document.getElementById("saveButtonRow" + i);
            var cancelButton = document.getElementById("cancelButtonRow" + i);
            var headerSave = document.getElementById("headerSave");
            var headerCancel = document.getElementById("headerCancel");
            saveButton.style.display = "none";
            cancelButton.style.display = "none";
            headerSave.style.display = "none";
            headerCancel.style.display = "none";
        });
        //CANCEL
        cellForCancelButton = tr.insertCell(-1);
        cancelButton = document.createElement('button');
        cancelButton.type = 'button';
        cancelButton.innerHTML = 'Cancel';
        cellForCancelButton.className = 'hiddenElements';
        cellForCancelButton.id = 'cancelButtonRow' + (i);
        cellForCancelButton.appendChild(cancelButton);
        cellForCancelButton.style.display = "none";
        cancelButton.addEventListener('click', function () { cancelRow(i); });
    };
    var cellForCancelButton, cancelButton;
    //populate from json file
    for (var i = 0; i < users.items.length; i++) {
        _loop_1(i);
    }
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    var loadButton = document.getElementById("showDataButton");
    loadButton.value = "Refresh";
}
function getCurrentRowData(no) {
    var rowId = document.getElementById("row" + no + "Id").innerHTML;
    var rowFname = document.getElementById("row" + no + "Fname").innerHTML;
    var rowMname = document.getElementById("row" + no + "Mname").innerHTML;
    var rowLname = document.getElementById("row" + no + "Lname").innerHTML;
    var rowEmail = document.getElementById("row" + no + "Email").innerHTML;
    var rowPhone = document.getElementById("row" + no + "Phone").innerHTML;
    var rowRole = document.getElementById("row" + no + "Role").innerHTML;
    var rowAddress = document.getElementById("row" + no + "Address").innerHTML;
    var r = -1;
    if (rowRole.toLowerCase() === "superadmin")
        r = 0;
    else if (rowRole.toLowerCase() === "admin")
        r = 1;
    else
        r = 2;
    var obj = {
        id: rowId,
        firstName: rowFname,
        middleName: rowMname,
        lastName: rowLname,
        email: rowEmail,
        phoneNumber: rowPhone,
        role: r,
        address: rowAddress
    };
    return obj;
}
function cancelRow(no) {
    var row = 'row' + no;
    var currentRow = document.getElementById(row);
    currentRow.style.background = "white";
    //REVERT BACK TO ORIGINAL CONTENT
    var rowId = document.getElementById("row" + no + "Id");
    var rowFname = document.getElementById("row" + no + "Fname");
    var rowMname = document.getElementById("row" + no + "Mname");
    var rowLname = document.getElementById("row" + no + "Lname");
    var rowEmail = document.getElementById("row" + no + "Email");
    var rowPhone = document.getElementById("row" + no + "Phone");
    var rowRole = document.getElementById("row" + no + "Role");
    var rowAddress = document.getElementById("row" + no + "Address");
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
    var saveButton = document.getElementById("saveButtonRow" + no);
    var cancelButton = document.getElementById("cancelButtonRow" + no);
    var headerSave = document.getElementById("headerSave");
    var headerCancel = document.getElementById("headerCancel");
    saveButton.style.display = "none";
    cancelButton.style.display = "none";
    headerSave.style.display = "none";
    headerCancel.style.display = "none";
}
//MAKES THE CONTENT OF CURRENT ROW EDITABLE
function editRow(no) {
    var currentRow = document.getElementById("row" + no);
    currentRow.style.background = "yellow";
    //SHOW SAVE & CANCEL BUTTON
    var saveButton = document.getElementById("saveButtonRow" + no);
    var cancelButton = document.getElementById("cancelButtonRow" + no);
    var headerSave = document.getElementById("headerSave");
    var headerCancel = document.getElementById("headerCancel");
    saveButton.style.display = "";
    cancelButton.style.display = "";
    headerSave.style.display = "";
    headerCancel.style.display = "";
    //MAKE ROW EDITABLE 
    var rowId = document.getElementById("row" + no + "Id");
    var rowFname = document.getElementById("row" + no + "Fname");
    var rowMname = document.getElementById("row" + no + "Mname");
    var rowLname = document.getElementById("row" + no + "Lname");
    var rowEmail = document.getElementById("row" + no + "Email");
    var rowPhone = document.getElementById("row" + no + "Phone");
    var rowRole = document.getElementById("row" + no + "Role");
    var rowAddress = document.getElementById("row" + no + "Address");
    rowId.setAttribute("contenteditable", "true");
    rowFname.setAttribute("contenteditable", "true");
    rowMname.setAttribute("contenteditable", "true");
    rowLname.setAttribute("contenteditable", "true");
    rowEmail.setAttribute("contenteditable", "true");
    rowPhone.setAttribute("contenteditable", "true");
    rowRole.setAttribute("contenteditable", "true");
    rowAddress.setAttribute("contenteditable", "true");
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            users = new Crud(); //creating object of crud with generic type of user
            DATA.forEach(function (e) { users.create(e); }); //pushing objects of user type in array
            console.log(users);
            showTable();
            return [2 /*return*/];
        });
    });
}
