import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const Courses = () => {
    // const [courses, setcourses] = useState([
    //     { name: "telugu", id: 1 },
    //     { name: "english", id: 2 },
    //     { name: "social", id: 3 },
    // ]);


    const { Data: courses } = useFetch("http://localhost:9000/courses")




    // fetch("http://localhost:9000/courses")
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         console.log(data)
    //         setcourses(data)


    //     })


    const [name, setName] = useState('');

    const submit = (e) => {

        const newcourse = { name }
        console.log("submitted");

        fetch("http://localhost:9000/courses", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newcourse)

        })

    }
    useEffect(() => {

    }, []);

    return (
        <div className="home">
            <div className="heading"> ALL COURSES: </div>
            <div>
                {courses.map((course) => (
                    <div className="listt" key={course.id}>
                        <h2>{course.name}</h2>

                    </div>
                ))}
            </div>
            <div className="create">
                <form onSubmit={submit}>

                    <input
                        type="text"
                        placeholder="Create a new course"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />


                    <button>ADD</button>
                </form>
            </div>
        </div>
    );
};

export default Courses;
