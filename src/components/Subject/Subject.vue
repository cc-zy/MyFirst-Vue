<template>
	<div class="backgroundcolor">
		<subject-item></subject-item>
	</div>
</template>

<script>
import SubjectItem from './SubjectItem/SubjectItem';
export default{

	components:{
		SubjectItem
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