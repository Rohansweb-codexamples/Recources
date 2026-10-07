// Built-in content generator — no external API needed.
// Generates educational resources from a knowledge base.

const knowledgeBase = {
  SPRING: {
    items: [
      { label: 'Daffodil', value: 'A bright yellow spring flower that grows from a bulb' },
      { label: 'Tulip', value: 'A colourful cup-shaped flower that blooms in spring' },
      { label: 'Lamb', value: 'A baby sheep, often born in spring' },
      { label: 'Caterpillar', value: 'A young insect that will become a butterfly' },
      { label: 'Butterfly', value: 'An insect with colourful wings that emerges in spring' },
      { label: 'Blossom', value: 'Pink or white flowers on fruit trees in spring' },
      { label: 'Frogspawn', value: 'Jelly-like eggs laid by frogs in spring ponds' },
      { label: 'Nest', value: 'A home built by birds for their eggs in spring' },
      { label: 'Duckling', value: 'A baby duck that hatches in spring' },
      { label: 'Seedling', value: 'A young plant just starting to grow from a seed' },
      { label: 'Bluebell', value: 'A purple-blue bell-shaped woodland flower' },
      { label: 'Bumblebee', value: 'A fuzzy bee that emerges in spring to pollinate flowers' }
    ],
    banner: {
      title: 'Welcome to Spring',
      subtitle: 'Growing and Learning Together',
      decorations: ['\u{1F337} Tulips', '\u{1F411} Lambs', '\u{1F98B} Butterflies', '\u{1F331} Seedlings'],
      message: 'Spring is a time of new beginnings. Let us explore, learn and grow together!'
    },
    vocabulary: [
      { term: 'Germination', definition: 'When a seed begins to grow into a plant' },
      { term: 'Deciduous', definition: 'Trees that grow new leaves in spring' },
      { term: 'Life cycle', definition: 'The stages of life a living thing goes through' },
      { term: 'Pollination', definition: 'When pollen moves between flowers to make seeds' },
      { term: 'Photosynthesis', definition: 'How plants make food from sunlight' },
      { term: 'Hibernation', definition: 'When animals sleep through winter and wake in spring' }
    ],
    questions: [
      { question: 'Name three signs of spring', answer: 'Flowers blooming, lambs born, trees budding' },
      { question: 'What is germination?', answer: 'When a seed starts to grow into a plant' },
      { question: 'Why do birds build nests in spring?', answer: 'To lay eggs and raise their young' },
      { question: 'What happens to deciduous trees in spring?', answer: 'They grow new leaves' },
      { question: 'Name a baby animal born in spring', answer: 'Lamb, chick, duckling, or calf' }
    ]
  },
  SUMMER: {
    items: [
      { label: 'Sunflower', value: 'A tall yellow flower that follows the sun' },
      { label: 'Ice cream', value: 'A cold sweet treat enjoyed in summer' },
      { label: 'Sunscreen', value: 'Lotion that protects skin from the sun' },
      { label: 'Picnic', value: 'A meal eaten outdoors in summer' },
      { label: 'Dragonfly', value: 'A fast-flying insect seen near water in summer' },
      { label: 'Watermelon', value: 'A refreshing juicy fruit eaten in summer' },
      { label: 'Sandcastle', value: 'A structure built from sand on the beach' },
      { label: 'Strawberry', value: 'A sweet red fruit picked in summer' },
      { label: 'Ladybird', value: 'A small red beetle with black spots' },
      { label: 'Seaside', value: 'The coast, a popular place to visit in summer' }
    ],
    banner: {
      title: 'Summer Fun',
      subtitle: 'Learning Through the Sunny Season',
      decorations: ['\u{2600}\u{FE0F} Sun', '\u{1F366} Ice Cream', '\u{1F33B} Sunflower', '\u{1F3D6}\u{FE0F} Beach'],
      message: 'Summer is here! Let us discover, play and learn in the sunshine.'
    },
    vocabulary: [
      { term: 'Evaporation', definition: 'When water turns into vapour in the heat' },
      { term: 'Solstice', definition: 'The longest day of the year, in June' },
      { term: 'Pollinator', definition: 'An insect that carries pollen between flowers' },
      { term: 'Sunlight', definition: 'Light and heat energy from the sun' },
      { term: 'Harvest', definition: 'Gathering ripe crops from fields' },
      { term: 'Habitat', definition: 'The natural home of a living thing' }
    ],
    questions: [
      { question: 'Why do we wear sunscreen in summer?', answer: 'To protect our skin from harmful UV rays' },
      { question: 'What is evaporation?', answer: 'When water turns into vapour in the heat' },
      { question: 'Name three summer fruits', answer: 'Strawberries, watermelon, cherries' },
      { question: 'Why do sunflowers face the sun?', answer: 'To get maximum sunlight for photosynthesis' },
      { question: 'What is the summer solstice?', answer: 'The longest day of the year' }
    ]
  },
  AUTUMN: {
    items: [
      { label: 'Oak Leaf', value: 'Lobed leaves that turn brown and red in autumn' },
      { label: 'Maple Leaf', value: 'Star-shaped leaves that turn bright red and orange' },
      { label: 'Conker', value: 'The shiny brown seed of the horse chestnut tree' },
      { label: 'Hedgehog', value: 'A spiky mammal that hibernates in autumn' },
      { label: 'Squirrel', value: 'A bushy-tailed animal that gathers nuts in autumn' },
      { label: 'Pumpkin', value: 'A round orange squash harvested in autumn' },
      { label: 'Acorn', value: 'The seed of the oak tree, fallen in autumn' },
      { label: 'Beech Leaf', value: 'Oval leaves with wavy edges that turn copper' },
      { label: 'Fungi', value: 'Mushrooms that appear on the forest floor in autumn' },
      { label: 'Berry', value: 'Small fruits on bushes that ripen in autumn' }
    ],
    banner: {
      title: 'Welcome to Autumn',
      subtitle: 'A Season of Change and Discovery',
      decorations: ['\u{1F342} Falling Leaves', '\u{1F330} Conkers', '\u{1F344} Mushrooms', '\u{1F994} Hedgehogs'],
      message: 'Autumn brings golden leaves and cosy days. Let us explore the changing world together!'
    },
    vocabulary: [
      { term: 'Deciduous', definition: 'Trees that lose their leaves in autumn' },
      { term: 'Evergreen', definition: 'Trees that keep their leaves all year' },
      { term: 'Hibernation', definition: 'When animals sleep through the cold winter' },
      { term: 'Migration', definition: 'When birds fly to warmer places for winter' },
      { term: 'Harvest', definition: 'Gathering crops when they are ripe' },
      { term: 'Decompose', definition: 'When leaves break down into soil' }
    ],
    questions: [
      { question: 'Why do leaves change colour in autumn?', answer: 'Because the tree stops making chlorophyll, revealing other colours' },
      { question: 'Which animals hibernate?', answer: 'Hedgehogs, dormice, and bats' },
      { question: 'What is a conker?', answer: 'The seed of the horse chestnut tree' },
      { question: 'Name three things animals do to prepare for winter', answer: 'Hibernate, migrate, or store food' },
      { question: 'What is the difference between deciduous and evergreen trees?', answer: 'Deciduous trees lose their leaves, evergreen trees keep them' }
    ]
  },
  WINTER: {
    items: [
      { label: 'Snowflake', value: 'A tiny ice crystal that falls from the sky, each one unique' },
      { label: 'Icicle', value: 'A spike of ice formed by dripping water' },
      { label: 'Penguin', value: 'A flightless bird that lives in cold places' },
      { label: 'Polar Bear', value: 'A large white bear that lives in the Arctic' },
      { label: 'Frost', value: 'Tiny ice crystals on the ground on cold mornings' },
      { label: 'Snowman', value: 'A figure made from snow with a carrot nose' },
      { label: 'Holly', value: 'An evergreen plant with red berries and spiky leaves' },
      { label: 'Robin', value: 'A small bird with a red breast seen in winter' },
      { label: 'Arctic Fox', value: 'A white fox that lives in the cold Arctic' },
      { label: 'Mitten', value: 'A warm hand covering for cold weather' }
    ],
    banner: {
      title: 'Winter Wonderland',
      subtitle: 'Exploring the Cold Season',
      decorations: ['\u{2744}\u{FE0F} Snowflakes', '\u{1F434} Polar Bears', '\u{1F385} Snowmen', '\u{1F9AB} Arctic Foxes'],
      message: 'Winter is a magical time of snow and ice. Let us discover the wonders of the cold!'
    },
    vocabulary: [
      { term: 'Freezing', definition: 'When water turns into ice at 0 degrees Celsius' },
      { term: 'Insulation', definition: 'Something that keeps heat in, like a winter coat' },
      { term: 'Adaptation', definition: 'How animals change to survive in cold weather' },
      { term: 'Camouflage', definition: 'How animals blend in with snow to hide' },
      { term: 'Solstice', definition: 'The shortest day of the year, in December' },
      { term: 'Precipitation', definition: 'Water that falls from the sky as rain or snow' }
    ],
    questions: [
      { question: 'Why do some animals turn white in winter?', answer: 'For camouflage in the snow' },
      { question: 'What is frost?', answer: 'Tiny ice crystals formed on cold surfaces' },
      { question: 'At what temperature does water freeze?', answer: '0 degrees Celsius' },
      { question: 'How do polar bears stay warm?', answer: 'Thick fur and a layer of fat called blubber' },
      { question: 'Name three winter animals', answer: 'Polar bear, penguin, arctic fox' }
    ]
  },
  CHRISTMAS: {
    items: [
      { label: 'Reindeer', value: 'A deer with antlers that pulls Santa\u2019s sleigh' },
      { label: 'Stocking', value: 'A sock hung by the fireplace for small gifts' },
      { label: 'Bauble', value: 'A shiny round decoration for the Christmas tree' },
      { label: 'Wreath', value: 'A circular decoration made of leaves and berries' },
      { label: 'Gingerbread', value: 'A spiced biscuit often made into houses' },
      { label: 'Carol', value: 'A festive song sung at Christmas time' },
      { label: 'Tinsel', value: 'Shiny strips used to decorate Christmas trees' },
      { label: 'Mistletoe', value: 'A plant hung in doorways at Christmas' },
      { label: 'Cracker', value: 'A paper tube that pops with a small gift inside' },
      { label: 'Elf', value: 'A helper who makes toys in Santa\u2019s workshop' }
    ],
    banner: {
      title: 'Merry Christmas',
      subtitle: 'A Season of Joy and Giving',
      decorations: ['\u{1F384} Christmas Tree', '\u{1F385} Santa', '\u{1F936} Elves', '\u{1F381} Presents'],
      message: 'Wishing you a joyful Christmas full of learning, laughter and fun!'
    },
    vocabulary: [
      { term: 'Nativity', definition: 'The story of the birth of Jesus' },
      { term: 'Advent', definition: 'The period of waiting and preparing for Christmas' },
      { term: 'Festive', definition: 'Relating to a celebration or festival' },
      { term: 'Tradition', definition: 'Something done the same way every year' },
      { term: 'Celebration', definition: 'A special event or party' },
      { term: 'Generosity', definition: 'Being kind and giving to others' }
    ],
    questions: [
      { question: 'How many reindeer pull Santa\u2019s sleigh?', answer: 'Nine, including Rudolph' },
      { question: 'What is the nativity story about?', answer: 'The birth of baby Jesus in a stable in Bethlehem' },
      { question: 'What is advent?', answer: 'The period of preparing for Christmas' },
      { question: 'Where does Santa Claus live?', answer: 'The North Pole' },
      { question: 'Name three Christmas traditions', answer: 'Decorating a tree, hanging stockings, singing carols' }
    ]
  },
  EASTER: {
    items: [
      { label: 'Egg', value: 'A symbol of new life, decorated at Easter' },
      { label: 'Chick', value: 'A baby chicken that hatches from an egg' },
      { label: 'Bunny', value: 'The Easter bunny brings eggs and treats' },
      { label: 'Daffodil', value: 'A spring flower often associated with Easter' },
      { label: 'Basket', value: 'A container used for Easter egg hunts' },
      { label: 'Lamb', value: 'A baby sheep, a symbol of spring and Easter' },
      { label: 'Tulip', value: 'A colourful spring flower seen at Easter' },
      { label: 'Bonnet', value: 'A decorated hat worn in Easter parades' },
      { label: 'Chocolate', value: 'A sweet treat given at Easter time' },
      { label: 'Cross', value: 'A symbol of Easter in the Christian faith' }
    ],
    banner: {
      title: 'Happy Easter',
      subtitle: 'New Life and New Beginnings',
      decorations: ['\u{1F423} Chicks', '\u{1F430} Bunnies', '\u{1F383} Eggs', '\u{1F337} Daffodils'],
      message: 'Easter is a time of new life and joy. Let us celebrate and learn together!'
    },
    vocabulary: [
      { term: 'Resurrection', definition: 'Coming back to life, the Easter story' },
      { term: 'Symbol', definition: 'Something that stands for something else' },
      { term: 'Tradition', definition: 'A custom passed down through generations' },
      { term: 'Spring', definition: 'The season when Easter occurs' },
      { term: 'New life', definition: 'The idea of things starting fresh' },
      { term: 'Celebration', definition: 'A special event or festival' }
    ],
    questions: [
      { question: 'What do eggs symbolise at Easter?', answer: 'New life and new beginnings' },
      { question: 'Who brings Easter eggs?', answer: 'The Easter Bunny' },
      { question: 'In which season does Easter fall?', answer: 'Spring' },
      { question: 'What is an Easter bonnet?', answer: 'A decorated hat worn in Easter parades' },
      { question: 'Name three Easter symbols', answer: 'Eggs, chicks, bunnies' }
    ]
  },
  SPACE: {
    items: [
      { label: 'Mercury', value: 'The smallest planet, closest to the Sun' },
      { label: 'Venus', value: 'The hottest planet, covered in thick clouds' },
      { label: 'Earth', value: 'Our home planet, the only one known to have life' },
      { label: 'Mars', value: 'The Red Planet, home to the largest volcano' },
      { label: 'Jupiter', value: 'The largest planet, with a Great Red Spot storm' },
      { label: 'Saturn', value: 'Famous for its beautiful ring system' },
      { label: 'Uranus', value: 'An ice giant that rotates on its side' },
      { label: 'Neptune', value: 'The windiest planet, deep blue in colour' },
      { label: 'Moon', value: 'Earth\u2019s natural satellite' },
      { label: 'Sun', value: 'The star at the centre of our solar system' },
      { label: 'Comet', value: 'A ball of ice and dust that orbits the Sun' },
      { label: 'Asteroid', value: 'A rocky object orbiting the Sun' }
    ],
    banner: {
      title: 'Out of This World',
      subtitle: 'Exploring Space and the Universe',
      decorations: ['\u{1F680} Rockets', '\u{1F311} Moons', '\u{2B50} Stars', '\u{1F300} Galaxies'],
      message: 'Blast off into learning! Let us explore the wonders of space together.'
    },
    vocabulary: [
      { term: 'Orbit', definition: 'The path a planet takes around the Sun' },
      { term: 'Galaxy', definition: 'A huge group of stars, gas and dust' },
      { term: 'Astronaut', definition: 'A person who travels into space' },
      { term: 'Gravity', definition: 'The force that pulls things towards the ground' },
      { term: 'Solar System', definition: 'The Sun and all the planets that orbit it' },
      { term: 'Telescope', definition: 'A tool for seeing far-away objects in space' }
    ],
    questions: [
      { question: 'Which planet is closest to the Sun?', answer: 'Mercury' },
      { question: 'What is the largest planet?', answer: 'Jupiter' },
      { question: 'Why is Mars called the Red Planet?', answer: 'Because of iron oxide (rust) on its surface' },
      { question: 'What is a galaxy?', answer: 'A huge group of stars, gas and dust' },
      { question: 'What does an astronaut do?', answer: 'Travels and works in space' }
    ]
  },
  MATHS: {
    items: [
      { label: 'Addition', value: 'Adding numbers together to find the total' },
      { label: 'Subtraction', value: 'Taking one number away from another' },
      { label: 'Multiplication', value: 'Adding a number many times' },
      { label: 'Division', value: 'Sharing a number into equal groups' },
      { label: 'Fraction', value: 'A part of a whole, like a half or quarter' },
      { label: 'Decimal', value: 'A number with a point, like 3.5' },
      { label: 'Percentage', value: 'A part out of 100' },
      { label: 'Geometry', value: 'The study of shapes and angles' },
      { label: 'Symmetry', value: 'When one half mirrors the other' },
      { label: 'Estimate', value: 'A sensible guess at an answer' }
    ],
    banner: {
      title: 'Marvellous Maths',
      subtitle: 'Numbers, Shapes and Patterns',
      decorations: ['\u{2795} Plus', '\u{2796} Minus', '\u{2716} Times', '\u{2797} Divide'],
      message: 'Maths is everywhere! Let us discover numbers, shapes and patterns together.'
    },
    vocabulary: [
      { term: 'Sum', definition: 'The answer when you add numbers' },
      { term: 'Product', definition: 'The answer when you multiply' },
      { term: 'Quotient', definition: 'The answer when you divide' },
      { term: 'Even number', definition: 'A number divisible by 2' },
      { term: 'Odd number', definition: 'A number not divisible by 2' },
      { term: 'Array', definition: 'Items arranged in rows and columns' }
    ],
    questions: [
      { question: 'What is 7 x 8?', answer: '56' },
      { question: 'What is half of 50?', answer: '25' },
      { question: 'Name three 2D shapes', answer: 'Circle, triangle, square' },
      { question: 'What is a fraction?', answer: 'A part of a whole' },
      { question: 'How many sides does a hexagon have?', answer: 'Six' }
    ]
  },
  ENGLISH: {
    items: [
      { label: 'Noun', value: 'A word for a person, place or thing' },
      { label: 'Verb', value: 'A doing or action word' },
      { label: 'Adjective', value: 'A describing word' },
      { label: 'Adverb', value: 'A word that describes a verb' },
      { label: 'Sentence', value: 'A group of words that makes sense on its own' },
      { label: 'Full stop', value: 'A dot that ends a sentence' },
      { label: 'Capital letter', value: 'A big letter at the start of a sentence' },
      { label: 'Question mark', value: 'Used at the end of a question' },
      { label: 'Exclamation', value: 'Used to show surprise or strong feeling' },
      { label: 'Comma', value: 'Used to separate items in a list' }
    ],
    banner: {
      title: 'Wonderful Writing',
      subtitle: 'Words, Stories and Imagination',
      decorations: ['\u{270D} Writing', '\u{1F4D6} Reading', '\u{2712} Punctuation', '\u{1F4DD} Stories'],
      message: 'Let us explore the magic of words and discover the joy of reading and writing!'
    },
    vocabulary: [
      { term: 'Connective', definition: 'A word that joins ideas, like "and" or "because"' },
      { term: 'Synonym', definition: 'A word with the same meaning, like big and large' },
      { term: 'Antonym', definition: 'A word with the opposite meaning, like hot and cold' },
      { term: 'Paragraph', definition: 'A group of sentences about one idea' },
      { term: 'Metaphor', definition: 'Saying something is something else, like "the sun was gold"' },
      { term: 'Simile', definition: 'Comparing with "like" or "as", like "as brave as a lion"' }
    ],
    questions: [
      { question: 'What is a noun?', answer: 'A word for a person, place or thing' },
      { question: 'What is a verb?', answer: 'A doing or action word' },
      { question: 'What goes at the end of a question?', answer: 'A question mark' },
      { question: 'What is an adjective?', answer: 'A describing word' },
      { question: 'What is a simile?', answer: 'A comparison using "like" or "as"' }
    ]
  },
  SCIENCE: {
    items: [
      { label: 'Solid', value: 'A material that keeps its shape, like a rock' },
      { label: 'Liquid', value: 'A material that flows, like water' },
      { label: 'Gas', value: 'A material that spreads out, like air' },
      { label: 'Magnet', value: 'An object that attracts certain metals' },
      { label: 'Circuit', value: 'A path that electricity flows along' },
      { label: 'Force', value: 'A push or pull on an object' },
      { label: 'Gravity', value: 'The force that pulls things down to Earth' },
      { label: 'Friction', value: 'The force that slows things down when they rub' },
      { label: 'Evaporation', value: 'When a liquid turns into a gas' },
      { label: 'Condensation', value: 'When a gas turns into a liquid' }
    ],
    banner: {
      title: 'Super Scientists',
      subtitle: 'Discover, Investigate, Explore',
      decorations: ['\u{1F9EA} Experiments', '\u{1F52C} Microscopes', '\u{1F449} Magnets', '\u{1F4A1} Electricity'],
      message: 'Science is all around us! Let us ask questions, investigate and discover how things work.'
    },
    vocabulary: [
      { term: 'Hypothesis', definition: 'A prediction you can test' },
      { term: 'Fair test', definition: 'Changing one thing and keeping everything else the same' },
      { term: 'Observation', definition: 'Looking carefully and recording what you see' },
      { term: 'Conclusion', definition: 'What you learn from an experiment' },
      { term: 'Insulator', definition: 'A material that stops heat or electricity flowing' },
      { term: 'Conductor', definition: 'A material that lets heat or electricity flow' }
    ],
    questions: [
      { question: 'What are the three states of matter?', answer: 'Solid, liquid and gas' },
      { question: 'What is gravity?', answer: 'The force that pulls things towards Earth' },
      { question: 'What is a fair test?', answer: 'Changing one thing and keeping everything else the same' },
      { question: 'What does a magnet do?', answer: 'Attracts certain metals like iron' },
      { question: 'What is friction?', answer: 'A force that slows things down when they rub together' }
    ]
  },
  PHONICS: {
    items: [
      { label: 's', value: 'The first sound, like in sun' },
      { label: 'a', value: 'Like in apple' },
      { label: 't', value: 'Like in tap' },
      { label: 'p', value: 'Like in pig' },
      { label: 'i', value: 'Like in insect' },
      { label: 'n', value: 'Like in net' },
      { label: 'm', value: 'Like in man' },
      { label: 'd', value: 'Like in dog' },
      { label: 'g', value: 'Like in goat' },
      { label: 'o', value: 'Like in orange' }
    ],
    banner: {
      title: 'Phonics Fun',
      subtitle: 'Sounds, Words and Reading',
      decorations: ['\u{1F524} Sounds', '\u{1F4D7} Reading', '\u{1F4DD} Writing', '\u{1F50A} Listening'],
      message: 'Let us learn our sounds and unlock the magic of reading!'
    },
    vocabulary: [
      { term: 'Phoneme', definition: 'A single sound in a word' },
      { term: 'Grapheme', definition: 'A letter or letters that represent a sound' },
      { term: 'Blend', definition: 'Pushing sounds together to read a word' },
      { term: 'Segment', definition: 'Breaking a word into its sounds' },
      { term: 'Digraph', definition: 'Two letters making one sound, like "sh"' },
      { term: 'Trigraph', definition: 'Three letters making one sound, like "igh"' }
    ],
    questions: [
      { question: 'What is a phoneme?', answer: 'A single sound in a word' },
      { question: 'What is a digraph?', answer: 'Two letters that make one sound' },
      { question: 'What sound does "sh" make?', answer: 'The "sh" sound like in ship' },
      { question: 'What is blending?', answer: 'Pushing sounds together to read a word' },
      { question: 'What is segmenting?', answer: 'Breaking a word into its sounds' }
    ]
  },
  DINOSAURS: {
    items: [
      { label: 'T-Rex', value: 'A fierce meat-eating dinosaur with tiny arms' },
      { label: 'Triceratops', value: 'A plant-eater with three horns' },
      { label: 'Stegosaurus', value: 'A plant-eater with plates on its back' },
      { label: 'Velociraptor', value: 'A small fast meat-eater with sharp claws' },
      { label: 'Brachiosaurus', value: 'A huge long-necked plant-eater' },
      { label: 'Pterodactyl', value: 'A flying reptile from the time of dinosaurs' },
      { label: 'Fossil', value: 'The preserved remains of a dinosaur in rock' },
      { label: 'Herbivore', value: 'A dinosaur that only eats plants' },
      { label: 'Carnivore', value: 'A dinosaur that only eats meat' },
      { label: 'Omnivore', value: 'A dinosaur that eats both plants and meat' }
    ],
    banner: {
      title: 'Dinosaur Discovery',
      subtitle: 'Roar into the Prehistoric World',
      decorations: ['\u{1F995} T-Rex', '\u{1F996} Sauropod', '\u{1F9E0} Fossils', '\u{1FAB5} Eggs'],
      message: 'Stomp back in time and discover the amazing world of dinosaurs!'
    },
    vocabulary: [
      { term: 'Extinct', definition: 'When a species has all died out' },
      { term: 'Prehistoric', definition: 'The time before written history' },
      { term: 'Palaeontologist', definition: 'A scientist who studies fossils' },
      { term: 'Fossil', definition: 'The preserved remains of a living thing in rock' },
      { term: 'Era', definition: 'A long period of time in history' },
      { term: 'Predator', definition: 'An animal that hunts other animals for food' }
    ],
    questions: [
      { question: 'What does a carnivore eat?', answer: 'Meat only' },
      { question: 'What is a fossil?', answer: 'The preserved remains of a living thing in rock' },
      { question: 'Why did dinosaurs go extinct?', answer: 'A giant asteroid hit the Earth, changing the climate' },
      { question: 'Which dinosaur had three horns?', answer: 'Triceratops' },
      { question: 'What does a palaeontologist do?', answer: 'Studies fossils and prehistoric life' }
    ]
  },
  ANIMALS: {
    items: [
      { label: 'Mammal', value: 'An animal that has fur and feeds its young with milk' },
      { label: 'Bird', value: 'An animal with feathers and a beak that lays eggs' },
      { label: 'Reptile', value: 'A cold-blooded animal with scaly skin' },
      { label: 'Amphibian', value: 'An animal that lives on land and in water' },
      { label: 'Fish', value: 'An animal with fins and gills that lives in water' },
      { label: 'Insect', value: 'A small animal with six legs and three body parts' },
      { label: 'Carnivore', value: 'An animal that only eats meat' },
      { label: 'Herbivore', value: 'An animal that only eats plants' },
      { label: 'Omnivore', value: 'An animal that eats both plants and meat' },
      { label: 'Habitat', value: 'The natural home where an animal lives' }
    ],
    banner: {
      title: 'Amazing Animals',
      subtitle: 'Discover the Animal Kingdom',
      decorations: ['\u{1F431} Cats', '\u{1F436} Dogs', '\u{1F433} Elephants', '\u{1F98B} Butterflies'],
      message: 'From the tiniest insect to the biggest whale, let us explore the amazing animal kingdom!'
    },
    vocabulary: [
      { term: 'Vertebrate', definition: 'An animal with a backbone' },
      { term: 'Invertebrate', definition: 'An animal without a backbone' },
      { term: 'Life cycle', definition: 'The stages of life an animal goes through' },
      { term: 'Adaptation', definition: 'How animals change to suit their environment' },
      { term: 'Food chain', definition: 'Who eats whom in nature' },
      { term: 'Endangered', definition: 'A species at risk of dying out' }
    ],
    questions: [
      { question: 'What is a mammal?', answer: 'An animal with fur that feeds its young with milk' },
      { question: 'What is the difference between a carnivore and a herbivore?', answer: 'Carnivores eat meat, herbivores eat plants' },
      { question: 'What is a habitat?', answer: 'The natural home where an animal lives' },
      { question: 'Name three types of vertebrate', answer: 'Mammals, birds, reptiles' },
      { question: 'What is a food chain?', answer: 'Who eats whom in nature' }
    ]
  },
  OCEANS: {
    items: [
      { label: 'Shark', value: 'A large fish with sharp teeth that hunts in the sea' },
      { label: 'Dolphin', value: 'A clever mammal that lives in the ocean' },
      { label: 'Octopus', value: 'A sea creature with eight arms' },
      { label: 'Jellyfish', value: 'A soft sea creature that floats and can sting' },
      { label: 'Crab', value: 'A sea creature with a hard shell and claws' },
      { label: 'Seahorse', value: 'A tiny fish that swims upright' },
      { label: 'Whale', value: 'The largest mammal in the ocean' },
      { label: 'Coral', value: 'A colourful sea creature that builds reefs' },
      { label: 'Starfish', value: 'A sea creature with five arms' },
      { label: 'Seaweed', value: 'A plant that grows in the sea' }
    ],
    banner: {
      title: 'Under the Sea',
      subtitle: 'Dive into Ocean Discovery',
      decorations: ['\u{1F42C} Dolphins', '\u{1F419} Octopuses', '\u{1F41F} Fish', '\u{1F9D9} Mermaids'],
      message: 'Dive deep and discover the incredible creatures that live in our oceans!'
    },
    vocabulary: [
      { term: 'Tide', definition: 'The rising and falling of the sea' },
      { term: 'Current', definition: 'The movement of water in the ocean' },
      { term: 'Reef', definition: 'A rocky underwater structure made by coral' },
      { term: 'Plankton', definition: 'Tiny sea creatures that feed many ocean animals' },
      { term: 'Mammal', definition: 'A warm-blooded animal, like a dolphin or whale' },
      { term: 'Ecosystem', definition: 'All living and non-living things in an area' }
    ],
    questions: [
      { question: 'What is the largest animal in the ocean?', answer: 'The blue whale' },
      { question: 'How many arms does an octopus have?', answer: 'Eight' },
      { question: 'What is coral?', answer: 'A sea creature that builds rocky reefs' },
      { question: 'What is a tide?', answer: 'The rising and falling of the sea' },
      { question: 'Name three sea creatures', answer: 'Shark, dolphin, crab' }
    ]
  },
  WEATHER: {
    items: [
      { label: 'Sunny', value: 'When the sun is shining brightly' },
      { label: 'Rainy', value: 'When water falls from the clouds' },
      { label: 'Cloudy', value: 'When the sky is covered with clouds' },
      { label: 'Windy', value: 'When the air is moving strongly' },
      { label: 'Snowy', value: 'When snow falls from the sky' },
      { label: 'Stormy', value: 'When there is thunder and lightning' },
      { label: 'Foggy', value: 'When thick mist covers the ground' },
      { label: 'Rainbow', value: 'Colours in the sky after rain' },
      { label: 'Temperature', value: 'How hot or cold the air is' },
      { label: 'Forecast', value: 'A prediction of what the weather will be' }
    ],
    banner: {
      title: 'Wonderful Weather',
      subtitle: 'What Shall We Wear Today?',
      decorations: ['\u{2600}\u{FE0F} Sun', '\u{1F327}\u{FE0F} Rain', '\u{2744}\u{FE0F} Snow', '\u{1F308} Rainbow'],
      message: 'Whatever the weather, let us explore and learn about the sky above us!'
    },
    vocabulary: [
      { term: 'Evaporation', definition: 'When water turns into vapour' },
      { term: 'Condensation', definition: 'When vapour turns back into water' },
      { term: 'Precipitation', definition: 'Water that falls from the sky' },
      { term: 'Climate', definition: 'The usual weather in a place over a long time' },
      { term: 'Season', definition: 'A time of year with its own weather pattern' },
      { term: 'Meteorologist', definition: 'A scientist who studies and predicts weather' }
    ],
    questions: [
      { question: 'What causes a rainbow?', answer: 'Sunlight shining through raindrops' },
      { question: 'What is evaporation?', answer: 'When water turns into vapour in the heat' },
      { question: 'What are the four seasons?', answer: 'Spring, Summer, Autumn, Winter' },
      { question: 'What does a meteorologist do?', answer: 'Studies and predicts the weather' },
      { question: 'What is precipitation?', answer: 'Water that falls from the sky as rain or snow' }
    ]
  },
  HISTORY: {
    items: [
      { label: 'Pyramid', value: 'A giant stone tomb built by the Ancient Egyptians' },
      { label: 'Mummy', value: 'A preserved body wrapped in bandages' },
      { label: 'Pharaoh', value: 'The ruler of Ancient Egypt' },
      { label: 'Roman', value: 'A person from the Roman Empire' },
      { label: 'Castle', value: 'A fortified home for kings and lords' },
      { label: 'Knight', value: 'A warrior in armour who rode a horse' },
      { label: 'Viking', value: 'A seafaring warrior from Scandinavia' },
      { label: 'Tudor', value: 'A person from the Tudor period in England' },
      { label: 'Timeline', value: 'A line showing events in the order they happened' },
      { label: 'Artefact', value: 'An object made by people in the past' }
    ],
    banner: {
      title: 'History Hunters',
      subtitle: 'Discover the Past',
      decorations: ['\u{1F3DB} Castles', '\u{1F4D6} Scrolls', '\u{1F3F9} Knights', '\u{1F3EF} Pyramids'],
      message: 'Step back in time and discover the amazing stories of the past!'
    },
    vocabulary: [
      { term: 'Chronology', definition: 'The order of events in time' },
      { term: 'Century', definition: 'A period of 100 years' },
      { term: 'Decade', definition: 'A period of 10 years' },
      { term: 'Primary source', definition: 'Evidence from the time being studied' },
      { term: 'Secondary source', definition: 'Evidence created after the event' },
      { term: 'Empire', definition: 'A group of countries ruled by one leader' }
    ],
    questions: [
      { question: 'Who were the pharaohs?', answer: 'The rulers of Ancient Egypt' },
      { question: 'What is a timeline?', answer: 'A line showing events in the order they happened' },
      { question: 'What is a century?', answer: 'A period of 100 years' },
      { question: 'What did the Romans build in Britain?', answer: 'Roads, baths, and Hadrian\u2019s Wall' },
      { question: 'What is an artefact?', answer: 'An object made by people in the past' }
    ]
  },
  GEOGRAPHY: {
    items: [
      { label: 'Continent', value: 'A huge area of land on Earth' },
      { label: 'Ocean', value: 'A very large area of sea' },
      { label: 'River', value: 'A large stream of water flowing to the sea' },
      { label: 'Mountain', value: 'A very high piece of land' },
      { label: 'Volcano', value: 'A mountain that can erupt with lava' },
      { label: 'Desert', value: 'A dry area with very little rain' },
      { label: 'Forest', value: 'A large area covered with trees' },
      { label: 'City', value: 'A large town with many buildings and people' },
      { label: 'Country', value: 'A nation with its own government' },
      { label: 'Capital', value: 'The most important city in a country' }
    ],
    banner: {
      title: 'Our Wonderful World',
      subtitle: 'Explore the Planet',
      decorations: ['\u{1F30D} Earth', '\u{1F30B} Volcanoes', '\u{1F3D4} Mountains', '\u{1F30A} Oceans'],
      message: 'From mountains to oceans, let us explore our amazing planet together!'
    },
    vocabulary: [
      { term: 'Equator', definition: 'An imaginary line around the middle of the Earth' },
      { term: 'Hemisphere', definition: 'Half of the Earth, north or south' },
      { term: 'Climate', definition: 'The usual weather in a place over a long time' },
      { term: 'Population', definition: 'The number of people living in a place' },
      { term: 'Border', definition: 'The line between two countries' },
      { term: 'Compass', definition: 'A tool for finding direction' }
    ],
    questions: [
      { question: 'How many continents are there?', answer: 'Seven' },
      { question: 'What is the largest ocean?', answer: 'The Pacific Ocean' },
      { question: 'What is a volcano?', answer: 'A mountain that can erupt with lava' },
      { question: 'What is the equator?', answer: 'An imaginary line around the middle of the Earth' },
      { question: 'Name three countries in Europe', answer: 'France, Spain, Germany, Italy, UK' }
    ]
  },
  NATURE: {
    items: [
      { label: 'Oak Tree', value: 'A large tree that produces acorns' },
      { label: 'Pine Tree', value: 'An evergreen tree with needle-shaped leaves' },
      { label: 'Beech Tree', value: 'A tall tree with smooth grey bark' },
      { label: 'Ladybird', value: 'A small red beetle with black spots' },
      { label: 'Spider', value: 'A creature with eight legs that spins webs' },
      { label: 'Worm', value: 'A long soft creature that lives in the soil' },
      { label: 'Snail', value: 'A small creature with a spiral shell' },
      { label: 'Ant', value: 'A tiny insect that lives in large colonies' },
      { label: 'Bee', value: 'A flying insect that makes honey' },
      { label: 'Butterfly', value: 'An insect with colourful wings' }
    ],
    banner: {
      title: 'Nature Detectives',
      subtitle: 'Explore the Great Outdoors',
      decorations: ['\u{1F333} Trees', '\u{1F33B} Flowers', '\u{1F98B} Butterflies', '\u{1F41C} Ants'],
      message: 'Step outside and discover the amazing plants and creatures all around us!'
    },
    vocabulary: [
      { term: 'Deciduous', definition: 'Trees that lose their leaves in autumn' },
      { term: 'Evergreen', definition: 'Trees that keep their leaves all year' },
      { term: 'Minibeast', definition: 'A small creature like a spider or worm' },
      { term: 'Habitat', definition: 'The natural home of a living thing' },
      { term: 'Identify', definition: 'To work out what something is' },
      { term: 'Environment', definition: 'Everything around a living thing' }
    ],
    questions: [
      { question: 'What is the difference between deciduous and evergreen trees?', answer: 'Deciduous lose their leaves, evergreen keep them' },
      { question: 'What is a minibeast?', answer: 'A small creature like a spider, worm or ant' },
      { question: 'How many legs does a spider have?', answer: 'Eight' },
      { question: 'What do bees make?', answer: 'Honey' },
      { question: 'Name three things you might find in a woodland', answer: 'Trees, birds, minibeasts' }
    ]
  },
  ART: {
    items: [
      { label: 'Primary colours', value: 'Red, blue and yellow — you cannot make these' },
      { label: 'Secondary colours', value: 'Orange, green and purple — made by mixing' },
      { label: 'Line', value: 'A mark made by a pencil or brush' },
      { label: 'Shape', value: 'An area with a clear edge' },
      { label: 'Texture', value: 'How something feels or looks like it feels' },
      { label: 'Pattern', value: 'A design that repeats' },
      { label: 'Tone', value: 'How light or dark a colour is' },
      { label: 'Sculpture', value: 'A 3D piece of art' },
      { label: 'Portrait', value: 'A picture of a person' },
      { label: 'Landscape', value: 'A picture of the countryside' }
    ],
    banner: {
      title: 'Creative Corner',
      subtitle: 'Express Yourself Through Art',
      decorations: ['\u{1F3A8} Paint', '\u{270F}\u{FE0F} Pencils', '\u{1F58C}\u{FE0F} Brushes', '\u{1F4DD} Sketch'],
      message: 'Every child is an artist! Let us explore colour, shape and creativity together.'
    },
    vocabulary: [
      { term: 'Sketch', definition: 'A quick rough drawing' },
      { term: 'Palette', definition: 'A board for mixing colours' },
      { term: 'Collage', definition: 'Art made by sticking things together' },
      { term: 'Abstract', definition: 'Art that does not look like real things' },
      { term: 'Portrait', definition: 'A picture of a person' },
      { term: 'Still life', definition: 'A picture of objects that do not move' }
    ],
    questions: [
      { question: 'What are the three primary colours?', answer: 'Red, blue and yellow' },
      { question: 'What two colours make green?', answer: 'Blue and yellow' },
      { question: 'What is a portrait?', answer: 'A picture of a person' },
      { question: 'What is a sculpture?', answer: 'A 3D piece of art' },
      { question: 'What is texture in art?', answer: 'How something feels or looks like it feels' }
    ]
  },
  MUSIC: {
    items: [
      { label: 'Rhythm', value: 'The pattern of beats in music' },
      { label: 'Melody', value: 'The tune — the main series of notes' },
      { label: 'Tempo', value: 'How fast or slow the music is' },
      { label: 'Dynamics', value: 'How loud or quiet the music is' },
      { label: 'Pitch', value: 'How high or low a note is' },
      { label: 'Beat', value: 'The steady pulse of the music' },
      { label: 'Chorus', value: 'The part of a song that repeats' },
      { label: 'Verse', value: 'The part of a song that tells the story' },
      { label: 'Instrument', value: 'Something you use to make music' },
      { label: 'Orchestra', value: 'A large group of musicians playing together' }
    ],
    banner: {
      title: 'Making Music',
      subtitle: 'Listen, Play, Perform',
      decorations: ['\u{1F3B5} Notes', '\u{1F3B6} Music', '\u{1F3B8} Guitar', '\u{1F3B9} Piano'],
      message: 'Let us make some noise! Discover rhythm, melody and the joy of music.'
    },
    vocabulary: [
      { term: 'Composer', definition: 'A person who writes music' },
      { term: 'Conductor', definition: 'A person who leads an orchestra' },
      { term: 'Ensemble', definition: 'A group of musicians playing together' },
      { term: 'Genre', definition: 'A type of music, like pop or classical' },
      { term: 'Notation', definition: 'Written music using symbols' },
      { term: 'Percussion', definition: 'Instruments you hit or shake' }
    ],
    questions: [
      { question: 'What is rhythm?', answer: 'The pattern of beats in music' },
      { question: 'What is tempo?', answer: 'How fast or slow the music is' },
      { question: 'Name three instruments', answer: 'Piano, guitar, drums' },
      { question: 'What is a melody?', answer: 'The tune or main series of notes' },
      { question: 'What does a conductor do?', answer: 'Leads an orchestra' }
    ]
  },
  COMPUTING_LABELS: {
    items: [
      { label: 'Ctrl + C', value: 'Copy' },
      { label: 'Ctrl + V', value: 'Paste' },
      { label: 'Ctrl + Z', value: 'Undo' },
      { label: 'Ctrl + S', value: 'Save' },
      { label: 'Ctrl + P', value: 'Print' },
      { label: 'Ctrl + X', value: 'Cut' },
      { label: 'Ctrl + A', value: 'Select All' },
      { label: 'Ctrl + F', value: 'Find' },
      { label: 'Monitor', value: 'Displays information from the computer' },
      { label: 'Keyboard', value: 'Used to type text and commands' },
      { label: 'Algorithm', value: 'A set of step-by-step instructions' },
      { label: 'Debugging', value: 'Finding and fixing errors in code' }
    ],
    banner: {
      title: 'Computing Corner',
      subtitle: 'Code, Create, Connect',
      decorations: ['\u{1F4BB} Computers', '\u{2328}\u{FE0F} Keyboards', '\u{1F5A5}\u{FE0F} Screens', '\u{1F4BE} Save'],
      message: 'Welcome to the computing corner! Let us explore technology and learn to code.'
    },
    vocabulary: [
      { term: 'Algorithm', definition: 'A set of step-by-step instructions' },
      { term: 'Debugging', definition: 'Finding and fixing errors in code' },
      { term: 'Variable', definition: 'A container for storing data' },
      { term: 'Loop', definition: 'Repeating a set of instructions' },
      { term: 'Function', definition: 'A reusable block of code' },
      { term: 'Network', definition: 'Connected computers sharing data' }
    ],
    questions: [
      { question: 'What is an algorithm?', answer: 'A set of step-by-step instructions' },
      { question: 'What does Ctrl+C do?', answer: 'Copies the selected text' },
      { question: 'What is debugging?', answer: 'Finding and fixing errors in code' },
      { question: 'What is a variable in coding?', answer: 'A container for storing data' },
      { question: 'Name three parts of a computer', answer: 'Monitor, keyboard, mouse' }
    ]
  },
  DISPLAY_RESOURCES: {
    items: [
      { label: 'Welcome', value: 'A friendly greeting for your classroom' },
      { label: 'Birthdays', value: 'Celebrate every child\u2019s special day' },
      { label: 'Calendar', value: 'Track the days, months and seasons' },
      { label: 'Weather', value: 'A daily weather display chart' },
      { label: 'Number line', value: 'A visual maths aid for counting' },
      { label: 'Alphabet', value: 'A colourful A to Z display' },
      { label: 'Rules', value: 'Classroom expectations and values' },
      { label: 'Star of the Week', value: 'Celebrate achievements and effort' },
      { label: 'Learning Objectives', value: 'What we are learning today' },
      { label: 'Word Wall', value: 'Key vocabulary for the topic' }
    ],
    banner: {
      title: 'Welcome to Our Class',
      subtitle: 'Where Learning is an Adventure',
      decorations: ['\u{2B50} Stars', '\u{1F308} Rainbow', '\u{1F4DA} Books', '\u{270F}\u{FE0F} Pencils'],
      message: 'Welcome to our wonderful classroom! Let us learn, grow and have fun together.'
    },
    vocabulary: [
      { term: 'Display', definition: 'A visual board showing information' },
      { term: 'Interactive', definition: 'Something children can touch and use' },
      { term: 'Visual aid', definition: 'A picture or chart that helps learning' },
      { term: 'Label', definition: 'A word that names something' },
      { term: 'Banner', definition: 'A long sign with a heading' },
      { term: 'Poster', definition: 'A large printed picture or notice' }
    ],
    questions: [
      { question: 'What is a display used for?', answer: 'To show information and support learning' },
      { question: 'What should a welcome display include?', answer: 'A greeting, children\u2019s names, and colourful decorations' },
      { question: 'Why use a word wall?', answer: 'To help children see and remember key vocabulary' },
      { question: 'What is a visual aid?', answer: 'A picture or chart that helps learning' },
      { question: 'Name three types of classroom display', answer: 'Welcome, birthdays, word wall' }
    ]
  }
};

