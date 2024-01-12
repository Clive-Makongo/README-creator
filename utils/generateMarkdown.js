// function to generate markdown for README
function generateMarkdown(data) {
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
