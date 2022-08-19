// export interface IMovie {
//   id: number,
//   genre: string,
//   title: string,
//   description: string,
//   annotation: string,
//   rating: number,
//   imageUrl: string,
//   poster?: string
// }

// export enum EGenreType  {
//   Horror = 'Horror',
//   Comedy = 'Comedy',
//   Fantasy = 'Fantasy',
//   Cartoon = 'Cartoon',
//   Drama = 'Drama'
// }

// export const DataMovies: IMovie[] = [
//   {
//     id: 1,
//     genre: 'Fantasy',
//     title: 'Avengers: Endgame',
//     description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.',
//     annotation: '',
//     rating: 5,
//     imageUrl: 'assets/images/avaranges-amg.png',
//     poster: 'assets/images/Avaranges-defaultImg.png'
//   },
//   {
//     id: 2,
//     genre: 'Fantasy',
//     title: 'Lost In Space',
//     description: 'The mission to save Scarecrow takes an unexpected turn, throwing the Resolute into chaos. Judy hatches a plan to get a ship to Alpha Centauri.',
//     annotation: '',
//     rating: 5,
//     imageUrl: 'assets/images/lostInSpace-img.png',
//     poster: 'assets/images/lostInSpace-defaultImg.png'
//   },
//   {
//     id: 3,
//     genre: EGenreType.Drama,
//     title: 'Sniper: White Raven ',
//     description: 'The main character of this film is Nikolai. Until 2014, his life went on at a calm, measured pace. Once he was so tired of the bustle of the metropolis that he and his wife left the city, abandoned the charms of civilization and settled in nature. Here they expected the appearance of their first child. And fate prophesied an idyll and a cozy future. But as a result of well-known political reforms, revolutionary ...',
//     annotation: '',
//     rating: 3.5,
//     imageUrl: 'https://kinogo.biz/uploads/mini/minifull/b9f/1658942722-1390733843.webp'
//   },
//   {
//     id: 4,
//     genre: EGenreType.Comedy,
//     title: 'The Toronto Man',
//     description: 'In the center of the story is Teddy\'s boyfriend, who can be considered a complete loser. He works as a sales assistant who has been fighting off the constant problems in his life for a long time. He wants to take a quick break from all this. And suddenly he gets the opportunity to go on a long-awaited vacation, on which he has high hopes. But even here everything does not go according to plan.',
//     annotation: '',
//     rating: 3.6,
//     imageUrl: 'https://kinogo.biz/uploads/mini/minifull/8a9/1656190514-9630080.webp'
//   },
//   {
//     id: 5,
//     genre: EGenreType.Cartoon,
//     title: 'Luck',
//     description: 'Sam Greenfield is the unluckiest girl in the world. Suddenly finding herself in the magical Land of Fortune, she unites with the creatures inhabiting it in order to regain her luck....',
//     annotation: '',
//     rating: 4.1,
//     imageUrl: 'https://kinogo.biz/uploads/mini/minifull/420/1659718653-1139754409.webp'
//   },{
//     id: 6,
//     genre: EGenreType.Cartoon,
//     title: 'Minions: Gruvitation',
//     description: 'This cartoon shows actions that took place back in 1976, long before what is shown in the first picture. Here, 12-year-old Gru, being a fan of the villainous group "Evil Six", tries to become very evil in order to become a member of their team. After the "six" got rid of their leader Knuckles, Gru got a chance to get an interview. Even though the interview isn\'t over...',
//     annotation: '',
//     rating: 3.5,
//     imageUrl: 'https://kinogo.biz/uploads/mini/minifull/dad/1656701643-336291106.webp'
//   },
//   {
//     id: 7,
//     genre: EGenreType.Drama,
//     title: '365 days 2: this day',
//     description: 'Now a passionate relationship has developed between the young head of the mafia with his legal wife Laura, like husband and wife. But the idyll, which is indestructible in the first place, is tested for its strength, while another mysterious Nacho, who has a personal method of winning the heart, is not really afraid to fight for the direct attention of the girl. The film begins when Massimo marries Laura. Laura...',
//     annotation: '',
//     rating: 3.3,
//     imageUrl: 'https://kinogo.biz/uploads/mini/minifull/5d1/1651514281_poster.webp'
//   },
//   {
//     id: 8,
//     genre: EGenreType.Fantasy,
//     title: 'Doctor Strange and the Multiverse of Madness',
//     description: 'Wanda\'s intentions become clear to Doctor Strange and absolutely clear and obvious. But, unfortunately, it\'s too late. He is already in her own trap. The meaning of this trap is to hold prey with the help of Wanda\'s magical potential. Initially, his plans were to turn to a woman for help. It was necessary to understand what was what in the “multiverse” already known to the viewer ....',
//     annotation: '',
//     rating: 3.5,
//     imageUrl: 'https://kinogo.biz/uploads/mini/minifull/c24/1651946083_poster.webp'
//   },
//   {
//     id: 9,
//     genre: EGenreType.Fantasy,
//     title: 'Fantastic Beasts: Dumbledore\'s Secrets',
//     description: 'Albus Dumbledore learns of the threat from the dark magician Gellert Grindelwald. An evil wizard plans to take over the world. It must be stopped, otherwise irreparable things may happen. Dumbledore, despite all the power of the white magician, is not able to stand alone against such a strong opponent. Then he finds the magozologist Newt Scamander, and asks for help in saving the world, leading a group of...',
//     annotation: '',
//     rating: 3.3,
//     imageUrl: 'https://kinogo.biz/uploads/mini/minifull/5c3/1649532371-1401942656.webp'
//   },
//   {
//     id: 10,
//     genre: EGenreType.Cartoon,
//     title: 'Sea Monster',
//     description: 'Often, young children were told various tales at night about creatures that live underwater in their own underwater world. However, in addition to good marine inhabitants, there are also evil monsters. And this is not fiction at all, but a reality that is not shown to everyone. Sea monsters in every possible way harm not only other underwater inhabitants, but also people who interfered in their existence.',
//     annotation: '',
//     rating: 3.9,
//     imageUrl: 'https://kinogo.biz/uploads/mini/minifull/58b/1657313529-1599444334.webp'
//   },
//   {
//     id: 11,
//     genre: EGenreType.Comedy,
//     title: 'Don\'t star!',
//     description: 'The main character of the film is Jerome. His life is not full of bright colors and events, as he would like. And often he pretends to be a successful entrepreneur or showman, athlete, astronaut or some other media personality. He does not hesitate to show off his acquaintances with popular politicians, artists and top models. Lies became the foundation of his life, a kind of drug.',
//     annotation: '',
//     rating: 3.3,
//     imageUrl: 'https://kinogo.biz/uploads/mini/minifull/879/1659718448-1712786257.webp'
//   },
//   {
//     id: 12,
//     genre: EGenreType.Horror,
//     title: 'Extraction',
//     description: 'A female Naru warrior tries to protect her tribe from one of the first highly advanced Predators to land on Earth....',
//     annotation: '',
//     rating: 4.5,
//     imageUrl: 'https://kinogo.biz/uploads/mini/minifull/879/1659718448-1712786257.webp',
//   }
//
// ]
