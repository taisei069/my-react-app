import { useState } from "react";//変化するデータを扱うためには必要

const Profile = ({ name, age, hobby, message }) => {
    const [currentAge,setCurrentAge] = useState(age);
    //useState(age):「最初は、親からもらった age という数字を覚えておいて」という初期設定
    //currentAge (現在の値):「今、何歳だっけ？」とデータを取り出すための名前です。画面（{currentAge}歳）で使います。
    //setCurrentAge (更新用のリモコン):ここが超重要です。 Reactでは currentAge = 23 のように直接書き換えても画面は変わりません。この setCurrentAge という専用のリモコン（関数）を使って報告した時だけ、Reactは「おっ、数値が変わったな！画面を書き換えよう！」と動いてくれます。
    return (
        <div style={{ border: "1px solid", padding: "10px", marginBottom: "10px" }}>
            <h2>My Profile: {name}</h2> {/* 名前を表示 */}
            <p>年齢: {currentAge}歳</p>      {/* 年齢を表示 */}
            {currentAge >= 20 && <p>お酒を飲めます</p>}
            <p>趣味: {hobby}</p>     {/* 趣味を表示 */}
            <p>{message}</p>         {/* メッセージを表示 */}
            <button onClick ={() => setCurrentAge(currentAge + 1)}>年齢を増やす</button>
        </div>
    )
}
export default Profile