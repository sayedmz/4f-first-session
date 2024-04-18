import React from "react";
import { BlogCard } from "./blogCard/BlogCard";

const Contact = (props) => {
  const blogData = [
    {
      id: 1,
      title: "Getting Started with Web Development",
      author: "John Doe",
      date: "2024-03-07",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      tags: ["Web Development", "HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      title: "Cooking Tips for Beginners",
      author: "Jane Smith",
      date: "2024-03-08",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
      tags: ["Cooking", "Recipes", "Food"],
    },
    {
      id: 3,
      title: "Exploring Nature: Hiking Essentials",
      author: "Chris Johnson",
      date: "2024-03-09",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
      tags: ["Hiking", "Nature", "Outdoors"],
    },
    {
      id: 4,
      title: "Introduction to Machine Learning",
      author: "Alice Rogers",
      date: "2024-03-10",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      tags: ["Machine Learning", "AI", "Data Science"],
    },
    {
      id: 5,
      title: "10 Tips for Productive Remote Work",
      author: "David Williams",
      date: "2024-03-11",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
      tags: ["Remote Work", "Productivity"],
    },
    {
      id: 6,
      title: "Traveling on a Budget: Tips and Tricks",
      author: "Emily Davis",
      date: "2024-03-12",
      content:
        "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      tags: ["Travel", "Budget Travel", "Tips"],
    },
    {
      id: 7,
      title: "The Art of Photography: Capturing Moments",
      author: "Michael Lee",
      date: "2024-03-13",
      content: "Culpa qui officia deserunt mollit anim id est laborum...",
      tags: ["Photography", "Art", "Creativity"],
    },
    {
      id: 8,
      title: "Fitness Journey: From Couch Potato to Gym Enthusiast",
      author: "Sarah Miller",
      date: "2024-03-14",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      tags: ["Fitness", "Exercise", "Health"],
    },
    {
      id: 9,
      title: "DIY Home Decor Projects",
      author: "Robert Turner",
      date: "2024-03-15",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
      tags: ["DIY", "Home Decor", "Crafts"],
    },
    {
      id: 10,
      title: "Exploring the World of Science Fiction Literature",
      author: "Karen Brown",
      date: "2024-03-16",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      tags: ["Science Fiction", "Books", "Literature"],
    },
  ];
  return (
    <div className="blogs">
      {blogData.map((blog) => (
        <>
          <BlogCard
            id={blog.id}
            title={blog.title}
            content={blog.content}
            date={blog.date}
            tags={blog.tags}
            author={blog.author}
          />
        </>
      ))}
    </div>
  );
};

export default Contact;
