public:: true

# Legal Tech Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:01c6d3c59a186104b7b9140f06ed1bd2ffdb3ff3913071e8fc6af1e0b0ab40d5",
  "@type": "Page",
  "vc:slug": "legal-tech-domain",
  "title": "Legal Tech Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:contract-analysis",
      "vc:label": "Contract Analysis"
    },
    {
      "@id": "urn:visionflow:linked:legal-research",
      "vc:label": "Legal Research"
    },
    {
      "@id": "urn:visionflow:linked:e-discovery",
      "vc:label": "E-Discovery"
    },
    {
      "@id": "urn:visionflow:linked:document-automation",
      "vc:label": "Document Automation"
    },
    {
      "@id": "urn:visionflow:linked:case-prediction",
      "vc:label": "Case Prediction"
    },
    {
      "@id": "urn:visionflow:linked:natural-language-processing-domain",
      "vc:label": "Natural Language Processing Domain"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-representation-domain",
      "vc:label": "Knowledge Representation Domain"
    },
    {
      "@id": "urn:visionflow:linked:information-retrieval-domain",
      "vc:label": "Information Retrieval Domain"
    },
    {
      "@id": "urn:visionflow:linked:contract-review",
      "vc:label": "Contract Review"
    },
    {
      "@id": "urn:visionflow:linked:compliance-checking",
      "vc:label": "Compliance Checking"
    },
    {
      "@id": "urn:visionflow:linked:legal-search",
      "vc:label": "Legal Search"
    },
    {
      "@id": "urn:visionflow:linked:compliance-domain",
      "vc:label": "Compliance Domain"
    },
    {
      "@id": "urn:visionflow:linked:regulation-domain",
      "vc:label": "Regulation Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Legal Tech Domain"
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
  "@id": "urn:ngm:class:legal-tech-domain",
  "@type": "Class",
  "label": "Legal Tech Domain",
  "definition": "The Legal Tech Domain covers the application of computational methods to legal practice and the administration of law. Its scope includes contract analysis, legal research, e-discovery and document automation. It is a top-level subject classification at the intersection of law and technology. The boundary excludes the general regulatory rule-making that applies across sectors, which belongs to the Regulation Domain.",
  "domain": "legal-tech",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:contract-analysis",
        "label": "Contract Analysis"
      },
      {
        "@id": "urn:ngm:class:legal-research",
        "label": "Legal Research"
      },
      {
        "@id": "urn:ngm:class:e-discovery",
        "label": "E-Discovery"
      },
      {
        "@id": "urn:ngm:class:document-automation",
        "label": "Document Automation"
      },
      {
        "@id": "urn:ngm:class:case-prediction",
        "label": "Case Prediction"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:natural-language-processing-domain",
        "label": "Natural Language Processing Domain"
      },
      {
        "@id": "urn:ngm:class:knowledge-representation-domain",
        "label": "Knowledge Representation Domain"
      },
      {
        "@id": "urn:ngm:class:information-retrieval-domain",
        "label": "Information Retrieval Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:contract-review",
        "label": "Contract Review"
      },
      {
        "@id": "urn:ngm:class:compliance-checking",
        "label": "Compliance Checking"
      },
      {
        "@id": "urn:ngm:class:legal-search",
        "label": "Legal Search"
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
  "@id": "urn:visionflow:annotation:link-resolutions:legal-tech-domain:af7606ca97ee",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:01c6d3c59a186104b7b9140f06ed1bd2ffdb3ff3913071e8fc6af1e0b0ab40d5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Contract Analysis]]",
      "resolved": "urn:visionflow:linked:contract-analysis",
      "kind": "StubLink"
    },
    {
      "raw": "[[Legal Research]]",
      "resolved": "urn:visionflow:linked:legal-research",
      "kind": "StubLink"
    },
    {
      "raw": "[[E-Discovery]]",
      "resolved": "urn:visionflow:linked:e-discovery",
      "kind": "StubLink"
    },
    {
      "raw": "[[Document Automation]]",
      "resolved": "urn:visionflow:linked:document-automation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Case Prediction]]",
      "resolved": "urn:visionflow:linked:case-prediction",
      "kind": "StubLink"
    },
    {
      "raw": "[[Natural Language Processing Domain]]",
      "resolved": "urn:visionflow:linked:natural-language-processing-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Representation Domain]]",
      "resolved": "urn:visionflow:linked:knowledge-representation-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Information Retrieval Domain]]",
      "resolved": "urn:visionflow:linked:information-retrieval-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Contract Review]]",
      "resolved": "urn:visionflow:linked:contract-review",
      "kind": "StubLink"
    },
    {
      "raw": "[[Compliance Checking]]",
      "resolved": "urn:visionflow:linked:compliance-checking",
      "kind": "StubLink"
    },
    {
      "raw": "[[Legal Search]]",
      "resolved": "urn:visionflow:linked:legal-search",
      "kind": "StubLink"
    },
    {
      "raw": "[[Compliance Domain]]",
      "resolved": "urn:visionflow:linked:compliance-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regulation Domain]]",
      "resolved": "urn:visionflow:linked:regulation-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - The Legal Tech Domain covers the application of computational methods to legal practice and the administration of law. Its scope includes contract analysis, legal research, e-discovery and document automation. It is a top-level subject classification at the intersection of law and technology. The boundary excludes the general regulatory rule-making that applies across sectors, which belongs to the Regulation Domain.

- ### Semantic Classification
  - owl-class:: legal:LegalTechDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Compliance Domain]], [[Regulation Domain]], [[Natural Language Processing Domain]]
  - has-part:: [[Contract Analysis]], [[Legal Research]], [[E-Discovery]], [[Document Automation]], [[Case Prediction]]
  - requires:: [[Natural Language Processing Domain]], [[Knowledge Representation Domain]], [[Information Retrieval Domain]]
  - enables:: [[Contract Review]], [[Compliance Checking]], [[Legal Search]]

- ### Content
  - The Legal Tech Domain concerns the use of software and artificial intelligence to support legal work, from drafting and review to research and dispute resolution. Its scope covers contract analysis, legal research over case law and statute, e-discovery in litigation and the automation of document production. The boundary is the practice and administration of law; the formation of regulatory rules sits in the Regulation Domain.
  - Member concepts include Contract Analysis, Legal Research, E-Discovery, Document Automation and Case Prediction. These depend on the Natural Language Processing Domain for text understanding, the Knowledge Representation Domain for legal ontologies and the Information Retrieval Domain for search over large corpora.
  - The domain bridges to the Compliance Domain through obligation checking, to the Regulation Domain through the legal frameworks it operates within, and to the Natural Language Processing Domain for its core methods. It enables contract review, compliance checking and legal search.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
