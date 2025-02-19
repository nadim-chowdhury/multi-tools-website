import React, { useState } from "react";

export default function SocialMediaPostScheduler() {
  const [postContent, setPostContent] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [scheduledPosts, setScheduledPosts] = useState([]);

  const schedulePost = () => {
    if (!postContent.trim() || !scheduleTime) {
      alert("Please enter post content and schedule time");
      return;
    }
    const newPost = { content: postContent, time: scheduleTime };
    setScheduledPosts([...scheduledPosts, newPost]);
    setPostContent("");
    setScheduleTime("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">Social Media Post Scheduler</h2>
        <textarea
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter your post content..."
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <input
          type="datetime-local"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          value={scheduleTime}
          onChange={(e) => setScheduleTime(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={schedulePost}
        >
          Schedule Post
        </button>
        {scheduledPosts.length > 0 && (
          <div className="mt-4 p-3 bg-gray-700 rounded text-sm text-left w-full">
            <h3 className="text-lg font-bold mb-2">Scheduled Posts</h3>
            <ul>
              {scheduledPosts.map((post, index) => (
                <li key={index} className="mb-2">
                  <p>
                    <strong>Content:</strong> {post.content}
                  </p>
                  <p>
                    <strong>Time:</strong> {post.time}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
