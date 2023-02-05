import { gsap } from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

class SegueManager {
  _state: any;
  
  preNavigate() {
    this._state = Flip.getState('*[data-flip-id]');
  }

  postNavigate() {
    if (!this._state) return;
    const state = this._state;
    this._state = null;
    Flip.from(state, {
      targets: "*[data-flip-id]",
      duration: 0.4,
      ease: "power1.inOut",
    });
  }
}

const Segue = new SegueManager();

export default Segue;