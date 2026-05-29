public:: true

# Gas
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:595b3372a1672215d290d79df47127578a28f57df1b6c7f4b837f0c5c1515d7b",
  "@type": "Page",
  "vc:slug": "gas",
  "title": "Gas",
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
      "@id": "urn:visionflow:owl:class:blockchain-entity",
      "vc:label": "Blockchain Entity"
    },
    {
      "@id": "urn:visionflow:owl:class:economic-layer",
      "vc:label": "EconomicLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:economic-mechanism",
      "vc:label": "EconomicMechanism"
    },
    {
      "@id": "urn:visionflow:owl:class:token-economics-domain",
      "vc:label": "TokenEconomicsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0100"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Gas"
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
  "@id": "urn:ngm:class:gas",
  "@type": "Class",
  "label": "Gas",
  "definition": "Gas is the unit of computational work measurement within EVM-compatible blockchains. Every opcode executed by the Ethereum Virtual Machine consumes a defined gas quantity; users pay gas_price × gas_used to validators, preventing denial-of-service through unbounded computation and creating a market for block space.",
  "domain": "blockchain",
  "maturity": "established",
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
      "@id": "urn:ngm:class:economic-mechanism",
      "label": "EconomicMechanism"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:gas-limit", "label": "Gas Limit"},
      {"@id": "urn:ngm:class:gas-price", "label": "Gas Price"},
      {"@id": "urn:ngm:class:gas-fee-market", "label": "Gas Fee Market"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:transaction-fee", "label": "Transaction Fee"},
      {"@id": "urn:ngm:class:fee-market", "label": "Fee Market"},
      {"@id": "urn:ngm:class:eip-1559", "label": "EIP-1559"},
      {"@id": "urn:ngm:class:smart-contract-execution", "label": "Smart Contract Execution"},
      {"@id": "urn:ngm:class:tokenomics", "label": "Tokenomics"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:blockchain-transaction", "label": "Blockchain Transaction"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:gas:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:595b3372a1672215d290d79df47127578a28f57df1b6c7f4b837f0c5c1515d7b"
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
      "raw": "[[Blockchain Entity]]",
      "resolved": "urn:visionflow:owl:class:blockchain-entity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[EconomicLayer]]",
      "resolved": "urn:visionflow:owl:class:economic-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[EconomicMechanism]]",
      "resolved": "urn:visionflow:owl:class:economic-mechanism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TokenEconomicsDomain]]",
      "resolved": "urn:visionflow:owl:class:token-economics-domain",
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
  - Transaction execution cost unit within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:Gas
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[TokenEconomicsDomain]]
  - implemented-in-layer:: [[EconomicLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[EconomicMechanism]]

- ### Content

  ## Class Declaration
  Declaration(Class(:Gas))

  ## Subclass Relationships
  SubClassOf(:Gas :EconomicMechanism)
  SubClassOf(:Gas :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:Gas
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:Gas
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :Gas "BC-0100"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :Gas "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :Gas "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :Gas :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :Gas :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :Gas "Gas"@en)
  AnnotationAssertion(rdfs:comment :Gas
    "Transaction execution cost unit"@en)
  AnnotationAssertion(dct:description :Gas
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :Gas "BC-0100")
  AnnotationAssertion(:priority :Gas "1"^^xsd:integer)
  AnnotationAssertion(:category :Gas "economic-incentive"@en)
  )
      ```

  - ## About Gas

  - Transaction execution cost unit within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  - ### Key Characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  - ### Technical Components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  - ### Use Cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  - ### Standards & References
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
