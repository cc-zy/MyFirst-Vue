<template>
	<div class="backgroundcolor">
			
			<div class="title">
				web 前端笔试题
			</div>
			<div class="title_font">{{itemTitle}}</div>
		    <router-link to="/Subject">
		    	<b-button variant="primary"  class="button" @click="startaddTime">开始测试</b-button> <!--时间计算从这里点击开始-->
		    </router-link>
	</div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex';
export default{
	name:"HomeHeader",
    data() {
      return {
     
      }
    },
	computed:{
		...mapState([
			'itemTitle'
			
		])
	},
	methods:{
		...mapActions([
			'addTime'
		]),
		startaddTime:function(){//开始计算时间
			this.addTime()
		}
	
	}
}
	
</script>

<style scoped="scoped">
.title{
	width: 100%;
	text-align: center;
	position: absolute;
	left: 0;
	top: 30%;
	transform: translate(0,-50%);
	font-family: "微软雅黑";
	font-weight: 500;
	font-size: 40px;
}
.backgroundcolor{
	background-color: #e9ecef;
	width: 100vw;
	height: 100vh;
}
.button{
	position: fixed;
	bottom: 20%;
	left: 50%;
	transform: translate(-50%,0);
}
.title_font{
	width: 100vw;
	font-family: "微软雅黑";
	font-weight: 500;
	font-size: 25px;
	padding: 20px 10px;
	position: absolute;
	left: 0;
	top: 35%;
	text-align: center;

}

</style>