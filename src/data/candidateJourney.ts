export interface ApplicationStage {
  id: string;
  name: string;
  description: string;
  order: number;
  duration: string;
  actions: string[];
  nextSteps: string[];
}

export interface CandidateApplication {
  id: string;
  candidateId: string;
  jobId: string;
  currentStage: string;
  applicationDate: string;
  lastUpdated: string;
  status: 'active' | 'on-hold' | 'rejected' | 'hired' | 'withdrawn';
  notes: string[];
  documents: {
    cv: string;
    coverLetter?: string;
    portfolio?: string;
    references?: string[];
  };
  interviews: {
    date: string;
    type: 'phone' | 'video' | 'onsite' | 'technical';
    interviewer: string;
    feedback: string;
    score: number;
  }[];
}

export const applicationStages: ApplicationStage[] = [
  {
    id: "application-received",
    name: "Application Received",
    description: "Initial application submitted and acknowledged",
    order: 1,
    duration: "1 business day",
    actions: [
      "Send confirmation email to candidate",
      "Initial CV screening against role requirements",
      "Add to candidate database",
      "Schedule initial review"
    ],
    nextSteps: [
      "CV will be reviewed within 24 hours",
      "You'll receive an update on next steps",
      "Check spam folder for communications"
    ]
  },
  {
    id: "initial-screening",
    name: "Initial Screening",
    description: "CV and background review by recruitment team",
    order: 2,
    duration: "2-3 business days",
    actions: [
      "Detailed CV analysis against role criteria",
      "Background and experience verification",
      "Initial cultural fit assessment",
      "Reference to hiring manager if suitable"
    ],
    nextSteps: [
      "Successful candidates invited to phone screen",
      "Feedback provided to all candidates",
      "Next interview scheduled within 5 business days"
    ]
  },
  {
    id: "phone-screen",
    name: "Phone/Video Screen",
    description: "30-minute conversation with Katapult recruiter",
    order: 3,
    duration: "30 minutes",
    actions: [
      "Discuss career background and motivations",
      "Understand salary and location expectations",
      "Explain role and company in detail",
      "Assess communication skills and cultural fit"
    ],
    nextSteps: [
      "Successful candidates progress to client interview",
      "Detailed prep materials provided",
      "Interview scheduled within 1 week"
    ]
  },
  {
    id: "client-interview-1",
    name: "First Client Interview",
    description: "Initial interview with hiring manager",
    order: 4,
    duration: "45-60 minutes",
    actions: [
      "Meet with direct hiring manager",
      "Discuss role requirements and expectations",
      "Assess technical competency and experience",
      "Cultural fit evaluation with team"
    ],
    nextSteps: [
      "Feedback session with Katapult within 24 hours",
      "Second interview scheduled if successful",
      "Reference checks may be initiated"
    ]
  },
  {
    id: "client-interview-2",
    name: "Final Client Interview",
    description: "Final interview with senior stakeholders",
    order: 5,
    duration: "60-90 minutes",
    actions: [
      "Present to senior leadership team",
      "Deep dive into relevant experience",
      "Strategic thinking assessment",
      "Final cultural alignment check"
    ],
    nextSteps: [
      "Decision made within 48 hours",
      "Reference checks completed",
      "Offer preparation if successful"
    ]
  },
  {
    id: "reference-checks",
    name: "Reference Verification",
    description: "Professional reference validation",
    order: 6,
    duration: "2-3 business days",
    actions: [
      "Contact provided professional references",
      "Verify employment history and achievements",
      "Assess working style and team fit",
      "Confirm role-specific competencies"
    ],
    nextSteps: [
      "References completed before offer",
      "Any concerns discussed with candidate",
      "Final approval for offer preparation"
    ]
  },
  {
    id: "offer-stage",
    name: "Offer Preparation",
    description: "Offer package creation and negotiation",
    order: 7,
    duration: "1-2 business days",
    actions: [
      "Salary and package negotiation",
      "Contract terms finalization",
      "Start date coordination",
      "Onboarding preparation"
    ],
    nextSteps: [
      "Formal offer presented",
      "Negotiation support provided",
      "Contract signing facilitated"
    ]
  },
  {
    id: "hired",
    name: "Successfully Hired",
    description: "Offer accepted and onboarding initiated",
    order: 8,
    duration: "Ongoing",
    actions: [
      "Contract signed and filed",
      "Onboarding schedule created",
      "First day preparation",
      "90-day check-in scheduled"
    ],
    nextSteps: [
      "Welcome to your new role!",
      "Onboarding support available",
      "Regular check-ins during probation period"
    ]
  }
];

export const communicationTemplates = {
  applicationReceived: {
    subject: "Application Received - {jobTitle} at {company}",
    message: `Dear {candidateName},

Thank you for your interest in the {jobTitle} position at {company}. We have received your application and will review it within the next 24 hours.

At Katapult, we follow our "Score in Four" methodology, which means we carefully select only the most qualified candidates to present to our clients. This ensures a higher success rate and better experience for everyone involved.

What happens next:
- Your application will be reviewed within 1 business day
- We'll provide feedback regardless of the outcome
- Successful candidates typically progress through 3-4 stages maximum

We appreciate your patience and will be in touch soon.

Best regards,
The Katapult Team

P.S. Questions? Reply to this email or WhatsApp us at +31 6 12345678`
  },
  
  phoneScreenInvite: {
    subject: "Next Step: Phone Screen for {jobTitle}",
    message: `Dear {candidateName},

Great news! Your application for {jobTitle} at {company} has progressed to the next stage.

We'd like to schedule a 30-minute phone/video conversation to discuss:
- Your background and career goals
- The role and company in detail  
- Salary expectations and logistics
- Answer any questions you have

Please use this link to book a convenient time: {schedulingLink}

Looking forward to speaking with you soon!

Best regards,
{recruiterName}`
  },
  
  clientInterviewPrep: {
    subject: "Interview Preparation - {jobTitle} at {company}",
    message: `Dear {candidateName},

Congratulations! {company} would like to meet with you for the {jobTitle} position.

Interview Details:
- Date: {interviewDate}
- Time: {interviewTime}
- Duration: {duration}
- Interviewer(s): {interviewers}
- Format: {format}

Preparation Materials:
- Company overview and recent news
- Role-specific questions and frameworks
- Technical competencies to highlight
- Cultural values alignment

I'll call you 1 hour before the interview for final preparation and to answer any questions.

You've got this!

Best regards,
{recruiterName}`
  }
};

export const candidateExperience = {
  responseTime: "24 hours maximum",
  feedbackGuarantee: "Feedback provided to all candidates",
  interviewLimit: "Maximum 4 interviews per role",
  supportLevel: "White-glove candidate experience",
  communicationChannels: ["Email", "Phone", "WhatsApp", "Video Call"],
  preparationSupport: [
    "Company research materials",
    "Interview question frameworks", 
    "Salary negotiation guidance",
    "Reference preparation tips",
    "Onboarding support"
  ]
};
