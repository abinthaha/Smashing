function show_hidden_menu() {
  var menu_btn = document.getElementById('hidden_menu');
  var search_btn = document.getElementById('search_div');

  if((menu_btn.className == "hide_menu")||(menu_btn.className == "")) {
    if(search_btn.className == "search_div_show")
    {
      search_btn.className = "search_div_hide"
    }
    menu_btn.className = "show_menu";
  }
  else {
    menu_btn.className = "hide_menu";
  }
}

function show_search() {
  var menu_btn = document.getElementById('hidden_menu');
  var search_btn = document.getElementById('search_div');

  if((search_btn.className == "search_div_hide")||(menu_btn.className == "")) {
    if(menu_btn.className == "show_menu")
    {
      menu_btn.className = "hide_menu"
    }
    search_btn.className = "search_div_show";
  }
  else {
    search_btn.className = "search_div_hide";
  }
}
