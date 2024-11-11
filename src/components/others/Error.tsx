import React from 'react';

const Error: React.FC<{text: string}> = ({ text }) => {
  console.log(text);
  return (
    <div>
      <p>Oops.. something went wrong</p>
    </div>
  );
};

export default Error;