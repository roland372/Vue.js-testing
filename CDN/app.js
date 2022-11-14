const app = Vue.createApp({
	//? template
	// template: '<h2>template</h2>',

	//? data
	data() {
		return {
			title: 'test title',
			counter: 0,
			showCounter: true,
			x: 0,
			y: 0,
			books: [
				{ title: 'title1', author: 'author1', isFav: true },
				{ title: 'title2', author: 'author2', isFav: true },
				{ title: 'title3', author: 'author3', isFav: false },
				{ title: 'title4', author: 'author4', isFav: true },
			],
			url: 'https://www.google.com/',
		};
	},
	//? methods
	methods: {
		changeTitle() {
			console.log('button clicked');
			this.title = 'new title';
		},
		changeTitleArgument(title) {
			this.title = title;
		},
		handleShowBooks() {
			this.showCounter = !this.showCounter;
		},
		handleEvent(e, arg) {
			console.log(e, e.type);
			if (arg) {
				console.log(arg);
			}
		},
		handleMouseMove(e) {
			this.x = e.offsetX;
			this.y = e.offsetY;
		},
		handleToggleFav(book) {
			book.isFav = !book.isFav;
		},
	},
	//? computed properties
	computed: {
		filteredBooks() {
			return this.books.filter(book => book.isFav);
		},
	},
}); //? initialize root Vue component

// console.log(app);
app.mount('#app'); //? mount our app to specific element in DOM
