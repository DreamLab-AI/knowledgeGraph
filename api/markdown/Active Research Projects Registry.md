public:: true

elevatedFrom:: [[Projects]]
# Active Research Projects Registry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0d194c1e8c634a5980f9bf91e5259882162e0b673d484142179860c7c69a027f",
  "@type": "Page",
  "vc:slug": "active-research-projects-registry",
  "title": "Active Research Projects Registry",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Projects"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:active-research-projects-registry",
  "@type": "Class",
  "label": "Active Research Projects Registry",
  "definition": "An Active Research Projects Registry is a structured, queryable catalogue that maintains authoritative records of ongoing research initiatives, development workstreams, and collaborative projects within an organisation or knowledge graph, capturing metadata such as status, ownership, objectives, dependencies, and timelines. It serves as a single source of truth for portfolio governance, enabling stakeholders to discover, track, and coordinate active work without duplicating effort or losing context across distributed teams. Unlike a static document index, a living registry integrates with project management workflows, version control systems, and knowledge management platforms to reflect real-time project state. It supports prioritisation, resource allocation, and strategic alignment by surfacing the relationships between concurrent initiatives and shared infrastructure.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-registry",
      "label": "Data Registry"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:project-management", "label": "Project Management"},
      {"@id": "urn:ngm:class:knowledge-graph-kanban-board", "label": "Knowledge Graph Kanban Board"},
      {"@id": "urn:ngm:class:applied-ai-research-portfolio", "label": "Applied AI Research Portfolio"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:knowledge-management-system", "label": "Knowledge Management System"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:metadata-management", "label": "Metadata Management"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"},
      {"@id": "urn:ngm:class:version-control", "label": "Version Control"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:knowledge-management", "label": "Knowledge Management"},
      {"@id": "urn:ngm:class:collaboration", "label": "Collaboration"},
      {"@id": "urn:ngm:class:automated-planning", "label": "Automated Planning"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:agile-software-development", "label": "Agile Software Development"},
      {"@id": "urn:ngm:class:data-catalog", "label": "Data Catalog"},
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:decentralised-agent-coordination-initiative", "label": "Decentralised Agent Coordination Initiative"},
      {"@id": "urn:ngm:class:ai-augmented-research-tooling-suite", "label": "AI-Augmented Research Tooling Suite"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:data-catalog", "label": "Data Catalog"},
      {"@id": "urn:ngm:class:experiment-tracking", "label": "Experiment Tracking"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:fair-data-principles", "label": "FAIR Data Principles"},
      {"@id": "urn:ngm:class:open-data", "label": "Open Data"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:collaboration-platform", "label": "Collaboration Platform"},
      {"@id": "urn:ngm:class:knowledge-graph-publication-classifier", "label": "Knowledge Graph Publication Classifier"},
      {"@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:research-project-catalogue", "label": "Research Project Catalogue"},
    {"@id": "urn:ngm:class:active-project-index", "label": "Active Project Index"}
  ],
  "quality": 0.68,
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
  "@id": "urn:visionflow:annotation:link-resolutions:projects:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0d194c1e8c634a5980f9bf91e5259882162e0b673d484142179860c7c69a027f"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - An Active Research Projects Registry is a structured, queryable catalogue that maintains authoritative records of ongoing research initiatives, development workstreams, and collaborative projects. It functions as a single source of truth for [[Project Management]], integrating with [[Knowledge Management]] platforms, [[Version Control]] systems, and [[Collaboration Platform]] tools to keep project metadata current. By capturing status, ownership, objectives, dependencies, and timelines for each initiative, the registry enables [[Automated Planning]], strategic prioritisation, and resource allocation across an organisation's portfolio. It is a specialised form of [[Data Registry]] scoped specifically to the lifecycle of active research and development projects.

- ### Overview
  - Research organisations, AI labs, and knowledge-graph-driven teams manage many concurrent workstreams — from exploratory experiments to production-facing deployments. Without a canonical registry, project metadata scatters across chat threads, issue trackers, and wiki pages, making it difficult to discover what is actively in progress, who owns it, and how projects relate to one another.
  - An Active Research Projects Registry solves this by providing:
    - A **canonical identifier** per project, enabling unambiguous cross-referencing.
    - **Structured metadata fields** (status, owner, start date, dependencies, artefact links).
    - **Queryability** — humans and agents can enumerate, filter, and reason over the corpus of projects.
    - **Provenance** — a record of when each entry was created or last modified, by whom.
  - In a [[Knowledge Graph]] context, each project node in the registry becomes a first-class ontological entity with typed relations to people, tools, datasets, publications, and other projects, enabling automated reasoning over the portfolio.
  - The registry is conceptually distinct from a [[Data Catalog]] (which inventories datasets) and from [[Experiment Tracking]] (which records ML run configurations and metrics). It operates at the project level, not the experiment or dataset level.

- ### Key Components
  - **Project Record** — the atomic unit: a structured entry capturing the project's canonical name, description, status (active/paused/completed), lead researcher, start date, expected completion, and links to outputs.
    - Each record may be a page or node in the graph, linked by typed [[Knowledge Graph]] relations.
  - **Status Taxonomy** — a controlled vocabulary for project state (e.g. Proposed, Active, On-Hold, Completed, Archived) enabling consistent filtering.
  - **Dependency Graph** — typed edges between project records indicating which projects depend on, block, or complement others, supporting [[Automated Planning]] and scheduling.
  - **Ownership & Attribution** — role assignments (PI, contributor, sponsor) linked to agent or person nodes, enabling [[Collaboration]] governance.
  - **Artefact Links** — references to code repositories ([[Version Control]]), datasets ([[Data Catalog]]), publications ([[Knowledge Graph Publication Classifier]]), and deployed systems.
  - **Timeline & Milestones** — structured date fields and milestone markers that integrate with [[Agile Software Development]] sprint cadences or research phase gates.
  - **Priority & Resource Allocation** — fields or inferred scores supporting portfolio-level prioritisation and capacity planning.
  - **Search & Discovery Interface** — query layer (SPARQL, structured search, or semantic retrieval) that makes the registry navigable, often surfaced via a [[Collaboration Platform]] or [[Knowledge Management System]].

- ### Applications and Use Cases
  - **Research Lab Portfolio Management** — a university or corporate research group uses the registry to maintain an auditable, queryable list of all active projects, their PIs, funding sources, and publication targets.
  - **AI Development Teams** — an [[AI-Augmented Research Tooling Suite]] integrates with the registry to surface which models, datasets, and compute resources are claimed by active projects, reducing duplication.
  - **Knowledge Graph Governance** — within a [[Knowledge Graph]], the registry anchors the "projects" subdomain, connecting workstream nodes to related ontology concepts, datasets, and agent toolchains.
  - **Agentic Coordination** — autonomous agents participating in a [[Decentralised Agent Coordination Initiative]] query the registry to understand task allocation and avoid conflicting work on shared infrastructure.
  - **Grant & Reporting Compliance** — the registry provides a structured extract for funders, reporting precisely which projects are active, their scope, and their deliverable status.
  - **Onboarding** — new team members browse the registry to rapidly understand the organisation's current workstreams and identify where they can contribute, reducing ramp-up time.
  - **Kanban-Style Tracking** — when projected onto a [[Knowledge Graph Kanban Board]], the registry entries become cards moving through status columns, enabling visual progress tracking aligned with [[Agile Software Development]] practice.
  - **Open Science Compliance** — a registry built on [[FAIR Data Principles]] ensures each project entry is Findable, Accessible, Interoperable, and Reusable, supporting [[Open Data]] publication of research metadata.

- ### Relationships
  - hasPart:: [[Project Management]]
  - hasPart:: [[Knowledge Graph Kanban Board]]
  - hasPart:: [[Applied AI Research Portfolio]]
  - partOf:: [[Knowledge Management System]]
  - requires:: [[Metadata Management]]
  - requires:: [[Data Governance]]
  - requires:: [[Version Control]]
  - enables:: [[Knowledge Management]]
  - enables:: [[Collaboration]]
  - enables:: [[Automated Planning]]
  - uses:: [[Agile Software Development]]
  - uses:: [[Data Catalog]]
  - uses:: [[Knowledge Graph]]
  - supports:: [[Decentralised Agent Coordination Initiative]]
  - supports:: [[AI-Augmented Research Tooling Suite]]
  - contrastsWith:: [[Data Catalog]]
  - contrastsWith:: [[Experiment Tracking]]
  - bridges-to:: [[FAIR Data Principles]]
  - bridges-to:: [[Open Data]]
  - relatedTo:: [[Collaboration Platform]]
  - relatedTo:: [[Knowledge Graph Publication Classifier]]
  - relatedTo:: [[Agentic Workflow]]

- ### Standards and Context
  - **Dublin Core Metadata Initiative (DCMI)** — provides standard metadata terms (title, creator, date, description) used to describe project records in a registry, ensuring cross-system interoperability.
  - **PROV-O (W3C Provenance Ontology)** — models the attribution and generation of project entries, enabling agents and humans to trace who created or modified a record and when.
  - **DCAT (Data Catalogue Vocabulary, W3C)** — although designed for datasets, its structural patterns (Catalog, Dataset, Distribution) can be adapted for project-centric registries to facilitate [[Open Data]] publication of project metadata.
  - **FAIR Data Principles** — guide the design of registry schemas so that project records are assigned persistent identifiers, carry rich machine-readable metadata, use standardised vocabularies, and specify clear reuse conditions.
  - **PMI / PMBOK** — the Project Management Institute's Body of Knowledge defines portfolio and programme management practices that inform the governance layer of an Active Research Projects Registry.
  - **Open Research Information Infrastructure (OpenAIRE)** — a European initiative providing infrastructure for registering and discovering open research outputs and projects, exemplifying a large-scale implementation of the registry concept.
  - **Research Activity Identifier (RAiD)** — a persistent identifier scheme for research activities, analogous to DOIs for publications, that can serve as canonical identifiers for entries within a registry.

- ### Provenance
  - sources:: Dublin Core Metadata Initiative; W3C PROV-O; DCAT v2; PMI PMBOK 7th Edition; OpenAIRE project registry; FAIR Data Principles (Wilkinson et al., 2016)
  - updated:: 2026-06-13
