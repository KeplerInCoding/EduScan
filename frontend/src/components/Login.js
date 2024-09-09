import React from 'react';
import { NavLink } from 'react-router-dom';

function LoginForm() {
    return (
        <section >
            <div className="flex flex-col items-center justify-center h-[600px] w-full scroll-x-hidden">
                
                <div className="w-full bg-gradient-to-b from-purple-900 to-black/80 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-white md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-purple-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-purple-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-400 ">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm text-gray-400 font-medium text-primary-600 hover:underline">Forgot password?</a>
                            </div>
                            <NavLink to={`/dashboard`}><button type="submit" className="w-full text-black bg-pink-200 hover:bg-pink-300 font-extrabold rounded-lg text-sm px-5 py-2.5 text-center mt-3">Sign in</button></NavLink>
                            <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline">Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginForm;
