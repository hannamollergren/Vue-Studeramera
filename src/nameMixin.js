function saveInput() {
	localStorage.setItem("info", JSON.stringify(this.userInfo));
	console.log('nameMixin save name', this.userInfo.name);
	localStorage.setItem('name', JSON.stringify(this.userInfo.name));
}
function getName() {
    {
    let name = JSON.parse(localStorage.getItem('name'));
    return name
    }
}
export default {
    methods: {
        saveInput,
        getName,
    }
}