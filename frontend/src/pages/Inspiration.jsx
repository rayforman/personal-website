import React from 'react';
import { Link } from 'react-router-dom';
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

const InspirationPost = ({ title, excerpt, videoId }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    {videoId && <YouTubeEmbed videoId={videoId} title={title} />}
    <p className="text-gray-300">{excerpt}</p>
  </div>
);

const Inspiration = () => {
  const posts = [
    {
      title: "Steve Jobs on the secret to changing the world",
      excerpt: '"Everything around you that you call life was made up by people that were no smarter than you." - Steve Jobs',
      videoId: "kYfNvmF0Bqw"
    },
    {
      title: "3Blue1Brown: What 'Follow your dreams' misses",
      excerpt: '"Action precedes motivation. Just start doing." - Grant Sanderson',
      videoId: "W3I3kAg2J7w"
    },
    {
      title: "Earl Nightingale: The Strangest Secret",
      excerpt: '"Ask, and it shall be given you. Seek, and you shall find. Knock, and it shall be opened unto you." - Earl Nightingale',
      videoId: "ZN6m0-UVLro"
    },
    {
      title: "Steve Jobs' Stanford graduation speech: Never Stop Dreaming",
      excerpt: '"I had been rejected, but I was still in love. And so I decided to start over" - Steve Jobs',
      videoId: "Tuw8hxrFBH8"
    },
    {
      title: "A Tribute to Animation",
      excerpt: '"Animation is not a genre. A superhero movie is not a genre. They are movies! They can be musicals, they can be dramas, they can be comedies, they can be adventures." - Brad Bird',
      videoId: "jzGwTHniLqk"
    },
    {
      title: "Learning Languages Ruined My Life: It's Beautiful",
      excerpt: '"After learning a language, a part of you becomes a member of the tribe to which the language belongs to." - Phoenix Hou',
      videoId: "ZZ_4gzoDDAE"
    },

    // add more videos here
  ];

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Inspiration Corner</h1>
        {posts.length === 0 ? (
          <p className="text-gray-300 text-center">Inspiration posts coming soon!</p>
        ) : (
          posts.map((post, index) => (
            <InspirationPost key={index} {...post} />
          ))
        )}
      </div>
    </AnimatedPage>
  );
};

export default Inspiration;