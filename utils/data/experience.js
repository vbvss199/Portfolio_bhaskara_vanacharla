export const experiences = [
  {
    id: 1,
    title: 'Software Engineer',
    company: "General Neuro",
    duration: "(Jan 2025 - Present)",
    tools: ['Spring Boot', 'Angular', 'AWS ECS', 'Redis', 'Elasticsearch', 'PostgreSQL', 'MySQL', 'OAuth 2.0', 'JWT', 'GitHub Actions'],
    image: '/png/GeneralNeuro.png',
    description: 'Designed a microservices platform on AWS ECS using Spring Boot and Angular, adding lazy loading and server-side rendering to cut initial page load time by 20% while sustaining 99.9% uptime under 50,000+ daily transactions. Built a distributed session layer with AWS ElastiCache (Redis) and ALB sticky-session routing, eliminating 95% of session-loss incidents and enabling 3x horizontal scaling during peak traffic. Rebuilt the Elasticsearch indexing pipeline with custom relevancy scoring and faceted filtering, reducing search latency by 40% and lifting search-to-purchase conversion by 18%. Optimized PostgreSQL/MySQL schemas via composite indexing and materialized views, cutting average query time by 40% and achieving sub-100ms inventory reads. Enforced zero-trust API security with OAuth 2.0, JWT middleware, and RBAC across 15+ endpoints, and built GitHub Actions CI/CD pipelines with automated test gates and blue-green deployments, shrinking release cycles from 2 weeks to 3 days.'
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: "Prozech Solutions",
    duration: "(Apr 2024 - Dec 2024)",
    tools: ['React.js', 'TypeScript', 'Redux', 'Node.js', 'Spring Boot', 'Stripe', 'ShipBob', 'Jest', 'Cypress'],
    image: '/png/placeholder.png',
    description: 'Developed five React.js/TypeScript SPAs with Redux state normalization and memoization, cutting re-render frequency by 25% and improving Core Web Vitals LCP by 30%. Built a Node.js/Spring Boot API gateway with centralized JWT auth and rate limiting, accelerating feature delivery by 30% across three product teams. Integrated Stripe and ShipBob into a transactional checkout pipeline with idempotency keys and retry logic, reducing order processing errors by 22%. Wrote 200+ Jest/Cypress tests covering critical user journeys, raising code coverage from 48% to 84% and catching 3 regressions pre-release.'
  },
  {
    id: 3,
    title: 'Software Engineer',
    company: "Epam",
    duration: "(Jul 2022 - Oct 2023)",
    tools: ['React Native', 'Android', 'iOS', 'A/B Testing', 'Localization', 'Firebase Crashlytics'],
    image: '/png/epam.png',
    description: 'Architected a React Native component library shared across Android and iOS, consolidating 40% of duplicated UI logic and cutting per-feature dev time by 20%. Led a checkout UX overhaul for a mobile app with A/B testing and localization for 10+ markets, driving a 15% increase in global checkout completion. Integrated Firebase Crashlytics and performance monitoring, reducing post-release defect escape rate by 60% within two sprints.'
  },
  {
    id: 4,
    title: 'Software Engineer',
    company: "Cognizant Technology Solutions",
    duration: "(Jun 2021 - Jun 2022)",
    tools: ['React.js', 'D3.js', 'Node.js', 'WebSockets'],
    image: '/png/Cognizant.png',
    description: 'Built a real-time analytics dashboard (React.js, D3.js, Node.js WebSockets) for 500+ monitored endpoints, cutting mean-time-to-detect by 30%. Delivered three full-stack apps on sprint timelines, raising client satisfaction from 3.7 to 4.8/5.0.'
  },

]
