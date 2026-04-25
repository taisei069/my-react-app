function NameInput ({name ,handleNameChange,handleReset}){
    return(
        <div className = "input-area">
      <input 
      type = "text" 
      placeholder='名前を入力'
      value = {name}
      onChange = {handleNameChange}
      />
      <button onClick ={handleReset}>リセット</button>
      <p>{name ? 'こんにちは' + name + 'さん ': '名前を入力してください'}</p>
      

     </div>




    )
}

export default NameInput