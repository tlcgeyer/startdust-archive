import React from 'react'

const Navbar = () => {
  return (
      <div>
     {/* overal game progress */}
          <p>General</p>
          {/* Ingame materials  */}
          <p>Materials</p>
      {/* (drop down with LI names which will take you to the memories)*/}
      <p>Memories</p>
      {/*(guide on which protocore fits the memory)*/}
      <p>Build</p>
      {/*(outfits-insert or make a priorit of which skin u wanna save for)*/}
      <p>Collectibles</p> 
          {/*(dropdown of LIs names & images took with the mc & the bar codes if people wanna share it) */
              <p>Studio</p>}
          <p>User</p>
    </div>
  );
}

export default Navbar