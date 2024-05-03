import { defineStore } from 'pinia'

export const useLevelStore = defineStore('level', {
  state: () => ({
    levels: [],
    levelsDesc: [
      {
        id: 1,
        name: 'Level 1: Foundational',
        type: 'Hard Skill',
        desc: 'At this level, individuals possess basic skills and knowledge relevant to the job role, undertaking entry-level tasks under close supervision. They require guidance to perform tasks effectively and have minimal autonomy in decision-making.'
      },
      {
        id: 2,
        name: 'Level 2: Developing Competence',
        type: 'Hard Skill',
        desc: 'Individuals at this level demonstrate expanded skills beyond the basics and can execute tasks with some independence, although they may still require supervision for complex tasks. They begin to engage in basic problem-solving within their scope of work.'
      },
      {
        id: 3,
        name: 'Level 3: Competent Performance',
        type: 'Hard Skill',
        desc: 'Here, individuals showcase competence in performing various tasks and can work independently for the most part, seeking guidance for challenging tasks. They are expected to exercise some degree of decision-making within their area of responsibility.'
      },
      {
        id: 4,
        name: 'Level 4: Advanced',
        type: 'Hard Skill',
        desc: "At this stage, individuals possess advanced skills and knowledge, working independently with minimal supervision. They handle complex tasks and make autonomous decisions within their expertise."
      },
      {
        id: 5,
        name: 'Level 5: Specialized',
        type: 'Hard Skill',
        desc: "Individuals are recognized as specialists within their field, demonstrating leadership potential and contributing to innovation. They engage in complex problem-solving and possess in-depth knowledge and expertise."
      },
      {
        id: 6,
        name: 'Level 6: Strategic Leadership',
        type: 'Hard Skill',
        desc: "Individuals at this pinnacle level hold leadership or executive positions, setting strategic direction and vision for the organization. They make high-stakes decisions impacting long-term success, often with a global perspective."
      },
      {
        id: 7,
        name: 'Basic',
        type: 'Soft Skill',
        desc: "At this level, individuals possess foundational knowledge and understanding of fundamental concepts, enabling them to apply basic skills and techniques under supervision. They exhibit limited autonomy in decision-making, relying on predefined procedures to execute tasks effectively."
      },
      {
        id: 8,
        name: 'Intermediate',
        type: 'Soft Skill',
        desc: "Individuals at this level demonstrate expanded knowledge and skills beyond the basic level, enabling them to execute tasks independently with increased proficiency. While still developing, they exercise some degree of decision-making within their area of responsibility, contributing to their growth and autonomy."
      },
      {
        id: 9,
        name: 'Advanced',
        type: 'Soft Skill',
        desc: "Here, individuals have acquired comprehensive knowledge and expertise in the field, demonstrating high-level proficiency in handling complex tasks independently. They exhibit autonomous decision-making, drawing on extensive experience and skill mastery to drive outcomes and solutions, reflecting their advanced competency level."
      },
    ],
  }),

  getters: {
    level: (state) => state.levels,
    levelDesc: (state) => state.levelsDesc
  },

  actions: {
    setLevel(item) {
      this.levels = item
    },
    getLevelNameById(id) {
      return this.levels.find((level) => level.levelId === id)?.level || ''
    },
  },
})
