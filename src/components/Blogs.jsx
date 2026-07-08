import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ExternalLink, Calendar } from 'lucide-react';

const blogsData = [
  {
    id: 1,
    title: 'Understanding Kubernetes Architecture: From kubectl to a Running Pod',
    preview: 'A deep-dive breakdown of the Kubernetes cluster control plane and worker nodes, examining runC, containerd, kubelet, API Server, etcd, scheduler, and the request flow of a running Pod.',
    keywords: ['Kubernetes', 'DevOps', 'Containers', 'Cloud Native', 'Docker', 'K8s'],
    date: '01 Jun 2026',
    url: 'https://www.linkedin.com/pulse/kubernetes-cluster-architecture-what-really-happens-when-dilsara-1hrzc',
    readTime: '8 min read'
  },
  {
    id: 2,
    title: 'Open Standards in Cloud Native: The Foundation of a Portable Future',
    preview: 'Exploring how open standards like OCI (Runtime, Image, Distribution), CNI, CSI, and CRI form the foundation for interoperability, portability, and vendor-neutral cloud computing.',
    keywords: ['Cloud Native', 'Kubernetes', 'OCI', 'DevOps', 'Containers', 'CNCF'],
    date: '31 May 2026',
    url: 'https://www.linkedin.com/pulse/open-standards-cloud-native-foundation-portable-future-dilsara-itrwc',
    readTime: '6 min read'
  },
  {
    id: 3,
    title: 'Deploy Vprofile Project Manually',
    preview: 'A step-by-step technical guide to performing a manual multi-VM local deployment of the multi-tier Vprofile application using Vagrant, Bash provisioning scripts, and database stacks.',
    keywords: ['MultiVM', 'DevOps', 'Vprofile', 'Manual Deployment', 'Vagrantfile'],
    date: '28 Mar 2026',
    url: 'https://medium.com/@vishishtadilsara2002/deploy-vprofile-project-manually-920c3176598f',
    readTime: '7 min read'
  },
  {
    id: 4,
    title: 'Solution for Netflix Household issue using n8n',
    preview: 'Implementing an automated n8n server workflow using Puppeteer, custom mail triggers, and NodeMation to handle and verify Netflix household access restrictions automatically.',
    keywords: ['n8n', 'Netflix', 'Automation', 'Puppeteer', 'NodeMation'],
    date: '21 Mar 2026',
    url: 'https://medium.com/@vishishtadilsara2002/solution-for-netflix-household-issue-using-n8n-22e914fba525',
    readTime: '6 min read'
  },
  {
    id: 5,
    title: 'EBS Volume in AWS',
    preview: 'Deep dive into AWS Elastic Block Store (EBS) volumes: understanding storage performance types, provisioning IOPS, backup snapshot cycles, and cross-AZ volume migrations.',
    keywords: ['AWS', 'EBS', 'EBS Volumes', 'Snapshots', 'AWS Storage'],
    date: '23 Jan 2026',
    url: 'https://medium.com/@vishishtadilsara2002/ebs-volume-in-aws-8ad727ea1d63',
    readTime: '5 min read'
  },
  {
    id: 6,
    title: 'What is AWS EC2?',
    preview: 'Understanding Amazon Elastic Compute Cloud (EC2): instances configurations, AMIs, virtualization pricing models, security groups, and cloud virtual machines deployment.',
    keywords: ['AWS', 'EC2', 'Virtual Machines', 'Cloud Computing'],
    date: '17 Jan 2026',
    url: 'https://medium.com/@vishishtadilsara2002/what-is-aws-ec2-e66de1298cd3',
    readTime: '4 min read'
  },
  {
    id: 7,
    title: 'How Does AWS IAM Actually Work?',
    preview: 'Understanding AWS Identity and Access Management (IAM): writing policies, user permissions control, roles evaluation engine, and AWS security best practices.',
    keywords: ['AWS', 'IAM', 'AWS Policies', 'IAM Roles'],
    date: '13 Jan 2026',
    url: 'https://medium.com/@vishishtadilsara2002/how-does-aws-iam-actually-work-4c11a493f469',
    readTime: '6 min read'
  },
  {
    id: 8,
    title: 'What is n8n and how to use it?',
    preview: 'An ultimate workflow automation guide using n8n: node types, webhooks handling, data manipulation, and building self-hosted system integrations.',
    keywords: ['n8n', 'Workflow Automation', 'Data Integration', 'Automation'],
    date: '02 Jan 2026',
    url: 'https://www.linkedin.com/posts/vishishta-dilsara-14059a348_%E0%B6%B8%E0%B6%9A%E0%B6%9A%E0%B6%AF-n8n-%E0%B6%9A%E0%B6%BA%E0%B6%B1%E0%B6%B1-nodemation-%E0%B6%91%E0%B7%84%E0%B6%B8-%E0%B6%B1%E0%B6%AD%E0%B6%B1%E0%B6%B8-activity-7412744087222538240-1lTx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFbwmUABo_7_6hfkW56yyiirbG3SiLcV-7c',
    readTime: '5 min read'
  },
  {
    id: 9,
    title: 'AWS Architecture for a Next.js Portfolio Website',
    preview: 'Designing a scalable cloud architecture for hosting and deploying a Next.js portfolio: using AWS CloudFront, S3 static assets bucket, Route 53, and Lambda edge serverless components.',
    keywords: ['AWS', 'Architecture Diagrams', 'Next.js', 'Portfolio'],
    date: '01 Jan 2026',
    url: 'https://www.linkedin.com/posts/vishishta-dilsara-14059a348_portfolio-deployment-architecture-%E0%B6%85%E0%B6%AF-%E0%B6%9A%E0%B6%AD-activity-7412355704105185282-PvZK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFbwmUABo_7_6hfkW56yyiirbG3SiLcV-7c',
    readTime: '7 min read'
  },
  {
    id: 10,
    title: 'AWS Architecture Diagrams: Icons and Tools Explained',
    preview: 'A comprehensive guide to drawing enterprise-grade AWS architecture diagrams, understanding official icons design groups, and leveraging tools like Draw.io and Lucidchart.',
    keywords: ['AWS Icons', 'Architecture Diagrams', 'Cloud Computing'],
    date: '24 Dec 2025',
    url: 'https://www.linkedin.com/posts/vishishta-dilsara-14059a348_aws-awsicons-architecture-activity-7409579835565465600-uBSZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFbwmUABo_7_6hfkW56yyiirbG3SiLcV-7c',
    readTime: '5 min read'
  },
  {
    id: 11,
    title: 'TensorFlow vs NumPy: Understanding the Key Differences',
    preview: 'Comparing TensorFlow and NumPy: data structures (Tensors vs Arrays), matrix arithmetic performance, computational graph executions, and GPU acceleration limits.',
    keywords: ['Tensorflow', 'Numpy', 'GPU'],
    date: '04 Dec 2025',
    url: 'https://www.linkedin.com/posts/vishishta-dilsara-14059a348_%E0%B6%87%E0%B6%BA-numpy-%E0%B7%80%E0%B6%B1%E0%B7%80%E0%B6%A7-tensors-%E0%B6%B4%E0%B7%80%E0%B6%A0%E0%B6%A0-%E0%B6%9A%E0%B6%BB%E0%B6%B1%E0%B6%B1-activity-7402235314821636097--2No?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFbwmUABo_7_6hfkW56yyiirbG3SiLcV-7c',
    readTime: '6 min read'
  },
  {
    id: 12,
    title: 'What Caused the AWS us-east-1 Outage?',
    preview: 'Dissecting the cascading failure event in the AWS Northern Virginia (us-east-1) region, analyzing network path congestion and high availability architecture mitigation strategies.',
    keywords: ['AWS', 'Cloud Computing', 'Outage Analysis'],
    date: '20 Oct 2025',
    url: 'https://www.linkedin.com/posts/vishishta-dilsara-14059a348_the-aws-outage-amazon-web-services-%E0%B6%91%E0%B7%84%E0%B6%B8-activity-7386065452655087616-bl4d?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFbwmUABo_7_6hfkW56yyiirbG3SiLcV-7c',
    readTime: '8 min read'
  },
  {
    id: 13,
    title: 'How Provider Works in Flutter Applications',
    preview: 'A step-by-step developer walkthrough explaining the Provider state management wrapper in Flutter, ChangeNotifier events, consumer subscriptions, and state scopes.',
    keywords: ['Flutter', 'Provider', 'State Management'],
    date: '19 Oct 2025',
    url: 'https://www.linkedin.com/posts/vishishta-dilsara-14059a348_flutter-providers-%E0%B6%85%E0%B6%AF-%E0%B6%85%E0%B6%B4-%E0%B6%9A%E0%B6%AD-%E0%B6%9A%E0%B6%BB%E0%B6%B8-flutter-activity-7385637062600974336-N1mc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFbwmUABo_7_6hfkW56yyiirbG3SiLcV-7c',
    readTime: '6 min read'
  }
];

