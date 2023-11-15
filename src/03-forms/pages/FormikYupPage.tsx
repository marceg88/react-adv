import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormikYupPage = () => {

  //Se pueden desestructurar todos los metodos del formik
  const { 
    handleSubmit, touched, errors, getFieldProps 
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: (values) => { //Solo se dispara cuando todas las reglas de validación fueron superadas
      console.log(values)
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15,'Debe de tener 15 caracteres o menos').required('Requerido'),
      lastName: Yup.string().max(15,'Debe de tener 15 caracteres o menos').required('Requerido'),
      email: Yup.string().email('El correo no tiene un formato valido').required('Requerido')
    })
  })

  return (<div>
    <h1>Formik Yup</h1>
    <form onSubmit={ handleSubmit } noValidate>
      <label htmlFor='firstName'>First name</label>
      <input 
        type='text'
        { ...getFieldProps('firstName') } //coloca todos los metodos del formik al input
      />
      { touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
      <label htmlFor='lastName'>Last name</label>
      <input 
        type='text'
        { ...getFieldProps('lastName') }
      />
      { touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
      <label htmlFor='email'>Email Address</label>
      <input 
        type='email'
        { ...getFieldProps('email') }
      />
      { touched.email && errors.email && <span>{errors.email}</span>}


      <button type='submit'>Type submit</button>
    </form>
  </div>)
}

export default FormikYupPage