import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

const BlogPost = ({ title, date, excerpt, slug }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-400 mb-4">{date}</p>
    <p className="text-gray-300 mb-4">{excerpt}</p>
    <Link to={`/blog/${slug}`} className="text-blue-400 hover:text-blue-300">
      Read More →
    </Link>
  </div>
);

const Blog = () => {
  const posts = [
    // {
    //   title: "My Journey into Machine Learning",
    //   date: "August 15, 2023",
    //   excerpt: "In this post, I share my experience diving into the world of machine learning, including challenges I faced and key insights I gained.",
    //   slug: "journey-into-ml"
    // },
    // {
    //   title: "Reflections on My Internship at Spotify",
    //   date: "July 1, 2023",
    //   excerpt: "I recently completed my internship at Spotify as a Machine Learning Engineer. Here are my main takeaways and how it shaped my career goals.",
    //   slug: "spotify-internship-reflections"
    // },
    // Add more blog posts as needed
  ];

  return (
    <AnimatedPage>
        <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        {posts.length === 0 && (
            <p className="text-gray-300 text-center">Blog posts coming soon!</p>
        )}
        {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
        ))}
        </div>
    </AnimatedPage>
  );
};

export default Blog;