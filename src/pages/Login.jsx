import React from 'react';
import { useState, useEffect } from 'react';


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isActive, setIsActive] = useState(false);

    function authenticate(e) {
        e.preventDefault();
        fetch('http://localhost:4000/users/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(res => res.json())
        .then((data) => {
            if(data.access) {
                localStorage.setItem('token', data.access);
                alert('You are now logged in');
            } else {
                alert('Unsuccessful login');
            }
        })

        setEmail("");
        setPassword("");
    }


    useEffect(() => {
        (email !== "" && password !== "") ? setIsActive(true) : setIsActive(false)
    }, [email, password]);

    return (
        <>
          <div className="flex min-h-full flex-1 md:mt-28 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={e => authenticate(e)}  className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={e => {setEmail(e.target.value)}}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={e => {setPassword(e.target.value)}}
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div>
                <button
                    type="submit"
                    className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus:outline-none ${
                        isActive
                        ? "bg-indigo-600 text-white hover:bg-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    }`}
                    disabled={!isActive}
                    >
                    Sign in
                </button>

                </div>
              </form>
    
              <p className="mt-10 text-center text-sm text-gray-500">
                No account yet?{' '}
                <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                 Sign up here
                </a>
              </p>
            </div>
          </div>
        </>
      )
}

export default Login