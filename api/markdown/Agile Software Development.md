public:: true

# Agile Software Development
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:52f52a94fb192c01d46ba135b2f90db6f7a5036905d8405e05d96a3fc5393147",
  "@type": "Page",
  "vc:slug": "agile-software-development",
  "title": "Agile Software Development",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:software-development",
      "vc:label": "Software Development"
    },
    {
      "@id": "urn:visionflow:linked:software-engineering",
      "vc:label": "Software Engineering Domain"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems",
      "vc:label": "Distributed Systems"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Agile Software Development"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agile-software-development",
  "@type": "Class",
  "label": "Agile Software Development",
  "definition": "Agile Software Development is a family of iterative, incremental approaches to building software that prioritise working product increments, continuous stakeholder collaboration, and rapid adaptation to changing requirements over rigid up-front planning. Rooted in the 2001 Agile Manifesto, it encompasses frameworks such as Scrum, Kanban, Extreme Programming, and SAFe, each operationalising core values through time-boxed iterations, cross-functional teams, and frequent feedback loops. Agile practices shorten the feedback cycle between developers and end users, reduce the cost of change, and improve delivery predictability by surfacing risk early. It has become the dominant paradigm for professional software delivery and is increasingly applied to hardware, policy, and organisational transformation.",
  "domain": "distributed-collaboration",
  "maturity": "mature",
  "qualityScore": 0.74,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:extreme-programming",
        "label": "Extreme Programming"
      },
      {
        "@id": "urn:ngm:class:retrospective",
        "label": "Retrospective"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:software-development",
        "label": "Software Development"
      },
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      },
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:devops",
        "label": "DevOps"
      },
      {
        "@id": "urn:ngm:class:continuous-delivery",
        "label": "Continuous Delivery"
      },
      {
        "@id": "urn:ngm:class:test-driven-development",
        "label": "Test-Driven Development"
      },
      {
        "@id": "urn:ngm:class:lean-software-development",
        "label": "Lean Software Development"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:pair-programming",
        "label": "Pair Programming"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:waterfall-model",
        "label": "Waterfall Model"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:project-management",
        "label": "Project Management"
      },
      {
        "@id": "urn:ngm:class:software-architecture",
        "label": "Software Architecture"
      },
      {
        "@id": "urn:ngm:class:distributed-teams",
        "label": "Distributed Teams"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:mlops",
        "label": "MLOps"
      },
      {
        "@id": "urn:ngm:class:organisational-learning",
        "label": "Organisational Learning"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:agile-methods",
      "label": "Agile Methods"
    },
    {
      "@id": "urn:ngm:class:agile-methodology",
      "label": "Agile Methodology"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:agile-software-development:0f114a08c0aa",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:52f52a94fb192c01d46ba135b2f90db6f7a5036905d8405e05d96a3fc5393147"
  },
  "vc:resolutions": [
    {
      "raw": "[[Software Development]]",
      "resolved": "urn:visionflow:linked:software-development",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Software Engineering Domain]]",
      "resolved": "urn:visionflow:linked:software-engineering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Systems]]",
      "resolved": "urn:visionflow:linked:distributed-systems",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Agile Software Development is a family of iterative, incremental approaches to [[Software Development]] in which cross-functional teams deliver working software in short cycles, continuously incorporate stakeholder feedback, and adapt plans as requirements evolve. Codified by the 2001 [[Agile Manifesto]], it contrasts with sequential methods such as the [[Waterfall Model]] by treating change as a competitive advantage rather than a cost. Frameworks such as [[Scrum]], [[Kanban]], and [[Extreme Programming]] operationalise these principles with concrete roles, cadences, and engineering practices. Agile has become the prevailing delivery paradigm in professional software teams worldwide and increasingly influences adjacent disciplines including hardware product development, data science, and organisational design.

- ### Overview
  - Agile emerged from a dissatisfaction with heavyweight, documentation-driven processes that frequently delivered software late, over budget, and misaligned with actual user needs.
  - The [[Agile Manifesto]] — signed in February 2001 by seventeen practitioners — articulates four value pairs and twelve principles that together emphasise individuals and interactions, working software, customer collaboration, and responding to change.
  - The central mechanism is the **iteration** (or **sprint** in [[Scrum]]): a fixed time-box of one to four weeks at the end of which a potentially shippable product increment is produced, reviewed, and used to plan the next cycle.
  - This cadence externalises risk early: integration failures, scope ambiguity, and design mistakes surface within days rather than months.
  - Agile is distinct from a single methodology; it is an umbrella of complementary practices united by shared values. Different organisations blend frameworks to match their context.
  - The discipline is now mature, with decades of industrial adoption, a rich body of empirical research, and tooling ecosystems (e.g. Jira, Linear, GitHub Projects) built around its workflows.

