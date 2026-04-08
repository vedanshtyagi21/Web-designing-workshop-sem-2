let employes = []
function addEmployee() {
    let name = document.getElementById("name").value
    let id = document.getElementById("empid").value
    let salary = Number(document.getElementById("salary").value)
    let dept = document.getElementById("dept").value
    let emp = {
        name: name,
        id: id,
        salary: salary,
        department: dept
    }
    employes.push(emp)
    alert("Employee Added")
}
function display() {
    let output = document.getElementById("output")
    output.innerHTML = ""
    for (let emp of employes) {
        output.innerHTML +=
            `Name: ${emp.name} | ID: ${emp.id} | Salary: ${emp.salary} | Dept: ${emp.department}
<br>`
    }
}
function filterSalary() {
    let output = document.getElementById("output")
    let highSalary = employes.filter(emp => emp.salary > 50000)
    output.innerHTML = " with Salary > 50000 <br>"
    for (let emp of highSalary) {
        output.innerHTML +=
            `${emp.name} - ${emp.salary} <br>`
    }
}
function totalSalary() {
    let total = 0
    for (let emp of employes) {
        total += emp.salary
    }
    document.getElementById("output").innerHTML =
        "Total Salary Payout: ₹ " + total
}
function averageSalary() {
    let total = 0
    for (let emp of employes) {
        total += emp.salary
    }
    let avg = total / employes.length
    document.getElementById("output").innerHTML =
        "Average Salary: ₹ " + avg
}
function countDepartment() {
    let dept = prompt("Enter Department Name")
    let count = 0
    for (let emp of employes) {
        if (emp.department.toLowerCase() == dept.toLowerCase()) {
            count++
        }
    }
    document.getElementById("output").innerHTML =
        " in " + dept + " Department: " + count
}
