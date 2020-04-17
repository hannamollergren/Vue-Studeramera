<template>
	<div class="wrapper">
		<transition name="start" appear>
			<h1>StuderaMera</h1>
		</transition>
		<img src="https://lh3.googleusercontent.com/cUqo_qCicnepYFwKICwtfaXm0rlK3DYRSHR1tCImXVD56pKVp64wpNg1jvtg-HhRfIGHWsMjV4olQeW6f1hYLTCtGCWA3uB8pOxHuC3JO1UA5pdFzPzftm4aNa5YcWasjjqjWzNuWQ=w2400" alt="Student">
		<form>
			<input type="text" placeholder="Användarnamn" v-model="userInfo.name" key="name"><br>
			<input type="text" placeholder="E-mail adress" v-model="userInfo.email" key="email"><br>
			<input type="text" placeholder="Pluggar till..." v-model="userInfo.study" key="study">
		</form>
		<img src='https://lh3.googleusercontent.com/DmRIkCSZW8W6LCQ7BbihQdkAS_FB6ANnGfBPURvNa7UqTHGXhSfNe70yzIKdKXTvnr-wEGcf01WfAU6m3U3Jlzz1MRqMOCh_XXj-k20IGlrahcNaJciBShzZWTvP7I4tlL5ELrbJIw=s88-p-k' alt="button" height="60px" class='button-style' @click="saveAndNext">
  </div>
</template>
<script>
import nameMixin from '../nameMixin'
export default {
  mixins: [nameMixin],
  data: () => ({
	userInfo: {
			name: '',
			email: '',
			study: ''
	},
    visibleComponent: '',
    visibleHeader: Boolean(true)
  }),
  methods: {
    //Sparar input till local storage och går vidare till nästa component
    saveAndNext() {
    this.saveInput(this.userInfo);
  
    this.visibleComponent = 'welcome';
    this.$emit('click', this.visibleComponent, this.visibleHeader)
  }
  },
  mounted(){
    //Hämtar tillbaka input-värden från mixin så att input-fälten inte är tomma
	/* this.name = this.getName(); */
  }
};
</script>
<style scoped>
h1 {
  margin-top: 2em;
  margin-bottom: 0.5em;
  font-size: 2.5em;
}
.wrapper {
  text-align: center;
  display:block;
}
img{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
input {
  border: 2px solid #89C8C1;
  margin-top: 1.5em;
}
.button-style {
  margin-top: 1.2em;
  margin-bottom: 1.2em;
  cursor: pointer;
}
.start-enter {
  opacity: 0;  
}
.start-enter-to {
  transition: opacity 2s;
}
</style>
