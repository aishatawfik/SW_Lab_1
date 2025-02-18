function fetchEmployees() {
  fetch("http://localhost:3000/api/v1/employee")
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.getElementById("dataTable");
      tableBody.innerHTML = "";
      const list = data.data;
      list.forEach((item) => {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        idCell.textContent = item.id;
        row.appendChild(idCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        const deleteCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("btn", "btn-danger", "btn-sm");
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell);

        tableBody.appendChild(row);
      });
    })
    .catch((error) => console.error(error));
}

// TODO
// add event listener to submit button
const submitbutton = document.querySelector(".submit");
submitbutton.addEventListener("click", createEmployee);

// TODO
// add event listener to delete button
const deletebutton = document.querySelector(".submit");
submitbutton.addEventListener("click", createEmployee);

// TODO
function createEmployee() {
  // get data from input field
  const name = document.getElementById("name");
  const id = document.getElementById("id");
  // send data to BE

  // call fetchEmployees
  fetchEmployees();
}

// TODO
function deleteEmployee() {
  // get id
  const id = document.getElementById("id");
  // send id to BE

  // call fetchEmployees
  fetchEmployees();
}

fetchEmployees();