export default function Blogs() {
  const [showAll, setShowAll] = useState(false);

  // Initially show only 3 blogs
  const visibleBlogs = showAll ? blogsData : blogsData.slice(0, 3);

  return (
    <section id="blogs" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Technical <span className="text-gradient-purple">Blogs</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-light">
            Sharing research, tutorials, and cloud architecture deep-dives from my engineering journey.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleBlogs.map((blog, idx) => (
              <motion.div
                key={blog.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ 
                  opacity: { duration: 0.2 },
                  layout: { type: 'spring', stiffness: 250, damping: 25 },
                  delay: showAll ? 0 : idx * 0.05
                }}
                className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full group"
              >
                <div>
                  {/* Blog Meta Data */}
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-4">
                    <div className="flex items-center space-x-1.5">
                      <Calendar size={12} />
                      <span>{blog.date}</span>
                    </div>
                    <span>{blog.readTime}</span>
                  </div>

                  {/* Blog Title & Preview */}
                  <div className="space-y-3 mb-6">
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-light line-clamp-4">
                      {blog.preview}
                    </p>
                  </div>
                </div>

                <div className="space-y-6 mt-auto">
                  {/* Keyword Tags */}
                  <div className="flex flex-wrap gap-1">
                    {blog.keywords.map((kw) => (
                      <span 
                        key={kw}
                        className="text-[9px] font-mono text-cyan-400 bg-cyan-500/5 px-2 py-0.5 rounded border border-cyan-500/10"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  {/* Read Article Action */}
                  <div className="pt-4 border-t border-slate-900 flex items-center">
                    <a
                      href={blog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors w-full justify-between"
                      onClick={(e) => {
                        if (blog.url === '#') {
                          e.preventDefault();
                          alert("Blog Article Placeholder: Replace the URL link in src/components/Blogs.jsx with the actual link to your Medium/Dev.to/Personal blog post.");
                        }
                      }}
                    >
                      <span className="flex items-center space-x-2">
                        <BookOpen size={14} />
                        <span>Read Full Article</span>
                      </span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button for Blogs */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 font-semibold transition-all duration-300 hover:text-white cursor-pointer"
          >
            <span>{showAll ? 'Show Less Blogs' : 'More Blogs'}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
