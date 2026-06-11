export type NavItem = { label: string; href: string };
export type HeroSlide = {
  eyebrow: string;
  title: string;
  text: string;
  primary: string;
  primaryHref: string;
  secondary: string;
  secondaryHref: string;
  image: string;
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'Media Centre', href: '/media-centre' },
  { label: 'Contact Us', href: '/contact' },
];

export const permitLinks: NavItem[] = [
  { label: 'Fiber-ROW Permit', href: '/permits/fiber-row' },
  { label: 'Gas-ROW Permit', href: '/permits/gas-row' },
  { label: 'Power-ROW Permit', href: '/permits/power-row' },
  { label: 'Tower & Mast Permit', href: '/permits/tower-mast' },
];

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: 'Public Notice',
    title: 'Regulating Infrastructure for a Smarter Lagos',
    text: 'The one-stop shop for regulation of utility infrastructure in Lagos State, ensuring safe, efficient, and sustainable development.',
    primary: 'Start Application',
    primaryHref: 'https://s-auto.solutions',
    secondary: 'Learn More',
    secondaryHref: '/about',
    image: '/hero-lagos-bridge.svg',
  },
  {
    eyebrow: 'Office Relocation',
    title: 'Now Serving Stakeholders from Our New Ikeja Office',
    text: 'LASIMRA has relocated from 2, Yusuf Close, Agidingbi, Ikeja to 37 Emina Crescent, off Allen Avenue (by Oshopey Plaza), Ikeja for all official engagements.',
    primary: 'Contact Us',
    primaryHref: '/contact',
    secondary: 'View Address',
    secondaryHref: '/contact',
    image: '/hero-office-relocation.svg',
  },
  {
    eyebrow: 'Digital Services',
    title: 'Professional Permit Access with Better Transparency',
    text: 'Access permit information, regulatory guidance, and digital application pathways through a cleaner and more professional public experience.',
    primary: 'Explore Services',
    primaryHref: '/resources',
    secondary: 'Media Updates',
    secondaryHref: '/media-centre',
    image: '/hero-digital-services.svg',
  },
];

export const chairmanMessage = {
  heading: 'Forging a Resilient and Smart Infrastructure Future for Lagos State',
  body: [
    "It is my honor to welcome you to the Lagos State Infrastructure Maintenance and Regulatory Agency (LASIMRA), where regulation meets innovation to build the foundation for a modern megacity. As the General Manager and Chief Executive Officer, my commitment is to lead an agency dedicated to the safe, efficient, and forward-looking management of Lagos State's critical utility infrastructure.",
    'Since assuming this role, my focus has been on strengthening our internal foundation to better serve the public. I am committed to running an open-door policy, encouraging every team member to contribute effectively to our development. We will build upon the solid structures established by previous administrations, making strategic amendments where necessary to enhance our performance.',
    "Together, with the support of our dedicated staff, government partners, and the people of Lagos, we are poised to regulate, maintain, and innovate. Our goal is to ensure that Lagos State's infrastructure is not only resilient and reliable today but also intelligent and sustainable for the generations to come.",
  ],
  name: 'Prince Elegushi Oyekanmi',
  role: 'General Manager/C.E.O',
};

export const services = [
  {
    icon: '🛣️',
    title: 'Fiber-ROW Permits',
    description: 'Fiber right-of-way permits for infrastructure deployment along public roads and spaces.',
    href: '/permits/fiber-row',
  },
  {
    icon: '🔥',
    title: 'Gas-ROW Permits',
    description: 'Gas right-of-way permits for infrastructure deployment along public roads and spaces.',
    href: '/permits/gas-row',
  },
  {
    icon: '⚡',
    title: 'Power-ROW Permits',
    description: 'Power right-of-way permits for infrastructure deployment along public roads and spaces.',
    href: '/permits/power-row',
  },
  {
    icon: '📡',
    title: 'Tower & Mast',
    description: 'Approvals for mast and telecommunication tower construction and maintenance.',
    href: '/permits/tower-mast',
  },
];

