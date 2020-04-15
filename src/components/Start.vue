<template>
  <div class="wrapper">
	<transition name="start" appear>
		<h1>StuderaMera</h1>
	</transition>
    

  <img src="https://lh3.googleusercontent.com/72js8Uadj_CVWqlijzTKJxsMyg_f_epVlYFif3cJdLSp-s1V4IxkBDxDXaEOBi0lZMkpeoV_F4NmCcVEnNJinxpcaTCdBNN0j6UNcQGnWo7yPG69sprl0RwKZzmnICpcF3IVcQAFQE686TvS9yMK6wALwfBW_Hyf8zJtQuPsmEqy4B1I7jMx9fwvAZZtXVcFPSQNkO-odg2D5UX1GY7wJU_FPQNCFWCdTJYhpU4NmAM-kWnErrGU5F0Qg25YrGCfl8EnsCSVmUEFuDxG2jRLh7E8ST8oRXLLatJp4cDr3FZi6iPPD2mN0TChkbxe9K6qF6Bg6K5IB7isVK1FPyfI7UoMoMUb4Nx8iUy6qlpl4a7JYJ_nNxMaYIxnBHriN9uCwiDLGT6yP8KR7Dz3fVp7CxVDfvIv8To92i_vFSN8fFMs_8Q1ID5iXoN5dND3lCnVRapHJ3BjJbzmbhYBAZnGaeo5By0iYUtVY-uelIvoINo7TMPmEj3SAGJdj-f7lYdBZB3tpM-dTcJN7lf2Seacc98REGTgNJfZ9Zk1zASyZ5C93KQepH4pPujkBp8Nn-i2WyFPMC7NvCJF79-sRM-K9ghGbTAsfiaaNx8bV34zdp8Re9mjkeKTxpFsXSNW0NtkdP4kgc-BEq5IRGsJZeVBze5B2tRWqdnPZpWkQc4KuNtbgkPhDaKepvSdyIV75g=w213-h206-no" alt="Student">
  <input type="text" placeholder="Hej, vem är du?" v-model="name" key="name" />
	
  <img src="https://lh3.googleusercontent.com/mYVPTBkyXePIGrTyMXC9XVlx3lcl31yUWH1uLVuwcsaPgpOXjRu6M_2Z_973DLg0T0w--JTVcBJuYrsqYhIspRzFms9UPKHbInC3Vc2fYaOtKxeu17QzfH0IxwP80EiptNtY7CxwKs-_Yk104bj63uuryRzpLqOOHwDGXSgv4lZhZXpt1xvIaWGlI4nET4AbxKZPDcBSQxVjrugvsMuK8EFOHeNX2cdWuQYqJBd-lhe8YB5gDKUIfWhypAoAGp8xgedDjODXXU8_SbD6E6qUn05afhC72LVyohY5Zs3qQ95l1Ms0168upSVlmn47qkAcaM4NuzFKCo2yK1JYJT6MXMz1T-vCW8YDwo-VFHo6Mk5HHuz27CcnxvvmXllUBNEs5DViCupKpPdERlQsyYQ5bUIatF8DBMfNRbyTU5hata0bl3Q25ZeXJP1rUzXJ6Eluh_6sY5f3tOspC8YD9qVoUNUOPl2m5nDG--ve0D1rP71Ro9zixkYQwhc7mnHo0WK2yE5tyvP90kW8_M3STY2vSm3WjGy5SQL7I7nyl0QlQY1ImybMejZNsndeFqjrBH04vACwUrXtu7RvlJDbQ4uf1GTF_r8gfTPOszOso_LXqPMNKtI0Sq-rrgTQTq6AGPteRRvEA_pidBA-UFFEU91KE8z6KnKxlsZgWwIjPxHkWk3p5C8Y5i9JIarsFX8NdQ=s88-no" alt="button" height="60px" class='button-style' @click="saveAndNext">
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
