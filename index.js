const employee = {
    name: 'Jazmine',
    streetAddress: '803 Divison St',
}

function updateEmployeeWithKeyAndValue(employee,key,value){
    return{
        ...employee,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const employee2 = {...employee[key]}
    delete employee2[key]
    return employee2
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key]
    return employee
}