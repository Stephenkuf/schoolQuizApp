<template>
  <div class="main">
    <!-- Main container -->
  <main>
    <div class="main-content">
      
        <div class="card" style="margin-top:0px">
        <header class="flexbox flex-justified align-items-center h-head no-border">
          <div class="flex-grow-3 header-bar pl-20">
            <h2>Create your FlashCards</h2>
          </div>
        
        </header>    
      

      </div>

      <div class="row  ">
        <div class="col-lg-6" >        
            <header class="flexbox flex-justied align-items-center h-head no-border">
              <div class="header-bar">                
                  <select v-model="category" class="form-control" id="select">
                    <option disabled value="">select a category</option>
                    <option>Mathematics</option>
                    <option>English</option>
                    <option>Biology</option>
                    <option>General</option>
                  </select>
                </div>
          </header>           
        </div>      
      </div>
      <br>

      <!-- flashcard front  -->
      <div class="row">
        <div class="col-md-6 ">
          <div class="card card-body no-border" style="min-height:300px">
            <h4 class="">FLASHCARD FRONT</h4>
            <hr class="w-50px ml-0 bt-2 border-success hr-sm">
                <h4>
                 
                   <label class="field a-field a-field_a1">
                      <input  v-model="front" class="field__input a-field__input"  placeholder="e.g. Stanislav" required>
                      <span class="a-field__label-wrap">
                        <span class="a-field__label">Question</span>
                      </span>
                    </label>
                </h4>          
          </div>
        </div>

        <div class="col-md-6 ">
          <div class="card card-body no-border" style="min-height:300px">
            <h4 class="">FLASHCARD Back</h4>
            <hr class="w-50px ml-0 bt-2 border-success hr-sm">
                <h4>                 
                   <label class="field a-field a-field_a1">
                      <input  v-model="back" class="form field__input a-field__input"  placeholder="e.g. Stanislav" required>
                      <span class="a-field__label-wrap">
                        <span class="a-field__label">Answer</span>
                      </span>
                    </label>
                </h4>             
          </div>
        </div>
      
      </div>
      <div class="row m-10">
        <div class="row">
          
            <div
             @click="write_flash" 
             class=" btn btn-success"
             
             >CREATE</div>
        </div>     
       
             
      </div>

     


       <!-- <h1>
         
         <p>fcirs : {{ front }}</p>
        
   
        </h1> -->
     <p>category:{{ category }}</p>
       
    </div>
    <!--/.main-content -->
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
import { firestore } from 'firebase';

export default {
  data(){
    return{
        
        front:'',
        back:'',
        category:''
             
      };
  }, 
 
  methods:{
 
     write_flash(){          
      
          var randomVal = Math.random().toString(36).substring(7);
                          
          var docId= Math.random().toString(36).substr(2, 5);
                          console.log("random", docId);
          var obj  = {}

                 
            let userId  = store.getters.currentUserId
            let db_path = db.collection('flashcard').doc(userId)          
            // :
            obj[randomVal] = {id:docId,
                              front:this.front,
                              back:this.back,
                              category:this.category
                              } ;
            
            db_path.set({ 
              obj
            }, { merge: true })

            .then(()=>{
            swal("Nice","Flashcard created", "success")
              // clearing the input field      
              this.front = '' 
              this.back = ''
            }).catch((error) =>{
              console.log("Error writing Document", error)
            })     
        
     }
    //  end of createflash functions   
  }

}
 </script>

<style scoped>

.field{
  --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, #767676);
}

.field__input{ 
  background-color: transparent;
  border-radius: 0;
  border: none;

  -webkit-appearance: none;
  -moz-appearance: none;

  font-family: inherit;
  font-size: 1em;
}

.field__input:focus::-webkit-input-placeholder{
  color: var(--uiFieldPlaceholderColor);
}

.field__input:focus::-moz-placeholder{
  color: var(--uiFieldPlaceholderColor);
  opacity: 1;
}

/*
=====
LEVEL 2. CORE STYLES
=====
*/

.a-field{
  display: inline-block;
}

.a-field__input{ 
  display: block;
  box-sizing: border-box;
  width: 100%;
}

.a-field__input:focus{
  outline: none;
}

/*
=====
LEVEL 3. PRESENTATION STYLES
=====
*/

/* a-field */

.a-field{
  --uiFieldHeight: var(--fieldHeight, 40px);  
  --uiFieldBorderWidth: var(--fieldBorderWidth, 2px);
  --uiFieldBorderColor: var(--fieldBorderColor);

  --uiFieldFontSize: var(--fieldFontSize, 1em);
  --uiFieldHintFontSize: var(--fieldHintFontSize, 1em);

  --uiFieldPaddingRight: var(--fieldPaddingRight, 15px);
  --uiFieldPaddingBottom: var(--fieldPaddingBottom, 15px);
  --uiFieldPaddingLeft: var(--fieldPaddingLeft, 15px);   

  position: relative;
  box-sizing: border-box;
  font-size: var(--uiFieldFontSize);
  padding-top: 1em;  
}

.a-field__input{
  height: var(--uiFieldHeight);
  padding: 0 var(--uiFieldPaddingRight) 0 var(--uiFieldPaddingLeft);
  border-bottom: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColor);  
}

.a-field__input::-webkit-input-placeholder{
  opacity: 0;
  transition: opacity .2s ease-out;
}

.a-field__input::-moz-placeholder{
  opacity: 0;
  transition: opacity .2s ease-out;
}

.a-field__input:not(:placeholder-shown) ~ .a-field__label-wrap .a-field__label{
  opacity: 0;
  bottom: var(--uiFieldPaddingBottom);
}

.a-field__input:focus::-webkit-input-placeholder{
  opacity: 1;
  transition-delay: .2s;
}

.a-field__input:focus::-moz-placeholder{
  opacity: 1;
  transition-delay: .2s;
}

.a-field__label-wrap{
  box-sizing: border-box;
  width: 100%;
  height: var(--uiFieldHeight);	

  pointer-events: none;
  cursor: text;

  position: absolute;
  bottom: 0;
  left: 0;
}

.a-field__label{
  position: absolute;
  left: var(--uiFieldPaddingLeft);
  bottom: calc(50% - .5em);

  line-height: 1;
  font-size: var(--uiFieldHintFontSize);

  pointer-events: none;
  transition: bottom .2s cubic-bezier(0.9,-0.15, 0.1, 1.15), opacity .2s ease-out;
  will-change: bottom, opacity;
}

.a-field__input:focus ~ .a-field__label-wrap .a-field__label{
  opacity: 1;
  bottom: var(--uiFieldHeight);
}

/* a-field_a1 */

.a-field_a1 .a-field__input{
  transition: border-color .2s ease-out;
  will-change: border-color;
}

.a-field_a1 .a-field__input:focus{
  border-color: var(--fieldBorderColorActive);
}

</style>
  
 