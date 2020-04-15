function saveName() {
    localStorage.setItem("name", JSON.stringify(this.name));
}
function getName() {
    {
    let name = JSON.parse(localStorage.getItem('name'));
    return name
    }
}
export default {
    methods: {
        saveName,
        getName
    }
}