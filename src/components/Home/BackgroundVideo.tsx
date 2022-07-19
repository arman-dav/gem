import backgroundVideo from "../../assets/video/homeBackgroundVideo.mp4";

const BackgroundVideo = () => {
  return (
    <div className="home__announceContainer__videoDiv">
      <div className="home__announceContainer__videoDiv__pinkFilter "></div>
      <div className="home__announceContainer__videoDiv__darkSidesFilter "></div>
      <video autoPlay={true} loop={true} muted={true} controls={false}>
        <source src={backgroundVideo} type="video/mp4" />
        <track
          src=""
          kind="captions"
          srcLang="en"
          label="english_captions"
        ></track>
      </video>
    </div>
  );
};

export default BackgroundVideo;
