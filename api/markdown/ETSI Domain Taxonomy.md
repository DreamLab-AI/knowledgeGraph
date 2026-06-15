public:: true

# etsi domain taxonomy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8a4313c0d8a7a59ac4839449416255bc5dd6bdf149014fcaee2244361c1ec17e",
  "@type": "Page",
  "vc:slug": "etsi-domain-taxonomy",
  "title": "etsi domain taxonomy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:etsi-domain-taxonomy",
  "@type": "Class",
  "label": "ETSI Domain Taxonomy",
  "definition": "The ETSI Domain Taxonomy is a hierarchical classification framework produced by the European Telecommunications Standards Institute for systematically organising AI-related technical specifications, standards, and work items across application domains such as transportation, healthcare, telecommunications, and public safety. It provides a controlled vocabulary and structured ontology enabling consistent referencing of AI standards across ETSI technical committees and supports cross-domain applicability analysis. The taxonomy underpins ETSI's AI standardisation roadmap and aligns with CEN-CENELEC and ISO/IEC JTC 1/SC 42 standardisation activities. As a living classification instrument, it maps broad application sectors down to specific sub-domains, allowing AI systems and standards to receive multiple domain affiliations and enabling gap analysis across the European standardisation ecosystem.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:etsi",
        "label": "ETSI"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:ai-application",
        "label": "AI Application Domain"
      },
      {
        "@id": "urn:ngm:class:controlled-vocabulary",
        "label": "Controlled Vocabulary"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:semantic-web-linked-data-standard",
        "label": "Semantic Web"
      },
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-regulation",
        "label": "AI Regulation"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:eu-ai-act-regulatory-instrument",
        "label": "EU AI Act"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:etsi",
        "label": "ETSI"
      },
      {
        "@id": "urn:ngm:class:iso-iec-jtc1-sc42",
        "label": "ISO/IEC JTC 1/SC 42"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:technical-committee",
        "label": "Technical Committee"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:conformity-assessment",
        "label": "AI Conformity Assessment"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-governance-and-ethics",
        "label": "AI Governance and Ethics"
      },
      {
        "@id": "urn:ngm:class:cen-cenelec",
        "label": "CEN-CENELEC"
      },
      {
        "@id": "urn:ngm:class:ieee-standards",
        "label": "IEEE Standards"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:iso-iec-42001",
        "label": "ISO IEC 42001"
      },
      {
        "@id": "urn:ngm:class:nist-ai-rmf",
        "label": "NIST AI RMF"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:machine-learning-operations",
        "label": "Machine Learning Operations"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:etsi-ai-domain-classification",
      "label": "ETSI AI Domain Classification"
    }
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
  - The **ETSI Domain Taxonomy** is a hierarchical classification framework produced by the [[European Telecommunications Standards Institute]] ([[ETSI]]) for systematically organising AI-related technical specifications, standards, and work items across application domains. It maps broad sectors — including transportation, healthcare, telecommunications, and public safety — down to specific sub-domain application categories, enabling standards to receive multiple domain affiliations and supporting comprehensive gap analysis. The taxonomy provides a [[Controlled Vocabulary]] and structural [[Ontology]] underpinning ETSI's [[AI Standardisation]] roadmap and facilitating coherence with [[CEN-CENELEC]] and [[ISO/IEC JTC 1/SC 42]] activities across the European and global standardisation landscape.

- ### Overview
  - The ETSI Domain Taxonomy emerged from ETSI's need to provide a coherent navigational map of [[AI Application Domain]]s to guide its technical committees in identifying gaps and overlaps in existing standardisation coverage.
  - As a living classification instrument, it is maintained and updated as new AI application domains mature and new ETSI working groups are established.
  - Unlike a static taxonomy, it is designed to interface with [[Knowledge Representation]] tools and [[Semantic Web]] technologies, making ETSI standardisation artefacts machine-readable and interoperable with regulatory information systems such as the [[EU AI Act]] compliance infrastructure.
  - The taxonomy's primary purpose is threefold:
    - Enabling consistent cross-referencing of AI standards across ETSI's portfolio of technical committees.
    - Supporting [[Standards Gap Analysis]] to identify where new standardisation work is needed.
    - Providing a shared vocabulary for [[Interoperability]] between ETSI outputs and those of other bodies including [[ISO/IEC JTC 1/SC 42]], [[CEN-CENELEC]], and [[IEEE Standards]].

- ### Key Components
  - #### Domain Classification Hierarchy
    - The taxonomy is organised hierarchically, from high-level application sectors down to specific sub-domain categories.
    - Top-level sectors include: transportation, healthcare, manufacturing, telecommunications, public safety, energy, finance, agriculture, and environment.
    - Each sector is decomposed into specific application categories (e.g., transportation → autonomous vehicles → perception systems).
    - Multi-domain tagging is explicitly supported, reflecting the cross-cutting nature of most AI systems.
  - #### Controlled Vocabulary
    - A [[Controlled Vocabulary]] provides canonical term definitions for each domain entry, ensuring consistent use across ETSI technical committee outputs.
    - Terms are aligned where possible with ISO/IEC and ITU-T vocabulary to reduce definitional conflicts across standards bodies.
    - The vocabulary is structured to accommodate both narrow application-specific terms and broad cross-domain descriptors.
  - #### Standards Mapping Layer
    - Each domain entry is linked to relevant ETSI technical standards, [[ETSI Group Reports]], and external standards from bodies such as [[ISO/IEC JTC 1/SC 42]].
    - This cross-referencing enables users to navigate from a domain of interest to the full applicable standardisation landscape.
    - The mapping is particularly useful for manufacturers seeking to identify which [[Harmonised Standards]] apply to their AI system under the [[EU AI Act]].
  - #### Governance and Maintenance
    - The taxonomy is governed through [[ETSI ISG AI]] (Industry Specification Group on Artificial Intelligence) with input from [[Technical Committee]]s.
    - Update cycles are tied to the broader ETSI work programme and triggered by new AI Act implementing acts or emerging technical domains.
    - Alignment activities with CEN-CENELEC ensure consistency across the European standards ecosystem.

