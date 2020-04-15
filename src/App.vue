<template>
  <div id="app">
    <Header v-if='visibleHeader'/>
    <Start v-if="visibleComponent == 'start'" @click="fromStart"/>
    <Welcome v-if="visibleComponent == 'welcome'" @click="fromWelcome"/>
    <AllTasks v-if="visibleComponent == 'allTasks'" @click="fromAllTasks"/>
    <Timer v-if="visibleComponent == 'timer'" @click="fromTimer"/>
    <!-- Todo ShowTask -> Start  -->
    <ShowTask v-if="visibleComponent == 'showtask'"/>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Start from "./components/Start.vue";
import Welcome from "./components/Welcome.vue";
import AllTasks from "./components/AllTasks.vue";
import Timer from "./components/Timer.vue";
import ShowTask from "./components/ShowTask.vue";
export default {
  name: "App",
  data() {
    return{
    visibleComponent: 'start',
    visibleHeader: Boolean(false)
    };
  },  
  components: {
    Header,
    Start,
    Welcome,
    AllTasks,
    Timer,
    ShowTask
  },
  methods:{
    fromStart(value, event){
        console.log('fromStart', value);
        this.visibleComponent = value;
        this.visibleHeader = event;
    },
    fromWelcome(value){
        console.log('fromWelcome', value);
        this.visibleComponent = value;
    },
    fromAllTasks(value){
        console.log('fromAlltasks', value);
        this.visibleComponent = value;
    },
    fromTimer(value){
        console.log('fromTimer', value);
        this.visibleComponent = value;
    },
}
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto|Viga&display=swap');
*{
box-sizing: border-box;
padding: 0;
margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
    background-color: #FCF9EA;
}
h1,
h2,
h3 {
  font-family: Viga, sans-serif;
  color: #f8a978;
}
p {
  font-family: Roboto, sans-serif;
  color: #f8a978;
  font-size: 1.2em;
}
/* Buttons */
button {
  font-family: Roboto, sans-serif;
  padding: 0.8em 1.3em 0.8em; 
  background-color: #89c8c1;
  color: white;
  border-radius: 46px;
  border: none;
  cursor: pointer;
  font-size: 0.9em;
}
button:hover {
  background-color: #6c9b95;
  transition: 0.5s;
}
button:focus {outline:0;}
/* Input */
input[type=text] {
  padding: 0.8em;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 0.9em;
}
::placeholder {
color: lightgrey;
}
</style>