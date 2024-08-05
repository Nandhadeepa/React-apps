import React from 'react'

function SimpleArray() {
    const CourseList=['C','C++','SQL']
  return (
    <div>
        <ol>{
            CourseList.map((course,i)=><li key={i}>{course}</li>)
            }
            
        </ol>
        
    </div>
  )
}

export default SimpleArray