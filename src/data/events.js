// src/data/events.js

const eventVideo =
  "https://res.cloudinary.com/egrvexxs/video/upload/v1788282471/InShot_20260831_191916680.mp4";

export const events = [
  {
    id: "scrolls-of-the-realm",
    number: "I",
    name: "SCROLLS OF THE REALM",
    category: "KNOWLEDGE",
    tagline: "Only the sharpest minds shall prevail.",
    description:
      "Enter the realm of knowledge and prove your ability through challenges designed to test your thinking, awareness, and technical understanding.",
    teamSize: "2 - 4",
    duration: "60 MIN",
    venue: "SYMPOSIUM ARENA",
    video: eventVideo,
    rules: [
      "Participants must register before the event begins.",
      "All participants must follow the instructions given by the coordinators.",
      "Any form of unfair practice will result in disqualification.",
      "Participants must complete the challenge within the given time.",
      "The decision of the event coordinators will be final.",
    ],
  },

  {
    id: "iron-throne",
    number: "II",
    name: "IRON THRONE",
    category: "STRATEGY",
    tagline: "Knowledge is the sharpest weapon.",
    description:
      "A battle of strategy, decision-making, and technical thinking. Only those who can adapt under pressure will claim the Iron Throne.",
    teamSize: "2 - 4",
    duration: "60 MIN",
    venue: "SYMPOSIUM ARENA",
    video: eventVideo,
    rules: [
      "Participants must report to the venue before the event starts.",
      "Teams must work within the assigned rules.",
      "External assistance is not permitted.",
      "Any violation of the rules may lead to disqualification.",
      "The coordinators' decision will be final.",
    ],
  },

  {
    id: "siege-of-servers",
    number: "III",
    name: "SIEGE OF SERVERS",
    category: "CYBER SECURITY",
    tagline: "Claim your place among the legends.",
    description:
      "Enter the battlefield of cybersecurity and defend your realm. Analyze, investigate, and overcome challenges using your technical skills.",
    teamSize: "2 - 4",
    duration: "90 MIN",
    venue: "CYBER ARENA",
    video: eventVideo,
    rules: [
      "Participants must use only the resources permitted by the coordinators.",
      "Attacking systems outside the provided environment is strictly prohibited.",
      "Participants must follow all cybersecurity event guidelines.",
      "Any attempt to disrupt the event infrastructure will result in immediate disqualification.",
      "The coordinators' decision will be final.",
    ],
  },

  {
    id: "winter-war",
    number: "IV",
    name: "WINTER WAR",
    category: "TECHNICAL",
    tagline: "Find the flaw. Break the curse.",
    description:
      "A technical battlefield where participants must identify problems, think critically, and find effective solutions before time runs out.",
    teamSize: "2 - 4",
    duration: "60 MIN",
    venue: "TECH ARENA",
    video: eventVideo,
    rules: [
      "Participants must arrive before the event begins.",
      "All challenges must be completed within the allocated time.",
      "Only permitted resources may be used.",
      "Unfair practices will result in disqualification.",
      "The coordinators' decision will be final.",
    ],
  },

  {
    id: "tessarions-trail",
    number: "V",
    name: "TESSARION'S TRAIL",
    category: "CREATIVE",
    tagline: "Ideas that are worthy of the throne.",
    description:
      "Follow the trail of creativity and innovation. Bring your ideas to life and prove that your vision is worthy of the throne.",
    teamSize: "2 - 4",
    duration: "60 MIN",
    venue: "CREATIVE ARENA",
    video: eventVideo,
    rules: [
      "Participants must register before the event begins.",
      "All submissions must be created during the event unless otherwise specified.",
      "Participants must respect intellectual property and event guidelines.",
      "Any inappropriate or unfair submission may be rejected.",
      "The coordinators' decision will be final.",
    ],
  },
];

export default events;
