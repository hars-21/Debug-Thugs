const sampleRestaurants = [
	{
		title: "The Spice Route",
		location: "The Imperial, Janpath, Connaught Place, New Delhi",
		rating: 4.5,
		image:
			"https://theimperialindia.com/wp-content/uploads/elementor/thumbs/The-Spice-Route-Introduction-Image-qce4l08svs7r8u66ltotcxovb3n5011soirl69zwc0.jpg",
	},
	{
		title: "Bukhara",
		location: "ITC Maurya, Sardar Patel Marg, Chanakyapuri, New Delhi",
		rating: 4.7,
		image:
			"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.com%2FRestaurant_Review-g304551-d776354-Reviews-Bukhara-New_Delhi_National_Capital_Territory_of_Delhi.html&psig=AOvVaw1ExuLxFZjCM4XTKMViFQss&ust=1713087042705000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMi8jtnwvoUDFQAAAAAdAAAAABAE ",
	},
	{
		title: "Indian Accent",
		location: "The Lodhi, Lodhi Road, New Delhi",
		rating: 4.6,
		image:
			"https://imgmedia.lbb.in/media/2019/01/5c36e74aec83cd2e8971d574_1547102026941.jpg",
	},
	{
		title: "Dum-Pukht - ITC Maurya",
		location: "ITC Maurya, Sardar Patel Marg, Chanakyapuri, New Delhi",
		rating: 4.3,
		image:
			"https://b.zmtcdn.com/data/pictures/4/2744/87d86ce0eca11b95cee629155b1b13a4.jpg?fit=around|960:500&crop=960:500;*,*",
	},
	{
		title: "Pind Balluchi",
		location: "Connaught Place, New Delhi",
		rating: 4.0,
		image:
			"https://media-cdn.tripadvisor.com/media/photo-s/18/d5/ee/cf/pind-balluchi.jpg",
	},
	{
		title: "Saravana Bhavan",
		location: "Connaught Place, New Delhi",
		rating: 4.2,
		image:
			"https://blog.travelkhana.com/food/wp-content/uploads/sites/5/2017/03/SarvanaBhavan.png",
	},
	{
		title: "Sagar Ratna",
		location: "Defence Colony, New Delhi",
		rating: 4.1,
		image:
			"https://content.jdmagicbox.com/comp/delhi/56/011pf010556/catalogue/sagar-ratna-defence-colony-delhi-home-delivery-restaurants-cjj1c.jpg",
	},
	{
		title: "Karim's",
		location: "Jama Masjid, Old Delhi",
		rating: 4.4,
		image:
			"https://foodwithshayne.files.wordpress.com/2015/09/img_0004.jpg?w=1024",
	},
	{
		title: "Paranthe Wali Gali",
		location: "Chandni Chowk, Old Delhi",
		rating: 4.6,
		image: "https://i.ndtvimg.com/i/2015-09/paratha_625x350_51442990621.jpg",
	},
	{
		title: "Biryani Blues",
		location: "DLF Mall of India, Noida",
		rating: 4.3,
		image:
			"https://content.jdmagicbox.com/comp/delhi/e8/011pxx11.xx11.170703124425.c4e8/catalogue/a-noida-sector-18-delhi-home-delivery-restaurants-3n8ycfi.jpg",
	},
	{
		title: "Barbeque Nation",
		location: "Sector 18, Noida",
		rating: 4.5,
		image:
			"https://b.zmtcdn.com/data/pictures/chains/2/1212/0fada51155b5fff789bf182ea730a0d0_featured_v2.jpg",
	},
	{
		title: "Wow! Momo",
		location: "DLF Mall of India, Noida",
		rating: 4.2,
		image:
			"https://www.google.com/url?sa=i&url=https%3A%2F%2Fmagicpin.in%2FRaipur%2FGovind-Nagar%2FRestaurant%2FWow!-Momo%2Fstore%2F639829%2F&psig=AOvVaw2c4gCmyOoWEQMH1JGGefA0&ust=1713087621306000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOj3hO_yvoUDFQAAAAAdAAAAABAE",
	},
	{
		title: "Farzi Cafe",
		location: "Cyber Hub, Gurgaon",
		rating: 4.4,
		image:
			"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.in%2FRestaurant_Review-g297615-d6874226-Reviews-Farzi_Cafe-Gurugram_Gurgaon_Gurgaon_District_Haryana.html&psig=AOvVaw33UFl_phhm5O4VlWf59cHX&ust=1713087666967000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDr2YLzvoUDFQAAAAAdAAAAABAQ",
	},
	{
		title: "Pirates of Grill",
		location: "Ambience Mall, Gurgaon",
		rating: 4.1,
		image:
			"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justdial.com%2FDelhi%2FPirates-Of-Grill-Near-Sikanderpur-Metro-Station-MG-ROAD-GURGAON%2F011PXX11-XX11-120828150011-K8V4_BZDET&psig=AOvVaw3HeiYBNuJwljmbaNzVQnH8&ust=1713087725654000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjejZzzvoUDFQAAAAAdAAAAABAE",
	},
	{
		title: "Kebab Gali",
		location: "DLF Cyber City, Gurgaon",
		rating: 4.0,
		image:
			"jhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zomato.com%2Fncr%2Fdlf-cyber-city-restaurants%2Fkebab%3Fno-bar%3D1%26sort%3Dbest&psig=AOvVaw1VW4JYR8S4-d2WcwD4TEjt&ust=1713087768501000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjlwbDzvoUDFQAAAAAdAAAAABAQ",
	},
	{
		title: "The Great Kabab Factory",
		location: "Sector 50, Gurgaon",
		rating: 4.3,
		image:
			"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zomato.com%2Fncr%2Frestaurace%2Fthe-great-kabab-factory-radisson-blu-plaza%3Fsubzone%3D394%26category%3D2&psig=AOvVaw3EfZrMp__gnhOquELqt_3T&ust=1713087890015000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjg8O_zvoUDFQAAAAAdAAAAABAP",
	},
	{
		title: "Haldiram's",
		location: "DLF Place Mall, Saket, New Delhi",
		rating: 4.2,
		image:
			"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justdial.com%2FDelhi%2FHaldirams-Closed-Down-Saket%2F011P1228541815M8D4E5_BZDET&psig=AOvVaw05fGUmCf6Kv2NWvSoDvs8h&ust=1713087953775000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjI8Yj0voUDFQAAAAAdAAAAABAE ",
	},
	{
		title: "Khan Chacha",
		location: "Khan Market, New Delhi",
		rating: 4.5,
		image:
			"https://navneetkalra.com/wp-content/uploads/2021/09/Oxygen-Concentrators-Seized-From-Popular-Delhi-Eatery-Khan-Chacha-1200x900_6095473cc4e63_1200x900.jpeg",
	},
	{
		title: "Nando's",
		location: "DLF Promenade Mall, Vasant Kunj, New Delhi",
		rating: 4.4,
		image:
			"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justdial.com%2FDelhi%2FNandos-DLF-Promenade-Mall-Near-ONGC-Vasant-Kunj%2F011PXX11-XX11-120709130748-J5M4_BZDET&psig=AOvVaw3fCsV1zonO2BZ8kw7tp5f7&ust=1713088091291000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMi-vcv0voUDFQAAAAAdAAAAABAE",
	},
	{
		title: "Moti Mahal Delux",
		location: "Greater Kailash, New Delhi",
		rating: 4.3,
		image:
			"https://b.zmtcdn.com/data/pictures/0/18893810/2bb982126e78388c05df0f940b432647.jpg?fit=around|750:500&crop=750:500;*,*",
	},
];

module.exports = { data: sampleRestaurants };
