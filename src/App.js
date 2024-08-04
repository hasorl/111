import React, { useState } from 'react';
import Profile from './profile';
import HobbyList from './hobbyList';

function App() {
  // 사용자 정보를 상태로 관리
  const [name, setName] = useState('홍길동');
  const [email, setEmail] = useState('honggildong@example.com');
  const [age, setAge] = useState(30);
  const [hobbies, setHobbies] = useState(['독서', '등산', '요리']);
  
  // 필드 수정 상태 관리
  const [editingField, setEditingField] = useState(null);
  const [isEditingHobbies, setIsEditingHobbies] = useState(false);

  // 취미 추가 및 삭제 핸들러
  const handleAddHobby = (newHobby) => {
    if (newHobby.trim() !== '') {
      setHobbies([...hobbies, newHobby]);
    }
  };

  const handleDeleteHobby = (index) => {
    setHobbies(hobbies.filter((_, i) => i !== index));
  };

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: 'black',  // 배경색을 검은색으로
      color: 'white',            // 글씨 색을 흰색으로
      minHeight: '100vh',        // 페이지 전체에 배경 적용
    },
    header: {
      marginBottom: '20px',
      color: 'white',            // 헤더 글씨 색을 흰색으로
    },
    button: {
      backgroundColor: 'blue',   // 버튼 배경색을 파란색으로
      color: 'white',            // 버튼 글씨 색을 흰색으로
      border: 'none',
      padding: '5px 10px',
      cursor: 'pointer',
      marginLeft: '10px'
    },
    input: {
      marginRight: '10px',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>본인 소개 페이지</h1>
      <Profile
        name={name}
        email={email}
        age={age}
        setName={setName}
        setEmail={setEmail}
        setAge={setAge}
        editingField={editingField}
        setEditingField={setEditingField}
        buttonStyle={styles.button}  // 버튼 스타일 전달
        inputStyle={styles.input}    // 입력 스타일 전달
      />
      <HobbyList
        hobbies={hobbies}
        addHobby={handleAddHobby}
        deleteHobby={handleDeleteHobby}
        isEditingHobbies={isEditingHobbies}
        setIsEditingHobbies={setIsEditingHobbies}
        buttonStyle={styles.button}  // 버튼 스타일 전달
        inputStyle={styles.input}    // 입력 스타일 전달
      />
    </div>
  );
}

export default App;
