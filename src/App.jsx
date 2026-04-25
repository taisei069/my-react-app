import { useState } from 'react'
import './App.css'
import Profile from "./MyProfile"
import NameInput from "./NameInput"
function Message(props){
  return(
    <div style={{border: '1px solid #646cff', padding: '10px', borderRadius: '8px', marginTop: '10px'}}>
      <h2>筋トレ日記</h2>
      <p>頑張れ。林さん</p>
      <p>現在の記録：{props.count}回</p>
    </div>
  )
}
function App() {
  const [count, setCount] = useState(0)
  const [name,setName] = useState('') 
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleReset = () => {
    setName('')
  }
  return (
    <div style ={{ padding: "20px"}}>
      <h1>プロフィール一覧</h1>
     <Profile
       name="大成" 
       age= {22}
       hobby="プログラミング"
       message="よろしくお願いします。"

     />

     <Profile
       name="マナカ" 
       age={15}
       hobby="プログラミング"
       message="よろしくお願いします。"
     />
     <Message count  ={count} />
     <button onClick = {() => setCount(count + 1)}>回数を増やす</button>
     <NameInput
      name ={name}
      handleNameChange = {handleNameChange}
      handleReset = {handleReset}
     />
     


     
    </div>
  )
}

export default App