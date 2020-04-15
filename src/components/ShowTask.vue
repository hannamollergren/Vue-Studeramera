<template>
    <div class="container">
        <div class="approval">
            <p>{{ quote }}</p>
        </div>
        <div class="pastime">
            <div>
                <h2 class="tasks">{{tasks[Math.floor(Math.random() * tasks.length)]}}.</h2>
            </div>
        </div>
        <button class="learn" @click="HeartButton">Studera mer ❤️</button>
    </div>
</template>
<script>
import TaskService from "../shared/TaskService.js";
import nameMixin from '../nameMixin';
import axios from 'axios'
export default {
    mixins: [TaskService, nameMixin],
    data: () => ({
        user: "",
        tasks: [],
        inputSearch: String,
        inputAdd: String,
        copy: [],
		visibleComponent: "",
		quote:""
    }),
    methods: {
		HeartButton(){
            if(this.user == null){
            this.visibleComponent = "start";
            this.$emit("click", this.visibleComponent)
        }
            else{
            this.visibleComponent = "welcome";
            this.$emit("click", this.visibleComponent)
        }
        }
    },
    computed: {
	},
	created(){
		axios.get("https://api.quotable.io/random")
		.then((res) => {
			this.quote = "\""+res.data.content+"\"";
		})
	},
    mounted(){
        this.tasks = this.getAddedTasks();
        this.user = this.getName();
    },
}
</script>
<style scoped>
    .container {
        align-items: center;
        display: flex;
        flex-direction: column;
        text-align: center;
        user-select: none;
    }
    .banner {
        align-self: flex-start;
        font-size: 1.7em;
        font-weight: bolder;
        margin: 1.5em;
    }
    .approval {
		font-size: 1.2em;
		margin: 0 3em 0;
    }
    .pastime {
        font-size: 3.8em;
        margin: .5em;
        max-width: 722px;
    }
	h2{
		line-height: 1.1em;
	}
    .learn {
        font-size: 1.2em;
        max-width: 300px;
        margin: 1em 0 5em 0;
    }
    @media (max-width: 600px) {
    .banner {
        align-self: flex-start;
        font-size: 1.3em;
        font-weight: bolder;
        margin: 2em;
    }
    .approval {
        font-size: 1.1em;
        margin-top: 1em;
    }
    .pastime {
        font-size: 2.3em;
        margin: 1em;
        max-width: 722px;
    }
	.learn {
		font-size: 1.3em;
    }
}
</style>