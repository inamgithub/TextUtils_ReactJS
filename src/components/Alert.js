import React from 'react'


export default function Alert(props) {
  return (
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong> {props.alert} </strong> {props.alert}  was successfully copied to clipboard
        
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}
