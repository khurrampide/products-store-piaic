import React, { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className='max-w-[1093px] mx-auto '>
      {children}
    </div>
  );
};

export default Wrapper;
