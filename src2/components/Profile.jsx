import React from 'react'

const Profile = (props) => {
  // || --> a || b 둘중에 하나라도 true이면 true
  // && --> a && b 둘 다 true 이어야 true

  console.log(props)

  // const img = props.img
  // const name = props.name
  // const title = props.title

  // 구조분해 destructure
  const {img,name,title,isNew}= props
  return (
    <div className='profile'>
        <img src={img} alt="avatar"/>
        {/* {props.isNew?<span className='new'>신입</span>:""} */}
        {isNew&&<span className='new'>신입</span>}
        <h2>{name}</h2>
        <p>{title}</p>
    </div>
  )
}

export default Profile