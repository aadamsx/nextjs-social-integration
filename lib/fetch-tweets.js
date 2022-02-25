export async function loadTweets() {
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
    process.env.TWITTER_TWEET_SEARCH_URL_MOCK,
    options
  );
  const jsonData = await response.json();
  // const tweets = (await jsonData.tweets) || [];
  // console.log(tweets);
  return jsonData;
}

// export async function loadTweetTimeline() {
//   const options = {
//     method: "GET",
//     mode: "cors",
//     headers: {
//       Authorization: `Bearer ${process.env.NEXTAUTH_ACCESS_TOKEN}`,
//       "Content-Type": "application/json",
//       // "cache-control": "no-cache",
//     },
//   };

//   const response = await fetch(
//     "https://api.twitter.com/2/users/14946736/timeline",
//     options
//   );
//   const jsonData = await response.json();
//   const tweets = (await jsonData.data) || [];
//   return tweets;
// }
