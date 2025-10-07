const navLinks = [
	{
		id: "cocktails",
		title: "Cocktails",
		link:"Cocktails"
	},
	{
		id: "about",
		title: "About Us",
		link:"AboutUs"
	},
	{
		id: "work",
		title: "The Art",
		link:"TheArt"
	},
	{
		id: "contact",
		title: "Contact",
		link:"Contact"
	},
];

const cocktailLists = [
	{
		name: "Chapel Hill Shiraz",
		country: "AU",
		detail: "Battle",
		price: "$10",
	},
	{
		name: "Caten Malbee",
		country: "AU",
		detail: "Battle",
		price: "$49",
	},
	{
		name: "Rhino Pale Ale",
		country: "CA",
		detail: "750 ml",
		price: "$20",
	},
	{
		name: "Irish Guinness",
		country: "IE",
		detail: "600 ml",
		price: "$29",
	},
];

const mockTailLists = [
	{
		name: "Tropical Bloom",
		country: "US",
		detail: "Battle",
		price: "$10",
	},
	{
		name: "Passionfruit Mint",
		country: "US",
		detail: "Battle",
		price: "$49",
	},
	{
		name: "Citrus Glow",
		country: "CA",
		detail: "750 ml",
		price: "$20",
	},
	{
		name: "Lavender Fizz",
		country: "IE",
		detail: "600 ml",
		price: "$29",
	},
];

import abt1 from '../assets/images/profile1.png';
import abt2 from '../assets/images/profile2.png';
import abt3 from '../assets/images/profile3.png';
import abt4 from '../assets/images/profile4.png';
const profileLists = [
	abt1, abt2 , abt3 , abt4
];

const featureLists = [
	"Perfectly balanced blends",
	"Garnished to perfection",
	"Ice-cold every time",
	"Expertly shaken & stirred",
];

const goodLists = [
	"Handpicked ingredients",
	"Signature techniques",
	"Bartending artistry in action",
	"Freshly muddled flavors",
];

const storeInfo = {
	heading: "Where to Find Us",
	address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
	contact: {
		phone: "(555) 987-6543",
		email: "hello@jsmcocktail.com",
	},
};

const openingHours = [
	{ day: "Mon–Thu", time: "11:00am – 12am" },
	{ day: "Fri", time: "11:00am – 2am" },
	{ day: "Sat", time: "9:00am – 2am" },
	{ day: "Sun", time: "9:00am – 1am" },
];
import insta from '../assets/images/insta.png';
import x from '../assets/images/x.png';
import fb from '../assets/images/fb.png';

const socials = [
	{
		name: "Instagram",
		icon: insta,
		url: "#",
	},
	{
		name: "X (Twitter)",
		icon: x,
		url: "#",
	},
	{
		name: "Facebook",
		icon: fb,
		url: "#",
	},
];
import CocktailImg1 from '../assets/images/drink1.png';
import CocktailImg2 from '../assets/images/drink2.png';
import CocktailImg3 from '../assets/images/drink3.png';
import CocktailImg4 from '../assets/images/drink4.png';
const allCocktails = [
	{
		id: 1,
		name: "Classic Mojito",
		image:CocktailImg1,
		title: "Simple Ingredients, Bold Flavor",
		description:
			"Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
	},
	{
		id: 2,
		name: "Raspberry Mojito",
		image: CocktailImg2,
		title: "A Zesty Classic That Never Fails",
		description:
			"The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
	},
	{
		id: 3,
		name: "Violet Breeze",
		image: CocktailImg3,
		title: "Simple Ingredients, Bold Flavor",
		description:
			"Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
	},
	{
		id: 4,
		name: "Curacao Mojito",
		image: CocktailImg4,
		title: "Crafted With Care, Poured With Love",
		description:
			"Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
	},
];

export {
	navLinks,
	cocktailLists,
	mockTailLists,
	profileLists,
	featureLists,
	goodLists,
	openingHours,
	storeInfo,
	socials,
	allCocktails,

};