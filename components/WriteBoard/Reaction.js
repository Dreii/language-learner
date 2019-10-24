import {StatusBarHeight} from '../functions/GetDeviceHeaderHeight'

class Reaction {
  constructor(gestures) {
    this.gestures = gestures || [];
    this._offsetX = 0;
    this._offsetY = 0;
  }

  setOffset(options) {
    this._offsetX = options.x;
    this._offsetY = options.y + StatusBarHeight;
  }

  pointsToSvg(points) {
    const offsetX = this._offsetX;
    const offsetY = this._offsetY;

    if (points.length > 0) {
      let path = `M ${points[0].x - offsetX},${points[0].y - offsetY}`;
      points.forEach((point) => {
        path = `${path} L ${point.x - offsetX},${point.y - offsetY}`;
      })
      return path;
    } else {
      return '';
    }
  }
}

export default Reaction;
