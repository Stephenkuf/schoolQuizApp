$(document).ready(function(){

    $('.confirmTest').on('click', function(){
        swal({
          title: 'Test Payment Confirmed!',
          type: 'success'
        })
         setTimeout(()=>{
          //send push notifiactions
          Push.create("Notification from Front-Desk", {
            body: "New patient registered for test.",
            icon: 'https://png.icons8.com/color/50/000000/plus.png',
            timeout: 10000,
            onClick: function () {
              window.focus();
              this.close();
            }
          });
         }, 2000)
      
      });
      $('.declineTest').on('click', function(){
          swal({
              title:'Test Declined!',
              type: 'error',
              showCancelButton: false,
              showCloseButton: false,
          })
      });

      $('.discard').on('click', function(){
        swal({
          title: 'Are you sure?',
          text: "Your changes will not be saved",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, discard!'
        }).then(function() {
            window.history.back();
        })
      });
      
      $('.readyTest').on('click', function(){
        app.toast('Test record has been forwarded to the Lab Scientists.', {
          actionTitle: 'Okay',
          actionUrl: 'tests.php',
          actionColor: 'success',
          duration: 9000
        });
      });
      $('.awaitingPayment').on('click', function(){
        app.toast("Patient saved, confirm patient's payment to complete registration", {
          actionTitle: 'Close',
          actionUrl: 'new-patient.php',
          actionColor: 'success',
          duration: 600000
        });
      });

      $('.updateInformation').on('click', function(){
        app.toast('Information updated successfully', {
          actionTitle: 'View Patient',
          actionUrl: 'patient.php',
          actionColor: 'success',
          duration: 600000
        });
      });

    

            remove = function(){
                //$(this).parents('.test').remove();
            var testResult = document.getElementById("test_result");
            var innerDiv = document.getElementById("innerContent");
            var emptyDiv = document.getElementById("newContent");
            var tests = testResult.getElementsByClassName("test");
            var createDiv = document.createElement("div")
            // var thirdTest = tests[2].innerHTML;
            // console.log('third item is ' + thirdTest)
            console.log("the number of classes is "+ tests.length)

            for ( i = 0; i < tests.length; i++){
                (function(index){
                    tests[i].onclick = function(){ 
                        var originalState = tests[index].parentNode.cloneNode(true);
                        // tests[i].remove()
                        tests[index].parentNode.removeChild(tests[index]);
                        // tests[index].replaceWith(originalState).end();
                       
                            console.log('div is '+ originalState.innerHTML)
                            innerDiv.appendChild(originalState);
                            // innerDiv.appendChild(createDiv);
                    }    
                })(i);
            }
         
         

            }

       
})




