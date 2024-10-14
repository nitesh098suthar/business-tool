import Image from "next/image";
import Link from "next/link";
import React from "react";

// Assume you receive the 'topapi' object as a prop, which represents a single product from the 'topapiapi' array
const ListingCard = ({ topapi }: { topapi: any }) => {
  // Calculate the discount percentage
  const discountPercentage = Math.round(
    ((topapi.strikePrice - topapi.price) / topapi.strikePrice) * 100
  );

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg overflow-hidden h-[810px]">
      <Image
        width={250}
        height={500}
        className="w-full object-cover"
        src={topapi.mainImage.secure_url}
        alt={topapi.name}
      />

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{topapi.name}</h3>

        <div className="flex items-center space-x-2 my-2">
          <span className="text-xl font-bold text-green-600">
            ${topapi.price}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ${topapi.strikePrice}
          </span>
          <span className="text-sm text-red-500">
            {discountPercentage}% off
          </span>
        </div>

        <div className="text-sm text-gray-600">
          <p>
            Color: <span className="font-medium">{topapi.color}</span>
          </p>
          <p>
            Fabric:{" "}
            <span className="font-medium">
              {Object.keys(topapi.fabric)
                .filter((key) => topapi.fabric[key])
                .join(", ")}
            </span>
          </p>
        </div>

        {/* Product Description */}
        <p className="text-sm text-gray-500 mt-3">
          {topapi.description &&topapi.description.length > 60
            ? `${topapi.description.slice(0, 60)}...`
            : topapi.description || 'No description available'}
        </p>

        {/* Ratings (Dummy rating for now) */}
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 text-sm">★★★★☆</span>
          <span className="ml-2 text-gray-600 text-sm">(4.5/5)</span>
        </div>

        {/* How many people bought it (Dummy data) */}
        <p className="text-sm text-gray-500 mt-1">50 people bought this item</p>

        {/* Free Delivery */}
        <p className="text-sm text-green-600 mt-2">Free Delivery</p>

        {/* View Details Button */}
        <Link
          href={`/item/${topapi._id}`}
          className="mt-4 inline-block bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;
