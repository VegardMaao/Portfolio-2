import { PortfolioItem } from "../interfaces/portfolioItem";
import frameworksCAThumbnail from "../../assets/images/thumbnails/frameworksCAThumbnail.jpg"
import projectExam2Thumbnail from "../../assets/images/thumbnails/projectExam2Thumbnail.jpg"
import semesterProject2Thumbnail from "../../assets/images/thumbnails/semesterProject2Thumbnail.jpg"

export const portfolioItems: Array<PortfolioItem> = [];

function createPortfolioItem(title: string, imageUrl: string, description: string, gitHubLink: string, websiteLink: string): PortfolioItem {
  return {
    title: title,
    imageUrl: imageUrl,
    description: description,
    gitHubLink: gitHubLink,
    websiteLink: websiteLink
  }
}

const semesterProject2 = createPortfolioItem("Semester Project 2", frameworksCAThumbnail, "My semester project 2, an auction house page. Made with SASS, and vanilla HTML / JS.", "https://github.com/VegardMaao/semester-project-2", "https://noroff-aucthion-house.netlify.app")
const frameworksAssignment = createPortfolioItem("Frameworks Project", projectExam2Thumbnail, "My first React project. I have used Zustand for state management, and the backend is hosted by Noroff Fagskole.", "https://github.com/VegardMaao/front-end-frameworks-CA-Vegard-Maaoe", "https://frameworkscavegardmaaoe.netlify.app/");
const projectExam2 = createPortfolioItem("Project Exam 2", semesterProject2Thumbnail, "This is my Project Exam 2. It is a venue booking and management site, based on the Noroff Holidaze API.", "https://github.com/VegardMaao/project-exam-2/", "https://project-exam-2-vegardmaao.netlify.app/");

portfolioItems.push(semesterProject2, frameworksAssignment, projectExam2);