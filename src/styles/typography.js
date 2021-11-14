export const fontConfig = {
  Ember_He: require("../../assets/fonts/AmazonEmber_He.ttf"),
  Ember_Bd: require("../../assets/fonts/AmazonEmber_Bd.ttf"),
  Ember_Md: require("../../assets/fonts/AmazonEmber_Md.ttf"),
  Ember_Rg: require("../../assets/fonts/AmazonEmber_Rg.ttf"),
  Ember_Lt: require("../../assets/fonts/AmazonEmber_Lt.ttf"),
  Ember_Th: require("../../assets/fonts/AmazonEmber_Th.ttf"),
};

export const AmazonEmber = {
  900: "Ember_He",
  700: "Ember_Bd",
  500: "Ember_Md",
  400: "Ember_Rg",
  300: "Ember_Lt",
  100: "Ember_Th",
};

export const TYPOGRAPHY = {
  H1: {
    fontFamily: AmazonEmber[700],
    fontSize: 34,
  },
  H2: {
    fontFamily: AmazonEmber[700],
    fontSize: 28,
  },
  H3: {
    fontFamily: AmazonEmber[700],
    fontSize: 24,
  },
  HEADER_TITLE: {
    fontFamily: AmazonEmber[500],
    fontSize: 30,
  },
  BODY_LARGE: {
    fontFamily: AmazonEmber[400],
    fontSize: 24,
  },
  BODY_MEDIUM: {
    fontFamily: AmazonEmber[400],
    fontSize: 16,
  },
  BODY_SMALL: {
    fontFamily: AmazonEmber[400],
    fontSize: 14,
  },
  BUTTON_SMALL: {
    fontFamily: AmazonEmber[700],
    fontSize: 14,
  },
};
