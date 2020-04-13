<template>
  <div class="start-class">
    <h1>StuderaMera</h1>
    <input type="text" placeholder="Hej, vem är du?" v-model="name" key="name" />

	<img src="../assets/studeramera-button.png" alt="button" height="70px" class='next' @click="saveName">

    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
		name: '',
	};
  },

  methods: {
    saveName() {
		localStorage.setItem("user", JSON.stringify(this.name)); 
		console.log("Nu är namnet sparat");
	}
  }
};

</script>

<style scoped>

.start-class {
  text-align: center;
}

/* height: 88px;
	width: 88px; */
/* .button-style {
  

  border: none;
  background: none;
  cursor: pointer;
  text-decoration: none;
  outline: none;
} */


.next{
    margin: 0 0 0 4em;
    align-self: center;
    }
</style>