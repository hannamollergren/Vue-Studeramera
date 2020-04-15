<template>
	<div>
		<div class="sort">
			<button @click="sortButton">{{ sort }}</button><input type="text" placeholder="Sök..." @keyup="search" class="search">
		</div>
		<div class="container">
				<div class="item-left">
					<h2 class="title">Aktiviteter att se fram emot</h2>
					<p class="undertitle">Denna sidan tillåter användaren en överblick av kommande aktiviteter. Det finns möjlighet att sortera, söka, lägga till och ta bort aktivitet. Användaren får möjlighet att anpassa aktiviteter utifrån sin egna situation.</p>
					<input type="text" placeholder="Skriv aktivitet här..." v-model="inputAdd" @blur.once="addIsTouched = true"><button  class="save" @click="saveButton" :disabled="!formIsValid">Spara</button>
					<span v-show="!addIsValid && addIsTouched" class="error">Måste innehålla minst 5 tecken</span>
				</div>
				<div class="item-right">
					<div v-for="task in tasks" :key="task">
						<p class="tasks">
							<button class="delete" @click="deleteButton(task)">x
							</button> 
							{{ task }}
						</p>
					</div>
				</div>
				<div class="flex">
					<img src="../assets/Next.png" alt="Next" height="60px" class="next" @click="nextButton">
				</div>
		</div>
	</div>
</template>

<script>
import TaskService from "../shared/TaskService.js";
export default {
	mixins: [TaskService],
	data: () => ({
		sort: 'Sortera A-Ö',
		tasks: [],
		filter: '',
		inputAdd: '',
		addIsTouched: Boolean (false),
		visibleComponent: ''
	}),
	methods: {
		// Sortera
		sortButton(){
			this.tasks.sort();
		},
		// Sök 
		search(event){
			this.filter = event.target.value;
			this.filterList();
		},
		filterList() {
			let list = this.tasks;
			if(this.filter == '')
			{
				this.getTaskList();
			}
			else{
				this.tasks = list.filter(task => task.toLowerCase().includes(this.filter.toLowerCase()));
			}
		},
		// Addera 
		saveButton(){
			let add = this.inputAdd.charAt(0).toUpperCase() + this.inputAdd.slice(1);
			this.tasks.unshift(add);
			this.setTasks();	
			
			this.inputAdd = '';
			this.addIsTouched = false;
		},
		// Delete 
		deleteButton(x){
			this.tasks = this.tasks.filter(task => task != x)
			this.setTasks();
		},
		// Nästa 
		nextButton(){
			this.visibleComponent = 'timer';
			this.$emit('click', this.visibleComponent)
			this.setTasks();
		},
		// Hämta tasks - ls, mixins
		getTaskList(){
			if(this.getAddedTasks() == null){
				this.tasks = this.getTasks();
			}
			else{
				this.tasks = this.getAddedTasks();
			}
		}	
	},
	computed: {
		addIsValid(){
			return this.inputAdd.length >= 5
		},
		formIsValid(){
			return this.addIsValid;
		}
	},
	mounted(){
		this.getTaskList();
	}
}
</script>

<style scoped>
.sort{
	margin: 0 0 0 3em;
}
.search{
	margin: 0 0 0 1em;
	width: 30%;
/* 	border: 2px solid #89c8c1; */
}
.container{
	margin: 1em 3em 3em 3em;
	display: grid;
	grid-template-columns: 2fr 2fr 1fr;
}
h2{
	color: white;
	padding: 2em 2em 1em;
	margin: 0;
}
p{
	padding: 0 2.5em 2em;
	margin: 0;
	color: white;	
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
	padding: 5.3em 2em 2em 1em;
}
.tasks{
	padding: 0 0 1.2em;
}
.delete{
	padding: 0.1em 0.5em 0.2em;
	border-radius: 5px;
	margin: 0 0.5em 0 0;
}
input{
	width: 55%;
	margin: 1em 0.8em 0em 3em;
	border: none;
}
.save{
	justify-self: center;
}
button{
	background-color:#F8A978;
}
button:hover{
	background-color: rgb(245, 156, 100);
	transition: 0.5s;
}
button:disabled{
	background-color:lightgrey;
	cursor: auto;
}
.flex{
	display: flex;
}
.next{ 
	margin: 0em 0 0 3em;
	/* align-self: center; */
	position: fixed;
	top: 50%;
	cursor: pointer;
}
.error{
	display: inline-block;
	padding: 0.5em 0 0.5em;
	font-family: Roboto, sans-serif;
	color: white;
	font-size: 0.9em;
	margin: 0 3em 0em;
	
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
.error{
	color: #F8A978;
}
.item-right{
	background: #FFC5A1; 
	border-radius: 0;
	grid-column: 1/2;
	padding: 3em 2em 2em 2em;
}
.search{
	width: 40%;
}
.flex{
	padding: 1em 0 3em;
}
.next{
	margin: auto;
	position: relative;
	top: 1em;
}
.sort{
	margin: 0 0 0 2em;
}
}
</style>