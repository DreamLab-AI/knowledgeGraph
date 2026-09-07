```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:034d71e92cd5714fab05b1aba1c9a565628dc6891f503ce0a9bf97506aaeadbc",
  "@type": "Page",
  "vc:slug": "etsi-domain-data",
  "title": "ETSI Domain Data",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-systems",
      "vc:label": "AI Systems"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gr-mec-032",
      "vc:label": "ETSI GR MEC 032"
    },
    {
      "@id": "urn:visionflow:linked:intelligence",
      "vc:label": "Intelligence"
    },
    {
      "@id": "urn:visionflow:linked:iso-23257",
      "vc:label": "ISO 23257"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-research-area",
      "vc:label": "ComputationAndIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:data-analytics",
      "vc:label": "Data Analytics"
    },
    {
      "@id": "urn:visionflow:owl:class:data-processing",
      "vc:label": "Data Processing"
    },
    {
      "@id": "urn:visionflow:owl:class:data-storage",
      "vc:label": "Data Storage"
    },
    {
      "@id": "urn:visionflow:owl:class:etsi-metaverse-domain-model",
      "vc:label": "ETSI Metaverse Domain Model"
    },
    {
      "@id": "urn:visionflow:owl:class:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:owl:class:predictive-analytics",
      "vc:label": "Predictive Analytics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20374"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "ETSI Domain Data"
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
  "@id": "urn:ngm:class:etsi-domain-data",
  "@type": "Class",
  "label": "ETSI Domain Data",
  "definition": "Domain categorisation for data management, storage, analytics, AI/ML systems, and intelligence capabilities processing information in metaverse environments.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:etsi-metaverse-domain-model",
      "label": "Etsi Metaverse Domain Model"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:ai-system",
        "label": "AI System"
      },
      {
        "@id": "urn:ngm:class:data-analytics",
        "label": "Data Analytics"
      },
      {
        "@id": "urn:ngm:class:data-storage",
        "label": "Data Storage"
      },
      {
        "@id": "urn:ngm:class:machine-learning-discipline",
        "label": "Machine Learning Discipline"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-processing",
        "label": "Data Processing"
      },
      {
        "@id": "urn:ngm:class:predictive-analytics",
        "label": "Predictive Analytics"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:etsi-metaverse-domain-model",
        "label": "Etsi Metaverse Domain Model"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

- ### Definition
  - Domain categorisation for data management, storage, analytics, AI/ML systems, and intelligence capabilities processing information in metaverse environments.
- ### Bridge-To
  - bridges-to:: [[Computer Vision]] (ai)
- ### Semantic Classification
  - owl-class:: spatial-computing:ETSIDomainData
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[ComputationAndIntelligenceDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]
- ### Relationships
  - has-part:: [[Data Storage]], [[Data Analytics]], [[Machine Learning Discipline]], [[AI Systems]]
  - is-part-of:: [[ETSI Metaverse Domain Model]]
  - enables:: [[Data Processing]], [[Intelligence]], [[Predictive Analytics]]
- ### Content
  ETSI Domain Data — content pending enrichment.
- ### Provenance
  - sources:: [[ETSI GR MEC 032]], [[ISO 23257]]
  - migration-date:: 2026-04-26T00:00:00Z
