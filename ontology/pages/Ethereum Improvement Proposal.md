public:: true

# Ethereum Improvement Proposal
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:ethereum-improvement-proposal", "@type":"Page", "title":"Ethereum Improvement Proposal", "vc:slug":"ethereum-improvement-proposal", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ethereum-improvement-proposal",
  "@type": "Class",
  "label": "Ethereum Improvement Proposal",
  "definition": "An Ethereum Improvement Proposal (EIP) is a formal design document that describes a proposed change to the Ethereum protocol, its standards, or its processes, providing the technical specification and rationale for community review. EIPs are categorised into Core proposals affecting consensus, Networking proposals, Interface proposals, and Application-level standards known as ERCs. They follow a defined lifecycle from Draft through Review, Last Call, and Final, serving as the canonical mechanism for coordinating decentralised protocol evolution.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards",
      "label": "Standards"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain-governance",
        "label": "Blockchain Governance"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:request-for-comments",
        "label": "Request for Comments"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      },
      {
        "@id": "urn:ngm:class:erc-20",
        "label": "ERC-20"
      },
      {
        "@id": "urn:ngm:class:erc-721",
        "label": "ERC-721"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:blockchain-governance",
        "label": "Blockchain Governance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
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
        "@id": "urn:ngm:class:ethereum-smart-contract-platform-virtual-machine",
        "label": "Ethereum Virtual Machine"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:dao",
        "label": "DAO"
      },
      {
        "@id": "urn:ngm:class:web3",
        "label": "Web3"
      },
      {
        "@id": "urn:ngm:class:gas",
        "label": "Gas"
      },
      {
        "@id": "urn:ngm:class:token-economy",
        "label": "Token Economy"
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
	- An Ethereum Improvement Proposal is the canonical [[Standards]] document for coordinating changes to [[Ethereum]].
	- It is the principal artefact of [[Blockchain Governance]] on the network, modelled on the internet [[Request for Comments]] tradition.
	- Application-level EIPs become ERCs that define how a [[Smart Contract]] should behave and interoperate.
- ### Overview
	- The EIP process exists to let a decentralised, permissionless community converge on protocol changes without a central authority.
	- Each proposal carries a unique number, an author, a category, and a status that advances through a defined lifecycle.
	- Core EIPs that alter consensus require client implementation and broad social consensus before activation in a network upgrade.
	- ERCs, the application-standard subclass, have produced widely adopted interfaces such as fungible and non-fungible token specifications.
- ### Mechanisms
	- Lifecycle stages: Draft, Review, Last Call, Final (or Stagnant, Withdrawn) govern maturity and revisability.
	- Categories: Core, Networking, Interface, and ERC partition proposals by the layer they affect.
	- Reference implementations and test vectors accompany Core proposals to ensure client interoperability.
	- Editors curate the repository, enforcing formatting and ensuring proposals are technically complete before merge.
- ### Applications
	- Token interface standards (fungible, non-fungible, multi-token) enabling wallet and exchange interoperability.
	- Account abstraction and fee-market reforms that reshape transaction economics.
	- Precompiles and opcode additions extending the virtual machine's capabilities.
	- Meta proposals that define the EIP process itself and the governance of upgrades.
- ### Relationships
	- subClassOf:: [[Standards]]
	- partOf:: [[Blockchain Governance]]
	- partOf:: [[Ethereum]]
	- dependsOn:: [[Request for Comments]]
	- implements:: [[Token Standard]]
	- implements:: [[ERC-20]]
	- implements:: [[ERC-721]]
	- standardizedBy:: [[Blockchain Governance]]
	- enables:: [[Interoperability]]
	- enables:: [[Smart Contract]]
	- uses:: [[Solidity]]
	- uses:: [[Ethereum Virtual Machine]]
	- supports:: [[Consensus Mechanism]]
	- supports:: [[Proof of Stake]]
	- relatedTo:: [[DAO]]
	- relatedTo:: [[Web3]]
	- relatedTo:: [[Gas]]
	- relatedTo:: [[Token Economy]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
