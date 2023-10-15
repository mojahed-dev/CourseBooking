import React from "react";
import jsImage from "../assets/js.png";

function CourseCard({courseProp}) {

  const {name, description, price} = courseProp;
  console.log(name, description);
  return (
    <>
      
   
        <div className="">
          <div className="card ">
            <div className="flex flex-col sm:flex-row ">
              <div className="md:w-1/3 sm:w-1/2 p-5">
                <img
                  src={jsImage}
                  alt="Your Image"
                  className="w-full rounded-lg"
                />
              </div>
              <div class="md:w-2/3 sm:w-1/2 p-5">
                <h3 className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
                  {name}
                </h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-blue-100">
                 {description}
                </p>
                <button
                  id="toggleDark"
                  className="mt-8 rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 flex self-end"
                >
                 Enroll
                </button>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default CourseCard;
