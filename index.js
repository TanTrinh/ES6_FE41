let number = 1;

{
    let number = 2;
    console.log('log lần 1', number);
}

console.log('log lần 2', number);

const PI = 3.141592654;

const sinhVien = {ma: 1, ten: 'nguyen van a'};

sinhVien.ma = 2;
sinhVien.ten = 'nguyen van b';


// ----------Arrow function------------
// Khai báo function theo es5
let showMessage = function(mess) {
    console.log(mess);
}

// Khai báo function theo es6
let showMessageES6 = (mess) => {
    console.log(mess);
}

// Đối với hàm có lệnh return
// es5
let tinhDiemTrungbinh = function(dToan, dLy, dHoa) {
    return (dToan + dLy + dHoa) / 3;
}

// es6
let tinhDiemTrungBinhES6 = (dToan, dLy, dHoa) => (dToan + dLy + dHoa) / 3;


// Khác biệt về ngữ cảnh con trỏ this
let hocVien = {
    hoTen: 'nguyen van a',
    lop: 'Front End 41',
    layThongTinHocVien: function() {
        let hienThiThongTin = () => {
            console.log('Họ Tên:', this.hoTen, 'Lớp:', this.lop);
        }
        hienThiThongTin();
    }
}

// hocVien.layThongTinHocVien();


// rest param (toán tử ...)
// let hienThiThongTinHocVien = function(hoTen, lop) {
//     console.log('họ tên: ' + hoTen);
//     console.log('lớp: ' + lop);
// }

// let hienThiThongTinHocVien = function(ma, hoTen, lop) {
//     console.log('mã: ' + ma);
//     console.log('họ tên: ' + hoTen);
//     console.log('lớp: ' + lop);
// }

let hienThiThongTinHocVien = function(...rest) {

    switch(rest.length)
    {
        case 2: {
            console.log('họ tên: ' + rest[0]);
            console.log('lớp: ' + rest[1]);
        };break;
        case 3: {
            console.log('mã: ' + rest[0]);
            console.log('họ tên: ' + rest[1]);
            console.log('lớp: ' + rest[2]);
        };break;
        default: console.log('không hợp lệ');
    }
}

hienThiThongTinHocVien(1, 'nguyễn văn a', 'fe 41');
hienThiThongTinHocVien('nguyễn văn a', 'fe 41');
hienThiThongTinHocVien('1', '2', '3', '4');