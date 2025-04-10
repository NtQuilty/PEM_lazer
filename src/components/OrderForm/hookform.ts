import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Обязательное поле')
    .matches(/^[а-яА-ЯёЁa-zA-Z\s]+$/, 'Только буквы'),

  telephone: yup
    .string()
    .required('Обязательное поле')
    .matches(/^[0-9+\-() ]+$/, 'Некорректный формат телефона'),

  mail: yup
    .string()
    .default('')
    .transform(value => value ?? ''),

  message: yup
    .string()
    .default('')
    .transform(value => value ?? ''),

  files: yup
    .mixed<File[]>()
    .default([])
    .test('is-file-array', 'Должен быть массив файлов', value => {
      if (!value || !Array.isArray(value)) return false;
      return value.every(item => item instanceof File);
    }),

  agreeToTerms: yup.boolean().oneOf([true], 'Необходимо согласие').required('Обязательное поле'),
});
