import React from "react";
import GeeTest, { GeeTestRef } from "react-geetest-v4";

const Captcha = () => {
  const captchaRef = React.useRef<GeeTestRef | null>(null);
  return (
    <GeeTest
      ref={captchaRef}
      captchaId={"3642f2d0f6ef52630c007707013b8ae3"}
      product={"popup"}
      onSuccess={() => console.log("success")}
    />
  );
};

export default Captcha;
