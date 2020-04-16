<template>
  <div class="wrapper">
	<transition name="start" appear>
		<h1>StuderaMera</h1>
	</transition>

	<img src="https://lh3.googleusercontent.com/cUqo_qCicnepYFwKICwtfaXm0rlK3DYRSHR1tCImXVD56pKVp64wpNg1jvtg-HhRfIGHWsMjV4olQeW6f1hYLTCtGCWA3uB8pOxHuC3JO1UA5pdFzPzftm4aNa5YcWasjjqjWzNuWQ=w2400" alt="Student">

	<input type="text" placeholder="Hej, vem är du?" v-model="name" key="name" />

	<img src='https://lh3.googleusercontent.com/DmRIkCSZW8W6LCQ7BbihQdkAS_FB6ANnGfBPURvNa7UqTHGXhSfNe70yzIKdKXTvnr-wEGcf01WfAU6m3U3Jlzz1MRqMOCh_XXj-k20IGlrahcNaJciBShzZWTvP7I4tlL5ELrbJIw=s88-p-k' alt="button" height="60px" class='button-style' @click="saveAndNext">
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
  transition: opacity 2s;
}

</style>
