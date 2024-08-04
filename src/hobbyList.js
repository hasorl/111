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
      listStyleType: 'none', // 리스트 스타일 타입을 'none'으로 설정하여 가운데 점 제거
      paddingLeft: '0', // 리스트의 기본 패딩 제거
    },
    listItem: {
      marginBottom: '5px',
    },
    title: {
      fontSize: '16px',          // 이름, 이메일, 나이와 동일한 글씨 크기
      fontWeight: 'normal',      // 동일한 글씨 굵기
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
