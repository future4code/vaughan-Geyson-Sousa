import React from 'react'
import FormFeed from './FormFeed'
import CardFeed from './CardFeed'
import useProtectedPage from  '../../hooks/useProtectPage'

function Feed() {
useProtectedPage()
  
  

  return (
    <div>
      <FormFeed/>
      <CardFeed/>
    </div>
  );

}
export default Feed;