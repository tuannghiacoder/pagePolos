   
//     // lấy phần Modal
     var modal = document.getElementById('myModal');
  
    // Lấy phần button mở Moda
      var btn1 = document.getElementById("myBtn1");
    var btn2 = document.getElementById("myBtn2");
     var btn3 = document.getElementById("myBtn3");
    //  buy shop women
    var btn4= document.getElementById('myBtn4');
    var btn5 = document.getElementById('myBtn5');
    var btn6= document.getElementById('myBtn6');
     
  
     // Lấy phần span đóng Modal
    var span = document.getElementsByClassName("modal-close")[0];
 //   vòng lặp lại 3 nút
    btn1.onclick = function() {
         modal.style.display = "block";
        modal.style.display="flex";
         modal.style.alignItems="center";
         modal.style.justifyContent="center";    
     }
     btn2.onclick = function() {
         modal.style.display = "block";
         modal.style.display="flex";
         modal.style.alignItems="center";
         modal.style.justifyContent="center"; 
     }
     btn3.onclick = function() {
         modal.style.display = "block";
         modal.style.display="flex";
         modal.style.alignItems="center";
     
         modal.style.justifyContent="center";    
     }
      // shop women
      btn4.onclick = function() {
        modal.style.display = "block";
       modal.style.display="flex";
        modal.style.alignItems="center";
        modal.style.justifyContent="center";    
    }
    btn5.onclick = function() {
      modal.style.display = "block";
     modal.style.display="flex";
      modal.style.alignItems="center";
      modal.style.justifyContent="center";    
  }
  btn6.onclick = function() {
    modal.style.display = "block";
   modal.style.display="flex";
    modal.style.alignItems="center";
    modal.style.justifyContent="center";    
}

    
    // Khi span được click thì đóng Modal
     span.onclick = function() {
         modal.style.display = "none";

     }
  
     // Khi click ngoài Modal thì đóng Modal
     window.onclick = function(event) {
        if (event.target == modal) {
             modal.style.display = "none";
         }
        }
  

        // xu ly cho btn login

var modal1= document.getElementById('mymodallogin')
var  btn4= document.getElementById("myLogin");
  
  btn4.addEventListener('click',()=> {
    modal1.setAttribute("style","display:block;");
    
    
  })
  btn4.onclick = function(){
    modal1.style.display="flex";
    modal1.style.justifyContent="center";
    modal1.style.alignItems="center";
  }
  // xu ly cho nut close
  var span1 = document.getElementById("modal-login-close1");
  span1.onclick = function() {
    modal1.style.display="none";
  }
  // click in btn open alert
  var btnLogin = document.getElementById('modal-login-btn1')
  btnLogin.onclick = function(){
    alert('Đăng nhập thành công');
  }
  