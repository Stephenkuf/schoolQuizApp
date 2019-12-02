<template>
  <div class="main">
    <div class="pace-done">
  <div class="pace pace-inactive">
    <div class="pace-progress" data-progress-text="100%" data-progress="99" style="width: 100%;">
      <div class="pace-progress-inner"></div>
    </div>
    <div class="pace-activity"></div>
  </div>
  <div class="row no-gutters min-h-fullscreen bg-white">
    <div class="col-md-6 col-lg-7 col-xl-8 d-none d-md-block bg-img" style="background-image: url(assets/img/background.jpg)" data-overlay="7">
      <div class="row h-100 pl-50">
        <div class="col-md-10 col-lg-8 align-self-end">
          <h1 class="text-white">Welcome To Membership App.</h1>
          <br>
          <p class="text-white">Credibly transition sticky users after backward-compatible web services. Compellingly strategize team building interfaces.</p>
          <br><br>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-5 col-xl-4 align-self-center">
      <div class="px-50 py-30">
        <h4>SET YOUR PASSWORD</h4>

        <br>
        <form class="form-type-material">
          <div class="input-group">
            <span class="input-group-addon" id="basic-addon1"><i class="ti-lock"></i></span>
            <div class="input-group-input">
              <input type="text" class="form-control" id="email">
              <label for="email">Password</label>
            </div>
          </div>
          <div class="input-group">
            <span class="input-group-addon" id="basic-addon1"><i class="ti-lock"></i></span>
            <div class="input-group-input">
              <input type="text" class="form-control" id="email">
              <label for="email">Confirm Password</label>
            </div>
          </div>
          <br>
          <!--anchor element here instead of Button-->
          <a class="btn btn-bold btn-block btn-success" href="user_dashboard.php">Save and log in</a>
        </form>
      </div>
    </div>
  </div>
     </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>

