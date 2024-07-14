import { Inter, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    // headline1
    headline1Regular: true;
    headline1Medium: true;
    headline1Semibold: true;
    headline1Bold: true;

    // headline2
    headline2Regular: true;
    headline2Medium: true;
    headline2Semibold: true;
    headline2Bold: true;

    // headline3
    headline3Regular: true;
    headline3Medium: true;
    headline3Semibold: true;
    headline3Bold: true;

    // headline4
    headline4Regular: true;
    headline4Medium: true;
    headline4Semibold: true;
    headline4Bold: true;

    // headline5
    headline5Regular: true;
    headline5Medium: true;
    headline5Semibold: true;
    headline5Bold: true;

    // subheadline1Inter
    subheadline1InterRegular: true;
    subheadline1InterMedium: true;
    subheadline1InterSemibold: true;
    subheadline1InterBold: true;

    // subheadline1Mont
    subheadline1MontRegular: true;
    subheadline1MontMedium: true;
    subheadline1MontSemibold: true;
    subheadline1MontBold: true;

    // subheadline2
    subheadline2Regular: true;
    subheadline2Medium: true;
    subheadline2Semibold: true;
    subheadline2Bold: true;

    // subheadline3
    subheadline3Regular: true;
    subheadline3Medium: true;
    subheadline3Semibold: true;
    subheadline3Bold: true;

    // subheadline3Mont
    subheadline3MontRegular: true;
    subheadline3MontMedium: true;
    subheadline3MontSemibold: true;
    subheadline3MontBold: true;

    // body1
    body1Regular: true;
    body1Medium: true;
    body1Semibold: true;
    body1Bold: true;

    // body2
    body2Regular: true;
    body2Medium: true;
    body2Semibold: true;
    body2Bold: true;

    // body3
    body3Regular: true;
    body3Medium: true;
    body3Semibold: true;
    body3Bold: true;

    // body3Mont
    body3MontRegular: true;
    body3MontMedium: true;
    body3MontSemibold: true;
    body3MontBold: true;

    // body4
    body4Regular: true;
    body4Medium: true;
    body4Semibold: true;
    body4Bold: true;

    // body4Mont
    body4MontRegular: true;
    body4MontMedium: true;
    body4MontSemibold: true;
    body4MontBold: true;

    // btnL
    btnLRegular: true;
    btnLMedium: true;
    btnLSemibold: true;

    // btnM
    btnMRegular: true;
    btnMMedium: true;
    btnMSemibold: true;

    // btnS
    btnSRegular: true;
    btnSMedium: true;
    btnSSemibold: true;

    // btnXs
    btnXsRegular: true;
    btnXsMedium: true;
    btnXsSemibold: true;
  }
}

export const fontFunc = (
  fontFamily: string,
  fontSize: number | string,
  lineHeight: number | string,
  letterSpacing: number | string
) => {
  return {
    fontFamily,
    fontSize,
    lineHeight,
    letterSpacing,
  };
};

const headline1 = () => fontFunc(inter.style.fontFamily, 52, "72px", "0.01em");
const headline2 = () => fontFunc(inter.style.fontFamily, 38, "52px", "0.01em");
const headline3 = () => fontFunc(inter.style.fontFamily, 36, "44px", "0.01em");
const headline4 = () => fontFunc(inter.style.fontFamily, 30, "1.5em", "0.01em");
const headline5 = () =>
  fontFunc(montserrat.style.fontFamily, 22, "1.5em", "0.01em");

const subheadline1Inter = () =>
  fontFunc(inter.style.fontFamily, 20, "30px", "0.01em");
const subheadline1Mont = () =>
  fontFunc(montserrat.style.fontFamily, 20, "1.5em", "0.01em");
const subheadline2 = () =>
  fontFunc(inter.style.fontFamily, 18, "26px", "0.01em");
const subheadline3 = () =>
  fontFunc(inter.style.fontFamily, 16, "1.5em", "0.01em");
const subheadline3Mont = () =>
  fontFunc(montserrat.style.fontFamily, 16, "1.5em", "0.01em");

