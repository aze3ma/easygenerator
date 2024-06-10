import React from 'react';
import { useForm } from 'react-hook-form';
import { LoginFormType } from '../types';

const LoginForm =  ({ onSubmit }: { onSubmit: (data: LoginFormType) => void }) => {
  const { register, handleSubmit,  formState: { errors } } = useForm<LoginFormType>();

  const onSubmitHandler = (data: LoginFormType) => {
    onSubmit(data);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
  
  
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
              </label>
              <div className="mt-2">
                <input
                  {...register("email", { required: "Email is required", pattern: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
                  id="email"
                  type="email"
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
                  {...register("password", { required: "Password is required" })}
                  id="password"
                  type="password"
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
                  Login
              </button>
            </div>
          </form>
  
        </div>
      </div>
    </>
  );
};
  
export default LoginForm;
