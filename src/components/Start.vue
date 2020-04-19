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
			<input type="text" placeholder="Användarnamn" v-model="userInfo.name" key="name" id="name" autocomplete="off" @blur.once="nameIsTouched =true"><br>
      <p v-if="!nameIsValid && nameIsTouched" class="error-message">Måste innehålla minst 3 tecken</p>
			<input type="text" placeholder="E-post adress" v-model="userInfo.email" key="email" id="email" autocomplete="off" @blur.once="emailIsTouched =true"><br>
			<p v-if="!emailIsValid && emailIsTouched" class="error-message">Inte giltlig e-post adress</p>
      <input type="text" placeholder="Pluggar till..." v-model="userInfo.study" key="study" id="study" autocomplete="off" @blur.once="studyIsTouched =true"><br>
      <p v-if="!studyIsValid && studyIsTouched" class="error-message">Ange utbildningen</p>
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
      study: '',
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
    },
    submitForm() {
      /* const this.formIsValid = this.nameIsValid && this.emailIsValid && this.studyIsValid */
    }
  },
  computed: {
	nameIsValid (){
		const name = this.userInfo.name
		return name.length >= 3;
	},

	emailIsValid (){
		const email = this.userInfo.email;
		return email.length > 0 && email.includes('@');
	},

	studyIsValid (){
		const study = this.userInfo.study
		return study.length >= 2;
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
  border: 1px solid #BFBDBB;
  /* border-style: none; */
  margin-top: 1.5em;
}
.button {
  background-image: url("https://lh3.googleusercontent.com/OFuyCNL5R_-X8ORz8AtF50mr53vwbpJpE5NQgI6egBeCosZPLjxchnUSScL_Yvkm78D46Mu9NoZLE0bp6QHTgaV1G5ADgHSiLwXM1AB6msvf6iYqZMMa3SXdMzNGwAEtktcWrYtU4gLYSZdoN9QZsH0dSpeFOA6A4ZbWcR6oar8oMBEgio-B9H6EXa3MjTO1ZlasYE22BWn9nqkF9Q3rAI1j2syiXVTblvJwfFCIo1wi_Yc8CrR4eBMODMzgQKYoqokjUpEcS8Nr2Cr5ikXVq1x_pBhIkcdnGMGHd-iyPxsQRQYDerUD4fytxmuq-zDg3QDZFbn9XUYhes0Lg2mOmcU9Ac-o-B8K01e-pqIUjFORaqfFCABF7BJJ5XsVsAEUTUbvTwBwapGPCI_7As8fOV1VV508OBWYglU5SnD-YIucptybtO-HU4ojGnD64d7O02y2pepKfRpgGwE54MztRDyDoP3IwSlgFg-2we9cLR-NgTQTZRT1n5JXx7Tz6_1qrVCIC3huT3kKG_HBmXY42yZqZFhIEw15zS3vCwkJ4CTnlLV8gw5zkEtiHeDL-n2dfH5vIge4EtrrzvK84zb5PXBG3_mJF9DHQ0Zef7EpYpB4A0Wfqg0sOoHhMSOIE3qFQyIBirp1iXkYwJZcPPunaKaCjBtsh-ReYQmxHbEZBuwAVJpFtOH7T2jHobaxeQ=s60-no");
  background-position: center;
  margin-top: 41px;
  margin-bottom: 1.2em;
  cursor: pointer;
  width: 60px;
  height: 60px;
}
.button:disabled { 
  background-image: url("https://lh3.googleusercontent.com/Z7ngKQ0wB40Q5YNKd84vMXfUwWAj495YB78eSzHSAG1m5mVZrKaoB6p3-F1cTl-SZkn2Uq4Si-oo06zNp_52V1xiuK8bn4Diq_P-hAwjS32SCw1gzJmFRoek-SDNpGOtPsuApjTe3OOw9JpbGZRyD1JfB9HYcG0l-Z7SiUTbUzYW4osWQJkoAD8npNUZpYuNRR8EZtBsS-04nR7sPlHeAm1lBoB8S-sByE8loHuNEnOk4QImYAVS0d13wWTuAmYcfmjL4b8rUtv7SNJB0MjkbWE1QyM0xXrELfBRaF03Sc2-Qg9HDMc38Rh4OTA8Y0Z0Bu-UPQJsFcT4K8tL5jx2rELuj4mVS98vOWr1y-lk0t8WcymZI95HMN7l9hq89Hc6CcRV4QM48RX_QsLaVUCEbZUcpCYkWI-L--5zG-kwFz4IzY-tUZyLXVKukqZJWjX2QSyuOgvNNYgdSRV4SQAvLhNYTEvDG2uMAv-8ckTccmkpcNOA1d_--D6lLbNsNaZjRLDpOTIG0uoPl203DQbAaYJAWatqVYzeBt-YusccIejSS5SZ46CCsFznpNaok9HeTBzaZXw0fpu6akowZVWyD15uHKMyp03ChGV9-mRLdPLTYHJqyixsbsd1yD7oxckm5B7FkbZoONWexKigUIq2TrAe9uG_g14e75-sENmVEKSGbOZTm1_VcuVtq8XdHg=s60-no");
  background-position: center;
  margin-top: 20px;
  margin-bottom: 1.2em;
  cursor: pointer;
  width: 60px;
  height: 60px;
  }
.start-enter {
  opacity: 0;  
}
.start-enter-to {
  transition: opacity 2s;
}
</style>
