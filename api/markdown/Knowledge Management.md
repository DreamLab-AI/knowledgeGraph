public:: true

# Knowledge Management
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e308a3d2a0b379832300fb2a5cd5f65e85a4a65a02b531e444ac1115c4adafcb",
  "@type": "Page",
  "vc:slug": "knowledge-management",
  "title": "Knowledge Management",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9642"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Knowledge Management"
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
  "@id": "urn:ngm:class:knowledge-management",
  "@type": "Class",
  "label": "Knowledge Management",
  "definition": "Knowledge Management (KM) is the systematic discipline of identifying, capturing, organising, storing, sharing, and applying the collective explicit and tacit knowledge assets of an organisation or distributed community to improve decision-making, innovation, and operational effectiveness. It integrates organisational theory, information science, and technology — spanning knowledge repositories, ontologies, semantic search, and communities of practice — to prevent knowledge loss, enable reuse, and accelerate learning. Modern KM increasingly employs AI-augmented techniques such as knowledge graphs, retrieval-augmented generation, and large language model reasoning to make both structured and unstructured knowledge discoverable and actionable by human and autonomous agents alike. It is a mature field with established frameworks (SECI, DIKW hierarchy, Cynefin) and dedicated standards bodies.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:information-management",
      "label": "Information Management"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:knowledge-repository", "label": "Knowledge Repository"},
      {"@id": "urn:ngm:class:community-of-practice", "label": "Community of Practice"},
      {"@id": "urn:ngm:class:knowledge-audit", "label": "Knowledge Audit"},
      {"@id": "urn:ngm:class:lessons-learned", "label": "Lessons Learned"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation"},
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"},
      {"@id": "urn:ngm:class:taxonomy", "label": "Taxonomy"},
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"},
      {"@id": "urn:ngm:class:organisational-learning", "label": "Organisational Learning"},
      {"@id": "urn:ngm:class:decision-support-system", "label": "Decision Support System"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:metadata", "label": "Metadata"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:data-management", "label": "Data Management"},
      {"@id": "urn:ngm:class:document-management", "label": "Document Management"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:semantic-web-linked-data-standard", "label": "Semantic Web"},
      {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"},
      {"@id": "urn:ngm:class:distributed-collaboration", "label": "Distributed Collaboration"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:information-architecture", "label": "Information Architecture"},
      {"@id": "urn:ngm:class:enterprise-search", "label": "Enterprise Search"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:km", "label": "KM"},
    {"@id": "urn:ngm:class:enterprise-knowledge-management", "label": "Enterprise Knowledge Management"}
  ],
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:knowledge-management:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e308a3d2a0b379832300fb2a5cd5f65e85a4a65a02b531e444ac1115c4adafcb"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
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
  - Knowledge Management (KM) is the systematic discipline of identifying, capturing, organising, storing, sharing, and applying the collective [[Explicit Knowledge]] and [[Tacit Knowledge]] assets of an organisation or distributed community. It draws on [[Information Management]], organisational psychology, and information technology to prevent knowledge loss and accelerate learning. Modern KM increasingly leverages [[Knowledge Graph]] structures, [[Ontology|ontologies]], and AI-augmented retrieval — including [[Retrieval-Augmented Generation]] — to make both structured and unstructured knowledge discoverable and actionable by human teams and autonomous agents alike.

- ### Overview
  - Knowledge Management emerged as a formal discipline in the early 1990s, catalysed by work from Nonaka and Takeuchi on the SECI model (Socialisation, Externalisation, Combination, Internalisation) and the rise of enterprise intranets.
  - Its central problem is the **knowledge retention and transfer challenge**: organisations continuously lose institutional knowledge through staff turnover, siloed communication, and inadequate documentation practices.
  - KM addresses the full DIKW hierarchy — from raw [[Data]] through [[Information]] to [[Knowledge]] and ultimately [[Wisdom]] — by providing processes and tools at each level.
  - Contemporary KM systems increasingly integrate [[Artificial Intelligence]] to automate classification, surface contextually relevant knowledge, and reason over distributed knowledge bases.
  - The field spans both **people-centric** approaches (communities of practice, mentoring, storytelling) and **technology-centric** approaches (knowledge bases, semantic repositories, expert systems).

- ### Key Components
  - **Knowledge Capture**
    - Converting [[Tacit Knowledge]] (know-how, expertise) into [[Explicit Knowledge]] (documented procedures, case studies) is the foundational challenge.
    - Techniques include structured interviews, after-action reviews, [[Lessons Learned]] databases, and AI-assisted transcription.
  - **Knowledge Organisation**
    - [[Taxonomy]] structures organise knowledge into navigable hierarchies.
    - [[Ontology|Ontologies]] provide richer semantic relationships between concepts, enabling reasoning and inference.
    - [[Metadata]] tagging ensures discoverability across heterogeneous repositories.
    - [[Information Architecture]] governs how knowledge assets are structured and navigated.
  - **Knowledge Repositories**
    - Enterprise wikis, intranets, content management systems, and [[Knowledge Graph]] platforms serve as primary stores.
    - Modern implementations use [[Semantic Search]] and vector embeddings to retrieve knowledge by meaning rather than keyword.
    - [[Enterprise Search]] federates across multiple repositories to present a unified knowledge surface.
  - **Knowledge Sharing**
    - [[Community of Practice]] networks (Wenger's model) facilitate peer-to-peer knowledge exchange across organisational boundaries.
    - Social collaboration platforms, discussion forums, and expert directories lower the barrier to knowledge finding.
    - [[Distributed Collaboration]] tooling (wikis, shared workspaces, asynchronous video) extends sharing across geographies and time zones.
  - **Knowledge Application**
    - [[Decision Support System|Decision Support Systems]] integrate KM outputs to guide operational choices.
    - [[Retrieval-Augmented Generation]] pipelines inject contextually retrieved knowledge into [[Large Language Model]] reasoning, grounding outputs in organisational facts.
    - Expert systems and [[Knowledge Representation]] formalisms enable automated inference from captured knowledge.
  - **Knowledge Governance**
    - [[Data Governance]] frameworks establish ownership, quality standards, access control, and lifecycle policies for knowledge assets.
    - [[Knowledge Audit]] processes identify gaps, redundancies, and obsolete content.
    - Version control and provenance tracking maintain trustworthiness of living knowledge bases.

- ### Mechanisms and Frameworks
  - **SECI Model** (Nonaka & Takeuchi, 1995): four modes of knowledge conversion — Socialisation (tacit→tacit), Externalisation (tacit→explicit), Combination (explicit→explicit), Internalisation (explicit→tacit).
  - **DIKW Hierarchy**: data → information → knowledge → wisdom — frames KM's scope from raw signals to actionable understanding.
  - **Cynefin Framework** (Snowden): sense-making model distinguishing simple, complicated, complex, and chaotic knowledge contexts, guiding appropriate KM responses.
  - **Communities of Practice** (Wenger): voluntary networks of practitioners who share domain expertise through ongoing interaction.
  - **Second-Generation KM**: shift from document-centric repositories to context-aware, socially mediated, and AI-augmented knowledge systems.
  - **Knowledge Graphs** as infrastructure: entities, relationships, and attributes stored as RDF triples or property graphs, queryable via SPARQL or Cypher, enabling machine-readable organisational memory.

- ### Applications and Use Cases
  - **Enterprise Knowledge Bases**: technology companies (e.g. Confluence, SharePoint, Notion) serve as KM platforms enabling teams to document and retrieve institutional knowledge.
  - **Customer Support**: AI-powered KM systems retrieve relevant articles, procedures, and precedents to resolve support cases faster.
  - **Research & Development**: pharmaceutical, aerospace, and defence organisations use KM to capture experimental results, patent landscapes, and design rationale.
  - **Healthcare**: clinical knowledge management systems surface evidence-based guidelines, drug interactions, and diagnostic protocols at point of care.
  - **Legal Sector**: knowledge management enables law firms to retrieve precedents, contracts, and regulatory interpretations efficiently.
  - **AI Agent Memory**: autonomous agents use KM architectures — vector databases, knowledge graphs, episodic memory stores — to persist and retrieve context across sessions.
  - **Open Source Communities**: wikis, issue trackers, and documentation systems manage distributed contributor knowledge across global teams.
  - **Government and Public Sector**: policy knowledge bases, lessons-learned registers, and inter-agency knowledge sharing improve public service delivery.

- ### Relationships
  - partOf:: [[Information Management]]
  - uses:: [[Knowledge Graph]]
  - uses:: [[Knowledge Representation]]
  - uses:: [[Ontology]]
  - uses:: [[Taxonomy]]
  - uses:: [[Semantic Search]]
  - enables:: [[Retrieval-Augmented Generation]]
  - enables:: [[Organisational Learning]]
  - enables:: [[Decision Support System]]
  - requires:: [[Metadata]]
  - requires:: [[Data Governance]]
  - contrastsWith:: [[Data Management]]
  - contrastsWith:: [[Document Management]]
  - bridges-to:: [[Semantic Web Linked Data Standard]]
  - bridges-to:: [[Large Language Model]]
  - bridges-to:: [[Distributed Collaboration]]
  - relatedTo:: [[Information Architecture]]
  - relatedTo:: [[Enterprise Search]]
  - relatedTo:: [[Natural Language Processing]]
  - relatedTo:: [[Community of Practice]]
  - relatedTo:: [[Tacit Knowledge]]
  - relatedTo:: [[Explicit Knowledge]]

- ### Standards and Context
  - **ISO 30401:2018** — Knowledge Management Systems: Requirements. The primary international standard defining KM system requirements and good practice for organisations.
  - **ISO/IEC 11179** — Metadata Registries: underpins the metadata standards that enable KM systems to interoperate through shared controlled vocabularies.
  - **W3C Semantic Web Stack** — [[RDF]], [[OWL]], [[SPARQL]], and [[SKOS]] provide the technical substrate for machine-readable knowledge representation and sharing.
  - **SKOS (Simple Knowledge Organization System)** — W3C recommendation for representing controlled vocabularies, thesauri, and taxonomies as linked data.
  - **Dublin Core Metadata Initiative (DCMI)** — lightweight metadata vocabulary widely used in document-level KM annotations.
  - **Knowledge Management Institute (KMI)** and **APQC** (American Productivity and Quality Center) provide maturity models and benchmarking frameworks for KM programmes.
  - **OpenCyc / Cyc** and **DBpedia** represent large-scale public knowledge bases instantiating KM at web scale.
  - Enterprise KM platforms: Confluence (Atlassian), SharePoint (Microsoft), Notion, Guru, Glean, and open-source alternatives (XWiki, DokuWiki).

- ### Semantic Classification
  - owl-class:: data:KnowledgeManagement
  - owl-role:: concept
  - domain-remap:: spatial-computing → data (KM is fundamentally an information/data discipline, not specific to spatial computing)

- ### Provenance
  - sources:: ISO 30401:2018; Nonaka & Takeuchi (1995) "The Knowledge-Creating Company"; Davenport & Prusak (1998) "Working Knowledge"; W3C SKOS Recommendation; APQC KM Frameworks
  - updated:: 2026-06-13
  - migration-date:: 2026-04-26T00:00:00Z