export const announcements = [
  {
    day: '15',
    month: 'JAN',
    title: 'Digital Transformation Initiative',
    description: 'LASIMRA launches new online portal for streamlined permit applications.',
    action: 'Read More',
  },
  {
    day: '10',
    month: 'JAN',
    title: 'Stakeholder Engagement',
    description: 'Upcoming meeting with telecom operators to discuss new regulations.',
    action: 'Read More',
  },
  {
    day: '05',
    month: 'JAN',
    title: 'Updated Guidelines',
    description: 'New infrastructure deployment guidelines now available for download.',
    action: 'Download',
  },
];

export const quickAccess = [
  {
    icon: '📝',
    title: 'Apply Online',
    description: 'Submit your permit application through our online portal.',
    href: 'https://s-auto.solutions',
  },
  {
    icon: '📄',
    title: 'Download Forms',
    description: 'Access all required application forms and documents.',
    href: '/resources',
  },
  {
    icon: '📰',
    title: 'News & Updates',
    description: 'Latest announcements and regulatory updates.',
    href: '/media-centre',
  },
  {
    icon: '🎧',
    title: 'Support Center',
    description: 'Get help with your applications and inquiries.',
    href: '/contact',
  },
];

export const aboutContent = {
  mission:
    "To guarantee public safety through enforcement of regulation for the orderly development and maintenance of all categories of 'Utility Infrastructure' in public spaces for all stakeholders in Lagos State.",
  whoWeAre:
    "The Lagos State Infrastructure Maintenance Regulatory Agency (LASIMRA) is the one-stop shop for the regulation of Utility Infrastructure in Lagos State. Established by the Lagos state government law NO 13 of July and published in the official gazette NO 23 volume 37 of 27th August, 2004 by the then Governor Asiwaju Bola Ahmed Tinubu to ensure orderly development and maintenance of telecommunications and other utility infrastructure, LASIMRA plays a critical role in Lagos State's journey to becoming a smart city.",
  mandate:
    'Our agency operates under the mandate to provide a regulatory framework that ensures safe, efficient, and sustainable deployment of utility infrastructure while protecting public interest and promoting investment in Lagos State.',
  vision:
    "To be a model technology-driven and innovative Regulatory Agency that seeks public safety in attaining an orderly development of 'Utility Infrastructure' for all stakeholders in Lagos.",
  coreFunctions: [
    'Permit Processing - Issuance of permits for Right-of-Way, Masts, Towers, and other utility infrastructure.',
    'Compliance Monitoring - Ensuring all infrastructure deployments comply with state regulations and safety standards.',
    'Stakeholder Engagement - Facilitating collaboration between government, operators, and communities.',
    'Data Management - Maintaining a comprehensive database of all utility infrastructure in Lagos State.',
  ],
  team:
    'LASIMRA is staffed by a team of dedicated professionals including engineers, regulatory experts, urban planners, and administrative staff who work together to ensure effective regulation of utility infrastructure across Lagos State.',
  qualityPolicy: [
    'Continuous improvement of our processes and systems.',
    'Adherence to international best practices in infrastructure regulation.',
    'Transparent and accountable operations.',
    'Timely delivery of services to stakeholders.',
    'Professional development of our staff.',
  ],
  facts: [
    { label: 'Established', value: '2004' },
    { label: 'Permits Processed', value: '2,500+ Annually' },
    { label: 'Towers Regulated', value: '8,000+ Across Lagos' },
    { label: 'ROW Applications', value: '1,200+ km Annually' },
  ],
};

export const resourcesContent = {
  intro:
    'The Lagos State Infrastructure Maintenance and Regulatory Agency (LASIMRA) is a one-stop shop for the regulation of Utility Infrastructure within the geographical boundaries of Lagos State.',
  functions: [
    'Establish standards and procedures for constructing lines and laying of cables across public lands and property.',
    'Construct and co-ordinate schedules among utility service providers in Lagos State.',
    'Supervise the use, repair, resurfacing and construction of damaged roads in Lagos State.',
    'Monitor the erection of towers, masts or laying of cables within the State in the interest of public health and safety.',
    'Ensure compliance with the provisions of the Lagos State Public Right of Way Law 2018 and other relevant laws.',
    'Undertake public enlightenment and awareness campaigns on the provisions of the Lagos State Public Right of Way Law 2018 and other relevant laws.',
  ],
  powers: [
    'Issue permits for right-of-way usage.',
    'Disconnect unauthorized infrastructure.',
    'Inspect installations for regulatory compliance.',
  ],
  lawExcerpt:
    'Section 135 of the Nigerian Communications Act (NCA) gives LASIMRA the power to regulate and control the installation, laying and maintenance of any network facilities within the State.',
  docs: [
    {
      title: 'TIRS User Manual',
      description: 'Complete guide to navigating the TIRS platform for all permit types.',
      action: 'Download PDF',
    },
    {
      title: 'Training Videos',
      description: 'Step-by-step video tutorials for using the TIRS system effectively.',
      action: 'Watch Now',
    },
    {
      title: 'NCC Guidelines',
      description: 'Essential checklist for transitioning from manual to digital processes.',
      action: 'Download',
    },
  ],
};

