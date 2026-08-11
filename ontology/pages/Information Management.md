public:: true

# Information Management
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bb5669a613a39386844ec7453bb3b348e219def2cba27144051ca2003e38f8ad",
  "@type": "Page",
  "vc:slug": "information-management",
  "title": "Information Management",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:data-management", "vc:label": "Data Management"},
    {"@id": "urn:visionflow:linked:knowledge-management", "vc:label": "Knowledge Management"},
    {"@id": "urn:visionflow:linked:records-management", "vc:label": "Records Management"},
    {"@id": "urn:visionflow:linked:information-governance", "vc:label": "Information Governance"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:information-management",
  "@type": "Class",
  "label": "Information Management",
  "definition": "The organisational discipline of acquiring, organising, storing, curating, securing, distributing, and disposing of information across its lifecycle so that the right information reaches the right people, in the right form, at the right time. It spans structured data and unstructured content alike, sitting between data management (which stewards raw data assets) and knowledge management (which cultivates human understanding), and is governed by policies for quality, retention, access, and compliance.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:data-management",
    "label": "Data Management"
  },
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:records-management", "label": "Records Management"},
      {"@id": "urn:ngm:class:content-curation", "label": "Content Curation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:metadata", "label": "Metadata"},
      {"@id": "urn:ngm:class:information-architecture", "label": "Information Architecture"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:knowledge-management", "label": "Knowledge Management"},
      {"@id": "urn:ngm:class:information-governance", "label": "Information Governance"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The organisational discipline of acquiring, organising, storing, curating, securing, distributing, and disposing of information across its lifecycle so that the right information reaches the right people, in the right form, at the right time. It spans structured data and unstructured content alike, sitting between data management (which stewards raw data assets) and knowledge management (which cultivates human understanding), and is governed by policies for quality, retention, access, and compliance."

- ### Semantic Classification
  - owl-class:: data:InformationManagement
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Data Management]]
  - has-part:: [[Records Management]]
  - has-part:: [[Content Curation]]
  - related-to:: [[Knowledge Management]]

- ### Content

  ## Definition

  **Information management** is the discipline concerned with the whole lifecycle of information in an organisation: planning what information is needed, acquiring or creating it, organising and describing it so it can be found, storing and protecting it, distributing it to those entitled to use it, and eventually archiving or destroying it. Its objective is usually stated as a fitness condition — the right information, to the right people, at the right time, in a usable form, at acceptable cost and risk.

  The discipline is conventionally positioned on the data–information–knowledge continuum. [[Data Management]] stewards raw, structured data assets (databases, pipelines, quality, master data); information management adds context, structure, and lifecycle control to turn data and documents into usable information products; [[Knowledge Management]] goes further, cultivating the human expertise and organisational learning that information supports. In practice the boundaries blur, and this graph records information management both as a specialisation of data management and as the parent practice of activities such as [[Content Curation]] and [[Records Management]].

  Core instruments of the discipline include [[Metadata]] standards and cataloguing, taxonomy and [[Information Architecture]] for organisation and findability, retention schedules and disposition rules, access-control and classification policies, and quality management. [[Information Governance]] supplies the accountability layer — who decides, under what policies, with what compliance obligations (data protection, freedom of information, sectoral record-keeping rules).

  ## Current Landscape

  - **Scale problem**: the overwhelming majority of organisational information is unstructured (documents, email, chat, media), making classification, search, and lifecycle enforcement the discipline's hardest operational problems.
  - **Platform consolidation**: enterprise content services, document management, and collaboration suites (Microsoft Purview, Google Workspace, OpenText, Box) now bundle retention, labelling, records management, and eDiscovery into everyday work tools. Microsoft's Purview platform exemplifies the trend, unifying Data Lifecycle Management, Records Management, Information Protection, and a cross-estate Data Map/Unified Catalog spanning Microsoft 365, Azure, Fabric, and third-party clouds — with Data Loss Prevention on structured OneLake data reaching general availability in September 2025.
  - **AI inflection**: automatic classification, entity extraction, semantic search, and retrieval-augmented generation are reshaping findability — while simultaneously raising the stakes of information quality, provenance, and access control, since AI systems amplify whatever the estate contains. A distinct sub-discipline of AI information governance emerged through 2025: Purview's Data Security Posture Management for AI (launched January 2025) monitors prompts and AI outputs for sensitive data, and retention policies now extend to AI-generated interactions themselves.
  - **Regulatory pressure**: UK GDPR and data-protection law, sectoral record-keeping rules, and freedom-of-information duties make defensible retention and disposal a legal requirement, not housekeeping. AI regulation is now layered on top: compliance tooling ships pre-built assessments for the EU AI Act, ISO/IEC 42001:2023 (AI management systems), ISO/IEC 23894:2023, and the NIST AI Risk Management Framework 1.0.
  - **Professional bodies and frameworks**: CILIP and ARMA/IG frameworks, ISO 15489 (records), ISO 30300 series, and DAMA-DMBOK's overlapping treatment of content and data management.

  **Sources**:
  - https://www.microsoft.com/en-us/security/blog/2025/01/27/fast-track-generative-ai-security-with-microsoft-purview/
  - https://www.microsoft.com/en-us/security/blog/2025/09/16/microsoft-purview-innovations-for-your-fabric-data-unify-data-security-and-governance-for-the-ai-era/
  - https://learn.microsoft.com/en-us/purview/purview
  - https://learn.microsoft.com/en-us/purview/data-governance-solution

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
