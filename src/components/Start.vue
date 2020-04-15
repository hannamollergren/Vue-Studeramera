<template>
  <div class="wrapper">

   <img src="../assets/start-pic.png" alt="">

    <input type="text" placeholder="Hej, vem är du?" v-model="name" key="name" />
	
    <img src="../assets/studeramera-button.png" alt="button" height="60px" class='button-style' @click="saveAndNext">
	
    <br />
    <br />
  </div>
</template>

<script>
import nameMixin from '../nameMixin'

export default {
  mixins: [nameMixin],

	data: () => ({
		name: '' ,
		visibleComponent: '',
  }),
  
  methods: {
    saveAndNext() {
    this.saveName(this.name)  //Sparar namnet till mixin

    this.visibleComponent = 'welcome';
    console.log('start comp visablecomponent', this.visibleComponent);
    this.$emit('click', this.visibleComponent)

	}
  },
  mounted(){
    this.name = this.getName(); //Hämtar tillbaka namn från mixin så att input-fältet innehåller ett namn

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
  border: 2px solid #89c8c1;
  margin-top: 2.5em;

}

.button-style {
  margin-top: 1.2em;

}

</style>