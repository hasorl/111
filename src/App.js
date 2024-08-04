import React, { useState } from 'react';
import Profile from './profile';
import HobbyList from './hobbyList';

function App() {
  const [name, setName] = useState('성하솔');
  const [email, setEmail] = useState('hasol@ajou.ac.kr');
  const [age, setAge] = useState(22);
  const [hobbies, setHobbies] = useState(['농구하기', '코노가기', '선풍기']);
  
  const [editingField, setEditingField] = useState(null);
  const [isEditingHobbies, setIsEditingHobbies] = useState(false);

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
      backgroundColor: 'black',
      color: 'white',
      minHeight: '100vh',
    },
    header: {
      marginBottom: '20px',
      color: 'white',
    },
    button: {
      backgroundColor: 'pink',
      color: 'black',
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
        buttonStyle={styles.button}
        inputStyle={styles.input}
      />
      <HobbyList
        hobbies={hobbies}
        addHobby={handleAddHobby}
        deleteHobby={handleDeleteHobby}
        isEditingHobbies={isEditingHobbies}
        setIsEditingHobbies={setIsEditingHobbies}
        buttonStyle={styles.button}
        inputStyle={styles.input}
      />
    </div>
  );
}

export default App;
