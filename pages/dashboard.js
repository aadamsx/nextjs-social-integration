// import { useSession, getSession } from "next-auth/react";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";

export default function Dashboard({ tweetChunks }) {
  return (
    <div className="flex bg-gray-600">
      {tweetChunks.map((chunk, index) => (
        <div key={index} className="flex flex-col flex-1">
          {chunk.map((tweet, index) => (
            <div key={index} className="p-2">
              <TwitterTweetEmbed tweetId={tweet.id} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${process.env.NEXTAUTH_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
      // "cache-control": "no-cache",
    },
  };

  const response = await fetch(
    "https://api.twitter.com/2/tweets/search/recent?query=from:directv",
    options
  );
  const jsonData = await response.json();
  const tweets = jsonData.data || [];
  const tweetChunks = splitArrayObjects(tweets, 3);

  console.log(tweetChunks);
  return {
    props: {
      tweetChunks,
    },
  };
}

const splitArrayObjects = (array, chunkSize) => {
  const chunkedArray = [];
  let index = 0;
  while (index < array.length) {
    chunkedArray.push(array.slice(index, index + chunkSize));
    index += chunkSize;
  }
  return chunkedArray;
};
