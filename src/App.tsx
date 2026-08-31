import { useState } from "react";
import "./App.css";

type Experience = {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string;
  stageType?: string;
  context?: string;
  missions?: string[];
  responsibilities?: string[];
  technologies: string[];
  skills?: string[];
  outcomes?: string[];
  media?: "video" | "report" | "video-report";
  videoPath?: string; // ✅ CORRECTION
  presentationPath?: string;
  projectName?: string;
};

type Project = {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;

  context: string;
  challenge: string;
  solution: string;

  contribution: string[];
  architecture: string[];
  technologies: string[];
  results: string[];
  highlights: string[];

  media?: "video" | "report";
  videoPath?: string;
  presentationPath?: string;
  objectives?: string[];
  keyFeatures?: string[];
  infrastructure?: string[];
  risksCompliance?: string[];
  kpis?: string[];
};

const experiences: Experience[] = [
  {
    id: 1,
    date: "FEB 2026 — JUL 2026",
    title: "Final-Year Engineering Internship",
    company: "Tunisian Saudi Bank — TSB",
    stageType: "Final-Year Engineering Internship • Banking Technology",
    description:
      "Development and integration of a secure cheque monitoring platform covering the cheque lifecycle, PECC operations, compensation, reconciliation, anomaly management and centralized supervision, with an AI engine designed for controlled and privacy-preserving assistance.",
    context:
      "This final-year internship took place in a banking environment where operational teams need centralized visibility over cheque processing and related activities. The work combined software development, cybersecurity and artificial intelligence within a distributed banking architecture.",
    missions: [
      "Develop and integrate Angular monitoring interfaces for cheque lifecycle activities.",
      "Work with Spring Boot microservices and Oracle database integration.",
      "Implement and improve PECC monitoring and PECC / compensation reconciliation.",
      "Contribute to centralized supervision, anomaly management and API activity monitoring.",
      "Work with JWT authentication, role-based access control and agency-based COD_UG access control.",
      "Develop and integrate a dedicated FastAPI AI engine.",
      "Work with local Ollama models, RAG, BM25 and embeddings.",
      "Implement controlled AI access through business services instead of direct access to sensitive Oracle data.",
      "Contribute to cheque analysis, reconciliation analysis and API audit intelligence.",
      "Integrate real-time SSE notifications and security/audit logging.",
    ],
    responsibilities: [
      "Angular frontend development and integration.",
      "Spring Boot microservices integration.",
      "Oracle data integration and banking-service interaction.",
      "AI engine development with Python and FastAPI.",
      "Local LLM integration with Ollama.",
      "RAG, BM25 and embeddings integration.",
      "JWT authentication and RBAC.",
      "Real-time notification and monitoring integration.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "Spring Boot",
      "Java",
      "Oracle",
      "Python",
      "FastAPI",
      "Docker",
      "JWT",
      "RBAC",
      "Ollama",
      "RAG",
      "BM25",
      "Embeddings",
      "SQLAlchemy",
      "SQLite",
      "SSE",
      "REST API",
    ],
    skills: [
      "Software Development",
      "Backend Development",
      "Frontend Development",
      "Microservices",
      "Cybersecurity",
      "DevSecOps",
      "Artificial Intelligence",
      "LLM / RAG",
      "Database Integration",
      "Secure Architecture",
    ],
    outcomes: [
      "Centralized cheque lifecycle monitoring",
      "PECC monitoring and reconciliation",
      "AI-assisted cheque and reconciliation analysis",
      "Controlled and privacy-preserving AI architecture",
      "Secure role-based and agency-based access",
      "Real-time monitoring and notifications",
      "Auditability and traceability",
    ],
    media: "video",
  },

  {
    id: 2,
    date: "JUL 2025 — SEP 2025",
    title: "Cloud Security & AI Integrity Intern",
    company: "ESPRIT",
    stageType:
      "Cloud Security & AI Integrity Internship • SaaS • Academic Integrity",
    projectName:
      "SmartEditTrack: Suivi indétectable des modifications des étudiants dans des fichiers Excel",
    description:
      "Development of SmartEditTrack, a SaaS platform for academic integrity and AI-assisted cheating detection. The solution verifies the authenticity, integrity and traceability of student Excel submissions while helping professors identify suspicious modifications and anomalies.",
    context:
      "Academic assessments are increasingly digitized through Excel, LMS platforms and cloud services. Teachers may receive multiple versions of student files through e-mail, Drive or Moodle, while local Excel history can be deleted and the origin of a submitted copy can be difficult to prove. SmartEditTrack was developed to provide cryptographic proof, discreet traceability and automated analysis without intrusive student surveillance.",
    missions: [
      "Developed a SaaS platform dedicated to academic integrity and secure Excel submission verification.",
      "Implemented authentication for Student and Professor users.",
      "Implemented student submission, copy retrieval and submission-history features.",
      "Implemented professor-side copy management, analysis and report generation.",
      "Implemented automatic cryptographic markers Z1 and Z2 in student copies.",
      "Created the hidden _sig worksheet to store integrity metadata.",
      "Implemented structural comparison between the official model and the submitted copy.",
      "Implemented SHA-256 verification to detect integrity changes.",
      "Implemented worksheet protection during student data entry.",
      "Implemented hash_records.csv for cryptographic traceability.",
      "Developed the integrity module for stamping and verification.",
      "Developed the anomaly-analysis module for modified cells and suspicious editing patterns.",
      "Implemented suspicion-score calculation to support anomaly assessment.",
      "Implemented automatic TXT / HTML reporting and export.",
      "Developed student and professor interfaces with Streamlit.",
      "Worked on cloud-oriented deployment and application configuration.",
    ],
    responsibilities: [
      "Python application development",
      "Excel processing with openpyxl",
      "Cryptographic hashing with SHA-256",
      "HMAC-based integrity protection",
      "Authentication and access control",
      "Activity tracking and traceability",
      "Structural copy verification",
      "Anomaly detection and suspicion scoring",
      "Streamlit interface development",
      "Automated reporting and export",
      "Cloud / SaaS deployment",
    ],
    technologies: [
      "Python 3.10",
      "openpyxl",
      "hashlib",
      "hmac",
      "Streamlit",
      "pandas",
      "Excel",
      "SHA-256",
      "HMAC",
      "SaaS",
      "Cloud",
      "Docker",
      "Supabase",
      "GitHub",
      "Visual Studio Code",
    ],
    skills: [
      "Cloud Security",
      "Cybersecurity",
      "Python Development",
      "SaaS Development",
      "Application Security",
      "Cryptographic Integrity",
      "Data Protection",
      "Anomaly Detection",
      "AI-Assisted Analysis",
      "Secure Authentication",
    ],
    outcomes: [
      "Automated Excel authenticity and integrity verification",
      "Cryptographic stamping with Z1 / Z2 markers",
      "Hidden _sig integrity metadata",
      "SHA-256 verification and structural comparison",
      "Discreet modification traceability",
      "Automated anomaly detection and suspicion scoring",
      "TXT / HTML report generation",
      "Dedicated student and professor interfaces",
      "Cloud-oriented SaaS deployment",
    ],
    media: "report",
    presentationPath: "/documents/SmartEditTrack.pdf",
  },

  {
    id: 3,
    date: "JUL 2024 — SEP 2024",
    title: "AI & Computer Vision Intern",
    company: "Sagemcom",
    stageType:
      "AI & Computer Vision Internship • Industrial Inspection",
    projectName:
      "ElectroDetect: Inspection des PCB par IA en Ligne de Production",
    description:
      "Development of an AI-powered PCB inspection solution combining computer vision and YOLOv5 to detect assembly defects and support automated inspection in a production environment.",
    context:
      "The internship focused on PCB assembly inspection in an industrial production context. The project addressed common assembly defects such as incorrectly oriented, missing or misaligned components, with the objective of improving inspection speed, consistency and automation.",
    missions: [
      "Develop an AI-based solution for automated PCB inspection.",
      "Prepare and annotate PCB image data for computer vision.",
      "Select and work with the YOLO model for object detection.",
      "Train and optimize the detection model for improved precision.",
      "Validate the model on unseen PCB data.",
      "Develop a Django-based web application around the inspection system.",
      "Implement secure user authentication and role distinction.",
      "Provide PCB image upload and real-time inspection results.",
      "Develop anomaly visualization and inspection reporting features.",
      "Contribute to the administrator interface for user and report management.",
    ],
    responsibilities: [
      "Computer vision and image processing",
      "YOLOv5 object detection",
      "Dataset preparation and annotation",
      "Model training and optimization",
      "Model validation",
      "Django web development",
      "Real-time PCB inspection workflow",
      "Authentication and role management",
      "Anomaly visualization",
      "Inspection reporting",
    ],
    technologies: [
      "Python",
      "Django",
      "YOLOv5",
      "Computer Vision",
      "MySQL",
      "AI / Machine Learning",
      "Image Processing",
    ],
    skills: [
      "Artificial Intelligence",
      "Computer Vision",
      "Deep Learning",
      "Object Detection",
      "Python Development",
      "Django Development",
      "Industrial Inspection",
      "Model Training & Validation",
      "Web Application Development",
    ],
    outcomes: [
      "AI-assisted PCB defect detection",
      "Automated inspection workflow",
      "Detection of missing and incorrectly positioned components",
      "Real-time inspection results",
      "Anomaly visualization",
      "Web-based inspection interface",
      "Administrator management and reporting",
    ],
    media: "video-report",
    videoPath: "/videos/electroDetect.mp4",
    presentationPath:
      "/documents/electroDetect%20presentation.pdf",
  },

  {
    id: 4,
    date: "FEB 2023 — MAY 2023",
    title: "Cloud Security & Azure Infrastructure Intern",
    company: "RFC",
    stageType:
      "Cloud Security & Azure Infrastructure Internship • Cybersecurity",
    projectName:
      "Azure Cloud Security & Automated Incident Response",
    description:
      "Securing Azure cloud infrastructure, virtual machines, networks, storage and privileged identities using Microsoft security services, monitoring capabilities and automated incident-response workflows.",
    context:
      "The internship focused on designing and securing an Azure environment for the PFE project. The work covered network segmentation, secure access, cloud monitoring, workload protection and security incident response using Azure-native services.",
    missions: [
      "Designed and configured a segmented Azure virtual network with dedicated subnets.",
      "Configured Azure Bastion for secure administrative access to virtual machines.",
      "Created and configured Azure storage resources and a Log Analytics workspace.",
      "Installed and configured Jenkins, Nexus, Azure CLI and kubectl on the CI/CD environment.",
      "Deployed and monitored an application on an Azure Kubernetes cluster.",
      "Configured Azure alerts and monitoring for the cluster and virtual machines.",
      "Configured Microsoft Defender for Cloud to protect the Kubernetes cluster, virtual machine and workspace.",
      "Worked with RBAC and resource locks to strengthen access control and resource governance.",
      "Connected Microsoft Sentinel to the workspace and configured the required data connector.",
      "Created and managed Microsoft Sentinel playbooks for automated incident response.",
      "Configured Microsoft Sentinel detection rules to identify security events and threats.",
    ],
    responsibilities: [
      "Azure cloud infrastructure configuration",
      "Virtual network and subnet segmentation",
      "Secure VM administration with Azure Bastion",
      "Azure Kubernetes Service deployment and monitoring",
      "Cloud monitoring and alerting",
      "Microsoft Defender for Cloud configuration",
      "Microsoft Sentinel SIEM configuration",
      "Detection rules and automated playbooks",
      "RBAC and resource governance",
      "CI/CD environment configuration",
    ],
    technologies: [
      "Microsoft Azure",
      "Azure VNet",
      "Azure Bastion",
      "Azure VM",
      "Azure Kubernetes Service (AKS)",
      "Microsoft Defender for Cloud",
      "Microsoft Sentinel",
      "Log Analytics Workspace",
      "Azure Monitor",
      "Azure Alerts",
      "RBAC",
      "Azure CLI",
      "kubectl",
      "Jenkins",
      "Nexus",
    ],
    skills: [
      "Cloud Security",
      "Azure Infrastructure",
      "Cybersecurity",
      "SIEM",
      "Incident Response",
      "Security Monitoring",
      "Identity & Access Management",
      "RBAC",
      "Kubernetes Security",
      "Cloud Governance",
      "DevSecOps",
    ],
    outcomes: [
      "Segmented and secured Azure cloud environment",
      "Secure administrative access through Azure Bastion",
      "Protected workloads using Microsoft Defender for Cloud",
      "Centralized monitoring through Log Analytics and Azure Monitor",
      "Microsoft Sentinel SIEM integration",
      "Automated incident-response workflows with Sentinel playbooks",
      "Security detection rules and alerting",
      "Improved access control and cloud resource governance",
    ],
    media: "report",
    presentationPath:
      "/documents/S%C3%A9curit%C3%A9%20Azure.pdf",
  },
];

