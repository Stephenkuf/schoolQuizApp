<template>
	<div>
			<login v-if="Loggedin"></login> 
			<index></index>
			<!-- <div @click="log" class="btn">jtjtjtj</div> -->
			 <!-- <h1>this :{{ log }}</h1> -->
			 	
	</div>
</template>

<script>
import { store } from "./store/store";

import index from './index'
import login from './components/appComponent/log-in'
export default {  	
	name: "app",
	data(){
		return{	
			Loggedin:false
		}	
	},		
	
	components:{
		index
		// login
	}, 
	};
</script>

<style>
body {
	margin: 0;
}

main {
	margin-top: 40px;
}
</style>
