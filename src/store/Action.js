export default{
	addTime({commit}){ //操作同步函数计算时间
		commit('addTime')
	},
	formatTime({commit}){ //操作同步函数格式化时间
		commit('formatSeconds')
	},
	Next({commit,state}){ //下一题
		if(state.itemNum<state.Itemdetails.length-1){

			commit('NextItem')
			
		}else{
			state.isLastItem=true//如果是最后一题，则要跳到Score页面
			alert("这是是最后一题!!!")
		}

	},
	Prev({commit,state}){ //上一题
		if(state.itemNum==0){
			alert("这是第一题!!!")

		}else if(state.itemNum>0){
			state.isLastItem=false//如果返回上一题则显示下一题按钮，隐藏完成按钮
			commit('PrevItem')
		}
	},
	Scores({commit},ItemObj){ //计算分数

		commit('AllScore',ItemObj)
	}
}
