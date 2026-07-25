public:: true

# Commons Stack
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:68774d58f998b39ccee534c81545de833ba131abd06d36c6a5ce560a4b9036b0",
  "@type": "Page",
  "vc:slug": "commons-stack",
  "title": "Commons Stack",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:tokenomics",
      "vc:label": "Tokenomics"
    },
    {
      "@id": "urn:visionflow:linked:quadratic-funding",
      "vc:label": "Quadratic Funding"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-autonomous-organization",
      "vc:label": "Decentralized Autonomous Organization"
    },
    {
      "@id": "urn:visionflow:linked:public-goods-funding",
      "vc:label": "Public Goods Funding"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Commons Stack"
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
  "@id": "urn:ngm:class:commons-stack",
  "@type": "Class",
  "label": "Commons Stack",
  "definition": "Commons Stack is an initiative providing tools and economic models for funding and governing public goods through token-based communities. It draws on mechanisms such as bonding curves and continuous funding.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:public-goods-funding",
      "label": "Public Goods Funding"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:quadratic-funding",
        "label": "Quadratic Funding"
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
  "@id": "urn:visionflow:annotation:link-resolutions:commons-stack:b25a422283f8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:68774d58f998b39ccee534c81545de833ba131abd06d36c6a5ce560a4b9036b0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Tokenomics]]",
      "resolved": "urn:visionflow:linked:tokenomics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Quadratic Funding]]",
      "resolved": "urn:visionflow:linked:quadratic-funding",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Autonomous Organization]]",
      "resolved": "urn:visionflow:linked:decentralized-autonomous-organization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Public Goods Funding]]",
      "resolved": "urn:visionflow:linked:public-goods-funding",
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
  - Commons Stack is an initiative providing tools and economic models for funding and governing public goods through token-based communities. It draws on mechanisms such as bonding curves and continuous funding.

- ### Semantic Classification
  - owl-class:: defi:CommonsStack
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Public Goods Funding]]
  - bridges-to:: [[Decentralized Autonomous Organization]]
  - requires:: [[Tokenomics]]
  - enables:: [[Quadratic Funding]]

- ### Content
  - Commons Stack develops open-source components and token engineering models intended to help communities sustainably fund and govern shared public goods. Its designs use mechanisms such as augmented bonding curves, conviction voting and continuous funding to align contributions with collective benefit.
  - The initiative emerged from the token engineering community and collaborated with projects exploring decentralised funding of commons. Its work connects mechanism design with practical tooling for decentralised autonomous organisations.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
