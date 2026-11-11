// Structured CV content for Leon Jansen
const CV = {
  contact: {
    city: "Munich, DE",
    phone: "+49 15775770581",
    email: "jansen.leon@outlook.com",
  },

  stats: [
    { value: "7+", label: "Clients worked with" },
    { value: "4", label: "Countries engaged" },
    { value: "100+", label: "Students mentored" },
  ],

  experience: [
    {
      company: "BearingPoint GmbH",
      domain: "bearingpoint.com",
      color: "#E4002B",
      role: "Business Consultant",
      unit: "Automotive, Manufacturing & Defense Practice",
      period: "03/2025 – Today",
      location: "Munich",
      tags: ["Automotive", "After-Sales", "AI Adoption", "PMO"],
      bullets: [
        "Advised and optimized the market rollout of existing service formats (e.g., subscription-based service offerings) for a leading German OEM in the automotive industry",
        "Advised the same client on after-sales strategy, defining new service formats to maximize revenue potential across the existing ICE fleet",
        "Conducted competitive and benchmark analyses on mobile service concepts for BEV vehicles",
        "Developed a 250+ slide curriculum on automotive industry fundamentals, translating complex industry dynamics into structured and accessible learning content",
        "Conceptualized and built a project-wide Excel dashboard, enabling 50+ end users to track real-time project status and KPIs",
        "Positioned as AI ambassador, delivering trainings on Microsoft Copilot and GenAI adoption",
        "Managed a PMO workstream for a large-scale project, coordinating project controlling, steering committee preparation, and senior stakeholder facilitation",
        "Contributed to multiple AI proposals, with a focus on scaling AI adoption across the organization",
        "Facilitated a client workshop for an MDAX defense company to identify optimization levers for intra-logistics material flows and warehouse operations",
      ],
    },
    {
      company: "OMMAX GmbH",
      domain: "ommax.com",
      logo: "assets/ommax.svg",
      color: "#01032F",
      role: "Intern & Working Student",
      unit: "Strategy & Execution",
      period: "04/2024 – 03/2025",
      location: "Munich, DE",
      tags: ["KPI Reporting", "B2B Outreach", "Commercial DD"],
      bullets: [
        "Managed a weekly client KPI reporting for a large Chinese OEM on aspects like model-based sales performance and lead funnel status to provide sound recommendations for further action",
        "Directed a client project for the same client consisting of a B2B outreach with weekly milestone reporting to drive fleet business, leading to 15+ new fleet leads",
        "Close collaboration with the department vice president on business development topics",
        "Commercial DD for a client in the cosmetics sector: holistic market and trend analysis for a digital strategy plus a workshop with monetization recommendations",
      ],
    },
    {
      company: "Mercedes-Benz Consulting GmbH",
      domain: "mercedes-benz.com",
      color: "#222222",
      role: "Intern & Working Student",
      unit: "E-Commerce",
      period: "06/2022 – 03/2024",
      location: "Stuttgart, DE",
      tags: ["E-Commerce", "C-Level Documents", "Data@Cloud"],
      bullets: [
        "Sparring partner of the e-commerce manager, including preparation of C-level documents and creation and facilitation of impulse presentations and workshops on new business generation",
        "Contributed to 10+ Data@Cloud projects for international clients, covering technical and legal analysis with milestone monitoring and handover to top-level management",
      ],
    },
    {
      company: "Porsche AG",
      domain: "porsche.com",
      color: "#B12B28",
      role: "Intern & Working Student",
      unit: "International Sales",
      period: "08/2020 – 08/2021",
      location: "Stuttgart, DE",
      tags: ["Sales Steering", "Market Analysis", "Reporting"],
      bullets: [
        "Created 5+ market overviews addressing vehicle taxation conditions (e.g., impact of CO2 tax on vehicle price), serving as a C-level decision-making document",
        "Right hand to the sales director: sales steering activities, preparation of C-level documents, responsibility for sales and after-sales reporting, competitor analyses",
      ],
    },
  ],

  education: [
    {
      school: "University of Hohenheim",
      domain: "uni-hohenheim.de",
      color: "#00305E",
      degree: "Master of Science, Management",
      gpa: "1.8",
      period: "10/2022 – 11/2024",
      location: "Stuttgart, DE",
    },
    {
      school: "IQS School of Management",
      domain: "iqs.edu",
      color: "#8B1E3F",
      degree: "Double Degree, Digital Management",
      gpa: "1.3",
      period: "09/2021 – 06/2022",
      location: "Barcelona, ES",
    },
    {
      school: "Pforzheim University",
      domain: "hs-pforzheim.de",
      color: "#E2001A",
      degree: "Bachelor of Science, International Business",
      gpa: "1.6",
      period: "10/2018 – 09/2021",
      location: "Pforzheim, DE",
    },
    {
      school: "Friedrich-List Business Highschool",
      domain: null,
      initials: "FL",
      color: "#4A6FA5",
      degree: "German Abitur",
      gpa: "1.6",
      period: "07/2015 – 07/2018",
      location: "Karlsruhe, DE",
    },
  ],

  skills: [
    {
      title: "Technical Know-How",
      items: ["MS Office (Advanced)", "MS Copilot Suite", "LLMs (Claude, GPT, …)", "think-cell", "Power BI", "Salesforce", "Mural", "Confluence", "Jira"],
    },
    {
      title: "Certificates",
      items: ["Professional Scrum Master I (PSM I)", "SAP IEE2E", "think-cell Certified Professional"],
    },
    {
      title: "Languages",
      items: ["German – native", "English – C1", "Spanish – B2"],
      levels: [100, 85, 65],
    },
  ],

  commitment: [
    {
      title: "CSR Initiative with 42 schools",
      domain: "42.fr",
      logo: "assets/42.svg",
      period: "11/2025 – Present",
      text: "Organized and facilitated on-site hackathons and mentoring programs in London, Berlin, Lisbon and Vienna for 100+ tech students together with 42, a non-profit IT school network.",
    },
    {
      title: "IQS School of Management – Student Spokesperson",
      domain: "iqs.edu",
      period: "09/2021 – 06/2022",
      text: "Sparring partner for both students and professors in case of dissatisfaction.",
    },
  ],

  // Map locations; type: work | education | commitment
  locations: [
    { name: "BearingPoint", city: "Munich", type: "work", lat: 48.1405, lng: 11.5600, period: "03/2025 – Today", domain: "bearingpoint.com" },
    { name: "OMMAX", city: "Munich", type: "work", lat: 48.1300, lng: 11.5850, period: "04/2024 – 03/2025", domain: "ommax.com", logo: "assets/ommax.svg" },
    { name: "Mercedes-Benz Consulting", city: "Stuttgart", type: "work", lat: 48.7840, lng: 9.2280, period: "06/2022 – 03/2024", domain: "mercedes-benz.com" },
    { name: "Porsche AG", city: "Stuttgart-Zuffenhausen", type: "work", lat: 48.8350, lng: 9.1520, period: "08/2020 – 08/2021", domain: "porsche.com" },
    { name: "University of Hohenheim", city: "Stuttgart", type: "education", lat: 48.7116, lng: 9.2132, period: "10/2022 – 11/2024", domain: "uni-hohenheim.de" },
    { name: "IQS School of Management", city: "Barcelona", type: "education", lat: 41.3985, lng: 2.1340, period: "09/2021 – 06/2022", domain: "iqs.edu" },
    { name: "Pforzheim University", city: "Pforzheim", type: "education", lat: 48.8790, lng: 8.7180, period: "10/2018 – 09/2021", domain: "hs-pforzheim.de" },
    { name: "Friedrich-List Business Highschool", city: "Karlsruhe", type: "education", lat: 49.0069, lng: 8.4037, period: "07/2015 – 07/2018", domain: null },
    { name: "42 Hackathon & Mentoring", city: "London", type: "commitment", lat: 51.5072, lng: -0.1276, period: "since 11/2025", domain: "42.fr", logo: "assets/42.svg" },
    { name: "42 Hackathon & Mentoring", city: "Berlin", type: "commitment", lat: 52.5200, lng: 13.4050, period: "since 11/2025", domain: "42.fr", logo: "assets/42.svg" },
    { name: "42 Hackathon & Mentoring", city: "Lisbon", type: "commitment", lat: 38.7223, lng: -9.1393, period: "since 11/2025", domain: "42.fr", logo: "assets/42.svg" },
    { name: "42 Hackathon & Mentoring", city: "Vienna", type: "commitment", lat: 48.2082, lng: 16.3738, period: "since 11/2025", domain: "42.fr", logo: "assets/42.svg" },
  ],
};
