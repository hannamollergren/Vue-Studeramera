<template>
    <div class="container">
        <div class="approval">
            <p>Bra jobbat {{user}} Hanna!</p>
        </div>
        <div class="pastime">
            <div>
                <h2 class="tasks">{{tasks[Math.floor(Math.random() * tasks.length)]}}.</h2>
            </div>
        </div>
        <button class="learn">Studera Mera? ❤️</button>
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
/*  methods: {
    },
    computed: {
    }, */
    mounted(){
        console.log('getTasks från service', this.getTasks());
        this.tasks = this.getTasks();
        this.tasks = this.tasks.slice(0,6)
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
        margin-top: 1em;
    }
    .pastime {
        font-size: 4em;
        margin: 1em;
        max-width: 722px;
    }
	h2{
		line-height: 1.1em;
	}
    .learn {
        font-size: 1.3em;
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
        font-size: 1.3em;
        margin-top: 1em;
    }
    .pastime {
        font-size: 2.5em;
        margin: 1em;
        max-width: 722px;
    }
	.learn {
		font-size: 1.3em;
    }
}
</style>