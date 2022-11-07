// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  </br>
  <p align="center">
    <img src="https://img.shields.io/github/languages/count/${data.authorGithub}/${data.repoName}?style=for-the-badge"  />
    <img src="https://img.shields.io/github/languages/top/${data.authorGithub}/${data.repoName}?style=for-the-badge"  />
    <img src="https://img.shields.io/github/repo-size/${data.authorGithub}/${data.repoName}?style=for-the-badge"  />   
    <img src="https://img.shields.io/tokei/lines/github/${data.authorGithub}/${data.repoName}?style=for-the-badge"  />
    <img src="https://img.shields.io/github/package-json/dependency-version/${data.authorGithub}/${data.repoName}/inquirer?style=for-the-badge"/>
        
  </p>

  ## Description 
  
  ${data.description}

 ## Table of Contents
    
  * [Installation](#installation)
  * [Tests](#test)
  * [License](#license)
  * [Author](#author)

 ## Installation 

 ### To install necessary dependencies, run the following command:
 > ${data.installation}

 ## Tests
 
 ### To run tests, run the  following command:
 > ${data.tests}

 ## License 
 ${data.license}

 ## Author 

 - ${data.author}
 - Email: ${data.email}
 - GitHub: [${data.github}](https://www.github.com/${data.github})
 
`;
}

module.exports = generateMarkdown;
