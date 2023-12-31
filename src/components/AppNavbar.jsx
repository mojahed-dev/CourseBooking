import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline';
// import { UserCircleIcon } from '@heroicons/react/outline';



const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/courses' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]


export default function AppNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("token"));
  console.log("token: ", user);



  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
       

          {navigation.map((item) => (
            <Link 
              key={item.name}
              to={item.href} // Change "href" to "to"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              {item.name}
            </Link>
          ))}


          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
            {(user !== null) ?
               <Link as={NavLink} to="/logout" className="text-sm font-semibold leading-6 text-gray-900">
               Log out <span aria-hidden="true">&rarr;</span>
             </Link>
             : 
              <>
                <Link to="/" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
                  <UserCircleIcon className="w-4 h-4 mr-1" /> Register <span aria-hidden="true"></span>
                </Link>
                <span> | </span>
                <Link as={NavLink}  to="/login" className="text-sm font-semibold leading-6 text-gray-900">
                  Log in <span aria-hidden="true">&rarr;</span>
                </Link>
              </>

            }
           
          </div>
        </nav>
        <nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
              
                {navigation.map((item) => (
                    <Link 
                      key={item.name}
                      to={item.href} // Change "href" to "to"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}

                </div>
                <div className="py-6">
                  {(user !== null) ?
                    <Link as={NavLink}
                    to="/logout"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log out
                  </Link>
                    :
                   <>
                     <a href="#" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
                    Register <span aria-hidden="true"></span>
                    </a>
                      <Link
                        as={NavLink}
                        to="/login"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Log in
                      </Link>
                   </>

                  }
                
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        </nav>
      </header>

      

      
    </div>
  )
}
