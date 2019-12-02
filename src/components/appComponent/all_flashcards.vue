
<template>
  <div class="main">

  <!-- Main container -->
  <main>
    <!-- floating button  -->
   		<router-link class="menu-link" tag="a" to="/create-flash">
    <div >
      <button
        style="
        position: fixed;
        bottom: 40px;
        right: 50px;
        z-index: 99;
        font-size: 22px;
        outline: none;  
        color: white;
        cursor: pointer;
        padding: 15px;"                 
        class="btn btn-float btn-round btn-danger"
        data-provide="tooltip" 
        data-placement="top"
         title="" data-original-title="Create a New flashCard"
        >
        <i class="ti-plus"></i>
      </button>
    </div>
   		</router-link>
     <!-- floating button end -->
     
    <div class="main-content">
  
      <div class="card" style="margin-top:-80px">
        <header class="flexbox flex-justified align-items-center h-head no-border">
          <div class="flex-grow-3 header-bar pl-20">
            <h2>All FlashCards</h2>
            <br>
            <h4>This contains all flashcards created by every student. </h4>  
          </div>
          <div class="header-bar">
            <div class="mr-20">Filter: </div>
            <select class="form-control" id="select">
              <option>All</option>
              <option>Mathematics</option>
              <option>English</option>
              <option>Physics</option>
              <option>Government</option>
            </select>
          </div>
        </header>
      </div>

      <!-- The multiple flashcards appear here -->
        <div class="row flashcd ">          
          <div  v-for="(flash, idx) in flash_card" :key="idx" class="col-md-4">
            <div class="card no-border">
             
              <div class="card-body">
                <div class="mb-10 fs-18">
                   <h2 class="card-title"> {{ flash.front }}
                  <!-- {{ flash[idx].front }} -->
                  </h2>
                 
                </div>
                <!-- <div class="btn btn-success text-white fw-500" tag="a" >
         </div> -->
 <router-link  @click="renderFl(flash)" class="btn btn-success text-white fw-500" tag="a" to="/single_flashcard">VIEW </router-link>
              </div>
            </div>
          </div>

            
        
          <!-- End of navigation -->
         
        </div> 
          <!-- <div 
                 class="btn btn-success" 
                 @click="loadData()">
                 TEST BUTTON</div> -->

       
          
        
        <nav class="card align-items-center no-border">
        <ul class="pagination pagination-circle">
          <li class="page-item disabled">
            <a class="page-link" href="#">
              <span class="ti-arrow-left"></span>
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">4</a></li>
          <li class="page-item"><a class="page-link" href="#">5</a></li>
          <li class="page-item">
            <a class="page-link" href="#">
              <span class="ti-arrow-right"></span>
            </a>
          </li>
        </ul>
      </nav>
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

import { store } from "../../store/store";
import { router } from '../../main'
import { db } from "../../main";
// import { firestore } from 'firebase';
import { log } from 'util';
export default {
//  to="/single_flashcard"
      data(){
        return{
          flash_card:[
      
          ]
        }
      },
      mounted() {
          var flashcard;
          var flash_obj = []
          let userId  = store.getters.currentUserId;
           db.collection('flashcard').get().then((querySnapshot) => {
                var tempDoc  = []
                 querySnapshot.forEach((doc) => {
                   return tempDoc.push({  ...doc.data().obj })             

                })
                var arrayd = []
        
                
              //  var w1  =  Object.values(q1)
                         

              //   console.log(w1[0]);
              var i;
            for (i = 0; i < tempDoc.length; i++) { 
             var www = (tempDoc[i]);
              var eee = Object.values(www)
            }
            console.log(eee)
            


                
              this.flash_card = eee




              // }



               
            
         
            // console.log(tt)
                                              
                //  var x  = Object.values(tempDoc)
                // console.log(x)
                
            //     var x  = Object.values(arrayItem)
                // let  value = (x[1]);
                // // console.log(value);
                // let ara  = Object.values(value)
                // console.log(ara);
                
                // pushes objects into array
                
               
                    // let flashes = Object.values(arrayItem)
                    // console.log(flashes);
                    
                   
                 
                         
               
            // });
            // console.log(all_flashes);
            // this.flash_card = all_flashes

          
          //  this parses the value of the objects and puts them in an Array
        //   const values = Object.values(tempDoc)
        //   this.flash_card  = values   
        //   store.dispatch('SET_FLASHCARDS', values);       
       
          })
        },
      methods:{         
         renderFl(flashCard){
             store.dispatch('SELECT_FLASHCARD', flashCard)
          }
        
      } 
}


</script>

<style>

</style>
 