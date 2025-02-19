import React, { useState } from "react";

export default function YouTubeThumbnailGrabber() {
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const getThumbnail = () => {
    const videoIdMatch = videoUrl.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/
    );
    if (videoIdMatch && videoIdMatch[1]) {
      const videoId = videoIdMatch[1];
      setThumbnailUrl(
        `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      );
    } else {
      alert("Please enter a valid YouTube video URL");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">YouTube Thumbnail Grabber</h2>
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter YouTube video URL..."
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={getThumbnail}
        >
          Get Thumbnail
        </button>
        {thumbnailUrl && (
          <div className="mt-4">
            <img
              src={thumbnailUrl}
              alt="YouTube Thumbnail"
              className="rounded-lg shadow-lg w-full"
            />
            <a
              href={thumbnailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-400 hover:underline"
            >
              Download Thumbnail
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
