import { useState, useEffect } from "react";
import "./App.css";
import { IKImage, IKContext, IKUpload } from "imagekitio-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";

const urlEndpoint = "https://ik.imagekit.io/garvit001/";
const publicKey = "public_PMphjT39UrcDsKGdMfvKvOz2iNs=";
const authenticationEndpoint = "http://localhost:3001/auth";

function EditImage() {
  const [url, setUrl] = useState("");
  const [width, setwidth] = useState(0);
  const [height, setheight] = useState(0);
  const [startingHeight, setStartingHeight] = useState(0);
  const [startingWidth, setStartingWidth] = useState(0);
  const [blur, setBlur] = useState("0");
  const [contrast, setContrast] = useState("");
  const [grayscale, setGrayscale] = useState("");
  const [borderThickness, setBorderThickness] = useState(0);
  const [borderColor, setBorderColor] = useState("FFFFFF");
  const [sharpen, setSharpen] = useState("0");
  const [rotate, setRotate] = useState(0);
  const [quality, setQuality] = useState(100);
  useEffect(() => {
    // This code will run after the component is mounted

    const download = document.querySelector(".myanc");

    if (download) {
      download.addEventListener("click", () => {
        const imgname = "image.webp";

        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = imgname;
        anchor.click();
      });
    }
  });

  const onError = (err) => {
    console.log("Error", err);
  };

  const onSuccess = (res) => {
    setUrl(res.filePath);
    setheight(res.height);
    setwidth(res.width);
    setStartingHeight(res.height);
    setStartingWidth(res.width);
  };

  const BlurHandler = (e) => {
    let blurValue = e.target.value;
    setBlur(`${blurValue}`);
  };

  const SharpenHandler = (e) => {
    let sharpValue = e.target.value;
    setSharpen(`${sharpValue}`);
  };
  const GrayscaleHandler = (e) => {
    if (e.target.checked) setGrayscale(`grayscale`);
    else setGrayscale("");
    // console.log(e.target)
  };

  const qualityHandler = (e) => {
    let qualityValue = e.target.value;
    setQuality(`${qualityValue}`);
  };

  const ContrastHandler = (e) => {
    if (e.target.checked) setContrast(`contrast`);
    else setContrast("");
  };

  const BorderColorHandler = (e) => {
    let newColor = e.target.value.toUpperCase().slice(1);
    setBorderColor(newColor);
  };
  const BorderThickHandler = (e) => {
    let thick = e.target.value;
    setBorderThickness(thick);
  };

  const rotateLeftHandler = () => {
    let ov = rotate;
    ov = ov + 270;
    ov %= 360;
    setRotate(ov);
  };

  const rotateRightHandler = () => {
    let ov = rotate;
    ov = ov + 90;
    ov %= 360;
    setRotate(ov);
  };

  return (
    <div className="App">
      <div className="left-cont">
        <IKContext
          urlEndpoint={urlEndpoint}
          publicKey={publicKey}
          authenticationEndpoint={authenticationEndpoint}
        >
          <h2>Your Image</h2>
          <div className="user-image">
            {/* <a id="download" className="myanc" href={url} download>Download Image</a> */}
            {height == 0 ? (
              <img
                src="https://placehold.co/600x600?text=Your+Image"
                alt="placholder-image"
              />
            ) : (
              <IKImage
                path={
                  url +
                  `?tr=bl-${blur},e-${grayscale},q-${quality},e-${contrast},e-sharpen-${sharpen},b-${borderThickness}_${borderColor},rt-${rotate}`
                }
                className="main-image"
              />
            )}
          </div>

          {/* Upload Image */}
          <div className="upload-cont">
            <IKUpload
              style={{
                backgroundColor: "green",
                fontSize: "1rem",
              }}
              fileName="test-upload.png"
              onError={onError}
              onSuccess={onSuccess}
            />
          </div>
        </IKContext>
      </div>
      <div className="right-cont">
        <div className="rotate-cont">
          <h3>Rotate Image</h3>
          <FontAwesomeIcon
            className="lRotate"
            icon={faArrowRotateLeft}
            onClick={rotateLeftHandler}
          />
          <FontAwesomeIcon
            icon={faArrowRotateRight}
            onClick={rotateRightHandler}
          />
        </div>
        <div className="blur-param param">
          <h2>Blur </h2>
          <div className="input">
            <span>Value : </span>
            <input
              type="range"
              id="width"
              name="width"
              min="0"
              max="100"
              defaultValue="0"
              onChange={BlurHandler}
            />
          </div>
        </div>

        <div className="sharpen-param param">
          <h2>Sharpen </h2>
          <div className="input">
            <span>Value : </span>
            <input
              type="range"
              id="width"
              name="width"
              min="0"
              max="100"
              defaultValue="0"
              onChange={SharpenHandler}
            />
          </div>
        </div>
        <div className="blur-param param">
          <h2>Quality </h2>
          <div className="input">
            <span>Value : </span>
            <input
              type="range"
              id="width"
              name="width"
              min="0"
              max="100"
              defaultValue="0"
              onChange={qualityHandler}
            />
          </div>
        </div>
        <div className="grayscale-param">
          <h2>Grayscale </h2>

          <input
            type="checkbox"
            defaultValue={false}
            onChange={GrayscaleHandler}
          />
        </div>

        <div className="Contrast-param">
          <h2>Contrast </h2>

          <input
            type="checkbox"
            defaultValue={false}
            onChange={ContrastHandler}
          />
        </div>

        <div className="border-param">
          <h2>Border </h2>

          <input type="color" onChange={BorderColorHandler} />
          <input
            type="number"
            min="1"
            max="35"
            defaultValue="0"
            onChange={BorderThickHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default EditImage;
