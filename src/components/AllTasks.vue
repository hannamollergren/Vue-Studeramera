<template>
	<div>
		<div class="sort">
			<button @click="sortButton">Sortera A-Ö</button><input type="text" placeholder="Sök..." @keyup="search" class="search">
		</div>
		<div class="container">
				<div class="item-left">
					<h2>Aktiviteter att se fram emot</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut qui quia dolor vel nisi maiores praesentium! Saepe, magnam dolorem eos delectus earum atque aliquid. Minus autem tempora dolor error.</p>
					<input type="text" placeholder="Skriv aktivitet här..." @keyup="addTask"><button @click="saveButton" class="save">Spara</button>
				</div>
				<div class="item-right">
					<div v-for="task in tasks" :key="task">
						<p class="tasks">- {{ task }}</p>
					</div>
				</div>
				<div class="flex">
					<img src="../assets/Next.png" alt="Next" height="70px" class="next">
				</div>
		</div>	
	</div>
</template>

<script>
import TaskService from "../shared/TaskService.js";
export default {
	mixins: [TaskService],
	data: () => ({
		tasks: [],
		inputSearch: String,
		inputAdd: String,
		copy: [],
	}),
	methods: {
		sortButton(){
			console.log("Sort funkar");
			this.tasks.sort();
		},
		search(event){
			this.inputSearch = event.target.value;
			console.log('search', this.inputSearch);
			this.copy = [ ...this.tasks ];
			console.log("search copy", this.copy);
		},
		addTask(event){
			this.inputAdd = event.target.value;
			console.log('addTask', this.inputAdd );
		},
		saveButton(){
			this.tasks.push(this.inputAdd);
			console.log('tasks', this.tasks);
			localStorage.setItem('tasks', this.tasks);
		},
	},
	computed: {

	},
	mounted(){
		console.log('getTasks från service', this.getTasks());
		
		this.tasks = this.getTasks();
		this.tasks = this.tasks.slice(0,6)
	},
	




}
</script>

<style scoped>
.sort{
	margin: 0 0 0 3em;
}
.search{
	margin: 0 0 0 1em;
	width: 30%;
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
	padding: 0 2em 2em;
	margin: 0;
	color: white;	
}
.item-left{
	background: #FFC5A1;
	border-radius: 20px 0 0 20px;
	grid-column: 1/1;
}
.item-right{
	background: #FFC5A1;
	border-radius: 0 20px 20px 0; 
	grid-column: 2/2;
	padding: 5.3em 1em 2em;
}
.tasks{
	padding: 0 0 1.2em;
}
input{
	width: 55%;
	margin: 1em 0.5em 2em 3em;
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
.flex{
	display: flex;
}
.next{
	margin: 0 0 0 4em;
	align-self: center;
}


</style>