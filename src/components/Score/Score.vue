<template>
	<div class="backgroundcolor">
		<score-item></score-item>
	</div>
</template>

<script>
import ScoreItem from "./ScoreItem/ScoreItem";
export default{
	name:"Score",
	components:{
		ScoreItem
	}
		
}
</script>

<style>
.backgroundcolor{
	width: 100vw;
	height: 100vh;
	background-color: #e9ecef;
}
</style>