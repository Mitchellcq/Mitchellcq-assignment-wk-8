function generateReadme(answers, github) {

    // Generate Table of Contents conditionally based on userResponses
    let draftToC = `## Table of Contents`;

    if (answers.installation !== '') {
        draftToC += `
    * [Installation](#installation)` };

    if (answers.usage !== '') {
        draftToC += `
    * [Usage](#usage)` };

    if (answers.contributing !== '') {
        draftToC += `
    * [Contributing](#contributing)` };

    if (answers.tests !== '') {
        draftToC += `
    * [Tests](#tests)` };


    // Generate markdown for the top required portions of the README
    let draftMarkdown =
        `# ${answers.title}
    ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
    
    Check out the badges hosted by [shields.io](https://shields.io/).
    
    
    ## Description: 
    
    ${answers.description}
    `

    // Add Table of Contents to markdown
    draftMarkdown += draftToC;

    // Add License section since License is required to Table of Contents
    draftMarkdown += `
    * [License](#license)`;


    // Optional Installation section
    if (answers.installation !== '') {

        draftMarkdown +=
            `
    
    ## Installation
    
    *Steps required to install project and how to get the development environment running:*
    
    ${answers.installation}`
    };


    // Optional Usage section
    if (answers.usage !== '') {

        draftMarkdown +=

            `
    
    ## Usage 
    
    *Instructions and examples for use:*
    
    ${answers.usage}`
    };


    // Optional Contributing section
    if (answers.contributing !== '') {
        `
    
    ## Contributing
    
    *Contributing is easy, just follow these instructions!*
    
    ${answers.contributing}`
    };


    // Optional Tests section
    if (answers.tests !== '') {

        draftMarkdown +=
            `
    
    ## Tests
    
    *Tests for application and how to run them:*
    
    ${answers.tests}`
    };


    // License section is required
    draftMarkdown +=
        `
    
    ## License
    
    ${answers.license}
    `;


    // Questions / About Developer section
    let draftDev =
        `
    ---
    
    ## Questions?
    
    ![Developer Profile Picture](${github.avatar_url}) 
    
    Please contact me with any questions or comments:
   
    GitHub: [@${github.login}](${github.url})
    `;

    // If GitHub email is not null, add to Developer section
    if (github.email !== null) {

        draftDev +=
            `
    Email: ${github.email}
    `};

    // Add developer section to markdown
    draftMarkdown += draftDev;

    // Return markdown
    return draftMarkdown;

}
module.exports = generateReadme;