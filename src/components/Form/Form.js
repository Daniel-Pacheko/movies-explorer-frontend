import React from "react";
import "./Form.css";
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom";

function Form({ title, name, onSubmit, textBtn, text, textLink, children, path }) {

  return (
    <div className="auth">
      <Logo />
      <h1 className="auth__title">{title}</h1>
      <form className="form" name={name} onSubmit={onSubmit} noValidate>
        <fieldset className="form__field">
          {children}
        </fieldset>
        <button className="form__btn" type="submit" onClick={onSubmit} >{textBtn}</button>

      </form>
      <p className="auth__text">{text} <Link to={path} className="auth__link">{textLink}</Link></p>
    </div>
  )
}
export default Form;