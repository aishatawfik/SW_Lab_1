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
        deleteButton.addEventListener("click", function () {
          deleteEmployee(item.id);
        });
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
submitbutton.addEventListener("click", function (event) {
  event.preventDefault();
  createEmployee();
});
// TODO
// add event listener to delete button

// TODO
function createEmployee() {
  // get data from input field
  const name = document.getElementById("name").value;
  const id = document.getElementById("id").value;
  if (!id || !name) {
    alert("Please enter both ID and Name!");
    return;
  }

  // send data to BE
  fetch("http://localhost:3000/api/v1/employee", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id, name: name }),
  })
    .then((response) => response.json())
    .then(() => {
      fetchEmployees();
    });
}

// TODO
function deleteEmployee(id) {
  // get id
  // send id to BE
  fetch(`http://localhost:3000/api/v1/employee/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(() => {
      fetchEmployees(); // Refresh employee list after deletion
    })
    .catch((error) => console.error("Error:", error));
  // call fetchEmployees
}

fetchEmployees();
