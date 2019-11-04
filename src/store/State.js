export default {
	timer:0,//定时器
	alltime:0,//做题用的时间
	allscore:0,//最后的总分
	itemNum:0,//第几题
	itemTitle:"选择题(总分120每题20分)",
	checked:[],//已经答对题的itemNum
	itemscolor:{},//存放答过题,然后用于标记颜色
	isLastItem:false,//是否是最后一题

	Itemdetails:[
		{
			"id":0,
			"active_item_num":1,//第几个题目
			"active_name":"关于Vue生命周期，下列选项不正确的是()[单选题]",//题目
			"answerid":1,  //答案id
			"active_item":[  //数组四个选项
				{
					"answerid":0,
					"answer_text":"vue实例从创建到销毁的过程，就是生命周期。"
				},
				{
					"answerid":1,
					"answer_text":"页面首次加载会触发beforeCreate,created,beforeMount,mounted,beforeUpdate,uodated"
				},
				{
					"answerid":2,
					"answer_text":"created标识完成数据观测，属性和方法的运算，初始化时间，$el属性还没有显示出来"
				},
				{
					"answerid":3,
					"answer_text":"dom渲染在mounted中就完成了"
				}
			]
		},
		{
			"id":1,
			"active_item_num":2,//第几个题目
			"active_name":"对于vue中数据响应式原理说法，不正确的是()[单选题]",//题目
			"answerid":1,//答案id
			"active_item":[  //数组四个选项
				{
					"answerid":0,
					"answer_text":"采用数据劫持方式，即Object.defineProperty()劫持data中各个属性来实现数据响应式"
				},
				{
					"answerid":1,
					"answer_text":"视图中变化通过watcher更新data中的数据"
				},
				{
					"answerid":2,
					"answer_text":"若data中某个属性多次变化，watcher仅会进入更新队列1次"
				},
				{
					"answerid":3,
					"answer_text":"通过变异过程进行依赖收集"
				}
			]
		},
		{
			"id":2,
			"active_item_num":3,//第几个题目
			"active_name":"Vue中组件参数传递，不正确的是()[单选]",//题目
			"answerid":2,//答案id
			"active_item":[  //数组四个选项
				{
					"answerid":0,
					"answer_text":"子组件给父组件传值，使用emit方法 "
				},
				{
					"answerid":1,
					"answer_text":"子组件使用emit('someevent')派发事件,父组件使用@someevent监听"
				},
				{
					"answerid":2,
					"answer_text":"祖孙组件之间可以使用provide和inject方式跨层级相互传值"
				},
				{
					"answerid":3,
					"answer_text":"度组件给子组件传值，子组件通过props接收数据"
				}
			]
		},
		{
			"id":3,
			"active_item_num":4,//第几个题目
			"active_name":"关于v-model说法不正确的是()[单选]",//题目
			"answerid":2,//答案id
			"active_item":[  //数组四个选项
				{
					"answerid":0,
					"answer_text":"v-model能够实现双向绑定"
				},
				{
					"answerid":1,
					"answer_text":"v-model本质上是语法糖，负责监听用户输入时间以及更新数据"
				},
				{
					"answerid":2,
					"answer_text":"v-model是内置指令，不能使用在自定义组件上"
				},
				{
					"answerid":3,
					"answer_text":"对input使用v-model实际上是指定其：value和input"
				}
			]
		},
		{
			"id":4,
			"active_item_num":5,//第几个题目
			"active_name":"下列说法不正确的是哪项()[单选题]",//题目
			"answerid":1,
			"active_item":[  //数组四个选项
				{
					"answerid":0,
					"answer_text":"key的作用是为了高效的更新虚拟DOM"
				},
				{
					"answerid":1,
					"answer_text":"若指定了组件的template选项，render函数不会执行"
				},
				{
					"answerid":2,
					"answer_text":"使用vm.$nextTick可以确获得DOM异步更新的结果"
				},
				{
					"answerid":3,
					"answer_text":"若没有el选项，vm.$mount(dom)可以将Vue实例挂载于指定元素上"
				}
			]
		},
		{
			"id":5,
			"active_item_num":6,//第几个题目
			"active_name":"下列说法不正确的是哪项()[单选题]",//题目
			"answerid":1,
			"active_item":[  //数组四个选项
				{
					"answerid":0,
					"answer_text":"使用this.$parent查找当前组件的父组件"
				},
				{
					"answerid":1,
					"answer_text":"使用this.$children按照顺序查找当前组件的直接子组件"
				},
				{
					"answerid":2,
					"answer_text":"使用this.$root查找根组件，并可以配合$children遍历全部组件"
				},
				{
					"answerid":3,
					"answer_text":"使用this.$refs查找命名子组件"
				}
			]
		},
		{
			"id":6,
			"active_item_num":7,//第几个题目
			"active_name":"下列关于vuex描述，不正确的是哪项()[单选题]",//第一题题目
			"answerid":2,
			"active_item":[  //数组四个选项
				{
					"answerid":0,
					"answer_text":"Vuex是一个状态管理模式"
				},
				{
					"answerid":1,
					"answer_text":"Vuex主要用于多视图之间状态全局共享与管理"
				},
				{
					"answerid":2,
					"answer_text":"在Vuex中改变状态可以通过mutaions和actions"
				},
				{
					"answerid":3,
					"answer_text":"Vuex通过Vue实现状态响应式，因此只能使用于Vue"
				}
			]
		},
		{
			"id":7,
			"active_item_num":8,//第几个题目
			"active_name":"下列关于vue-router的描述，不正确的是()[单选题]",//第一题题目
			"answerid":2,
			"active_item":[  //数组四个选项
				{
					"answerid":0,
					"answer_text":"vue-router常用模式hash和history"
				},
				{
					"answerid":1,
					"answer_text":"可以通过addRoutes方法动态添加路由"
				},
				{
					"answerid":2,
					"answer_text":"可以通过beforeEnter对单个组件进行路由守卫"
				},
				{
					"answerid":3,
					"answer_text":"vue-router借助Vue实现路由信息响应式，因此只能用于Vue"
				}
			]
		},
		{
			"id":8,
			"active_item_num":9,//第几个题目
			"active_name":"关于vue服务器渲染，下列说法不正确的()[单选题]",//第一题题目
			"answerid":2,
			"active_item":[  //数组四个选项
				{
					"answerid":0,
					"answer_text":"通过服务器渲染，可以优化SEO抓取，提升首页加载速度"
				},
				{
					"answerid":1,
					"answer_text":"某些生命周期钩子函数 如(beforeCreate,created) 可以运行在服务端和客户端"
				},
				{
					"answerid":2,
					"answer_text":"服务器渲染的vue.js是同构开发，因为vue扩展库可以在服务端应用正常运行"
				},
				{
					"answerid":3,
					"answer_text":"组件渲染为服务端的HTML字符串，将他们直接发送到浏览器，最后在客户端上'激活'为可交互的应用"
				}
			]
		},
		{
			"id":9,
			"active_item_num":10,//第几个题目
			"active_name":"关于typescript在vue中的应用，说法不正确的是()[单选题]",//第一题题目
			"answerid":2,
			"active_item":[  //数组四个选项
				{
					"answerid":0,
					"answer_text":"使用typeScript可以获得静态类型检查以及最新的ECMAscript特性"
				},
				{
					"answerid":1,
					"answer_text":"typeScript是Javascript类型的超集，它可以编译成纯Javascript。意味着你完成可以使用JS语法编写TS代码"
				},
				{
					"answerid":2,
					"answer_text":"使用Vue.extend({})方式声明组件不能获得TypeScript类型推断能力"
				},
				{
					"answerid":3,
					"answer_text":"基于类的Vue组件中如果要声明初始数据可以直接声明为实例的属性，如 message:string='Hello'"
				}
			]
		},
		{
			"id":10,
			"active_item_num":11,//第几个题目
			"active_name":"下列关于vue说法不正确的是()[单选题]",//第一题题目
			"answerid":2,
			"active_item":[  //数组四个选项
				{
					"answerid":0,
					"answer_text":"vue简单易上手，性能高效，还便于与第三方库或既有项目整合"
				},
				{
					"answerid":1,
					"answer_text":"vue构建的项目复杂度增加较快，仅适合中小型项目"
				},
				{
					"answerid":2,
					"answer_text":"vue基于组件构建应用，代码组织简洁，易理解，易维护"
				},
				{
					"answerid":3,
					"answer_text":"vue借助虚拟DOM实现跨平台，服务端渲染，以及性能良好的DOM更新策略"
				}
			]
		},
		{
			"id":11,
			"active_item_num":12,//第几个题目
			"active_name":"下列关于vue原理哪些是正确的()[单选题]",//第一题题目
			"answerid":2,
			"active_item":[  //数组四个选项
				{
					"answerid":0,
					"answer_text":"Vue中数据变更通知，通过拦截数组操作方法实现"
				},
				{
					"answerid":1,
					"answer_text":"编译器目标是创建渲染函数，渲染函数执行得到VNODE树"
				},
				{
					"answerid":2,
					"answer_text":"组件内data发生变化会通知其对应的Watcher执行异步更新"
				},
				{
					"answerid":3,
					"answer_text":"patching算法首先是进行同层级比较，可以执行的操作是节点的增加，删除和更新"
				}
			]
		}
		
	
	]
}

