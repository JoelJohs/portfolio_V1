import { useTranslation } from "react-i18next";

const ProjectsData = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t("projects.portfolioWebsite.title"),
      description: t("projects.portfolioWebsite.description"),
      longDescription: t("projects.portfolioWebsite.longDescription"),
      tags: ["React", "Tailwind CSS", "JavaScript", "CSS"],
      image: "/screenshots/portfolio.jpeg",
      note: t("projects.portfolioWebsite.note"),
      keyFeatures: t("projects.portfolioWebsite.keyFeatures", {
        returnObjects: true,
      }),
      technologyStack: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "CSS",
        "Vite",
        "i18next",
        "FontAwesome",
      ],
      codeLink: "https://github.com/JoelJohs/portfolio_V1",
      liveDemo: "https://joeljohs-portfolio.vercel.app",
    },
  ];

  return projects;
};

export default ProjectsData;
