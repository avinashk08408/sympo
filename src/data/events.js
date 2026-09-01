import event1Video from "../assets/videos/event1.mp4";
import event2Video from "../assets/videos/event2.mp4";
import event3Video from "../assets/videos/event3.mp4";
import event4Video from "../assets/videos/event4.mp4";
import event5Video from "../assets/videos/event5.mp4";

export const events = [
  {
    id: "event-1",
    number: "01",
    name: "EVENT ONE",
    category: "TECHNICAL EVENT",
    tagline: "Enter the realm. Face the challenge.",
    description:
      "A challenging technical battle designed to test your knowledge, creativity and problem-solving skills.",
    teamSize: "2 - 4",
    duration: "60 MIN",
    venue: "MAIN BLOCK",
    introVideo: event1Video,
    rules: [
      "Participants must register before the event begins.",
      "Participants must follow the instructions given by the coordinators.",
      "Any form of unfair practice will result in disqualification.",
      "The coordinator's decision will be final."
    ]
  },

  {
    id: "event-2",
    number: "02",
    name: "EVENT TWO",
    category: "TECHNICAL EVENT",
    tagline: "Only the worthy shall prevail.",
    description:
      "A technical challenge where participants compete through strategy, knowledge and skill.",
    teamSize: "2 - 4",
    duration: "60 MIN",
    venue: "MAIN BLOCK",
    introVideo: event2Video,
    rules: [
      "Participants must report before the scheduled time.",
      "All participants must carry valid college identification.",
      "External assistance is not permitted.",
      "The coordinator's decision will be final."
    ]
  },

  {
    id: "event-3",
    number: "03",
    name: "EVENT THREE",
    category: "NON-TECHNICAL EVENT",
    tagline: "The game begins.",
    description:
      "A competitive event combining speed, creativity and strategic thinking.",
    teamSize: "2 - 4",
    duration: "45 MIN",
    venue: "SEMINAR HALL",
    introVideo: event3Video,
    rules: [
      "Participants must follow the event instructions.",
      "Registration is mandatory.",
      "Participants must maintain discipline throughout the event.",
      "The coordinator's decision will be final."
    ]
  },

  {
    id: "event-4",
    number: "04",
    name: "EVENT FOUR",
    category: "TECHNICAL EVENT",
    tagline: "Prepare for the final battle.",
    description:
      "A competitive technical experience built around problem solving and innovation.",
    teamSize: "2 - 4",
    duration: "60 MIN",
    venue: "LAB",
    introVideo: event4Video,
    rules: [
      "Participants must follow all technical instructions.",
      "No unfair means are allowed.",
      "Participants must complete the challenge within the given time.",
      "The coordinator's decision will be final."
    ]
  },

  {
    id: "event-5",
    number: "05",
    name: "EVENT FIVE",
    category: "SPECIAL EVENT",
    tagline: "Claim your place in the realm.",
    description:
      "The final challenge awaits. Gather your team and prepare for the ultimate battle.",
    teamSize: "2 - 4",
    duration: "45 MIN",
    venue: "AUDITORIUM",
    introVideo: event5Video,
    rules: [
      "Participants must register before the event.",
      "All instructions must be followed.",
      "Discipline must be maintained throughout the event.",
      "The coordinator's decision will be final."
    ]
  }
];