- ### Key Components
  - **Values and Principles**
    - The [[Agile Manifesto]] defines four value trade-offs: individuals and interactions over processes and tools; working software over comprehensive documentation; customer collaboration over contract negotiation; responding to change over following a plan.
    - Twelve supporting principles elaborate on continuous delivery, welcome for late change, business–developer collaboration, sustainable pace, and reflection on team effectiveness.
  - **Frameworks**
    - [[Scrum]] — the most widely adopted framework, defining Product Owner, Scrum Master, and Development Team roles; [[Product Backlog]] and Sprint Backlog artefacts; Sprint, Daily Scrum, Sprint Review, and [[Retrospective]] ceremonies.
    - [[Kanban]] — a flow-based approach using a visual board with Work-in-Progress limits to optimise throughput and reduce cycle time without fixed iterations.
    - [[Extreme Programming]] (XP) — engineering-practice-focused, mandating [[Test-Driven Development]], [[Pair Programming]], collective code ownership, [[Continuous Integration]], and frequent small releases.
    - [[Scaled Agile Framework]] (SAFe) — a configuration for large enterprises coordinating multiple Agile Release Trains across programmes and portfolios.
    - LeSS (Large-Scale Scrum) and Nexus — lighter-weight multi-team Scrum scaling frameworks.
  - **Core Practices**
    - [[User Story]] — a short, customer-centric statement of desired functionality in the format "As a [role], I want [capability] so that [benefit]", used to populate the [[Product Backlog]].
    - [[Sprint]] / Iteration — a time-boxed development cycle producing a tested, integrated increment.
    - [[Retrospective]] — a team ceremony after each iteration to inspect process and identify improvements.
    - [[Continuous Integration]] — automated build and test on every commit to detect integration defects immediately.
    - [[Test-Driven Development]] (TDD) — writing failing tests before production code to drive design and ensure coverage.
    - [[Pair Programming]] — two developers working at one workstation to improve code quality and knowledge sharing.
    - Definition of Done (DoD) — a shared checklist ensuring each increment meets quality criteria before being considered complete.
  - **Roles**
    - Product Owner — accountable for maximising product value, owns and orders the [[Product Backlog]].
    - Scrum Master / Agile Coach — facilitates ceremonies, removes impediments, coaches the team on Agile practices.
    - Development Team — a self-organising, cross-functional group responsible for delivering the increment.
  - **Artefacts**
    - [[Product Backlog]] — the ordered list of everything known to be needed in the product.
    - Sprint Backlog — the subset of backlog items selected for the current sprint plus a plan for delivery.
    - Increment — the sum of all completed backlog items at the end of a sprint.

- ### Applications and Use Cases
  - **Web and Mobile Product Companies** — Agile is the default delivery model for internet product teams, enabling rapid iteration in response to user analytics and A/B testing signals.
  - **Enterprise IT** — large organisations adopt [[Scaled Agile Framework]] or LeSS to coordinate dozens of Agile teams delivering integrated systems.
  - **Embedded and Hardware** — Agile hardware teams apply sprint-based prototyping and iterative testing to reduce time-to-market and manage supply-chain uncertainty.
  - **Data Science and [[MLOps]]** — Agile sprints structure data exploration, model experimentation, and deployment pipelines; concepts such as the ML Canvas extend [[User Story]] format to data and model requirements.
  - **Regulated Industries** — finance, healthcare, and defence organisations combine Agile delivery cadences with compliance gates; frameworks such as SAFe include portfolio-level governance for audit trails.
  - **[[Distributed Teams]]** — remote-first Agile adapts ceremony formats to asynchronous collaboration, leveraging digital boards, video standups, and async retrospectives. Tension between synchronous ceremony designs and distributed work has driven innovation in tooling and practice.
  - **Organisational Transformation** — Business Agility programmes extend Agile values beyond engineering into HR, finance, marketing, and strategy teams, drawing on [[Organisational Learning]] theory.

- ### Relationships
  - subClassOf:: [[Software Engineering Domain]]
  - hasPart:: [[Scrum]], [[Kanban]], [[Extreme Programming]], [[Sprint]], [[Retrospective]]
  - requires:: [[Software Development]], [[Continuous Integration]], [[Version Control]]
  - enables:: [[DevOps]], [[Continuous Delivery]], [[Test-Driven Development]], [[Lean Software Development]]
  - uses:: [[User Story]], [[Product Backlog]], [[Pair Programming]]
  - contrastsWith:: [[Waterfall Model]], [[Big Design Up Front]]
  - standardizedBy:: [[Agile Manifesto]], [[Scaled Agile Framework]]
  - relatedTo:: [[Project Management]], [[Software Architecture]], [[Distributed Teams]]
  - bridges-to:: [[Distributed Systems]], [[MLOps]], [[Organisational Learning]]
  - sameAs:: [[Agile Methods]], [[Agile Methodology]]

- ### Standards and Context
  - **[[Agile Manifesto]] (2001)** — the founding document; not a formal standard but the primary normative reference for Agile values and principles. Published at agilemanifesto.org.
  - **ISO/IEC 29110** — a lifecycle standard for Very Small Entities that can be implemented with Agile approaches.
  - **CMMI v2.0** — the Capability Maturity Model Integration now includes Agile-compatible practice areas, bridging Agile delivery with process maturity measurement.
  - **PMI-ACP** — the Project Management Institute's Agile Certified Practitioner credential formalises practitioner competency.
  - **[[Scaled Agile Framework]] (SAFe)** — the most widely adopted large-scale Agile framework, maintained by Scaled Agile Inc., with versioned releases (SAFe 6.0 as of 2023).
  - **DORA Metrics** — Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service are the canonical empirical measures of Agile-aligned DevOps performance, derived from the State of DevOps reports and the DORA research programme at Google.
  - Agile intersects with [[Lean Software Development]] (Poppendieck), [[Systems Thinking]], and [[Organisational Learning]] (Senge) at its theoretical foundations.

- ### Provenance
  - sources:: Agile Manifesto (agilemanifesto.org, 2001); Schwaber & Sutherland Scrum Guide (2020); Anderson Kanban (2010); Beck Extreme Programming Explained (2nd ed., 2004); Forsgren et al. Accelerate (2018)
  - updated:: 2026-06-13
