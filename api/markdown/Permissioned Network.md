public:: true

# Permissioned Network
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:baae6a9077691ca194fa6497b2bc2988838c96f027f30a5a3f0531f090f0da7d",
  "@type": "Page",
  "vc:slug": "permissioned-network",
  "title": "Permissioned Network",
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
      "@id": "urn:visionflow:owl:class:cryptographic-domain",
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
      "vc:value": "BC-0091"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Permissioned Network"
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
  "@id": "urn:ngm:class:permissioned-network",
  "@type": "Class",
  "label": "Permissioned Network",
  "definition": "A Permissioned Network is a distributed ledger architecture in which participation—whether as a validator, transaction submitter, or read-only observer—is restricted to entities that have been explicitly authorised by a governing body or membership protocol. Unlike public blockchains, nodes must satisfy identity verification, legal agreement, or technical credentialing requirements before joining, enabling stronger privacy guarantees, higher throughput, and deterministic finality than open networks while sacrificing censorship resistance. Permissioned networks are the dominant choice for enterprise and consortium deployments such as trade finance, healthcare data exchange, and central-bank digital currency infrastructure.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-network-component",
      "label": "Network Component"
    },
    {
      "@id": "urn:ngm:class:blockchain-entity",
      "label": "Blockchain Entity"
    },
    {
      "@id": "urn:ngm:class:network-component",
      "label": "NetworkComponent"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"},
      {"@id": "urn:ngm:class:identity-management", "label": "Identity Management"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:blockchain-governance", "label": "Blockchain Governance"},
      {"@id": "urn:ngm:class:blockchain-compliance", "label": "Blockchain Compliance"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:validator-node", "label": "Validator Node"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:knowledge-graph-publication-classifier-blockchain", "label": "Public Blockchain"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:private-blockchain", "label": "Private Blockchain"},
      {"@id": "urn:ngm:class:distributed-ledger-technology", "label": "Distributed Ledger Technology"},
      {"@id": "urn:ngm:class:blockchain-interoperability", "label": "Blockchain Interoperability"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:permissioned-network:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:baae6a9077691ca194fa6497b2bc2988838c96f027f30a5a3f0531f090f0da7d"
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
      "raw": "[[CryptographicDomain]]",
      "resolved": "urn:visionflow:owl:class:cryptographic-domain",
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
  A Permissioned Network is a distributed ledger architecture in which participation—whether as a validator, transaction submitter, or read-only observer—is restricted to entities that have been explicitly authorised by a governing body or membership protocol. Unlike public blockchains, nodes must satisfy identity verification, legal agreement, or technical credentialing requirements before joining, enabling stronger privacy guarantees, higher throughput, and deterministic finality than open networks while sacrificing censorship resistance. Permissioned networks are the dominant choice for enterprise and consortium deployments such as trade finance, healthcare data exchange, and central-bank digital currency infrastructure.

- ### Semantic Classification
  - owl-class:: blockchain:PermissionedNetwork
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[NetworkComponent]]
  - requires:: [[Access Control]], [[Identity Management]]
  - enables:: [[Blockchain Governance]], [[Blockchain Compliance]]
  - uses:: [[Consensus Mechanism]], [[Smart Contract]]
  - hasPart:: [[Validator Node]]
  - contrastsWith:: [[Public Blockchain]]
  - relatedTo:: [[Private Blockchain]], [[Distributed Ledger Technology]], [[Blockchain Interoperability]]

- ### Content

  ## Class Declaration
  Declaration(Class(:PermissionedNetwork))

  ## Subclass Relationships
  SubClassOf(:PermissionedNetwork :NetworkComponent)
  SubClassOf(:PermissionedNetwork :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:PermissionedNetwork
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:PermissionedNetwork
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :PermissionedNetwork "BC-0091"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :PermissionedNetwork "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :PermissionedNetwork "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :PermissionedNetwork :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :PermissionedNetwork :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :PermissionedNetwork "Permissioned Network"@en)
  AnnotationAssertion(rdfs:comment :PermissionedNetwork
    "Restricted access blockchain"@en)
  AnnotationAssertion(dct:description :PermissionedNetwork
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :PermissionedNetwork "BC-0091")
  AnnotationAssertion(:priority :PermissionedNetwork "1"^^xsd:integer)
  AnnotationAssertion(:category :PermissionedNetwork "network-security"@en)
  )
      ```

  - ## About Permissioned Network

  A Permissioned Network sits at the intersection of traditional enterprise IT governance and decentralised ledger technology. The core design premise is that not all blockchain use cases benefit from open participation: where nodes are already known counterparties—banks in a payment network, hospitals in a health data consortium, or ministries in a government interoperability initiative—the overhead of global proof-of-work or proof-of-stake consensus is unnecessary and the privacy implications of a public ledger are unacceptable.

  Access control is the defining mechanism. Membership services—such as those provided by Hyperledger Fabric's Certificate Authority or R3 Corda's Doorman—issue cryptographic certificates to approved nodes, and the consensus layer rejects any message not bearing a valid certificate. This allows the network operator to enforce regulatory requirements, conduct KYC checks, and revoke nodes that violate terms of service, none of which are possible on a fully public chain.

  The trade-off is centralisation risk: if the membership authority is compromised or acts maliciously, it can exclude legitimate participants or admit bad actors. Well-designed permissioned networks mitigate this through multi-party governance—requiring a threshold of existing members to approve new joiners—and through smart-contract-encoded governance rules that limit unilateral operator power.

  Performance characteristics of permissioned networks substantially exceed those of public chains. With a known, bounded validator set, BFT-derived consensus algorithms such as Raft or PBFT variants can achieve thousands of transactions per second with sub-second finality, compared to the minutes-to-hours probabilistic finality of proof-of-work networks. This performance profile makes permissioned networks practical for high-frequency enterprise workflows including real-time gross settlement, intraday liquidity management, and IoT sensor data provenance.
  - ### Standards & References
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
