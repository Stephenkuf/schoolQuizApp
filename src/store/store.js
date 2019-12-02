import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import { db } from "../main";

Vue.use(Vuex)


 export const store  = new Vuex.Store({
    plugins: [createPersistedState()],  
    state:{
        counter:0 ,
        isLogged:false ,
        currentUserId:'E6A1vziPeia0dPkLOZMO6B9XhD63',
        flash_card:[],
        selected:[]
    }, 

    // GETTERS 
    getters:{
        isLogged(state){
           return state.isLogged;
        },
        currentUserId(state){
            return state.currentUserId;
         },
        userFlashcards(state){
            return state.flash_card;
        },
        selectedFlash(state){
            return state.selected;
        }
    },
    // MUTATIONS MUTATIONS 
    mutations:{
        LOGGED_IN(state){
            state.isLogged = true;
        },
        LOGGED_OUT(state){
            state.isLogged = false;
        },
        SET_CURRENT_USER(state, payload){
            state.currentUserId = payload
        },
        SET_FLASHCARDS(state, payload){
            state.flash_card  = payload
        },
        SET_SELECTED(state, payload){
            state.selected = payload
        }
    },
    // ACTIONS ACTIONS 
    actions:{
        LOGGED_IN({commit}){
            commit('LOGGED_IN');
        },
        LOGGED_OUT({commit}){
            commit('LOGGED_OUT');
        },
   
    SET_USER ({commit}, payload){
       commit('SET_CURRENT_USER', payload)
    }  ,
    SET_FLASHCARDS({commit}, payload){ 

        
         commit('SET_FLASHCARDS', payload)
                   
        
    },
    SELECT_FLASHCARD({commit} , payload){
        commit ('SET_SELECTED', payload)
    }

},
 });
 export default { }