const projects: Project[] = [
  /* =========================================================
     PROJECT 01 — DEVSECOPS
  ========================================================= */

  {
    id: 1,
    number: "01",
    title: "DevSecOps CI/CD Pipeline",
    subtitle:
      "Automated security throughout the software delivery lifecycle",
    category: "DevSecOps • Cybersecurity • CI/CD",

    description:
      "Design and implementation of a complete DevSecOps pipeline integrating automated security controls into the CI/CD lifecycle.",

    context:
      "The project focused on integrating security directly into the software development and delivery lifecycle following the Shift-Left Security approach. Jenkins was used as the main CI/CD orchestrator.",

    challenge:
      "The challenge was to secure the complete delivery process by automatically checking source code, dependencies, secrets, Docker images and the deployed application while maintaining continuous reporting and traceability.",

    solution:
      "I implemented a Jenkins-based DevSecOps pipeline integrating SAST, SCA, secret scanning, Docker security scanning and DAST. Security results were automatically archived and exported to monitoring and notification systems.",

    contribution: [
      "Configured an isolated Ubuntu development environment using Vagrant.",
      "Connected Visual Studio Code to the virtual machine using SSH.",
      "Integrated ESLint for static JavaScript code analysis.",
      "Integrated Semgrep for source-code security analysis.",
      "Configured SonarQube for code quality and security analysis.",
      "Integrated Trivy for dependency vulnerability scanning.",
      "Integrated Trivy for Docker image security scanning.",
      "Integrated Gitleaks to detect exposed secrets.",
      "Integrated OWASP ZAP for dynamic application security testing.",
      "Configured Jenkins stages for automated security controls.",
      "Generated JSON and HTML security reports.",
      "Configured Prometheus metrics export.",
      "Created Grafana dashboards for security monitoring.",
      "Implemented automated Slack notifications.",
      "Tested the complete pipeline from source checkout to reporting.",
    ],

    architecture: [
      "Developer",
      "GitHub",
      "Jenkins",
      "Build & Tests",
      "SAST — ESLint + Semgrep",
      "SCA — Trivy",
      "Secret Scanning — Gitleaks",
      "Docker Build & Scan",
      "SonarQube",
      "DAST — OWASP ZAP",
      "Prometheus",
      "Grafana",
      "Slack",
    ],

    technologies: [
      "Jenkins",
      "GitHub",
      "Docker",
      "Vagrant",
      "Ubuntu",
      "ESLint",
      "Semgrep",
      "SonarQube",
      "Trivy",
      "Gitleaks",
      "OWASP ZAP",
      "Prometheus",
      "Grafana",
      "Slack",
    ],

    results: [
      "Complete DevSecOps CI/CD pipeline",
      "Automated SAST analysis",
      "Automated SCA analysis",
      "Automated secret detection",
      "Docker image security scanning",
      "Dynamic application security testing",
      "Automatic security report generation",
      "Prometheus metrics export",
      "Grafana security dashboard",
      "Automated Slack notifications",
    ],

    highlights: [
      "28 Git commits analyzed by Gitleaks",
      "1 potential secret detected during testing",
      "0 vulnerabilities detected by SonarQube",
      "0 bugs detected by SonarQube",
      "51.8% code duplication detected by SonarQube",
      "Complete Jenkins pipeline successfully executed",
    ],

    media: "report",
  },

  /* =========================================================
     PROJECT 02 — THREAT INTELLIGENCE ECOSYSTEM FOR BANKING
  ========================================================= */

  {
    id: 3,
    number: "02",
    title: "Threat Intelligence Ecosystem for Banking",
    subtitle:
      "Integrated SOC, threat intelligence and automated incident response",
    category:
      "Cybersecurity • SOC • Threat Intelligence • Banking",

    description:
      "Design and deployment of a banking-oriented threat intelligence ecosystem combining security monitoring, incident response, threat intelligence enrichment, AI-driven analysis and automated response.",

    context:
      "The project focused on building an integrated Security Operations Center ecosystem around Wazuh, Shuffle, TheHive, Cortex and MISP. The solution was designed to improve real-time visibility, accelerate incident handling and provide a centralized approach to threat detection and response.",

    challenge:
      "The core challenge was the lack of real-time visibility into internal systems, delayed intrusion detection, manual and slow response processes, and the siloed and reactive nature of traditional security tools. The project aimed to connect monitoring, orchestration, incident management, analysis and threat intelligence.",

    solution:
      "The proposed ecosystem connects Wazuh monitoring with Shuffle SOAR, TheHive case management, Cortex analysis, MISP threat intelligence and a firewall API. Wazuh collects NDR, EDR and Zabbix data; events are orchestrated through Shuffle, cases are created in TheHive, AI analyzes patterns and potential threats, Cortex performs automated analysis, MISP enriches indicators and the firewall API can trigger automated response actions.",

    contribution: [
      "Designed the SOC architecture for a banking-oriented security environment.",
      "Worked with Wazuh for centralized security monitoring.",
      "Integrated Wazuh data sources including NDR, EDR and Zabbix events.",
      "Integrated Shuffle as the SOAR orchestration layer.",
      "Integrated TheHive for incident and case management.",
      "Integrated Cortex for automated security analysis.",
      "Integrated MISP for threat intelligence enrichment and sharing.",
      "Worked on alert correlation and incident triage.",
      "Contributed to the integration of AI-driven threat and anomaly analysis.",
      "Worked on automated response through the firewall API.",
    ],

    architecture: [
      "Internet",
      "pfSense Firewall",
      "DMZ / Honeynet / LAN",
      "Wazuh — EDR + NDR + Zabbix Monitoring",
      "Shuffle — SOAR Orchestration",
      "TheHive — Incident & Case Management",
      "AI Model — Pattern & Threat Analysis",
      "Cortex — Automated Analysis",
      "MISP — Threat Intelligence Enrichment",
      "Firewall API — Automated Response",
    ],

    technologies: [
      "Wazuh",
      "Shuffle",
      "TheHive",
      "Cortex",
      "MISP",
      "pfSense",
      "Zabbix",
      "Sysmon",
      "Syslog",
      "EDR",
      "NDR",
      "AI / Machine Learning",
      "SOAR",
      "Cybersecurity",
      "SOC",
    ],

    results: [
      "Centralized security monitoring",
      "Real-time threat detection and correlation",
      "Incident triage and case management",
      "Automated security analysis",
      "Threat intelligence enrichment",
      "Automated response capabilities",
      "Improved visibility across endpoint and network activity",
      "Scalable architecture for growing banking security needs",
      "Compliance-ready security reporting",
    ],

    highlights: [
      "Banking-focused Security Operations Center ecosystem",
      "Wazuh monitoring across EDR, NDR and Zabbix data",
      "Shuffle SOAR orchestration",
      "TheHive incident management",
      "Cortex automated analysis",
      "MISP threat intelligence enrichment",
      "AI-driven threat detection and anomaly analysis",
      "Automated response through firewall APIs",
      "Target detection accuracy: ≥ 95%",
      "Target MTTD: < 5 min",
      "Target MTTR: < 10 min",
      "Target availability: > 99.9%",
    ],

    objectives: [
      "Enhance the cybersecurity posture.",
      "Reduce operational costs through automation.",
      "Protect customer trust and data.",
      "Support legal and regulatory compliance.",
      "Provide real-time threat detection and correlation.",
      "Automate and accelerate incident response.",
      "Enrich investigations with threat intelligence.",
      "Extend security coverage across endpoints and networks.",
    ],

    keyFeatures: [
      "AI-driven threat detection.",
      "Threat hunting using behavior analytics and threat intelligence feeds.",
      "Automated response playbooks to reduce reaction time.",
      "Compliance-ready audits and detailed security reporting.",
    ],

    infrastructure: [
      "pfSense firewall",
      "DMZ services: Web / Mail / DNS",
      "Honeypot / Honeynet",
      "LAN environment",
      "Sysmon and Syslog",
      "Wazuh monitoring",
      "Zabbix monitoring",
      "Shuffle SOAR",
      "TheHive",
      "Cortex",
      "MISP",
    ],

    risksCompliance: [
      "GDPR: incident notification within 72 hours.",
      "Alignment with Central Bank guidelines.",
      "Audit-ready reporting.",
      "Insider threat and data breach risk.",
      "Security tool misconfiguration risk.",
      "Complex integration risk.",
      "Zero-day attack risk.",
      "Assumptions: consistent Sysmon and Syslog sources.",
      "Assumptions: isolated setup simulating a banking environment.",
      "Assumptions: Internet access for updates and threat intelligence feeds.",
    ],

    kpis: [
      "Detection accuracy: ≥ 95% with fewer false positives.",
      "MTTD: < 5 min through real-time monitoring.",
      "MTTR: < 10 min with automated response.",
      "Incident reduction target: 70% fewer attacks through early detection and auto-blocking.",
      "Efficiency target: 30–50% fewer manual tasks through SOAR automation.",
      "High-availability target: > 99.9% uptime.",
      "Expected response-time reduction: up to 60%.",
      "Expected security-operations savings: 30–50% through automation and open-source adoption.",
    ],

    media: "video",
    videoPath: "/videos/SOC.mp4",
    presentationPath:
      "/documents/Presentation%20final%20PI.pdf",
  },

  /* =========================================================
     PROJECT 03 — SMART CONNECTED BRACELET
  ========================================================= */

  {
    id: 4,
    number: "03",
    title: "Smart Connected Bracelet",
    subtitle:
      "Connected health monitoring for cardiovascular risk awareness",
    category:
      "IoT • Embedded Systems • Mobile • Healthcare",

    description:
      "Design and development of a connected smart bracelet prototype for real-time monitoring of vital information, with a focus on cardiovascular health and remote communication.",

    context:
      "The project addresses the challenge of monitoring cardiovascular health continuously and making relevant information accessible to users and healthcare stakeholders. The concept combines an embedded bracelet, sensors, wireless communication and software services.",

    challenge:
      "The main challenge was to build a compact connected prototype able to collect physiological and location data, display information locally and transmit measurements for remote monitoring.",

    solution:
      "The proposed solution is a smart connected bracelet integrating an Arduino Uno, a cardiac pulse sensor, a GPS module, an SSD1306 OLED I2C display and an NRF24L01 wireless communication module. The prototype is designed to collect measurements, provide local feedback and support real-time data transmission.",

    contribution: [
      "Designed the smart bracelet concept and its overall system architecture.",
      "Integrated the Arduino Uno as the main embedded controller.",
      "Integrated a cardiac pulse sensor for heart-rate monitoring.",
      "Integrated a GPS module for location information.",
      "Integrated an SSD1306 OLED I2C display for local data visualization.",
      "Integrated the NRF24L01 module for wireless communication.",
      "Worked on the acquisition and transmission of sensor data.",
      "Worked on real-time monitoring of collected information.",
      "Contributed to the prototype realization and hardware integration.",
      "Prepared and demonstrated the complete solution through presentation and prototype video.",
    ],

    architecture: [
      "Smart Bracelet Prototype",
      "Arduino Uno — Embedded Controller",
      "Pulse Sensor — Cardiac Measurement",
      "GPS — Location Data",
      "SSD1306 OLED I2C — Local Display",
      "NRF24L01 — Wireless Communication",
      "Data Transmission",
      "Remote Monitoring",
    ],

    technologies: [
      "Arduino Uno",
      "Embedded Systems",
      "C / Arduino",
      "IoT",
      "GPS",
      "Pulse Sensor",
      "NRF24L01",
      "SSD1306 OLED I2C",
      "Wireless Communication",
      "Real-Time Monitoring",
    ],

    results: [
      "Functional smart bracelet prototype",
      "Real-time cardiac data acquisition",
      "Local visualization through OLED display",
      "GPS-based location information",
      "Wireless communication between embedded components",
      "Connected IoT architecture",
      "Prototype demonstrating remote monitoring capabilities",
    ],

    highlights: [
      "Cardiovascular health monitoring concept",
      "Arduino Uno embedded controller",
      "Pulse sensor for cardiac measurements",
      "GPS location tracking",
      "SSD1306 OLED I2C display",
      "NRF24L01 wireless communication",
      "Physical prototype realization",
      "Presentation and realization demonstrated in the project video",
    ],

    objectives: [
      "Monitor relevant physiological information continuously.",
      "Provide immediate local access to collected measurements.",
      "Transmit sensor information wirelessly for remote monitoring.",
      "Integrate location information through GPS.",
      "Develop a compact and connected healthcare-oriented prototype.",
    ],

    keyFeatures: [
      "Cardiac pulse monitoring.",
      "GPS location acquisition.",
      "OLED real-time display.",
      "Wireless data transmission.",
      "Embedded Arduino-based control.",
      "Wearable and connected prototype.",
    ],

    infrastructure: [
      "Arduino Uno",
      "Cardiac pulse sensor",
      "GPS module",
      "SSD1306 OLED I2C display",
      "NRF24L01 wireless module",
      "Smart bracelet prototype",
    ],

    videoPath: "/videos/Smart%20Bracelet%20Final.mp4",
    media: "video",
  },
];

