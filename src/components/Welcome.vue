<template >
	<div class="class-welcome">
		<transition name="welcome" appear>
			<p>Välkommen {{user}}!</p>
		</transition>
		
		<div>
			<img src="https://lh3.googleusercontent.com/DmRIkCSZW8W6LCQ7BbihQdkAS_FB6ANnGfBPURvNa7UqTHGXhSfNe70yzIKdKXTvnr-wEGcf01WfAU6m3U3Jlzz1MRqMOCh_XXj-k20IGlrahcNaJciBShzZWTvP7I4tlL5ELrbJIw=s88-p-k" alt="button" height="60px" class='button-style' @click="next">
		</div>
	</div>
</template>

<script>
import nameMixin from '../nameMixin'
export default {
	mixins: [nameMixin],
	data: () => ({
		user: '' ,
		visibleComponent: '',
	}),
	methods: {
		next(){
			this.visibleComponent = 'allTasks';
			this.$emit('click', this.visibleComponent)
		}
	},
	mounted(){
		this.user = this.getName()
	}
}
</script>

<style scoped>
p{
	margin-top: 6em;
	font-size: 1.5em;

}
.class-welcome{
	text-align: center;
	display:block;
	
}
.button-style{
	margin-top: 1.2em;
	cursor: pointer;
}
/* .welcome-enter {
	opacity: 0.3;
}
.welcome-enter-to {
	transition: opacity 1.5s;
} */



</style>
