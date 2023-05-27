import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectStatusError } from 'redux/auth/selectors';

import { useFormik } from 'formik';
import * as yup from 'yup';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { WrapperForm } from './LoginForm.style';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const LoginForm = () => {
  const statusError = useSelector(selectStatusError);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: value => {
      dispatch(
        logIn({
          email: value.email,
          password: value.password,
        })
      );
    },
  });

  return (
    <>
      <WrapperForm>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            margin="dense"
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            margin="dense"
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {statusError === 400 ? (
            <div style={{ color: 'red' }}>Невірний логін або пароль</div>
          ) : (
            ''
          )}
          <Button color="primary" variant="contained" fullWidth type="submit">
            Log In
          </Button>
        </form>
      </WrapperForm>
    </>
  );
};
