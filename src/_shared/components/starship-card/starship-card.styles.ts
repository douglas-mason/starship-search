import { css } from "@emotion/css";

export const starshipCardStyles = css({
  backgroundColor: "#232524",
  minWidth: 350,
  width: 600,
  padding: 24,
  borderRadius: 15,
  "@media (max-width: 700px)": {
    width: 250,
  },
});

export const starshipCardInfoContainerStyles = css({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  h2: {
    margin: "0 0 16px 0",
  },
});

export const starshipCardImageStyles = css({
  display: "flex",
  alignItems: "center",

  "@media (max-width: 700px)": {
    maxWidth: 200,
    overflow: "hidden",
  },
  "> img": {
    borderRadius: 8,
    marginLeft: 15,
  },
});

export const starshipCardHeartImageStyles = css({
  position: "absolute",
  right: 10,
  top: 10,
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

export const starshipCardNotesContainer = css({
  marginTop: 16,
  textarea: {
    width: "100%",
    backgroundColor: "transparent",
    border: "1px solid #D9D9D9",
    boxSizing: "border-box",
    borderRadius: 10,
    resize: "none",
    height: 110,
    color: "#ffffff",
    padding: 13,
    fontSize: 18,
  },
});

export const starshipFavoriteButtonStyles = css({
  padding: 0,
  margin: 0,
  background: "none",
  border: "none",
  cursor: "pointer",
});
