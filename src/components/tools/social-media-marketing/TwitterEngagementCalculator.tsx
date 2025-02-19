import React, { useState } from "react";

export default function TwitterEngagementCalculator() {
  const [likes, setLikes] = useState("");
  const [retweets, setRetweets] = useState("");
  const [comments, setComments] = useState("");
  const [followers, setFollowers] = useState("");
  const [engagementRate, setEngagementRate] = useState(null);

  const calculateEngagement = () => {
    const likesNum = parseInt(likes, 10) || 0;
    const retweetsNum = parseInt(retweets, 10) || 0;
    const commentsNum = parseInt(comments, 10) || 0;
    const followersNum = parseInt(followers, 10);

    if (followersNum <= 0) {
      alert("Please enter a valid number of followers");
      return;
    }

    const engagement =
      ((likesNum + retweetsNum + commentsNum) / followersNum) * 100;
    setEngagementRate(engagement.toFixed(2));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">
          Twitter Engagement Calculator
        </h2>
        <input
          type="number"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter number of likes"
          value={likes}
          onChange={(e) => setLikes(e.target.value)}
        />
        <input
          type="number"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter number of retweets"
          value={retweets}
          onChange={(e) => setRetweets(e.target.value)}
        />
        <input
          type="number"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter number of comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <input
          type="number"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
          placeholder="Enter number of followers"
          value={followers}
          onChange={(e) => setFollowers(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={calculateEngagement}
        >
          Calculate Engagement Rate
        </button>
        {engagementRate !== null && (
          <div className="mt-4 p-3 bg-gray-700 rounded text-sm">
            <p>
              Engagement Rate: <strong>{engagementRate}%</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
