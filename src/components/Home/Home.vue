<template>
	<div>
		<home-header></home-header>

		<router-view></router-view>
	</div>
</template>

<script>
import HomeHeader from './HomeNext/HomeHeader';
export default{
	name:"Home",
	components:{
		HomeHeader
	}
}
	
</script>

<style scoped>

</style>