export function generateResource(category, type, description) {
  const kb = knowledgeBase[category] || knowledgeBase.DISPLAY_RESOURCES;
  const desc = description || '';

  // Generate based on type
  if (type === 'BANNER') {
    return {
      title: kb.banner.title,
      description: desc || `A colourful ${category.toLowerCase().replace('_', ' ')} banner for classroom displays.`,
      content: kb.banner
    };
  }

  if (type === 'LABELS') {
    return {
      title: `${category.toLowerCase().replace('_', ' ')} labels`.replace(/^\w/, c => c.toUpperCase()),
      description: desc || `Printable ${category.toLowerCase().replace('_', ' ')} labels for displays and activities.`,
      content: { items: kb.items }
    };
  }

  if (type === 'DISPLAY') {
    return {
      title: `${category.toLowerCase().replace('_', ' ')} display pack`.replace(/^\w/, c => c.toUpperCase()),
      description: desc || `A comprehensive ${category.toLowerCase().replace('_', ' ')} display pack with facts and labels.`,
      content: { items: kb.items }
    };
  }

  if (type === 'FLASHCARDS') {
    return {
      title: `${category.toLowerCase().replace('_', ' ')} flashcards`.replace(/^\w/, c => c.toUpperCase()),
      description: desc || `Vocabulary flashcards for ${category.toLowerCase().replace('_', ' ')}.`,
      content: { items: kb.vocabulary.map(v => ({ label: v.term, value: v.definition })) }
    };
  }

  if (type === 'WORKSHEET') {
    return {
      title: `${category.toLowerCase().replace('_', ' ')} worksheet`.replace(/^\w/, c => c.toUpperCase()),
      description: desc || `A ${category.toLowerCase().replace('_', ' ')} worksheet with questions and answers.`,
      content: { items: kb.questions.map(q => ({ label: q.question, value: q.answer })) }
    };
  }

  if (type === 'POSTER') {
    return {
      title: `${category.toLowerCase().replace('_', ' ')} poster`.replace(/^\w/, c => c.toUpperCase()),
      description: desc || `An informative ${category.toLowerCase().replace('_', ' ')} poster.`,
      content: { items: kb.items.slice(0, 6) }
    };
  }

  // Default: labels
  return {
    title: `${category.toLowerCase().replace('_', ' ')} resource`.replace(/^\w/, c => c.toUpperCase()),
    description: desc || `A ${category.toLowerCase().replace('_', ' ')} teaching resource.`,
    content: { items: kb.items }
  };
}

export function listCategories() {
  return Object.keys(knowledgeBase);
}
