type Chat = {
  id: string;
  name: string;
  image: string;
  chatHistory: { text: string; isMine: boolean }[];
};

export const chats: Chat[] = [
  {
    id: "1",
    name: "Amad Diallo",
    image:
      "https://dims.apnews.com/dims4/default/c435c3f/2147483647/strip/true/crop/5907x3938+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7e%2F01%2F28e55e838e88f5e48c50a28f0a81%2F2bdac71c6b89465cb373e61b9fd69676",
    chatHistory: [
      { text: "Hey there!", isMine: false },
      { text: "Hi Amad! How are you doing today?", isMine: true },
      { text: "I'm good, just finished training.", isMine: false },
      { text: "Nice! How was it?", isMine: true },
      {
        text: "Tough but rewarding. Coach was happy with my progress.",
        isMine: false,
      },
      { text: "That's awesome. Are you playing this weekend?", isMine: true },
      {
        text: "Yes, looking forward to it. Will you be watching?",
        isMine: false,
      },
      { text: "Of course! Good luck!", isMine: true },
      { text: "Thanks, appreciate it!", isMine: false },
    ],
  },
  {
    id: "2",
    name: "Marcus Rashford",
    image:
      "https://images.daznservices.com/di/library/DAZN_News/d/49/rashford-20240816-getty-ftr_1n03u2fsjg1q41aaiylv3ixeb0.jpg?t=-1143631135&w=800&quality=100",
    chatHistory: [
      { text: "Yo Marcus!", isMine: true },
      { text: "Hey! What's up?", isMine: false },
      { text: "Not much, just chilling. You?", isMine: true },
      { text: "Just got back from the gym.", isMine: false },
      { text: "Nice, working hard as always.", isMine: true },
      { text: "Gotta stay fit! Any plans for tonight?", isMine: false },
      { text: "Maybe catch a movie. You?", isMine: true },
      { text: "Might join you if that's cool.", isMine: false },
      { text: "Sure, let's do it!", isMine: true },
    ],
  },
  {
    id: "3",
    name: "Luke Shaw",
    image:
      "https://i2-prod.manchestereveningnews.co.uk/incoming/article20472048.ece/ALTERNATES/s615/0_GettyImages-1314503563.jpg",
    chatHistory: [
      { text: "Hey Luke, how's the injury?", isMine: true },
      { text: "Getting better, thanks for asking.", isMine: false },
      { text: "Glad to hear! When are you back on the pitch?", isMine: true },
      { text: "Hopefully next month if all goes well.", isMine: false },
      { text: "Take your time, don't rush it.", isMine: true },
      { text: "Yeah, physio says the same.", isMine: false },
      { text: "Let me know if you need anything.", isMine: true },
      { text: "Will do, thanks mate.", isMine: false },
    ],
  },
  {
    id: "4",
    name: "Casemiro",
    image:
      "https://i.guim.co.uk/img/media/7947a424a20ad696d5567b6c8b6c0e3c73cd7c3f/0_247_5067_3040/master/5067.jpg?width=465&dpr=1&s=none&crop=none",
    chatHistory: [
      { text: "Hi Casemiro!", isMine: true },
      { text: "Hello! How are you?", isMine: false },
      { text: "I'm good. How's your family?", isMine: true },
      { text: "They are well, thank you.", isMine: false },
      { text: "Great to hear. Ready for the next match?", isMine: true },
      { text: "Always ready!", isMine: false },
      { text: "Let's win it!", isMine: true },
      { text: "For sure!", isMine: false },
    ],
  },
  {
    id: "5",
    name: "Lisandro Martinez",
    image:
      "https://cdn1.unitedinfocus.com/uploads/14/2024/02/GettyImages-1480149244-scaled.jpg",
    chatHistory: [
      { text: "Hey Lisandro, congrats on the win!", isMine: true },
      { text: "Thanks! It was a tough game.", isMine: false },
      { text: "You played really well.", isMine: true },
      { text: "Appreciate it. The team worked hard.", isMine: false },
      { text: "What's next for you?", isMine: true },
      { text: "Rest and recovery, then back to training.", isMine: false },
      { text: "Good luck!", isMine: true },
      { text: "Thanks!", isMine: true },
    ],
  },
  {
    id: "6",
    name: "Antony",
    image:
      "https://e0.365dm.com/23/12/2048x1152/skysports-alejandro-garnacho_6386627.jpg?20231208144311",
    chatHistory: [
      { text: "Antony! That goal was amazing!", isMine: true },
      { text: "Thank you! It felt great to score.", isMine: false },
      { text: "How did you feel after the match?", isMine: true },
      { text: "Very happy, the fans were incredible.", isMine: false },
      { text: "You deserve it. Keep it up!", isMine: true },
      { text: "Will do, thanks for the support!", isMine: false },
      { text: "Always supporting you!", isMine: true },
    ],
  },
  {
    id: "7",
    name: "Marcus Rash",
    image:
      "https://images.daznservices.com/di/library/DAZN_News/d/49/rashford-20240816-getty-ftr_1n03u2fsjg1q41aaiylv3ixeb0.jpg?t=-1143631135&w=800&quality=100",
    chatHistory: [
      { text: "Hey Marcus, are you free this weekend?", isMine: true },
      { text: "Hey! Yeah, I should be. What's up?", isMine: false },
      { text: "Thinking of organizing a get-together.", isMine: true },
      { text: "Sounds good! Who else is coming?", isMine: false },
      { text: "Luke, Amad, and a few others.", isMine: true },
      { text: "Count me in!", isMine: false },
      { text: "Awesome, I'll send you the details.", isMine: true },
      { text: "Looking forward to it!", isMine: false },
    ],
  },
  {
    id: "8",
    name: "Lukas Shaw",
    image:
      "https://i2-prod.manchestereveningnews.co.uk/incoming/article20472048.ece/ALTERNATES/s615/0_GettyImages-1314503563.jpg",
    chatHistory: [
      { text: "Hey Lukas, did you watch the game last night?", isMine: true },
      { text: "Yeah, it was intense!", isMine: false },
      { text: "I know, right? The last-minute goal was crazy.", isMine: true },
      { text: "Couldn't believe it went in.", isMine: false },
      { text: "We should go to a match together sometime.", isMine: true },
      { text: "Definitely! Let's plan for next month.", isMine: false },
      { text: "I'll check the schedule and let you know.", isMine: true },
      { text: "Sounds good!", isMine: false },
    ],
  },
  {
    id: "9",
    name: "Casemiro Martinez",
    image:
      "https://i.guim.co.uk/img/media/7947a424a20ad696d5567b6c8b6c0e3c73cd7c3f/0_247_5067_3040/master/5067.jpg?width=465&dpr=1&s=none&crop=none",
    chatHistory: [
      { text: "Hey Casemiro, how's training going?", isMine: true },
      {
        text: "It's going well, thanks. Working on my fitness.",
        isMine: false,
      },
      { text: "Any new drills?", isMine: true },
      { text: "Yeah, coach introduced some new routines.", isMine: false },
      { text: "Cool! Hope it helps for the next match.", isMine: true },
      { text: "Me too. We need a win.", isMine: false },
      { text: "Let's get it!", isMine: true },
      { text: "Absolutely!", isMine: false },
      { text: "By the way, are you joining the team dinner?", isMine: true },
      { text: "Yes, see you there!", isMine: false },
    ],
  },
];
