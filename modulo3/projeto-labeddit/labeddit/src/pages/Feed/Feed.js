import React from 'react';
import useProtectedPage from '../../hooks/useProtectPage'

function Feed() {
useProtectedPage()
  return (
    
      <div>
        <h1>FEED</h1>
      </div>
    
  )
}

export default Feed; 