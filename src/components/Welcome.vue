<template >
	<div class="class-welcome">
		<transition name="welcome" appear>
			<p>Välkommen {{user}}!</p>
		</transition>
		
		<div>
		<img src="https://lh3.googleusercontent.com/cu2NBt703IMccunDC6anUc7d6Lt_OyxMYQFJwETdd75e4hzGHDClR5wVGcORiSvTbBYQ0mFODOr915BJ_DAMoGkCluzUgtN0ujuu8sWI_iPEKewZqSsprIxckxQh7p_KSNoqHW1BAzEMpmWVIXSPw7ifssrUl9VRGEyErK1NDaWlFPtrehkMt-8GFr_dNUl_bcG7BnpeUTYJmefwUP6u1Nnlfn09BNHuNGzuvKJfpOWjJe7-C9wiAnl6oKW3bX1u39tZp2NC9Zq7hXSc_tlPp89RmRUEfe-Dg4wSczUat6VHSdos7T7LEURPXKtb3pQPfWfOqezc37lObmlehNcsow_kmgt3NvKFbpVmkR7iKJsbS0h-5mmpJz6B-sXvj03k7O0zGluol3z6nJTm9d5rfhJ-T9ABRh7LViUcqeSQLDzkYbLa9IjRC5tjkzQiGPydoMgNMMw3jpJd98TvoDivwlKQWqCAHFeUZq_qqB_gziOv24siCPLwaZGxZ2lp_CPkMEF7OOCJXV15s0x89snzqgfXtOQyv7Iffw0uihfWorXmE-h3Yl0fCPsOjV2LDwqqbjxpFH7qEPEuO16gM9eOtpsv2_wan920r3FlO445dQpZvGAkJpDC07UpJZVDP-Nym7nm0s3I-4yxuKA1pHmOv_gQPg1k_ic6KHmu7RfL6I4sLgoLlSjJ_o5E09IIPw=s88-no" alt="button" height="60px" class='button-style' @click="next">
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
/* .welcome-enter {
	opacity: 0.3;
}
.welcome-enter-to {
	transition: opacity 1.5s;
} */



</style>
