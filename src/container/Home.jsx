import { useEffect, useState } from "react";

const Home = () => {
  const [videos, setVideos] = useState([]);

  //API Call to fetch all videos

  const apiCall = async () => {
    const res = await fetch(
      "https://67cc8669dd7651e464ec26f5.mockapi.io/videos"
    );

    const data = await res.json();

    setVideos(data);

    console.log(data);
  };

  useEffect(() => {
    apiCall();
  }, []);

  const renderVideos = videos?.map((video) => {
    return (
      <div key={video.id}>
        {video.title}
        <div>
          <img src={video.thumbnail} alt={video.title} />
          <p>{video.description}</p>
        </div>
        <video width="640" height="360" controls>
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  });

  return <>{renderVideos}</>;
};

export default Home;
