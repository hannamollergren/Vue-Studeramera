<template>
	<div class="wrapper">
		<transition name="start" appear>
			<h1>StuderaMera</h1>
		</transition>
		<img src="https://lh3.googleusercontent.com/cUqo_qCicnepYFwKICwtfaXm0rlK3DYRSHR1tCImXVD56pKVp64wpNg1jvtg-HhRfIGHWsMjV4olQeW6f1hYLTCtGCWA3uB8pOxHuC3JO1UA5pdFzPzftm4aNa5YcWasjjqjWzNuWQ=w2400" alt="Student">
		<form @submit.prevent="submitForm" autocomplete="off">
			<input type="text" placeholder="Användarnamn" v-model="userInfo.name" key="name" id="name" @blur.once="nameIsTouched =true"><br>
			<p v-if="!nameIsValid && nameIsTouched" class="error-message">Måste innehålla minst 3 tecken</p>

			<input type="text" placeholder="E-post adress" v-model="userInfo.email" key="email" id="email" @blur.once="emailIsTouched =true">
			<p v-if="!emailIsValid && emailIsTouched" class="error-message">Inte giltlig e-post adress</p><br>

			<input type="text" placeholder="Pluggar till..." v-model="userInfo.study" key="study" id="study" @blur.once="studyIsTouched =true">
			<p v-if="!studyIsValid && studyIsTouched" class="error-message">Ange utbildning</p>
		</form>
    <button :disabled="!formIsValid" class='button' @click="saveAndNext"></button>
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
	visibleHeader: Boolean(true),
	nameIsTouched: Boolean(false),
	emailIsTouched: Boolean(false),
	studyIsTouched: Boolean(false)
  }),
  methods: {
    //Sparar input till local storage och går vidare till nästa component
    saveAndNext() {
    this.saveInput(this.userInfo);
  
    this.visibleComponent = 'welcome';
    this.$emit('click', this.visibleComponent, this.visibleHeader)
    }
  },
  computed: {
	nameIsValid (){
		const name = this.userInfo.name
		return name.length >= 3;
	},

	emailIsValid (){
		const email = this.userInfo.email;
		return email.length > 5 && email.includes('@');
	},

	studyIsValid (){
		const study = this.userInfo.study
		return study.length >= 2;
	},

	formIsValid () {
		return this.nameIsValid && this.emailIsValid && this.studyIsValid
	}
  }
};
</script>
<style scoped>
.error-message {
  margin-top: .5em;
  font-size: .8em;
}
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
  margin-top: 1.3em;
  width: 30%;
}
.button {
  background-image: url('https://lh3.googleusercontent.com/DmRIkCSZW8W6LCQ7BbihQdkAS_FB6ANnGfBPURvNa7UqTHGXhSfNe70yzIKdKXTvnr-wEGcf01WfAU6m3U3Jlzz1MRqMOCh_XXj-k20IGlrahcNaJciBShzZWTvP7I4tlL5ELrbJIw=s88-p-k');
  background-position: center;
  margin-top: 2.2em;
  margin-bottom: 1.2em;
  cursor: pointer;
  width: 80px;
  height: 80px;
}

.start-enter {
  opacity: 0;  
}
.start-enter-to {
  transition: opacity 2s;
}
 @media (max-width: 600px) {
    input{
		width: 60%;
	}
}
</style>
