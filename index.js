// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAdress: "address",
}
function updateEmployeeWithKeyAndValue(employee, streetAdress, address) {
    return {
        ...employee,
        [streetAdress]: "11 Broadway",
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAdress, address) {
    employee[streetAdress] = "12 Broadway";

    return employee;
}
function deleteFromEmployeeByKey(employee, name) {
    let newEmployee = {...employee}
    delete newEmployee.name
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name
    return employee
}