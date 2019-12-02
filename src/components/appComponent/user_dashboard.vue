<template>
    <div class="main">
      <div class="site-noise"></div>
        <notifications group="error" position="top right" :max="max"/>
        <div class="pace pace-inactive">
          <div class="pace-progress" data-progress-text="100%" data-progress="99" style="width: 100%;">
            <div class="pace-progress-inner"></div>
          </div>
          <div class="pace-activity"></div>
        </div>


         <main>
    <div class="main-content">
      <header class="header no-border">
        <div class="header-bar">
          <h4>Welcome</h4>
        </div>
      </header>

      <div class="row">
        <div class="col-12">
          <div class="row ">
          
          
          <div class="col-6 col-lg-6">
            <router-link tag="a" to="/view_events">
            <div class="card">
              <div class="card-body">
                <div class="flexbox">
                  <h5>My Flashcards</h5>
                <router-link class="dropdown-item mb-10" tag="a" to="/create-flash">
                      <i class="ion-android-add"></i> Add </router-link>
                </div>

                <div class="text-center my-2">
                  <div class="fs-60 fw-400 text-info">{{ flash_card.length }}</div>
                  <span class="fw-400 text-muted">Flashcards</span>
                </div>
              </div>

              <div class="card-body bg-lighter fw-400 py-12">
                <!-- <span class="text-muted mr-1"></span> -->
                <span class="text-dark">{{ flash_card.length }}</span>
              </div>

              <div class="progress mb-0">
                <div class="progress-bar bg-info" role="progressbar" style="width: 45%; height: 3px;" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
             </router-link>
          </div>
         

          <div class="col-6 col-lg-6">
             <router-link tag="a" to="/all_flashcards">
            <div class="card">
              <div class="card-body">
                <div class="flexbox">
                  <h5>All Flashcards</h5>
                  <router-link class="dropdown-item" tag="a" to="/create-flash">
                      <i class="ion-android-add"></i> Add </router-link>

                </div>

                <div class="text-center my-2">
                  <div class="fs-60 fw-400 text-info">234</div>
                  <span class="fw-400 text-muted"> Total Flashcards</span>
                </div>
              </div>

              <div class="card-body bg-lighter fw-400 py-12">
                <!-- <span class="text-muted mr-1"></span> -->
                <span class="text-dark">234</span>
              </div>

              <div class="progress mb-0">
                <div class="progress-bar bg-info" role="progressbar" style="width: 45%; height: 3px;" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            </router-link>
          </div>
         
            <div class="col-lg-12">
                <header class="header no-border">
                   <div class="header-bar">
                     <h4>Recent Flashcards</h4>
                   </div>
                 </header> 
            </div>           

            <!--
              this piece of code shows more on click by slicing the array abd displaying as needed

               <div v-if="showLess">
                <div v-for="value in array.slice(0, 5)"></div>
              </div> 
              <div v-else> 
                <div v-for="value in array"></div>
              </div> 
              <button @click="showLess = false"></button> -->
                                    
                          
           

                <div v-for="(flash, idx) in flash_card.slice(0,6)" :key="idx"   class="col-md-6 col-lg-4">
                 <a href="#">
                    <div class="card card-shadowed ">
                      <header class="card-header">
                        <h4 class="card-title card-title-bold">{{ flash.front}}</h4>
                      </header>
                      <div class="card-body">   
                        <div class="row">
                          <div class="col-md-8">
                            
                          </div>
                          <div class="col-md-4 ">


                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>    
           </div>
        </div>
      </div>
    </div>
    <!-- <button @click="updateUser" class="btn">TEST</button> -->
  </main>   
    </div>
</template>

<script>
import { store } from "../../store/store";
import { router } from '../../main'
import { db } from "../../main";
import { log } from 'util';
export default {
  name:'user'  ,
  data(){
        return{
          flash_card:[],
        }
      },
    created() {       
            var flashcard;
            var flash_obj = []
            let userId  = store.getters.currentUserId;
            db.collection('flashcard').doc(userId).get().then(doc =>{
                // parse data from database
              flashcard = doc.data();         
              const fl = flashcard.obj;
              // parses the value of the objects and puts them in an Array
              const values = Object.values(fl)
              this.flash_card  = values   
              // $store.dispatch('SET_FLASHCARDS', values);
              console.log(this.flash_card.length);      
            })
            
        },

        methods:{
          
         
  
          
        }

}
</script>

<style>

</style>