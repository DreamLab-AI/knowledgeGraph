schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#AiDocumentationStandards
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:ai-documentation-standards
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
      "@id": "urn:visionflow:owl:class:aiethics-domain",
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.95"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-7736d317b820"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2025-10-29T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "artificial-intelligence"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#AiDocumentationStandards"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0392"
    },
    {
      "vc:key": "maturity",
      "vc:value": "mature"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "AI Documentation Standards"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:ai-documentation-standards"
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:ai-documentation-standards"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:df2916f682f73afa86cc420193328ddb65ca3144592d1897ca0ac4e952ed7c4f@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:ai-documentation-standards",
  "@type": "OntologyClass",
  "label": "AI Documentation Standards",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:ai-governance",
      "vc:label": "AI Governance"
    }
  ],
  "vc:sourceDomain": "artificial-intelligence",
  "vc:status": "draft",
  "vc:maturity": "mature",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:df2916f682f73afa86cc420193328ddb65ca3144592d1897ca0ac4e952ed7c4f"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:df2916f682f73afa86cc420193328ddb65ca3144592d1897ca0ac4e952ed7c4f@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "AI Documentation Standards are structured frameworks and templates for comprehensively documenting AI systems, datasets, and models to ensure transparency, accountability, reproducibility, and informed stakeholder decision-making throughout the AI lifecycle. These standards specify required information about system characteristics, development processes, performance metrics, limitations, intended uses, and governance practices, enabling auditing, compliance verification, and risk assessment. Key documentation artifacts include Model Cards (introduced by Mitchell et al. 2019) documenting model details, intended use, performance metrics across demographic groups, ethical considerations, and caveats; Datasheets for Datasets (Gebru et al. 2018) describing data composition, collection processes, preprocessing steps, labeling procedures, intended uses, and limitations; System Cards documenting end-to-end AI systems including architecture, training procedures, deployment context, monitoring approaches, and governance structures; and FactSheets (IBM) providing comprehensive transparency information for AI services. Documentation standards address critical transparency needs including algor",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.95",
    "@type": "xsd:float"
  },
  "vc:bridgesTo": [
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
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
      "resolved": "urn:visionflow:owl:class:aiethics-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConceptualLayer]]",
      "resolved": "urn:visionflow:owl:class:conceptual-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[EU AI Act]]",
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:df2916f682f73afa86cc420193328ddb65ca3144592d1897ca0ac4e952ed7c4f@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  - sources:: [[Model Cards (Mitchell et al.)]], [[Datasheets (Gebru et al.)]], [[EU AI Act]], [[ISO/IEC 23053]]
  - migration-date:: 2026-04-26T00:00:00Z
