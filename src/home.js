import { useState } from "react";

const Home = () => {
    const [courses, setcourses] = useState([
        { name: "telugu", id: 1 },
        { name: "english", id: 2 },
        { name: "social", id: 3 },
    ]);

    return (
        <div className="home">
            <div> fdgfg </div>
            <div>
                {courses.map((course) => (
                    <div key={course.id}>
                        <h2>{course.name}</h2>
                        <p>real</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
