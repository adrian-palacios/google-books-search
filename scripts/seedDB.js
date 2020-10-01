const mongoose = require("mongoose");
const db = require("../models");

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
	useNewUrlParser: true,
	useFindAndModify: false,
});

// the content below will seed the Book collection in googlebooks database

// sample content to seed Book collection
const bookSeed = [
	{
		title: "Flowers for Algernon",
		authors: "Daniel Keyes",
		description:
			"Oscar-winning film Charly starring Cliff Robertson and Claire Bloom-a mentally challenged man receives an operation that turns him into a genius...and introduces him to heartache.",
		image:
			"http://books.google.com/books/content?id=pIs9Em38dAoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
		link:
			"https://play.google.com/store/books/details?id=_oG_iTxP1pIC&source=gbs_api",
	},
	{
		title: "Breaking Dawn",
		authors: "Stephanie Meyer",
		description:
			'In the explosive finale to the epic romantic saga, Bella has one final choice to make. Should she stay mortal and strengthen her connection to the werewolves, or leave it all behind to become a vampire? When you loved the one who was killing you, it left you no options. How could you run, how could you fight, when doing so would hurt that beloved one? If your life was all you had to give, how could you not give it? If it was someone you truly loved? To be irrevocably in love with a vampire is both fantasy and nightmare woven into a dangerously heightened reality for Bella Swan. Pulled in one direction by her intense passion for Edward Cullen, and in another by her profound connection to werewolf Jacob Black, a tumultuous year of temptation, loss, and strife have led her to the ultimate turning point. Her imminent choice to either join the dark but seductive world of immortals or to pursue a fully human life has become the thread from which the fates of two tribes hangs. This astonishing, breathlessly anticipated conclusion to the Twilight Saga illuminates the secrets and mysteries of this spellbinding romantic epic. It\'s here! #1 bestselling author Stephenie Meyer makes a triumphant return to the world of Twilight with the highly anticipated companion, Midnight Sun: the iconic love story of Bella and Edward told from the vampire\'s point of view. "People do not want to just read Meyer\'s books; they want to climb inside them and live there." -- Time "A literary phenomenon." -- The New York Times',
		image:
			"http://books.google.com/books/content?id=kcsqGna7fBIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
		link:
			"https://play.google.com/store/books/details?id=kcsqGna7fBIC&source=gbs_api",
	},
];

// creates the book collection with seed content
db.Book.remove({})
	.then(() => db.Book.collection.insertMany(bookSeed))
	.then((data) => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
