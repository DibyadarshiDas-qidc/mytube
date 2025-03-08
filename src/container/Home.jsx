import { useEffect, useState } from "react";
import './Home.css'; // Import the new CSS file

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
      <div className="video-card" key={video.id}>
        <img className="video-thumbnail" src={video.thumbnail} alt={video.title} />
        <div className="video-info">
          <h3 className="video-title">{video.title}</h3>
          <p className="video-description">{video.description}</p>
        </div>
        <video className="video-player" width="100%" controls>
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  });

  return <div className="video-grid">{renderVideos}</div>;
};

export default Home;
