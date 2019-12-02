


<template>
  <div id="login-view">
  <div class="pace pace-inactive">
    <div class="pace-progress" data-progress-text="100%" data-progress="99" style="width: 100%;">
      <div class="pace-progress-inner"></div>
    </div>
    <div class="pace-activity"></div>
  </div>
  <div class="row no-gutters min-h-fullscreen bg-white">
    <div class="col-md-6 col-lg-7 col-xl-8 d-none d-md-block bg-img"  style="data-overlay=7" >
      <div class="row h-100 pl-50">
        <div class="col-md-10 col-lg-8 align-self-end">
          <h1 class="text-white">Welcome To the School Quiz Application.</h1>
          <br>
          <p class="text-white">Transforming students academic lives through web based applications </p>
          <br><br>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-6 col-xl-4 align-self-center">
      <div class="px-50 py-30">
        <h4>ALREADY A STUDENT? LOG IN</h4>
        <br>
        <form class="form-type-material">
          <div class="form-group">
            <input type="text"
             class="form-control" 
             id="email"
             v-model="email"
             >
            <label for="email">Email address/Username</label>

          </div>
          <div class="form-group">
            <input type="password"
             class="form-control" 
             id="password"
             v-model="password"
               >
            <label for="password">Password</label>
          </div>
          <br>
          <!--anchor element here instead of Button-->
           
  <div class="btn btn-bold btn-block btn-success menu-link" @click="login" style="text-align:center"><router-link to=''><span class="text-white">Login</span></router-link></div> 

        </form>
        <hr class="w-30px">
        <p class="text-center text-muted fs-13 mt-20">Want to become a Member?
           <router-link class="text-success fw-500" tag="a" to="/register">
         Register</router-link>
        </p>
                 <!-- <div 
                 class="btn btn-success" 
                 @click="firestore()">
                 TEST BUTTON</div> -->

      </div>
    </div>
  </div>

  </div>
</template>
<script>
import { router } from '../../main'
import { store } from "../../store/store";
import { db } from "../../main";

export default {
      data(){
        return{
          email:'',
          password:'',
          flash:[]
        }     
      },
      
      methods:{ 
    
          login(){    
              firebase.auth().signInWithEmailAndPassword(
                this.email,this.password)
                .then(function(cred){
                   // this changes the login state on the store 
                      store.dispatch('LOGGED_IN');
                      swal("Welcome!", "You are logged in!", "success");
                  // this sends the user id to the store
                      store.dispatch('SET_USER', cred.user.uid);                      
                      router.replace('/user');    
                      window.location.reload()            
                  }).catch(function(err){
                   swal("Oops", 'Error :'+ err.message ,"error")    
                  });                    
            },
      //  end of methods    
      }   
      // Export default end     
    }


</script>

<style scoped>
.bg-img{
  background-image: url(../../assets/bg.png)
}
</style>  