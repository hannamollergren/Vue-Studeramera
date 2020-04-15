function saveName() {
    localStorage.setItem("name", JSON.stringify(this.name));
    console.log("Nu är namnet sparat");

}
function getName() {
    {
    let name = JSON.parse(localStorage.getItem('name'));
    return name
    }

    



}

export default {

    data() {
        return {

        }
    },

    methods: {
        saveName,
        getName
    }
}