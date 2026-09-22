public:: true

# EIP
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:eip", "@type":"Page", "title":"EIP", "vc:slug":"eip", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:eip",
  "@type": "Class",
  "label": "EIP",
  "definition": "An Ethereum Improvement Proposal (EIP) is the formal, versioned design document through which changes to the Ethereum protocol, its standards and its processes are proposed, debated and ratified. Categories include core protocol changes, networking and interface proposals, and application-level standards known as ERCs such as the token interfaces. Each proposal moves through defined statuses from draft to final, providing a transparent, community-driven mechanism for evolving the network.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ethereum",
      "label": "Ethereum"
    },
    {
      "@id": "urn:ngm:class:governance-proposal",
      "label": "Governance Proposal"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:erc-20",
        "label": "ERC-20"
      },
      {
        "@id": "urn:ngm:class:erc-721",
        "label": "ERC-721"
      },
      {
        "@id": "urn:ngm:class:erc-1155",
        "label": "ERC-1155"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ethereum-foundation",
        "label": "Ethereum Foundation"
      },
      {
        "@id": "urn:ngm:class:standards-body",
        "label": "Standards Body"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform-virtual-machine",
        "label": "Ethereum Virtual Machine"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      },
      {
        "@id": "urn:ngm:class:evm",
        "label": "EVM"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:standards-body",
        "label": "Standards Body"
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
  - An EIP is the formal design document for proposing changes to [[Ethereum]], its standards and its processes.
  - Application-level EIPs become ERCs that define interfaces such as [[ERC-20]], [[ERC-721]] and [[ERC-1155]].
  - The process is a community [[Governance]] mechanism stewarded by the [[Ethereum Foundation]] and the wider editor community.

- ### Overview
  - Each proposal is authored, numbered and discussed openly before being accepted, rejected or withdrawn.
  - Categories separate core consensus changes from networking, interface and application standards.
  - Statuses such as draft, review, last call and final track a proposal's maturity and stability.

- ### Key aspects
  - Versioned, numbered documents with a defined template.
  - Distinction between core EIPs and application-level ERCs.
  - A status lifecycle that signals readiness for implementation.
  - Open, rough-consensus deliberation among contributors and clients.

- ### Applications
  - Defining a [[Token Standard]] for fungible and non-fungible assets.
  - Specifying [[Smart Contract]] interfaces for interoperability.
  - Coordinating protocol upgrades affecting the [[Ethereum Virtual Machine]].
  - Ratifying consensus changes such as the move to [[Proof of Stake]].

- ### Relationships
  - subClassOf:: [[Ethereum]]
  - partOf:: [[Ethereum]]
  - partOf:: [[Governance]]
  - implements:: [[ERC-20]]
  - implements:: [[ERC-721]]
  - implements:: [[ERC-1155]]
  - standardizedBy:: [[Ethereum Foundation]]
  - standardizedBy:: [[Standards Body]]
  - enables:: [[Token Standard]]
  - enables:: [[Smart Contract]]
  - supports:: [[Governance]]
  - supports:: [[Ethereum Virtual Machine]]
  - uses:: [[Smart Contract]]
  - relatedTo:: [[Token Standard]]
  - relatedTo:: [[Proof of Stake]]
  - relatedTo:: [[EVM]]
  - bridgesTo:: [[Standards Body]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
