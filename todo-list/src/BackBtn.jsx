import React from 'react';

export default function BackBtn({ label, onClick }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <button onClick={onClick} style={{ padding: '8px 15px' } }>
        {label}
      </button>
    </div>
  );
}
