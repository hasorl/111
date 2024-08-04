import React from 'react';

function Profile({
  name, email, age,
  setName, setEmail, setAge,
  editingField, setEditingField,
  buttonStyle, inputStyle
}) {
  const handleEdit = (field) => {
    setEditingField(editingField === field ? null : field);
  };

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  return (
    <div>
      <div>
        <label>이름: </label>
        {editingField === 'name' ? (
          <input
            type="text"
            value={name}
            onChange={handleChange(setName)}
            style={inputStyle}
          />
        ) : (
          <span>{name}</span>
        )}
        <button onClick={() => handleEdit('name')} style={buttonStyle}>
          {editingField === 'name' ? '저장' : '수정'}
        </button>
      </div>
      <div>
        <label>이메일: </label>
        {editingField === 'email' ? (
          <input
            type="email"
            value={email}
            onChange={handleChange(setEmail)}
            style={inputStyle}
          />
        ) : (
          <span>{email}</span>
        )}
        <button onClick={() => handleEdit('email')} style={buttonStyle}>
          {editingField === 'email' ? '저장' : '수정'}
        </button>
      </div>
      <div>
        <label>나이: </label>
        {editingField === 'age' ? (
          <input
            type="number"
            value={age}
            onChange={handleChange(setAge)}
            style={inputStyle}
          />
        ) : (
          <span>{age}</span>
        )}
        <button onClick={() => handleEdit('age')} style={buttonStyle}>
          {editingField === 'age' ? '저장' : '수정'}
        </button>
      </div>
    </div>
  );
}

export default Profile;
