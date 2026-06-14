public:: true

# Knowledge Management System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:09bef2106ac4fc3043b770e0accc7711abfd68f1839333bb5db095c3ab406657",
  "@type": "Page",
  "vc:slug": "knowledge-management-system",
  "title": "Knowledge Management System",
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
      "vc:value": "MV-9643"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Knowledge Management System"
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
  "@id": "urn:ngm:class:knowledge-management-system",
  "@type": "Class",
  "label": "Knowledge Management System",
  "definition": "A Knowledge Management System (KMS) is an integrated software platform that captures, organises, stores, retrieves, and distributes explicit and tacit knowledge across an organisation or community of practice. It combines document repositories, knowledge graphs, semantic search, ontologies, and collaborative authoring tools to make institutional knowledge discoverable, reusable, and actionable. A KMS supports the full knowledge lifecycle — from creation and curation through to sharing, governance, and retirement — enabling informed decision-making and reducing knowledge silos. Modern systems layer machine learning and natural language processing atop structured metadata to surface contextually relevant information at the point of need.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:knowledge-base", "label": "Knowledge Base"},
      {"@id": "urn:ngm:class:document-repository", "label": "Document Repository"},
      {"@id": "urn:ngm:class:semantic-search", "label": "Semantic Search"},
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:metadata-management", "label": "Metadata Management"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:information-retrieval", "label": "Information Retrieval"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:knowledge-sharing", "label": "Knowledge Sharing"},
      {"@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation"},
      {"@id": "urn:ngm:class:organisational-learning", "label": "Organisational Learning"},
      {"@id": "urn:ngm:class:decision-support-system", "label": "Decision Support System"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"},
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"},
      {"@id": "urn:ngm:class:taxonomy", "label": "Taxonomy"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:collaborative-authoring", "label": "Collaborative Authoring"},
      {"@id": "urn:ngm:class:content-management-system", "label": "Content Management System"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:database-management-system", "label": "Database Management System"},
      {"@id": "urn:ngm:class:document-management-system", "label": "Document Management System"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:enterprise-architecture", "label": "Enterprise Architecture"},
      {"@id": "urn:ngm:class:learning-management-system", "label": "Learning Management System"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"},
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:enterprise-knowledge-platform", "label": "Enterprise Knowledge Platform"},
    {"@id": "urn:ngm:class:knowledge-portal", "label": "Knowledge Portal"}
  ],
  "quality": 0.73,
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
  "@id": "urn:visionflow:annotation:link-resolutions:knowledge-management-system:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:09bef2106ac4fc3043b770e0accc7711abfd68f1839333bb5db095c3ab406657"
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
  - A Knowledge Management System (KMS) is an integrated software platform that captures, organises, stores, retrieves, and distributes explicit and tacit knowledge across an organisation or community of practice. By combining [[Knowledge Base]] repositories, [[Knowledge Graph]] structures, [[Semantic Search]], [[Ontology]] models, and collaborative authoring tools, a KMS makes institutional knowledge discoverable and actionable throughout its full lifecycle. Modern KMS platforms bridge traditional [[Information Retrieval]] pipelines with [[Natural Language Processing]] and [[Retrieval-Augmented Generation]] to surface contextually relevant information at the point of need.

- ### Overview
  - Knowledge Management Systems emerged in the 1990s as organisations recognised that intellectual capital — procedures, expertise, lessons learned, and domain models — was as strategically important as financial capital. The field formalises the distinction between **explicit knowledge** (documentable, codifiable) and **tacit knowledge** (embodied in practice and experience), with a KMS providing mechanisms to externalise, structure, and share both forms.
  - A KMS is distinguished from a generic [[Content Management System]] by its emphasis on semantic structure: knowledge items are tagged, typed, and linked through [[Taxonomy]] hierarchies and [[Ontology]] schemas rather than stored as flat documents. This semantic layer enables inferencing, faceted navigation, and graph-based recommendations.
  - The strategic value of a KMS lies in organisational resilience: reducing dependence on individual experts, accelerating onboarding, supporting [[Organisational Learning]], and enabling [[Decision Support System]] capabilities by providing structured, contextual information to decision-makers.

- ### Key Components
  - **Knowledge Repository** — the persistent store housing articles, procedures, case histories, and multimedia assets; may be backed by a [[Document Repository]] or graph database.
  - **[[Knowledge Graph]]** — a graph-structured representation of entities, relationships, and facts that supports inference and multi-hop queries beyond simple full-text search.
  - **[[Ontology]] / [[Taxonomy]]** — formal schemas defining the types, properties, and relations of knowledge items; enables semantic consistency, controlled vocabularies, and cross-system interoperability.
  - **[[Semantic Search]]** — query mechanisms that interpret intent rather than keyword match, typically combining vector embeddings with symbolic metadata filters.
  - **[[Metadata Management]]** — systematic tagging of creation date, author, domain, version, expiry, and access rights to support governance and discovery.
  - **Contribution & Curation Workflow** — authoring, review, approval, and retirement pipelines ensuring knowledge quality; often integrated with [[Collaborative Authoring]] tools.
  - **[[Access Control]]** — role-based permissions that restrict sensitive knowledge items while maximising openness for appropriate audiences.
  - **Analytics & Usage Metrics** — dashboards surfacing knowledge gaps, popular content, stale articles, and expert identification.

- ### Mechanisms
  - **Knowledge Capture** — ingestion pipelines that extract structured knowledge from emails, meeting transcripts, project documentation, support tickets, and expert interviews; increasingly automated via [[Natural Language Processing]].
  - **Knowledge Codification** — conversion of tacit expertise into explicit artefacts through templates, structured wikis, and ontology-driven forms.
  - **Knowledge Retrieval** — combination of keyword search, faceted filtering, semantic nearest-neighbour lookup (vector search), and graph traversal.
  - **[[Retrieval-Augmented Generation]] (RAG)** — emerging integration pattern where a [[Large Language Model]] generates responses grounded in KMS content, dramatically improving answer quality and traceability.
  - **Knowledge Maintenance** — expiry policies, subject-matter-expert review cycles, and automated staleness detection prevent knowledge rot.
  - **Recommendation & Discovery** — graph-based collaborative filtering surfaces related items based on usage patterns, role profiles, and ontological proximity.

- ### Applications & Use Cases
  - **Enterprise IT Operations** — documenting runbooks, incident postmortems, and system architectures so on-call engineers can resolve issues independently of individual colleagues.
  - **Customer Support** — centralising product FAQs, troubleshooting trees, and resolution histories so agents resolve tickets faster with consistent answers.
  - **Research & Development** — capturing experimental protocols, negative results, and literature syntheses to prevent duplication and accelerate discovery.
  - **Legal & Compliance** — maintaining current regulatory guidance, policy interpretations, and precedent documents with version control and audit trails.
  - **Healthcare** — clinical knowledge bases embedding [[Clinical Decision Support]] logic, drug interaction databases, and evidence-based treatment pathways.
  - **Software Engineering** — architectural decision records (ADRs), API documentation wikis, and internal developer portals — exemplified by platforms such as Confluence, Notion, and Backstage.
  - **AI-Augmented Knowledge Work** — feeding curated KMS content as retrieval context to [[Large Language Model]] assistants, creating grounded, verifiable AI responses aligned with organisational policy.

- ### Relationships
  - hasPart:: [[Knowledge Base]]
  - hasPart:: [[Document Repository]]
  - hasPart:: [[Semantic Search]]
  - hasPart:: [[Ontology]]
  - uses:: [[Knowledge Graph]]
  - uses:: [[Metadata Management]]
  - uses:: [[Natural Language Processing]]
  - uses:: [[Information Retrieval]]
  - enables:: [[Knowledge Sharing]]
  - enables:: [[Knowledge Representation]]
  - enables:: [[Organisational Learning]]
  - enables:: [[Decision Support System]]
  - requires:: [[Data Governance]]
  - requires:: [[Access Control]]
  - requires:: [[Taxonomy]]
  - supports:: [[Collaborative Authoring]]
  - supports:: [[Content Management System]]
  - contrastsWith:: [[Database Management System]]
  - contrastsWith:: [[Document Management System]]
  - relatedTo:: [[Enterprise Architecture]]
  - relatedTo:: [[Learning Management System]]
  - bridges-to:: [[Large Language Model]]
  - bridges-to:: [[Retrieval-Augmented Generation]]

- ### Standards & Context
  - **ISO 30401:2018** — the international standard for Knowledge Management Systems, specifying requirements for a KMS within an organisation and providing a framework aligned with ISO 9001.
  - **TOGAF** — The Open Group Architecture Framework addresses knowledge management as part of enterprise architecture governance, defining information asset catalogues and architecture repositories.
  - **Dublin Core & Schema.org** — widely used metadata vocabularies for describing knowledge assets; underpin interoperability between KMS platforms and the broader web of data.
  - **SPARQL & OWL2** — W3C standards enabling semantic querying and reasoning over ontology-backed knowledge repositories; used in enterprise-grade graph KMS deployments.
  - **SKOS (Simple Knowledge Organisation System)** — W3C standard for encoding thesauri, taxonomies, and controlled vocabularies in RDF, directly applicable to KMS taxonomic layers.
  - **OpenAPI / AsyncAPI** — used to expose KMS content programmatically so that downstream applications, [[Decision Support System]] tools, and RAG pipelines can consume structured knowledge.
  - Key vendors include Confluence (Atlassian), SharePoint (Microsoft), Guru, Notion, Bloomfire, and open-source platforms such as Obsidian, Logseq, and DokuWiki.

- ### Provenance
  - sources:: ISO 30401:2018; Davenport & Prusak "Working Knowledge" (1998); Nonaka & Takeuchi "The Knowledge-Creating Company" (1995); TOGAF 10th Edition; W3C SKOS Primer
  - updated:: 2026-06-13
