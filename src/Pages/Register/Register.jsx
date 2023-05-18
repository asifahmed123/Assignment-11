import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
     const {registerUser, updateUser} = useContext(AuthContext);

     const handleRegister = (event) => {
          event.preventDefault();
          const form = event.target;
          const name = form.name.value;
          const photo = form.photo.value;
          const email = form.email.value;
          const password = form.password.value;
          console.log(name, photo, password, email);

          registerUser(email, password)
          .then(result => {
               console.log(result.user);
               updateUser(name, photo)
          })
          .catch(error => {
               console.log(error.message);
          })
     }

     return (
          <div className='lg:flex justify-center items-center mb-10 mt-20'>
               <form onSubmit={handleRegister} className="flex flex-col gap-4 w-[100%] lg:w-[40%]">
                    <h2 className='text-5xl font-bold'>Please Register...</h2>
                    <div>
                         <div className="mb-2 block">
                              <Label
                                   htmlFor="name"
                                   value="Your name"
                              />
                         </div>
                         <TextInput
                              id="name"
                              type="text"
                              name="name"
                              required={true}
                         />
                    </div>
                    <div>
                         <div className="mb-2 block">
                              <Label
                                   htmlFor="photo"
                                   value="Your Photo URL"
                              />
                         </div>
                         <TextInput
                              id="photo"
                              type="text"
                              name="photo"
                              required={true}
                         />
                    </div>
                    <div>
                         <div className="mb-2 block">
                              <Label
                                   htmlFor="email1"
                                   value="Your email"
                              />
                         </div>
                         <TextInput
                              id="email1"
                              type="email"
                              name="email"
                              required={true}
                         />
                    </div>
                    <div>
                         <div className="mb-2 block">
                              <Label
                                   htmlFor="password1"
                                   value="Your password"
                              />
                         </div>
                         <TextInput
                              id="password1"
                              name="password"
                              type="password"
                              required={true}
                         />
                    </div>
                    <Button type="submit">
                         <Link to='/login' >
                              Register
                         </Link>
                    </Button>
                    {/* <p className='text-red-500'>{error}</p> */}
                    {/* <p className='text-green-500'>{success}</p> */}
                    <p>Already have an account? please <Link className='text-blue-500' to='/login'>Login</Link></p>
               </form>
               <div className='w-[100%] lg:w-[50%] mt-20'>
                    <img className='' src="https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?w=1060&t=st=1683046237~exp=1683046837~hmac=036617db07f9b0d5118b1dcc5b3a71b1fc34f4b987d37ef7ffb6a903a4017c37" alt="" />
               </div>
          </div>
     );
};

export default Register;