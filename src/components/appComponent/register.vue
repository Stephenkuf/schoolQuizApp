

<template>
  <div>
    <div class="pace-done">
      <div class="pace pace-inactive">
        <div
          class="pace-progress"
          data-progress-text="100%"
          data-progress="99"
          style="width: 100%;"
        >
          <div class="pace-progress-inner"></div>
        </div>
        <div class="pace-activity"></div>
      </div>
      <div class="row no-gutters min-h-fullscreen bg-white">
        <div
          class="col-md-6 col-lg-7 col-xl-7 d-none d-md-block bg-img"
      
          data-overlay="7"
        >
          <div class="row h-100 pl-50">
            <div class="col-md-10 col-lg-8 align-self-end">
              <h1 class="text-white">Welcome To the school Quiz App.</h1>
              <br />
              <p
                class="text-white"
              >Credibly and continously transforming students academic lives through web based applications</p>
              <br />
              <br />
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-5 col-xl-5 px-50 py-50">
          <h4>REGISTER TO BECOME A MEMBER</h4>
          <br />
          <div>
            <div data-provide="wizard" data-navigateable="true">
              <ul class="nav nav-tabs nav-justified">
                <li class="nav-item">
                  <a
                    class="
                    nav-link active"
                    data-toggle="tab"
                    href="#basic-details"
                    aria-expanded="true"
                  >SIGNUP DETAILS </a>
                </li>
                
              </ul>
              <div class="tab-content">
                <div class="tab-pane fade active show" id="basic-details" aria-expanded="true">
                  <form>
                    
                  
                      <div class="row">
                         <div class="col-md-12 form-group">
                          <label>Full Name </label>
                          <input type="text" class="form-control" placeholder="Adekunle mompha" v-model="fullName"/>
                        </div> 

                        <div class="col-md-6 form-group">
                          <label>Matric No</label>
                          <input type="text" class="form-control" placeholder="SCN12"  />
                        </div>
                     
                      
                        <div class="col-md-6 form-group">
                          <label>Gender</label>
                          <select class="form-control">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Rather not say</option>
                          </select>
                        </div>
                       </div> 

                    <div class="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="johndoe@example.com"
                        v-model="email"
                      />
                    </div>
                      <div class=" form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          class="form-control"
                          placeholder="12345"
                          v-model="password"
                        />
                      </div>
                    <div class="form-group">
                      <label>Phone Number</label>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="07051431887"
                        v-model="phoneNo"

                      />
                    </div>
                    <div>
                    <!-- <h1>
                      <p>email: {{ email }}</p>
                       <p>password :  {{ password }}</p>
                       <p>phone: {{ phoneNo }}</p>
                       <p>Name :  {{ fullName }}</p>


                    </h1> -->
                  </div>
                  </form>
                  <footer class="text-right">
                    <router-link class="btn btn-secondary mt-20" tag="a" to="/login">Back to Log In</router-link>
  <div class="btn  btn-success menu-link" @click="signUp" style="text-align:center"><router-link to=''><span class="text-white">REGISTER</span></router-link></div> 
  
                  </footer>
                </div>
              

                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h1>
      <!-- <p>firstName:{{ firstName }}</p>
      <p>lastName:{{lastName }}</p>
      <p>Email:{{email}}</p> -->
    </h1>
  </div>
</template>

<script>
import { router } from '../../main'

export default {
  data() {
    return {
      fullName: '',
      // matNo:'',
      phoneNo:'',     
      email: '',
      password: ''
    };
  },
  methods:{
     updateUser(){
            var user = firebase.auth().currentUser;
             console.log(user);
          
            user.updateProfile({
              displayName: this.fullName,
            }).then(function() {
              alert('update successful');              
              // Update successful.
            }, function(error) {
              // An error happened.
            });
             },
        signUp(){
          firebase.auth().createUserWithEmailAndPassword(
            this.email , this.password).then(
              function(user){
                alert('Account created successfully!!')
                router.replace('login')
              },
              function(err){
                alert('Error :'+ err.message)
              }
            )
        }

  }
};
</script>

<style scoped >
  .bg-img{
  background-image: url(../../assets/bg.png)
}
</style>