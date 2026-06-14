public:: true

# AI Documentation Standards
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:df2916f682f73afa86cc420193328ddb65ca3144592d1897ca0ac4e952ed7c4f",
  "@type": "Page",
  "vc:slug": "ai-documentation-standards",
  "title": "AI Documentation Standards",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:datasheets-gebru-et-al",
      "vc:label": "Datasheets (Gebru et al.)"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23053",
      "vc:label": "ISO/IEC 23053"
    },
    {
      "@id": "urn:visionflow:linked:model-cards-mitchell-et-al",
      "vc:label": "Model Cards (Mitchell et al.)"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "AIEthicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:eu-ai-act",
      "vc:label": "EU AI Act"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0392"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "AI Documentation Standards"
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
  "@id": "urn:ngm:class:ai-documentation-standards",
  "@type": "Class",
  "label": "AI Documentation Standards",
  "definition": "AI Documentation Standards are structured frameworks and templates for comprehensively documenting AI systems, datasets, and models to ensure transparency, accountability, reproducibility, and informed stakeholder decision-making throughout the AI lifecycle.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:ai-documentation-standards:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:df2916f682f73afa86cc420193328ddb65ca3144592d1897ca0ac4e952ed7c4f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Datasheets (Gebru et al.)]]",
      "resolved": "urn:visionflow:linked:datasheets-gebru-et-al",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 23053]]",
      "resolved": "urn:visionflow:linked:iso-iec-23053",
      "kind": "StubLink"
    },
    {
      "raw": "[[Model Cards (Mitchell et al.)]]",
      "resolved": "urn:visionflow:linked:model-cards-mitchell-et-al",
      "kind": "StubLink"
    },
    {
      "raw": "[[AIEthicsDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConceptualLayer]]",
      "resolved": "urn:visionflow:owl:class:conceptual-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[EU AI Act Regulatory Instrument]]",
      "resolved": "urn:visionflow:owl:class:eu-ai-act",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
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
  - AI Documentation Standards are structured frameworks and templates for comprehensively documenting AI systems, datasets, and models to ensure transparency, accountability, reproducibility, and informed stakeholder decision-making throughout the AI lifecycle. These standards specify required information about system characteristics, development processes, performance metrics, limitations, intended uses, and governance practices, enabling auditing, compliance verification, and risk assessment. Key documentation artifacts include Model Cards (introduced by Mitchell et al. 2019) documenting model details, intended use, performance metrics across demographic groups, ethical considerations, and caveats; Datasheets for Datasets (Gebru et al. 2018) describing data composition, collection processes, preprocessing steps, labeling procedures, intended uses, and limitations; System Cards documenting end-to-end AI systems including architecture, training procedures, deployment context, monitoring approaches, and governance structures; and FactSheets (IBM) providing comprehensive transparency information for AI services. Documentation standards address critical transparency needs including algorithmic transparency (how the system works), performance transparency (accuracy, fairness metrics, failure modes), data transparency (training data sources, biases, gaps), and governance transparency (oversight mechanisms, accountability structures, redress procedures). Implementation requirements appear in regulations including EU AI Act Article 11 (technical documentation), GDPR Article 13-14 (information provision), and industry standards including ISO/IEC 23053 (framework for AI system accountability), IEEE P7001 (transparency of autonomous systems), and sector-specific guidance from financial services, healthcare, and public sector domains. Effective documentation is machine-readable where possible, version-controlled to track system evolution, accessible to non-technical stakeholders, and maintained continuously rather than created retrospectively.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AIDocumentationStandards
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - bridges-to:: [[Smart Contract]] (domain: bc)

- ### Content
  AI Documentation Standards — content pending enrichment.

- ### Provenance
  - sources:: [[Model Cards (Mitchell et al.)]], [[Datasheets (Gebru et al.)]], [[EU AI Act Regulatory Instrument]], [[ISO/IEC 23053]]
  - migration-date:: 2026-04-26T00:00:00Z
