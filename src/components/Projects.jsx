import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitBranch, Terminal, Activity, DollarSign, Network } from 'lucide-react';
import { GithubIcon } from './CustomIcons';
import gitopsArch from '../assets/gitops_architecture.png';
import cicdArch from '../assets/cicd_architecture.png';
import monitoringArch from '../assets/monitoring_architecture.png';
import costOptArch from '../assets/cost_optimization_architecture.png';
import jenkinsArch from '../assets/jenkins_pipeline_architecture.png';
import vprofileCloudArch from '../assets/vprofile_cloud_architecture.png';
import vprofileKopsArch from '../assets/vprofile_kops_kubernetes.png';
import wordpressArch from '../assets/wordpress_kops_architecture.png';








const projectsData = [
  // 1. Production-Grade GitOps Microservices
  {
    id: 1,
    title: 'Production-Grade GitOps Microservices Deployment on AWS EKS',
    description: 'Built a GitOps-driven Online Boutique microservices deployment on AWS EKS with automated CI/CD, secure traffic exposure, monitoring, logging, and Slack alerts.',
    tech: ['AWS EKS', 'Terraform', 'Kubernetes', 'Docker', 'GitHub Actions', 'ArgoCD', 'Prometheus', 'Grafana', 'ELK Stack'],
    // Replace below with your actual URL or leave as is
    github: 'https://github.com/VishishtaDilsara/Production-Grade_GitOps-Driven_Microservices-Demo.git',
    demo: 'https://www.linkedin.com/posts/vishishta-dilsara-14059a348_devops-gitops-kubernetes-activity-7475779394368622592-YQBX?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy', 
    category: 'GitOps & Orchestration',
    previewType: 'gitops',
    image: gitopsArch
  },
  // 2. GitOps CI/CD Platform on AWS EKS
  {
    id: 2,
    title: 'GitOps CI/CD Platform on AWS EKS',
    description: 'Built an automated GitOps CI/CD platform for provisioning AWS EKS infrastructure and deploying Kubernetes applications using Terraform, GitHub Actions, Helm, and ArgoCD.',
    tech: ['Terraform', 'AWS EKS', 'Kubernetes', 'Docker', 'GitHub Actions', 'Helm', 'ArgoCD', 'SonarQube'],
    github: 'https://github.com/VishishtaDilsara/vprofile-gitops-app',
    demo: 'https://www.linkedin.com/posts/vishishta-dilsara-14059a348_devops-gitops-aws-activity-7465391785012379648-QqpM?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy',
    category: 'CI/CD & IAC',
    previewType: 'pipeline',
    image: cicdArch
  },
  // 3. Full Monitoring and Observability Stack
  {
    id: 3,
    title: 'Full Monitoring and Observability Stack from Scratch',
    description: 'Deployed a monitoring and logging stack on AWS EC2 using Prometheus, Grafana, Loki, Node Exporter, and Alloy for metrics, logs, dashboards, and troubleshooting.',
    tech: ['AWS EC2', 'Prometheus', 'Grafana', 'Loki', 'Node Exporter', 'Alloy', 'Linux'],
    github: 'https://github.com/VishishtaDilsara', // Add GitHub link placeholder
    demo: 'https://www.linkedin.com/posts/vishishta-dilsara-14059a348_devops-observability-monitoring-activity-7456584854965747712-28v4?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy',
    category: 'Monitoring',
    previewType: 'monitoring',
    image: monitoringArch
  },
  // 4. Serverless AWS Cost Optimization Tool
  {
    id: 4,
    title: 'Serverless AWS Cost Optimization Tool',
    description: 'Built a serverless tool to analyze EC2 and EBS resources, detect cost-saving opportunities, store recommendations in DynamoDB, and expose them through API Gateway.',
    tech: ['AWS Lambda', 'CloudWatch', 'EC2', 'EBS', 'DynamoDB', 'API Gateway', 'EventBridge', 'boto3'],
    github: 'https://github.com/VishishtaDilsara/Serverless-Aws-Cost-Optimization',
    demo: 'https://www.linkedin.com/posts/vishishta-dilsara-14059a348_aws-serverless-cloudcomputing-activity-7478271519668715521-4na7?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy',
    category: 'Serverless',
    previewType: 'serverless',
    image: costOptArch
  },
  // 5. Jenkins CI/CD Pipeline
  {
    id: 5,
    title: 'Jenkins CI/CD Pipeline with Docker and AWS ECS',
    description: 'Built a Jenkins CI/CD pipeline to build, test, scan, containerize, push Docker images to Amazon ECR, deploy to AWS ECS, and send Slack notifications.',
    tech: ['Jenkins', 'Docker', 'Amazon ECR', 'Amazon ECS', 'SonarQube', 'Trivy', 'Slack', 'Maven'],
    github: 'https://github.com/VishishtaDilsara', // Add GitHub link placeholder
    demo: 'https://www.linkedin.com/posts/vishishta-dilsara-14059a348_devops-cicd-jenkins-activity-7448241201612492800-Ucwv?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy',
    category: 'CI/CD & IAC',
    previewType: 'jenkins',
    image: jenkinsArch
  },
  // 6. AWS VProfile Deployment
  {
    id: 6,
    title: 'AWS VProfile Deployment — End-to-End Scalable Architecture',
    description: 'Deployed the VProfile application on AWS using EC2, Auto Scaling, ALB, Route 53, ACM, S3, IAM, and separated backend services for a scalable multi-tier architecture.',
    tech: ['AWS EC2', 'Auto Scaling', 'ALB', 'Route 53', 'ACM', 'S3', 'IAM'],
    github: 'https://github.com/VishishtaDilsara', // Add GitHub link placeholder
    demo: 'https://www.linkedin.com/posts/vishishta-dilsara-14059a348_aws-cloudcomputing-devops-activity-7446119934839078912-ex5j?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy',
    category: 'Cloud Architecture',
    previewType: 'cloud',
    image: vprofileCloudArch
  },
  // 7. VProfile Application Deployment on Kubernetes
  {
    id: 7,
    title: 'VProfile Application Deployment on Kubernetes using kOps',
    description: 'Deployed the VProfile multi-tier application on a kOps-provisioned Kubernetes cluster using Pods, Services, Ingress, PVC, Amazon EBS, Secrets, and Route 53.',
    tech: ['kOps', 'AWS', 'Kubernetes', 'Docker', 'DockerHub', 'Route 53', 'Ingress', 'EBS', 'PVC'],
    github: 'https://github.com/VishishtaDilsara/vprofile-k8-deploy',
    demo: 'https://www.linkedin.com/posts/vishishta-dilsara-14059a348_kubernetes-kops-aws-activity-7464550247311040512-q-Xl?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy',
    category: 'GitOps & Orchestration',
    previewType: 'k8s',
    image: vprofileKopsArch
  },
  // 8. WordPress on Kubernetes using kops, Helm, and AWS
  {
    id: 8,
    title: 'WordPress on Kubernetes using kops, Helm, and AWS',
    description: 'Deployed a complete WordPress application on an AWS Kubernetes cluster created via kops. Integrated EC2 node provisioning, S3 state store, Helm packaging, NGINX Ingress Controller, Route 53 DNS, and ALB.',
    tech: ['kops', 'Kubernetes', 'Helm', 'AWS EC2', 'AWS S3', 'NGINX Ingress', 'Route 53', 'AWS Load Balancer'],
    github: 'https://github.com/VishishtaDilsara/wordpress-kops-aws-k8s',
    demo: 'https://www.linkedin.com/posts/vishishta-dilsara-14059a348_kubernetes-aws-devops-activity-7462428586457649166-vrj0?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFbwmUABo_7_6hfkW56yyiirbG3SiLcV-7c',
    category: 'GitOps & Orchestration',
    previewType: 'k8s',
    image: wordpressArch
  }
];

