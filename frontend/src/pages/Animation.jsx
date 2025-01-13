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

const Animation = () => {
  const posts = [
    {
      title: "A Tribute to Animation",
      excerpt: '"Animation is not a genre. A superhero movie is not a genre. They are movies! They can be musicals, they can be dramas, they can be comedies, they can be adventures." - Brad Bird',
      videoId: "jzGwTHniLqk"
    },

    // add more videos here
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
          My lifelong dream is to make animation short films that immortalize my life philosophy and inspire people to live their best life. Until then, here is my personal ordered list of favorite animated films. 
        </p>
      </div>
    </AnimatedPage>
  );
};

export default Animation;