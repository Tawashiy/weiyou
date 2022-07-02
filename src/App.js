import { useState } from "react";
import "./styles.css";

export const App = () => {
  const nums = []; //ランダムの数字を格納する
  const [out, outState] = useState("ここに数字が出ます");
  const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const startFlushNum = async () => {
    outState("スタート！");
    for (let i = 0; i < 10; i++) {
      const num = Math.floor(Math.random() * (100 - 1) + 1);
      nums.push(num);
      await _sleep(1000);
      outState(num);
    }
    outState("フィニッシュ！");
  };

  return (
    <div className="App">
      <h1>記憶力アップ(ウェイヨ～)</h1>
      <h3>{out}</h3>
      <button onClick={startFlushNum}>スタート</button>
      <button onClick={() => console.log("wei")}>ボタン</button>
    </div>
  );
};
