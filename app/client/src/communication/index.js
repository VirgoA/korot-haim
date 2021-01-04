import axios from "axios";

export function sendPostReq(data) {
  axios
    .post(`http://localhost:3001`, convertDataToObject(data), {
      responseType: "arraybuffer",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/pdf",
      },
    })
    .then((res) => {
      console.log(res);
      console.log(res.data);

      const url = URL.createObjectURL(
        new Blob([res.data], { type: "application/pdf" })
      );
      window.open(url);
    });
}

function convertDataToObject(data) {
  let educationArray = extractEducationData();
  let experienceArray = extractExperienceData();

  let dataObject = {
    selectedTemplate: 1,
    basics: {
      email: data.email,
      phone: data.phoneNumber,
      name: data.name + " " + data.lastName,
    },
    education: educationArray,
    work: experienceArray,
    sections: ["templates", "profile", "education", "work"],
  };

  console.log(dataObject);
  return dataObject;

  function extractEducationData() {
    let education = data.education;
    let educationArray = [];
    for (let index = 0; index < education.length; index++) {
      let educationObject = {
        institution: education[index].schoolName,
        location: "",
        area: education[index].degree,
        studyType: "",
        endDate: education[index].endDate,
      };
      educationArray.push(educationObject);
    }
    return educationArray;
  }

  function extractExperienceData() {
    let experience = data.experience;
    let experienceArray = [];
    for (let index = 0; index < experience.length; index++) {
      let experienceObject = {
        location: "עיר",
        position: experience[index].title,
        endDate: experience[index].endDate,
        highlights: experience[index].summary,
        company: experience[index].company,
        startDate: experience[index].startDate,
      };
      experienceArray.push(experienceObject);
    }
    return experienceArray;
  }
}
