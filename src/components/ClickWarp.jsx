import React from 'react';
import CSSModules from "react-css-modules";

import styles from "./WaitingForAccess.scss";
import OasisButton from "./OasisButton";

class E2hDaiLogo extends React.Component {
  render() {
    return <div {...this.props}>
      <svg width="15%" height="15%" viewBox="0 0 838 232" xmlns="http://www.w3.org/2000/svg">
        <g id="Eth2Dai" fill="none" fillRule="evenodd">
          <g id="logo">
            <path
              d="M20,20 L818,20 C829.045695,20 838,28.954305 838,40 L838,192 C838,203.045695 829.045695,212 818,212 L20,212 C8.954305,212 1.25158157e-14,203.045695 -3.55271368e-15,192 L-3.55271368e-15,40 C-4.90542118e-15,28.954305 8.954305,20 20,20 Z"
              id="bg" fill="#32323C"/>
            <path
              d="M135.978044,95 L135.978044,82 L157.934132,75 L157.934132,95 L172.904192,95 L172.904192,116 L157.934132,116 L157.934132,144 C157.927499,147.410893 160.151598,149.07756 164.606428,149 L172.904192,149 L172.904192,168 L153.629821,168 C141.86197,166.146874 135.978044,159.146874 135.978044,147 L135.978044,116 L125,116 L125,94 L135.978044,95 Z M70.34375,64 L113,64 L113,86.4313725 L70.34375,86.4313725 L70.34375,104.784314 L108.9375,104.784314 L108.9375,127.215686 L70.34375,127.215686 L70.34375,145.568627 L113,145.568627 L113,168 L70.34375,168 L48,168 L48,64 L70.34375,64 Z M241,168 L241,126 C241,119.096441 234.731986,113.5 227,113.5 C219.268014,113.5 213,119.096441 213,126 L213,168 L191,168 L191,64 L213,64 L213,102.91492 C218.127338,96.8764849 226.076145,93 235,93 C250.463973,93 263,104.640597 263,119 C263,119.014741 262.999987,119.029479 262.99996,119.044215 L262.956088,168 L241,168 Z M301,156.334593 L301,116 C301,51.934969 352.934969,1.72972556e-13 417,1.84741111e-13 C448.599877,1.90545915e-13 477.248601,12.6353878 498.169453,33.1294449 L473.50957,48.5386498 C458.221744,35.7191169 438.51232,28 417,28 C368.398942,28 329,67.398942 329,116 L357,116 L301,156.334593 Z M417.975289,145.987913 L452,145.987913 L452,168 L383.126126,168 L383.126126,151.123729 L383.123598,150.476206 L423.71195,108.345635 C428.498799,103.376902 428.360923,95.4591975 423.403996,90.6609475 C418.447068,85.8626975 410.548176,86.0009015 405.761327,90.9696348 C405.761327,90.9696348 402.987773,93.8485749 400.95688,98.8373299 L381,87.8648596 C382.353929,84.5390229 386.035577,79.7572529 392.044945,73.5195495 C404.490753,60.6008428 425.670813,60.8638723 439.351933,74.1070423 C453.033054,87.3502124 454.034472,108.558604 441.588663,121.477311 L417.975289,145.987913 Z"
              id="Eth" fill="#FFF"/>
            <path
              d="M611,168 L571,168 L571,64 L611,64 C639.718807,64 662,87.281193 662,116 C662,144.718807 639.718807,168 611,168 Z M610.417582,145.5 C626.512738,145.5 639,135.434466 639,116 C639,96.5655341 626.512738,86.5 610.417582,86.5 L593,86.5 L593,145.5 L610.417582,145.5 Z M704.943378,167.999712 C685.644683,167.999712 670,150.315024 670,128.499856 C670,106.684688 685.644683,89 704.943378,89 C713.599514,89 721.896129,92.5573457 728,98.4499777 L728,90.9999927 L749,90.9999927 L749,167.999712 L728,167.999712 L728,160.839449 C721.938227,166.558467 713.456454,167.999712 704.943378,167.999712 Z M709.935289,146.999788 C719.860332,146.999788 727.906169,138.940943 727.906169,128.999854 C727.906169,119.058765 719.860332,110.99992 709.935289,110.99992 C700.010246,110.99992 691.964409,119.058765 691.964409,128.999854 C691.964409,138.940943 700.010246,146.999788 709.935289,146.999788 Z M766,94 L788,94 L788,167.99973 L766,167.99973 L766,94 Z M777,87.9999051 C769.820298,87.9999051 764,82.1796281 764,74.9999525 C764,67.820277 769.820298,62 777,62 C784.179702,62 790,67.820277 790,74.9999525 C790,82.1796281 784.179702,87.9999051 777,87.9999051 Z M360.064997,183.10232 C375.411773,196.136622 395.287591,204 417,204 C465.601058,204 505,164.601058 505,116 L477,116 L532.997616,75 L533,116 C533,180.065031 481.065031,232 417,232 C385.204148,232 356.396167,219.207403 335.442201,198.488351 L360.064997,183.10232 Z"
              id="Dai" fill="#FFAC13"/>
          </g>
        </g>
      </svg>
    </div>;
  }
}

function dismiss() {
  localStorage.setItem('shutdownAnnouncement', 'true');
  location.reload();
}

const ClickWarp = () => {
  return (
    <div className={styles.NoEthereumSection}>
      <h2>IMPORTANT</h2>

      <div>OasisDEX.com is shutting down.</div>

      <div style={{ marginTop: '1em', fontSize: '80%' }}>
        To trade ETH and DAI, checkout our new marketplace: <a href="https://eth2dai.com/">eth2dai.com</a>.
      </div>
      <div style={{ marginTop: '1em' }}>
        <a href="https://eth2dai.com/">
          <E2hDaiLogo/>
        </a>
      </div>
      <div style={{ marginTop: '1em', fontSize: '80%' }}>
        Other pairs at oasisdex.com only support cancellation of orders.
      </div>
      <div style={{ marginTop: '1em', fontSize: '80%' }}>
        Read more <a href="https://medium.com/makerdao/a-new-oasis-5b9539a64adf">here</a>.
      </div>
      <OasisButton
        style={{ marginTop: '1em' }}
        // className={tableStyles.inputBtn}
        type="button"
        color="success"
        size="md"
        onClick={dismiss}
      >
        Dismiss
      </OasisButton>
    </div>
  );
};

ClickWarp.displayName = "Announcement";

export default CSSModules(ClickWarp, styles, { allowMultiple: true });