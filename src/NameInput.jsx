function NameInput ({name ,handleNameChange,handleReset,hobby,handleHobbyChange}){
    return(
        <div className = "input-area">
      <input 
      type = "text" 
      placeholder='名前を入力'
      value = {name}
      onChange = {handleNameChange}
      />
      <input 
        type="text" 
        placeholder="趣味を入力"
        value={hobby}
        onChange={handleHobbyChange}
      />

      <button onClick={handleReset}>リセット</button>

      <p>
        {name ? `こんにちは、${name}さん！` : '名前を入力してください'}
        <br />
        {hobby && `趣味は ${hobby} ですね。`}
      </p>
      <button onClick ={handleReset}>リセット</button>
      <p>{name ? 'こんにちは' + name + 'さん ': '名前を入力してください'}</p>
      

     </div>




    )
}

export default NameInput