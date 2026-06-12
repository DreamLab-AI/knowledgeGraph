public:: true

# ETSI Domain: Data Management + AI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cb93146f6e22ee5d540fcb40a52ffb4bd14ea4a9403e90ec336a414e712a48e9",
  "@type": "Page",
  "vc:slug": "etsi-domain-data-management-ai",
  "title": "ETSI Domain: Data Management + AI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-and-machine-learning",
      "vc:label": "AI & Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:data-pipelines",
      "vc:label": "Data Pipelines"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gr-mec-032",
      "vc:label": "ETSI GR MEC 032"
    },
    {
      "@id": "urn:visionflow:linked:experiment-tracking",
      "vc:label": "Experiment Tracking"
    },
    {
      "@id": "urn:visionflow:linked:ml-operations",
      "vc:label": "ML Operations"
    },
    {
      "@id": "urn:visionflow:linked:mlops-infrastructure",
      "vc:label": "MLOps Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:model-deployment",
      "vc:label": "Model Deployment"
    },
    {
      "@id": "urn:visionflow:linked:model-registry",
      "vc:label": "Model Registry"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:data-management",
      "vc:label": "Data Management"
    },
    {
      "@id": "urn:visionflow:owl:class:data-versioning",
      "vc:label": "Data Versioning"
    },
    {
      "@id": "urn:visionflow:owl:class:etsi-metaverse-domain-taxonomy",
      "vc:label": "ETSI Metaverse Domain Taxonomy"
    },
    {
      "@id": "urn:visionflow:owl:class:feature-store",
      "vc:label": "Feature Store"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure-domain",
      "vc:label": "InfrastructureDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:training-data-repository",
      "vc:label": "Training Data Repository"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20345"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "ETSI Domain: Data Management + AI"
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
  "@id": "urn:ngm:class:etsi-domain-data-management-ai",
  "@type": "Class",
  "label": "ETSI Domain: Data Management + AI",
  "definition": "Crossover domain for ETSI metaverse categorisation addressing data infrastructure supporting AI/ML workflows, training data management, model versioning, and inference serving.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-infrastructure",
      "label": "AI Infrastructure (Category)"
    },
    {
      "@id": "urn:ngm:class:etsi-domain-ai-data-mgmt",
      "label": "ETSI Domain AI + Data Mgmt"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:empirical-experimental-design-tracking",
        "label": "Experiment Tracking"
      },
      {
        "@id": "urn:ngm:class:model-registry",
        "label": "Model Registry"
      },
      {
        "@id": "urn:ngm:class:feature-store",
        "label": "Feature Store"
      },
      {
        "@id": "urn:ngm:class:training-data-repository",
        "label": "Training Data Repository"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ai-and-machine-learning",
        "label": "AI & Machine Learning"
      },
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ml-operations",
        "label": "ML Operations"
      },
      {
        "@id": "urn:ngm:class:model-deployment",
        "label": "Model Deployment"
      },
      {
        "@id": "urn:ngm:class:data-versioning",
        "label": "Data Versioning"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:etsi-metaverse-domain-taxonomy",
        "label": "ETSI Metaverse Domain Taxonomy"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:etsi-domain-data-management-ai:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cb93146f6e22ee5d540fcb40a52ffb4bd14ea4a9403e90ec336a414e712a48e9"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI & Machine Learning]]",
      "resolved": "urn:visionflow:linked:ai-and-machine-learning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Pipelines]]",
      "resolved": "urn:visionflow:linked:data-pipelines",
      "kind": "StubLink"
    },
    {
      "raw": "[[ETSI GR MEC 032]]",
      "resolved": "urn:visionflow:linked:etsi-gr-mec-032",
      "kind": "StubLink"
    },
    {
      "raw": "[[Experiment Tracking]]",
      "resolved": "urn:visionflow:linked:experiment-tracking",
      "kind": "StubLink"
    },
    {
      "raw": "[[ML Operations]]",
      "resolved": "urn:visionflow:linked:ml-operations",
      "kind": "StubLink"
    },
    {
      "raw": "[[MLOps Infrastructure]]",
      "resolved": "urn:visionflow:linked:mlops-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Model Deployment]]",
      "resolved": "urn:visionflow:linked:model-deployment",
      "kind": "StubLink"
    },
    {
      "raw": "[[Model Registry]]",
      "resolved": "urn:visionflow:linked:model-registry",
      "kind": "StubLink"
    },
    {
      "raw": "[[ApplicationLayer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Management]]",
      "resolved": "urn:visionflow:owl:class:data-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Versioning]]",
      "resolved": "urn:visionflow:owl:class:data-versioning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ETSI Metaverse Domain Taxonomy]]",
      "resolved": "urn:visionflow:owl:class:etsi-metaverse-domain-taxonomy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Feature Store]]",
      "resolved": "urn:visionflow:owl:class:feature-store",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InfrastructureDomain]]",
      "resolved": "urn:visionflow:owl:class:infrastructure-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Training Data Repository]]",
      "resolved": "urn:visionflow:owl:class:training-data-repository",
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
  - Crossover domain for ETSI metaverse categorisation addressing data infrastructure supporting AI/ML workflows, training data management, model versioning, and inference serving.

- ### Bridge-To
  - bridges-to:: [[Computer Vision]] (ai)

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ETSIDomain_DataMgmt_AI
  - owl-role:: Object
  - owl-inferred:: mv:VirtualObject
  - belongs-to-domain:: [[InfrastructureDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]

- ### Relationships
  - has-part:: [[Training Data Repository]], [[Model Registry]], [[Feature Store]], [[Experiment Tracking]]
  - is-part-of:: [[ETSI Metaverse Domain Taxonomy]]
  - requires:: [[Data Management]], [[AI & Machine Learning]]
  - enables:: [[ML Operations]], [[Model Deployment]], [[Data Versioning]]
  - depends-on:: [[MLOps Infrastructure]], [[Data Pipelines]]

- ### Content
  ETSI Domain: Data Management + AI — content pending enrichment.

- ### Provenance
  - sources:: [[ETSI GR MEC 032]]
  - migration-date:: 2026-04-26T00:00:00Z
