type item = {
    title: string,
    imageUrl: string,
    description: string,
    gitHubLink: string,
    websiteLink: string
};

export const portfolioItems: item[] = [];

function createPortfolioItem(title: string, imageUrl: string, description: string, gitHubLink: string, websiteLink: string) {
    return {
        title: title,
        imageUrl: imageUrl,
        description: description,
        gitHubLink: gitHubLink,
        websiteLink: websiteLink
    }
}

const semesterProject2: item = createPortfolioItem("Semester Project 2", "IMAGE", "My semester project 2, update this later", "https://github.com/VegardMaao/semester-project-2", "https://noroff-aucthion-house.netlify.app")
const frameworksAssignment: item = createPortfolioItem("Frameworks Project", "/images/frameworks-assignment.jpg", "My first React project. I have used Zustand for state management, and the backend is hosted by Noroff Fagskole.", "https://github.com/VegardMaao/front-end-frameworks-CA-Vegard-Maaoe", "https://frameworkscavegardmaaoe.netlify.app/");
const projectExam2: item = createPortfolioItem("Project Exam 2", "IMAGE", "This is my Project Exam 2. It is a venue booking and management site, based on the Noroff Holidaze API.", "https://github.com/VegardMaao/project-exam-2/", "https://project-exam-2-vegardmaao.netlify.app/");

portfolioItems.push(semesterProject2, frameworksAssignment, projectExam2);