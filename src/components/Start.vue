<template>
  <div class="wrapper">
	<transition name="start" appear>
		<h1>StuderaMera</h1>
	</transition>
    

  <img src="https://lh3.googleusercontent.com/PhlaXsXsqmgEdHj3PoL87fp1ok_RhaAmZbxlZ6n5EGa10II4X-giNRziqkf9uiHQCShs1Bw3oVqGMmRnFdFNxULr4wvSBhW7WS9vcehCEyOUGdJjzhQBnhqg9biVAXQNxSLvzxy6CEsLbiRvbf2x6rQ2CW1CJVqVkIPHiA2OgQ7_eN9APpNvix-u-uS_3IC-3B1OT8OvuWvNZKmUyWqSais90_9GGxCgqcg2RYSrYYJ4rCsMtClIjrZsXMcuB62JWf9DCg7skWGqzHDfYWIigzwcyoZScLF8JU_2lK4U6SGk2-A1qsxFzbKT9qmxG7wzVpbW27iJ1uCtO3CRY9cJ1Rsm9RpgtjZkdY5iTyj4iV-qr1qgIPAxRhIiHdtXNW6k3Rxm3o2t9AFvdL8DOrt8cy4ODV9DO_euZfvr9hgH7JwxUdV9sIEDFcXv-QeeSYKi0LTYj66BF9W3nhR7u9zbf53M6N_zzVeQpQrrepXSswHxs4Ff1YrhTXrkeJhB1asPoe8IwtZzQH07kWkMe7_TB8GiKkpj-ZALtGoHcdrgoPIr5klESGW3EonI-fMzBR0h8Q--2hkCT59-1r2HvuPzcn5-tNA_ICkcZMUTkY6YT5a4HMO1-aqyJxpfYMqSvey_zq-88I3R-rNEOXWCB77ejzSLD5UiFCfF0KzD6otLHoun9Q-HTlY3G2H-Mof30w=w213-h206-no" alt="">
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
