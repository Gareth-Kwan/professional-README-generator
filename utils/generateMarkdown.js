// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  </br>
  <p align="center">
    <img src="https://img.shields.io/github/languages/count/${data.github}/${
    data.repo
  }?style=for-the-badge"  />
    <img src="https://img.shields.io/github/languages/top/${data.github}/${data.repo}?style=for-the-badge"  />
    <img src="https://img.shields.io/github/repo-size/${data.github}/${data.repo}?style=for-the-badge"  />   
    <img src="https://img.shields.io/tokei/lines/github/${data.github}/${data.repo}?style=for-the-badge"  />
    <img src="https://img.shields.io/github/package-json/dependency-version/${data.github}/${
    data.repo
  }/inquirer?style=for-the-badge"/>
    <img src="https://img.shields.io/github/last-commit/${data.github}/${data.repo}?style=for-the-badge" />  
        
  </p>

 ## **Description**
  
  ${data.description}

 ## **Table of Contents**
    
  * [Installation](#installation)
  * [Tests](#test)
  * [License](#license)
  * [Author](#author)
  * [Questions](#questions)

 ## **Installation** 

 To install necessary dependencies, run the following command:
 > ${data.installation}

 ## **Tests**
 
 To run tests, run the  following command:
 > ${data.tests}

 ## **Usage**

 ${data.usage}

 ## **License**

 This project is licensed under ${data.license} 
 
 ![Github license](https://img.shields.io/badge/license-${encodeURI(data.license)}-green.svg)
 

 ## **Author**

 - ${data.author}
 - Email: ${data.email}
 - GitHub: [${data.github}](https://www.github.com/${data.github})
 
 ## **Questions**

 If you have any questions about the repo, please open an issue at [${data.github}](https://www.github.com/${
    data.github
  }/${data.repo}) or contact me at ${data.email} for more information. 
`;
}

module.exports = generateMarkdown;
