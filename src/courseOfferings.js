import { useState } from "react";
import useFetch from "./useFetch";

const CourseOfferings = () => {



    const { Data: courses } = useFetch("http://localhost:9000/courses")
    const { Data: coursetypes } = useFetch("http://localhost:9000/coursetypes")
    const { Data: offerings } = useFetch("http://localhost:9000/courseofferings")




    const [name, setName] = useState('');
    const [type, setType] = useState('');

    const submit = (e) => {
        // e.preventDefault()
        const newoffering = { name, type }
        console.log("submitted");

        fetch("http://localhost:9000/courseofferings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newoffering)

        })

    }



    // const enable = ((e) => {
    //     setreg(true)
    //     // setid(e)

    // })

    return (
        <div className="home">
            <div className="heading"> ALL COURSE OFFERINGS: </div>

            <div>

                {offerings.map((offer) => (
                    <div className="listt" key={offer.id}>
                        <h2>{offer.name} - {offer.type}</h2>

                        {/* {
                            regForm &&
                            <form onSubmit={submit}>
                                <input
                                    type="text"
                                    placeholder="Student Name"
                                    value={sname}
                                    onChange={(e) => setsname(e.target.value)}
                                    required />


                                <button>ADD</button>
                            </form>}



                        <button className="register" onClick={() => {
                            setid(offer.id)
                            console.log(id)
                            setreg(true)
                        }}> REGISTER </button> */}

                        <br></br>
                    </div>
                ))}
            </div>
            <div className="create">
                <div className="heading"> CREATE A NEW COURSE OFFERING: </div>
                <form onSubmit={submit}>
                    <label className="labell"> SELECT COURSE NAME:</label>

                    <select
                        value={name}

                        onChange={(e) => setName(e.target.value)}
                    >
                        {courses.map((course) => (

                            course.name && <option value={course.name}>{course.name}</option>
                        ))}



                    </select>
                    <label className="labell">SELECT COURSE TYPE:</label>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        {coursetypes.map((type) => (

                            type.type && <option value={type.type}>{type.type}</option>
                        ))}



                    </select>



                    <button>ADD</button>
                </form>
            </div>
        </div>
    );
};

export default CourseOfferings;
