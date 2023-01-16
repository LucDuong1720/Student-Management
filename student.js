class Information {
    constructor(id, name, email, phone, address, gender) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.gender = gender;
    }
}

let information = [];

const data = "data";

function saveData() {
    if (localStorage.getItem(data) == null) {
        information = [
            new Information(18234, "Nguyễn Văn A", "nguyenvana@gmail.com", "0786538297", "129 Nguyễn Trường Tộ", "Nam"),
            new Information(18297, "Trần Văn B", "tranvanb@gmail.com", "0908634227", "35 Điện Biên Phủ", "Nam"),
            new Information(18890, "Nguyễn Thị C", "nguyenthic@gmail.com", "0648375942", "32 Bùi Thị Xuân", "Nữ")
        ]
        localStorage.setItem(data, JSON.stringify(information));
    } else {
        information = JSON.parse(localStorage.getItem(data));
    }
}

function renderInformation() {
    let addInformation = document.getElementById("addInformation");
    addInformation.innerHTML = "";
    for (let i = 0; i < information.length; i++) {
        addInformation.innerHTML += `
        <tr>
        <td>${i + 1}</td>
        <td>${information[i].id}</td>
        <td>${information[i].name}</td>
        <td>${information[i].email}</td>
        <td>${information[i].phone}</td>
        <td>${information[i].address}</td>
        <td>${information[i].gender}</td>
        <td>
            <button class="btn-fix" onclick="editInformation(${information[i].id})">Sửa</button>
            <button class="btn-delete" onclick="deleteInformation(${[i]})">Xóa</button>
        </td>
    </tr>
    `;
    }
}

function createInformation() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let gender = document.getElementById("gender").value;

    if (name == "" || email == "" || phone == "" || address == "" || gender == "") {
        alert("Bạn cần nhập đầy đủ thông tin");
    } else {
        let new_information = new Information(id, name, email, phone, address, gender);
        information.push(new_information);
        localStorage.setItem(data, JSON.stringify(information));
        renderInformation();
        clearInformation();
    }
}

function findMaxId() {
    let max = 0;
    for (let i = 0; i < information.length; i++) {
        if (information[i].id > max) {
            max = information[i].id
        }
    }
    return max;
}

function clearInformation() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("gender").value = "";
}

function deleteInformation(index) {
    information.splice(index, 1);
    localStorage.setItem(data, JSON.stringify(information));
    renderInformation();
}

function editInformation(x) {
    for (let i = 0; i < information.length; i++) {
        if (information[i].id == x) {
            document.getElementById("id").value = information[i].id;
            document.getElementById("name").value = information[i].name;
            document.getElementById("email").value = information[i].email;
            document.getElementById("phone").value = information[i].phone;
            document.getElementById("address").value = information[i].address;
            document.getElementById("gender").value = information[i].gender;
        }
    }
}

saveData();
renderInformation();

