import React from "react";
import Form from "../Form/Form";
import Input from "../Input/Imput";

function Login() {

  return (
    <Form title="Рады видеть!" name="signin" textBtn="Войти" text="Еще не зарегистрированы?" textLink="Регистрация" path="/signup">
      <Input
        textLabel="E-mail"
        textErr="Что-то пошло не так"
        inputId="email"
        labelFor="email"
        type="email"
        inputName="email"
        spanId="email-error"
      />
      <Input
        textLabel="Пароль"
        textErr="Что-то пошло не так"
        inputId="password"
        labelFor="password"
        type="password"
        inputName="password"
        spanId="password-error"
        minLength="5"
        maxLength="30"
      />
    </Form>
  )
}
export default Login;