export default () => ({
    listItemsIsActive: false,
    items: ["volvo", "saab", "opel", "audi", "mercedes", "mazda"],
    selected: [],
    selectedString: '',

    add(item) {
        this.selected.push(item);
        console.log(this.selected)
    },
    remove(item) {
        this.selected = this.selected.filter(i => i !== item);
    },
    init() {
        this.$watch('selected', value => this.selectedString = value.join(','))
    }

})