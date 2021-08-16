import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0); // [state名, 更新する関数] = usedState(初期値);
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickButton}>カウントアップ！</button>
      <p>{num}</p>
    </>
  );
};

export default App;
