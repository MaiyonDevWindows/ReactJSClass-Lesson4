function calculate() {
    let amount = prompt("Nhập vào khoản vay");
    let rate = prompt("Nhập vào lãi suất (%)");
    let months = prompt("Nhập vào thời gian để trả (tháng)");
    const interest = (amount * (rate * 0.01)) / months;
    const total = ((amount / months) + interest).toFixed(2);
    alert("EMI: " + total);
}