export const mediaItems = [
  {
    title: 'Telecommunications Infrastructure Regulatory System (TIRS) to Launch in 2026',
    meta: 'Nov 3, 2025 | Starconnect Media',
    description:
      'LASIMRA announced the launch of the Telecommunication Infrastructure Regulatory System (TIRS), designed to streamline permits and enhance oversight within Lagos State.',
  },
  {
    title: 'Lagos Begins Enumeration of Telecoms Masts',
    meta: 'Oct 29, 2025 | The Guardian',
    description:
      'Lagos State will enumerate all communications masts and towers to update its infrastructure database and improve safety across the state.',
  },
];

export const contactInfo = {
  phonePrimary: '08000LASIMRA',
  phoneSecondary: '0800 527 4672',
  address: '37 Emina Crescent, off Allen Avenue (by Oshopey Plaza), Ikeja',
  emailPrimary: 'info@lasimra.gov.ng',
  emailSecondary: 'support@lasimra.gov.ng',
  officeHours: 'Monday - Friday: 8:00 AM - 5:00 PM',
};

export const fiberPermit = {
  title: 'Fiber-ROW Permit',
  intro:
    'Follow the steps below to apply for a Right-of-Way (ROW) permit for fibre optic infrastructure in Lagos State.',
  requirements: [
    'Application letter (routes, diagram, distance).',
    'List of all proposed routes.',
    'Site assessment report.',
    'Occupational Health & Safety plan.',
    'Proof of application payment.',
  ],
  fees: [
    ['Application Fee', '50,000.00'],
    ['Optic Fibre Cable', '1,500.00 per metre'],
    ['Administrative & Project Management', '15% of permit fees'],
  ],
  reinstatement: [
    ['Asphalt', '14,000.00'],
    ['Concrete', '12,000.00'],
    ['Lawn', '5,000.00'],
    ['Paving Stone', '10,000.00'],
    ['Integrity Test', 'NIL'],
  ],
  issued: [
    ['16 Jan 2024', 'MainOne Cable Co. Ltd', 'Ikosi Road, Oregun & Imam Dauda Street, Surulere', 'Fibre', '389.4'],
    ['16 Jan 2024', 'MainOne Cable Co. Ltd', 'Marina Way (Inner) Lagos to Eleganza Building.', 'Fibre', '112.4'],
    ['16 Mar 2024', 'MainOne Cable Co. Ltd', 'Alade Avenue off Obafemi Awolowo Way, Ikeja; Kudirat Abiola Way, Ikeja; Sanusi Fafunwa, Victoria Island', 'Fibre', '295.5'],
    ['6 Mar 2024', 'MainOne Cable Co. Ltd', 'Ahmadu Bello Way, Eko Atlantic City Gate 1 and 2.', 'Fibre', '61.9'],
  ],
};

export const gasPermit = {
  title: 'Gas-ROW Permit',
  intro: 'Follow the steps below to apply for a Right-of-Way (ROW) permit for gas infrastructure in Lagos State.',
  requirements: [
    'Application letter to include proposed routes, routes diagram, and distance to be covered. Letter must be addressed to the General Manager, Lagos State Infrastructure Maintenance & Regulatory Agency.',
    'List of all proposed routes.',
    'Site assessment report.',
    'Occupational Health & Safety plan.',
    'Proof of application payment.',
  ],
  fees: [
    ['Application Fee', '50,000.00'],
    ['Optic Fibre Cable', '15,000.00 per metre'],
    ['Administrative & Project Management', '15% of permit fees'],
  ],
  reinstatement: [
    ['Asphalt', '14,000.00'],
    ['Concrete', '12,000.00'],
    ['Lawn', '5,000.00'],
    ['Paving Stone', '10,000.00'],
    ['Integrity Test', 'NIL'],
  ],
  issued: [
    ['2 Oct 2024', 'GASLINK', 'Micheal Oluwole Cole Street, Olowora/Micheal Odutola, Ibadan Expressway/Red BRT Park, Expressway Isheri/Ogunusiroad Isheri Ojodu/ Ibadan Expressway, Beside ENYO Filling Station, Ogun State', 'Gas', '2,279.40'],
    ['6 Nov 2024', 'GASLINK', 'Lagos High Court by Old Secretariat, Oba Akinjobi Way, Oba Aladejobi Street, Ikeja Lagos.', 'Gas', '704'],
    ['12 Nov 2024', 'GASLINK', 'Alhaji Wasiu Ogunlana Road, Ago Palace Way, Amuwo Odofin.', 'Gas', '780.1'],
  ],
};

