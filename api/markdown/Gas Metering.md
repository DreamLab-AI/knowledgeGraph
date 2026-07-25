public:: true

# Gas Metering

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:gas-metering",
  "@type": "Page",
  "title": "Gas Metering",
  "vc:slug": "gas-metering",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gas-metering",
  "@type": "Class",
  "label": "Gas Metering",
  "definition": "Gas metering is the mechanism by which a blockchain virtual machine accounts for the computational, storage and bandwidth resources consumed by executing a transaction or smart contract. Each low-level operation is assigned a gas cost, and execution proceeds only while the sender's prepaid gas budget remains, halting deterministically when the budget is exhausted. By pricing computation, gas metering deters denial-of-service abuse, bounds execution and forms the basis of transaction fees.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:smart-contract-platform",
      "label": "Smart Contract Platform"
    },
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:virtual-machine",
        "label": "Virtual Machine"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:virtual-machine",
        "label": "Virtual Machine"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:smart-contract-platform",
        "label": "Smart Contract Platform"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:gas-fee",
        "label": "Gas Fee"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:gas-fee",
        "label": "Gas Fee"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:virtual-machine",
        "label": "Virtual Machine"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:smart-contract-platform",
        "label": "Smart Contract Platform"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:gas-fee",
        "label": "Gas Fee"
      },
      {
        "@id": "urn:ngm:class:smart-contract-platform",
        "label": "Smart Contract Platform"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Gas metering is the mechanism by which a blockchain virtual machine accounts for the computational, storage and bandwidth resources consumed by executing a transaction or smart contract. Each low-level operation is assigned a gas cost, and execution proceeds only while the sender's prepaid gas budget remains, halting deterministically when the budget is exhausted. By pricing computation, gas metering deters denial-of-service abuse, bounds execution and forms the basis of transaction fees.
  - Related core concepts: [[Smart Contract Platform]], [[Smart Contract]], [[Virtual Machine]], [[Gas Fee]].
- ### Overview
  - Gas metering solves the halting and resource-fairness problems inherent to a public, Turing-capable execution environment where anyone can submit arbitrary code. By attaching a concrete cost to every instruction and memory access, the protocol guarantees that execution terminates within a paid budget and that the cost of consuming shared network resources is borne by the party requesting the work.
  - It is modelled as a subclass of [[Smart Contract Platform]] within the blockchain domain.
  - Gas decouples the price of computation from the volatile price of the underlying cryptocurrency: the gas cost of an operation is fixed in protocol terms, while the gas price (paid per unit of gas) floats with demand for block space. This separation lets the protocol keep a stable, security-driven cost model for resources even as market prices move.
  - Accurate cost schedules are themselves a security concern. If an opcode is under-priced relative to the real load it places on nodes, an attacker can craft transactions that are cheap to send but expensive to process, so cost schedules are periodically repriced to keep execution cost aligned with actual resource consumption.
- ### Mechanisms
  - Per-operation pricing: each opcode and storage write has a fixed or formula-based gas cost reflecting its resource intensity.
  - Gas limit and out-of-gas: a transaction specifies a maximum gas budget and reverts deterministically if execution exceeds it.
  - Fee market: the gas price (per unit) interacts with block capacity to set the transaction fee paid to validators.
  - Refunds and discounts: freeing storage or reusing warm state can lower effective cost under some cost schedules.
- ### Applications
  - Protecting blockchain nodes from denial-of-service via unbounded or expensive computation.
  - Setting transaction fees and prioritising transactions in the fee market.
  - Profiling and optimising smart contract code to reduce execution cost.
- ### Considerations
  - Out-of-gas reverts roll back state changes but still consume the gas spent, so callers must estimate budgets carefully.
  - Storage operations dominate cost on most platforms, making state-minimising contract design a primary optimisation target.
  - Mispriced opcodes have historically enabled denial-of-service vectors, driving protocol-level repricing upgrades.
- ### Relationships
  - subClassOf:: [[Smart Contract Platform]]
  - hasPart:: [[Smart Contract]]
  - hasPart:: [[Virtual Machine]]
  - requires:: [[Virtual Machine]]
  - partOf:: [[Smart Contract Platform]]
  - enables:: [[Gas Fee]]
  - supports:: [[Gas Fee]]
  - supports:: [[Smart Contract]]
  - uses:: [[Virtual Machine]]
  - implements:: [[Smart Contract]]
  - dependsOn:: [[Smart Contract Platform]]
  - relatedTo:: [[Gas Fee]]
  - relatedTo:: [[Smart Contract Platform]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
