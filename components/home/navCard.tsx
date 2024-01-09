import React from 'react';
import { Button, Flex } from 'antd';

function MyComponent({ }) {
  return (
    <div  className="relative  h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md -md:col-span-2">
    <Flex wrap="wrap" gap="small" className='p-10'>
    {Array.from({ length: 24 }, (_, i) => (
      <Button key={i} type="primary">
        Button
      </Button>
    ))}
  </Flex>
  </div>
  );
}

export default MyComponent;