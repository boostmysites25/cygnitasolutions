import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  BsCalendar3,
  BsPerson,
  BsClock,
  BsArrowLeft,
  BsShare,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";
import SEOHead from "../../components/SEO/SEOHead";
import { generateArticleSchema, generateBreadcrumbSchema } from "../../utils/structuredData";

const BlogDetails = () => {
  const { slug } = useParams();

  // Mock blog data - in a real app, this would come from an API
  const blogData = {
    "future-web-development-trends-2024": {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Explore the latest trends shaping the future of web development, from AI integration to advanced frameworks that are revolutionizing the digital landscape.",
      category: "Web Development",
      author: "Cygnita Team",
      date: "March 15, 2024",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      content: `
        <p class="mb-6">The landscape of web development is constantly evolving, driven by technological advancements and changing user expectations. As we move through 2024, several key trends are shaping the future of how we build and deploy web applications.</p>

        <h2 class="text-2xl font-bold mb-4 mt-8">1. AI-Powered Development Tools</h2>
        <p class="mb-6">Artificial intelligence is revolutionizing the way developers work. From AI-assisted code completion to automated testing and deployment, these tools are significantly improving development efficiency and code quality.</p>

        <h2 class="text-2xl font-bold mb-4 mt-8">2. Progressive Web Apps (PWAs)</h2>
        <p class="mb-6">PWAs continue to gain momentum as they bridge the gap between web and mobile applications. With features like offline functionality, push notifications, and app-like experiences, PWAs are becoming the preferred choice for many businesses.</p>

        <h2 class="text-2xl font-bold mb-4 mt-8">3. Serverless Architecture</h2>
        <p class="mb-6">Serverless computing is transforming how applications are built and deployed. This approach allows developers to focus on writing code without worrying about server management, leading to faster development cycles and reduced costs.</p>

        <h2 class="text-2xl font-bold mb-4 mt-8">4. WebAssembly (WASM)</h2>
        <p class="mb-6">WebAssembly is enabling high-performance applications to run in the browser. This technology is particularly valuable for applications that require intensive computations, such as video editing, gaming, and data visualization.</p>

        <h2 class="text-2xl font-bold mb-4 mt-8">5. Enhanced Security Measures</h2>
        <p class="mb-6">With cyber threats becoming more sophisticated, web developers are implementing advanced security measures. This includes the adoption of HTTPS by default, Content Security Policy (CSP), and regular security audits.</p>

        <h2 class="text-2xl font-bold mb-4 mt-8">Conclusion</h2>
        <p class="mb-6">The future of web development is bright and full of opportunities. By staying informed about these trends and adopting new technologies, developers can create more efficient, secure, and user-friendly web applications that meet the demands of modern users.</p>
      `,
      tags: ["Web Development", "AI", "Technology", "Trends"],
    },
    "scalable-mobile-applications-best-practices": {
      title: "Building Scalable Mobile Applications: Best Practices",
      excerpt:
        "Discover the essential best practices for creating scalable mobile applications that can grow with your business and handle increasing user demands.",
      category: "Mobile Apps",
      author: "Cygnita Team",
      date: "March 12, 2024",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      content: `
        <p class="mb-6">Building scalable mobile applications requires careful planning and implementation of best practices that ensure your app can handle growth and maintain performance as user numbers increase.</p>

        <h2 class="text-2xl font-bold mb-4 mt-8">1. Architecture Design</h2>
        <p class="mb-6">A well-designed architecture is the foundation of any scalable application. Consider using patterns like MVVM, Clean Architecture, or Redux to ensure your code is maintainable and testable.</p>

        <h2 class="text-2xl font-bold mb-4 mt-8">2. Performance Optimization</h2>
        <p class="mb-6">Optimize your app's performance by implementing lazy loading, efficient data caching, and minimizing network requests. Use tools like Firebase Performance Monitoring to track and improve app performance.</p>

        <h2 class="text-2xl font-bold mb-4 mt-8">3. Database Design</h2>
        <p class="mb-6">Choose the right database solution for your needs. Consider factors like data structure, query patterns, and scalability requirements when selecting between SQL and NoSQL databases.</p>

        <h2 class="text-2xl font-bold mb-4 mt-8">4. API Design</h2>
        <p class="mb-6">Design your APIs with scalability in mind. Implement proper versioning, pagination, and caching strategies to handle increasing load efficiently.</p>

        <h2 class="text-2xl font-bold mb-4 mt-8">5. Testing Strategy</h2>
        <p class="mb-6">Implement comprehensive testing strategies including unit tests, integration tests, and UI tests to ensure your app remains stable as it scales.</p>

        <h2 class="text-2xl font-bold mb-4 mt-8">Conclusion</h2>
        <p class="mb-6">Scalable mobile applications require a combination of good architecture, performance optimization, and robust testing. By following these best practices, you can build applications that grow with your business needs.</p>
      `,
      tags: ["Mobile Apps", "Scalability", "Best Practices", "Performance"],
    },
  };

  const blog = blogData[slug];

  if (!blog) {
    return (
      <>
        <SEOHead
          title="Blog Post Not Found"
          description="The requested blog post could not be found."
          noindex={true}
        />
        <div className="min-h-screen bg-[#101010] text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-white/70 mb-6">
              The blog post you're looking for doesn't exist.
            </p>
            <Link to="/blogs" className="primary-btn">
              Back to Blogs
            </Link>
          </div>
        </div>
      </>
    );
  }

  const breadcrumbs = [
    { name: "Home", url: "https://cygnita.in/" },
    { name: "Blog", url: "https://cygnita.in/blogs" },
    { name: blog.title, url: `https://cygnita.in/blog/${slug}` }
  ];

  const structuredData = [
    generateArticleSchema(blog),
    generateBreadcrumbSchema(breadcrumbs)
  ];

  return (
    <>
      <SEOHead
        title={blog.title}
        description={blog.excerpt}
        keywords={blog.tags?.join(", ") || ""}
        canonical={`/blog/${slug}`}
        ogImage={blog.image}
        ogType="article"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-[#101010] text-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center pt-5">
          <div className="wrapper">
            <div className="max-w-4xl">
              <span className="bg-primary text-black px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                {blog.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {blog.title}
              </h1>
              <p className="text-xl text-white/80 mb-6">{blog.excerpt}</p>
              <div className="flex items-center gap-6 text-white/70">
                <div className="flex items-center gap-2">
                  <BsPerson className="text-primary" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BsCalendar3 className="text-primary" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BsClock className="text-primary" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-[5rem]">
        <div className="wrapper">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 mb-8"
            >
              <BsArrowLeft />
              Back to Blogs
            </Link>

            {/* Article Content */}
            <article className="prose prose-invert prose-lg max-w-none">
              <div
                className="text-white/90 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h3 className="text-lg font-semibold mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-3">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-white/80 px-4 py-2 rounded-full text-sm hover:bg-primary hover:text-black transition-all duration-300 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
             </section>
     </div>
     </>
   );
 };

export default BlogDetails;
