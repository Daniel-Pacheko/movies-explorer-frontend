import React from "react";
import Form from "../Form/Form";
import Input from "../Input/Imput";

function Register({ onRegister }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(name, email, password);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <Form title="Добро пожаловать!" name="signup" textBtn="Зарегистрироваться" text="Уже зарегистрированы?" textLink="Войти" path="/signin" onSubmit={handleSubmit}>
      <Input
        textLabel="Имя"
        textErr="Что-то пошло не так"
        inputId="name"
        labelFor="name"
        type="text"
        inputName="name"
        spanId="name-error"
        onChange={handleNameChange}
        value={name}
      />
      <Input
        textLabel="E-mail"
        textErr="Что-то пошло не так"
        inputId="email"
        labelFor="email"
        type="email"
        inputName="email"
        spanId="email-error"
        onChange={handleEmailChange}
        value={email}
      />
      <Input
        textLabel="`Пароль`"
        textErr="Что-то пошло не так"
        inputId="password"
        labelFor="password"
        type="password"
        inputName="password"
        spanId="password-error"
        minLength="5"
        maxLength="30"
        onChange={handlePasswordChange}
        value={password}
      />
    </Form>
  )
}
export default Register;