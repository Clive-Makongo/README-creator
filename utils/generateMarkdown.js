// function to generate markdown for README
function generateMarkdown(data) {
  license = [
    `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`,
    `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`,
    `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`,
  ];

  switch (data.license) {
    case `MIT`:
      data.license = license[0];
      break;
    case `Apache`:
       data.license = license[1];
       break;
    case `GPL`:
      data.license = license[2];
  }

  return `# ${data.title}
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
  ${data.questions}`;
}

module.exports = generateMarkdown;
