import React from 'react';

function InputWithLabel({id, value, type='text', onInputChange, isFocused, children,}) {

  const inputRef = React.useRef();

  React.useEffect(() =>  {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <div>
      <label className='label' htmlFor={id}>{children}</label>
      &nbsp;
      <input className='input-text'
        ref={inputRef}
        id={id}
        type={type} 
        value={value}
        autoFocus={isFocused}
        onChange={onInputChange}
      />
    </div>
  );
};

export default InputWithLabel;