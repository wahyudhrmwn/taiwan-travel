import React from "react";

const NewsPage = () => {
  return (
    <div className="mt-40">
      <div className="mx-64 min-h-80">
        <div className="flex items-center">
          <div className="flex-initial w-3/4  text-3xl font-bold font-sans">All Posts</div>
          <div className="flex-initial w-1/4 ">
            <label className="input input-bordered flex items-center gap-2 rounded-3xl bg-gray-200 h-8">
              <input type="text" className="input-xs w-full max-w-xs" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="w-full h-80 mt-8 content-center items-center justify-items-center">
          <div className="text-4xl">No posts published in this language yet</div>
          <div className="mt-4">Once posts are published, you’ll see them here.</div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
