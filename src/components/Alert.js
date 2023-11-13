import React from 'react'

export default function Alert(props) {
    let style={
        color:'white',
        backgroundColor:'#7c65f0'
    }
  return (
    props.alert&&<div style={style} class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{props.alert.type}</strong>:{props.alert.msg}
  </div>
  )
}
