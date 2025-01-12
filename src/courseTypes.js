import { useState } from "react";
import useFetch from "./useFetch";

const CourseTypes = () => {


    const [type, setType] = useState('');

    const { Data: coursetypes } = useFetch("http://localhost:9000/coursetypes")


    const submit = (e) => {

        const newtype = { type }
        console.log("submitted");

        fetch("http://localhost:9000/coursetypes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newtype)

        })

    }

    return (
        <div className="home">
            <div className="heading"> ALL COURSE TYPES: </div>
            <div>
                {coursetypes.map((type) => (
                    <div className="listt" key={type.id}>
                        <h2>{type.type}</h2>

                    </div>
                ))}
            </div>
            <div className="create">
                <form onSubmit={submit}>

                    <input
                        type="text"
                        placeholder="Add a new course type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required />


                    <button>ADD</button>
                </form>
            </div>
        </div>
    );
};

export default CourseTypes;
