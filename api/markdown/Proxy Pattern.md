public:: true

# Proxy Pattern

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:proxy-pattern",
  "@type": "Page",
  "title": "Proxy Pattern",
  "vc:slug": "proxy-pattern",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:proxy-pattern",
  "@type": "Class",
  "label": "Proxy Pattern",
  "definition": "The Proxy Pattern is a smart-contract design technique that separates a contract's persistent storage and address from its executable logic, allowing the logic to be upgraded without migrating state or changing the public address. A lightweight proxy contract holds the state and forwards calls via delegatecall to a swappable implementation contract. The pattern enables upgradeable contracts but introduces storage-layout, initialisation and access-control hazards that must be managed carefully.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:design-pattern",
      "label": "Design Pattern"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:solidity",
        "label": "Solidity"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:eip",
        "label": "EIP"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:gas-optimization",
        "label": "Gas Optimization"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:eip",
        "label": "EIP"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      },
      {
        "@id": "urn:ngm:class:erc-20",
        "label": "ERC-20"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A smart-contract technique separating persistent storage from upgradeable logic so implementation code can be swapped via delegatecall without migrating state.
  - Related: [[Smart Contract]] [[Solidity]] [[Ethereum]] [[Access Control]]
- ### Overview
  - A proxy contract holds storage and delegates execution to a separate implementation contract via delegatecall.
  - Because storage lives in the proxy, the implementation can be replaced to ship bug fixes and new features without state migration.
  - Common variants include transparent proxies, UUPS (Universal Upgradeable Proxy Standard) and beacon proxies.
  - The pattern is the basis of most production upgradeable contract systems on Ethereum.
- ### Mechanisms
  - delegatecall executes implementation code in the proxy's storage and msg.sender context.
  - Storage-layout compatibility must be preserved across upgrades to avoid corruption.
  - Initialiser functions replace constructors, which do not run in the proxy's context.
  - Admin and upgrade authority are gated by access control to prevent hostile takeover.
  - Function-selector clashes between proxy and implementation are resolved by transparent or UUPS designs.
- ### Applications
  - Upgradeable DeFi protocols and token contracts that must evolve post-deployment.
  - Gas-efficient minimal proxies (clones) for deploying many identical contract instances.
  - Beacon proxies that upgrade many instances by pointing them at a single implementation.
  - Governance-controlled protocol upgrades coordinated through timelocks and multisigs.
- ### Relationships
  - subClassOf:: [[Design Pattern]]
  - partOf:: [[Smart Contract]]
  - uses:: [[Solidity]]
  - requires:: [[Access Control]]
  - implements:: [[EIP]]
  - supports:: [[Gas Optimization]]
  - relatedTo:: [[Token Standard]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
