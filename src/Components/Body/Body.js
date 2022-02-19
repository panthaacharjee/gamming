import React from 'react'
import SideContent from './SideContent/SideContent'


const Body = () => {
  return (
    <>
      <div className="container body">
        <div className="side_content">
          <SideContent/>
        </div>
        <div className="my_warriors">
            MyWarriors
        </div>
      </div>
    </>
  )
}

export default Body