import React from 'react';
import coursesData from '../data/coursesData';
import CourseCard from '../components/CourseCard';
import SectionHeader from '../components/SectionHeader';

function Courses() {
    console.log(coursesData)
    const courses = coursesData.map(course => {
		return (
			 <CourseCard key= {course.id} courseProp={course} />
		);
	});

    const sectionHeader = [
        {
            title: "Courses",
            subTitle: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt ame fugiat veniam occaecat fugiat aliqua"
        }
    ];

    return (
        <>  <SectionHeader sectionProps = {sectionHeader[0]} />
            {courses}
        </>
    );
}

export default Courses;