function App() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="nav-container">

          <button
            className="logo"
            onClick={() => scrollToSection("home")}
          >
            CM<span>.</span>
          </button>

          <nav>

            <button onClick={() => scrollToSection("about")}>
              About
            </button>

            <button onClick={() => scrollToSection("experience")}>
              Experience
            </button>

            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>

            <button onClick={() => scrollToSection("skills")}>
              Skills
            </button>

            <button onClick={() => scrollToSection("contact")}>
              Contact
            </button>

          </nav>

          <a
            className="cv-button"
            href="/documents/Cv%20Mami%20Chaima.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>

        </div>

      </header>

      {/* ================= HERO ================= */}

      <section id="home" className="hero section">

        <div className="hero-content">

          <p className="eyebrow">
            HELLO, I'M
          </p>

          <h1>
            Chaima
            <br />
            <span>Mami.</span>
          </h1>

          <h2>
            Software Developer | DevOps | Cloud | Cybersecurity | AI
          </h2>

          <p className="hero-description">
            Computer engineering graduate and software developer passionate about
            building secure, automated and intelligent solutions across
            software development, DevOps, Cloud, Cybersecurity and AI.
          </p>

          <div className="hero-actions">

            <button
              className="primary-button"
              onClick={() => scrollToSection("projects")}
            >
              View my projects →
            </button>

            <button
              className="secondary-button"
              onClick={() => scrollToSection("contact")}
            >
              Contact me
            </button>

          </div>

        </div>

        <div className="hero-visual">

          <div className="orbit orbit-one"></div>

          <div className="orbit orbit-two"></div>

          <div className="hero-circle">
            CM
          </div>

          <p>
            DEVOPS • CLOUD • AI • SECURITY
          </p>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className="section about-section">

        <div className="section-header">

          <p className="eyebrow">
            ABOUT ME
          </p>

          <h2>
            Engineering secure &
            <span> intelligent solutions.</span>
          </h2>

        </div>

        <div className="about-grid">

          <div className="about-text">

            <p>
              I am a Computer Engineering graduate and Software Developer,
              graduated from ESPRIT with Highest Honors.
            </p>

            <p>
              My experience covers software development, DevSecOps, Cloud,
              cybersecurity, networking, banking systems and Artificial Intelligence.
            </p>

            <p>
              I enjoy building reliable, secure and automated
              solutions while continuously learning new technologies.
            </p>

          </div>

          <div className="about-stats">

            <div className="stat-card">
              <strong>DevOps</strong>
              <span>CI/CD • Automation</span>
            </div>

            <div className="stat-card">
              <strong>Cloud</strong>
              <span>AWS • Azure</span>
            </div>

            <div className="stat-card">
              <strong>Security</strong>
              <span>Cybersecurity • DevSecOps</span>
            </div>

            <div className="stat-card">
              <strong>AI</strong>
              <span>ML • RAG • LLM</span>
            </div>

          </div>

        </div>

      </section>

      {/* ================= EXPERIENCE ================= */}

      <section
        id="experience"
        className="section experience-section"
      >

        <div className="section-header">

          <p className="eyebrow">
            EXPERIENCE
          </p>

          <h2>
            Internships &
            <span> professional experience.</span>
          </h2>

        </div>

        <div className="timeline">

          {experiences.map((experience) => (

            <article
              className={`timeline-item ${
                experience.context
                  ? "timeline-item-detailed"
                  : ""
              }`}
              key={experience.id}
              onClick={() =>
                experience.context &&
                setSelectedExperience(experience)
              }
              role={
                experience.context
                  ? "button"
                  : undefined
              }
              tabIndex={
                experience.context
                  ? 0
                  : undefined
              }
              onKeyDown={(event) => {

                if (
                  experience.context &&
                  (event.key === "Enter" ||
                    event.key === " ")
                ) {

                  event.preventDefault();

                  setSelectedExperience(experience);

                }

              }}
            >

              <div className="timeline-number">
                {String(experience.id).padStart(2, "0")}
              </div>

              <div className="timeline-content">

                <p className="timeline-date">
                  {experience.date}
                </p>

                <h3>
                  {experience.title}
                </h3>

                <h4 className="experience-company">
                  {experience.company}
                </h4>

                {experience.projectName && (
                  <p className="experience-project-label">
                    Project · {experience.projectName}
                  </p>
                )}

                <p>
                  {experience.description}
                </p>

                <div className="mini-tags">

                  {experience.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

                {experience.context && (
                  <button
                    className="experience-link"
                    type="button"
                    onClick={(event) => {

                      event.stopPropagation();

                      setSelectedExperience(
                        experience
                      );

                    }}
                  >
                    View internship details
                    <span>→</span>
                  </button>
                )}

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="section projects-section"
      >

        <div className="section-header">

          <p className="eyebrow">
            SELECTED PROJECTS
          </p>

          <h2>
            Technical work that
            <span> defines my profile.</span>
          </h2>

          <p className="section-intro">
            A selection of personal, academic and technical projects
            covering DevSecOps, cybersecurity, AI, IoT and software engineering.
          </p>

        </div>

        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.id}
            >

              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>

              </div>

              <div className="project-body">

                <h3>
                  {project.title}
                </h3>

                <h4>
                  {project.subtitle}
                </h4>

                <p>
                  {project.description}
                </p>

              </div>

              <div className="project-tags">

                {project.technologies
                  .slice(0, 5)
                  .map((technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  ))}

                {project.technologies.length > 5 && (
                  <span>
                    +{project.technologies.length - 5}
                  </span>
                )}

              </div>

              <button
                className="project-link"
                onClick={() =>
                  setSelectedProject(project)
                }
              >

                View case study

                <span>
                  →
                </span>

              </button>

            </article>

          ))}

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="section skills-section"
      >

        <div className="section-header">

          <p className="eyebrow">
            TECHNICAL SKILLS
          </p>

          <h2>
            Technologies I
            <span> work with.</span>
          </h2>

        </div>

        <div className="skills-grid">

          <div className="skill-group">

            <h3>
              Programming
            </h3>

            <div className="skill-list">

              <span>Python</span>
              <span>Java</span>
              <span>C</span>
              <span>C++</span>
              <span>PHP</span>
              <span>SQL</span>
              <span>PL/SQL</span>
              <span>TypeScript</span>

            </div>

          </div>

          <div className="skill-group">

            <h3>
              Development
            </h3>

            <div className="skill-list">

              <span>Spring Boot</span>
              <span>Angular</span>
              <span>FastAPI</span>
              <span>Django</span>
              <span>Symfony</span>
              <span>.NET</span>

            </div>

          </div>

          <div className="skill-group">

            <h3>
              DevSecOps
            </h3>

            <div className="skill-list">

              <span>Docker</span>
              <span>Jenkins</span>
              <span>GitLab CI/CD</span>
              <span>Trivy</span>
              <span>Semgrep</span>
              <span>Gitleaks</span>
              <span>SonarQube</span>
              <span>OWASP ZAP</span>

            </div>

          </div>

          <div className="skill-group">

            <h3>
              Cloud & Networking
            </h3>

            <div className="skill-list">

              <span>Azure</span>
              <span>AWS</span>
              <span>TCP/IP</span>
              <span>VLAN</span>
              <span>VPN</span>
              <span>OSPF</span>
              <span>IPv6</span>
              <span>TLS/SSL</span>

            </div>

          </div>

          <div className="skill-group">

            <h3>
              Cybersecurity
            </h3>

            <div className="skill-list">

              <span>Wazuh</span>
              <span>TheHive</span>
              <span>Cortex</span>
              <span>MISP</span>
              <span>Sentinel</span>
              <span>Defender for Cloud</span>
              <span>Wireshark</span>
              <span>Nmap</span>

            </div>

          </div>

          <div className="skill-group">

            <h3>
              AI & Data
            </h3>

            <div className="skill-list">

              <span>Scikit-learn</span>
              <span>XGBoost</span>
              <span>Random Forest</span>
              <span>TensorFlow</span>
              <span>YOLOv5</span>
              <span>RAG</span>
              <span>Ollama</span>
              <span>BM25</span>
              <span>Embeddings</span>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="section contact-section"
      >

        <div className="contact-box">

          <p className="eyebrow">
            LET'S CONNECT
          </p>

          <h2>
            Let's build something
            <span> great together.</span>
          </h2>

          <p>
            I am open to opportunities in DevOps, Cloud,
            Cybersecurity, software engineering and
            AI-powered systems.
          </p>

          <div className="contact-actions">

            <a
              href="mailto:chaima.mami@esprit.tn"
              className="primary-button"
            >
              chaima.mami@esprit.tn
            </a>

            <a
              href="mailto:chaima.mami.it@gmail.com"
              className="secondary-button"
            >
              chaima.mami.it@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/chaimamami/"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/chaimamami"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              GitHub
            </a>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer>

        <div>
          © {new Date().getFullYear()} Chaima Mami.
        </div>

        <div>
          Software Development • DevOps • Cloud • Cybersecurity • AI
        </div>

      </footer>

      {/* =========================================================
          EXPERIENCE / INTERNSHIP MODAL
      ========================================================= */}

      {selectedExperience && (

        <div
          className="modal-overlay"
          onClick={() =>
            setSelectedExperience(null)
          }
        >

          <div
            className="project-modal experience-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setSelectedExperience(null)
              }
              aria-label="Close internship details"
            >
              ×
            </button>

            <div className="modal-header">

              <span className="project-number">
                EXPERIENCE{" "}
                {String(
                  selectedExperience.id
                ).padStart(2, "0")}
              </span>

              <p className="eyebrow">
                {selectedExperience.stageType ||
                  "PROFESSIONAL EXPERIENCE"}
              </p>

              <h2>
                {selectedExperience.company}
              </h2>

              <p className="modal-subtitle">
                {selectedExperience.title} •{" "}
                {selectedExperience.date}
              </p>

            </div>

            <div className="modal-content">

              <div className="detail-block">

                <span className="detail-label">
                  01 — INTERNSHIP OVERVIEW
                </span>

                <p>
                  {selectedExperience.description}
                </p>

              </div>

              {selectedExperience.context && (

                <div className="detail-block">

                  <span className="detail-label">
                    02 — CONTEXT
                  </span>

                  <p>
                    {selectedExperience.context}
                  </p>

                </div>

              )}

              {selectedExperience.missions && (

                <div className="detail-block">

                  <span className="detail-label">
                    03 — MISSIONS & WORK PERFORMED
                  </span>

                  <ul className="contribution-list">

                    {selectedExperience.missions.map(
                      (mission) => (

                        <li key={mission}>

                          <span>✓</span>

                          {mission}

                        </li>

                      )
                    )}

                  </ul>

                </div>

              )}

              {selectedExperience.responsibilities && (

                <div className="detail-block">

                  <span className="detail-label">
                    04 — TECHNICAL RESPONSIBILITIES
                  </span>

                  <div className="detail-tags">

                    {selectedExperience.responsibilities.map(
                      (item) => (

                        <span key={item}>
                          {item}
                        </span>

                      )
                    )}

                  </div>

                </div>

              )}

              <div className="detail-block">

                <span className="detail-label">
                  05 — TECHNOLOGIES
                </span>

                <div className="detail-tags">

                  {selectedExperience.technologies.map(
                    (technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    )
                  )}

                </div>

              </div>

              {selectedExperience.skills && (

                <div className="detail-block">

                  <span className="detail-label">
                    06 — SKILLS DEVELOPED
                  </span>

                  <div className="detail-tags">

                    {selectedExperience.skills.map(
                      (skill) => (

                        <span key={skill}>
                          {skill}
                        </span>

                      )
                    )}

                  </div>

                </div>

              )}

              {selectedExperience.outcomes && (

                <div className="detail-block">

                  <span className="detail-label">
                    07 — OUTCOMES
                  </span>

                  <ul className="contribution-list">

                    {selectedExperience.outcomes.map(
                      (outcome) => (

                        <li key={outcome}>

                          <span>→</span>

                          {outcome}

                        </li>

                      )
                    )}

                  </ul>

                </div>

              )}

              {(selectedExperience.media ===
                "video" ||
                selectedExperience.media ===
                  "video-report") && (

                <div className="media-section">

                  <span className="detail-label">
                    08 — INTERNSHIP DEMONSTRATION
                  </span>

                  <div className="video-container">

                    <video
                      controls
                      preload="metadata"
                    >

                      <source
                        src={
                          selectedExperience.videoPath ||
                          "/videos/tsb-cheque-monitoring.mp4"
                        }
                        type="video/mp4"
                      />

                      Your browser does not support
                      the video element.

                    </video>

                  </div>

                  <p className="media-caption">

                    {selectedExperience.projectName
                      ? `${selectedExperience.projectName} — project demonstration.`
                      : "Demonstration of the internship project and its main functional modules."}

                  </p>

                </div>

              )}

              {(selectedExperience.media ===
                "report" ||
                selectedExperience.media ===
                  "video-report") &&
                selectedExperience.presentationPath && (

                  <div className="media-section">

                    <span className="detail-label">
                      09 — PROJECT PRESENTATION
                    </span>

                    {selectedExperience.projectName && (

                      <h3 className="experience-project-title">
                        {selectedExperience.projectName}
                      </h3>

                    )}

                    <div className="pdf-container">

                      <iframe
                        src={
                          selectedExperience.presentationPath
                        }
                        title={`${selectedExperience.company} — project presentation`}
                      />

                    </div>

                    <div className="media-actions">

                      <a
                        className="primary-button"
                        href={
                          selectedExperience.presentationPath
                        }
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open Project Presentation →
                      </a>

                    </div>

                    <p className="media-caption">
                      Presentation and technical documentation of the internship project.
                    </p>

                  </div>

                )}

              <div className="modal-footer">

                <button
                  className="secondary-button"
                  onClick={() =>
                    setSelectedExperience(null)
                  }
                >
                  Close internship
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

      {/* =========================================================
          PROJECT MODAL
      ========================================================= */}

      {selectedProject && (

        <div
          className="modal-overlay"
          onClick={() =>
            setSelectedProject(null)
          }
        >

          <div
            className="project-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setSelectedProject(null)
              }
            >
              ×
            </button>

            {/* HEADER */}

            <div className="modal-header">

              <span className="project-number">
                PROJECT {selectedProject.number}
              </span>

              <p className="eyebrow">
                {selectedProject.category}
              </p>

              <h2>
                {selectedProject.title}
              </h2>

              <p className="modal-subtitle">
                {selectedProject.subtitle}
              </p>

            </div>

            <div className="modal-content">

              {/* OVERVIEW */}

              <div className="detail-block">

                <span className="detail-label">
                  01 — OVERVIEW
                </span>

                <p>
                  {selectedProject.description}
                </p>

              </div>

              {/* CONTEXT */}

              <div className="detail-block">

                <span className="detail-label">
                  02 — CONTEXT
                </span>

                <p>
                  {selectedProject.context}
                </p>

              </div>

              {/* CHALLENGE */}

              <div className="detail-block">

                <span className="detail-label">
                  03 — CHALLENGE
                </span>

                <p>
                  {selectedProject.challenge}
                </p>

              </div>

              {/* SOLUTION */}

              <div className="detail-block">

                <span className="detail-label">
                  04 — SOLUTION
                </span>

                <p>
                  {selectedProject.solution}
                </p>

              </div>

              {/* CONTRIBUTION */}

              <div className="detail-block">

                <span className="detail-label">
                  05 — MY CONTRIBUTION
                </span>

                <ul className="contribution-list">

                  {selectedProject.contribution.map(
                    (item, index) => (

                      <li key={index}>

                        <span>
                          ✓
                        </span>

                        {item}

                      </li>

                    )
                  )}

                </ul>

              </div>

              {/* ARCHITECTURE */}

              <div className="detail-block">

                <span className="detail-label">
                  06 — ARCHITECTURE
                </span>

                <div className="architecture-flow">

                  {selectedProject.architecture.map(
                    (item, index) => (

                      <div
                        className="architecture-item"
                        key={item}
                      >

                        <span>
                          {item}
                        </span>

                        {index <
                          selectedProject.architecture.length -
                            1 && (
                          <b>
                            ↓
                          </b>
                        )}

                      </div>

                    )
                  )}

                </div>

              </div>

              {/* TECHNOLOGIES */}

              <div className="detail-block">

                <span className="detail-label">
                  07 — TECHNOLOGIES
                </span>

                <div className="modal-tags">

                  {selectedProject.technologies.map(
                    (technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    )
                  )}

                </div>

              </div>

              {/* RESULTS */}

              <div className="detail-block">

                <span className="detail-label">
                  08 — RESULTS
                </span>

                <div className="results-grid">

                  {selectedProject.results.map(
                    (result) => (

                      <div
                        className="result-card"
                        key={result}
                      >

                        <span>
                          ✓
                        </span>

                        {result}

                      </div>

                    )
                  )}

                </div>

              </div>

              {/* HIGHLIGHTS */}

              <div className="detail-block">

                <span className="detail-label">
                  09 — HIGHLIGHTS
                </span>

                <div className="highlights">

                  {selectedProject.highlights.map(
                    (highlight) => (

                      <div
                        key={highlight}
                      >

                        <span>
                          →
                        </span>

                        {highlight}

                      </div>

                    )
                  )}

                </div>

              </div>

              {/* =================================================
                  TSB / PROJECT VIDEO
              ================================================= */}

              {selectedProject.media ===
                "video" &&
                selectedProject.videoPath && (

                <div className="media-section">

                  <span className="detail-label">
                    10 — PROJECT DEMONSTRATION
                  </span>

                  <div className="video-container">

                    <video
                      controls
                      preload="metadata"
                    >

                      <source
                        src={
                          selectedProject.videoPath
                        }
                        type="video/mp4"
                      />

                      Your browser does not support
                      the video element.

                    </video>

                  </div>

                  <p className="media-caption">

                    {selectedProject.title ===
                    "Smart Connected Bracelet"
                      ? "Complete project video covering the presentation, system concept and physical prototype realization."
                      : "Demonstration video of the Threat Intelligence Ecosystem for Banking and its main security operations components."}

                  </p>

                </div>

              )}

              {/* =================================================
                  THREAT INTELLIGENCE PROJECT DETAILS
              ================================================= */}

              {selectedProject.objectives && (

                <div className="detail-block">

                  <span className="detail-label">
                    10 — PROJECT OBJECTIVES
                  </span>

                  <ul className="contribution-list">

                    {selectedProject.objectives.map(
                      (objective) => (

                        <li key={objective}>

                          <span>→</span>

                          {objective}

                        </li>

                      )
                    )}

                  </ul>

                </div>

              )}

              {selectedProject.keyFeatures && (

                <div className="detail-block">

                  <span className="detail-label">
                    11 — KEY FEATURES
                  </span>

                  <ul className="contribution-list">

                    {selectedProject.keyFeatures.map(
                      (feature) => (

                        <li key={feature}>

                          <span>✓</span>

                          {feature}

                        </li>

                      )
                    )}

                  </ul>

                </div>

              )}

              {selectedProject.infrastructure && (

                <div className="detail-block">

                  <span className="detail-label">
                    12 — RESOURCE & INFRASTRUCTURE
                  </span>

                  <div className="modal-tags">

                    {selectedProject.infrastructure.map(
                      (item) => (

                        <span key={item}>
                          {item}
                        </span>

                      )
                    )}

                  </div>

                </div>

              )}

              {selectedProject.risksCompliance && (

                <div className="detail-block">

                  <span className="detail-label">
                    13 — RISKS, COMPLIANCE & ASSUMPTIONS
                  </span>

                  <ul className="contribution-list">

                    {selectedProject.risksCompliance.map(
                      (item) => (

                        <li key={item}>

                          <span>•</span>

                          {item}

                        </li>

                      )
                    )}

                  </ul>

                </div>

              )}

              {selectedProject.kpis && (

                <div className="detail-block">

                  <span className="detail-label">
                    14 — KPIs & PERFORMANCE TARGETS
                  </span>

                  <div className="results-grid">

                    {selectedProject.kpis.map(
                      (kpi) => (

                        <div
                          className="result-card"
                          key={kpi}
                        >

                          <span>
                            ↗
                          </span>

                          {kpi}

                        </div>

                      )
                    )}

                  </div>

                </div>

              )}

              {selectedProject.presentationPath && (

                <div className="media-section">

                  <span className="detail-label">
                    16 — PROJECT PRESENTATION
                  </span>

                  <div className="report-card presentation-card">

                    <div className="report-icon">
                      PDF
                    </div>

                    <div>

                      <h3>
                        Threat Intelligence Ecosystem — Presentation
                      </h3>

                      <p>
                        Full project presentation covering the business need,
                        solution, architecture, methodology, infrastructure,
                        risks, KPIs, results and next steps.
                      </p>

                    </div>

                    <a
                      href={
                        selectedProject.presentationPath
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="primary-button"
                    >
                      Open presentation →
                    </a>

                  </div>

                </div>

              )}

              {/* =================================================
                  DEVSECOPS REPORT
              ================================================= */}

              {selectedProject.media ===
                "report" && (

                <div className="media-section">

                  <span className="detail-label">
                    10 — PROJECT DOCUMENTATION
                  </span>

                  <div className="report-card">

                    <div className="report-icon">
                      PDF
                    </div>

                    <div>

                      <h3>
                        DevSecOps Project Report
                      </h3>

                      <p>
                        Detailed documentation of the
                        DevSecOps implementation, security
                        tools, Jenkins pipeline, monitoring
                        and reporting.
                      </p>

                    </div>

                    <a
                      href="/documents/devsecops-report.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="primary-button"
                    >
                      Open report →
                    </a>

                  </div>

                </div>

              )}

              {/* FOOTER */}

              <div className="modal-footer">

                <button
                  className="secondary-button"
                  onClick={() =>
                    setSelectedProject(null)
                  }
                >
                  Close case study
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;