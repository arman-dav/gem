import { StrictMode } from "react";

import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";
import { Provider } from "react-redux";
import { Router } from "react-router";

import App from "./App";
import { store } from "./redux/store";
import "./styles/main.scss";
import history from "./utils/history";

let app;
const urlParams = new URLSearchParams(window.location.search);

if (
  !process.env.REACT_APP_MAINTANANCE_MESSAGE ||
  urlParams.get("alpha") === "true"
) {
  app = (
    <StrictMode>
      <Router history={history}>
        <Provider store={store}>
          <MoralisProvider
            serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL || ""}
            appId={process.env.REACT_APP_MORALIS_APP_ID || ""}
          >
            <App />
          </MoralisProvider>
        </Provider>
      </Router>
    </StrictMode>
  );
} else {
  app = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        backgroundColor: "black",
        minHeight: "100vh",
      }}
    >
      <svg
        style={{
          maxWidth: "400px",
          height: "auto",
        }}
        width="506"
        height="132"
        viewBox="0 0 506 132"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M99.2039 55.3437C99.3493 55.1982 99.5865 55.1995 99.7335 55.3465L110.515 66.1278C110.662 66.2748 110.663 66.5119 110.518 66.6574L99.7307 77.4443C99.5852 77.5898 99.3481 77.5885 99.2011 77.4415L88.4198 66.6602C88.2728 66.5132 88.2715 66.2761 88.417 66.1306L99.2039 55.3437Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.7693 77.3472C32.6238 77.4926 32.3867 77.4914 32.2397 77.3444L21.4584 66.5631C21.3113 66.416 21.3101 66.1789 21.4556 66.0334L32.2424 55.2466C32.3879 55.1011 32.625 55.1023 32.7721 55.2494L43.5534 66.0307C43.7004 66.1777 43.7016 66.4148 43.5561 66.5603L32.7693 77.3472Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50.568 61.9739C50.718 62.1239 50.9215 62.2082 51.1337 62.2082L80.9503 62.2082C81.1625 62.2082 81.366 62.1239 81.516 61.9739L93.484 50.0059C93.7964 49.6935 93.7964 49.1869 93.484 48.8745L66.6077 21.9982C66.2953 21.6858 65.7887 21.6858 65.4763 21.9982L50.0222 37.4523C49.7098 37.7647 49.7098 38.2712 50.0222 38.5837L59.0184 47.5798C59.1684 47.7298 59.3719 47.8141 59.5841 47.8141L68.6913 47.8141C69.404 47.8141 69.761 46.9524 69.257 46.4484L61.1801 38.3715C60.9848 38.1763 60.9848 37.8597 61.1801 37.6644L65.6884 33.1561C65.8837 32.9608 66.2003 32.9608 66.3955 33.1561L82.3261 49.0867C82.5214 49.2819 82.5214 49.5985 82.3261 49.7938L78.0979 54.0219C78.0042 54.1157 77.877 54.1684 77.7444 54.1684L54.3396 54.1684C54.207 54.1684 54.0798 54.1157 53.986 54.0219L44.2863 44.3222C43.9739 44.0098 43.4673 44.0097 43.1549 44.3222L38.6013 48.8758C38.2889 49.1882 38.2889 49.6947 38.6013 50.0072L50.568 61.9739Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M81.516 70.5911C81.366 70.4411 81.1625 70.3568 80.9503 70.3568L51.1337 70.3568C50.9215 70.3568 50.718 70.4411 50.568 70.5911L38.6 82.5591C38.2876 82.8715 38.2876 83.378 38.6 83.6905L65.4763 110.567C65.7887 110.879 66.2953 110.879 66.6077 110.567L82.0617 95.1127C82.3742 94.8003 82.3742 94.2937 82.0617 93.9813L73.0656 84.9852C72.9156 84.8352 72.7121 84.7509 72.4999 84.7509L63.3927 84.7509C62.68 84.7509 62.323 85.6126 62.827 86.1166L70.9039 94.1935C71.0992 94.3887 71.0992 94.7053 70.9039 94.9006L66.3955 99.4089C66.2003 99.6042 65.8837 99.6042 65.6884 99.4089L49.7579 83.4783C49.5626 83.2831 49.5626 82.9665 49.7579 82.7712L53.986 78.543C54.0798 78.4493 54.207 78.3966 54.3396 78.3966L77.7444 78.3966C77.877 78.3966 78.0042 78.4493 78.0979 78.543L87.7977 88.2428C88.1101 88.5552 88.6167 88.5552 88.9291 88.2428L93.4827 83.6892C93.7951 83.3768 93.7951 82.8702 93.4827 82.5578L81.516 70.5911Z"
          fill="white"
        />
        <path
          d="M154.667 83.1992C151.415 83.1992 148.561 82.4525 146.105 80.9592C143.649 79.4326 141.741 77.3254 140.381 74.6373C139.02 71.9161 138.34 68.7801 138.34 65.2292C138.34 61.6783 139.02 58.5423 140.381 55.8211C141.774 53.0998 143.732 50.976 146.254 49.4494C148.81 47.9229 151.813 47.1596 155.264 47.1596C159.18 47.1596 162.432 48.1054 165.021 49.997C167.642 51.8886 169.335 54.4936 170.098 57.8122H165.27C164.805 55.7215 163.693 54.0622 161.935 52.8344C160.209 51.6065 157.985 50.9926 155.264 50.9926C152.709 50.9926 150.486 51.5733 148.594 52.7348C146.702 53.8631 145.226 55.4892 144.164 57.6131C143.135 59.737 142.621 62.2757 142.621 65.2292C142.621 68.1827 143.135 70.7214 144.164 72.8453C145.192 74.9692 146.619 76.6119 148.445 77.7734C150.27 78.9017 152.394 79.4658 154.816 79.4658C158.533 79.4658 161.337 78.3873 163.229 76.2302C165.12 74.04 166.199 71.0533 166.464 67.2701H156.409V63.9847H170.745V82.6019H166.912L166.564 76.8773C165.303 78.9017 163.76 80.4614 161.935 81.5565C160.109 82.6516 157.687 83.1992 154.667 83.1992ZM177.358 82.6019V47.757H198.912V51.1917H181.539V63.3376H197.418V66.7225H181.539V79.1672H198.912V82.6019H177.358ZM205.455 82.6019V47.757H209.637L228.204 75.6827V47.757H232.385V82.6019H228.204L209.637 54.6762V82.6019H205.455ZM239.775 82.6019V47.757H261.329V51.1917H243.957V63.3376H259.836V66.7225H243.957V79.1672H261.329V82.6019H239.775ZM278.973 83.1992C276.418 83.1992 274.195 82.7346 272.303 81.8054C270.411 80.8762 268.951 79.582 267.923 77.9227C266.894 76.2634 266.379 74.3386 266.379 72.1484H270.76C270.76 73.509 271.075 74.7701 271.706 75.9316C272.336 77.0599 273.249 77.9725 274.444 78.6694C275.671 79.3331 277.181 79.6649 278.973 79.6649C281.33 79.6649 283.155 79.1008 284.449 77.9725C285.743 76.8442 286.39 75.4338 286.39 73.7413C286.39 72.3475 286.092 71.2358 285.494 70.4062C284.897 69.5433 284.084 68.8464 283.055 68.3155C282.06 67.7845 280.898 67.3199 279.571 66.9217C278.276 66.5234 276.916 66.0754 275.489 65.5776C272.801 64.6484 270.81 63.5035 269.515 62.1429C268.221 60.7491 267.574 58.9405 267.574 56.7171C267.541 54.8587 267.972 53.216 268.868 51.789C269.764 50.3288 271.025 49.2005 272.652 48.4041C274.311 47.5744 276.269 47.1596 278.525 47.1596C280.749 47.1596 282.674 47.5744 284.3 48.4041C285.959 49.2337 287.237 50.3786 288.133 51.8388C289.062 53.299 289.543 54.9582 289.576 56.8166H285.196C285.196 55.8543 284.947 54.9085 284.449 53.9793C283.951 53.0169 283.188 52.237 282.159 51.6397C281.164 51.0423 279.903 50.7437 278.376 50.7437C276.484 50.7105 274.925 51.1917 273.697 52.1872C272.502 53.1828 271.905 54.56 271.905 56.3189C271.905 57.8122 272.32 58.9571 273.149 59.7536C274.012 60.55 275.207 61.2137 276.733 61.7447C278.26 62.2425 280.019 62.8232 282.01 63.487C283.669 64.0843 285.162 64.7812 286.49 65.5776C287.817 66.3741 288.846 67.4029 289.576 68.6639C290.339 69.925 290.721 71.5345 290.721 73.4924C290.721 75.1517 290.29 76.728 289.427 78.2214C288.564 79.6815 287.253 80.8762 285.494 81.8054C283.769 82.7346 281.595 83.1992 278.973 83.1992ZM296.651 82.6019V47.757H300.832V82.6019H296.651ZM319.321 83.1992C316.766 83.1992 314.542 82.7346 312.651 81.8054C310.759 80.8762 309.299 79.582 308.27 77.9227C307.242 76.2634 306.727 74.3386 306.727 72.1484H311.108C311.108 73.509 311.423 74.7701 312.053 75.9316C312.684 77.0599 313.597 77.9725 314.791 78.6694C316.019 79.3331 317.529 79.6649 319.321 79.6649C321.677 79.6649 323.503 79.1008 324.797 77.9725C326.091 76.8442 326.738 75.4338 326.738 73.7413C326.738 72.3475 326.439 71.2358 325.842 70.4062C325.245 69.5433 324.432 68.8464 323.403 68.3155C322.407 67.7845 321.246 67.3199 319.918 66.9217C318.624 66.5234 317.264 66.0754 315.837 65.5776C313.149 64.6484 311.157 63.5035 309.863 62.1429C308.569 60.7491 307.922 58.9405 307.922 56.7171C307.889 54.8587 308.32 53.216 309.216 51.789C310.112 50.3288 311.373 49.2005 312.999 48.4041C314.659 47.5744 316.617 47.1596 318.873 47.1596C321.097 47.1596 323.021 47.5744 324.647 48.4041C326.307 49.2337 327.584 50.3786 328.48 51.8388C329.41 53.299 329.891 54.9582 329.924 56.8166H325.543C325.543 55.8543 325.295 54.9085 324.797 53.9793C324.299 53.0169 323.536 52.237 322.507 51.6397C321.511 51.0423 320.25 50.7437 318.724 50.7437C316.832 50.7105 315.272 51.1917 314.045 52.1872C312.85 53.1828 312.253 54.56 312.253 56.3189C312.253 57.8122 312.667 58.9571 313.497 59.7536C314.36 60.55 315.555 61.2137 317.081 61.7447C318.608 62.2425 320.366 62.8232 322.358 63.487C324.017 64.0843 325.51 64.7812 326.838 65.5776C328.165 66.3741 329.194 67.4029 329.924 68.6639C330.687 69.925 331.069 71.5345 331.069 73.4924C331.069 75.1517 330.637 76.728 329.775 78.2214C328.912 79.6815 327.601 80.8762 325.842 81.8054C324.116 82.7346 321.943 83.1992 319.321 83.1992ZM365.156 83.1992C361.904 83.1992 359.05 82.4525 356.594 80.9592C354.138 79.4326 352.23 77.3254 350.869 74.6373C349.509 71.9161 348.828 68.7801 348.828 65.2292C348.828 61.6783 349.509 58.5423 350.869 55.8211C352.263 53.0998 354.221 50.976 356.743 49.4494C359.299 47.9229 362.302 47.1596 365.753 47.1596C369.669 47.1596 372.921 48.1054 375.51 49.997C378.131 51.8886 379.824 54.4936 380.587 57.8122H375.759C375.294 55.7215 374.182 54.0622 372.423 52.8344C370.698 51.6065 368.474 50.9926 365.753 50.9926C363.198 50.9926 360.974 51.5733 359.083 52.7348C357.191 53.8631 355.714 55.4892 354.653 57.6131C353.624 59.737 353.109 62.2757 353.109 65.2292C353.109 68.1827 353.624 70.7214 354.653 72.8453C355.681 74.9692 357.108 76.6119 358.933 77.7734C360.759 78.9017 362.883 79.4658 365.305 79.4658C369.022 79.4658 371.826 78.3873 373.718 76.2302C375.609 74.04 376.688 71.0533 376.953 67.2701H366.898V63.9847H381.234V82.6019H377.401L377.053 76.8773C375.792 78.9017 374.249 80.4614 372.423 81.5565C370.598 82.6516 368.176 83.1992 365.156 83.1992ZM387.847 82.6019V47.757H409.401V51.1917H392.028V63.3376H407.907V66.7225H392.028V79.1672H409.401V82.6019H387.847ZM415.944 82.6019V47.757H420.822L433.367 72.0488L445.811 47.757H450.739V82.6019H446.558V55.2237L434.91 77.624H431.774L420.126 55.2735V82.6019H415.944ZM469.191 83.1992C466.636 83.1992 464.412 82.7346 462.521 81.8054C460.629 80.8762 459.169 79.582 458.14 77.9227C457.112 76.2634 456.597 74.3386 456.597 72.1484H460.978C460.978 73.509 461.293 74.7701 461.923 75.9316C462.554 77.0599 463.467 77.9725 464.661 78.6694C465.889 79.3331 467.399 79.6649 469.191 79.6649C471.547 79.6649 473.373 79.1008 474.667 77.9725C475.961 76.8442 476.608 75.4338 476.608 73.7413C476.608 72.3475 476.309 71.2358 475.712 70.4062C475.115 69.5433 474.302 68.8464 473.273 68.3155C472.277 67.7845 471.116 67.3199 469.788 66.9217C468.494 66.5234 467.134 66.0754 465.707 65.5776C463.019 64.6484 461.027 63.5035 459.733 62.1429C458.439 60.7491 457.792 58.9405 457.792 56.7171C457.759 54.8587 458.19 53.216 459.086 51.789C459.982 50.3288 461.243 49.2005 462.869 48.4041C464.529 47.5744 466.487 47.1596 468.743 47.1596C470.967 47.1596 472.891 47.5744 474.517 48.4041C476.177 49.2337 477.454 50.3786 478.35 51.8388C479.28 53.299 479.761 54.9582 479.794 56.8166H475.413C475.413 55.8543 475.165 54.9085 474.667 53.9793C474.169 53.0169 473.406 52.237 472.377 51.6397C471.381 51.0423 470.12 50.7437 468.594 50.7437C466.702 50.7105 465.143 51.1917 463.915 52.1872C462.72 53.1828 462.123 54.56 462.123 56.3189C462.123 57.8122 462.537 58.9571 463.367 59.7536C464.23 60.55 465.425 61.2137 466.951 61.7447C468.478 62.2425 470.236 62.8232 472.228 63.487C473.887 64.0843 475.38 64.7812 476.708 65.5776C478.035 66.3741 479.064 67.4029 479.794 68.6639C480.557 69.925 480.939 71.5345 480.939 73.4924C480.939 75.1517 480.507 76.728 479.645 78.2214C478.782 79.6815 477.471 80.8762 475.712 81.8054C473.986 82.7346 471.813 83.1992 469.191 83.1992Z"
          fill="white"
        />
      </svg>
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "lighter",
          textTransform: "uppercase",
        }}
      >
        Marketplace
      </h1>
      <h2>{process.env.REACT_APP_MAINTANANCE_MESSAGE || "Coming soon."}</h2>
    </div>
  );
}

ReactDOM.render(app, document.getElementById("root"));