import { Blog } from "@/types";
import { Metadata } from "next";


const BlogDetailsCard = ({ blog }: { blog: Blog }) => {



  
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Blog Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {blog?.blogtitle}
        </h1>

        {/* Blog Image */}
        <img
          src={blog.blogImage}
          alt="Blog Image"
          className="w-full h-96 object-cover rounded-lg mb-6"
        />

        {/* Blog Description */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          {blog?.blogContent}
        </p>

        {/* Blog Author */}
        <div className="flex items-center">
          <span className="text-gray-600 text-sm">By</span>
          <span className="text-gray-800 font-semibold ml-2">
            {blog?.blogAuthor}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsCard;