export const powerPermit = {
  title: 'Power-ROW Permit',
  intro: 'Follow the steps below to apply for a Right-of-Way (ROW) permit for power infrastructure in Lagos State.',
  requirements: [
    'Application letter to include proposed routes, routes diagram, and distance to be covered. Letter must be addressed to the General Manager, Lagos State Infrastructure Maintenance & Regulatory Agency.',
    'List of all proposed routes.',
    'Site assessment report.',
    'Occupational Health & Safety plan.',
    'Proof of application payment.',
  ],
  fees: [
    ['Application Fee', '50,000.00'],
    ['Optic Fibre Cable', '5,800.00 per metre'],
    ['Administrative & Project Management', '15% of permit fees'],
  ],
  reinstatement: [
    ['Asphalt', '14,000.00'],
    ['Concrete', '12,000.00'],
    ['Lawn', '5,000.00'],
    ['Paving Stone', '10,000.00'],
    ['Integrity Test', 'NIL'],
  ],
  issued: [
    ['7 May 2024', 'The Federal Ministry of Transportation', 'Akangba TCN Substation to Adelabu Street, Surulere to Orile Iganmu (Under Bridge Railway Track)', 'Power', '3,529.30'],
    ['3 Jun 2024', 'MALLEABLE', 'Marina Way (Inner) Lagos to Eleganza Building.', 'Power', '56'],
    ['10 Oct 2024', 'CAXTEN ENGINEERING LIMITED', 'No 16 Norman Williams, Off Keffi Road Awolowo Road, Ikoyi, Lagos.', 'Power', '196.1'],
    ['27 Nov 2024', 'VIATHAN ENGINEERING LIMITED', 'Freedom Way and Admiralty Way corridor, Lekki Phase 1.', 'Power', '6,129.70'],
  ],
};

export const towerPermit = {
  title: 'Tower & Mast Permit',
  intro: 'Follow the steps below to apply for a permit for tower and mast infrastructure in Lagos State.',
  requirements: [
    'Application letter to include site type, proposed site addresses, site coordinates (Long & Lat), site layout sketched drawing with dimension and NCC approved clearance from existing buildings, tower heights and antenna heights & azimuths. Letter must be addressed to the General Manager, Lagos State Infrastructure Maintenance & Regulatory Agency.',
    "Site analysis reports (soil test) to be provided by LASIMRA's consultants.",
    'Detailed structural drawings of mast members and site location.',
    'Site assessment report showing electrical layout, earthing layout, and proposed project implementation plan. Drawing must be certified by a COREN Engineer.',
    'Letter of consent from the lessor (landlord), immediate neighbour and community (CDA) approving the construction of the mast or tower.',
    'Receipt of payment for building permit.',
    'Receipt of application fee.',
    "Evidence of subcontractor's registration with LASIMRA.",
    'Evidence of personal protective equipment (safety signs, warning tapes and PPE for onsite inspection).',
  ],
  fees: [
    ['Application Fee', '50,000.00'],
    ['1-50m', '1,500,000.00'],
    ['50m-70m', '2,115,000.00'],
    ['Above 70m', '8,823,500.00'],
    ['Rooftop', '2,115,000.00'],
    ['Site Assessment Report (SAR)', '1,233,750.00 / Site'],
    ['Administrative & Project Management', '15% of permit fees'],
  ],
  reinstatement: [
    ['Site Assessment', '1,233,750.00 / Site'],
    ['Integrity Test', 'NIL'],
  ],
};
