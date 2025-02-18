const employee = [{ id: "1", name: "Mohamed Sayed" }];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  const request_id = req.params.id;
  const index = employee.findIndex(
    (newEmployee) => newEmployee.id === request_id
  );

  if (index !== -1) {
    employee.splice(index, 1); // to remove from array
    res.status(200).json({ message: "Employee is deleted " });
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
};

// TODO
exports.createEmployee = async (req, res, next) => {
  let { id, name } = req.body;
  let newEmployee = { id, name };
  employee.push(newEmployee);
  res.status(201).json(newEmployee);
};
