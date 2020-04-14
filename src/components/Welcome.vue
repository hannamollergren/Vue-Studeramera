<template >
	<div class="class-welcome">

		<h2>Välkommen {{user}}!</h2>


		<div>
		<img src="../assets/studeramera-button.png" alt="button" height="60px" class='button-style' @click="next">
		</div>
		<!-- <button class="button-style">
			<svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="44" cy="44" r="44" fill="#89C8C1"/>
			<rect x="29" y="23.364" width="9" height="38.1514" rx="4" transform="rotate(-45 29 23.364)" fill="white"/>
			<rect x="36.2698" y="70.8142" width="9" height="36.67" rx="4" transform="rotate(-136.08 36.2698 70.8142)" fill="white"/>
			</svg>
		</button> -->

		<!-- <img src="../assets/studeramera.png" alt="next-button"> -->

	</div>

</template>

<script>
import nameMixin from '../nameMixin'

export default {
	mixins: [nameMixin],

	data: () => ({
		user: '',
		visibleComponent: '',
	}),

	methods: {
		next(){
		console.log('start comp nextButton');
		this.visibleComponent = 'allTasks';
		console.log('welcome comp visablecomponent', this.visibleComponent);
		this.$emit('click', this.visibleComponent)
		}
		},
	

	mounted(){
		if(this.getName() == null){
			this.user = 'Stranger';
		}
		else{
			this.user = this.getName();
		}
	}
	
}
</script>

<style scoped>
.class-welcome{
	text-align: center;
}
.button-style{
	border: none;
	background: none;
	cursor: pointer;
	text-decoration: none;
	outline: none;
}


</style>
