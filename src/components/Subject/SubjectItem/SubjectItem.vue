<template>
	<div class="subject">
		<div class="active_item">
		<span>{{Itemdetails[itemNum].active_item_num}}</span>.
		{{Itemdetails[itemNum].active_name}}
		</div>
		<div class="active_item_text"  >
			<ul>
				<li v-for="(item,index) in Itemdetails[itemNum].active_item" class="item-li" @click="ItemClick(index)">
					<span v-bind:class="{item_span_color:index==ItemLiNum}">{{changeType(item.answerid)}}.</span> 
					<span>{{item.answer_text}}</span>
				</li>
			</ul>
		</div>
		<span @click="PrevItem"><b-button variant="primary" to="/Subject" class="button button-prev" >上一题</b-button></span>
		<div v-if="isLastItem" @click="Success">
			<div v-if="ishasitems"><router-link to="/Score" ><b-button variant="success"  class="button button-next" >答题完成</b-button></router-link></div>
			<div v-else><b-button variant="success"  class="button button-next" >答题完成</b-button></div>
			
		</div>
		<div v-else>
			<span @click.stop="NextItemm" else><b-button variant="primary" to="/Subject" class="button button-next" >下一题</b-button></span>
		</div>
		
	</div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'; 
export default{
	name:"SubjectItem",
	data(){
		return{
			ItemLiNum:null, //点击了abcd中的一项则获取该项的ItemLiNum=index
			haschecked:[],//存放已答了的题,来是否清除ItemLiNum
			ishasitems:false  //是否做完所有题
		}
	},
	computed:{
		...mapState([
			'Itemdetails',//数组每一题的题目和选项
			'itemNum',//第几题,默认为0
			'alltime',//做题开始到做题完成用的时间
			'timer',  //定时器
			'itemscolor',
			'isLastItem'//是否是最后一题
		])
	},
	methods:{
		...mapMutations([

		]),
		...mapActions([
			'formatTime',
			'Next',
			'Prev',
			'Scores'

		]),
		changeType:function(answerid){  //将数字转换为abcd
			switch(answerid){
				case 0:return 'A';
				case 1:return 'B';
				case 2:return 'C';
				case 3:return 'D';
				
			}
		},
		ItemClick:function(index){ //点击abcd中的一项获取该项的index,并该项显示颜色
			this.ItemLiNum=index
			this.haschecked.push(this.itemNum)
			var ItemObj={}
			ItemObj.itemNum=this.itemNum
			ItemObj.index=index
			this.Scores(ItemObj)
			this.itemscolor[this.itemNum]=index
			if(this.Itemdetails.length==Object.keys(this.itemscolor).length){ //如果所有题都做完则设置 this.ishasitems=true
				this.ishasitems=true
			}
		},
		NextItemm:function(){ //下一题
			this.Next()	
			if(this.ItemLiNum!=null){
				this.ItemLiNum=null
			}
			for(let index in this.itemscolor){
				if(index==this.itemNum){
					this.ItemLiNum=this.itemscolor[index] //答过的题显示标记颜色

				}
			}


		},
		PrevItem:function(){
			this.Prev()
			if(this.ItemLiNum!=null){
				this.ItemLiNum=null
			}
			for(let index in this.itemscolor){
				if(index==this.itemNum){
					this.ItemLiNum=this.itemscolor[index]//答过的题显示标记颜色

				}
			}

		},
		Success:function(){//做题完成清理定时器

			if(this.Itemdetails.length==Object.keys(this.itemscolor).length){
				clearTimeout(this.timer)
				this.formatTime()
			}else{
				alert("还有题没做!!")
			}
		}
		
	}

}
</script>
<style scoped="scoped">
.active_item_text >ul{
	margin: 0;
	padding: 0;
}
.item-li{
	list-style: none;
	font-size: 15px;
	font-family: "微软雅黑";
	padding: 20px 20px;

}
.item-li >span:nth-child(1){
	font-weight: 600;
	
}
.item-li>span:nth-child(2){
	display: inline-block;
	width: 90%;
	word-wrap: break-word; //实现自动换行
    word-break: break-all; 
}
.active_item{
	font-family: "微软雅黑";
	font-size: 15px;
	padding: 20px 10px 10px 10px;
	font-weight: 550;
}
.active_item > span{
	font-weight: 600;
	font-size: 20px;
}
.item_span_color{
	color: slateblue;
	font-size: 20px;
}
.button-prev{
	position: absolute;
	bottom: 30%;
	left: 33%;
	transform: translate(-50%,0);
}
.button-next{
	position: absolute;
	bottom: 30%;
	left: 63%;
	transform: translate(-50%,0);
}

</style>