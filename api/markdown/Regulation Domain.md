public:: true

# Regulation Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a129ce1bd2f35ab665b5611f523ceeb3d78934bd031330d85aa15d655e6ae9a1",
  "@type": "Page",
  "vc:slug": "regulation-domain",
  "title": "Regulation Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:statutory-framework",
      "vc:label": "Statutory Framework"
    },
    {
      "@id": "urn:visionflow:linked:standards",
      "vc:label": "Standards"
    },
    {
      "@id": "urn:visionflow:linked:supervisory-regime",
      "vc:label": "Supervisory Regime"
    },
    {
      "@id": "urn:visionflow:linked:enforcement",
      "vc:label": "Enforcement"
    },
    {
      "@id": "urn:visionflow:linked:rule-making",
      "vc:label": "Rule-Making"
    },
    {
      "@id": "urn:visionflow:linked:legal-tech-domain",
      "vc:label": "Legal Tech Domain"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-representation-domain",
      "vc:label": "Knowledge Representation Domain"
    },
    {
      "@id": "urn:visionflow:linked:logic",
      "vc:label": "Logic"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-frameworks",
      "vc:label": "Regulatory Frameworks"
    },
    {
      "@id": "urn:visionflow:linked:supervision",
      "vc:label": "Supervision"
    },
    {
      "@id": "urn:visionflow:linked:obligation-definition",
      "vc:label": "Obligation Definition"
    },
    {
      "@id": "urn:visionflow:linked:compliance-domain",
      "vc:label": "Compliance Domain"
    },
    {
      "@id": "urn:visionflow:linked:ai-governance-domain",
      "vc:label": "AI Governance Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-42001-2023",
      "vc:label": "ISO/IEC 42001:2023"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Regulation Domain"
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
  "@id": "urn:ngm:class:regulation-domain",
  "@type": "Class",
  "label": "Regulation Domain",
  "definition": "The Regulation Domain covers the creation, interpretation and enforcement of rules that govern conduct across sectors. Its scope includes statutory frameworks, standards, supervisory regimes and enforcement mechanisms. It is a top-level subject classification that supplies obligations to many other domains. The boundary excludes the demonstration of adherence to those rules, which belongs to the Compliance Domain.",
  "domain": "governance",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Infra Legal And Regulatory"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:statutory-framework",
        "label": "Statutory Framework"
      },
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      },
      {
        "@id": "urn:ngm:class:supervisory-regime",
        "label": "Supervisory Regime"
      },
      {
        "@id": "urn:ngm:class:enforcement",
        "label": "Enforcement"
      },
      {
        "@id": "urn:ngm:class:rule-making",
        "label": "Rule-Making"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:legal-tech-domain",
        "label": "Legal Tech Domain"
      },
      {
        "@id": "urn:ngm:class:knowledge-representation-domain",
        "label": "Knowledge Representation Domain"
      },
      {
        "@id": "urn:ngm:class:logic",
        "label": "Logic"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-frameworks",
        "label": "Regulatory Frameworks"
      },
      {
        "@id": "urn:ngm:class:supervision",
        "label": "Supervision"
      },
      {
        "@id": "urn:ngm:class:obligation-definition",
        "label": "Obligation Definition"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:regulation-domain:80eb450f8526",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a129ce1bd2f35ab665b5611f523ceeb3d78934bd031330d85aa15d655e6ae9a1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Statutory Framework]]",
      "resolved": "urn:visionflow:linked:statutory-framework",
      "kind": "StubLink"
    },
    {
      "raw": "[[Standards]]",
      "resolved": "urn:visionflow:linked:standards",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Supervisory Regime]]",
      "resolved": "urn:visionflow:linked:supervisory-regime",
      "kind": "StubLink"
    },
    {
      "raw": "[[Enforcement]]",
      "resolved": "urn:visionflow:linked:enforcement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Rule-Making]]",
      "resolved": "urn:visionflow:linked:rule-making",
      "kind": "StubLink"
    },
    {
      "raw": "[[Legal Tech Domain]]",
      "resolved": "urn:visionflow:linked:legal-tech-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Representation Domain]]",
      "resolved": "urn:visionflow:linked:knowledge-representation-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Logic]]",
      "resolved": "urn:visionflow:linked:logic",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regulatory Frameworks]]",
      "resolved": "urn:visionflow:linked:regulatory-frameworks",
      "kind": "StubLink"
    },
    {
      "raw": "[[Supervision]]",
      "resolved": "urn:visionflow:linked:supervision",
      "kind": "StubLink"
    },
    {
      "raw": "[[Obligation Definition]]",
      "resolved": "urn:visionflow:linked:obligation-definition",
      "kind": "StubLink"
    },
    {
      "raw": "[[Compliance Domain]]",
      "resolved": "urn:visionflow:linked:compliance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Governance Domain]]",
      "resolved": "urn:visionflow:linked:ai-governance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISO/IEC 42001:2023]]",
      "resolved": "urn:visionflow:linked:iso-iec-42001-2023",
      "kind": "StubLink"
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
  - The Regulation Domain covers the creation, interpretation and enforcement of rules that govern conduct across sectors. Its scope includes statutory frameworks, standards, supervisory regimes and enforcement mechanisms. It is a top-level subject classification that supplies obligations to many other domains. The boundary excludes the demonstration of adherence to those rules, which belongs to the Compliance Domain.

- ### Semantic Classification
  - owl-class:: reg:RegulationDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Compliance Domain]], [[AI Governance Domain]], [[Legal Tech Domain]]
  - has-part:: [[Statutory Framework]], [[Standards]], [[Supervisory Regime]], [[Enforcement]], [[Rule-Making]]
  - requires:: [[Legal Tech Domain]], [[Knowledge Representation Domain]], [[Logic]]
  - enables:: [[Regulatory Frameworks]], [[Supervision]], [[Obligation Definition]]

- ### Content
  - The Regulation Domain addresses how rules governing conduct are made, interpreted and enforced by public and standards bodies. Its scope covers statutory frameworks, technical and industry standards, supervisory regimes that oversee regulated entities and the enforcement actions that follow breach. The boundary is rule-making and oversight; showing that an entity complies is the work of the Compliance Domain.
  - Member concepts include the Statutory Framework, Standards, the Supervisory Regime, Enforcement and Rule-Making. These draw on the Legal Tech Domain for analysis of legal texts, the Knowledge Representation Domain for encoding rules and logic for consistent interpretation.
  - The domain bridges to the Compliance Domain, which it supplies with obligations, to the AI Governance Domain through emerging AI-specific regulation, and to the Legal Tech Domain through shared legal sources. It enables regulatory frameworks, supervision and the definition of obligations.

- ### Provenance
  - sources:: [[ISO/IEC 42001:2023]]
  - migration-date:: 2026-05-29T00:00:00Z
