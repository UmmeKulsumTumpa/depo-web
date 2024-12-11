// Collaboration.jsx

import React from 'react';
import Person2Image from "../../assets/Meet_with_the_teams/Shebuty Rayana.jpg";
import Person3Image from "../../assets/Meet_with_the_teams/Zarif Masud.jpg";
import Detail from "../Team/components/Detail"; // Importing Detail component for consistency

const Collaboration = () => {
    const internationalCollaborators = [
        {
            name: "Shebuty Rayana",
            workplace: "School of Arts and Sciences, SUNY Old Westbury, United States",
            position: "Assistant Professor",
            email: "rayanas@oldwestbury.edu",
            googleScholar: "google scholar",
            github: "github",
            linkedin: "linkedin",
            image: Person2Image,
        },
        {
            name: "Zarif Masud",
            workplace: "University of Toronto, Canada",
            position: "PhD Student",
            email: "zarif.masud@gmail.com",
            googleScholar: "google scholar",
            github: "github",
            linkedin: "linkedin",
            image: Person3Image,
        },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold py-2 text-center my-8">International Collaboration</h1>
            <div className="grid grid-cols-2 mx-28 gap-14 mb-10">
                {internationalCollaborators.map((individualDetail) => (
                    <div key={individualDetail.name}>
                        <Detail user={individualDetail} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collaboration;
