import { makeStyles } from "@material-ui/core";

const loginViewStyle = makeStyles({
  root: {
    margin: "25px",
    width: "47vw",
  },
  cacheButton: {
    float: "right",
    color: "#929292",
  },
  loginButton: {
    display: "block",
    margin: "50px auto 0 auto",
    borderRadius: "0",
    width: "60%",
    height: "60px",
    fontSize: "150%",
    fontWeight: "bold",
  },
  revokeLink: {
    margin: "10px auto",
    textAlign: "center",
    display: "block",
    width: "150px",
    color: "white",
  },
});

export default loginViewStyle;