const openSourceContributions = [
  {
    id: 'os-1',
    title: 'MiroTalk Whiteboard Eraser Bug Fix',
    project: 'MiroTalk',
    description: 'Contributed to the open-source project MiroTalk on GitHub, an online video conferencing platform. My contribution involved identifying and fixing a bug related to the whiteboard eraser tool, improving its functionality and overall user experience during collaborative sessions.',
    tags: ['GitHub Contribution', 'Open Source', 'Bug Fixing', 'JavaScript'],
    link: 'https://github.com/miroslavpejic85/mirotalk/pull/322'
  },
  {
    id: 'os-2',
    title: 'MiroTalk Whiteboard Object Deletion Feature',
    project: 'MiroTalk',
    description: 'Contributed to the open-source project MiroTalk by implementing a new delete objects feature in the whiteboard. This enhancement allows users to remove selected objects using the Delete button, improving usability beyond the existing eraser-only functionality.',
    tags: ['GitHub Contribution', 'Open Source', 'Feature Implementation', 'JavaScript'],
    link: 'https://github.com/miroslavpejic85/mirotalk/pull/326'
  }
];

// Reusable custom CSS mockup previews to avoid using external static placeholder images
function ProjectPreview({ type, image }) {
  if (image) {
    return (
      <div className="w-full h-44 bg-slate-950 border-b border-slate-900 relative overflow-hidden select-none">
        <img 
          src={image} 
          alt="Project Architecture" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    );
  }
  if (type === 'gitops') {
    return (
      <div className="w-full h-44 bg-slate-950 flex flex-col items-center justify-center border-b border-slate-900 font-mono relative overflow-hidden text-[10px] text-cyan-400 p-4 select-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="z-10 flex items-center space-x-2 bg-slate-900/80 border border-slate-800 rounded px-2.5 py-1 mb-2">
          <Terminal size={12} className="text-emerald-400 animate-pulse" />
          <span>argocd sync --app online-boutique</span>
        </div>
        <div className="z-10 flex items-center space-x-3 text-slate-400">
          <div className="flex flex-col items-center">
            <span className="text-emerald-400 font-bold">● Syncing</span>
            <span className="text-[8px] text-slate-500">ArgoCD App</span>
          </div>
          <span className="text-slate-600">➔</span>
          <div className="flex flex-col items-center">
            <span className="text-cyan-400 font-bold">AWS EKS</span>
            <span className="text-[8px] text-slate-500">10 Microservices</span>
          </div>
        </div>
        <div className="absolute top-2 right-2 text-[8px] text-cyan-500/50">GITOPS STACK</div>
      </div>
    );
  }
  if (type === 'pipeline') {
    return (
      <div className="w-full h-44 bg-slate-950 flex flex-col items-center justify-center border-b border-slate-900 font-mono relative overflow-hidden text-[10px] text-violet-400 p-4 select-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="z-10 flex space-x-1.5 items-center mb-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-slate-300">GH Actions CI Pipeline Success</span>
        </div>
        <div className="z-10 flex items-center space-x-2 text-[8px]">
          <div className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-400">Terraform Apply</div>
          <span className="text-slate-700">➜</span>
          <div className="p-1 rounded bg-slate-900 border border-slate-800 text-slate-400">Push ECR</div>
          <span className="text-slate-700">➜</span>
          <div className="p-1 rounded bg-slate-900 border border-slate-800 text-cyan-400 border-cyan-500/30">Argo Deploy</div>
        </div>
        <div className="absolute bottom-2 left-2 text-[8px] text-slate-600">TRIGGER: push to main</div>
      </div>
    );
  }
  if (type === 'monitoring') {
    return (
      <div className="w-full h-44 bg-slate-950 flex flex-col justify-center border-b border-slate-900 font-mono relative overflow-hidden text-[9px] text-emerald-400 p-4 select-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="z-10 flex items-center justify-between text-slate-400 border-b border-slate-900 pb-1 mb-2">
          <span>GRAFANA METRICS</span>
          <span className="text-cyan-400 text-[8px] flex items-center"><Activity size={10} className="mr-1" /> LIVE</span>
        </div>
        <div className="z-10 space-y-1.5">
          <div className="flex justify-between items-center text-slate-300">
            <span>cpu_usage_percentage</span>
            <span className="text-emerald-400">14.2%</span>
          </div>
          <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-400 h-full w-[14.2%]" />
          </div>
          <div className="flex justify-between items-center text-slate-300">
            <span>memory_active_bytes</span>
            <span className="text-cyan-400">3.12 GB / 8.00 GB</span>
          </div>
          <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
            <div className="bg-cyan-400 h-full w-[39%]" />
          </div>
        </div>
      </div>
    );
  }
  if (type === 'serverless') {
    return (
      <div className="w-full h-44 bg-slate-950 flex flex-col items-center justify-center border-b border-slate-900 font-mono relative overflow-hidden text-[10px] text-amber-500 p-4 select-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="z-10 flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-lg p-2 mb-2">
          <DollarSign size={16} className="text-amber-400 animate-bounce" />
          <span className="font-bold text-slate-200">AWS Cost Savings: $142.50 / mo</span>
        </div>
        <span className="z-10 text-[8px] text-slate-400">Lambda invoked via EventBridge • 0 idle EBS cleaned</span>
      </div>
    );
  }
  if (type === 'jenkins') {
    return (
      <div className="w-full h-44 bg-slate-950 flex flex-col items-center justify-center border-b border-slate-900 font-mono relative overflow-hidden text-[10px] text-sky-400 p-4 select-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="z-10 border border-sky-500/30 bg-sky-950/20 px-3 py-1.5 rounded text-center">
          <div className="text-slate-300 font-bold">Jenkins Build #48</div>
          <div className="text-emerald-400 font-semibold text-[8px] mt-1">✓ SUCCESSFUL (SonarQube QG Passed)</div>
        </div>
        <div className="absolute bottom-2 right-2 text-[8px] text-slate-600">ECS DEPLOY STAGE</div>
      </div>
    );
  }
  if (type === 'cloud') {
    return (
      <div className="w-full h-44 bg-slate-950 flex flex-col items-center justify-center border-b border-slate-900 font-mono relative overflow-hidden text-[9px] text-indigo-400 p-4 select-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="z-10 flex items-center space-x-3 text-slate-300">
          <div className="flex flex-col items-center bg-slate-900 border border-slate-800 p-1.5 rounded">
            <span>ALB</span>
            <span className="text-[7px] text-slate-500">Route 53</span>
          </div>
          <span className="text-slate-600">➜</span>
          <div className="flex flex-col items-center bg-slate-900 border border-slate-800 p-1.5 rounded">
            <span>ASG (EC2)</span>
            <span className="text-[7px] text-emerald-400">Scale Up</span>
          </div>
          <span className="text-slate-600">➜</span>
          <div className="flex flex-col items-center bg-slate-900 border border-slate-800 p-1.5 rounded">
            <span>S3 Store</span>
            <span className="text-[7px] text-slate-500">Assets</span>
          </div>
        </div>
        <div className="absolute top-2 left-2 text-[8px] text-slate-600">VPROFILE END-TO-END</div>
      </div>
    );
  }
  return (
    <div className="w-full h-44 bg-slate-950 flex flex-col items-center justify-center border-b border-slate-900 font-mono relative overflow-hidden text-[10px] text-rose-400 p-4 select-none">
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="z-10 flex items-center space-x-2 bg-rose-500/10 border border-rose-500/20 rounded px-2.5 py-1 mb-2">
        <Network size={12} className="text-rose-400" />
        <span>kops validate cluster</span>
      </div>
      <span className="z-10 text-emerald-400 text-[8px]">✔ Cluster vprofile.k8s.local is healthy</span>
    </div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  // Initially show only 3 projects
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-light">
            An exhibit of GitOps, cloud architectures, CI/CD pipelines, and systems monitoring tools I have engineered.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ 
                  opacity: { duration: 0.2 },
                  layout: { type: 'spring', stiffness: 250, damping: 25 },
                  delay: showAll ? 0 : idx * 0.05
                }}
                className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between h-full group"
              >
                {/* Visual Preview Container */}
                <ProjectPreview type={project.previewType} image={project.image} />

                {/* Card Details */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-6">
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono font-semibold tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-light line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span 
                          key={t}
                          className="text-[9px] font-mono bg-slate-950 border border-slate-900 text-slate-400 px-2 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-900/60 mt-auto">
                      {/* GitHub Button - If placeholder, make it obvious */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
                        onClick={(e) => {
                          if (project.github === 'https://github.com/VishishtaDilsara') {
                            e.preventDefault();
                            alert("GitHub Link Placeholder: Update this link in src/components/Projects.jsx when your repository is ready.");
                          }
                        }}
                      >
                        <GithubIcon size={16} />
                        <span>Source Code</span>
                      </a>

                      {/* Live Demo Button - Update the links inside this file later */}
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                        onClick={(e) => {
                          if (project.demo === '#') {
                            e.preventDefault();
                            alert("Live Demo Link Placeholder: Replace the demo link in src/components/Projects.jsx for this project.");
                          }
                        }}
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button for Projects */}
        <div className="flex justify-center mb-24">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 font-semibold transition-all duration-300 hover:text-white cursor-pointer"
          >
            <span>{showAll ? 'Show Less Projects' : 'More Projects'}</span>
          </button>
        </div>

        {/* Open Source Contributions Section */}
        <div className="border-t border-slate-900/80 pt-16">
          <div className="text-center space-y-3 mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
              Open Source <span className="text-gradient-purple">Contributions</span>
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-light">
              Collaborations and feature updates contributed directly to repositories in the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {openSourceContributions.map((osCont, idx) => (
              <motion.div
                key={osCont.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 group border border-slate-800/40 relative overflow-hidden"
              >
                {/* Visual Branch Icon Accent */}
                <div className="absolute top-6 right-6 p-2 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/10">
                  <GitBranch size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-mono text-violet-400 font-bold uppercase tracking-wider">
                    {osCont.project} contribution
                  </div>
                  <h4 className="text-xl font-bold text-slate-100 group-hover:text-violet-400 transition-colors duration-300">
                    {osCont.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    {osCont.description}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {osCont.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[9px] font-mono bg-slate-950 border border-slate-900 text-slate-500 px-2.5 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center pt-4 border-t border-slate-900/60">
                    <a
                      href={osCont.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 text-xs font-semibold transition-all duration-300 w-full justify-center"
                      onClick={(e) => {
                        if (osCont.link === '#') {
                          e.preventDefault();
                          alert("MiroTalk Pull Request Link Placeholder: Replace this link in src/components/Projects.jsx with the actual contribution page url.");
                        }
                      }}
                    >
                      <GithubIcon size={14} />
                      <span>View Source</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
