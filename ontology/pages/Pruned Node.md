public:: true

# Pruned Node
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:486b0774b2dc7833e2441c3cc11752ded953f1d01094807eaea2ba7bd42b1a46",
  "@type": "Page",
  "vc:slug": "pruned-node",
  "title": "Pruned Node",
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
      "vc:value": "BC-0094"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Pruned Node"
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
  "@id": "urn:ngm:class:pruned-node",
  "@type": "Class",
  "label": "Pruned Node",
  "definition": "A Pruned Node is a blockchain full node that validates the complete chain history during initial block download but subsequently discards spent transaction outputs and old block data beyond a configurable retention window, reducing on-disk storage requirements by orders of magnitude while retaining full validation capability for new blocks. Pruning enables operators with limited storage (e.g. 5–10 GB rather than 500+ GB for Bitcoin's full history) to participate in consensus verification without trusting third parties, unlike SPV light nodes that skip validation entirely. The pruned node can no longer serve historical block data to peers, constraining its contribution to network archival.",
  "domain": "blockchain",
  "maturity": "established",
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
      "label": "Network Component"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:full-node", "label": "Full Node"},
      {"@id": "urn:ngm:class:light-node", "label": "Light Node"},
      {"@id": "urn:ngm:class:archival-node", "label": "Archival Node"},
      {"@id": "urn:ngm:class:utxo-model", "label": "UTXO Model"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:blockchain-scalability", "label": "Blockchain Scalability"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:archival-node", "label": "Archival Node"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:data-storage", "label": "Data Storage"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"}
    ]
  },
  "qualityScore": 0.8,
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
  "@id": "urn:visionflow:annotation:link-resolutions:pruned-node:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:486b0774b2dc7833e2441c3cc11752ded953f1d01094807eaea2ba7bd42b1a46"
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
  A Pruned Node is a blockchain full node that validates the complete chain history during initial block download but subsequently discards spent transaction outputs and old block data beyond a configurable retention window, reducing on-disk storage by orders of magnitude while retaining full validation capability. Pruning enables operators with limited storage to participate in consensus without trusting third parties, unlike SPV light nodes that skip validation entirely.

- ### Semantic Classification
  - owl-class:: blockchain:PrunedNode
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  A Pruned Node is **related to** Full Node (the uncompromised variant), Light Node (which provides even less verification), Archival Node (which retains complete history), and the UTXO Model (whose spent-output set is what pruning discards). It **requires** the Blockchain itself and Cryptographic Hash Functions to verify block integrity. It **enables** Consensus Mechanism participation and improves Blockchain Scalability by lowering the barrier to running validating nodes. It **contrasts with** Archival Nodes that retain full history for serving historical queries. It **depends on** Data Storage subsystems. It is **part of** the Blockchain Network as a validating participant.

- ### Content

  ## Class Declaration
  Declaration(Class(:PrunedNode))

  ## Subclass Relationships
  SubClassOf(:PrunedNode :NetworkComponent)
  SubClassOf(:PrunedNode :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:PrunedNode
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:PrunedNode
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :PrunedNode "BC-0094"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :PrunedNode "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :PrunedNode "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :PrunedNode :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :PrunedNode :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :PrunedNode "Pruned Node"@en)
  AnnotationAssertion(rdfs:comment :PrunedNode
    "Partial history storage node"@en)
  AnnotationAssertion(dct:description :PrunedNode
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :PrunedNode "BC-0094")
  AnnotationAssertion(:priority :PrunedNode "1"^^xsd:integer)
  AnnotationAssertion(:category :PrunedNode "network-security"@en)
  )
      ```

  Pruned nodes occupy an important middle ground in the blockchain node taxonomy. A full archival node stores the entire chain history from genesis—by mid-2025, Bitcoin's full UTXO set and block data exceeded 600 GB—making operation impractical on consumer hardware with modest storage. A pruned node downloads and validates every block during initial block download (IBD), maintaining the same security model as a full node, but once IBD completes it discards blocks and transactions older than its configured retention depth, retaining only the current UTXO set plus recent blocks sufficient to handle reorgs.

  The key distinction from SPV (Simple Payment Verification) light nodes is validation. SPV nodes do not verify block content; they trust the longest proof-of-work chain and verify only Merkle inclusion proofs for specific transactions. A pruned node verifies every transaction it processes against the full consensus rules, making it immune to miner fraud and block-withholding attacks that SPV clients cannot detect.

  Bitcoin Core implements pruning with a configurable `prune=N` setting specifying the minimum retained block data in MiB (minimum 550 MiB, practical range 1–10 GB). Ethereum clients implement similar state pruning through mechanisms like snap sync and path-based state storage, addressing the Ethereum state bloat problem where the state trie grew to hundreds of GB due to accumulated contract state.

  The trade-off is that pruned nodes cannot serve historical block data to peers requesting blocks they have discarded. This limits the network's archival capacity if most nodes prune aggressively. Preserving the archival layer requires a population of unpruned archival nodes, motivating economic models (such as fee incentives for archive providers) to ensure historical data remains accessible.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
