public:: true

# Soft Fork
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:soft-fork",
  "@type": "Page",
  "title": "Soft Fork",
  "vc:slug": "soft-fork",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:soft-fork",
  "@type": "Class",
  "label": "Soft Fork",
  "definition": "A Soft Fork is a backward-compatible change to a blockchain's consensus rules in which the set of valid blocks is tightened so that newly produced blocks remain acceptable to non-upgraded nodes. Because old nodes still recognise the stricter blocks as valid, the network does not split provided a majority of hash power or stake enforces the new rules. Soft forks are commonly used to deploy protocol upgrades such as new script types without requiring every participant to update.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:hard-fork",
      "label": "Hard Fork"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain-governance",
        "label": "Blockchain Governance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:hard-fork",
        "label": "Hard Fork"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:backward-compatibility",
        "label": "Backward Compatibility"
      },
      {
        "@id": "urn:ngm:class:validation-rules",
        "label": "Validation Rules"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:taproot",
        "label": "Taproot"
      },
      {
        "@id": "urn:ngm:class:bip-342",
        "label": "BIP-342"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:validation-rules",
        "label": "Validation Rules"
      },
      {
        "@id": "urn:ngm:class:block-validation",
        "label": "Block Validation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:node-software",
        "label": "Node Software"
      },
      {
        "@id": "urn:ngm:class:full-node",
        "label": "Full Node"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:user-activated-soft-fork",
        "label": "User-Activated Soft Fork"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:backward-compatibility",
        "label": "Backward Compatibility"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:blockchain-governance",
        "label": "Blockchain Governance"
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
  - A Soft Fork is a backward-compatible change to a blockchain's consensus rules in which the set of valid blocks is tightened so that newly produced blocks remain acceptable to non-upgraded nodes. Because old nodes still recognise the stricter blocks as valid, the network does not split provided a majority of hash power or stake enforces the new rules. Soft forks are commonly used to deploy protocol upgrades such as new script types without requiring every participant to update.
  - Related concepts: [[Hard Fork]] [[Consensus Mechanism]] [[Backward Compatibility]] [[Taproot]] [[Validation Rules]]
- ### Overview
  - A soft fork narrows the rules: every block valid under the new rules is also valid under the old rules, but not vice versa. This one-way compatibility lets upgraded miners enforce stricter validation while legacy nodes continue to follow the chain. Activation typically proceeds via miner signalling or user-activated mechanisms, and once a supermajority enforces the rules the upgrade becomes effective without a chain split.
- ### Mechanisms
  - **Rule tightening** — the new valid block set is a subset of the old set.
  - **Backward compatibility** — non-upgraded nodes still accept upgraded blocks.
  - **Activation signalling** — miner-activated or user-activated deployment paths.
  - **Enforcement threshold** — a hash-power or stake supermajority secures the upgrade.
  - **Reversibility risk** — insufficient enforcement can lead to temporary forks.
- ### Applications
  - Deploying new script opcodes and address types.
  - Bitcoin upgrades such as SegWit and Taproot.
  - Incremental consensus changes without coordinated network-wide updates.
  - Fixing protocol vulnerabilities while preserving compatibility.
- ### Relationships
  - subClassOf:: [[Hard Fork]]
  - partOf:: [[Blockchain Governance]]
  - contrastsWith:: [[Hard Fork]]
  - requires:: [[Consensus Mechanism]]
  - requires:: [[Backward Compatibility]]
  - requires:: [[Validation Rules]]
  - enables:: [[Taproot]]
  - enables:: [[BIP-342]]
  - uses:: [[Validation Rules]]
  - uses:: [[Block Validation]]
  - dependsOn:: [[Node Software]]
  - dependsOn:: [[Full Node]]
  - implements:: [[User-Activated Soft Fork]]
  - supports:: [[Backward Compatibility]]
  - relatedTo:: [[Consensus Mechanism]]
  - relatedTo:: [[Blockchain Governance]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
