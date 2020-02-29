function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ## Project Description
  ${answers.description}

  ## Table of Contents
  [Installation](#Installation)
  [Usage](#Usage)
  [License](#License)
  [Contribution](#Contribution)
  [Tests](#Tests)

  ## Installation Instructions
  ${answers.installation}

  ## Project Usage
  ${answers.usage}

  ## License
  ${answers.license}

  ## Contributors
  ${answers.contribution}

  ## Tests
  ${answers.tests}

  ## Got Questions? Ask Me:
  https://github.com/${answers.username}
  ${answers.email}
  `;
}

module.exports = generateMarkdown;
