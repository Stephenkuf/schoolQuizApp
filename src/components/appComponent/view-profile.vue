
<template>
  <div class="main">

  <!-- Main container -->
  <main>
    <div class="main-content">
      <div class="row">
        <div class="col-lg-6 col-xl-7">
          <div class="card">
            <header class="h-head no-border">
              <div class="header-bar pl-20">
                <h4>My Profile Information</h4>
              </div>
            </header>
            <div class="card-body">
              <div class="text-center">
                <a href="#">
                  <img class="avatar avatar-xxl" src="assets/img/avi.svg">
                </a>
                <h2 class="mt-3 mb-10">Mary Amiri <small></small></h2>
                <div>
                  
                </div>
              </div>
              <div>
                <ul class="nav nav nav-tabs nav-tabs-inverse-mode">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#basic-details" aria-expanded="false">Basic Details</a>
                  </li>                 

                </ul>
                <div class="tab-content">
                  <div class="tab-pane active" id="basic-details" aria-expanded="false">
                    <div class="row">
                      <div class="col-md-6 col-lg-12 col-xl-6">
                        <div class="form-group row mb-0">
                          <label class="col-4 col-form-label">Name:</label>
                          <div class="col-8">
                            <p class="form-control-plaintext">Mary Amiri</p>
                          </div>
                        </div>
                        <div class="form-group row mb-0">
                          <label class="col-4 col-form-label">Gender:</label>
                          <div class="col-8">
                            <p class="form-control-plaintext">Female</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-lg-12 col-xl-6">
                        <div class="form-group row mb-0">
                          <label class="col-4 col-form-label">Email:</label>
                          <div class="col-8">
                            <p class="form-control-plaintext">maryamiri@gmail.com</p>
                          </div>
                        </div>
                        <div class="form-group row mb-0">
                          <label class="col-4 col-form-label">Phone Number:</label>
                          <div class="col-8">
                            <p class="form-control-plaintext">07012345678</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="legal-info" aria-expanded="true">
                    <div class="row">
                      <div class="col-md-6 col-lg-12 col-xl-6">
                        <div class="form-group row mb-0">
                          <label class="col-md-6 col-form-label">Supreme Court Number:</label>
                          <div class="col-md-6">
                            <p class="form-control-plaintext">SCN14</p>
                          </div>
                        </div>
                        <div class="form-group row mb-0">
                          <label class="col-md-6 col-form-label">Year of Call to Bar:</label>
                          <div class="col-md-6">
                            <p class="form-control-plaintext">1990</p>
                          </div>
                        </div>
                        <div class="form-group row mb-0">
                          <label class="col-md-6 col-form-label">NBA Branch:</label>
                          <div class="col-md-6">
                            <p class="form-control-plaintext">Surulere</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-lg-12 col-xl-6">
                        <div class="form-group row mb-0">
                          <label class="col-md-6 col-form-label">Firm Name:</label>
                          <div class="col-md-6">
                            <p class="form-control-plaintext">Maryam and Associates</p>
                          </div>
                        </div>
                        <div class="form-group row mb-0">
                          <label class="col-md-6 col-form-label">Position Held:</label>
                          <div class="col-sm-6">
                            <p class="form-control-plaintext">Leading Lawyer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer class="card-footer text-right">
              
       <router-link  class="btn btn-secondary text-white fw-500" tag="a" to="/edit_profile"> Edit</router-link>

            </footer>
          </div>
        </div>
        <div class="col-lg-6 col-xl-5">
          <div class="c-card--square">
            <header class="h-head no-border">
              <div class="header-bar pl-20">
                <h4>Current   Subjects </h4>
                <form class="lookup lookup-circle " target="index.html">
                   <input type="text" name="s">
                 </form>
              </div>
            </header>
            <div class="h-350px scrollable">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th class="w-50px">S/N</th>
                    <th>Subjects</th>
                    <th class="text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <div class="flexbox align-items-center gap-items">
                        <div class="media-body text-truncate">
                          <h6>Biology</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <nav class="flexbox flex-justified fs-16">
                        <a class="btn " href="committee-details.php">
                          Details
                        </a>
                      </nav>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>
                      <div class="flexbox align-items-center gap-items">
                        <div class="media-body text-truncate">
                          <h6>Language</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <nav class="flexbox flex-justified fs-16">
                        <a class="btn" href="committee-details.php">
                          Details
                        </a>
                      </nav>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>
                      <div class="flexbox align-items-center gap-items">
                        <div class="media-body text-truncate">
                          <h6>Physics</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <nav class="flexbox flex-justified fs-16">
                        <a class="btn " href="committee-details.php">
                          Details
                        </a>
                      </nav>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>
                      <div class="flexbox align-items-center gap-items">
                        <div class="media-body text-truncate">
                          <h6>MAthematics</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <nav class="flexbox flex-justified fs-16">
                        <a class="btn " href="committee-details.php">
                          Details
                        </a>
                      </nav>
                    </td>
                  </tr>
               
                
                </tbody>
              </table>
            </div>
            <footer class="card-footer">
              <a href="edit-profile.php">
                <button class="btn btn-success" type="submit">Remove subjects</button>
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
    </main>
  <!-- END Main container -->

  <!-- Global quickview -->
  <div id="qv-global" class="quickview" data-url="assets/data/quickview-global.html">
    <div class="spinner-linear">
      <div class="line"></div>
    </div>
  </div>
  <!-- END Global quickview -->
  </div>
</template>

<script>
import { router } from '../../main'
import { store } from "../../store/store";
import { db } from "../../main";

export default {
  data(){
    return{
      name:'',
      email:''
    }
  }, 
  mounted(){
      var user = firebase.auth().currentUser;

        if (user) {
          console.log(user);          
          // User is signed in.
        } else {
          console.log('No user signed in');
          
          // No user is signed in.
        }
  }

}
</script>

<style>

</style>