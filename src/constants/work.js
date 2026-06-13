// Company-owned work-system groups keep experience data explicit and easy to extend.
// Add a new exported array here when another role needs its own system cards.
export const BIZORA_WORK_SYSTEMS = [
  {
    slug: 'canvas',
    type: 'Product Feature',
    title: 'AI Writing Canvas for Tax Workflows',
    feature: 'Editable AI document workspace',
    description:
      'Built an AI-powered document editing experience where tax professionals can generate, review, rewrite, and refine client emails and tax memos without leaving the workflow.',
    highlights: [
      'Tax memo generation',
      'Client email drafting',
      'Inline AI edits',
      'Full document rewrites',
      'Version-aware editing',
    ],
    showRedirectButton: false,
  },
  {
    slug: 'decision-tree',
    type: 'Product Feature',
    title: 'Tax Decision Tree',
    feature: 'Visual decision support for complex tax logic',
    description:
      'Built a decision-tree experience that converts complex tax answers into clear visual flowcharts, helping professionals understand branching logic, risks, outcomes, and next actions faster.',
    highlights: [
      'Mermaid flowcharts',
      'Branching tax logic',
      'Fullscreen review',
      'PNG export',
      'Decision clarity',
    ],
    showRedirectButton: false,
  },
  {
    slug: 'vault-file-management',
    type: 'Product Feature',
    title: 'Document Vault Workspace',
    feature: 'Project-based file management experience',
    description:
      'Built a secure Vault workspace for managing project documents, folders, queries, downloads, renames, deletes, and structured document workflows inside a professional tax product.',
    highlights: [
      'Project file manager',
      'Folder workflows',
      'Rename and delete flows',
      'Document queries',
      'RTK Query state management',
    ],
    showRedirectButton: false,
  },
  // {
  //   slug: 'file-upload-management',
  //   type: 'Product Feature',
  //   title: 'Real-Time File Upload Manager',
  //   feature: 'Reliable upload lifecycle UX',
  //   description:
  //     'Built a centralized upload experience that handles validation, presigned uploads, WebSocket processing feedback, timeout handling, cache invalidation, and failure states across assistant and Vault workflows.',
  //   highlights: [
  //     'Client-side validation',
  //     'Presigned uploads',
  //     'WebSocket status updates',
  //     'Timeout handling',
  //     'Shared upload pipeline',
  //   ],
  //   showRedirectButton: false,
  // },
  {
    slug: 'notifications',
    type: 'Backend Microservice',
    title: 'Tax News Email Notification Service',
    feature: 'Event-driven email notification platform',
    description:
      'Built a serverless notification microservice that listens to news events, stores pending workflow state, creates digest emails, filters recipients by preferences, and delivers messages through a decoupled SES email pipeline.',
    highlights: [
      'DynamoDB Streams',
      'SNS event fanout',
      'SQS delivery queue',
      'Amazon SES',
      'Preferences and unsubscribe flow',
    ],
    showRedirectButton: false,
  },
  {
    slug: 'third-party-integrations',
    type: 'Backend Microservice',
    title: 'Third-Party Integration Service',
    feature: 'Secure OAuth and provider integration layer',
    description:
      'Built a dedicated serverless integration service to isolate OAuth complexity, manage token lifecycles, and connect external providers like Xero, QuickBooks, and Google Drive without coupling them to the core app.',
    highlights: [
      'OAuth lifecycle',
      'Token refresh and revoke',
      'Provider isolation',
      'Secrets management',
      'Terraform infrastructure',
    ],
    showRedirectButton: false,
  },
  {
    slug: 'news',
    type: 'Backend Pipeline',
    title: 'Tax News Feed Pipeline',
    feature: 'AI-assisted external data and news generation workflow',
    description:
      'Built a serverless news pipeline that turns indexed tax source updates into structured news articles, generated thumbnails, stored feed assets, and read-only APIs for the frontend experience.',
    highlights: [
      'Source discovery',
      'Queue-driven generation',
      'Article generation',
      'Thumbnail workflow',
      'Read-only news API',
    ],
    showRedirectButton: false,
  },
];

// Detail routes search across every work-system group. Keep this list updated when
// adding another company-specific collection, such as EKCEL_WORK_SYSTEMS.
export const ALL_WORK_SYSTEMS = [
  ...BIZORA_WORK_SYSTEMS,
]
