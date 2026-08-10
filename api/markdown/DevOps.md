public:: true

# DevOps
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:devops",
  "@type": "Page",
  "title": "DevOps",
  "vc:slug": "devops",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:devops",
  "@type": "Class",
  "label": "DevOps",
  "definition": "DevOps is a sociotechnical discipline that unifies software development (Dev) and IT operations (Ops) through cultural practices, shared toolchains, and automation pipelines to shorten the system development lifecycle and deliver high-quality software continuously. It operationalises collaboration between development and operations teams by eliminating organisational silos, embracing infrastructure as code, and instrumenting every stage of delivery with feedback loops spanning continuous integration, continuous delivery, monitoring, and incident response. The discipline extends Agile principles beyond code authorship to encompass deployment, reliability engineering, and production observability as first-class engineering concerns.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:software-engineering",
      "label": "Software Engineering"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:development-operations",
      "label": "Development Operations"
    },
    {
      "@id": "urn:ngm:class:devops-culture",
      "label": "DevOps Culture"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      },
      {
        "@id": "urn:ngm:class:continuous-delivery",
        "label": "Continuous Delivery"
      },
      {
        "@id": "urn:ngm:class:continuous-deployment",
        "label": "Continuous Deployment"
      },
      {
        "@id": "urn:ngm:class:infrastructure-as-code",
        "label": "Infrastructure as Code"
      },
      {
        "@id": "urn:ngm:class:monitoring-system",
        "label": "Monitoring System"
      },
      {
        "@id": "urn:ngm:class:incident-response",
        "label": "Incident Response"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:software-delivery-lifecycle",
        "label": "Software Delivery Lifecycle"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      },
      {
        "@id": "urn:ngm:class:build-automation",
        "label": "Build Automation"
      },
      {
        "@id": "urn:ngm:class:automated-testing",
        "label": "Automated Testing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:site-reliability-engineering",
        "label": "Site Reliability Engineering"
      },
      {
        "@id": "urn:ngm:class:platform-engineering",
        "label": "Platform Engineering"
      },
      {
        "@id": "urn:ngm:class:mlops",
        "label": "MLOps"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      },
      {
        "@id": "urn:ngm:class:containerisation",
        "label": "Containerisation"
      },
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:agile-software-development",
        "label": "Agile Software Development"
      },
      {
        "@id": "urn:ngm:class:lean-software-development",
        "label": "Lean Software Development"
      },
      {
        "@id": "urn:ngm:class:shift-left-testing",
        "label": "Shift-Left Testing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:docker-containerisation-platform",
        "label": "Docker"
      },
      {
        "@id": "urn:ngm:class:kubernetes",
        "label": "Kubernetes"
      },
      {
        "@id": "urn:ngm:class:git-hub-actions",
        "label": "GitHub Actions"
      },
      {
        "@id": "urn:ngm:class:terraform",
        "label": "Terraform"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:software-development",
        "label": "Software Development"
      },
      {
        "@id": "urn:ngm:class:cloud-platform",
        "label": "Cloud Platform"
      },
      {
        "@id": "urn:ngm:class:security-scanning",
        "label": "Security Scanning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:waterfall-development",
        "label": "Waterfall Development"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:mlops",
        "label": "MLOps"
      },
      {
        "@id": "urn:ngm:class:dev-sec-ops",
        "label": "DevSecOps"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:feature-flags",
        "label": "Feature Flags"
      },
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability Platform"
      }
    ]
  },
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "GapFillAuthored"
  }
}
```

- ### Definition
  - **DevOps** is a sociotechnical movement that merges [[Software Development]] and [[IT Operations]] into a unified engineering discipline, eliminating the traditional wall between teams that build software and those that run it in production.
  - The term was coined by Patrick Debois and popularised at the first DevOpsDays conference in 2009, drawing on ideas from [[Agile Software Development]], [[Lean Software Development]], and the Toyota Production System.
  - At its core, DevOps asks: *how do we ship reliable software faster?* The answer is through automation, shared ownership, continuous feedback, and a culture of psychological safety.
  - Central artefacts include [[Continuous Integration]] pipelines, [[Infrastructure as Code]] definitions, [[Continuous Delivery]] release trains, and [[Monitoring System]] dashboards — all treated as first-class engineering concerns.
  - The DORA (DevOps Research and Assessment) research programme identifies four key metrics: deployment frequency, lead time for changes, mean time to restore service, and change failure rate.
  - DevOps does not prescribe a single toolchain; it is a philosophy instantiated through practices such as [[Trunk-Based Development]], [[Shift-Left Testing]], and blameless post-mortems.

- ### Overview
  - DevOps emerged in reaction to the dysfunctional handoff model in which developers threw code "over the wall" to operations teams, who then bore all operational risk.
  - The discipline synthesises three philosophical pillars — often called *The Three Ways*:
    - **Flow**: optimising the left-to-right delivery of work from development through operations to the customer, eliminating waste and batch sizes.
    - **Feedback**: creating fast, amplified feedback loops from right to left so that problems are detected and corrected quickly.
    - **Continual Learning**: building a culture of experimentation, learning from failure, and institutional knowledge sharing.
  - In practice, DevOps teams own the full lifecycle of a service — "you build it, you run it" — taking responsibility for both feature delivery and production reliability.
  - DevOps practices scale from small startups running a single monolith to hyperscale operators managing thousands of [[Microservices]] across global [[Cloud Platform]] footprints.
  - The discipline is closely related to [[Site Reliability Engineering]] (SRE), Google's operationalisation of DevOps principles, which adds error budgets, service-level objectives, and formal reliability contracts.

- ### Key Components
  - #### Continuous Integration / Continuous Delivery
    - [[Continuous Integration]] automates the merging, building, and testing of code changes, providing fast feedback on whether the codebase is in a releasable state.
    - [[Continuous Delivery]] extends CI by ensuring that every passing build is deployable to production on demand, without further manual intervention beyond a deliberate release decision.
    - [[Continuous Deployment]] removes even the manual release gate, deploying every passing build automatically — the highest-frequency variant of the practice.
    - Together, CI/CD is the delivery backbone of DevOps, enabled by tools such as [[GitHub Actions]], Jenkins, GitLab CI, and CircleCI.
  - #### Infrastructure as Code
    - [[Infrastructure as Code]] (IaC) treats server configuration, network topology, and cloud resource definitions as versioned source files managed with the same discipline as application code.
    - Tools such as [[Terraform]], Ansible, Pulumi, and AWS CloudFormation implement IaC, enabling reproducible environments and eliminating configuration drift.
    - IaC enables ephemeral environments — identical staging, testing, and production stacks spun up and destroyed on demand — which dramatically reduces "works on my machine" failures.
  - #### Containerisation and Orchestration
    - [[Containerisation]] via [[Docker]] packages applications and their runtime dependencies into portable, immutable units that behave identically across environments.
    - [[Kubernetes]] orchestrates containers at scale, managing deployment, scaling, self-healing, and service discovery across [[Cloud Computing]] infrastructure.
    - Container images serve as the immutable artefact that flows through the CI/CD pipeline, replacing environment-specific installers and configuration scripts.
  - #### Monitoring and Observability
    - [[Monitoring System]] tooling — metrics, logs, and traces — provides continuous visibility into system health, performance, and correctness.
    - The [[Observability Platform]] extends monitoring with exploratory debugging capabilities, allowing engineers to ask novel questions of production systems without pre-instrumenting every possible failure mode.
    - Alerting, on-call rotations, and [[Incident Response]] practices close the feedback loop between production reality and the development team.
  - #### Version Control and Collaboration
    - [[Version Control]] (canonically [[Git]]) is the single source of truth for all artefacts — code, configuration, pipeline definitions, and documentation.
    - [[Trunk-Based Development]] or short-lived feature branches minimise integration debt and keep the main branch releasable at all times.
    - Code review, [[Feature Flags]], and progressive delivery techniques (canary releases, blue-green deployments) enable safe, incremental change in production.

- ### Mechanisms
  - **Pipeline as Code**: CI/CD pipelines are defined in YAML or HCL files committed alongside application code, making pipeline changes auditable and reviewable.
  - **Immutable Infrastructure**: servers are never patched in place; instead, new images are built and old instances replaced, eliminating configuration drift and snowflake servers.
  - **GitOps**: the desired state of infrastructure and applications is declared in [[Version Control]]; an operator reconciles the live system to that declared state continuously.
  - **Blameless Post-Mortems**: incidents are treated as learning opportunities rather than occasions for blame, generating systemic improvements rather than individual punishment.
  - **Error Budgets**: an agreed tolerance for unreliability (e.g. 99.9% availability = 8.7 hours downtime per year) arbitrates the tension between feature velocity and reliability investment.
  - **Shift-Left Security**: [[Security Scanning]] — SAST, DAST, dependency auditing, container image scanning — is embedded into the CI pipeline rather than deferred to a release gate, giving rise to the [[DevSecOps]] extension of the discipline.

- ### Applications / Use Cases
  - #### Web and Mobile Application Delivery
    - E-commerce, SaaS, and consumer internet companies use DevOps to deploy multiple times per day, respond rapidly to user feedback, and conduct A/B experiments safely.
    - [[Feature Flags]] decouple deployment from release, allowing code to ship to production while features are gated off for specific user cohorts.
  - #### Cloud-Native Systems
    - [[Cloud Platform]] providers (AWS, Azure, GCP) expose managed CI/CD, container registry, and monitoring services that accelerate DevOps adoption for teams building on their platforms.
    - [[Microservices]] architectures depend on DevOps automation to manage the operational complexity of deploying and monitoring dozens to hundreds of independent services.
  - #### Machine Learning Systems
    - [[MLOps]] applies DevOps principles to the machine learning lifecycle, adding model versioning, data pipeline automation, training reproducibility, and model performance monitoring to the standard CI/CD loop.
    - The overlap between DevOps and MLOps is significant: both rely on [[Version Control]], containerised execution environments, automated testing, and production monitoring.
  - #### Platform Engineering
    - [[Platform Engineering]] is an emerging specialisation in which a dedicated team builds and maintains an Internal Developer Platform (IDP) — a self-service layer that abstracts DevOps toolchains so product teams can deploy without deep infrastructure knowledge.
    - This represents a maturation of DevOps: rather than every team configuring pipelines from scratch, they consume golden-path templates from a central platform team.
  - #### Enterprise and Regulated Environments
    - In regulated industries (finance, healthcare, government), DevOps practices must be adapted to satisfy audit, change management, and compliance requirements.
    - [[DevSecOps]] integrates compliance-as-code, automated policy enforcement, and audit trail generation into the delivery pipeline.

- ### Relationships
  - hasPart:: [[Continuous Integration]]
  - hasPart:: [[Continuous Delivery]]
  - hasPart:: [[Continuous Deployment]]
  - hasPart:: [[Infrastructure as Code]]
  - hasPart:: [[Monitoring System]]
  - hasPart:: [[Incident Response]]
  - partOf:: [[Software Delivery Lifecycle]]
  - requires:: [[Version Control]]
  - requires:: [[Build Automation]]
  - requires:: [[Automated Testing]]
  - enables:: [[Site Reliability Engineering]]
  - enables:: [[Platform Engineering]]
  - enables:: [[MLOps]]
  - dependsOn:: [[Cloud Computing]]
  - dependsOn:: [[Containerisation]]
  - dependsOn:: [[Microservices]]
  - implements:: [[Agile Software Development]]
  - implements:: [[Lean Software Development]]
  - implements:: [[Shift-Left Testing]]
  - uses:: [[Docker]]
  - uses:: [[Kubernetes]]
  - uses:: [[GitHub Actions]]
  - uses:: [[Terraform]]
  - supports:: [[Software Development]]
  - supports:: [[Cloud Platform]]
  - supports:: [[Security Scanning]]
  - contrastsWith:: [[Waterfall Development]]
  - contrastsWith:: [[Siloed Operations]]
  - bridgesTo:: [[MLOps]]
  - bridgesTo:: [[DevSecOps]]
  - relatedTo:: [[Feature Flags]]
  - relatedTo:: [[Observability Platform]]

- ### Standards & Context
  - The **DORA State of DevOps** annual report (Google / DORA Research Program) provides the most widely cited empirical evidence base for DevOps practices, identifying elite, high, medium, and low performers across deployment frequency, lead time, change failure rate, and recovery time.
  - **CALMS** is a widely used DevOps assessment framework: Culture, Automation, Lean, Measurement, and Sharing.
  - The **Three Ways** model (Gene Kim, *The Phoenix Project* and *The DevOps Handbook*) provides a canonical conceptual framework for the discipline.
  - [[Continuous Integration]] as a named practice was introduced by Kent Beck in Extreme Programming (1999); the broader DevOps movement crystallised a decade later.
  - Cloud-native computing, codified by the [[Cloud Native Computing Foundation]] (CNCF), provides the ecosystem of open-source tools ([[Kubernetes]], Prometheus, Envoy, Argo CD) that form the reference implementation of DevOps at scale.
  - The relationship between DevOps and [[Site Reliability Engineering]] is complementary rather than competitive: SRE is Google's opinionated implementation of DevOps principles, adding quantitative reliability contracts and formal error budget management.
  - [[DevSecOps]] extends the DevOps model by treating security as a shared responsibility embedded throughout the delivery pipeline, rather than a gate at the end.

- ### Current Landscape (2026)
  - The 2025 DORA Report, "State of AI-assisted Software Development" (Google Cloud, September 2025; ~5,000 respondents), reframed AI as an amplifier rather than a fix: AI adoption correlates positively with throughput but negatively with stability, so the CD Foundation added Rework Rate as a fifth metric (16 October 2025) and published the seven-practice DORA AI Capabilities Model.
  - Platform engineering became the default operating model, with DORA reporting ~90% of organisations now running at least one internal developer platform and 76% having a dedicated platform team; Gartner projects 80% of large engineering organisations will have platform teams by end of 2026, though CNCF/SlashData found 40.9% cannot demonstrate value within twelve months.
  - Backstage consolidated its lead as the CNCF-governed IDP standard (reaching v1.42.x with 3,400+ adopters including Netflix, LEGO and Booking.com), while commercial rivals Port and Cortex each raised ~$60M; CNCF and SlashData's March 2026 radar placed Backstage, Helm and kro in the "Adopt" tier and launched a platform-engineering certification with 13,000+ developers certified.
  - Software supply-chain attacks industrialised: the self-propagating Shai-Hulud npm worm (first September 2025, then Shai-Hulud 2.0 in November 2025 hitting 25,000+ repos), and the May 2026 "Mini Shai-Hulud"/Megalodon campaign by TeamPCP, which forged the first cryptographically valid SLSA Build Level 3 provenance attestations and weaponised AI-agent config files such as Claude Code's .claude/settings.json for persistence.
  - Regulation diverged sharply: the EU Cyber Resilience Act (in force December 2024) sets a 24-hour actively-exploited-vulnerability reporting clock from 11 September 2026 and full SBOM/CE-marking obligations from 11 December 2027 with fines up to EUR 15M or 2.5% of turnover, whereas the US OMB memo M-26-05 (29 January 2026) rescinded prior federal SBOM attestation mandates, creating a two-speed compliance environment.
  - Infrastructure churn accelerated: ingress-nginx is retiring in March 2026 (pushing migration to the Kubernetes Gateway API), Kubernetes shipped Dynamic Resource Allocation GA in v1.34 and In-Place Pod Resize GA in v1.35, IBM completed its $6.4B HashiCorp acquisition, and GitHub Actions (now ~71M jobs/day) introduced pricing changes effective January 2026.
  - The open frontier is governing autonomous "agentic" DevOps: IDPs are evolving into Agentic Development Platforms treating AI agents as first-class users needing GPU provisioning, non-human identity and MCP gateways, while ~30% of engineers still distrust AI-generated code and Puppet's 2026 State of Platform Engineering found only 31% of organisations report fully autonomous infrastructure operations.

- ### References
  - 1. Google Cloud DORA (2025). Announcing the 2025 DORA Report: State of AI-assisted Software Development. https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report
  - 2. DevNewsletter (2026). State of DevOps 2026. https://devnewsletter.com/p/state-of-devops-2026/
  - 3. CNCF / SlashData (2026). CNCF and SlashData Report Finds Platform Engineering Tools Maturing as Organizations Prepare for AI-Driven Infrastructure. https://www.cncf.io/announcements/2026/03/24/cncf-and-slashdata-report-finds-platform-engineering-tools-maturing-as-organizations-prepare-for-ai-driven-infrastructure/
  - 4. Cloud Security Alliance Labs (2026). Shai-Hulud/Megalodon: A Two-Wave AI Developer Supply Chain Attack. https://labs.cloudsecurityalliance.org/research/csa-research-note-shai-hulud-megalodon-supply-chain-cascade/
  - 5. Mapshock (2026). Software Supply Chain Security: Dependency Confusion, Open Source Risk, and SBOM Mandates. https://mapshock.com/briefings/software-supply-chain-security-dependency-confusion-open
  - 6. Puppet (2026). State of DevOps Report: Platform Engineering Edition 2026. https://www.puppet.com/resources/2026-state-of-platform-engineering

- ### Provenance
  - sources:: DORA State of DevOps Report; *The DevOps Handbook* (Kim, Humble, Debois, Willis); *Site Reliability Engineering* (Beyer et al., Google); CNCF landscape documentation; Patrick Debois's DevOpsDays founding materials (2009)
  - updated:: 2026-06-13
