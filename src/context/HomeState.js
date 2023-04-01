import { createContext, useState } from "react";

export const HomeContext = createContext();


export const HomeState = ({ children }) => {
    const [basicInfo, setBasicInfo] = useState({
        name: "",

        gmail: "",
        phone: "",
        linkedin: "",
        instagram: "",
        facebook: "",
        github: "",
        profession: "",
        website: "",
        about: ""
    });

    const [skills, setSkills] = useState({
        name: "",
    });
    const [project, setProject] = useState([]);
    const [work, setWork] = useState([]);
    const [education, setEducation] = useState([]);

    return (
        <HomeContext.Provider value={{ basicInfo, setBasicInfo, project, setProject, skills, setSkills, work, setWork, education, setEducation }}>
            {children}
        </HomeContext.Provider>
    )
};