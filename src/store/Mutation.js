const NEXT="NextItem";
const PREV="PrevItem";
const SCORE="AllScore";

export default{
	addTime(state){  //计算做题用的时间
		state.timer=setInterval(function(){
			state.alltime+=1
			if(state.alltime>3){
				return state.alltime
			}
		},1000)
	},
	formatSeconds(state){  //将秒数转换为时分秒格式
	    var secondTime = parseInt(state.alltime);// 秒
	    var minuteTime = 0;// 分
	    var hourTime = 0;// 小时
	    if(secondTime > 60) {//如果秒数大于60，将秒数转换成整数
	            //获取分钟，除以60取整数，得到整数分钟
	        minuteTime = parseInt(secondTime / 60);
	            //获取秒数，秒数取佘，得到整数秒数
	        secondTime = parseInt(secondTime % 60);
	            //如果分钟大于60，将分钟转换成小时
	        if(minuteTime > 60) {
	                //获取小时，获取分钟除以60，得到整数小时
	            hourTime = parseInt(minuteTime / 60);
	                //获取小时后取佘的分，获取分钟除以60取佘的分
	            minuteTime = parseInt(minuteTime % 60);
	        }
	    }
	    var result = "" + parseInt(secondTime) + "秒";
 
	    if(minuteTime > 0) {
	        result = "" + parseInt(minuteTime) + "分" + result;
	    }
	    if(hourTime > 0) {
	        result = "" + parseInt(hourTime) + "小时" + result;
	    }

		state.alltime=result
	},
	[NEXT](state,num){//下一题,ItemNum=+1
			state.itemNum++

	},
	[PREV](state){//上一题
		state.itemNum--
		
	},
	[SCORE](state,ItemObj){ //计算分数 ,ItemObj是参数对象,ItemObj.itemNum是指哪一题,ItemObj.index是指数组选项的索引值

		var iseq=true//判断是否已经答过了这题,true为没答过这题
		var itemNum=ItemObj.itemNum
		var  itemIndex=ItemObj.index
		if(state.checked.length>0){  //判断已经答对题的数组是否为空
			state.checked.forEach(function(value,index){ 

				if(value==itemNum){ //现在这题是否存在已经答对的题里
					if(state.Itemdetails[itemNum].active_item[itemIndex].answerid==state.Itemdetails[itemNum].answerid){  //现在这题在答对题数组里 则判断answerid和现在的answerid是否相等
						iseq=false  
					}else{
						state.allscore-=20  //在已经答对的题和现在这答题的不相等的话则减20分
						state.checked.splice(index,1)						
					}
				}
			
			})
			
			if(iseq){
				if(state.Itemdetails[itemNum].active_item[itemIndex].answerid==state.Itemdetails[itemNum].answerid){
					state.allscore+=20
					state.checked.push(itemNum)
				}else{
//					console.log("你答错了")
						
				}
			}
		
		}else{
			if(state.Itemdetails[itemNum].active_item[itemIndex].answerid==state.Itemdetails[itemNum].answerid){
						state.allscore+=20 
						state.checked.push(itemNum)




			}else{
//				console.log("你答错了")
			}
		}
	}
}
