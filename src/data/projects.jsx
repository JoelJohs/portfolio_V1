import { useTranslation } from "react-i18next";

const ProjectsData = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t("projects.portfolioWebsite.title"),
      description: t("projects.portfolioWebsite.description"),
      tags: ["React", "Tailwind CSS", "JavaScript", "CSS"],
      codeLink: "https://github.com/JoelJohs/portfolio_V1",
      liveDemo: "https://portfolio-demo.com",
      image: "/screenshots/portfolio.jpeg",
      note: t("projects.portfolioWebsite.note"),
    },
  ];

  return projects;
};

export default ProjectsData;
