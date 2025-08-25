import React, { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../componets/website/Banner";
import { BsCalendar3, BsPerson, BsArrowRight } from "react-icons/bs";
import SEOHead from "../../components/SEO/SEOHead";
import { generateBreadcrumbSchema } from "../../utils/structuredData";

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Web Development",
    "Mobile Apps",
    "AI Development",
  ];

  const blogs = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Explore the latest trends shaping the future of web development, from AI integration to advanced frameworks that are revolutionizing the digital landscape.",
      category: "Web Development",
      author: "Cygnita Team",
      date: "March 15, 2024",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      slug: "future-web-development-trends-2024",
    },
    {
      id: 2,
      title: "Building Scalable Mobile Applications: Best Practices",
      excerpt:
        "Discover the essential best practices for creating scalable mobile applications that can grow with your business and handle increasing user demands.",
      category: "Mobile Apps",
      author: "Cygnita Team",
      date: "March 12, 2024",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      slug: "scalable-mobile-applications-best-practices",
    },
    {
      id: 3,
      title: "AI in Modern Web Applications: A Comprehensive Guide",
      excerpt:
        "Learn how artificial intelligence is transforming web applications and how to integrate AI features to enhance user experience and functionality.",
      category: "AI Development",
      author: "Cygnita Team",
      date: "March 10, 2024",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      slug: "ai-modern-web-applications-guide",
    },
    {
      id: 4,
      title: "The Rise of Progressive Web Apps: What You Need to Know",
      excerpt:
        "Understand the benefits and implementation strategies of Progressive Web Apps (PWAs) and how they're changing the mobile web experience.",
      category: "Web Development",
      author: "Cygnita Team",
      date: "March 8, 2024",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      slug: "rise-progressive-web-apps",
    },
    {
      id: 5,
      title: "Machine Learning Integration in Mobile Apps",
      excerpt:
        "Explore how machine learning is being integrated into mobile applications to provide personalized experiences and intelligent features.",
      category: "AI Development",
      author: "Cygnita Team",
      date: "March 5, 2024",
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      slug: "machine-learning-mobile-apps",
    },
  ];

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  const breadcrumbs = [
    { name: "Home", url: "https://cygnita.in/" },
    { name: "Blog", url: "https://cygnita.in/blogs" }
  ];

  return (
    <>
      <SEOHead
        title="Blog - Latest Insights on Web Development, Mobile Apps & AI"
        description="Stay updated with the latest trends in web development, mobile app development, and AI technology. Expert insights and best practices from Cygnita Solutions."
        keywords="web development blog, mobile app development, AI technology, software development insights, tech trends, programming tips"
        canonical="/blogs"
        ogType="website"
        structuredData={generateBreadcrumbSchema(breadcrumbs)}
      />
      <Banner page="Blog" />

      <section className="py-[5rem] bg-[#101010] text-white">
        <div className="wrapper">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary border-primary text-white"
                    : "border-primary/30 text-white/70 hover:border-primary hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-[#1a1a1a] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-black px-3 py-1 rounded-full text-sm font-medium">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
                    <div className="flex items-center gap-2">
                      <BsPerson className="text-primary" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BsCalendar3 className="text-primary" />
                      <span>{blog.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 line-clamp-2 hover:text-primary transition-colors duration-300">
                    <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h3>

                  <p className="text-white/70 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/50">
                      {blog.readTime}
                    </span>
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-medium"
                    >
                      Read More
                      <BsArrowRight />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {filteredBlogs.length > 0 && (
            <div className="text-center mt-12">
              <button className="primary-btn">Load More Articles</button>
            </div>
          )}

          {/* No Results */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold mb-4">No articles found</h3>
              <p className="text-white/70 mb-6">
                No articles available for the selected category.
              </p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="secondary-btn"
              >
                View All Articles
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blogs;
