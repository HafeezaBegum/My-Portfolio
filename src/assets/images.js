// Maps the plain-string image keys used in src/data/* to bundled assets.
import caseLogo from "./case-logo.png";
import bmsLogo from "./bms-logo.png";
import caseGA from "./case-ga-logo.png";
import piSquare from "./piSquare-logo.png";
import fraud from "./FraudDetection.webp";
import music from "./music.webp";
import budget from "./spartanBudget.webp";
import recommendation from "./Recommendation.webp";
import cnn from "./cnn.webp";
import portfolio from "./portfolio.webp";
import linux from "./LinuxFoundation.png";
import deeplearning from "./DeepLearning.png";
import aws from "./aws.png";
import cisco from "./Cisco.png";
import greatlearning from "./GreatLearning.png";

const images = {
  case: caseLogo,
  bms: bmsLogo,
  caseGA,
  piSquare,
  fraud,
  music,
  budget,
  recommendation,
  cnn,
  portfolio,
  linux,
  deeplearning,
  aws,
  cisco,
  greatlearning,
};

export const img = (key) => (key && key.startsWith("http") ? key : images[key]);

export default images;
