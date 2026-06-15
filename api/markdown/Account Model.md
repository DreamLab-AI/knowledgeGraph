public:: true

# Account Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:81a70e9d85ae5beda77d38a2a7e93b44ba53d8381520b15d4ad6e2cdbd46262f",
  "@type": "Page",
  "vc:slug": "account-model",
  "title": "Account Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ieee-2418-1",
      "vc:label": "IEEE 2418.1"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23257-2021",
      "vc:label": "ISO/IEC 23257:2021"
    },
    {
      "@id": "urn:visionflow:linked:nist-nistir",
      "vc:label": "NIST NISTIR"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "BlockchainDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-entity",
      "vc:label": "Blockchain Entity"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:distributed-data-structure",
      "vc:label": "DistributedDataStructure"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0008"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Account Model"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:account-model",
  "@type": "Class",
  "label": "Account Model",
  "definition": "The Account Model is a balance-based ledger paradigm in which each address maintains a persistent balance that is updated in-place when transactions execute. Unlike the UTXO model, accounts hold state across transactions, simplifying smart contract programming while introducing challenges around replay protection and nonce management.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    },
    {
      "@id": "urn:ngm:class:blockchain-entity",
      "label": "Blockchain Entity"
    },
    {
      "@id": "urn:ngm:class:distributed-data-structure",
      "label": "Distributed Data Structure"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:utxo-model",
        "label": "UTXO Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:transaction-processing",
        "label": "Transaction Processing"
      },
      {
        "@id": "urn:ngm:class:decentralised-application",
        "label": "Decentralised Application"
      },
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:transaction",
        "label": "Transaction"
      },
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Wallet"
      },
      {
        "@id": "urn:ngm:class:nonce",
        "label": "Nonce"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography",
        "label": "Public Key Cryptography"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:nonce",
        "label": "Account Nonce"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:merkle-patricia-trie",
        "label": "Merkle Patricia Trie"
      },
      {
        "@id": "urn:ngm:class:state-root",
        "label": "State Root"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:ledger",
        "label": "Ledger Model"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:gas-mechanism",
        "label": "Gas Mechanism"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:blockchain-transaction",
        "label": "Blockchain Transaction"
      },
      {
        "@id": "urn:ngm:class:double-spending",
        "label": "Double Spending"
      },
      {
        "@id": "urn:ngm:class:transaction-fee",
        "label": "Transaction Fee"
      },
      {
        "@id": "urn:ngm:class:cryptographic-keys",
        "label": "Cryptographic Keys"
      },
      {
        "@id": "urn:ngm:class:blockchain-network",
        "label": "Blockchain Network"
      },
      {
        "@id": "urn:ngm:class:externally-owned-account",
        "label": "Externally Owned Account"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:balance-based-ledger",
      "label": "Balance-Based Ledger"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:account-model:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:81a70e9d85ae5beda77d38a2a7e93b44ba53d8381520b15d4ad6e2cdbd46262f"
  },
  "vc:resolutions": [
    {
      "raw": "[[IEEE 2418.1]]",
      "resolved": "urn:visionflow:linked:ieee-2418-1",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 23257:2021]]",
      "resolved": "urn:visionflow:linked:iso-iec-23257-2021",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST NISTIR]]",
      "resolved": "urn:visionflow:linked:nist-nistir",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Agent System]]",
      "resolved": "urn:visionflow:owl:class:ai-agent-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[BlockchainDomain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Entity]]",
      "resolved": "urn:visionflow:owl:class:blockchain-entity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConceptualLayer]]",
      "resolved": "urn:visionflow:owl:class:conceptual-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DistributedDataStructure]]",
      "resolved": "urn:visionflow:owl:class:distributed-data-structure",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  The Account Model is a balance-based ledger paradigm in which each address maintains a persistent balance that is updated in-place when transactions execute. Unlike the UTXO model, accounts hold state across transactions, simplifying smart contract programming while introducing challenges around replay protection and nonce management.

- ### Semantic Classification
  - owl-class:: blockchain:AccountModel
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[BlockchainDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  The Account Model contrasts fundamentally with the [[UTXO Model]] used by Bitcoin, trading fine-grained output tracking for simpler stateful programming. It enables [[Smart Contract]] execution by providing addressable mutable state, and all state changes are driven by [[Transaction]] submissions. Account security depends on [[Wallet]] custody of private keys via [[Cryptographic Keys]]. The model simplifies [[Transaction Processing]] logic but requires nonce tracking to prevent [[Double Spending]]. [[Transaction Fee]] calculation is integrated as a gas mechanism in account-based chains like Ethereum.

- ### Content

  ## Class Declaration
  Declaration(Class(:AccountModel))

  ## Subclass Relationships
  SubClassOf(:AccountModel :DistributedDataStructure)
  SubClassOf(:AccountModel :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:AccountModel
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:AccountModel
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :AccountModel "BC-0008"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :AccountModel "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :AccountModel "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :AccountModel :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :AccountModel :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :AccountModel "Account Model"@en)
  AnnotationAssertion(rdfs:comment :AccountModel
    "Balance-based accounting model"@en)
  AnnotationAssertion(dct:description :AccountModel
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :AccountModel "BC-0008")
  AnnotationAssertion(:priority :AccountModel "1"^^xsd:integer)
  AnnotationAssertion(:category :AccountModel "blockchain-fundamentals"@en)
  )
      ```

  #### Design Principles
  In the account model every address—whether an externally owned account or a smart contract—holds a balance and associated state. A transaction decrements the sender's balance and increments the recipient's, with the net difference covering gas fees. Smart contracts store their internal state (mappings, arrays, variables) in the contract's storage trie, making the account model the natural substrate for programmable money and decentralised applications.

  #### Comparison with UTXO
  The UTXO model used by Bitcoin tracks individual unspent outputs, giving it superior parallelism for transaction validation and better privacy properties through output reuse avoidance. The account model sacrifices these properties for easier programmability: developers reason about balances and contract state rather than managing chains of unspent outputs. Ethereum chose the account model specifically to support Turing-complete smart contracts, while Bitcoin's scripting system is intentionally limited.

  #### Nonce and Replay Protection
  Each account maintains a transaction counter (nonce) that must be included in every outgoing transaction. The network rejects transactions whose nonce does not match the expected sequence, preventing replay attacks in which a signed transaction is submitted more than once. This mechanism ties transaction ordering to the account, unlike the UTXO model where outputs can be spent in any order.

  #### Security Considerations
  Because account balances are mutable global state, smart contracts operating on the account model must guard against reentrancy attacks, where a malicious contract recursively calls back into the victim before its state update is committed. Nonce management, access control patterns (checks-effects-interactions), and formal verification tools are the principal defences.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
