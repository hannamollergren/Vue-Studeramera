<template >
	<div class="class-welcome">
		<transition name="welcome" appear>
			<p>Välkommen {{user}}!</p>
		</transition>
		<div>
		<img src="../assets/studeramera-button.png" alt="button" height="60px" class='button-style' @click="next">
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
}

</style>
