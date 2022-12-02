import styles from "../styles/Home.module.css";
import { Howl } from "howler";

const sound = new Howl({
  src: ["/bonk.m4a"],
  html5: true,
});

const useMouseEvent = (czRef, sbfRef, batRef, bonkRef) => {
  // Desktop - click func
  function mouseDown() {
    sound.play();
    if (czRef.current) {
      czRef.current.style.transform = "rotate(5.81deg)";
    }
    if (sbfRef.current) {
      sbfRef.current.style.height = "148px";
      sbfRef.current.style.top = "642px";
      console.log(sbfRef.current.style);
    }
    if (batRef.current) {
      batRef.current.style.transform = "rotate(80deg)";
    }
    if (bonkRef.current) {
      bonkRef.current.style.backgroundColor = "#13C4E6";
      bonkRef.current.style.color = "#ffffff";
    }
  }

  function mouseUp() {
    sound.stop();
    if (czRef.current) {
      czRef.current.style.transform = "rotate(0deg)";
    }
    if (sbfRef.current) {
      sbfRef.current.style.height = "304px";
      sbfRef.current.style.top = "482px";
    }
    if (batRef.current) {
      batRef.current.style.transform = "rotate(0deg)";
    }
    if (bonkRef.current) {
      bonkRef.current.style.backgroundColor = "#ffffff";
      bonkRef.current.style.color = "#169bb4";
    }
  }
  return { mouseDown, mouseUp };
};
export default useMouseEvent;
