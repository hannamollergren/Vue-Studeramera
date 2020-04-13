<template>
	<div>
		<p>ShowTasks</p>
		<p style="color:black;">{{quote}}</p>
	</div>	
</template>

<script>
import axios from 'axios'
export default {
  name: 'ShowTask',
  data() {
    return {
      quote:""
    };
  },
  created(){
         axios.get("https://api.quotable.io/random")
        .then((res) => {
          this.quote = "\""+res.data.content+"\"";
        })
        .catch((err) => console.log(err));
      
  }

}
</script>

<style>

</style>