public:: true

# Software Development
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:software-development",
  "@type": "Page",
  "vc:slug": "software-development",
  "title": "Software Development",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:software-development",
  "@type": "Class",
  "label": "Software Development",
  "definition": "Software development is the disciplined engineering practice of conceiving, specifying, designing, implementing, testing, deploying, and maintaining software systems through the coordinated application of programming languages, tooling, architectural patterns, and collaborative process frameworks. It encompasses the full software lifecycle — from requirements elicitation and system design through iterative coding, automated testing, continuous integration and delivery, and production operations — governed by methodologies such as Agile, Scrum, DevOps, and lean software development. The discipline has evolved from monolithic waterfall processes into fast-cycle, AI-augmented workflows in which developer tooling, cloud-native infrastructure, and open-source ecosystems are inseparable components of production capability.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {"@id": "urn:ngm:class:software-engineering", "label": "Software Engineering"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:software-testing", "label": "Software Testing"},
      {"@id": "urn:ngm:class:software-architecture", "label": "Software Architecture"},
      {"@id": "urn:ngm:class:requirements-engineering", "label": "Requirements Engineering"},
      {"@id": "urn:ngm:class:code-review", "label": "Code Review"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:programming-language", "label": "Programming Language"},
      {"@id": "urn:ngm:class:version-control", "label": "Version Control"},
      {"@id": "urn:ngm:class:software-development-process", "label": "Software Development Process"},
      {"@id": "urn:ngm:class:integrated-development-environment", "label": "Integrated Development Environment"},
      {"@id": "urn:ngm:class:continuous-integration", "label": "Continuous Integration"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:programming-paradigm", "label": "Programming Paradigm"},
      {"@id": "urn:ngm:class:software-design-pattern", "label": "Software Design Pattern"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-augmented-software-engineering", "label": "AI-Augmented Software Engineering"},
      {"@id": "urn:ngm:class:open-source-software", "label": "Open Source Software"},
      {"@id": "urn:ngm:class:cloud-native-application", "label": "Cloud-Native Application"},
      {"@id": "urn:ngm:class:devops", "label": "DevOps"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing"},
      {"@id": "urn:ngm:class:containerisation", "label": "Containerisation"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:digital-transformation", "label": "Digital Transformation"},
      {"@id": "urn:ngm:class:software-supply-chain", "label": "Software Supply Chain"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:waterfall-model", "label": "Waterfall Model"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:machine-learning-engineering", "label": "Machine Learning Engineering"},
      {"@id": "urn:ngm:class:ai-code-generation", "label": "AI Code Generation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:open-source-development", "label": "Open Source Development"},
      {"@id": "urn:ngm:class:agile-methodology", "label": "Agile Methodology"},
      {"@id": "urn:ngm:class:technical-debt", "label": "Technical Debt"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:software-construction", "label": "Software Construction"},
    {"@id": "urn:ngm:class:application-development", "label": "Application Development"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - [[Software Development]] is the end-to-end engineering discipline encompassing [[Requirements Engineering]], [[Software Architecture]] design, [[Programming Language]] selection, iterative implementation, automated [[Software Testing]], [[Version Control]]-managed collaboration, and [[Continuous Integration]] and delivery pipelines — governed by [[Software Development Process]] frameworks such as [[Agile Methodology]] and [[DevOps]] to produce reliable, maintainable, and incrementally deliverable systems. As a sub-discipline of [[Software Engineering]], it provides the concrete practices, tooling, and workflow structures by which specifications are translated into running software.

- ### Overview
  - Software development is the core activity by which computing systems are created and evolved. Unlike pure computer science (which studies computation theoretically), software development is a sociotechnical practice: it requires managing human teams, navigating organisational constraints, working with uncertain requirements, and maintaining large codebases over multi-year timescales.
  - The discipline matters because virtually every domain of modern civilisation — finance, healthcare, transport, communication, government — depends on software systems built and maintained by development teams. The quality, security, and reliability of that software directly affects societal outcomes.
  - Modern software development operates through iterative cycles: short sprints (in [[Agile Methodology]]) or continuous-flow models (in [[Kanban]]) that release working increments frequently, gather feedback, and adapt. This contrasts sharply with the [[Waterfall Model]]'s sequential, gate-driven approach that dominated through the 1990s and proved brittle in the face of changing requirements.

- ### Historical Context
  - The discipline crystallised in the late 1960s when NATO conferences (1968–1969) identified a "software crisis" — the endemic difficulty of building large, reliable systems using ad hoc methods.
  - The structured programming movement (Dijkstra, Wirth) and subsequent rise of [[Object-Oriented Programming]] (Smalltalk, C++, Java) gave developers conceptual frameworks for managing complexity at scale.
  - The [[Agile Methodology]] Manifesto (2001) articulated a paradigm shift: iterative delivery, customer collaboration, and responsiveness to change, producing frameworks such as Scrum, Extreme Programming (XP), and Lean Software Development.
  - [[DevOps]] subsequently fused development and operations, automating the path from code commit to production through [[Continuous Integration]] and [[Continuous Delivery]] (CI/CD) pipelines, [[Infrastructure as Code]], and observability tooling.
  - The 2020s have introduced AI-assisted and agentic development workflows, with large language model-based coding assistants reshaping developer productivity and, increasingly, autonomy.

- ### Key Components
  - **Requirements Engineering** — eliciting, documenting, and validating what a system must do. Includes [[Requirements Engineering]] techniques such as user stories, use cases, and domain modelling.
  - **[[Software Architecture]]** — defining high-level structure: component decomposition, data flows, integration boundaries, and non-functional properties (scalability, resilience, security).
  - **Implementation** — writing source code in chosen [[Programming Language]]s, following [[Software Design Pattern]]s (SOLID principles, MVC, microservices, event-driven architectures).
  - **[[Software Testing]]** — verifying correctness at multiple levels: unit tests, integration tests, end-to-end tests, performance tests, and security testing. Test-Driven Development (TDD) codifies tests-first as a design discipline.
  - **[[Version Control]]** — collaborative change management using systems such as Git. Branching strategies (GitFlow, trunk-based development) govern how concurrent work is integrated.
  - **[[Continuous Integration]]** and [[Continuous Delivery]] (CI/CD) — automated pipelines that build, test, and deploy code on every change, eliminating manual integration bottlenecks.
  - **[[Code Review]]** — peer examination of proposed changes for correctness, security, and maintainability, enforced via pull-request workflows.
  - **[[Containerisation]]** — packaging software with its dependencies (Docker, OCI images) to ensure reproducibility across environments, orchestrated at scale by [[Kubernetes]].
  - **Observability and Monitoring** — runtime telemetry (logs, metrics, distributed traces) enabling operators to understand system behaviour in production.
  - **[[Software Supply Chain]]** security — SBOM generation, dependency vulnerability scanning, provenance attestation (SLSA framework) to guard against upstream compromises.

- ### Software Development Process Frameworks
  - **[[Agile Methodology]]** — the family of iterative, customer-centric approaches (Scrum, XP, SAFe, LeSS) underpinned by the 2001 Manifesto for Agile Software Development. Emphasises working software, adaptive planning, and cross-functional teams.
  - **[[DevOps]]** — cultural and technical movement merging development and operations, centred on automation, shared ownership of the delivery pipeline, and continuous feedback from production.
  - **Scrum** — a specific Agile framework using fixed-length sprints (1–4 weeks), defined roles (Product Owner, Scrum Master, Development Team), and ceremonies (sprint planning, daily standup, review, retrospective).
  - **Extreme Programming (XP)** — engineering-focused Agile practices including pair programming, TDD, collective code ownership, and continuous integration.
  - **[[Waterfall Model]]** — sequential phases (requirements → design → implementation → verification → maintenance); appropriate for safety-critical systems with fully understood requirements, but inflexible for exploratory products.
  - **Kanban** — flow-based approach with work-in-progress limits, continuous delivery, and visual board management; often used alongside Scrum (Scrumban).

- ### Tooling Ecosystem
  - **IDEs and editors** — [[Integrated Development Environment]]s (VS Code, JetBrains, Xcode) with language servers (LSP), debuggers, and integrated terminal providing the primary developer interface.
  - **Package managers** — npm (JavaScript), pip/uv (Python), Cargo (Rust), Maven/Gradle (JVM) resolving dependency graphs and managing reproducible builds.
  - **Static analysis** — linters, type checkers, and [[Static Analysis]] tools (ESLint, Mypy, SonarQube) catching defects before runtime.
  - **Containerisation** — [[Docker]] and [[Kubernetes]] providing environment parity from development through production, enabling [[Cloud-Native Application]] patterns.
  - **[[AI Code Generation]]** tools — GitHub Copilot, Cursor, [[AI-Augmented Software Engineering]] platforms, and agentic coding systems (Claude Code, Devin) increasingly automating routine coding tasks and shifting developer focus to specification and review.

- ### Applications and Use Cases
  - **Enterprise software** — ERP, CRM, supply-chain, and HR systems built on frameworks (Spring, .NET, Django) and integrated via APIs, underpinning business operations at global scale.
  - **Consumer applications** — mobile apps (iOS/Android), web applications, and SaaS products delivered via app stores and browsers to billions of users.
  - **Embedded and real-time systems** — firmware for IoT devices, automotive ECUs, medical devices, and industrial controllers where correctness and timing constraints are safety-critical.
  - **[[Machine Learning Engineering]]** — MLOps pipelines for training, evaluating, versioning, and serving ML models, blending traditional software development with data-science workflows.
  - **[[Cloud-Native Application]]s** — microservice architectures deployed on Kubernetes, leveraging managed cloud services (databases, queues, auth) and designed for horizontal scalability and resilience.
  - **[[Open Source Development]]** — community-driven development of shared infrastructure (Linux kernel, compilers, databases, frameworks) that underpins virtually all commercial software.
  - **[[Digital Transformation]]** initiatives — modernisation of legacy systems, migration to cloud, and introduction of data-driven capabilities across industries including finance, healthcare, and government.

- ### AI-Augmented and Agentic Development
  - The integration of large language models into the development workflow represents the most significant productivity shift since the introduction of high-level programming languages.
  - **Copilot-style tools** (GitHub Copilot, Cursor, Gemini Code Assist) provide inline code completion, function generation from docstrings, and chat-based code explanation within the IDE.
  - **Agentic coding systems** (Claude Code, Devin, SWE-agent) autonomously execute multi-step coding tasks — writing, testing, debugging, and submitting pull requests — given natural-language specifications.
  - This bridges to [[AI Code Generation]] and [[Machine Learning Engineering]] domains, as development teams increasingly treat LLM-based tools as a first-class component of their toolchain.
  - Open questions include: code quality and correctness guarantees, intellectual property in AI-generated code, security of LLM-suggested dependencies, and the evolving skills profile for developers.

- ### Security Integration (DevSecOps)
  - Security has migrated from a post-development gate into an inline pipeline concern — DevSecOps.
  - **SAST** (Static Application Security Testing) — automated scanning of source code for vulnerability patterns (SQL injection, XSS, buffer overflows) during CI.
  - **DAST** (Dynamic Application Security Testing) — runtime scanning of deployed applications against known attack vectors.
  - **Dependency vulnerability scanning** — continuous monitoring of third-party libraries against CVE databases (Dependabot, Snyk, OWASP Dependency-Check).
  - **[[Software Supply Chain]]** security — SBOM (Software Bill of Materials) generation, signing, and verification; SLSA (Supply-chain Levels for Software Artefacts) framework for provenance.
  - See also [[Security Engineering]] and [[Secure Software Development Lifecycle]] (SSDLC).

- ### Relationships
  - partOf:: [[Software Engineering]]
  - uses:: [[Programming Language]]
  - uses:: [[Version Control]]
  - uses:: [[Software Development Process]]
  - uses:: [[Integrated Development Environment]]
  - uses:: [[Continuous Integration]]
  - hasPart:: [[Software Testing]]
  - hasPart:: [[Software Architecture]]
  - hasPart:: [[Requirements Engineering]]
  - hasPart:: [[Code Review]]
  - requires:: [[Programming Paradigm]]
  - requires:: [[Software Design Pattern]]
  - enables:: [[AI-Augmented Software Engineering]]
  - enables:: [[Open Source Software]]
  - enables:: [[Cloud-Native Application]]
  - enables:: [[DevOps]]
  - dependsOn:: [[Cloud Computing]]
  - dependsOn:: [[Containerisation]]
  - supports:: [[Digital Transformation]]
  - supports:: [[Software Supply Chain]]
  - contrastsWith:: [[Waterfall Model]]
  - bridges-to:: [[Machine Learning Engineering]]
  - bridges-to:: [[AI Code Generation]]
  - relatedTo:: [[Open Source Development]]
  - relatedTo:: [[Agile Methodology]]
  - relatedTo:: [[Technical Debt]]

- ### Standards & Context
  - **ISO/IEC 12207** — international standard for software lifecycle processes, defining acquisition, supply, development, operation, and maintenance activities.
  - **ISO/IEC 25010** (SQuaRE) — software quality model specifying eight quality characteristics (functional suitability, reliability, performance efficiency, usability, security, compatibility, maintainability, portability).
  - **CMMI** (Capability Maturity Model Integration) — process maturity framework for software and systems development organisations, defining five maturity levels.
  - **IEEE 1012** — standard for software verification and validation, specifying the rigour required for safety-critical systems.
  - **SLSA** (Supply-chain Levels for Software Artefacts) — Google-originated framework specifying four levels of build provenance and integrity guarantees, increasingly adopted across open-source ecosystems.
  - **OWASP** (Open Web Application Security Project) — community standards for secure software development, including the OWASP Top 10 vulnerability taxonomy.
  - Governance bodies: IEEE Computer Society, ACM, ISO/IEC JTC 1/SC 7 (Software and Systems Engineering).

- ### Provenance
  - sources:: ISO/IEC 12207, IEEE 1012, CMMI Institute, Agile Manifesto (2001), OWASP, SLSA framework
  - updated:: 2026-06-13
