// Bài 1: Viết chương trình cộng hai số
/* 
function sum(){
    let a = Number(prompt("Nhập vào số đầu tiên:"))
    let b = Number(prompt("Nhập vào số thứ hai:"))
    let c = a + b
    return console.log(c);
    
}sum()
 */
// Bài 2: Tính tổng các số lẻ trong mảng. Sử dụng Return
/* 
function tongCacSoLe(){
    let array = [1,2,3,4,5,6,7]
    let c = 0
    for (i=0; i<array.length; i++){
        if (Number(array[i]) % 2 === 1){
            c = c + Number(array[i])
        }
    }console.log(c);
}tongCacSoLe()
*/

// // Bài 3:
// Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất lớn hơn
// tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng.Nếu giá trị của
// tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham số.

// function haiNguoiban(a,b){
//     if (Number(a) > Number(b)){
//         alert("số a lớn hơn số b")
//     } else if (Number(a) < Number(b)){
//         let c = Number(a) + Number(b)
//         alert(c)
//     }
// }haiNguoiban(4,5)

// Bài 4: Thêm các hàm alert() vào những vị trí thích hợp
// bạn có thể nhìn thấy giá trị của biến result trước và sau lời gọi hàm.
// function addNumbers() {
//     firstNum = 4;
//     secondNum = 8;
//     result = firstNum + secondNum;
//     return result;
// }
// result = 0;
// alert(`Truoc khi dung function ${result}`)
// result = addNumbers();
// alert(`Sau khi dung function ${result}`)

// Bài 5: Chuyển đổi giữa feet và meters
// function footToMeter(foot){
//     let a = foot * 0.305
//     alert(`foot sau khi đổi ra meter là ${a}`)
// }footToMeter(25)

// function meterToFoot(meter){
//     let b = meter * 3.279
//     alert(`foot sau khi đổi ra meter là ${a}`)
// }meterToFoot(25)


// Bài 6: Tạo hàm để kiểm tra số nguyên tố
// function isPrime(number){
//     number = Number(number)
//     findIndex = -1
//     if(number < 2){
//         console.log("Not Prime")
//     } else if (number === 2){
//         console.log("Prime")
//     } else if (number > 2 && Number.isInteger(number)){
//         for (let  i = 2; i < number ;i++){
//             if ( number % i === 0){
//                 console.log("Not Prime")
//                 findIndex = i
//                 break;
//             } 
//         }
//     } else if (findIndex === -1){
//         console.log("Prime")
//     }
// }isPrime(27)



