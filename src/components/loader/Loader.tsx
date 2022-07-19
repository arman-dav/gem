const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__container">
        <div className="loader__container__wrapper">
          {[...new Array(30)].map((_, index) => (
            <div key={index}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
