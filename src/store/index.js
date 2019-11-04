import Vue from 'vue';
import Vuex from 'vuex';
import state from './State';
import mutations from './Mutation';
import actions from './Action';


Vue.use(Vuex);

export default new Vuex.Store({
	state,
	mutations,
	actions,
	
})
	

