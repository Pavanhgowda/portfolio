import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/chatgpt-project.png"
          title="DevSecOps for OpenAI Chatbot UI Deployment"
          description="Enhance your DevSecOps workflow with this Chatbot UI project pipeline. Leveraging Jenkins, SonarQube, OWASP dependency checks, Trivy vulnerability scanning, and Docker containerization, it ensures robustness and security. Automated Docker image builds and push to Docker Hub streamline deployment, while Trivy provides insights into container vulnerabilities. Kubernetes deployment and cluster scanning facilitate seamless scaling and management."
        />
        <ProjectCard
          src="/hotstar-project.png"
          title="Deploying a Secure Hotstar Clone"
          description="Empower the DevSecOps workflow with this Hotstar clone project pipeline. Utilizing Jenkins, SonarQube, OWASP dependency checks, Docker Scout vulnerability scanning, and Kubernetes deployment, it ensures robustness and security. Automated Docker image builds and push to Docker Hub streamline deployment, while Docker Scout provides insights into container vulnerabilities. Kubernetes deployment facilitates seamless scaling and management."
        />
        <ProjectCard
          src="/youtube-project.png"
          title="YouTube Clone App with DevSecOps and Jenkins Shared Library"
          description="Enhance security and reliability with this DevSecOps pipeline for a YouTube clone app. Leveraging Jenkins, SonarQube, OWASP dependency checks, and Trivy vulnerability scanning, it ensures code quality and security compliance. Automated Docker image builds, push to Docker Hub, and Kubernetes deployment streamline the deployment process, while Slack notifications keep the team informed in real-time."
        />
        <ProjectCard
          src="/amazon-project.png"
          title="Amazon Clone DevSecOps Approach with Terraform and Jenkins CI/CD"
          description="This DevSecOps pipeline automates quality checks and ensures security compliance. With Jenkins, Docker, and SonarQube, it orchestrates Git checkout, SonarQube analysis, and container deployment seamlessly. Empower your development process with this robust Amazon clone project pipeline."
        />
        <ProjectCard
          src="/Netflix-project.png"
          title="Netflix Clone DevSecOps Approach with ArgoCD and Jenkins"
          description="Empower the DevSecOps journey with this Netflix project pipeline. Integrated with Jenkins, SonarQube, OWASP dependency checks, and Trivy vulnerability scanning, it ensures code quality and security. Automated Docker image builds and push to Docker Hub streamline deployment, while Trivy provides insights into container vulnerabilities. Leveraging ArgoCD for Kubernetes deployment ensures efficient and automated rollout of updates, enhancing scalability and reliability."
        />
      </div>
    </div>
  );
};

export default Projects;
