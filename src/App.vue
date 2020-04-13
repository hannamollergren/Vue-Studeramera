<template>
  <div id="app">
    <Header />
    <Start v-if="displayStart" />
    <!-- v-if="false" hade också döljt den -->
    <Welcome v-if="displayWelcome" v-on:timeup="visible"/>
    <AllTasks v-if="displayAllTasks" />
    <!-- Är displayShowTask false visas Timer komponenten, annars visas ShowTask komponenten -->
    <Timer v-if="!displayShowTask" v-on:timeup="visible" />
    <ShowTask v-if="displayShowTask" />

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
    return {
      displayStart: false,
      displayWelcome: false,
      displayAllTasks: false,
      // displayTimer: false, displayTime är inte relevant ännu
      displayShowTask: false
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
  methods: {
    // "visible" blir true om timeup event emittar
    visible() {
      this.displayStart = true;
      this.displayWelcome = true;
      this.displayAllTasks = true;
      // displayTimer: false, displayTime är inte relevant ännu
      this.displayShowTask = true;
    }
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Roboto|Viga&display=swap");

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background-color: #fcf9ea;
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
/* Timern */
.timer {
  font-family: Roboto, sans-serif;
}

/* Buttons */

button {
  font-family: Roboto, sans-serif;
  padding: 0.8em 1.3em 0.8em;
  background-color: #89c8c1;
  color: white;
  border-radius: 46px;
  border: none;
  transition: 0.5s;
  cursor: pointer;
}

button:hover {
  background-color: #6c9b95;
}

button:focus {
  outline: 0;
}

/* Input */
input[type="text"] {
  padding: 0.7em;
  border-radius: 10px;
  border: 2px solid #89c8c1;
  box-sizing: border-box;
}
::placeholder {
  color: lightgrey;
}
</style>
