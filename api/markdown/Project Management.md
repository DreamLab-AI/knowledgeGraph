public:: true

# Project Management
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:project-management",
  "@type": "Page",
  "vc:slug": "project-management",
  "title": "Project Management",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:project-management",
  "@type": "Class",
  "label": "Project Management",
  "definition": "Project Management is the disciplined application of knowledge, skills, tools, and techniques to project activities in order to meet defined requirements within constraints of scope, time, cost, and quality. It encompasses initiation, planning, execution, monitoring and control, and closure phases, employing methodologies ranging from waterfall and PRINCE2 to agile frameworks such as Scrum and Kanban, and supporting the delivery of technology, construction, research, and organisational change initiatives.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:governance", "label": "Governance"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"},
      {"@id": "urn:ngm:class:resource-management", "label": "Resource Management"},
      {"@id": "urn:ngm:class:stakeholder-engagement", "label": "Stakeholder Engagement"},
      {"@id": "urn:ngm:class:workflow-automation", "label": "Workflow Automation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:collaboration", "label": "Collaboration"},
      {"@id": "urn:ngm:class:software-development-process", "label": "Software Development Process"},
      {"@id": "urn:ngm:class:change-management", "label": "Change Management"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:software-development", "label": "Software Development"},
      {"@id": "urn:ngm:class:governance-framework", "label": "Governance Framework"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Project Management is the structured discipline that applies planning, control, and [[Governance]] principles to deliver defined outcomes within agreed constraints of scope, time, cost, and quality, drawing on [[Risk Management]] and [[Stakeholder Engagement]] to navigate uncertainty through a project lifecycle.

- ### Relationships
  - Project Management relies on [[Risk Management]] to identify, assess, and mitigate threats to delivery, and on [[Resource Management]] to allocate people, budget, and equipment efficiently. [[Stakeholder Engagement]] ensures that sponsor expectations, user requirements, and team capacity are continuously aligned. Modern tooling leverages [[Workflow Automation]] to manage task dependencies, notifications, and status reporting, reducing administrative overhead. In technology contexts, project management is tightly coupled with [[Software Development Process]] and feeds into [[Software Development]] lifecycles through sprint planning and backlog management. [[Change Management]] handles the human and organisational dimensions of project-driven transitions, while [[Governance Framework]] structures accountability and decision rights. [[Collaboration]] platforms unify distributed teams across time zones in real time.

- ### Content
  - Formal project management emerged as a discipline in the 1950s when the US Navy developed the Programme Evaluation and Review Technique (PERT) for the Polaris missile programme and DuPont developed the Critical Path Method (CPM) for plant maintenance scheduling. The Project Management Body of Knowledge (PMBOK) from PMI, first published in 1987 and now in its seventh edition, codified the practice into globally recognised process groups and knowledge areas. PRINCE2 (PRojects IN Controlled Environments), widely adopted in UK government and European enterprises, provided a structured governance model with defined roles and stage gates.

  - Traditional waterfall project management assumes sequential phases with defined deliverables at each gate, suited to projects with stable requirements such as civil engineering or regulatory compliance programmes. Agile methodologies, originating in the 2001 Agile Manifesto, reframe projects as iterative delivery cycles (sprints) with continuous stakeholder feedback, enabling adaptive responses to changing requirements in software and product development. Hybrid approaches blend predictive planning for fixed-scope components with agile iteration for evolving features, reflecting the reality of most enterprise programmes.

  - Project management is foundational to the delivery of large-scale technology initiatives including AI implementation programmes, digital transformation, cloud migration, and infrastructure build-outs. Effective project management determines whether AI projects move from proof-of-concept to production deployment, as failure rates remain high due to underestimated data preparation work, unclear business outcomes, and inadequate change management rather than technical deficiencies.

  - From 2023 through 2025, AI-augmented project management tools have reached commercial maturity, offering natural-language task breakdown, automated risk identification from project artefacts, and predictive schedule analytics that flag delivery risks weeks before they materialise. Large language models are being embedded into project management platforms to draft status reports, parse meeting transcripts into action items, and generate risk registers from requirements documents. The profession is simultaneously grappling with how to manage AI implementation projects themselves, as these programmes combine high technical uncertainty with significant organisational change management challenges.