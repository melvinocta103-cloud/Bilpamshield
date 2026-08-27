import type { Service, SecurityTip } from './types';

export const SERVICES: Service[] = [
  {
    slug: 'armed-unarmed-security-guards',
    title: 'Armed & Unarmed Security Guards',
    shortDescription:
      'Professional and highly trained guards protecting people, property and assets.',
    problem:
      'Unauthorised access, theft, vandalism and safety incidents threaten your premises, staff and operations. Without a visible, professional security presence, your property and people are exposed to risk.',
    benefits: [
      'Visible deterrent against criminal activity',
      'Trained personnel prepared for emergency response',
      'Professional conduct and client-focused service',
      'Flexible deployment for short-term or long-term assignments',
      'Tailored guarding strategies for your specific site',
    ],
    useCases: [
      'Corporate offices and commercial buildings',
      'Residential compounds and gated communities',
      'Retail outlets and supermarkets',
      'Construction sites and industrial facilities',
      'Events, conferences and public gatherings',
      'NGO and humanitarian organisation premises',
    ],
    howItWorks: [
      'Initial site assessment to identify security requirements',
      'Deployment of trained guards matched to your risk profile',
      'Regular patrols, access control and incident reporting',
      'Ongoing supervision and communication with your team',
    ],
    clientProvides: [
      'Site details and layout information',
      'Operating hours and access requirements',
      'Specific concerns or known risks',
    ],
    considerations:
      'Guarding assignments are tailored to each site. Armed guard deployment is subject to applicable legal authorisation and operational assessment.',
    disclaimer:
      'Armed security services are subject to relevant South Sudanese regulatory requirements. Bilpam Shield Security confirms operational authorisation before deployment.',
    icon: 'ShieldCheck',
    image:
      'https://images.pexels.com/photos/35562107/pexels-photo-35562107.png?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'vip-executive-protection',
    title: 'VIP & Executive Protection',
    shortDescription:
      'Close protection for VIPs, executives and high-profile individuals.',
    problem:
      'High-profile individuals face elevated personal security risks including unwanted attention, targeted threats and unpredictable situations. Standard security measures are insufficient for those in the public eye.',
    benefits: [
      'Discreet, professional close protection officers',
      'Risk-based protective planning for every engagement',
      'Secure movement coordination and route planning',
      'Confidentiality and privacy maintained at all times',
      'Adaptable protection for domestic and travel scenarios',
    ],
    useCases: [
      'Corporate executives and business leaders',
      'Government officials and dignitaries',
      'Visiting international delegations',
      'High-net-worth individuals and families',
      'Celebrities and public figures',
      'Journalists and media personnel in high-risk areas',
    ],
    howItWorks: [
      'Confidential consultation to assess threat level and requirements',
      'Protective plan developed including movement and contingency protocols',
      'Dedicated close protection officers assigned',
      'Continuous coordination throughout the engagement',
    ],
    clientProvides: [
      'Itinerary and schedule information',
      'Known threats or concerns',
      'Preferred level of visibility (overt or discreet)',
    ],
    considerations:
      'All VIP protection engagements are conducted with strict confidentiality. Operational details are discussed through secure communication channels only.',
    icon: 'UserCheck',
    image:
      'https://images.pexels.com/photos/8425354/pexels-photo-8425354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'armoured-vehicle-services',
    title: 'Armoured Vehicle Services',
    shortDescription:
      'Safe and reliable armoured vehicles for high-risk environments.',
    problem:
      'In high-risk environments, standard vehicles offer insufficient protection against potential threats during transit. Personnel and valuable assets require armoured protection to move safely.',
    benefits: [
      'Armoured vehicles designed for high-risk transit',
      'Experienced security drivers trained for threat scenarios',
      'Route assessment and movement planning',
      'Protection for personnel and high-value assets',
      'Suitable for challenging operational environments',
    ],
    useCases: [
      'Transporting personnel through high-risk areas',
      'Secure movement of dignitaries and executives',
      'High-value asset relocation',
      'NGO staff transfers in volatile regions',
      'Emergency evacuation support',
    ],
    howItWorks: [
      'Risk assessment of routes and transit requirements',
      'Selection of appropriate armoured vehicle for the mission',
      'Security driver and escort team assigned',
      'Real-time coordination during transit',
    ],
    clientProvides: [
      'Pickup and destination details',
      'Number of passengers or nature of cargo',
      'Timeframe and any scheduling constraints',
    ],
    considerations:
      'Armoured vehicle availability and specifications should be discussed during consultation to match your operational needs.',
    icon: 'Truck',
    image:
      'https://images.pexels.com/photos/33203858/pexels-photo-33203858.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'secure-transportation',
    title: 'Secure Transportation',
    shortDescription:
      'Secure and discreet transportation of people and valuable assets.',
    problem:
      'Moving people and valuable assets safely requires more than just a vehicle — it demands professional planning, trained drivers and security awareness throughout the journey.',
    benefits: [
      'Professional security drivers',
      'Discreet and reliable transport service',
      'Pre-planned routes with risk awareness',
      'Secure handling of valuable cargo',
      'Coordination with your schedule and requirements',
    ],
    useCases: [
      'Airport transfers for VIPs and executives',
      'Secure transport of valuable goods and equipment',
      'Daily transport for personnel in sensitive roles',
      'Banking and financial asset movement',
      'Logistics support for organisations',
    ],
    howItWorks: [
      'Consultation to understand transport requirements',
      'Route planning with security considerations',
      'Trained security driver assigned',
      'Secure execution with ongoing communication',
    ],
    clientProvides: [
      'Transport schedule and locations',
      'Nature of passengers or cargo',
      'Any specific security concerns',
    ],
    considerations:
      'For particularly sensitive transport requirements, please discuss operational details through a secure communication channel rather than this website.',
    icon: 'Car',
    image:
      'https://images.pexels.com/photos/8425052/pexels-photo-8425052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'parcel-cargo-security',
    title: 'Parcel & Cargo Security',
    shortDescription:
      'Safe handling and secure delivery of parcels and cargo.',
    problem:
      'Parcels and cargo in transit are vulnerable to theft, tampering and loss. Without professional security handling, valuable or sensitive shipments may not reach their destination safely.',
    benefits: [
      'Secure handling from pickup to delivery',
      'Chain-of-custody documentation',
      'Trained personnel for valuable cargo',
      'Tamper-evident procedures',
      'Real-time coordination during transit',
    ],
    useCases: [
      'High-value goods and equipment transport',
      'Sensitive documents and materials',
      'Inter-organisational cargo transfers',
      'Humanitarian supply chain security',
      'Commercial parcel delivery in high-risk areas',
    ],
    howItWorks: [
      'Assessment of cargo type and security requirements',
      'Secure packaging and handling protocols applied',
      'Trained security personnel manage transit',
      'Delivery confirmation and chain-of-custody completed',
    ],
    clientProvides: [
      'Description of cargo and value category',
      'Pickup and delivery locations',
      'Timeframe and any handling requirements',
    ],
    considerations:
      'For extremely sensitive or high-value cargo, operational details should be communicated through secure channels rather than public forms.',
    icon: 'Package',
    image:
      'https://images.pexels.com/photos/36228061/pexels-photo-36228061.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'security-consultancy-risk-assessment',
    title: 'Security Consultancy & Risk Assessment',
    shortDescription:
      'Security advice, risk assessment and tailored security solutions.',
    problem:
      'Organisations often operate without a clear understanding of their security vulnerabilities. Without professional risk assessment, security investments may be misdirected or insufficient.',
    benefits: [
      'Comprehensive security risk assessment',
      'Tailored security recommendations',
      'Expert guidance on security strategy',
      'Identification of vulnerabilities before they are exploited',
      'Practical, actionable security plans',
    ],
    useCases: [
      'New facility or office setup security planning',
      'Organisational security policy development',
      'Pre-deployment risk assessment for NGO operations',
      'Security audit for existing operations',
      'Event security planning',
      'Crisis management and emergency response planning',
    ],
    howItWorks: [
      'Initial consultation to understand your organisation and concerns',
      'On-site or remote risk assessment conducted',
      'Detailed report with findings and recommendations provided',
      'Ongoing advisory support as required',
    ],
    clientProvides: [
      'Overview of organisation and operations',
      'Locations or facilities to be assessed',
      'Known concerns or previous incidents',
    ],
    considerations:
      'Detailed operational security information should be shared through secure communication channels during the consultation process, not through this website form.',
    icon: 'ClipboardCheck',
    image:
      'https://images.pexels.com/photos/20752572/pexels-photo-20752572.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const SECURITY_TIPS: SecurityTip[] = [
  {
    id: 'verify-before-you-trust',
    title: 'Verify Before You Trust',
    summary:
      'Verify the identity of visitors, contractors and service providers before granting access.',
    details:
      'Always confirm the identity of anyone requesting entry to your premises. Request identification, verify with their stated organisation, and maintain a visitor log. This simple practice prevents unauthorised access and potential security breaches.',
    icon: 'BadgeCheck',
  },
  {
    id: 'secure-all-entrances',
    title: 'Secure All Entrances',
    summary:
      'Ensure doors, gates and windows are locked when not in use.',
    details:
      'Physical security starts with controlling access points. Regularly inspect all doors, gates, windows and perimeter fencing. Ensure locks function properly and that access points are secured when not actively in use or monitored.',
    icon: 'Lock',
  },
  {
    id: 'monitor-your-surroundings',
    title: 'Monitor Your Surroundings',
    summary:
      'Use CCTV and regular patrols to monitor property and detect unusual activity.',
    details:
      'Active monitoring through CCTV systems and regular physical patrols helps deter criminal activity and enables rapid response to incidents. Ensure cameras cover key areas and that footage is reviewed regularly.',
    icon: 'Cctv',
  },
  {
    id: 'train-your-people',
    title: 'Train Your People',
    summary:
      'Security awareness and training can help prevent risks and emergencies.',
    details:
      'Your staff and household members are your first line of defence. Provide regular security awareness training covering access control, emergency procedures, suspicious activity recognition and reporting protocols.',
    icon: 'GraduationCap',
  },
  {
    id: 'have-an-emergency-plan',
    title: 'Have an Emergency Plan',
    summary:
      'Prepare, communicate and practise emergency-response procedures.',
    details:
      'Develop clear emergency response plans for scenarios such as intrusion, fire, medical emergencies and evacuation. Ensure all personnel know their roles, and conduct regular drills to build muscle memory.',
    icon: 'Siren',
  },
  {
    id: 'report-suspicious-activity',
    title: 'Report Suspicious Activity',
    summary:
      'Report suspicious activity immediately to security personnel.',
    details:
      'If you observe unusual behaviour, unrecognised individuals loitering, or anything that feels wrong, report it immediately to your security team or local authorities. Early reporting prevents incidents from escalating.',
    icon: 'Eye',
  },
];

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title);
