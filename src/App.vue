<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header
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
  transition: 0.5s;
  cursor: pointer;
}

button:hover {
  background-color: #6c9b95;
}


/* Input */
input[type=text] {
  padding: 0.7em;
  border-radius: 10px;
  border: 2px solid #89c8c1;
  box-sizing: border-box;
  
}
::placeholder {
color: lightgrey;
}


</style>
