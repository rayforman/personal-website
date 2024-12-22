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
      title: "Greenlights",
      author: "Matthew McConaughey",
      description: "An unconventional memoir filled with raucous stories, outlaw wisdom, and lessons learned the hard way about living with greater satisfaction.",
      link: "https://www.amazon.com/Greenlights-Matthew-McConaughey/dp/0593139135?crid=15BU12F9FEXR3&dib=eyJ2IjoiMSJ9.BWiy_Rf_Yec1rhqYEPECNT8pgzUXbtX2BZX7GjLMqy5BK9_8CDAv8gjXZhU9UEmDR1WsFlNe1fINtODdRgX-CAqQABOIJCA-0-XuYxlsGHFIlzxTJ0YL9eaL2o_mpkR-WMWKifZCMvqRThd1ppZ1aL-rJ9DcfYDjFVGoIXPm7E7wBHp0O59ooDMpKqHq8M6q7axMct8BSH6KtlE-4X6NEJMUaCqk1oMnJ2t_oM9b4Wc.ov04SPi8wjSZfOdpZ_1ybfpoYDrmhkuXbT0R82ljaNo&dib_tag=se&keywords=greenlights&qid=1734860352&sprefix=greenlight%2Caps%2C116&sr=8-1",
      image: "/greenlights.png",
      tags: ["Personal Development", "Gratitude", "Philosophy", "Self-Discovery"]
    },
    {
      title: "How to Win Friends & Influence People",
      author: "Dale Carnegie",
      description: "A timeless guide to building relationships and influencing others.",
      link: "https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034",
      image: "/how-to-win-friends.png",
      tags: ["Personal Development", "Communication", "Relationships", "Leadership"]
    },
    {
      title: "King, Warrior, Magician, Lover",
      author: "Robert Moore & Douglas Gillette",
      description: "A guide to positively harnessing the four archetypes of the mature masculine in the modern age.",
      link: "https://www.amazon.com/King-Warrior-Magician-Lover-Rediscovering/dp/0062506064",
      image: "/king-warrior.png",
      tags: ["Personal Development", "Healthy Masculinity", "Introspection", "Self Improvement"]
    },
    {
      title: "The Four Agreements",
      author: "Don Miguel Ruiz",
      description: "A practical guide to personal freedom that reveals the source of self-limiting beliefs.",
      link: "https://www.amazon.com/Four-Agreements-Practical-Personal-Freedom/dp/1878424319",
      image: "/four_agreements.png",
      tags: ["Personal Development", "Inner-Peace", "Introspection"]
    },
    {
      title: "Hidden Potential",
      author: "Adam Grantz",
      description: "A science-based approach to achieving greater success and unlocking your full potential.",
      link: "https://www.amazon.com/Hidden-Potential-Science-Achieving-Greater/dp/0593653149?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.VNA70kI6SrWtjZj6ammdpf_7HRoEHdy8bRkKOa02j9kU8d6P7oVc7sR6E23qteY8iHAoc5lNmCv4KP71xfbweyf54_nMbEd4GmtWyMdTa3SN98XE_gpP0enokWHBcvkuePBg-oXn_ovVhuDbv53M5EdZM6bFUMQqfgDZF0cDpJmQWSux3ZjrK73IdoGs3ovIj-lO-d5jcMXvGCkhrnno2Z4sQCI4u_l-1NwQQ0xCtxE.IhMUa_m-bd3FevSY5mB2CfsW9Y1xtDqHeJi8PNaqnO8&qid=1734860971&sr=1-1",
      image: "/hidden-potential.png",
      tags: ["Personal Development", "Self Realization"]
    },
    {
      title: "Meditations",
      author: "Marcus Aurelius",
      description: "A series of personal writings by the Roman Emperor and philosopher king, providing a window into his philosophy on life.",
      link: "https://www.amazon.com/Meditations-Marcus-Aurelius/dp/1503280462",
      image: "/meditations_aurelius.jpg",
      tags: ["Personal Development", "Leadership", "Philosophy", "Stoicism", "Introspection"]
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      description: "A simple guide to breaking bad habits and adopting good ones.",
      link: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?crid=WEXZ9LZEBCIN&dib=eyJ2IjoiMSJ9.xM2BHrYsqyJHM0kyPlLqc-wG9fYUkRW_VvUzSYeB1rz9hcBsE2Qxj09KsdhiMPNZuuMMdlsFxF74l00dF3mNIEUmC5BpNGDx9u0ORiBra-_wXr459_oYa05l5UZt9gpPyVs2xm2wXmAuB85i9YQCEdIYN_JTeRkwNcfqgZaKmG5KvBVJOEkZsXPPNw9vqSvdHU3Ap03CPBUCKzj8v1Crr8uILxZzf_yHlyc0jIq0P08.JCM5oNtQLjBlqCqEyThehHG_TdS4MurL5lJsj7WAVrg&dib_tag=se&keywords=atomic+habits&qid=1734861177&s=books&sprefix=atomi%2Cstripbooks%2C106&sr=1-1",
      image: "/atomic-habits.png",
      tags: ["Personal Development", "Daily Improvement", "Lifestyle Design"]
    },
    {
      title: "The Socrates Express",
      author: "Eric Weiner",
      description: "A highlight reel of philosophical wisdom from around the world, as told through the lens of a train journey.",
      link: "https://www.amazon.com/Socrates-Express-Search-Lessons-Philosophers/dp/1501129015?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.XOp2qa3qRG_76zTluUKk93dVE_9qYXiZi8w8ni_SjuTwGbHeUAdaPBrFP0lwh49om74tgkZRax0LUffi4jNHeUN36v8eOOSoH7xNIO3heRaPnKHHbV7aJnlg705LF0ccZYLv9by_kg3X4pTpf2gwMKe12BciI7I7OFRl4LCJ29rHcJ8Ah1j1MvQ_doVJPkNPdwxMXzA_yHsEe2rWdaCiFblH9lAVnILu-BON0MuGTJI.kjof6aKHRKthuMtuIDmmimAJAUGrHYjHTDTzyUcfwC8&qid=1734866018&sr=8-1",
      image: "/socrates-express.png",
      tags: ["Philosophy", "Travel", "Self-Discovery"]
    },
    {
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      description: "The history of the universe, from the big bang to black holes.",
      link: "https://www.amazon.com/Brief-History-Time-Stephen-Hawking/dp/0553380168",
      image: "/brief-history.png",
      tags: ["Physics", "Astrophysics", "Big History", "Philosophy"]
    },
    {
      title: "The Little Book of String Theory",
      author: "Steven S. Gubser",
      description: "A concise introduction to string theory, one of the most exciting areas of theoretical physics.",
      link: "https://www.amazon.com/Little-String-Theory-Science-Essentials/dp/0691142890?crid=17IL2X9Q33JQI&dib=eyJ2IjoiMSJ9.6RCP--DmGqGDlyN8-vnbRE_UQupMYgvFChD8ZLTzbaGgnKh3Za71pzg96Aid68E9caFtpeECzT2Otxyb8bGnXJqdsN5FQ7Zi9mHT0O95lBW8ezAlSNw17vW-_0Iavo-rXDczJ3jbjgjgvoXzR12W981AfaDJNbBv91R4Ks7gu4vptnLm6OOHErm4WeYVMLgH0dPptwUgIMIsI7D3egkbR0ra4hOQA2cg7cxbx3H8rus.Gm_ApK2ZMO_oX88SVb5gLABqNOBFaZQPsDAominIkiY&dib_tag=se&keywords=the+little+book+of+string+theory&qid=1734866469&s=books&sprefix=the+little+book+of+string+theory%2Cstripbooks%2C98&sr=1-1",
      image: "/string-theory.png",
      tags: ["Physics", "Theoretical Physics", "Mathematics"]
    },
    {
      title: "The Grand Design",
      author: "Stephen Hawking",
      description: "A look at the architecture of the universe, the role of the laws of physics, and the future of cosmology.",
      link: "https://www.amazon.com/Grand-Design-Stephen-Hawking/dp/055338466X?crid=YEYN7U2SN8MP&dib=eyJ2IjoiMSJ9.EcY9TH7jC_Z7JHBzqGyHk6uswMLvkyQnao_j9YT40IyB1komEKbWYa2ds2wfqtyU_-fxOcFlKh1O9TbbDgErQ4dCbAvUvBtvRcgu0Nr4RF52kYbkjbPszblnuR6hOoGR0uDYR9wWwQE1ZtdwmXvFdlZkxWOoGH9RlM0QFn9yNnHL8Wch4G5EcqkwutNwIBwJ8TSkfVa33UPvZTT174HtH9xUsNc_P6gx1yVtVFhk2b8.CT-fFoOGAUmkOZOSrfNCe-vwVXGa78IT8HSFKm21UgM&dib_tag=se&keywords=the+grand+design&qid=1734866658&s=books&sprefix=the+grand+design%2Cstripbooks%2C113&sr=1-1",
      image: "/grand-design.png",
      tags: ["Physics", "Astrophysics", "Big History", "Philosophy"]
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
