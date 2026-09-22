public:: true

# JPMorgan
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c415b61278ea2acaa338e61c0826ad06f44d08a42362cda77a302f2a961aa458",
  "@type": "Page",
  "vc:slug": "jpmorgan",
  "title": "JPMorgan",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:financial-services",
      "vc:label": "Financial Services"
    },
    {
      "@id": "urn:visionflow:linked:anti-money-laundering",
      "vc:label": "Anti-Money Laundering"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "JPMorgan"
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
  "@id": "urn:ngm:class:jpmorgan",
  "@type": "Class",
  "label": "JPMorgan",
  "definition": "JPMorgan Chase, a large United States financial services and banking institution that invests in and applies artificial intelligence and machine learning across its operations.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-services",
      "label": "Financial Services"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:financial-services",
        "label": "Financial Services"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
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
  "@id": "urn:visionflow:annotation:link-resolutions:jpmorgan:4ef9bfe6a540",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c415b61278ea2acaa338e61c0826ad06f44d08a42362cda77a302f2a961aa458"
  },
  "vc:resolutions": [
    {
      "raw": "[[Financial Services]]",
      "resolved": "urn:visionflow:linked:financial-services",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Anti-Money Laundering]]",
      "resolved": "urn:visionflow:linked:anti-money-laundering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
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
  - JPMorgan Chase, a large United States financial services and banking institution that invests in and applies artificial intelligence and machine learning across its operations.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:JPMorgan
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Financial Services]]
  - bridges-to:: [[Machine Learning Discipline]]
  - requires:: [[Financial Services]]
  - enables:: [[Anti-Money Laundering]]

- ### Content
  - JPMorgan Chase is among the largest banks by assets and operates globally across investment banking, asset management and consumer banking. It maintains substantial technology and research functions, including work on artificial intelligence.
  - In an AI and machine learning context, the firm applies these methods to areas such as fraud detection, anti-money laundering, trading analytics and document processing. It is referenced as an example of large-scale enterprise adoption of machine learning in regulated finance.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
