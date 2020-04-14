<template>
  <div class="container">
      <!-- visa timer här -->
    <label id='time' class="timer"><h2>{{display}}</h2></label>
        <p class="timer-message">Minuter kvar till rast</p>
    <!-- binder on click funktion för att starta och nollställa timer -->
    <button v-on:click="startTimer" class="button-start">Start</button>
      <button v-on:click="resetTimer" class="button-reset">Nollställ</button>
  </div>
</template>


<script>
export default {
  name: 'Timer',
  data() {
    return {
		display: {},
		intervalId:null,
		visibleComponent: '',
    };
  },
  methods:{
startTimer() {

    // ange timern i sek
	let duration = 60*25;
	
    // initialisera timer i minuter och sekunder
    let timer = duration, 
        minutes, 
        seconds;
   
    // setting för tidsintervallet
   this.intervalId = setInterval( ()=> {

       // konvertera string till integer
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

    
        // om "minutes" mindre än 10 ska en 0 läggas framför, annars visas bara siffran
        minutes = minutes < 10 ? "0" + minutes : minutes;
        // om "seconds" mindre än 10 ska en 0 läggas framför, annars visas bara siffran
        seconds = seconds < 10 ? "0" + seconds : seconds;


    this.display = minutes + ":" + seconds;
    
    
        // minska timer värdet, om värdet är mindre än noll är timern stoppad. Då emittas timeup eventet.
        if (--timer < 0) {
            // stoppa tidsintervallet
			clearInterval(this.intervalId);
			this.visibleComponent = 'showtask'
            this.$emit("click", this.visibleComponent)
            timer = duration;
            
        }
      
        // bestäm hur lång en sekund ska vara i millisekunder 
    }, 1000); 
},
resetTimer(){
    // nollställ tids intervallet
    clearInterval(this.intervalId);
    // sätter timern till en viss start tid
    this.display = "25" + ":" + "00";
}
  },
  created(){
      // initialisera med en viss starttid
      this.display = "25" + ":" + "00";
  }
}
</script>


<style scoped>
h1,
h2,
h3 {
  font-family: Viga, sans-serif;
  color: #f8a978;}

.container{
    /*padding: 10em;*/
    width: 100%;
    height: 900px;
    background-color: #FCF9EA;
    text-align: center;
    color: #F8A978;
}

.timer{
    font-size: 4em;
}
.timer-message{
    font-size:25px;
}
.button-start {
  border-radius: 25px;
  margin-right: 20px;
  background-color: #89C8C1; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.button-reset {
  border-radius: 25px;
  margin-right: 20px;
  background-color: #CFCFCF; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px
}
button:hover {
  background-color: #6c9b95;
}
</style>