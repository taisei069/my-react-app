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
  const [students,setStudents] = useState([
    {id:1,name:'大成',age:'22',hobby:'HIPHOP'},
    {id:2,name:'真中',age:'25',hobby:'HIPHOP'},
    {id:3,name:'まな',age:'23',hobby:'HIPHOP'},
  ])
  const addStudent = () =>{
    if (name === '')return;
    const newStudent = {
      id:students.length + 1,
      name: name,
      age: 20,
      hobby:'勉強中です',
    };
    setStudents([...students,newStudent]);

    setName('');
  }
  const deleteStudent = (id) =>{
    const newStudent = students.filter((student) => student.id !== id);
    setStudent (newStudent);
  }



 return (
    /* 【箱1】一番外側の大きな箱。これは縦に積んでいく設定（デフォルト） */
    <div style={{ 
      alignItems:'center',
      padding: "20px" }}>
      
      {/* 【箱2】入力欄とボタンだけを入れる「小さな横長の箱」を作る */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '20px' }}>
        <NameInput
          name={name}
          handleNameChange={handleNameChange}
          handleReset={handleReset}
        />
        <button onClick={() => addStudent()}>新しく追加</button>
      </div>

      {/* ここから下は【箱1】の中に直接入っているので、勝手に縦に並びます */}
      <h1>プロフィール一覧</h1>
      
      {students.map((student) => (
        <Profile
          key={student.id}
          name={student.name}
          age={student.age}
          hobby={student.hobby}
          message="よろしくお願いします。"
          onDelete = {() => deleteStudent(student.id)}
        />
      ))}
      
      <Message count={count} />
      <button onClick={() => setCount(count + 1)}>回数を増やす</button>
      
    </div>
  )
}


export default App