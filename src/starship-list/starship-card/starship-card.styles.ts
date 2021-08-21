import { css } from "@emotion/css";

export const starshipCardStyles = css({
  display: "flex",
  backgroundColor: "#232524",
  maxWidth: 596,
  minWidth: 347,
  padding: 24,
  borderRadius: 15.7361,
});

export const starshipCardImageStyles = css({
  display: "flex",
  alignItems: "center",
  "> img": {
    borderRadius: 8,
  },
});

export const starshipCardHeartImageStyles = css({
  position: "absolute",
  right: 50,
  top: 75,
  backgroundColor: "#232524",
  borderRadius: 100,
  width: 42,
  height: 42,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const starshipCardManufacturerStyles = css({
  marginBottom: 12,
});

export const starshipCardRatingContainerStyles = css({
  marginBottom: 12,
  "&>img": {
    marginRight: 8,
  },
});
