public:: true

# Ethereum Virtual Machine
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:91cf97b859c05a1a1522e6cdaa051f0564bf8b26581f2bbf1b95a0604f2e4480",
  "@type": "Page",
  "vc:slug": "ethereum-virtual-machine",
  "title": "Ethereum Virtual Machine",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract-platform",
      "vc:label": "Smart Contract Platform"
    },
    {
      "@id": "urn:visionflow:linked:ethereum-smart-contracts",
      "vc:label": "Ethereum Smart Contracts"
    },
    {
      "@id": "urn:visionflow:linked:gas",
      "vc:label": "Gas"
    },
    {
      "@id": "urn:visionflow:linked:virtual-machine",
      "vc:label": "Virtual Machine"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Ethereum Virtual Machine"
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
  "@id": "urn:ngm:class:ethereum-virtual-machine",
  "@type": "Class",
  "label": "Ethereum Virtual Machine",
  "definition": "The deterministic stack-based virtual machine that executes Ethereum smart contract bytecode and updates the shared world state.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:virtual-machine",
      "label": "Virtual Machine"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract-platform",
        "label": "Smart Contract Platform"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contracts",
        "label": "Ethereum Smart Contracts"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ethereum-virtual-machine:875442a21c00",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:91cf97b859c05a1a1522e6cdaa051f0564bf8b26581f2bbf1b95a0604f2e4480"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:smart-contract-platform",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contracts]]",
      "resolved": "urn:visionflow:linked:ethereum-smart-contracts",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Gas]]",
      "resolved": "urn:visionflow:linked:gas",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Machine]]",
      "resolved": "urn:visionflow:linked:virtual-machine",
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
  - The deterministic stack-based virtual machine that executes Ethereum smart contract bytecode and updates the shared world state.

- ### Semantic Classification
  - owl-class:: blockchain:EthereumVirtualMachine
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Virtual Machine]]
  - bridges-to:: [[Gas]]
  - requires:: [[Smart Contract Platform]]
  - enables:: [[Ethereum Smart Contracts]]

- ### Content
  - The Ethereum Virtual Machine is a sandboxed execution environment that runs compiled contract bytecode. Every node executes the same instructions deterministically so that all reach an identical resulting state.
  - Each operation consumes gas, which bounds computation and prices resource use. Compatibility with this instruction set has become a common target, with several other chains implementing equivalent virtual machines.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
