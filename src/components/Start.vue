<template>
  <div class="wrapper">
	<transition name="start" appear>
		<h1>StuderaMera</h1>
	</transition>
    

  <img src="https://lh3.googleusercontent.com/F8vPVyD_M_9oG6fr5cDHJ294vsMHdGXO19vqgyz-I-LaXlPzSZBqM0ZpvP7KeanRBWtEKONN9-4nTtGEieJEJi09F0slYRyf-Ch5bV2DIcKptH8UusCe5vGRGXj_TDRjytNyoeVZ2XajUq5w-APKvlfkfBih8TxUi0atN5YWyj3w_ab5pIgrU65FAbhv_criEXZP4Ypbg2xkVF49e3ULN13u2RR5iVej2h4alqQ-qS4l3K8rSk2gbNAJOG6-zfILO-o_mcCG-emDnrwjHit8RLubmJz3xm73IQ_mcotqPxdVE9bMBCV8JHus_N8CIljCxSo_ZBZCPTjb0kmCHSeoky1Vf-OMYD3iEAUvPonsQLcfs-WeHxgQuxPq3LlmlBc8-zWtijJaT4ZEi6cm1gqVI5k4o0qEeu0YhXOqZ0-YwuUL9y6KebnRHrn816KuyGB9SLF7Q197ytohVIP4gB7Vk-93WVl86TdDNkXVCRIbC89k1JXC5FrwX4fuvUPmhgzEm1lH020lH328qhMBxs-XBdz6dSMyUm1NC3HEiFdmeYhw4z5hFNgUST_JsFuzX3znTuJNkcudChiiG9nzxk2YrPRcqyI3s9bi9aAlomw49lZg0Pr9nzRGz57dks1hAsGKgis9zKbOmUKUkK_h0FrGBO2lqyYHqnz84pWzTs3OvARTHKn8tHsntC-Bet6q0Q=w213-h206-no" alt="Student">
  <input type="text" placeholder="Hej, vem är du?" v-model="name" key="name" />
	
  <img src="https://lh3.googleusercontent.com/cu2NBt703IMccunDC6anUc7d6Lt_OyxMYQFJwETdd75e4hzGHDClR5wVGcORiSvTbBYQ0mFODOr915BJ_DAMoGkCluzUgtN0ujuu8sWI_iPEKewZqSsprIxckxQh7p_KSNoqHW1BAzEMpmWVIXSPw7ifssrUl9VRGEyErK1NDaWlFPtrehkMt-8GFr_dNUl_bcG7BnpeUTYJmefwUP6u1Nnlfn09BNHuNGzuvKJfpOWjJe7-C9wiAnl6oKW3bX1u39tZp2NC9Zq7hXSc_tlPp89RmRUEfe-Dg4wSczUat6VHSdos7T7LEURPXKtb3pQPfWfOqezc37lObmlehNcsow_kmgt3NvKFbpVmkR7iKJsbS0h-5mmpJz6B-sXvj03k7O0zGluol3z6nJTm9d5rfhJ-T9ABRh7LViUcqeSQLDzkYbLa9IjRC5tjkzQiGPydoMgNMMw3jpJd98TvoDivwlKQWqCAHFeUZq_qqB_gziOv24siCPLwaZGxZ2lp_CPkMEF7OOCJXV15s0x89snzqgfXtOQyv7Iffw0uihfWorXmE-h3Yl0fCPsOjV2LDwqqbjxpFH7qEPEuO16gM9eOtpsv2_wan920r3FlO445dQpZvGAkJpDC07UpJZVDP-Nym7nm0s3I-4yxuKA1pHmOv_gQPg1k_ic6KHmu7RfL6I4sLgoLlSjJ_o5E09IIPw=s88-no" alt="button" height="60px" class='button-style' @click="saveAndNext">
  <br><br>
  </div>
</template>

<script>
import nameMixin from '../nameMixin'

export default {
  mixins: [nameMixin],
	data: () => ({
		name: '' ,
		visibleComponent: '',
		visibleHeader: Boolean(true)
  }),
  methods: {
    saveAndNext() {
		this.saveName(this.name)  //Sparar namnet till mixin

		this.visibleComponent = 'welcome';
		this.$emit('click', this.visibleComponent, this.visibleHeader)
	}
  },
  mounted(){
    this.name = this.getName(); //Hämtar tillbaka namn från mixin så att input-fältet innehåller ett namn
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
  border: 2px solid #89c8c1;
  margin-top: 2.5em;

}

.button-style {
  margin-top: 1.2em;
  cursor: pointer;

}
.start-enter {
  opacity: 0;  
}
.start-enter-to {
  transition: opacity 3s;
}

</style>
