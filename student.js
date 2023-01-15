class Information {
    constructor (id, name, email, phone, address, gender) {
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
            new Information (18234, "Nguyễn Văn A", "nguyenvana@gmail.com", "0786538297", "129 Nguyễn Trường Tộ", "Nam" ),
            new Information (18235, "Trần Văn B", "tranvanb@gmail.com", "0908634227", "35 Điện Biên Phủ", "Nam" ),
            new Information (18236, "Nguyễn Thị C", "nguyenthic@gmail.com", "0648375942", "32 Bùi Thị Xuân", "Nữ" )
        ]
        localStorage.setItem(data, JSON.stringify(information)); 
    } else {
        information = JSON.parse(localStorage.getItem(data));
    }
}

function renderInformation() {
    console.log=('a');
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
            <button class="btn-fix">Sửa</button>
            <button class="btn-delete">Xóa</button>
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

    if (id == "" || name == "" || email == "" || phone == "" || address == "" || gender == "") {
        alert("Bạn cần nhập đầy đủ thông tin");
    } else {
    let new_information = new Information (id, name, email, phone, address, gender );
    information.push(new_information);
    localStorage.setItem(data, JSON.stringify(information));
    renderInformation();
    clearInformation();
    }
}

function clearInformation() {
    document.getElementById("id").value = "";
    document.getElementById("name").value= "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("gender").value = "";
}

saveData();
renderInformation();

