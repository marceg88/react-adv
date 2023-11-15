import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormikComponents = () => {

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
        <label htmlFor='firstName'>First name</label>
        <Field name="firstName" type="text"/>
        <ErrorMessage name='firstName' component='span'/>
        <label htmlFor='lastName'>Last name</label>
        <Field name="lastName" type="text"/>
        <ErrorMessage name='lastName' component='span'/>
        <label htmlFor='email'>Email Address</label>
        <Field name="email" type="text"/>
        <ErrorMessage name='email' component='span'/>

        <label htmlFor='email'>Job Type</label>
        <Field name="jobType" as="select">
          <option value="">Pick something</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="it-senior">Senior</option>
          <option value="it-junior">Junior</option>

        </Field>
        <ErrorMessage name='jobType' component='span'/>

        <label>
          <Field name="terms" type="checkbox"/>
          Terminos y condiciones
        </label>
         <ErrorMessage name='terms' component='span'/>
         <button type='submit'>Type submit</button>
       </Form>
      )}
    </Formik>
   
  </div>)
}

export default FormikComponents