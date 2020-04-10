<template>
  <div class="container">
      <!-- visa timer här -->
    <label id='time' class="timer"><strong>{{display}}</strong></label>
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
      intervalId:null
    };
  },
  methods:{
startTimer() {

    //Ange timern i sek
    let duration =1*2;
    //initialisera timer i minuter och sekunder
    let timer = duration, 
        minutes, 
        seconds;
   
    //setting för tidsintervallet
   this.intervalId = setInterval( ()=> {

       //konvertera string till integer
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

    
        //om "minutes" mindre än 10 ska en 0 läggas framför, annars visas bara siffran
        minutes = minutes < 10 ? "0" + minutes : minutes;
        //om "seconds" mindre än 10 ska en 0 läggas framför, annars visas bara siffran
        seconds = seconds < 10 ? "0" + seconds : seconds;


    this.display = minutes + ":" + seconds;
    
    
        //minska timer värdet, om värdet är mindre än noll är timern stoppad. Då emittas timeup eventet.
        if (--timer < 0) {
            //stoppa tidsintervallet
            clearInterval(this.intervalId);
            this.$emit("timeup")
            timer = duration;
            
        }
      
        // bestäm hur lång en sekund ska vara i millisekunder 
    }, 1000); 
},
resetTimer(){
    //nollställ tids intervallet
    clearInterval(this.intervalId);
    // sätter timern till 00:00
    this.display = "00" + ":" + "00";
}
  },
  created(){
      //initialisera med  00:00
      this.display = "00" + ":" + "00";
  }
}
</script>


<style scoped>
.container{
    width: 100%;
    height: 900px;
    background-color: #FCF9EA;
    text-align: center;
    color: #F8A978;
}
.timer{
    font-size: 80px;
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
  font-size: 16px;
}
</style>