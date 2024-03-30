const employee = {
    name: "Joyce Maina",
    streetAddress: "Langata Road"
  };

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, [key] : value};  
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    return {...employee, [key]: undefined};
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
