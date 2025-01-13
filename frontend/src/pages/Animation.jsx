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
      description: "My favorite movie of all time, animated or otherwise. This movie speaks to me on a level so personal I reserve watching it for momentous occasions. As someone who used to cook professionally and now as a hobby, this movie holds a special place in my heart. This visually stunning, musically rich, and emotionally resonant film has, more than any other artwork, inspired me to chase my dreams. Because after all, anyone can cook."
    },
    {
      rank: 2,
      title: "Spider-Man: Into the Spider-Verse",
      studio: "Sony Pictures Animation",
      image: "/spiderverse.png",
      description: "The bold 2018 film that redefined high-budget animation and inspired studios around the world to explore stylized animation at scale. The most visually adventurous feature film I'd scene until its sequel in 2023 which further pushed the envelope with a whole array of additional animation styles to represent various multiverses. This film, better than any other, puts on display why animation is artistically unique and boundless, and has since inspired so many artists to do the same."
    },
    {
      rank: 3,
      title: "Kung Fu Panda",
      studio: "Dreamworks",
      image: "/kungfupanda.png",
      description: "This movie is called Kung Fu Panda, likely the most ridiculous name on this list. Yet it manages to be an emotionally and philosophically heavy masterpiece that explores the challenges of identity, prejudice, and becoming who one's meant to be. And that exactly is the point. The greatest warrior in China doesn't have to be an archetypal badass like Tai Lung, just like the greatest person at anything doesn't have to be some one-in-a-million prodigy. It can be you, whoever you are! Once you realize that there's no secret ingredient to greatness, you have everything you need to become the person you always wanted to be."
    },
    {
      rank: 4,
      title: "How to Train Your Dragon",
      studio: "Dreamworks",
      image: "/httyd.png",
      description: "Another silly name that you'd never expect to be hiding a great story. This is a beautiful film about a son who goes against his father's expectations to be who he truly is. The father-son dynamic in this one is deeply personal to me and brings tears to my eyes every time. Also, John Powell hits it out of the park with some of the best musical motifs I've heard to date."
    },
    {
      rank: 5,
      title: "The Lion King",
      studio: "Disney",
      image: "/lionking.png",
      description: "An incredibly famous movie that gets plenty of hype that I always skeptical of. After rewatching it, I have no doubt in my mind that this is one of the best movies ever made. From the intro sequence, to the beautiful musical themes, to the full-circle ending, this movie deserves every ounce of love it gets from the media."
    },
    {
      rank: 6,
      title: "Coco",
      studio: "Pixar",
      image: "/coco.png",
      description: "A visual masterpiece that exhibits color in a way I've never seen before. Music is central to Coco as well as the Mexican culture it explores. The characters in this movie are well developed, the plot is largely unpredictable, and each payoff feels earned. This movie is what you get when good writing, meets great music and excellent animation."
    },
    {
      rank: 7,
      title: "Soul",
      studio: "Pixar",
      image: "/soul.png",
      description: "Soul is a very unique movie that takes on a bold goal: to tackle the meaning of life. This is an imperfect movie that at times can be too goofy for me, but at other times can connect with me at a spiritual level. What is it to be human? The scenes where 'Epiphany' plays on the score and when Joe jumps with 22 to Earth choke me up in a way I can't explain."
    },
    {
      rank: 8,
      title: "Spirited Away",
      studio: "Studio Ghibli",
      image: "/spiritedaway.png",
      description: "Spirited Away is fundamentally different from everything else on this list, as it's one of Hayao Miyazaki's hand drawn masterpieces that exhibits the artistic beauty of 2D animation that holds up to this day. A coming of age story full of mystic wonder and visual glory, this movie feels like pure magic. The otherworldly soundtrack transports you to another plane where things are not what they seem..."
    },
    {
      rank: 9,
      title: "Cars",
      studio: "Pixar",
      image: "/cars.png",
      description: "To me, this movie is a lesson to the young and ambitious to respect what came before you, both people and places. It's easy to become self-absorbed in the journey to greatness, forgetting all of those that walked so you could run. A history lesson, a humility lesson, and perhaps a commentary on what really matters in life, Cars holds a special place in my heart, right next to my love for country music."
    },
    {
      rank: 10,
      title: "The Mitchells vs. the Machines",
      studio: "Sony Pictures Animation",
      image: "/mitchells.png",
      description: "My latest addition to this list, the Mitchells vs. the Machines recently surprised me as a silly yet highly relatable family movie with a strong emotional core. It did a great job of humanizing both the daughter looking to become her own person and the father struggling to let go of the family unit he spent years building. It's a movie I relate deeply with and I hope it comes to get the recognition it deserves."
    },
    // Add more films here
  ];

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Animation</h1>
          <p className="text-lg text-gray-300 mb-6">
            My favorite artisitic medium. I grew up believing that animated movies were for kids. But as an adult, I've grown to appreciate animation for what it is: artwork in motion. If a painting is a photograph, an animation is a movie. And like paintings, the limit of an animation is only our imagination. 
          </p>
          <p className="text-lg text-gray-300 mb-6">
            For me, no art form can evoke more emotion than animation. Each frame is curated so carefully as to create the precise reaction desired in the viewer. In an excellent animated film, any frame chosen randomly could be a piece of art on its own. In conjunction with good writing, strong voice acting, and an immersive soundtrack, what you're left with is an experience in a league of its own. 
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
          My lifelong dream is to make animated films that immortalize my life philosophy and inspire people to live their best life. Until then, here is an ordered list of my personal favorite animated films, limited to one per series:
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