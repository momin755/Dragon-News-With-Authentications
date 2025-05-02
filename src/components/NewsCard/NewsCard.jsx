import React from "react";
import { Link } from "react-router"; // ✅ from react-router
import { FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const NewsCard = ({ singleNews }) => {
  const {
    id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = singleNews;

  const formattedDate = new Date(author.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card mt-5 bg-base-100 shadow-md mb-3 relative">
      {/* Top Section: Author and Icons */}
      <div className="flex justify-between bg-base-300 items-start p-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500 text-lg">
          <button className="hover:text-primary">
            <FaBookmark />
          </button>
          <button className="hover:text-primary">
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Title and Image */}
      <div className="px-4">
        <h1 className="font-bold text-lg leading-snug mb-3">{title}</h1>
        <figure className="mb-4">
          <img
            src={thumbnail_url}
            alt="news thumbnail"
            className="rounded-md w-full h-48 object-cover"
          />
        </figure>

        {/* Details Preview */}
        <p className="text-sm text-gray-600 mb-3">
          {details.length > 200 ? `${details.slice(0, 200)}...` : details}
          <Link to={`/news/${id}`} className="text-red-500 font-medium ml-1">
            Read More
          </Link>
        </p>

        {/* Rating and Views */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-orange-500">
            {[...Array(rating.number)].map((_, idx) => (
              <FaStar key={idx} />
            ))}
            <span className="ml-1 text-gray-800 font-semibold">{rating.number}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
