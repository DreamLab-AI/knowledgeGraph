public:: true

# Google Cloud
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:921898c15bbecd43464adf2a4a2e951c30f57f8d5dfbb42a8194404948a72438",
  "@type": "Page",
  "vc:slug": "google-cloud",
  "title": "Google Cloud",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cloud-computing",
      "vc:label": "Cloud Computing"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:google",
      "vc:label": "Google"
    },
    {
      "@id": "urn:visionflow:linked:cloud-platform",
      "vc:label": "Cloud Platform"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Google Cloud"
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
  "@id": "urn:ngm:class:google-cloud",
  "@type": "Class",
  "label": "Google Cloud",
  "definition": "Google Cloud is a cloud computing platform offering infrastructure, data, and machine learning services operated by Google.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cloud-platform",
      "label": "Cloud Platform"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:google-cloud:8f8f4b230ad3",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:921898c15bbecd43464adf2a4a2e951c30f57f8d5dfbb42a8194404948a72438"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cloud Computing]]",
      "resolved": "urn:visionflow:linked:cloud-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Google]]",
      "resolved": "urn:visionflow:linked:google",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cloud Platform]]",
      "resolved": "urn:visionflow:linked:cloud-platform",
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
  - Google Cloud is a cloud computing platform offering infrastructure, data, and machine learning services operated by Google.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:GoogleCloud
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Cloud Platform]]
  - bridges-to:: [[Google]]
  - requires:: [[Cloud Computing]]
  - enables:: [[Machine Learning]]

- ### Content
  - Google Cloud provides compute, storage, networking, and data analytics services delivered over the internet on a usage-based model.
  - The platform includes managed services for training and deploying machine learning models, alongside tools for application hosting and data processing.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
