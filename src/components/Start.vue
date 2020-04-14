<template>
  <div class="wrapper">

   <img src="../assets/start-pic.png" alt="">

    <input type="text" placeholder="Hej, vem är du?" v-model="name" key="name" />
	
    <img src="../assets/studeramera-button.png" alt="button" height="60px" class='button-style' @click="saveName">
	
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
    name: '',
    visibleComponent: ''
	};
  },

  methods: {
    saveName() {
		localStorage.setItem('user', JSON.stringify(this.name)); 
    	console.log("Nu är namnet sparat");
    
		console.log('start comp nextButton');
		this.visibleComponent = 'welcome';
		console.log('start comp visablecomponent', this.visibleComponent);
		this.$emit('click', this.visibleComponent)

	}
  }
};

</script>

<style scoped>

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
  border: 1px solid #89c8c1;
  margin-top: 2.5em;

}

.button-style {
  margin-top: 1.2em;

}

</style>
