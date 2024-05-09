"use client";
import { Button } from "antd";
const ButtonMain = (props: any) => {
  const { name, width } = props;
  return (
    <Button
      style={{
        background: "linear-gradient(to right, #2152FF, #21D4FD)",
        color: "white",
        fontWeight: 600,
        width: width ? width : "auto",
      }}
    >
      {name}
    </Button>
  );
};
export default ButtonMain;
