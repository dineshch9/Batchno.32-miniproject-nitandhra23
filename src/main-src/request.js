// const likeBtn = document.querySelector(".like_btn");
// let likeIcon = document.querySelector("#like"),
//   count = document.querySelector("#count");

// let clicked = false;


// likeBtn.addEventListener("click", () => {
//   if (!clicked) {
//     clicked = true;
//     likeIcon.innerHTML = `<img src="./assets/like.png">`;
//     count.textContent++;
//   } else {
//     clicked = false;
//     likeIcon.innerHTML = `<img src="./assets/liked.png">`;
//     count.textContent--;
//   }
// });











function signout(){
  
  localStorage.clear();
  // window.open("http://localhost/ushh1/src/main-src/login_main.html","_blank");
  // window.close();
  window.location.href = 'http://localhost/ushh1/src/main-src/login_main.html';
  
}

function info (token) {
  //parsejwt
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

function check(){
  var  token = localStorage.getItem('idToken');
  if(token){
        console.log('sign in');
        
        

    }
    else{
        window.open("http://localhost/ushh1/src/main-src/login_main.html","_self");
    }
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}



      // window.onclick = function(event) {
      //   if (!event.target.matches('.dropbtn')) {
      //     document.getElementById("myDropdown").classList.remove('show');
      //   }
      // }
