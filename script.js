function search() {
    /* Crea las variables */
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("dataList");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      txtValue = li[i].textContent || li[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }// Verificar si la tecla presionada es "Enter"// Ejecutar la búsqueda si es "Enter"
  
  function handleKeyPress(event) {
    
    if (event.keyCode === 13) {
      search(); 
    }
  }

  function resetSearch() {
    var ul, li, i;
    ul = document.getElementById("dataList");
    li = ul.getElementsByTagName('li');
  
    // Mostrar todos los elementos
    for (i = 0; i < li.length; i++) {
      li[i].style.display = "";
    }
  
    // Limpiar el campo de búsqueda
    document.getElementById('searchInput').value = "";
  }