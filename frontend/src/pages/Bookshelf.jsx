import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';

const BookCard = ({ title, author, description, link, image, tags }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img 
      src={image} 
      alt={`${title} cover`} 
      className="h-80 object-contain mb-4 rounded-md mx-auto" 
      style={{ objectFit: 'cover', height: '300px', width: 'auto' }}
    />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 mb-2">by {author}</p>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">{tag}</span>
      ))}
    </div>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
      Learn More →
    </a>
  </div>
);


const Bookshelf = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const books = [
    {
      title: "Mindset: The New Psychology of Success",
      author: "Carol S. Dweck",
      description: "A transformative book on the power of mindset in achieving success.",
      link: "https://www.amazon.com/Mindset-Psychology-Carol-S-Dweck/dp/0345472322",
      image: "/mindset.png", // Updated image path
      tags: ["Psychology", "Personal Development"]
    },
    {
      title: "How to Make Friends & Influence People",
      author: "Dale Carnegie",
      description: "A timeless guide to building relationships and influencing others.",
      link: "https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034",
      image: "/how-to-win-friends.png", // Updated image path
      tags: ["Communication", "Personal Development"]
    },
    {
      title: "Small Journey into the World of Quanta (French)",
      author: "Etienne Klein",
      description: "An exploration of the quantum world through the lens of physics.",
      link: "https://www.amazon.fr/Petit-voyage-dans-monde-quanta/dp/2081227010",
      image: "/petit-voyage.png", // Updated image path
      tags: ["Philosophy", "Science", "Physics"]
    },
    {
      title: "Meditations",
      author: "René Descartes",
      description: "Philosophical meditations on the nature of existence and reality.",
      link: "https://www.amazon.com/Descartes-Meditations-Philosophy-Selections-Objections/dp/0521558182",
      image: "/meditations.png", // Updated image path
      tags: ["Philosophy", "Classics"]
    },
    {
      title: "The Spatial Web",
      author: "Gabriel René & Dan Mapes",
      description: "A visionary book on the future of the internet and digital spaces.",
      link: "https://www.amazon.com/Spatial-Web-connect-machines-transform/dp/0578562960",
      image: "/spatial-web.png", // Updated image path
      tags: ["Technology", "Futurism","AI", "Web3.0"]
    },
    {
      title: "The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness",
      author: "Morgan Housel",
      description: "An insightful look into the psychology behind our financial decisions, revealing how money moves us in unexpected ways.",
      link: "https://a.co/d/7WN3b6T",
      image: "/psychology_of_money.jpg",
      tags: ["Finance", "Psychology"]
    },
    {
      title: "Neurosys",
      author: "Dr. Michel F. Sultan",
      description: "A gripping thriller that dives into the depths of cyber warfare, global conspiracies, and a super-intelligent synthetic brain under attack.",
      link: "https://a.co/d/fIt7eOS",
      image: "/neurosys.jpg",
      tags: ["Thriller", "Futurism","Technology"]
    },
    {
      title: "Meditations (French)",
      author: "Marcus Aurelius",
      description: "A timeless collection of personal reflections by the Roman Emperor, offering insights into leadership, resilience, and the pursuit of a virtuous life.",
      link: "https://a.co/d/eyYX2MI",
      image: "/meditations_aurelius.jpg",
      tags: ["Philosophy", "Classics"]
    },
    {
      title: "Screw It, Let's Do It: Lessons in Life",
      author: "Richard Branson",
      description: "An inspiring guide from the maverick entrepreneur, sharing his lessons on business, adventure, and embracing challenges with a bold mindset.",
      link: "https://a.co/d/54PHOtf",
      image: "/screw_it_lets_do_it.jpg",
      tags: ["Business", "Entrepreneurship"]
    },
    {
      title: "The Little Prince (French)",
      author: "Antoine de Saint-Exupéry",
      description: "A beloved tale that blends whimsy and profound wisdom, exploring themes of friendship, love, and the essence of human nature.",
      link: "https://a.co/d/hYVf0cu",
      image: "/the_little_prince.jpg",
      tags: ["Classics", "Philosophy", "French Literature"]
    },
    {
      title: "The Princess de Clèves (French)",
      author: "Madame de La Fayette",
      description: "A classic French novel set in the royal court, exploring themes of love, honor, and the complexities of human emotions.",
      link: "https://a.co/d/i2zlsUb",
      image: "/princess_de_cleves.jpg",
      tags: ["Classics", "French Literature", "Romance"]
    },
    {
      title: "Murder on the Orient Express (French)",
      author: "Agatha Christie",
      description: "A classic whodunit mystery that unravels aboard a luxurious train, featuring the brilliant detective Hercule Poirot.",
      link: "https://a.co/d/7KiT5G8",
      image: "/murder_on_the_orient_express.jpg",
      tags: ["Mystery", "Classics", "Crime"]
    },
    {
      title: "Socratic Dialogues: Euthyphro, Apology, Crito, Meno, Phaedo (French)",
      author: "Plato",
      description: "A collection of dialogues depicting Socrates' defense of his philosophy, his ethical principles, and his final days.",
      link: "https://a.co/d/bYnWLFj",
      image: "/socrates_apology.jpg",
      tags: ["Philosophy", "Classics", "Ethics"]
    },
    {
      title: "Essays (French)",
      author: "Michel de Montaigne",
      description: "An influential collection of personal reflections on human nature, society, and the self, pioneering the essay as a literary form.",
      link: "https://a.co/d/9PYTUQW",
      image: "/essays_montaigne.jpg",
      tags: ["Philosophy", "Classics", "French Literature"]
    },
    {
      title: "Les Contemplations (French)",
      author: "Victor Hugo",
      description: "A deeply personal collection of poetry reflecting on themes of love, loss, and the human condition, capturing Hugo's profound vision.",
      link: "https://a.co/d/0YO8mTF",
      image: "/les_contemplations.jpg",
      tags: ["Poetry", "Classics", "French Literature"]
    },
    {
      title: "Phaedra (French)",
      author: "Jean Racine",
      description: "A powerful French tragedy exploring the destructive power of forbidden love and the complexities of human passion.",
      link: "https://a.co/d/94ERWso",
      image: "/phedre.jpg",
      tags: ["Drama", "Classics", "French Literature"]
    },
    {
      title: "Antigone (French)",
      author: "Sophocles",
      description: "A timeless Greek tragedy that examines the conflict between personal duty and the laws of the state, questioning moral choices.",
      link: "https://a.co/d/cWJAMWV",
      image: "/antigone.jpg",
      tags: ["Drama", "Classics", "Greek Literature"]
    },
    {
      title: "Incendies (French)",
      author: "Wajdi Mouawad",
      description: "A heart-wrenching play that journeys through war, identity, and the unbreakable bonds of family, unearthing hidden pasts.",
      link: "https://a.co/d/0ykTnt6",
      image: "/incendies.jpg",
      tags: ["Drama", "Modern Literature", "War"]
    },
    {
      title: "Pierre and Jean (French)",
      author: "Guy de Maupassant",
      description: "A compelling novella exploring themes of jealousy, family dynamics, and the complexity of human emotions.",
      link: "https://a.co/d/5eoV0Nf",
      image: "/pierre_and_jean.jpg",
      tags: ["Classics", "French Literature", "Novel"]
    },
    {
      title: "A Woman’s Life (French)",
      author: "Guy de Maupassant",
      description: "A poignant story of a young woman's struggles, capturing the disillusionment and hardships of life in 19th-century France.",
      link: "https://a.co/d/c30YWOV",
      image: "/une_vie.jpg",
      tags: ["Classics", "French Literature", "Novel"]
    },
    {
      title: "L'Ingénu (French)",
      author: "Voltaire",
      description: "A satirical tale that critiques society, religion, and human folly through the eyes of a naive young man discovering civilization.",
      link: "https://a.co/d/cmkyX3S",
      image: "/lingenu.jpg",
      tags: ["Philosophy", "Satire", "French Literature"]
    },
    {
      title: "Intruder (French)",
      author: "Maurice Maeterlinck",
      description: "A haunting play that delves into the unseen forces of fate, fear, and the supernatural, shrouded in an atmosphere of suspense.",
      link: "https://a.co/d/9me2e7s",
      image: "/intruder.jpg",
      tags: ["Drama", "Symbolism", "Belgian Literature"]
    },
    {
      title: "Happy Days (French)",
      author: "Samuel Beckett",
      description: "An absurdist play that captures the human condition, resilience, and existential despair through Beckett’s unique minimalist style.",
      link: "https://a.co/d/9tkVrru",
      image: "/happy_days.jpg",
      tags: ["Drama", "Absurdism", "Modern Literature"]
    },
    {
      title: "Marx et la poupée (French)",
      author: "Maryam Madjidi",
      description: "A poignant memoir blending personal history with cultural identity, capturing the author's journey from Iran to France and the clash of two worlds.",
      link: "https://a.co/d/gaZxOCd",
      image: "/marx_et_la_poupee.jpg",
      tags: ["Memoir", "Cultural Identity", "French Literature"]
    },
    {
      title: "AI 2041: Ten Visions for Our Future",
      author: "Kai-Fu Lee & Chen Qiufan",
      description: "A visionary exploration of how AI will shape the next two decades, blending sci-fi storytelling with insightful analysis of technological advancements.",
      link: "https://a.co/d/4Lhn9c6",
      image: "/ai_2041.jpg",
      tags: ["Technology", "Futurism", "AI"]
    },
    // Add more books as needed
  ];

  const allTags = [...new Set(books.flatMap(book => book.tags))];

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredBooks = selectedTags.length === 0 
    ? books 
    : books.filter(book => selectedTags.some(tag => book.tags.includes(tag)));

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">My Bookshelf</h1>
        <div className="mb-4">
          {allTags.map(tag => (
            <button 
              key={tag} 
              onClick={() => toggleTag(tag)} 
              className={`mr-2 mb-2 px-3 py-1 rounded-full ${selectedTags.includes(tag) ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
            >
              {tag}
            </button>
          ))}
        </div>
        <p className="text-gray-400 mb-4">Displaying {filteredBooks.length} of {books.length} books</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Bookshelf;
