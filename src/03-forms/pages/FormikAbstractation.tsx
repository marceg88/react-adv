import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'
import { MyTextInput, MySelect, MyCheckbox } from '../components/index'

export const FormikAbstractation = () => {

  return (<div>
    <h1>Formik Yup</h1>

    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        terms: false,
        jobType: ''
      }}
      onSubmit={( values ) => {
        console.log(values)
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().max(15,'Debe de tener 15 caracteres o menos').required('Requerido'),
        lastName: Yup.string().max(15,'Debe de tener 15 caracteres o menos').required('Requerido'),
        email: Yup.string().email('El correo no tiene un formato valido').required('Requerido'),
        terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
        jobType: Yup.string().required('Requerido').notOneOf(['it-junior'], 'Esta opción no es permitida')
      })}
    >
      { (formik)  => (
        <Form>
          <MyTextInput 
            label='First Name' 
            name='firstName'
            placeholder='Nombre'
          />

          <MyTextInput 
            label='Last Name' 
            name='lastName'
            placeholder='Apellido'
          />

          <MyTextInput 
            label='Email Address' 
            name='email'
            placeholder='example@prueba.com.co'
            type='email'
          />

          <MySelect 
            label='Job Type'
            name='jobType'
          >
            <option value="">Pick something</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="it-senior">Senior</option>
            <option value="it-junior">Junior</option>
          </MySelect>

          <MyCheckbox 
            label='Terms and conditions'
            name='terms'
          />
          <button type='submit'>Type submit</button>
       </Form>
      )}
    </Formik>
   
  </div>)
}

export default FormikAbstractation