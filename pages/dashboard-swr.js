import useSWR, { SWRConfig } from "swr";
import { loadTweets } from "../lib/fetch-tweets";
import { TwitterTweetEmbed } from "react-twitter-embed";

const fetcher = async () => {
  const tweets = await loadTweets();
  const data = splitArrayObjects(tweets, 3);

  return data;
};

export default function DashboardSWR({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <TweetDashboardSWR />
    </SWRConfig>
  );
}

function TweetDashboardSWR() {
  const { data } = useSWR("/api/tweets", fetcher);

  if (!data) return <div>loading...</div>;

  return (
    <div className="flex bg-gray-500">
      {data.map((chunk, index) => (
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

export async function getServerSideProps() {
  const tweets = await loadTweets();
  const data = splitArrayObjects(tweets, 3);

  return {
    props: {
      fallback: {
        "/api/tweets": data,
      },
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
