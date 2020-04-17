<template>
	<div class="wrapper">
		<transition name="start" appear>
			<h1>StuderaMera</h1>
		</transition>
		<img src="https://lh3.googleusercontent.com/cUqo_qCicnepYFwKICwtfaXm0rlK3DYRSHR1tCImXVD56pKVp64wpNg1jvtg-HhRfIGHWsMjV4olQeW6f1hYLTCtGCWA3uB8pOxHuC3JO1UA5pdFzPzftm4aNa5YcWasjjqjWzNuWQ=w2400" alt="Student">
		<form
      @submit.prevent="submitForm"
      autocomplete="off"
    >
			<input type="text" placeholder="Användarnamn" v-model="userInfo.name" key="name" id="name"><br>
      <p v-if="!nameIsValid" class="error-message">Namnfältet krävs</p>
			<input type="text" placeholder="E-mail adress" v-model="userInfo.email" key="email" id="email"><br>
			<p v-if="!emailIsValid" class="error-message">E-postfältet krävs</p>
      <input type="text" placeholder="Pluggar till..." v-model="userInfo.study" key="study" id="study"><br>
      <p v-if="!studyIsValid" class="error-message">Studiefältet krävs</p>
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
			name: null,
			email: null,
			study: null
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
    },
    submitForm() {
      /* const this.formIsValid = this.nameIsValid && this.emailIsValid && this.studyIsValid */
    }
  },
  computed: {
    nameIsValid (){
      return !!this.userInfo.name
    },

    emailIsValid (){
      return !!this.userInfo.email
    },

    studyIsValid (){
      return !!this.userInfo.study
    },

    formIsValid () {
      return this.nameIsValid && this.emailIsValid && this.studyIsValid
    }
  },
  mounted(){
    //Hämtar tillbaka input-värden från mixin så att input-fälten inte är tomma
	/* this.name = this.getName(); */
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
  margin-top: 1.5em;
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
</style>
