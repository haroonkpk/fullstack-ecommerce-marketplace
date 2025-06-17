import { useState } from "react";

const MobileDescription = () => {
  const [showMore, setShowMore] = useState(false);

  const shortDescription =
    "This mobile is lightweight, stylish, and perfect for daily use.";
  const fullDescription = `
    This mobile is lightweight, stylish, and perfect for daily use.
    It features a powerful processor, long battery life, and high-resolution camera.
    Built with premium plastic material, supports fast charging, and runs on the latest Android OS.
    Ideal for gaming, photography, and multitasking.
  `;

  return (
    <div className="max-w-md mx-auto">
      <p className="text-gray-700 whitespace-pre-line">
        {showMore ? fullDescription : shortDescription}
      </p>
      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-3 text-blue-600 font-semibold hover:underline"
      >
        {showMore ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

export default MobileDescription;
