function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabpanel");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].className = tabcontent[i].className.replace(" active", "");
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).className += " active";
  evt.currentTarget.className += " active";
}
