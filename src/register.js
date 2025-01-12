import { useState } from "react";
import useFetch from "./useFetch";



const Register = (() => {
    const { Data: offerings } = useFetch("http://localhost:9000/courseofferings")

    const [course, setcourse] = useState("");
    const [sname, setsname] = useState("");
    const [offeringid, setid] = useState("1");










    const submit = (e) => {

        e.preventDefault();
        fetch("http://localhost:9000/courseofferings/" + offeringid).then((res) => {
            return res.json();
        }).then((data => {
            setcourse(data)
        }))


        setTimeout(() => {
            if (!course) {
                alert("Course not found!");
                return;
            }


            const updatedStudents = [...course.students, sname];


            console.log("submitted");

            fetch("http://localhost:9000/courseofferings/${offeringid}", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    students: updatedStudents

                })

            })


        }, 1000);






    }


    return (
        <div className="home">
            <div className="create">
                <form onSubmit={submit}>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={sname}
                        onChange={(e) => setsname(e.target.value)}
                        required />


                    <select className="regg"
                        value={offeringid}
                        onChange={(e) => setid(e.target.value)}
                    >
                        {offerings.map((offer) => (

                            offer.id && <option key={offer.id} value={offer.name}>{offer.name}-{offer.type}</option>
                        ))}



                    </select>


                    <button className="register">REGISTER</button>
                </form>
            </div>
        </div>
    )


})

export default Register;