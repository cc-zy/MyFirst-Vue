<template>
	<div>
		<div class="score">
			<span>分数:</span>{{allscore}}
		</div>
		<div class="time">
			<span>时间:</span>{{alltime}}
		</div>
		<router-link to="/"><b-button variant="primary"  class="button button-again" >再做一遍</b-button></router-link>
	</div>
</template>

<script>
import {mapState,mapMutations,mapActions} from "vuex";
export default{
	name:"ScoreItem",
	computed:{
		...mapState([
			'alltime',
			'allscore'
		])
	}
}
</script>

<style>
	.time{
		font-weight: 500;
		font-size: 18px;

	}
	.score{
		font-weight: 600;
		font-size: 30px;
		opacity: 0.7;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.button-again{
		position: absolute;
		bottom: 30%;
		left: 50%;
		transform: translate(-50%,0);
	}
</style>