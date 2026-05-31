public:: true

# Web3 Infrastructure
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:48288d06bcb9a1172a94d4604571ebc39ff09d8bbc63a523018326264d0ecaea",
  "@type": "Page",
  "vc:slug": "web-3-infrastructure",
  "title": "Web3 Infrastructure",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:distributed-ledger-technology",
      "vc:label": "Distributed Ledger Technology"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-identity",
      "vc:label": "Decentralised Identity"
    },
    {
      "@id": "urn:visionflow:linked:interoperability",
      "vc:label": "Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:linked:https-ethereum-org-en-developers-docs",
      "vc:label": "https://ethereum.org/en/developers/docs/"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-web-3",
      "vc:label": "https://en.wikipedia.org/wiki/Web3"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Web3 Infrastructure"
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
  "@id": "urn:ngm:class:web-3-infrastructure",
  "@type": "Class",
  "label": "Web3 Infrastructure",
  "definition": "Web3 infrastructure is the set of protocols, nodes, storage and tooling that supports decentralised applications built on blockchain networks.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
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
  "@id": "urn:visionflow:annotation:link-resolutions:web-3-infrastructure:2c92c4123aa1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:48288d06bcb9a1172a94d4604571ebc39ff09d8bbc63a523018326264d0ecaea"
  },
  "vc:resolutions": [
    {
      "raw": "[[Distributed Ledger Technology]]",
      "resolved": "urn:visionflow:linked:distributed-ledger-technology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Identity]]",
      "resolved": "urn:visionflow:linked:decentralised-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Interoperability]]",
      "resolved": "urn:visionflow:linked:interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:linked:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://ethereum.org/en/developers/docs/]]",
      "resolved": "urn:visionflow:linked:https-ethereum-org-en-developers-docs",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Web3]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-web-3",
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
  - Web3 infrastructure is the set of protocols, nodes, storage and tooling that supports decentralised applications built on blockchain networks.

- ### Semantic Classification
  - owl-class:: distributed-systems:Web3Infrastructure
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Blockchain]]
  - bridges-to:: [[Interoperability]]
  - requires:: [[Distributed Ledger Technology]]
  - enables:: [[Decentralised Identity]]

- ### Content
  - Web3 infrastructure includes blockchain nodes, remote procedure call endpoints, decentralised storage, indexing services and wallet tooling. These components allow applications to read from and write to distributed ledgers.
  - Providers operate node networks and indexing layers so that developers can build without running full chain infrastructure themselves. Cross-chain bridges and oracles extend connectivity between networks and external data.

- ### Provenance
  - sources:: [[https://ethereum.org/en/developers/docs/]], [[https://en.wikipedia.org/wiki/Web3]]
  - migration-date:: 2026-05-29T00:00:00Z