- ### Applications and Use Cases
  - #### EU AI Act Compliance Navigation
    - Manufacturers and notified bodies use the taxonomy to identify which harmonised standards apply to a given AI system by its application domain classification.
    - Enables a structured mapping from [[AI Risk Classification]] categories in the EU AI Act to applicable technical standards.
    - Supports [[AI Conformity Assessment]] workflows by linking domain classifications to conformity routes.
  - #### Standards Gap Analysis
    - ETSI technical committees use the taxonomy to systematically identify application domains lacking adequate standardisation coverage.
    - Outputs feed directly into the ETSI work programme, prioritising new standards projects.
    - Comparable gap analysis is coordinated with [[CEN-CENELEC]] via the joint AI standards working group.
  - #### Cross-Organisational Alignment
    - The taxonomy supports alignment between ETSI outputs and those of [[ISO/IEC JTC 1/SC 42]], [[IEEE Standards]], and national standards bodies.
    - Enables the [[European AI Standards Ecosystem]] to present a coherent front to international standardisation activities.
  - #### Machine-Readable Regulatory Infrastructure
    - By interfacing with [[Semantic Web]] and [[Knowledge Representation]] tools, the taxonomy supports machine-readable regulatory information systems.
    - Enables automated cross-referencing between standards databases and regulatory catalogues, reducing compliance search overhead for deployers of AI systems.
    - Feeds into [[Data Governance]] and [[Machine Learning Operations]] platforms that require standards traceability at domain level.
  - #### Research and Policy Analysis
    - Policy analysts use the taxonomy to map the standardisation landscape and identify regulatory gaps.
    - Researchers use it to contextualise AI system evaluations within the appropriate domain standards frameworks.

- ### Relationships
  - partOf:: [[ETSI]]
  - partOf:: [[European AI Standards Ecosystem]]
  - hasPart:: [[AI Application Domain]]
  - hasPart:: [[Controlled Vocabulary]]
  - hasPart:: [[Domain Classification Hierarchy]]
  - uses:: [[Ontology]]
  - uses:: [[Semantic Web]]
  - uses:: [[Knowledge Representation]]
  - supports:: [[AI Regulation]]
  - supports:: [[Interoperability]]
  - supports:: [[Harmonised Standards]]
  - supports:: [[EU AI Act]]
  - standardizedBy:: [[ETSI]]
  - standardizedBy:: [[ISO/IEC JTC 1/SC 42]]
  - requires:: [[Taxonomy Governance]]
  - requires:: [[Technical Committee]]
  - enables:: [[Standards Gap Analysis]]
  - enables:: [[Cross-Domain Applicability]]
  - enables:: [[AI Conformity Assessment]]
  - relatedTo:: [[AI Governance and Ethics]]
  - relatedTo:: [[CEN-CENELEC]]
  - relatedTo:: [[IEEE Standards]]
  - relatedTo:: [[ETSI ISG AI]]
  - contrastsWith:: [[ISO/IEC 42001]]
  - contrastsWith:: [[NIST AI RMF]]
  - bridges-to:: [[Machine Learning Operations]]
  - bridges-to:: [[Data Governance]]

- ### Standards and Context
  - **ETSI ISG AI**: The primary working group responsible for AI standardisation at ETSI, which maintains the taxonomy as part of its broader AI standardisation roadmap deliverables.
  - **ETSI Group Report ETSI GR SAI**: Series of group reports on Securing Artificial Intelligence that use the domain taxonomy to scope security considerations by application domain.
  - **ISO/IEC JTC 1/SC 42**: The primary international standards committee on AI; the ETSI taxonomy aligns with SC 42's vocabulary and foundational standards (ISO/IEC 22989, ISO/IEC 42001).
  - **CEN-CENELEC JTC 21**: The joint technical committee on AI within the European standardisation system; coordinates with ETSI on the common AI standards taxonomy used for EU AI Act harmonised standards.
  - **EU AI Act (Regulation 2024/1689)**: The primary regulatory driver for the taxonomy's application domain classifications, particularly for identifying high-risk AI system categories mapped to standardisation requirements.
  - **ITU-T AI Standards**: ITU-T Focus Group on AI for Health and broader AI-related study groups use aligned domain vocabulary, and ETSI participates in ITU-T coordination activities.
  - **NIST AI RMF**: A parallel voluntary framework from NIST providing risk management guidance; the ETSI taxonomy contrastsWith this framework in that ETSI's is domain-classification-focused rather than risk-management-lifecycle-focused.

- ### Provenance
  - sources::
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
