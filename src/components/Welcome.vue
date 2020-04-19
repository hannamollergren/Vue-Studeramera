<template >
  <div class="class-welcome">
    <transition name="welcome" appear>
      <p>Välkommen {{user}}!</p>
    </transition>
    <div class="myPage">
      <button @click="userInfoButton" class="button">Mina sidor</button>
    </div>
    <div class="button-style">
      <img
        src="https://lh3.googleusercontent.com/DmRIkCSZW8W6LCQ7BbihQdkAS_FB6ANnGfBPURvNa7UqTHGXhSfNe70yzIKdKXTvnr-wEGcf01WfAU6m3U3Jlzz1MRqMOCh_XXj-k20IGlrahcNaJciBShzZWTvP7I4tlL5ELrbJIw=s88-p-k"
        alt="button"
        height="60px"
        @click="nextButton"
      />
    </div>
  </div>
</template>
<script>
import nameMixin from '../nameMixin'
export default {
    mixins: [nameMixin],
    data: () => ({
        visibleComponent: '',
        user: '',
        userInfo: {
            username: '',
            email: '',
            study: ''
        }
    }),
    methods: {
        userInfoButton(){
            this.visibleComponent = 'userInfo'
            this.$emit('click', this.visibleComponent)
        },
        backButton(){
            this.visibleComponent = 'welcome';
            this.$emit('click', this.visibleComponent)
            this.saveInput(this.userInfo);
        },
        nextButton(){
            this.visibleComponent = 'allTasks';
            this.$emit('click', this.visibleComponent)
            this.saveInput(this.userInfo);
        },
        inputUserName(event) {
            this.userInfo.name = event.target.innerText;
        },
        inputEmail(event){
            this.userInfo.email = event.target.innerText;
        },
        inputSubject(event){
            this.userInfo.study = event.target.innerText;
        }
    },
    mounted(){
        this.user = this.getName();
		JSON.parse(localStorage.getItem('info'));
        if(localStorage.getItem('info') == null)
        {
            console.log('Finns inget i ls just nu')
        }
        else{
            this.userInfo = JSON.parse(localStorage.getItem('info'));
        }
    }
}
</script>
<style scoped>
p {
  margin-top: 6em;
  font-size: 1.5em;
}
.class-welcome {
  text-align: center;
  display: block;
}
.myPage {
  margin-top: 2em;
  cursor: pointer;
  display: block;
}
.button-style {
  margin-top: 1.2em;
  cursor: pointer;
  display: block;
}
.button{
	background-color:#F8A978;
}
</style>
