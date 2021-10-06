import React from 'react'
import { ProjectCard } from './ProjectCard'
import lynda from "./public/linkedin_learning.png";
import goibibo from "./public/goibibo.jpeg"
export const ProjectDataCard = () => {

const Data = [

    {
        "title":"Linkedin Learning Website Clone",
        "github":"https://github.com/ankitkumar3443/Llinkedin_learning",
        "url":lynda,
        "intro": "Platform offering video courses in software, creative, and business skills based on the Linkedin Learning model.",
        "tech":"Tech Stack used in this clone are Javascript,HTML,CSS,Node js, Express, MongoDB",
        "time":"completed within one weeks.",
        "type":"Collaborative project with team of 4 members.",
        "role":["Built sign up/sign in backend and integrated it with the frontend",
                "Developed the checkout and contact page",
                "Contributed in building the home page"]
    },

    {
        "title":"Goibibo Website Clone",
        "github":"https://github.com/biswajitdas-007/Goibibo-Clone",
        "url":goibibo,
        "intro": "Goibibo is India’s leading online travel booking brand providing a range of choices for hotels, flights, trains, bus and cars for travelers. ",
        "tech":"Tech stack used in this clone are React.js,Javascript,Firebase,HTML,CSS",
       
        "time":"completed in 6 days.",
        "type":"Collaborative project with team of 4 members.",
        "role":["Built backend and laid out the database schema and built the REST API for the same", "Built seat selection section.",
                "Built form for boarding and dropping point and integrated with the payment page."]
    }
    

   
]
console.log(Data.length)

    return (
        <>
            {
                Data.map((el, index) => {
                    console.log(el);
                    return <>
                    
                    <ProjectCard
                            url={el.url}
                            url2={el.url2}
                            url3={el.url3}
                    title={el.title}
                    intro={el.intro}
                    techStack={el.tech}
                    time={el.time}
                    type={el.type}
                    role1={el.role[0]}
                    role2={el.role[1]}
                    role3={el.role[2]}
                    github={el.github}
                    key={index}

                    ></ProjectCard>
                    
                    </>
                })
            }
        </>
    )
}
