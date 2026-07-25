public:: true
alias:: Double-Spending, Double-spending, double-spending

# Double Spending
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fe573114145ca230161077c18c505721302d7e98e1341926dba169138cd70f1d",
  "@type": "Page",
  "vc:slug": "double-spending",
  "title": "Double Spending",
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
      "@id": "urn:visionflow:owl:class:blockchain-entity",
      "vc:label": "Blockchain Entity"
    },
    {
      "@id": "urn:visionflow:owl:class:bc-cryptographic-primitive",
      "vc:label": "CryptographicDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:network-component",
      "vc:label": "NetworkComponent"
    },
    {
      "@id": "urn:visionflow:owl:class:security-layer",
      "vc:label": "SecurityLayer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0076"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Double Spending"
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
  "@id": "urn:ngm:class:double-spending",
  "@type": "Class",
  "label": "Double Spending",
  "definition": "Double spending is the fraudulent attempt to spend the same digital asset more than once by broadcasting conflicting transactions to different parts of a blockchain network before they are confirmed. It represents the fundamental security problem that consensus mechanisms are designed to prevent in distributed ledger systems.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.75,
  "subClassOf": {
    "@id": "urn:ngm:class:bc-protocol-and-consensus",
    "label": "Protocol and Consensus"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:transaction-finality",
        "label": "Transaction Finality"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:attack-vector",
        "label": "Attack Vector"
      },
      {
        "@id": "urn:ngm:class:51-attack",
        "label": "51% Attack"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:finality",
        "label": "Finality"
      },
      {
        "@id": "urn:ngm:class:transaction-confirmation",
        "label": "Transaction Confirmation"
      },
      {
        "@id": "urn:ngm:class:byzantine-fault-tolerance",
        "label": "Byzantine Fault Tolerance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain-transaction",
        "label": "Blockchain Transaction"
      },
      {
        "@id": "urn:ngm:class:utxo",
        "label": "UTXO"
      },
      {
        "@id": "urn:ngm:class:transaction-propagation",
        "label": "Transaction Propagation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:sybil-attack",
        "label": "Sybil Attack"
      },
      {
        "@id": "urn:ngm:class:selfish-mining",
        "label": "Selfish Mining"
      },
      {
        "@id": "urn:ngm:class:eclipse-attack",
        "label": "Eclipse Attack"
      },
      {
        "@id": "urn:ngm:class:cryptographic-signature",
        "label": "Cryptographic Signature"
      },
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof Of Work"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      },
      {
        "@id": "urn:ngm:class:block-confirmation",
        "label": "Block Confirmation"
      },
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:cybersecurity",
        "label": "Cybersecurity"
      },
      {
        "@id": "urn:ngm:class:blockchain-security",
        "label": "Blockchain Security"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-currency",
        "label": "Digital Currency"
      },
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:duplicate-payment-attack",
      "label": "Duplicate Payment Attack"
    },
    {
      "@id": "urn:ngm:class:double-spend-attack",
      "label": "Double-Spend Attack"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:double-spending:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fe573114145ca230161077c18c505721302d7e98e1341926dba169138cd70f1d"
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
      "raw": "[[Blockchain Entity]]",
      "resolved": "urn:visionflow:owl:class:blockchain-entity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CryptographicDomain]]",
      "resolved": "urn:visionflow:owl:class:bc-cryptographic-primitive",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NetworkComponent]]",
      "resolved": "urn:visionflow:owl:class:network-component",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SecurityLayer]]",
      "resolved": "urn:visionflow:owl:class:security-layer",
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
  Double spending is the fraudulent attempt to spend the same digital asset more than once by broadcasting conflicting transactions to different parts of a blockchain network before they are confirmed. It represents the fundamental security problem that consensus mechanisms are designed to prevent in distributed ledger systems.

- ### Semantic Classification
  - owl-class:: blockchain:DoubleSpending
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  Double Spending requires a functioning [[Consensus Mechanism]] and [[Transaction Finality]] to be prevented. It enables [[Attack Vector]] scenarios and is closely related to [[Selfish Mining]], [[Sybil Attack]], and [[Eclipse Attack]] as complementary adversarial strategies. Successful double-spend attacks undermine [[Transaction Confirmation]] guarantees. [[Cryptographic Signature]] schemes make undetected double-spending of individual outputs cryptographically infeasible; the attack instead relies on network-level race conditions.

- ### Content

  ## Class Declaration
  Declaration(Class(:DoubleSpending))

  ## Subclass Relationships
  SubClassOf(:DoubleSpending :NetworkComponent)
  SubClassOf(:DoubleSpending :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:DoubleSpending
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:DoubleSpending
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :DoubleSpending "BC-0076"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :DoubleSpending "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :DoubleSpending "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :DoubleSpending :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :DoubleSpending :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :DoubleSpending "Double Spending"@en)
  AnnotationAssertion(rdfs:comment :DoubleSpending
    "Fraudulent duplicate payment"@en)
  AnnotationAssertion(dct:description :DoubleSpending
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :DoubleSpending "BC-0076")
  AnnotationAssertion(:priority :DoubleSpending "1"^^xsd:integer)
  AnnotationAssertion(:category :DoubleSpending "network-security"@en)
  )
      ```

  #### Attack Mechanics
  In a double-spend attempt, an attacker sends a transaction to a merchant and simultaneously—or shortly after—broadcasts a conflicting transaction returning the same funds to an address they control. If the attacker can ensure their conflicting transaction is included in the canonical chain (e.g., by commanding sufficient hash power in a 51% attack, or by exploiting propagation delays), the first transaction is orphaned and the merchant's payment reversed.

  #### Prevention Mechanisms
  The primary defence is waiting for sufficient block confirmations before considering a transaction final—six blocks is the conventional standard for Bitcoin. Byzantine Fault Tolerant consensus systems eliminate probabilistic finality entirely by requiring a supermajority vote before a block is committed, making double-spending cryptographically impossible once a block is finalised. Payment channels and Layer 2 networks introduce additional on-chain anchors that make double-spending off-chain transactions detectable and punishable.

  #### Relationship to Network Attacks
  Double spending is closely intertwined with Eclipse Attack (isolating nodes to control their view of the chain) and Partition Attack (splitting the network into disconnected subgraphs). Both network-level attacks can be used to facilitate double spending by preventing honest nodes from seeing the conflicting transaction until after the malicious branch is established. Selfish Mining can also increase the probability of a successful double spend by enabling an attacker to build a private chain advantage.

  #### Economic Considerations
  The cost of a successful double-spend attack is bounded by the expense of achieving network dominance (hash power or stake) multiplied by the probability of success, weighed against the value of assets spent. High-value transactions therefore warrant longer confirmation windows. Networks with lower total hash rate or stake are more vulnerable, motivating the design of Hybrid Consensus schemes that add BFT finality to proof-based chains.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
