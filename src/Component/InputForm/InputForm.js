import React from 'react'
import style from "./InputForm.module.css"

export default function InputForm(props) {
  return (
    <div className={style.container}>
        {props.label && <label>{props.label}</label>}
        <input {...props}/>

    </div>
  )
}
