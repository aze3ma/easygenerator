import React from 'react';
import { useForm } from 'react-hook-form';
import { RegisterFormType } from '../types';

const RegisterForm =  ({ onSubmit }: { onSubmit: (data: RegisterFormType) => void }) => {
  const { register, handleSubmit,  formState: { errors } } = useForm<RegisterFormType>();

  const onSubmitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

    
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-6">

            <div>
              <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                    Firstname
              </label>
              <div className="mt-2">
                <input
                  {...register("firstName", { required: "First Name is required", minLength: 2, maxLength: 25 })}
                  id="firstName"
                  type="text"
                  required
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                             placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName.message as string}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                    Lastname
              </label>
              <div className="mt-2">
                <input
                  {...register("lastName", { required: "Last Name is required", minLength: 2, maxLength: 25 })}
                  id="lastName"
                  type="text"
                  required
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                             placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName.message as string}</p>}
            </div>
      
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
              </label>
              <div className="mt-2">
                <input
                  {...register("email", { required: "Email is required", pattern: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
                  id="email"
                  type="email"
                  required
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                             placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message as string}</p>}
            </div>
    
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  {...register("password", { required: "Password is required", minLength: 6, pattern: /(?=.*\d)/ })}
                  id="password"
                  type="password"
                  required
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                             ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                              sm:text-sm sm:leading-6"
                />
              </div>
              {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message as string}</p>}
            </div>
            
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm
                           hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                    Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
    
export default RegisterForm;
  