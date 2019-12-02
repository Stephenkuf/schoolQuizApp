<template>
	<div>
		<myHeader></myHeader>
		<sideBar v-if="log"></sideBar>
	<router-view ></router-view>
	<!-- <h2 class="ml-400">log ; {{ log }}</h2> -->

	</div>
</template>

<script>
import sideBar from "../src/components/modules/sidebar";
import myheader from "../src/components/modules/topbar";
import { store } from "./store/store";


export default {
	//   name: 'app',	
	data() {
		return{
		}		
	},
	computed:{
		log(){
			return store.getters.isLogged			
		}
		
	},
	components: {
		sideBar: sideBar,
		myHeader: myheader,
	},
	
};
</script>
<style>

</style>
