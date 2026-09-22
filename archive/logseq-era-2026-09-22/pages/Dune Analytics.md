public:: true

# Dune Analytics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4522cdd052165caa8ca667c328a4d92468c728c74668e6420ed8529dd1aefc17",
  "@type": "Page",
  "vc:slug": "dune-analytics",
  "title": "Dune Analytics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:blockchain-analytics",
      "vc:label": "Blockchain Analytics"
    },
    {
      "@id": "urn:visionflow:linked:data-visualisation",
      "vc:label": "Data Visualisation"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Dune Analytics"
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
  "@id": "urn:ngm:class:dune-analytics",
  "@type": "Class",
  "label": "Dune Analytics",
  "definition": "Dune Analytics is a platform for querying and visualising blockchain data through user-created dashboards and shared queries.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-analytics",
      "label": "Blockchain Analytics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:blockchain-analytics",
        "label": "Blockchain Analytics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-visualisation",
        "label": "Data Visualisation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:dune-analytics:73a87cd70b31",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4522cdd052165caa8ca667c328a4d92468c728c74668e6420ed8529dd1aefc17"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain Analytics]]",
      "resolved": "urn:visionflow:linked:blockchain-analytics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Visualisation]]",
      "resolved": "urn:visionflow:linked:data-visualisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
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
  - Dune Analytics is a platform for querying and visualising blockchain data through user-created dashboards and shared queries.

- ### Semantic Classification
  - owl-class:: blockchain:DuneAnalytics
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Blockchain Analytics]]
  - bridges-to:: [[Ethereum Smart Contract Platform]]
  - requires:: [[Blockchain Analytics]]
  - enables:: [[Data Visualisation]]

- ### Content
  - Dune Analytics indexes blockchain data and lets users write queries to analyse on-chain activity and build visual dashboards.
  - Its queries and dashboards are shareable, supporting community analysis of blockchain protocols and applications.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