const body1 = () => fontFunc(inter.style.fontFamily, 18, "22px", "0.01em");
const body2 = () => fontFunc(inter.style.fontFamily, 16, "20px", "0.01em");
const body3 = () => fontFunc(inter.style.fontFamily, 14, "18px", "0.01em");
const body3Mont = () =>
  fontFunc(montserrat.style.fontFamily, 14, "18px", "0.01em");
const body4 = () => fontFunc(inter.style.fontFamily, 12, "16px", "0.01em");
const body4Mont = () =>
  fontFunc(montserrat.style.fontFamily, 12, "16px", "0.01em");

const btnL = () => fontFunc(inter.style.fontFamily, 18, "22px", "initial");
const btnM = () => fontFunc(inter.style.fontFamily, 16, "20px", "initial");
const btnS = () => fontFunc(inter.style.fontFamily, 14, "18px", "initial");
const btnXs = () => fontFunc(inter.style.fontFamily, 12, "16px", "initial");

export const typoSystem = {
  fontFamily: [
    inter.style.fontFamily,
    montserrat.style.fontFamily,
    "-apple-system",
    "Arial",
  ].join(","),

  // headline1
  headline1Regular: {
    ...headline1(),
    fontWeight: 400,
  },
  headline1Medium: {
    ...headline1(),
    fontWeight: 500,
  },
  headline1Semibold: {
    ...headline1(),
    fontWeight: 600,
  },
  headline1Bold: {
    ...headline1(),
    fontWeight: 700,
  },

  // headline2
  headline2Regular: {
    ...headline2(),
    fontWeight: 400,
  },
  headline2Medium: {
    ...headline2(),
    fontWeight: 500,
  },
  headline2Semibold: {
    ...headline2(),
    fontWeight: 600,
  },
  headline2Bold: {
    ...headline2(),
    fontWeight: 700,
  },

  // headline3
  headline3Regular: {
    ...headline3(),
    fontWeight: 400,
  },
  headline3Medium: {
    ...headline3(),
    fontWeight: 500,
  },
  headline3Semibold: {
    ...headline3(),
    fontWeight: 600,
  },
  headline3Bold: {
    ...headline3(),
    fontWeight: 700,
  },

  // headline4
  headline4Regular: {
    ...headline4(),
    fontWeight: 400,
  },
  headline4Medium: {
    ...headline4(),
    fontWeight: 500,
  },
  headline4Semibold: {
    ...headline4(),
    fontWeight: 600,
  },
  headline4Bold: {
    ...headline4(),
    fontWeight: 700,
  },

  // headline5
  headline5Regular: {
    ...headline5(),
    fontWeight: 400,
  },
  headline5Medium: {
    ...headline5(),
    fontWeight: 500,
  },
  headline5Semibold: {
    ...headline5(),
    fontWeight: 600,
  },
  headline5Bold: {
    ...headline5(),
    fontWeight: 700,
  },

  // end Headline

  // subheadline1Inter
  subheadline1InterRegular: {
    ...subheadline1Inter(),
    fontWeight: 400,
  },
  subheadline1InterMedium: {
    ...subheadline1Inter(),
    fontWeight: 500,
  },
  subheadline1InterSemibold: {
    ...subheadline1Inter(),
    fontWeight: 600,
  },
  subheadline1InterBold: {
    ...subheadline1Inter(),
    fontWeight: 700,
  },

  // subheadline1Mont
  subheadline1MontRegular: {
    ...subheadline1Mont(),
    fontWeight: 400,
  },
  subheadline1MontMedium: {
    ...subheadline1Mont(),
    fontWeight: 500,
  },
  subheadline1MontSemibold: {
    ...subheadline1Mont(),
    fontWeight: 600,
  },
  subheadline1MontBold: {
    ...subheadline1Mont(),
    fontWeight: 700,
  },

  // subheadline2
  subheadline2Regular: {
    ...subheadline2(),
    fontWeight: 400,
  },
  subheadline2Medium: {
    ...subheadline2(),
    fontWeight: 500,
  },
  subheadline2Semibold: {
    ...subheadline2(),
    fontWeight: 600,
  },
  subheadline2Bold: {
    ...subheadline2(),
    fontWeight: 700,
  },

  // subheadline3
  subheadline3Regular: {
    ...subheadline3(),
    fontWeight: 400,
  },
  subheadline3Medium: {
    ...subheadline3(),
    fontWeight: 500,
  },
  subheadline3Semibold: {
    ...subheadline3(),
    fontWeight: 600,
  },
  subheadline3Bold: {
    ...subheadline3(),
    fontWeight: 700,
  },

  // subheadline3Mont
  subheadline3MontRegular: {
    ...subheadline3Mont(),
    fontWeight: 400,
  },
  subheadline3MontMedium: {
    ...subheadline3Mont(),
    fontWeight: 500,
  },
  subheadline3MontSemibold: {
    ...subheadline3Mont(),
    fontWeight: 600,
  },
  subheadline3MontBold: {
    ...subheadline3Mont(),
    fontWeight: 700,
  },

  // end subheadline

  // body1
  body1Regular: {
    ...body1(),
    fontWeight: 400,
  },
  body1Medium: {
    ...body1(),
    fontWeight: 500,
  },
  body1Semibold: {
    ...body1(),
    fontWeight: 600,
  },
  body1Bold: {
    ...body1(),
    fontWeight: 700,
  },

  // body2
  body2Regular: {
    ...body2(),
    fontWeight: 400,
  },
  body2Medium: {
    ...body2(),
    fontWeight: 500,
  },
  body2Semibold: {
    ...body2(),
    fontWeight: 600,
  },
  body2Bold: {
    ...body2(),
    fontWeight: 700,
  },

  // body3
  body3Regular: {
    ...body3(),
    fontWeight: 400,
  },
  body3Medium: {
    ...body3(),
    fontWeight: 500,
  },
  body3Semibold: {
    ...body3(),
    fontWeight: 600,
  },
  body3Bold: {
    ...body3(),
    fontWeight: 700,
  },

  // body3Mont
  body3MontRegular: {
    ...body3Mont(),
    fontWeight: 400,
  },
  body3MontMedium: {
    ...body3Mont(),
    fontWeight: 500,
  },
  body3MontSemibold: {
    ...body3Mont(),
    fontWeight: 600,
  },
  body3MontBold: {
    ...body3Mont(),
    fontWeight: 700,
  },

  // body4
  body4Regular: {
    ...body4(),
    fontWeight: 400,
  },
  body4Medium: {
    ...body4(),
    fontWeight: 500,
  },
  body4Semibold: {
    ...body4(),
    fontWeight: 600,
  },
  body4Bold: {
    ...body4(),
    fontWeight: 700,
  },

  // body4Mont
  body4MontRegular: {
    ...body4Mont(),
    fontWeight: 400,
  },
  body4MontMedium: {
    ...body4Mont(),
    fontWeight: 500,
  },
  body4MontSemibold: {
    ...body4Mont(),
    fontWeight: 600,
  },
  body4MontBold: {
    ...body4Mont(),
    fontWeight: 700,
  },
  // end Body

  // btnL
  btnLRegular: {
    ...btnL(),
    fontWeight: 400,
  },
  btnLMedium: {
    ...btnL(),
    fontWeight: 500,
  },
  btnLSemibold: {
    ...btnL(),
    fontWeight: 600,
  },

  // btnM
  btnMRegular: {
    ...btnM(),
    fontWeight: 400,
  },
  btnMMedium: {
    ...btnM(),
    fontWeight: 500,
  },
  btnMSemibold: {
    ...btnM(),
    fontWeight: 600,
  },

  // btnS
  btnXsRegular: {
    ...btnXs(),
    fontWeight: 400,
  },
  btnXsMedium: {
    ...btnXs(),
    fontWeight: 500,
  },
  btnXsSemibold: {
    ...btnXs(),
    fontWeight: 600,
  },

  // btnXs
  btnSRegular: {
    ...btnS(),
    fontWeight: 400,
  },
  btnSMedium: {
    ...btnS(),
    fontWeight: 500,
  },
  btnSSemibold: {
    ...btnS(),
    fontWeight: 600,
  },

  // end btn
};
