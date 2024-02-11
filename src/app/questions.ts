import { Question } from './models/Question';

export const questions: Question[] = [
  {
    question: 'What kind of person are you?',
    displayText: 'What kind of person is $?',
    options: [
      {
        id: 1,
        name: 'Cat',
        image: 'assets/images/animals/cat.jpg',
      },
      {
        id: 2,
        name: 'Dog',
        image: 'assets/images/animals/dog.jpg',
      },
    ],
    id: 1,
  },
  {
    question: 'Which snacks do you like to eat most?',
    displayText: 'Which snacks does $ like to eat most?',
    options: [
      {
        id: 1,
        name: 'Lays',
        image: 'assets/images/snacks/lays.jpg',
      },
      {
        id: 2,
        name: 'Pani Puri',
        image: 'assets/images/snacks/PaniPuri.jpg',
      },
      {
        id: 3,
        name: 'Cone Ice Cream',
        image: 'assets/images/snacks/cone.png',
      },
      {
        id: 4,
        name: 'Munta Masala',
        image: 'assets/images/snacks/muntamasala.jpg',
      },
    ],
    id: 2,
  },
  {
    question: 'What is your favorite dish?',
    displayText: "What is $'s favorite dish?",
    options: [
      {
        id: 1,
        name: 'Biryani',
        image: 'assets/images/dishes/biryani.jpg',
      },
      {
        id: 2,
        name: 'Pulihora',
        image: 'assets/images/dishes/pulihora.jpg',
      },
      {
        id: 3,
        name: 'Mutton',
        image: 'assets/images/dishes/mutton.jpg',
      },
      {
        id: 4,
        name: 'Chicken',
        image: 'assets/images/dishes/chicken.png',
      },
    ],
    id: 3,
  },
  {
    question: 'Who is your favorite political leader in Telugu states?',
    displayText: 'Who is $\'s favorite political leader in Telugu states?',
    options: [
      {
        id: 1,
        name: 'Y. S. Jagan Mohan Reddy',
        image: 'assets/images/politicians/JaganMohanReddy.jpg',
      },
      {
        id: 2,
        name: 'Chandrababu Naidu',
        image: 'assets/images/politicians/ChandrababuNaidu.jpg',
      },
      {
        id: 3,
        name: 'K. Chandrashekar Rao',
        image: 'assets/images/politicians/KCR.png',
      },
      {
        id: 4,
        name: 'Pawan Kalyan',
        image: 'assets/images/politicians/PawanKalyan.jpg',
      },
    ],
    id: 4,
  },
  {
    question: 'What is your favorite TV show?',
    displayText: 'What is $\'s favorite TV show?',
    options: [
      {
        id: 7,
        name: 'Bigg Boss',
        image: 'assets/images/shows/BIGG_BOSS_TELUGU.jpg',
      },
      {
        id: 6,
        name: 'Jabardasth',
        image: 'assets/images/shows/jabardasth.jpg',
      },
      {
        id: 5,
        name: 'Suma Adda',
        image: 'assets/images/shows/suma_adda.jpg',
      },
      {
        id: 4,
        name: 'Dhee',
        image: 'assets/images/shows/dhee.jpg',
      },
      {
        id: 3,
        name: 'Sa Re Ga Ma Pa',
        image: 'assets/images/shows/Sa-Re-Ga-Ma-Pa.jpg',
      },
      {
        id: 1,
        name: 'Sri Devi Company',
        image: 'assets/images/shows/sridevicompany.jpg',
      },
    ],
    id: 5,
  },
  {
    question: 'Who is your favorite Actor?',
    displayText: 'Who is $\'s favorite Actor?',
    options: [
      {
        id: 1,
        name: 'Prabhas',
        image: 'assets/images/actors/prabhas.jpg',
      },
      {
        id: 2,
        name: 'Mahesh Babu',
        image: 'assets/images/actors/mahesh.jpg',
      },
      {
        id: 3,
        name: 'Pawan kalyan',
        image: 'assets/images/actors/pawan.jpg',
      },
      {
        id: 4,
        name: 'NTR Jr.',
        image: 'assets/images/actors/ntr.jpg',
      },
      {
        id: 5,
        name: 'Ram Charan',
        image: 'assets/images/actors/ramcharan.jpg',
      },
    ],
    id: 6,
  },
  {
    question: 'Who is your favorite actress?',
    displayText: 'Who is $\'s favorite actress?',
    options: [
      {
        id: 1,
        name: 'Samantha ',
        image: 'assets/images/actresses/samantha.jpg',
      },
      {
        id: 2,
        name: 'Anushka Shetty',
        image: 'assets/images/actresses/anushka.jpg',
      },
      {
        id: 3,
        name: 'Rashmika Mandanna',
        image: 'assets/images/actresses/rashmika.jpg',
      },
      {
        id: 4,
        name: 'Keerthy Suresh',
        image: 'assets/images/actresses/keerthy.png',
      },
      {
        id: 5,
        name: 'Sai Pallavi',
        image: 'assets/images/actresses/saipallavi.jpg',
      },
    ],
    id: 7,
  },
  {
    question: 'Who is your favorite film director?',
    displayText: 'Who is $\'s favorite film director?',
    options: [
      {
        id: 1,
        name: 'Rajamouli',
        image: 'assets/images/directors/rajamouli.jpg',
      },
      {
        id: 2,
        name: 'Trivikram Srinivas',
        image: 'assets/images/directors/trivikram.jpg',
      },
      {
        id: 3,
        name: 'Sukumar',
        image: 'assets/images/directors/sukumar.jpg',
      },
      {
        id: 4,
        name: 'Koratala Siva',
        image: 'assets/images/directors/koratala_siva.jpg',
      },
    ],
    id: 8,
  },
  {
    question: 'In which month were you born?',
    displayText: 'In which month was $ born?',
    options: [
      {
        id: 1,
        name: 'January',
      },
      {
        id: 2,
        name: 'February',
      },
      {
        id: 3,
        name: 'March',
      },
      {
        id: 4,
        name: 'April',
      },
      {
        id: 5,
        name: 'May',
      },
      {
        id: 6,
        name: 'June',
      },
      {
        id: 7,
        name: 'July',
      },
      {
        id: 8,
        name: 'August',
      },
      {
        id: 9,
        name: 'September',
      },
      {
        id: 10,
        name: 'October',
      },
      {
        id: 11,
        name: 'November',
      },
      {
        id: 12,
        name: 'December',
      },
    ],
    id: 9,
  },
  {
    question: 'What superpower do you want to have?',
    displayText: 'What superpower does $ want to have?',
    options: [
      {
        id: 1,
        name: 'Invisibility',
      },
      {
        id: 2,
        name: 'Hanu-Man',
      },
      {
        id: 3,
        name: 'Talk to Ghosts',
      },
      {
        id: 4,
        name: 'Talk to animals',
      },
      {
        id: 5,
        name: 'Super Speed',
      },
      {
        id: 6,
        name: 'Time Travel',
      },
    ],
    id: 10,
  },
];
