import maPhoto from '../assets/ngouye.jpg';
import projetDevOps from '../assets/projet-devops.jpg';
import projetCICD from '../assets/projet-cicd.jpg';
import projetSecurite from '../assets/projet-securite.jpg';
import projetIDS from '../assets/projet-ids.jpg';
import projetDjango from '../assets/projet-django.jpg';
import certificatCS50P from '../assets/cs50p-certificate.jpg';
import certificatCRPO from '../assets/certificatCRPO.jpg';
import certificatSOC from '../assets/certificatSOC.jpg';
import certificatCLUBEBIOSP from '../assets/certificatCLUBEBIOS.jpg';
import certificatIA from '../assets/certificatIA.jpg';

export const portfolioData = {
    name: "Ngouye Gning",
    roles: [" DevOps", "Développeur","Administrateur Système et bases de données", " Sécurité système et réseau", "Freelance"],
    introduction: " DevOps, Sécurité et Freelance passionné par la construction d'infrastructures sécurisées et évolutives. Expert en technologies cloud, pipelines CI/CD et bonnes pratiques de sécurité. J'apprends actuellement le DevSecOps.",
    photo: maPhoto,
    certifications: [
        {
    title: "CS50P — Introduction to Programming with Python",
    issuer: "Harvard University",
    date: "2025",
    description: "Certificat d’achèvement du programme CS50P de Harvard, axé sur la maîtrise de la programmation Python, les structures de données, la résolution de problèmes algorithmiques et l’application des bonnes pratiques de développement logiciel.",
    image: certificatCS50P
},
{
    title: "CRPO — Certified Ransomware Protection Officer",
    issuer: "EU Cyber Academy",
    date: "2026",
    description: "Cette certification m’a permis d’acquérir une expertise avancée dans la compréhension des mécanismes des ransomwares, l’évaluation des risques associés, la mise en œuvre de stratégies de protection préventive, la détection des menaces et la conduite de réponses efficaces aux incidents.",
    image: certificatCRPO
},
{
    title: "Student SOC Program Foundations",
    issuer: "Microsoft",
    date: "2026",
    description: `Ce programme a renforcé mes compétences opérationnelles liées à l’exploitation d’un Security Operations Center (SOC) :

• Visibilité & Monitoring : mise en place d’une surveillance continue et corrélation des événements pour une visibilité complète sur l’infrastructure.

• Réponse aux incidents : application de processus structurés et de playbooks pour optimiser le cycle détection → analyse → containment → remédiation.

• Éthique & Collaboration : gestion rigoureuse de la confidentialité des données et travail coordonné avec les équipes IT dans un environnement défensif.`,
    image: certificatSOC
},
{
    title: "MOOC « Introduction à la méthode EBIOS Risk Manager »",
    issuer: "Club EBIOS, soutenu par l’ANSSI",
    date: "2026",
    description: "Cette formation m’a permis de maîtriser l’approche méthodologique de gestion des risques cyber selon EBIOS Risk Manager, et de comprendre son application concrète dans l’analyse des menaces, des vulnérabilités et des impacts sur les systèmes d’information.",
    image: certificatCLUBEBIOSP
},
{
    title: "Certification en Intelligence Artificielle",
    issuer: "Programme FORCE-N",
    date: "2026",
    description: `Cette certification formalise des compétences que je mobilise dans la conception de solutions basées sur l’IA depuis plusieurs années :

• Apprentissage supervisé : utilisation experte des algorithmes SVM, KNN, Random Forest et Régression Logistique pour la classification et la prédiction.

• Apprentissage non supervisé : mise en œuvre de techniques de clustering (K-Means, PCA) pour l’extraction de structures cachées dans des données non étiquetées.

• Deep Learning & Computer Vision : développement d’architectures basées sur les réseaux de neurones convolutifs (CNN) et YOLO avec TensorFlow et Python.`,
    image: certificatIA
}
    ],
    skills: [
        {
            category: "Développement Logiciel",
            icon: "Code",
            color: "emerald",
            items: [
                { name: "Java / JavaFX", description: "applications desktop avec interface graphique." },
                { name: "JavaScript", description: "Développement dynamique côté client avec ES6+" },
                { name: "Python", description: "cryptographie, applications bancaires, scripts automatisés." },
                { name: "Java EE", description: "Développement d'applications web avec Servlets, JSP et JDBC." },
                { name: "React / React Native", description: "applications web et mobiles (CV interactif, interfaces complètes)." },
                { name: "Flask (Python)", description: "développement web sécurisé avec authentification et gestion de rôles." },
                { name: "PHP / MySQL / HTML / CSS / JavaScript", description: "développement web dynamique et sécurisé." }
            ]
        },
        {
            category: "Infrastructure & DevOps",
            icon: "Cloud",
            color: "blue",
            items: [
                { name: "Terraform", description: "Infrastructure as Code (IaC) pour AWS et autres clouds." },
                { name: "Ansible", description: "Automatisation de la configuration et du déploiement." },
                { name: "Docker & Kubernetes", description: "Conteneurisation et orchestration." },
                { name: "CI/CD", description: "Jenkins, GitLab CI pour des pipelines robustes." },
                { name: "Cloud", description: "AWS (S3, EC2, IAM) et bases de Azure/GCP." },
                { name: "Monitoring", description: "Prometheus, Grafana." },
            ]
        },
        {
            category: "Sécurité Informatique & Cryptographie",
            icon: "Shield",
            color: "orange",
            items: [
                { name: "Fonctions de hachage", description: "SHA-256." },
                { name: "Chiffrement symétrique", description: "AES." },
                { name: "Chiffrement asymétrique", description: "RSA." },
                { name: "Gestion des mots de passe", description: "BCrypt." },
                { name: "Sécurité des fichiers", description: "surveillance d'intégrité, journalisation, rapports PDF." },
                { name: "WAF/IPS/IDS", description: "Protection contre les menaces web et réseau." },
            ]
        },
        
        {
            category: "Sécurité Réseau & Pare-feu, Analyse SOC & Détection des Menaces",
            icon: "Server",
            color: "cyan",
            items: [
                { name: "Virtualisation / Déploiement", description: "configuration de pfSense et FortiGate sur VMware." },
                { name: "Segmentation réseau", description: "VLANs, LAN, DMZ, WAN." },
                { name: "Contrôle du trafic", description: "règles firewall pour autoriser/limiter le trafic entrant/sortant." },
                { name: "NAT / PAT et VPN (OpenVPN)", description: "pour accès sécurisé." },
                { name: "Systèmes IDS/IPS", description: "Snort sur pfSense." },
                { name: "iptables / UFW", description: "sécurisation de serveurs Linux." },
                { name: "Surveillance & Monitoring", description: "Supervision continue des journaux systèmes, réseau et endpoints, corrélation d’événements et maintien d’une visibilité complète sur l’infrastructure via SIEM." },
                { name: "Détection & Analyse d’alertes", description: "Triage d’alertes, analyse de logs (auth, réseau, applicatif), identification d’indicateurs de compromission (IOC) et qualification des incidents." },
                { name: "Réponse aux incidents", description: "Application de playbooks SOC, containment, remédiation, documentation des incidents et escalade selon les procédures établies." },
                { name: "Threat Hunting & Règles de détection", description: "Création et adaptation de règles Sigma, recherche proactive de comportements suspects et analyse basée sur le framework MITRE ATT&CK."  },
                { name: "Outils & Environnement", description: "Wazuh (SIEM), Linux, analyse des fichiers logs (/var/log), surveillance EDR/XDR, investigation et journalisation des activités."  }
               
            ]
        },
        
        
        {
    category: "Intelligence Artificielle (IA)",
    icon: "BrainCircuit",
    color: "purple",
    items: [
        { 
            name: "Machine Learning — Apprentissage supervisé", 
            description: "Régression linéaire et logistique, KNN, SVM, arbres de décision, Random Forest, classification et prédiction à partir de données étiquetées." 
        },
        { 
            name: "Machine Learning — Apprentissage non supervisé", 
            description: "Clustering avec K-Means, réduction de dimensionnalité avec PCA, segmentation et découverte de structures cachées dans des données non étiquetées." 
        },
        { 
            name: "Deep Learning", 
            description: "Réseaux de neurones artificiels (ANN), réseaux de neurones convolutifs (CNN) pour la vision par ordinateur, architectures avancées utilisées dans la détection d’objets (YOLO)." 
        },
        { 
            name: "Prétraitement et ingénierie des données", 
            description: "Nettoyage, normalisation, feature engineering, gestion des valeurs manquantes, encodage des variables et préparation des jeux de données pour l’apprentissage." 
        },
        { 
            name: "Outils et librairies", 
            description: "Scikit-learn, Pandas, NumPy, Matplotlib, TensorFlow pour la modélisation, l’entraînement et l’évaluation des modèles d’IA." 
        }
    ]
},


        
        
        {
            category: "Bases de données & Systèmes",
            icon: "Database",
            color: "yellow",
            items: [
                { name: "MySQL & SQL Server", description: "conception et gestion de bases, manipulation de datasets." },
                { name: "Linux (Kali, Ubuntu Server)", description: "déploiement, sécurisation et administration." },
                { name: "Windows Server 19-21 / Windows 10-11", description: "administration basique et gestion des droits utilisateurs." }
            ]
        }
    ],
    projects: [
        
        {
            title: 'Pipeline CI/CD Sécurisé',
            description: 'Conception et implémentation de pipelines CI/CD robustes avec tests automatisés, analyse de sécurité et déploiement conteneurisé',
            tech: ['Jenkins', 'Docker', 'Kubernetes', 'GitLab'],
            icon: "Zap",
            gradient: 'from-emerald-500 to-teal-500',
            image: projetCICD,
            features: ['Tests automatisés', 'Analyse sécurité', 'Déploiement auto']
        },
        
        {
            title: 'Système de Détection d\'Intrusion (SDI)',
            description: 'Mise en place et configuration de Snort pour la détection proactive et la prévention d\'intrusions sur le réseau de l\'entreprise.',
            tech: ['Snort', 'Linux', 'Réseau', 'Sécurité'],
            icon: "Lightbulb",
            gradient: 'from-purple-500 to-indigo-500',
            image: projetIDS,
            features: ['Détection temps réel', 'Prévention intrusions', 'Rapports détaillés']
        },
        {
            title: 'Application Gestion Employés Django',
            description: 'Application web complète de gestion des employés développée avec Django, incluant authentification et interface administrateur.',
            tech: ['Django', 'Python', 'SQLite', 'HTML/CSS', 'JavaScript'],
            icon: "ClipboardList",
            gradient: 'from-green-500 to-emerald-500',
            image: projetDjango,
            features: ['Interface admin', 'Authentification', 'Gestion complète']
        }
    ],
    experience: [
        {
            title: 'Expert DevOps Senior - Freelance',
            period: '2025 - Présent',
            description: 'Architecture et gestion d\'infrastructures cloud complexes, déploiement CI/CD, et gouvernance de la sécurité pour divers clients.',
            icon: "Cloud"
        },
        {
            title: 'Développeur Full-Stack & Sécurité - Freelance',
            period: '2023 - 2025',
            description: 'Développement d\'applications web modernes et scalables avec un accent sur la sécurité par conception (Security by Design) pour des projets clients variés.',
            icon: "Code"
        },
        {
            title: 'Spécialiste Sécurité & Réseau',
            period: '2023 - 2025',
            description: 'Audits de sécurité, tests de pénétration et administration des pare-feu (FortiGate, pfSense).',
            icon: "Shield"
        }
    ],
    freelance: {
        available: true,
        description: "Disponible pour des missions freelance en DevOps et Développement. N'hésitez pas à me contacter pour discuter de votre projet.",
        services: [
            "Architecture et déploiement d'infrastructures cloud",
            "Mise en place de pipelines CI/CD",
            "Audits de sécurité et tests de pénétration",
            "Développement d'applications sécurisées",
            "Formation et conseil en DevOps"
        ]
    },
    contact: {
        email: "ngouyegning2001@gmail.com",
        github: "https://github.com/ndoondol",
        linkedin: "https://www.linkedin.com/in/ngouye-gning-316a812b3",
    }
};

export const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#apropos", label: "À propos" },
    { href: "#competences", label: "Compétences" },
    { href: "#certifications", label: "Certifications" },
    { href: "#projets", label: "Projets" },
    { href: "#contact", label: "Contact" },
];