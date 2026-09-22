public:: true

# Allo Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:879c8a85440f2aa47512aa2883b1cd33d11f749960247a66e7a4336b7e8733be",
  "@type": "Page",
  "vc:slug": "allo-protocol",
  "title": "Allo Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:token",
      "vc:label": "Token"
    },
    {
      "@id": "urn:visionflow:linked:web-3-infrastructure",
      "vc:label": "Web3 Infrastructure"
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
      "@id": "urn:visionflow:linked:https-allo-gitcoin-co",
      "vc:label": "https://allo.gitcoin.co/"
    },
    {
      "@id": "urn:visionflow:linked:https-docs-allo-gitcoin-co",
      "vc:label": "https://docs.allo.gitcoin.co/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Allo Protocol"
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
  "@id": "urn:ngm:class:allo-protocol",
  "@type": "Class",
  "label": "Allo Protocol",
  "definition": "Allo Protocol is an on-chain framework developed by Gitcoin for allocating capital, supporting funding mechanisms such as quadratic funding and grants.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    {
      "@id": "urn:ngm:class:decentralized-finance",
      "label": "Decentralized Finance"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:token",
        "label": "Token"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:web-3-infrastructure",
        "label": "Web3 Infrastructure"
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
  "@id": "urn:visionflow:annotation:link-resolutions:allo-protocol:ff729feee8b9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:879c8a85440f2aa47512aa2883b1cd33d11f749960247a66e7a4336b7e8733be"
  },
  "vc:resolutions": [
    {
      "raw": "[[Token]]",
      "resolved": "urn:visionflow:linked:token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Web3 Infrastructure]]",
      "resolved": "urn:visionflow:linked:web-3-infrastructure",
      "kind": "StubLink"
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
      "raw": "[[https://allo.gitcoin.co/]]",
      "resolved": "urn:visionflow:linked:https-allo-gitcoin-co",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://docs.allo.gitcoin.co/]]",
      "resolved": "urn:visionflow:linked:https-docs-allo-gitcoin-co",
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
  - Allo Protocol is an on-chain framework developed by Gitcoin for allocating capital, supporting funding mechanisms such as quadratic funding and grants.

- ### Semantic Classification
  - owl-class:: distributed-systems:AlloProtocol
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Blockchain]]
  - bridges-to:: [[Interoperability]]
  - requires:: [[Token]]
  - enables:: [[Web3 Infrastructure]]

- ### Content
  - Allo Protocol provides smart contracts and tooling for capital allocation rounds. It separates the registration of recipients, the allocation strategy and the distribution of funds into composable components.
  - Developed within the Gitcoin ecosystem, it supports configurable allocation strategies including quadratic funding. Round operators can define eligibility and voting rules through pluggable strategy contracts.

- ### Provenance
  - sources:: [[https://allo.gitcoin.co/]], [[https://docs.allo.gitcoin.co/]]
  - migration-date:: 2026-05-29T00:00:00Z
