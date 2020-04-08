<template>
	<div>
		<div class="container-top">
			<button>Sortera A-Ö</button><input type="text" placeholder="Sök..." class="search">
		</div>
		<div class="container">
			<div class="container-left">
				<h2>Aktiviteter</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aut qui quia dolor vel nisi maiores praesentium! Saepe, magnam dolorem eos delectus earum atque aliquid. Minus autem tempora dolor error.</p>
				<input type="text" placeholder="Skriv aktivitet här..."><button>Spara</button>
			</div>
			<div class="container-right">
				<div v-for="task in tasks" :key="task">
					<p class="tasks">{{ task }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		tasks: ["5 situps och 5 armhävningar", "Promenera minst 1 km"," Una dig något gott", "Meditera 5 minuter", "Drick två stora glas vatten", "Tänk på tre positiva saker om dig själv", "Ta en kopp kaffe", "Njut av livet", "Sitt en stund i solen","Stretcha kroppen", "Ta 10 djupa andetag", "10 jumping jacks", "Dansa i regnet", "Gå två varv runt huset", "Lyssna på din favorit låt", "Plankan 30 sekunder", "Rask promenad 10 minuter", "Löpning 15 minuter", "Ta en varmdusch", "Drick något svalkande", "Cykla 3 km i medelhögt tempo", "Baka en kaka"] ,
	}),
	methods: {

	},
	computed: {

	},
	




}
</script>

<style scoped>
.search{
	margin: 0 0 0 1em;
	width: 20%;
}
.container-top{
	margin: 0 0 0 3em;
}
.container{
	background: #FFC5A1;
	border-radius: 20px;
	margin: 1em 17em 3em 3em;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
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
.container-left{
	grid-column: 1/2;
}
.container-right{
	grid-column: 2/2;
	padding: 5.3em 1em 2em;
}
.tasks{
	padding: 0.7em;
}
input{
	width: 50%;
	margin: 1em 1em 2em 4em;
	border: none;
}
button{
	background-color:#F8A978;
}


</style>