<template>
  <div class="main">
      <!-- Main container -->
  <main>
    <div class="main-content">
      <div class="container-fluid">
        

          <div class="col-lg-9">
            <div class="c-card--squared">
              <div class="tab-content">
                <div class="tab-pane active" id="home-left" aria-expanded="false">
                  <form>
                    <h4 class="card-title m-auto"> <strong>ENTER FLASHCARD DETAILS</strong></h4>
                    <div class="card-body">
                      <div class="row">
                        <div class="form-group col-sm-12 pl-0">
                          <label for="title">
                            <h6> Flashcard Title(FRONT)</h6>
                          </label>
                          <input class="form-control" type="text" placeholder="Flashcard Title">
                        </div>
                        <div class="form-group col-sm-6 pl-0">
                          <label for="subject">
                          <h6> Select Subject</h6>                           
                            </label>
                            <select data-provide="selectpicker" class="" name="Subject" id="">
                              <option>Mustard</option>
                              <option selected="">Ketchup</option>
                              <option>Relish</option>
                            </select>
                        </div>                    
                        <div class="form-group col-sm-12 pl-0">
                          <label for="back">
                            <h6>Content(BACK)</h6>
                          </label>
                          <input data-provide="summernote" data-toolbar="slim" data-min-height="100" type="password"
                            placeholder="Password">
                        </div>
                      </div>
                    </div>
                    <footer class="card-footer flexbox flex-justified">
                     
                      <div class="text-right">
                     
                        <button class="btn btn-success" type="submit">CREATE</button>
                      </div>
                    </footer>
                  </form>
                </div>
                
                
              </div>

            </div>

        </div>
        <!-- End of Row -->
      </div>
      <!-- End of Column -->
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
export default {
  
}
</script>

<style  scoped>

</style>