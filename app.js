let items = [];
let currentEditIndex = -1;

// Función para mostrar la lista de elementos
function renderTable() {
  const tableBody = document.getElementById('itemsTableBody');
  tableBody.innerHTML = ''; // Limpiar tabla antes de volver a renderizar
  
  items.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item}</td>
      <td>
        <button class="btn btn-warning btn-sm" onclick="editItem(${index})">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="deleteItem(${index})">Eliminar</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Función para agregar un elemento
function addItem() {
  const itemName = document.getElementById('itemName').value;
  
  if (itemName) {
    items.push(itemName); // Agregar elemento al array
    document.getElementById('itemName').value = ''; // Limpiar el campo de texto
    $('#addModal').modal('hide'); // Cerrar el modal de agregar
    renderTable(); // Volver a renderizar la tabla
  } else {
    alert("Por favor, ingresa un nombre.");
  }
}

// Función para editar un elemento
function editItem(index) {
  currentEditIndex = index;
  document.getElementById('editItemName').value = items[index]; // Llenar el campo de texto con el valor actual
  $('#editModal').modal('show'); // Mostrar el modal de edición
}

// Función para actualizar un elemento
function updateItem() {
  const updatedName = document.getElementById('editItemName').value;
  
  if (updatedName) {
    items[currentEditIndex] = updatedName; // Actualizar el elemento en el array
    document.getElementById('editItemName').value = ''; // Limpiar el campo de texto
    $('#editModal').modal('hide'); // Cerrar el modal de edición
    renderTable(); // Volver a renderizar la tabla
  } else {
    alert("Por favor, ingresa un nombre.");
  }
}

// Función para eliminar un elemento
function deleteItem(index) {
  if (confirm("¿Estás seguro de que deseas eliminar este elemento?")) {
    items.splice(index, 1); // Eliminar el elemento del array
    renderTable(); // Volver a renderizar la tabla
  }
}
