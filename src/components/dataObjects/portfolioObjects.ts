import { portfolioItem } from "../interfaces/portfolioItem";
export const portfolioItems: portfolioItem[] = [];

function createPortfolioItem(title: string, imageUrl: string, description: string, gitHubLink: string, websiteLink: string) {
    return {
        title: title,
        imageUrl: imageUrl,
        description: description,
        gitHubLink: gitHubLink,
        websiteLink: websiteLink
    }
}

const semesterProject2: portfolioItem = createPortfolioItem("Semester Project 2", "src/assets/images/thumbnails/semester-project-2-thumbnail.png", "My semester project 2, an auction house page. Made with SASS, and vanilla HTML / JS.", "https://github.com/VegardMaao/semester-project-2", "https://noroff-aucthion-house.netlify.app")
const frameworksAssignment: portfolioItem = createPortfolioItem("Frameworks Project", "src/assets/images/thumbnails//frameworks-ca-thumbnail.png", "My first React project. I have used Zustand for state management, and the backend is hosted by Noroff Fagskole.", "https://github.com/VegardMaao/front-end-frameworks-CA-Vegard-Maaoe", "https://frameworkscavegardmaaoe.netlify.app/");
const projectExam2: portfolioItem = createPortfolioItem("Project Exam 2", "src/assets/images/thumbnails//project-exam-2-thumbnail.png", "This is my Project Exam 2. It is a venue booking and management site, based on the Noroff Holidaze API.", "https://github.com/VegardMaao/project-exam-2/", "https://project-exam-2-vegardmaao.netlify.app/");

portfolioItems.push(semesterProject2, frameworksAssignment, projectExam2);