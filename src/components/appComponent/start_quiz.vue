<template>
    <div class="main">
       <main>
        <div class="main-content" >
            <header class="header no-border">
                <div class="header-bar">
                    <h4>Firm Table</h4>
                </div>
            </header>

            <div class="row">
              <div class="col-2"></div>
              <div class="col-8 ">
                <div class="card">
                  <div class="card-body">
                  <div  class="container-article   "> 
                        <header class="">    
                                <a href="members.php" class="h-30px " style="display:block;">   
                                    <div class="icon fa fa-angle-double-left fa-3x">                                        
                                    </div> 
                                </a>                   
                              <div class="text-center">                                
                                  <button class="btn btn-w-md btn-primary">MATHEMATICS</button>
                              </div>   
                                <br><br>
                               
                                 
                                 <div class="border">
                                     <h1 style="font-size:40px;" class="text-center "><strong>WELCOME TO MATHEMATICS  </strong> </h1>
                                     <br> 
                                      <h4 class="text-center"> This contains <span>40</span> questions</h4>
                                      <br>
                      
                                      <a href="single_question.php" >
                                        <h4 class="mr-auto text-center">                                       
                                          <button class="btn btn-large btn-primary p-20 fs-20"> <b > START QUIZ</b></button>
                                        </h4>
                                      </a>
                                 </div>
                        </header>   
                        <br>

                        </div>
                  </div>
                 
                </div>
              </div>

            </div>
        </div>
        <!--/.main-content -->

    </main>
    <!-- END Main container -->

    
  <!-- Modal -->
  <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Update Firm</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form >
            <div class="card-body">
              <div class="row">
                <div class="form-group col-lg-12">
                  <label class="text-uppercase text-fader fw-500 fs-11">Firm Name</label>
                  <input class="form-control" type="text" value="Association of Junior Lawyers">
                </div>
                <div class="form-group col-12">
                    <label class="text-uppercase text-fader fw-500 fs-11">Firm Type</label>
                    <div class="btn-group bootstrap-select form-control">
                        <div class="dropdown-menu open" role="combobox">
                            <div class="dropdown-menu inner" role="listbox" aria-expanded="false"><a class="dropdown-item"       data-original-index="0"><span tabindex="0" class="dropdown-item-inner " data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Below $1,000</span><span class=" ti-check check-mark"></span></span></a><a class="dropdown-item" data-original-index="1"><span tabindex="0" class="dropdown-item-inner " data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">$1,000 - $3,000</span><span class=" ti-check check-mark"></span></span></a><a class="dropdown-item selected" data-original-index="2"><span tabindex="0" class="dropdown-item-inner " data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span class="text">$3,000 - $10,000</span><span class=" ti-check check-mark"></span></span></a><a class="dropdown-item" data-original-index="3"><span tabindex="0" class="dropdown-item-inner " data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Over $10,000</span><span class=" ti-check check-mark"></span></span></a>
                            </div>
                        </div>
                        <select class="form-control" data-provide="selectpicker" tabindex="-98">
                            <option>Cooperation</option>
                            <option>Okoye Chidi Mark</option>
                        </select>
                    </div>
                </div>

                <div class="form-group col-lg-12">
                  <label class="text-uppercase text-fader fw-500 fs-11">Address</label>
                  <input class="form-control" type="text" value="9 Akinhanmi Street Surulere">
                </div>
                
                <div class="form-group col-lg-12">
                  <label class=" text-fader fw-500 fs-11">Phone Number</label>
                  <input class="form-control" type="tel" value="+234 8056 678 8345">
                </div>
              </div>
            </div>
          </form>
        

        <div class="modal-footer">
          <button type="button" class="btn btn-success" data-dismiss="modal">Update</button>
        </div>
      </div>
    </div>
  </div>
  <!--Edit Modal Ends Here -->

   <!-- Global quickview -->
    <div id="qv-global" class="quickview" data-url="assets/data/quickview-global.html">
        <div class="spinner-linear">
            <div class="line"></div>
        </div>
    </div>
    <!-- END Global quickview -->
</div>

    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
