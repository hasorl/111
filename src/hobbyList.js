import React, { useState } from 'react';

function HobbyList({
  hobbies,
  addHobby,
  deleteHobby,
  isEditingHobbies,
  setIsEditingHobbies,
  buttonStyle,
  inputStyle
}) {
  const [newHobby, setNewHobby] = useState('');

  const handleAdd = () => {
    addHobby(newHobby);
    setNewHobby('');
  };

  const styles = {
    list: {
      listStyleType: 'none', 
      paddingLeft: '0', 
    },
    listItem: {
      marginBottom: '5px',
    },
    title: {
      fontSize: '16px',          
      fontWeight: 'normal',    
    },
  };

  return (
    <div>
      <h2 style={styles.title}>취미 목록</h2> {/* 텍스트 스타일 적용 */}
      <button onClick={() => setIsEditingHobbies(!isEditingHobbies)} style={buttonStyle}>
        {isEditingHobbies ? '저장' : '수정'}
      </button>
      <ul style={styles.list}>
        {hobbies.map((hobby, index) => (
          <li key={index} style={styles.listItem}>
            {hobby}
            {isEditingHobbies && (
              <button onClick={() => deleteHobby(index)} style={buttonStyle}>삭제</button>
            )}
          </li>
        ))}
      </ul>
      {isEditingHobbies && (
        <div>
          <input
            type="text"
            value={newHobby}
            onChange={(e) => setNewHobby(e.target.value)}
            placeholder="새 취미 입력"
            style={inputStyle}
          />
          <button onClick={handleAdd} style={buttonStyle}>추가</button>
        </div>
      )}
    </div>
  );
}

export default HobbyList;
