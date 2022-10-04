import React from 'react';
import { useCallback } from 'react'

export function useFormWithValidation() {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@;]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const handleChange = (e) => {
        const input = e.target;
        const name = input.name;
        const value = input.value;
        setValues({
            ...values,
            [name]: value
        });
        if ( name === "email" && !validateEmail(value)){
            setErrors({
                ...errors,
                [name]: "Введен некорректные Email. Пример: `yandex@yandex.ru` После точки должно быть минимум 2 символа."
            });
            setIsValid(false);
        } else {
            setErrors({
                ...errors,
                [name]: input.validationMessage
            });
            setIsValid(input.closest("form").checkValidity());
        }
        
       
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return { values, handleChange, errors, isValid, resetForm, setIsValid, setValues };
}