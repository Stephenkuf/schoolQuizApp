
<template>
  <div class="main">
  <main>
    <div class="main-content">
      <div class="row">
        <div class="col-lg-8 col-xl-10">
          <div class="card">
            <header class="h-head no-border">
              <div class="header-bar pl-20 flexbox">
                <h4 class="h4-title">Edit Profile Information</h4>
                <button class="btn btn-secondary btn-sm" data-toggle="modal" data-target="#change-password">Change
                  Password</button>
              </div>
            </header>
            <div class="card-body">
              <div>
                <div data-provide="wizard" data-navigateable="true">
                  <ul class="nav nav-tabs-inverse-mode nav-justified nav-process">
                    <li class="nav-item processing">
                      <a class="nav-link active" data-toggle="tab" href="#basic-details" aria-expanded="true">Basic
                        Details</a>
                    </li>
                   
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane fade  active show" id="basic-details" aria-expanded="true">
                      <form>
                        <div class="row">
                          <div class="col-md-6 form-group">
                            <label>Title</label>
                            <select class="form-control">
                              <option>Miss</option>
                              <option>Mr</option>
                              <option>Mrs</option>
                            </select>
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

                        <div class="row">
                          <div class="col-md-6 form-group">
                            <label>First Name</label>
                            <input type="text" class="form-control" value="Maryam">
                          </div>
                          <div class="col-md-6 form-group">
                            <label>Last Name</label>
                            <input type="text" class="form-control" value="Amiri">
                          </div>
                        </div>


                        <div class="form-group">
                          <label>Email</label>
                          <input type="text" class="form-control" value="maryamamiri@gmail.com">
                        </div>
                        <div class="form-group">
                          <label>Phone Number</label>
                          <input type="number" class="form-control" value="07051431887">
                        </div>
                      </form>
                      <footer class="text-right mt-20">
                        <a class="btn btn-secondary" href="view-profile.php">Cancel</a>
                        <a class="btn btn-success text-white"   data-wizard="next">Save Changes</a>
                      </footer>
                    </div>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  </main>


 <!-- Global quickview -->
  <div id="qv-global" class="quickview" data-url="assets/data/quickview-global.html">
    <div class="spinner-linear">
      <div class="line"></div>
    </div>
  </div>
  <!-- END Global quickview -->
  <!--Change Password Modal-->
  <div class="modal modal-center fade" id="change-password" tabindex="-1" style="display: block;">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Change Password</h5>
          <button type="button" class="close" data-dismiss="modal">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label>New password:</label>
              <input class="form-control" type="password">
            </div>
            <div class="form-group">
              <label>Confirm new password:</label>
              <input class="form-control" type="password">
            </div>
          </form>
        </div>
        <div class="modal-footer">

          <button class="btn btn-secondary mt-20" data-wizard="prev">Cancel</button>
          <a class="btn btn-success mt-20" href="confirm-edit-profile.php">Save Changes</a>
        </div>
      </div>
    </div>
  </div>
  <!--END change password modal-->
  </div>
</template>


<script>
export default {
  
}
</script>

<style scoped>

</style>