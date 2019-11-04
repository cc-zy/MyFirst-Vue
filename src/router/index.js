import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home';
import Subject from '@/components/Subject/Subject';
import Score from '@/components/Score/Score';

Vue.use(Router)

export default new Router({
  routes: [
 
    {
    	path: '/',
      name: 'Home',
      component: Home,
      children:[
    
      ]
    },
    {
    	path:'/Subject',
    	name:'Subject',
    	component:Subject
    },
     {
    	path:'/Score',
    	name:'Score',
    	component:Score
    }
  ]
})
