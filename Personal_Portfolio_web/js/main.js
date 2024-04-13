// javascript code for our portfolio site

function showSidebar(){
    const sidebar = document.querySelector('.sideBar');
    sidebar.style.display = 'flex'
}


// function to hide side bar when close icon is clicked

function hideSidebar(){
    const sidebar = document.querySelector('.sideBar');
    sidebar.style.display = 'none'
}


// function to embed map on the contact me page

function initMap() {
    var map = new google.maps.Map(document.getElementById('map-container'), {
      center: {lat: -34.397, lng: 150.644}, 
      zoom: 8 
    });
  }