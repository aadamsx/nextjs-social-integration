import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function TimeLine({ tweetChunks }) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-500">
      <TwitterTimelineEmbed
        className="h-screen"
        sourceType="profile"
        screenName="DIRECTV"
        options={{
          tweetLimit: "3",
          width: "500",
          height: "900",
        }}
        theme="dark"
        // noHeader="true"
        noBorders="true"
        // noFooter="true"
        noScrollbar="true"
      ></TwitterTimelineEmbed>
    </div>
  );
}
