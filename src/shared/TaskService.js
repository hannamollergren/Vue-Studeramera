const tasks = ["5 situps och 5 armhävningar", "Promenera minst 1 km",'Una dig något gott', "Meditera 5 minuter", "Drick två stora glas vatten", "Ta en kopp kaffe", "Njut av livet","Stretcha kroppen", "Ta 10 djupa andetag", "10 jumping jacks", "Gå två varv runt huset", "Lyssna på din favorit låt", "Plankan 30 sekunder", "Rask promenad 10 minuter", "Löpning 15 minuter", "Ta en varmdusch", "Drick något svalkande", "Cykla 3 km i medelhögt tempo", "Baka en kaka"]

	
export default {
	methods: {
		getTasks(){
			return tasks;
		},
		getAddedTasks(){
			return JSON.parse(localStorage.getItem('tasks'));
		},
		setTasks(){
			return localStorage.setItem('tasks', JSON.stringify(this.tasks));
		}
	}
}
