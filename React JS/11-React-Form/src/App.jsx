import './App.css'
import {useForm} from "react-hook-form"

function App() {

  const{
    register,
    handleSubmit,
    watch,
    formState: {errors, isSubmitting}, // --> is submitting shows if form is in submitting stage or not
  } = useForm();

  async function onSubmit(data) {
    // simulating api call 
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Data is Submitted", data)
  }
// when api call is happening delay of 5sec if the submit is clicked more time then
// it will be submitted many times, we have to ensure that submit should not work 
// until the first submit has been sucessfull 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label> First Name: </label>
        <input className={errors.firstname ? 'input-error' : ""}
        {...register('firstname' , {
            required: true, 
            minLength: {value: 3, message: 'Min Let atleast 3'},
            maxLength: 5
          })}/>
          {errors.firstname && <p className='error-msg'>{errors.firstname.message}</p>}
      </div>
      <br/>
      <div>
        <label> Middle Name: </label>
        <input {...register('middlename')}/>
      </div>
      <br/>
      <div>
        <label> Last Name: </label>
        <input {...register('lastname', {
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: 'Last name is not as per the rules'
          }
        })}/>
        {errors.lastname && <p className='error-msg'>{errors.lastname.message}</p>}
      </div>
      <br/>
      <input type='submit' disable={isSubmitting}
      value={isSubmitting ? "submitting" : "submit"}/>
    </form>
  )
}

export default App
