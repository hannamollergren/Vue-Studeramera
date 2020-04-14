
function getName(){
    
    let name = JSON.parse(localStorage.getItem('user'));
    return name
       
}

export default {

    data(){
        return {
        
        }
    },

    methods: {
        
        getName
    }
}