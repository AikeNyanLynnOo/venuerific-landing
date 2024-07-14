export const calculateSpacing = (
  xl: boolean,
  lg: boolean,
  md: boolean,
  sm: boolean,
  defaultValue: number
) => {
  if (xl) {
    //isScreenLargerThan1280
    return defaultValue; // 100%
  } else if (lg) {
    // isScreenLargerThan1024
    return (defaultValue * 4) / 5; // 80%
  } else if (md) {
    // isScreenLargerThan768
    return (defaultValue * 3) / 5; // 60%
  } else if (sm) {
    // isScreenLargerThan640
    return (defaultValue * 2) / 5; // 40%
  } else {
    return defaultValue / 5; // 20%
  }
};
