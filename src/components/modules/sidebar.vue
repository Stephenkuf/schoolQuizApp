<template>
	<div id="app" >


<aside class="sidebar sidebar-icons-right sidebar-icons-boxed sidebar-expand-lg sidebar-dark">
  <header class="sidebar-header bg-regular">
    <a class="logo-icon" href="#"><img src="https://res.cloudinary.com/stephenkuf/image/upload/v1574145774/LOGO_rssz5d.png" alt="logo icon"></a>
    <span class="logo">
      <a href="#">Quiz App</a>
      <!-- <img src="assets/img/logo-light.png" alt="logo"> -->
    </span>
  </header>

  <nav class="sidebar-navigation">
    <ul class="menu">
      <li class="menu-category">Student  Navigation</li>

      <li class="menu-item ">
		<router-link class="menu-link" tag="a" to="/user">
          <span class="icon ti-dashboard"></span>
          <span class="title">Dashboard</span>
		</router-link>
      </li>
      
      <li class="menu-item">
        <a class="menu-link" href="#">
        <!-- resource_board.php -->
          <span class="icon ti-home"></span>
          <span class="title">Flashcards</span>
          <span class="arrow"></span>
        </a>
        <ul class="menu-submenu">
          
          <li class="menu-item">
	      	<router-link class="menu-link" tag="a" to="/create-flash">
              <span class="dot"></span>
              <span class="title">Create FlashCard</span>
	      	</router-link>
          </li>
          <li class="menu-item">
	      	<router-link class="menu-link" tag="a" to="/view_events">
              <span class="dot"></span>
              <span class="title">My FlashCards</span>
	      	</router-link>
          </li>
        </ul>
      </li>
      <li class="menu-item">
	      	<router-link class="menu-link" tag="a" to="/view_profile">
          <span class="icon ti-user"></span>
          <span class="title ">Profile</span>
	      	</router-link>
          
      </li>
  

      <!-- <li class="menu-item ">
		     <router-link class="menu-link" tag="a" to="/admin">
            <span class="icon ti-dashboard"></span>
            <span class="title">Dashboard</span>
	    	  </router-link>
      </li> -->
      <!-- <div > -->
        <div  @click="logOut"  class="menu-item ">
            <router-link class="menu-link" tag="a" to="/login">
            <span class="icon ti-new-window"></span>
            <span class="title">Log Out</span>
            </router-link>        
      </div>
	
    </ul>
  </nav>
</aside>
	</div>	
</template>

<script>
import { router } from '../../main'
import { store } from "../../store/store";
import { db } from "../../main";

export default {
  methods:{
        logOut(){
          window.location.reload()
            store.dispatch('LOGGED_OUT')
            router.replace('login');  
            
         }
  }
	

};
</script>


<style scoped>
header span {
	padding-top: 0px;
}
</style>
