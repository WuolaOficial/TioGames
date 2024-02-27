function search() {
    
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("dataList");
    li = ul.getElementsByTagName('li');
  
    
    for (i = 0; i < li.length; i++) {
      txtValue = li[i].textContent || li[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  
  function handleKeyPress(event) {
    
    if (event.keyCode === 13) {
      search(); 
    }
  }

  function resetSearch() {
    var ul, li, i;
    ul = document.getElementById("dataList");
    li = ul.getElementsByTagName('li');
  
    
    for (i = 0; i < li.length; i++) {
      li[i].style.display = "";
    }
  
    
    document.getElementById('searchInput').value = "";
  }


/*   function toggle(){
    var x = document.getElementById("elemento");
    if (x.style.display === "none"){
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } */