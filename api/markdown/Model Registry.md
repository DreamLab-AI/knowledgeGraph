public:: true

# Model Registry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9aec0f0d0f93e90b49c528c01345e606b4c709993194a42d73ac80533344d052",
  "@type": "Page",
  "vc:slug": "model-registry",
  "title": "Model Registry",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-versioning",
      "vc:label": "Data Versioning"
    },
    {
      "@id": "urn:visionflow:linked:model-deployment",
      "vc:label": "Model Deployment"
    },
    {
      "@id": "urn:visionflow:linked:model-serving",
      "vc:label": "Model Serving"
    },
    {
      "@id": "urn:visionflow:linked:mlops",
      "vc:label": "MLOps"
    },
    {
      "@id": "urn:visionflow:linked:feature-store",
      "vc:label": "Feature Store"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Model Registry"
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
  "@id": "urn:ngm:class:model-registry",
  "@type": "Class",
  "label": "Model Registry",
  "definition": "A model registry is a system for cataloguing trained machine learning models with their versions, metadata and lifecycle stage. It provides a central record that links a model to its training data, metrics and deployment status.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:mlops",
      "label": "MLOps"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:data-versioning",
        "label": "Data Versioning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-deployment",
        "label": "Model Deployment"
      },
      {
        "@id": "urn:ngm:class:model-serving",
        "label": "Model Serving"
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
  "@id": "urn:visionflow:annotation:link-resolutions:model-registry:3d916499376b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9aec0f0d0f93e90b49c528c01345e606b4c709993194a42d73ac80533344d052"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Versioning]]",
      "resolved": "urn:visionflow:linked:data-versioning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Model Deployment]]",
      "resolved": "urn:visionflow:linked:model-deployment",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Model Serving]]",
      "resolved": "urn:visionflow:linked:model-serving",
      "kind": "StubLink"
    },
    {
      "raw": "[[MLOps]]",
      "resolved": "urn:visionflow:linked:mlops",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Feature Store]]",
      "resolved": "urn:visionflow:linked:feature-store",
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
  - A model registry is a system for cataloguing trained machine learning models with their versions, metadata and lifecycle stage. It provides a central record that links a model to its training data, metrics and deployment status.

- ### Semantic Classification
  - owl-class:: machine-learning:ModelRegistry
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[MLOps]]
  - bridges-to:: [[MLOps]], [[Feature Store]]
  - requires:: [[Data Versioning]]
  - enables:: [[Model Deployment]], [[Model Serving]]

- ### Content
  - A model registry stores model artefacts alongside metadata such as version number, training run, evaluation metrics and approval state. Teams use it to track which model is staged, in production or archived, and to promote models between stages under review.
  - The registry supports governance and reproducibility by recording lineage from data and code to the deployed model. It is a standard component of MLOps platforms and feeds model serving systems with the approved versions.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
