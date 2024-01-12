// function to generate markdown for README
function generateMarkdown(data) {
  license = [
    `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`,
    `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`,
  ];

  if (data.license === `MIT`) {
    data.license = license[0]
  } else {
    data.license = license[1]
  };


  return` # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  ${data.toc}
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.questions}`
  
;
}

module.exports = generateMarkdown;
