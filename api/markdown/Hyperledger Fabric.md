schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/blockchain#HyperledgerFabric
legacy_uri:: urn:visionclaw:concept:blockchain:hyperledger-fabric
public:: true

# Hyperledger Fabric
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:39026dcf0af5620dc1216002a53c5444dd4eb4085f119973efcc263e84070167",
  "@type": "Page",
  "vc:slug": "hyperledger-fabric",
  "title": "Hyperledger Fabric",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bc-0120-consensus-mechanism",
      "vc:label": "BC-0120-consensus-mechanism"
    },
    {
      "@id": "urn:visionflow:linked:bc-0142-smart-contract",
      "vc:label": "BC-0142-smart-contract"
    },
    {
      "@id": "urn:visionflow:linked:bc-0315-zero-knowledge-proof",
      "vc:label": "BC-0315-zero-knowledge-proof"
    },
    {
      "@id": "urn:visionflow:linked:bc-0427-hyperledger-besu",
      "vc:label": "BC-0427-hyperledger-besu"
    },
    {
      "@id": "urn:visionflow:linked:bc-0428-enterprise-blockchain-architecture",
      "vc:label": "BC-0428-enterprise-blockchain-architecture"
    },
    {
      "@id": "urn:visionflow:linked:bc-0429-permissioned-blockchain",
      "vc:label": "BC-0429-permissioned-blockchain"
    },
    {
      "@id": "urn:visionflow:linked:bc-0430-private-channels",
      "vc:label": "BC-0430-private-channels"
    },
    {
      "@id": "urn:visionflow:linked:bc-0446-supply-chain-traceability",
      "vc:label": "BC-0446-supply-chain-traceability"
    },
    {
      "@id": "urn:visionflow:linked:hyperledger-foundation",
      "vc:label": "HyperledgerFoundation"
    },
    {
      "@id": "urn:visionflow:owl:class:access-control",
      "vc:label": "AccessControl"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-domain",
      "vc:label": "BlockchainDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:practical-byzantine-fault-tolerance",
      "vc:label": "PracticalByzantineFaultTolerance"
    },
    {
      "@id": "urn:visionflow:owl:class:private-channels",
      "vc:label": "PrivateChannels"
    },
    {
      "@id": "urn:visionflow:owl:class:public-blockchain",
      "vc:label": "PublicBlockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "SmartContract"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-791fb1dfdd00"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "blockchain"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/blockchain#HyperledgerFabric"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0426"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Hyperledger Fabric"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.40"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:blockchain:hyperledger-fabric"
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:blockchain:hyperledger-fabric"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:39026dcf0af5620dc1216002a53c5444dd4eb4085f119973efcc263e84070167@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:hyperledger-fabric",
  "@type": "Class",
  "label": "Hyperledger Fabric",
  "definition": "Permissioned blockchain framework enabling enterprise consortia to build modular, confidential systems through [[PrivateChannels]], [[SmartContract|chaincode]], and pluggable consensus mechanisms.",
  "domain": "blockchain",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "blockchain"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:private-channels",
        "label": "PrivateChannels"
      }
    ]
  },
  "quality": 0.4,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:hyperledger-fabric:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:39026dcf0af5620dc1216002a53c5444dd4eb4085f119973efcc263e84070167"
  },
  "vc:resolutions": [
    {
      "raw": "[[BC-0120-consensus-mechanism]]",
      "resolved": "urn:visionflow:linked:bc-0120-consensus-mechanism",
      "kind": "StubLink"
    },
    {
      "raw": "[[BC-0142-smart-contract]]",
      "resolved": "urn:visionflow:linked:bc-0142-smart-contract",
      "kind": "StubLink"
    },
    {
      "raw": "[[BC-0315-zero-knowledge-proof]]",
      "resolved": "urn:visionflow:linked:bc-0315-zero-knowledge-proof",
      "kind": "StubLink"
    },
    {
      "raw": "[[BC-0427-hyperledger-besu]]",
      "resolved": "urn:visionflow:linked:bc-0427-hyperledger-besu",
      "kind": "StubLink"
    },
    {
      "raw": "[[BC-0428-enterprise-blockchain-architecture]]",
      "resolved": "urn:visionflow:linked:bc-0428-enterprise-blockchain-architecture",
      "kind": "StubLink"
    },
    {
      "raw": "[[BC-0429-permissioned-blockchain]]",
      "resolved": "urn:visionflow:linked:bc-0429-permissioned-blockchain",
      "kind": "StubLink"
    },
    {
      "raw": "[[BC-0430-private-channels]]",
      "resolved": "urn:visionflow:linked:bc-0430-private-channels",
      "kind": "StubLink"
    },
    {
      "raw": "[[BC-0446-supply-chain-traceability]]",
      "resolved": "urn:visionflow:linked:bc-0446-supply-chain-traceability",
      "kind": "StubLink"
    },
    {
      "raw": "[[HyperledgerFoundation]]",
      "resolved": "urn:visionflow:linked:hyperledger-foundation",
      "kind": "StubLink"
    },
    {
      "raw": "[[AccessControl]]",
      "resolved": "urn:visionflow:owl:class:access-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[BlockchainDomain]]",
      "resolved": "urn:visionflow:owl:class:blockchain-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[PracticalByzantineFaultTolerance|PBFT]]",
      "resolved": "urn:visionflow:owl:class:practical-byzantine-fault-tolerance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[PrivateChannels]]",
      "resolved": "urn:visionflow:owl:class:private-channels",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[PublicBlockchain|public blockchains]]",
      "resolved": "urn:visionflow:owl:class:public-blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SmartContract|chaincode]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:39026dcf0af5620dc1216002a53c5444dd4eb4085f119973efcc263e84070167@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Permissioned blockchain framework enabling enterprise consortia to build modular, confidential systems through [[PrivateChannels]], [[SmartContract|chaincode]], and pluggable consensus mechanisms. Fabric implements execute-order-validate architecture enabling [[PrivateChannels]] where subsets of members conduct transactions invisibly to others, and supports multiple consensus options—{{Raft}}, [[PracticalByzantineFaultTolerance|PBFT]], custom implementations—adapted to consortium requirements. Unlike [[PublicBlockchain|public blockchains]], Fabric uses member certificate authorities for identity validation and [[AccessControl]] policies governing permission boundaries.

- ### Semantic Classification
  - owl-class:: blockchain:HyperledgerFabric
  - owl-role:: Concept
  - belongs-to-domain:: [[BlockchainDomain]]

- ### Relationships
  - uses:: [[PrivateChannels]] (domain: blockchain, type: confidentiality)
  - part-of:: [[HyperledgerFoundation]] (domain: blockchain, type: organization)
  - ### Original Content
		- ```
  # BC-0426: Hyperledger Fabric

  #### Related Concepts
  - [[BC-0427-hyperledger-besu]]
		  - [[BC-0428-enterprise-blockchain-architecture]]
		  - [[BC-0429-permissioned-blockchain]]
		  - [[BC-0430-private-channels]]
		  - [[BC-0446-supply-chain-traceability]]

		  ## See Also
		  - [[BC-0120-consensus-mechanism]]
		  - [[BC-0142-smart-contract]]
		  - [[BC-0315-zero-knowledge-proof]]

		  ```

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
