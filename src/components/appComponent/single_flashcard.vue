
<template>
  <div class="main">
  <main>
    <div class="main-content">
  <label>
    <input type="checkbox"  />
    <div class="card-house" style="margin-top:-70px;">
         <div class="row first-card divd ">
             <div style="min-height:200px; width:500px;" 
             class="card card-shadowed divd cardback m-auto"             
             >
                      <header class="card-header flashcard-back">
                        <h4 class="card-title text-center card-title-bold">Flashcard FRONT</h4>
                      </header>
                      <div class="card-body ">   
                        <div class="row ">
                          <div class="col-md-12 " >
                            <h3>{{flashcard.front}}  </h3>
                          </div>
                          <!-- <div class="col-md-4 ">
                            <img src="./assets/img/conversation.svg" alt="team">
                          </div> -->
                        </div>
                      </div>
            </div>
      </div>
      <div class="row second-card divd">
             <div style="min-height:200px; width:500px;" 
             class="card card-shadowed divd cardback m-auto"             
             >
                      <header class="card-header flashcard-back">
                        <h4 class="card-title card-title-bold">Flashcard  BACK</h4>
                      </header>
                      <div class="card-body ">   
                        <div class="row ">
                          <div class="col-md-12 " >
                            <h3>{{flashcard.back}}</h3>
                          </div>
                          <!-- <div class="col-md-4 ">
                            <img src="./assets/img/conversation.svg" alt="team">
                          </div> -->
                        </div>
                      </div>
            </div>
      </div>
     </div>
  </label> 
  <!-- start of buttons  -->
  <div class="">
    <div class="m-0">
      <div class="row ">
        <div class="col-md-1"></div>
        <div class="col-md-2 mr-100px">
            <div class="alert  text-dark alert-danger ">
              Click on card to flip
            </div>
        </div>
        <div class="col-md-5"></div>
        <div class="col-md-4">
        </div>
      </div>
      
    
       </div>
    </div>
      
<!-- end of buttons -->
    <div class="card no-border scrollable mt-300 " style="position:absolute; width:75%" >
        <table class="table table-hover table-responsive c-table">
          <thead>
            <tr>
              <th>Question </th>
              <th>Answer </th>
           
            </tr>
          </thead>
          <tbody>
            <tr  v-for="(flash, idx) in flashcards.slice(0,5)" :key="idx" >
              <td>
                <div class="flexbox align-items-center flex-grow gap-items">
                  <div class="media-body text-truncate">
                    <h6>{{flash.front }} <small></small></h6>
                  </div>
                </div>
              </td>
              <td>{{flash.back}}</td>

              <td>
              <div class="text-right">
                <div  @click="renderF(flash)"  class="btn btn-success text-white ">View</div>
                </div>
              </td>
            </tr>
                       
           
          </tbody>

        </table>

      </div>

     
    </div>
    <!--/.main-content -->
  </main>
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
import { store } from "../../store/store";
import { router } from '../../main'
import { db } from "../../main";  
export default {
   data(){
     return{
            flashcard : store.getters.selectedFlash,
            flashcards: store.getters.userFlashcards
          }
      },
      methods:{
         renderF(flashCard){
             store.dispatch('SELECT_FLASHCARD', flashCard)
             window.location.reload()   
             console.log('kapaichumarimarichupako');
                      
          }
      }
      





}
</script>

<style>
label {
     -webkit-perspective: 1000px;
    perspective: 1000px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    display: block;
    width: 300px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    cursor: pointer;
}
.card-house {
     position: relative;
      height: 100%;
      width: 100%;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
      -webkit-transition: all 600ms;
      transition: all 600ms;
      z-index: 20;  
}
 .card-house .divd {
      position: absolute;
        height: 100%;
        width: 100%;
        background: #FFF;
        text-align: center;
        line-height: 200px;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: 2px;
      }
      .card-house .second-card {
        color: #FFF;
        -webkit-transform: rotateX(180deg);
        transform: rotateX(180deg);
    }
  label:hover .card-house {
    -webkit-transform: rotateX(10deg);
    transform: rotateX(10deg);
    /* box-shadow: 0 20px 20px rgba(10,10,10,.2); */
}
input {
    display: none;
}

:checked + .card-house {
    transform: rotateX(180deg);
    -webkit-transform: rotateX(180deg);
}

label:hover :checked + .card-house {
    transform: rotateX(10deg);
    -webkit-transform: rotateX(160deg);
    /* box-shadow: 0 10px 0px rgba(255,255,255,.2); */
}


</style>
  
           
        


 