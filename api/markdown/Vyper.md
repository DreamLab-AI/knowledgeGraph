public:: true

# Vyper
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cea62728ab88a73fce42295d4e991cb035cde6ff143390c504cfcdae2ab4b3e6",
  "@type": "Page",
  "vc:slug": "vyper",
  "title": "Vyper",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum-virtual-machine",
      "vc:label": "Ethereum Virtual Machine"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:solidity",
      "vc:label": "Solidity"
    },
    {
      "@id": "urn:visionflow:linked:programming-language",
      "vc:label": "Programming Language"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Vyper"
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
  "@id": "urn:ngm:class:vyper",
  "@type": "Class",
  "label": "Vyper",
  "definition": "A contract-oriented programming language for the Ethereum Virtual Machine that emphasises simplicity, auditability, and security. It uses Python-like syntax and deliberately omits features that can make contracts hard to reason about.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:programming-language",
      "label": "Programming Language"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform-virtual-machine",
        "label": "Ethereum Virtual Machine"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
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
  "@id": "urn:visionflow:annotation:link-resolutions:vyper:4c50d0fcb0a5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cea62728ab88a73fce42295d4e991cb035cde6ff143390c504cfcdae2ab4b3e6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum Virtual Machine]]",
      "resolved": "urn:visionflow:linked:ethereum-virtual-machine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Solidity]]",
      "resolved": "urn:visionflow:linked:solidity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Programming Language]]",
      "resolved": "urn:visionflow:linked:programming-language",
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
  - A contract-oriented programming language for the Ethereum Virtual Machine that emphasises simplicity, auditability, and security. It uses Python-like syntax and deliberately omits features that can make contracts hard to reason about.

- ### Semantic Classification
  - owl-class:: blockchain:Vyper
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Programming Language]]
  - bridges-to:: [[Solidity]]
  - requires:: [[Ethereum Virtual Machine]]
  - enables:: [[Smart Contract]]

- ### Content
  - Vyper is designed as an alternative to Solidity for writing smart contracts. It restricts language constructs such as modifiers, inheritance, and inline assembly to reduce the surface for subtle bugs and to make contracts easier to audit.
  - The compiler targets EVM bytecode, so Vyper contracts interoperate with Solidity contracts and existing tooling. Its design favours strong typing, bounds checking, and explicit behaviour over flexibility.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
