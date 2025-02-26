const ANIMAL_SET_ACHIEVEMENTS = {
  legendaryBestiary: {
    type: 'pet',
    species: [
      'Dragon',
      'FlyingPig',
      'Gryphon',
      'SeaSerpent',
      'Unicorn',
    ],
    achievementKey: 'legendaryBestiary',
    notificationType: 'ACHIEVEMENT_LEGENDARY_BESTIARY',
  },
  domesticated: {
    type: 'pet',
    species: [
      'Ferret',
      'GuineaPig',
      'Rooster',
      'FlyingPig',
      'Rat',
      'Bunny',
      'Horse',
      'Cow',
    ],
    achievementKey: 'domesticated',
    notificationType: 'ACHIEVEMENT_DOMESTICATED',
  },
  zodiacZookeeper: {
    type: 'pet',
    species: [
      'Rat',
      'Cow',
      'Bunny',
      'Snake',
      'Horse',
      'Sheep',
      'Monkey',
      'Rooster',
      'Wolf',
      'TigerCub',
      'FlyingPig',
      'Dragon',
    ],
    achievementKey: 'zodiacZookeeper',
    notificationType: 'ACHIEVEMENT_ZODIAC_ZOOKEEPER',
  },
};

export default ANIMAL_SET_ACHIEVEMENTS;
