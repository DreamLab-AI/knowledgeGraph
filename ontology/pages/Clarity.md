public:: true

# Clarity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2a0cb15fb9431f9f3c074eff284bf7041af0aa4980f7001405a14a5161ad43a0",
  "@type": "Page",
  "vc:slug": "clarity",
  "title": "Clarity",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contracts",
      "vc:label": "Smart Contracts"
    },
    {
      "@id": "urn:visionflow:linked:verifiable-computation",
      "vc:label": "Verifiable Computation"
    },
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Clarity"
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
  "@id": "urn:ngm:class:clarity",
  "@type": "Class",
  "label": "Clarity",
  "definition": "Clarity is a decidable smart contract language designed so that contract behaviour can be analysed before execution, with no compilation step and explicit handling of conditions that could otherwise fail silently.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:smart-contracts",
      "label": "Smart Contracts"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contracts",
        "label": "Smart Contracts"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:verifiable-computation",
        "label": "Verifiable Computation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:clarity:261b152862d1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2a0cb15fb9431f9f3c074eff284bf7041af0aa4980f7001405a14a5161ad43a0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contracts]]",
      "resolved": "urn:visionflow:linked:smart-contracts",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Verifiable Computation]]",
      "resolved": "urn:visionflow:linked:verifiable-computation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:linked:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
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
  - Clarity is a decidable smart contract language designed so that contract behaviour can be analysed before execution, with no compilation step and explicit handling of conditions that could otherwise fail silently.

- ### Semantic Classification
  - owl-class:: metaverse:Clarity
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Smart Contracts]]
  - bridges-to:: [[Blockchain]], [[DeFi]]
  - requires:: [[Smart Contracts]]
  - enables:: [[Verifiable Computation]]

- ### Content
  - Clarity is interpreted rather than compiled, so the deployed source is exactly what executes, and its design avoids unbounded loops and reentrancy by construction. This makes static analysis of cost and outcome tractable before a contract runs.
  - The language targets blockchain settings where mistakes are costly and irreversible, prioritising predictability over expressive shortcuts. It connects to verifiable computation and to decentralised finance use cases that demand auditable logic.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
