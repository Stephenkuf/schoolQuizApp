<template>
  <div class="main">
       <!-- Main container -->
  <main>
    <div class=" card  shadowed main-content">
      <header class="header no-border">
        <div class="header-bar">
          <h4>Create Questions</h4>
        </div>
      </header>
      <div class="row">
      
        <div class="col-md-10">
          <form >
           <div class="form-group col-md-6">               
                  <label for="select">Select Question type </label>
                        <select class="form-control" id="select">
                          <option>Single Choice</option>
                          <option>Multiple choice </option>
                          <option>Upload</option>                        
                        </select>
                
           </div>
         
           
     
            <div class="row">
              <div class="form-group col-md-6">
                  <label for="select">Select Class</label>
                        <select class="form-control" id="select">
                          <option>Jss1</option>
                          <option>Jss2</option>
                          <option>Jss3</option>
                          <option>SS1</option>
                          <option>SS5</option>
                        </select>
                </div>
              <div class="form-group col-md-6">
                  <label for="select">Subject</label>
                        <select class="form-control" id="select">
                          <option>Mathematics</option>
                          <option>English</option>
                          <option>geography</option>
                          <option>Agriculture</option>
                          <option>Civic</option>
                        </select>
                </div>
              </div>
              <div class="input">
                <label class="require">Question</label>
                <div class="" data-provide="summernote" data-min-height="50" >
                      <div class="b-1 p-10">
                          <p>  Type Here...</p>
                      </div> 
                  </div>             
              </div>
            <br>
            <br>

           

            
            <div class="mt-10">
              <div class="row">
                <div class="col-md-8">
                  <label class="require">Options</label>
                  <input type="text" class="form-control" placeholder="A">
                </div>
                <div class="col-md-4">
                    <label class="require"></label>
                  <div>
                    <label class="custom-control custom-control-lg custom-radio">
                      <input type="radio" class="custom-control-input" name="radio-size" checked>
                      <span class="custom-control-indicator"></span>
                      <span class="custom-control-description">Correct</span>
                    </label>
                    
                </div>
                </div>
              </div>
              <br>
              <div class="row">
                <div class="col-md-8">
                  <input type="text" class="form-control" placeholder="B">
                </div>
                <div class="col-md-4">
                  <div>
                    <label class="custom-control custom-control-lg custom-radio">
                      <input type="radio" class="custom-control-input" name="radio-size" checked>
                      <span class="custom-control-indicator"></span>
                      <span class="custom-control-description">Correct</span>
                    </label>
                    
                </div>
                </div>
              </div>
              <br>
              <div class="row">
                <div class="col-md-8">
                  <input type="text" class="form-control" placeholder="C">
                </div>
                <div class="col-md-4">
                  <div>
                    <label class="custom-control custom-control-lg custom-radio">
                      <input type="radio" class="custom-control-input" name="radio-size" checked>
                      <span class="custom-control-indicator"></span>
                      <span class="custom-control-description">Correct</span>
                    </label>
                    
                </div>
                </div>
              </div>
              <br>
              <div class="row">
                <div class="col-md-8">
                  <input type="text" class="form-control" placeholder="D">
                </div>
                <div class="col-md-4">
                  <div>
                    <label class="custom-control custom-control-lg custom-radio">
                      <input type="radio" class="custom-control-input" name="radio-size" checked>
                      <span class="custom-control-indicator"></span>
                      <span class="custom-control-description">Correct</span>
                    </label>
                    
                </div>
                </div>
              </div>
             
         
            </div>
           </form>  
          </div>
                
      </div>
 
      <div class="card card-body no-border">
        <div class="flexbox">
          <div class="form-check">
            <label class="custom-control custom-control-lg custom-checkbox">
              <input type="checkbox" class="custom-control-input" name="checkbox-size" >
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description fs-14">All the question details are entered correctly</span>
            </label>
          </div>
          <a href="view-events.php">
            <button class="btn btn-success disabled" type="submit">Create</button>
          </a>
        </div>
    </div>
     </div>
  </main>
  
  </div>
</template>
 

  
