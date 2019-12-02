
import Vue from 'vue';
import Router from 'vue-router';
import { routes } from './router/index';
import App from './App';
import store from "./store/store";
import swal from 'sweetalert';
import firebase from 'firebase/app'
import 'firebase/firestore'


// Required for side-effects
require("firebase/firestore");

   
firebase.initializeApp({
  apiKey: "AIzaSyDnu7j0zkEnukzkhTLFyKBH8ogbAPoIqsk",
  authDomain: "quiz-4bd44.firebaseapp.com",
  projectId: "quiz-4bd44",
});

export const db = firebase.firestore()

Vue.use(require('vue-moment'));
Vue.use(Router);





Vue.use(store);


export const router = new Router({
  mode: 'history',
  routes
});
    
new Vue({
  el: '#app',
  store,
  db, 
  router,  
  template: '<App/>',
  components: { App }
});
