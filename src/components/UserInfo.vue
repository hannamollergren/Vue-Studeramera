<template>
  <div>
		<div class="container">
				<div class="item-left">
					<h2 class="title">Mina sidor</h2>
					<p class="undertitle">Hej {{ user }}!<br>
						Kul att du använder vår app. Här är en överblick över dina uppgifter. Du kan enkelt redigera dina uppgifter genom att klicka på texten du vill ändra.
					</p>
					<button class="back" @click="backButton">Tillbaka</button>
				</div>
				<div class="item-right">
						<span>Användarnamn:</span><p contenteditable @input="inputUserName">{{ userInfo.name }}</p>
						<span>E-mail:</span><p contenteditable @input="inputEmail">{{ userInfo.email }}</p>
						<span>Pluggar till:</span><p contenteditable @input="inputSubject">  {{ userInfo.study }}</p>	
				</div>
				<div class="flex">
					<img src="https://lh3.googleusercontent.com/DmRIkCSZW8W6LCQ7BbihQdkAS_FB6ANnGfBPURvNa7UqTHGXhSfNe70yzIKdKXTvnr-wEGcf01WfAU6m3U3Jlzz1MRqMOCh_XXj-k20IGlrahcNaJciBShzZWTvP7I4tlL5ELrbJIw=s88-p-k" alt="Next" height="60px" class="next" @click="nextButton">
				</div>
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
.container{
	margin: 1em 3em 3em 3em;
	display: grid;
	grid-template-columns: 4fr 4fr 1fr;
}
h2{
	color: white;
	padding: 2em 2em 1em;
	margin: 0;
}
p{
	margin: 0;
	color: white;	
}
.undertitle{
	padding: 0 2.5em 2.5em;
}
span{
	font-weight: bold;
	display: block;
	margin: 1em 0 0.2em;
	font-family: Roboto, sans-serif;
	color: white;
	font-size: 1.1em;
}
.item-left{
	background: #FFC5A1;
	border-radius: 20px 0 0 20px;
	grid-column: 1/1;
	padding: 0 0 3em;
}
.item-right{
	background: #FFC5A1;
	border-radius: 0 20px 20px 0; 
	grid-column: 2/2;
	padding: 5.3em 2em 2em 2em;
}
.back{
	justify-self: center;
	margin-left: 3em;
}
button{
	background-color:#F8A978;
}
button:hover{
	background-color: rgb(245, 156, 100);
	transition: 0.5s;
}
.flex{
	display: flex;
}
.next{ 
	margin: 0em 0 0 1em;
	/* align-self: center; */
	position: fixed;
	top: 40%;
	cursor: pointer;
}
@media only screen and (max-width: 860px){
.item-left{
	grid-column: 1/3;
	border-radius: 20px 20px 0 0;
}
.item-right{
	border-radius: 0 0 20px 20px;
	grid-column: 1/3;
	padding: 1em 2em 2em 3em;
}
}

@media only screen and (max-width: 600px){
.container{
	margin: 1em 0 0;
	display: grid;
	grid-template-columns: 1fr;
}
.item-left{
	background-color: #FCF9EA;
	grid-column: 1/2;
	border-radius: 0;
	padding: 0em 2em 2em 0;
}
.title{
	color: #F8A978;
}
.undertitle{
	color: #F8A978;
}
.item-right{
	background: #FFC5A1; 
	border-radius: 0;
	grid-column: 1/2;
	padding: 3em 2em 2em 2em;
}
.flex{
	padding: 1em 0 3em;
}
.next{
	margin: auto;
	position: relative;
	top: 1.2em;
}
}

</style>