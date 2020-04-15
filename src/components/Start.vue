<template>
  <div class="wrapper">
    <transition name="start" appear>
      <h1>StuderaMera</h1>
    </transition>
  <img src="../assets/start-pic.png" alt="">
  <input type="text" placeholder="Hej, vem är du?" v-model="name" key="name" />
  <img src="../assets/studeramera-button.png" alt="button" height="60px" class='button-style' @click="saveAndNext">
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
}
.start-enter {
  opacity: 0;  
}
.start-enter-to {
  transition: opacity 3s;
}

</style>
