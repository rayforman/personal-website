import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

const YouTubeEmbed = ({ videoId, title }) => (
  <div className="max-w-3xl mx-auto">
    <div className="relative w-full mb-6" style={{ paddingBottom: '56.25%' }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
);

const AnimationPost = ({ title, excerpt, videoId }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    {videoId && <YouTubeEmbed videoId={videoId} title={title} />}
    <p className="text-gray-300">{excerpt}</p>
  </div>
);

const AnimatedFilmEntry = ({ rank, title, studio, image, description }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-2/3">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-4xl font-bold text-gray-500">#{rank}</span>
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <div className="mb-4">
          <span className="text-lg text-gray-300 mb-6">{studio}</span>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
      <div className="w-full md:w-1/3">
        <div className="relative aspect-video w-full">
          <img
            src={image || "/api/placeholder/400/225"}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
 );

const Animation = () => {
  const posts = [
    {
      title: "A Tribute to Animation",
      excerpt: '"Animation is not a genre. A superhero movie is not a genre. They are movies! They can be musicals, they can be dramas, they can be comedies, they can be adventures." - Brad Bird',
      videoId: "jzGwTHniLqk"
    }
    // add more videos here
  ];

  const films = [
    {
      rank: 1,
      title: "Ratatouille",
      studio: "Pixar",
      image: "/ratatouille.jpg",
      description: "Your film description here..."
    },
    {
      rank: 2,
      title: "Kung Fu Panda",
      studio: "Dreamworks",
      image: "/kungfupanda.png",
      description: "Your film description here..."
    },
    {
      rank: 3,
      title: "How to Train Your Dragon",
      studio: "Dreamworks",
      image: "/httyd.png",
      description: "Your film description here..."
    },
    {
      rank: 4,
      title: "The Lion King",
      studio: "Disney",
      image: "/lionking.png",
      description: "Your film description here..."
    },
    {
      rank: 5,
      title: "Coco",
      studio: "Pixar",
      image: "/coco.png",
      description: "Your film description here..."
    },
    {
      rank: 6,
      title: "Spider-Man: Into the Spider-Verse",
      studio: "Sony Pictures Animation",
      image: "/spiderverse.png",
      description: "Your film description here..."
    },
    {
      rank: 7,
      title: "Soul",
      studio: "Pixar",
      image: "/soul.png",
      description: "Your film description here..."
    },
    {
      rank: 8,
      title: "Spirited Away",
      studio: "Studio Ghibli",
      image: "/spiritedaway.png",
      description: "Your film description here..."
    },
    {
      rank: 9,
      title: "Cars",
      studio: "Pixar",
      image: "/cars.png",
      description: "Your film description here..."
    },
    {
      rank: 10,
      title: "The Mitchells vs. the Machines",
      studio: "Sony Pictures Animation",
      image: "/mitchells.png",
      description: "Your film description here..."
    },
    // Add more films here
  ];

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Animation</h1>
          <p className="text-lg text-gray-300 mb-6">
            My favorite artisitic medium. I grew up believing that animated movies were for kids. But as an adult, I've grown to appreciate animation for what it is: artwork in motion. If a painting is a photograph, an animation is a movie. And like paintings, the limit of an animation is the imagination. 
          </p>
          <p className="text-lg text-gray-300 mb-6">
            For me, no art form can evoke more emotion than animation. Each frame is curated so carefully as to create the precise reaction desired in the viewer. In an excellent animated film, any frame chosen randomly could be a piece of art on its own. In conjunction with strong voice acting and an immersive soundtrack, what you're left with is an experience in a league of its own. 
          </p>
        </div>
        {posts.length === 0 ? (
          <p className="text-gray-300 text-center">Animation posts coming soon!</p>
        ) : (
          posts.map((post, index) => (
            <AnimationPost key={index} {...post} />
          ))
        )}
        <p className="text-lg text-gray-300 mb-4">&nbsp;</p>
        <h1 className="text-4xl font-bold mb-4">My List</h1>
        <p className="text-lg text-gray-300 mb-6">
          My lifelong dream is to make animation short films that immortalize my life philosophy and inspire people to live their best life. Until then, here is my personal ordered list of favorite animated films, limited to one per series. 
        </p>
        <div className="space-y-8">
          {films.map((film) => (
            <AnimatedFilmEntry
              key={film.rank}
              rank={film.rank}
              title={film.title}
              studio={film.studio}
              image={film.image}
              description={film.description}
            />
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Animation;