schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/blockchain#EnterpriseBlockchainArchitecture
legacy_uri:: urn:visionclaw:concept:blockchain:enterprise-blockchain-architecture
public:: true

# Enterprise Blockchain Architecture
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bdb12fd3730c7ae2d3237a8f2128b4fdec557356139cf7a799957188f554b8cd",
  "@type": "Page",
  "vc:slug": "enterprise-blockchain-architecture",
  "title": "Enterprise Blockchain Architecture",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bc-0001-blockchain",
      "vc:label": "BC-0001-blockchain"
    },
    {
      "@id": "urn:visionflow:linked:bc-0120-consensus-mechanism",
      "vc:label": "BC-0120-consensus-mechanism"
    },
    {
      "@id": "urn:visionflow:linked:bc-0142-smart-contract",
      "vc:label": "BC-0142-smart-contract"
    },
    {
      "@id": "urn:visionflow:linked:bc-0426-hyperledger-fabric",
      "vc:label": "BC-0426-hyperledger-fabric"
    },
    {
      "@id": "urn:visionflow:linked:bc-0427-hyperledger-besu",
      "vc:label": "BC-0427-hyperledger-besu"
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
      "@id": "urn:visionflow:linked:corda",
      "vc:label": "Corda"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-domain",
      "vc:label": "BlockchainDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:consensus-mechanism",
      "vc:label": "Consensus Mechanism"
    },
    {
      "@id": "urn:visionflow:owl:class:hyperledger-besu",
      "vc:label": "Hyperledger Besu"
    },
    {
      "@id": "urn:visionflow:owl:class:hyperledger-fabric",
      "vc:label": "Hyperledger Fabric"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
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
      "vc:value": "sha256-12-b6d5cd258699"
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
      "vc:value": "http://narrativegoldmine.com/blockchain#EnterpriseBlockchainArchitecture"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0428"
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
      "vc:value": "Enterprise Blockchain Architecture"
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
      "vc:value": "urn:visionclaw:concept:blockchain:enterprise-blockchain-architecture"
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
      "vc:value": "urn:visionclaw:concept:blockchain:enterprise-blockchain-architecture"
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
    "@id": "urn:visionflow:page:bdb12fd3730c7ae2d3237a8f2128b4fdec557356139cf7a799957188f554b8cd@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:enterprise-blockchain-architecture",
  "@type": "Class",
  "label": "Enterprise Blockchain Architecture",
  "definition": "Permissioned, enterprise-grade blockchain infrastructure implementing [[Consensus Mechanism|consensus mechanisms]], [[Smart Contract|smart contracts]], and governance frameworks for organisations requiring controlled participation, privacy, and regulatory compliance—exemplified by [[Hyperledger F...",
  "domain": "blockchain",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:smart-contract-platform",
      "label": "Smart Contract Platform"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bc-0120-consensus-mechanism",
        "label": "BC-0120-consensus-mechanism"
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
  "@id": "urn:visionflow:annotation:link-resolutions:enterprise-blockchain-architecture:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:bdb12fd3730c7ae2d3237a8f2128b4fdec557356139cf7a799957188f554b8cd"
  },
  "vc:resolutions": [
    {
      "raw": "[[BC-0001-blockchain]]",
      "resolved": "urn:visionflow:linked:bc-0001-blockchain",
      "kind": "StubLink"
    },
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
      "raw": "[[BC-0426-hyperledger-fabric]]",
      "resolved": "urn:visionflow:linked:bc-0426-hyperledger-fabric",
      "kind": "StubLink"
    },
    {
      "raw": "[[BC-0427-hyperledger-besu]]",
      "resolved": "urn:visionflow:linked:bc-0427-hyperledger-besu",
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
      "raw": "[[Corda]]",
      "resolved": "urn:visionflow:linked:corda",
      "kind": "StubLink"
    },
    {
      "raw": "[[BlockchainDomain]]",
      "resolved": "urn:visionflow:owl:class:blockchain-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consensus Mechanism|consensus mechanisms]]",
      "resolved": "urn:visionflow:owl:class:consensus-mechanism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hyperledger Besu]]",
      "resolved": "urn:visionflow:owl:class:hyperledger-besu",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hyperledger Fabric]]",
      "resolved": "urn:visionflow:owl:class:hyperledger-fabric",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract|smart contracts]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:bdb12fd3730c7ae2d3237a8f2128b4fdec557356139cf7a799957188f554b8cd@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Permissioned, enterprise-grade blockchain infrastructure implementing [[Consensus Mechanism|consensus mechanisms]], [[Smart Contract|smart contracts]], and governance frameworks for organisations requiring controlled participation, privacy, and regulatory compliance—exemplified by [[Hyperledger Fabric]], [[Hyperledger Besu]], and [[Corda]].

- ### Semantic Classification
  - owl-class:: blockchain:EnterpriseBlockchainArchitecture
  - owl-role:: Concept
  - belongs-to-domain:: [[BlockchainDomain]]

- ### Relationships
  - requires:: [[BC-0120-consensus-mechanism]]

- ### Content
  - Enterprise blockchain architecture provides permissioned, controlled infrastructure for organisations requiring privacy, regulatory compliance, and managed governance, addressing enterprise-specific needs through consensus mechanisms, smart contracts, and access controls.
  - ### Original Content
		- ```
  # BC-0428: Enterprise Blockchain Architecture

  #### Related Concepts
  - [[BC-0426-hyperledger-fabric]]
		  - [[BC-0427-hyperledger-besu]]
		  - [[BC-0429-permissioned-blockchain]]
		  - [[BC-0430-private-channels]]

		  ## See Also
		  - [[BC-0001-blockchain]]
		  - [[BC-0120-consensus-mechanism]]
		  - [[BC-0142-smart-contract]]

		  ```

    - requires:: [[BC-0120-consensus-mechanism]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
