public:: true
alias:: BC-0029-permissioned-blockchain, BC-0429-permissioned-blockchain, PermissionedBlockchain

# Permissioned Blockchain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:19c6a790aa4c8f946d79c28ef559b03773f9cd7c17e5fe8dab6c579c5547d6ac",
  "@type": "Page",
  "vc:slug": "permissioned-blockchain",
  "title": "Permissioned Blockchain",
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
      "@id": "urn:visionflow:linked:bc-0245-proof-of-authority",
      "vc:label": "BC-0245-proof-of-authority"
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
      "@id": "urn:visionflow:linked:bc-0428-enterprise-blockchain-architecture",
      "vc:label": "BC-0428-enterprise-blockchain-architecture"
    },
    {
      "@id": "urn:visionflow:linked:bc-0430-private-channels",
      "vc:label": "BC-0430-private-channels"
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
      "@id": "urn:visionflow:owl:class:hyperledger-fabric",
      "vc:label": "Hyperledger Fabric"
    },
    {
      "@id": "urn:visionflow:owl:class:hyperledger-fabric",
      "vc:label": "HyperledgerFabric"
    },
    {
      "@id": "urn:visionflow:owl:class:private-channels",
      "vc:label": "PrivateChannels"
    },
    {
      "@id": "urn:visionflow:owl:class:quorum-blockchain",
      "vc:label": "Quorum Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:quorum-blockchain",
      "vc:label": "QuorumBlockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:r3-corda",
      "vc:label": "R3 Corda"
    },
    {
      "@id": "urn:visionflow:owl:class:r3-corda",
      "vc:label": "R3Corda"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "SmartContract"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0429"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Permissioned Blockchain"
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
  "@id": "urn:ngm:class:permissioned-blockchain",
  "@type": "Class",
  "label": "Permissioned Blockchain",
  "definition": "A restricted-access distributed ledger controlled by known participants using predefined permissions and pluggable Consensus Mechanism|consensus mechanisms, enabling organisations to leverage blockchain technology's immutability, transparency, and smart contract capabilities whilst maintainin...",
  "domain": "blockchain",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-network-component",
      "label": "Network Component"
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
  "@id": "urn:visionflow:annotation:link-resolutions:permissioned-blockchain:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:19c6a790aa4c8f946d79c28ef559b03773f9cd7c17e5fe8dab6c579c5547d6ac"
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
      "raw": "[[BC-0245-proof-of-authority]]",
      "resolved": "urn:visionflow:linked:bc-0245-proof-of-authority",
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
      "raw": "[[BC-0428-enterprise-blockchain-architecture]]",
      "resolved": "urn:visionflow:linked:bc-0428-enterprise-blockchain-architecture",
      "kind": "StubLink"
    },
    {
      "raw": "[[BC-0430-private-channels]]",
      "resolved": "urn:visionflow:linked:bc-0430-private-channels",
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
      "raw": "[[Hyperledger Fabric]]",
      "resolved": "urn:visionflow:owl:class:hyperledger-fabric",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[HyperledgerFabric]]",
      "resolved": "urn:visionflow:owl:class:hyperledger-fabric",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[PrivateChannels]]",
      "resolved": "urn:visionflow:owl:class:private-channels",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Quorum Blockchain]]",
      "resolved": "urn:visionflow:owl:class:quorum-blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[QuorumBlockchain]]",
      "resolved": "urn:visionflow:owl:class:quorum-blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[R3 Corda]]",
      "resolved": "urn:visionflow:owl:class:r3-corda",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[R3Corda]]",
      "resolved": "urn:visionflow:owl:class:r3-corda",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SmartContract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
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
  - A restricted-access distributed ledger controlled by known participants using predefined permissions and pluggable [[Consensus Mechanism|consensus mechanisms]], enabling organisations to leverage blockchain technology's immutability, transparency, and smart contract capabilities whilst maintaining regulatory compliance and business confidentiality. Permissioned blockchains implement access control at multiple layers—node permissioning restricting which organisations participate, account permissioning controlling transaction submission, and [[PrivateChannels]] enabling confidential subsets of participants to conduct transactions invisibly to others—deployed extensively in enterprise contexts including [[Hyperledger Fabric]], [[Quorum Blockchain]], and [[R3 Corda]] supporting supply chain, trade finance, healthcare, and financial services applications.

- ### Semantic Classification
  - owl-class:: blockchain:PermissionedBlockchain
  - owl-role:: Concept
  - belongs-to-domain:: [[BlockchainDomain]]

- ### Relationships
  - requires:: [[BC-0120-consensus-mechanism]]

- ### Content
  - Restricted-access distributed ledgers controlled by known participants implementing access control at multiple layers—node permissioning restricting participant organisations, account permissioning controlling transaction submission, and [[PrivateChannels]] enabling confidential transaction subsets. Permissioned blockchains maintain blockchain's immutability, transparency, and [[SmartContract]] capabilities whilst enabling regulatory compliance and business confidentiality unsuitable for public networks, deployed across enterprise contexts including [[HyperledgerFabric]], [[QuorumBlockchain]], and [[R3Corda]] supporting supply chain, trade finance, healthcare, and financial services.
  - ### Original Content
		- ```
  # BC-0429: Permissioned Blockchain

  #### Related Concepts
  - [[BC-0426-hyperledger-fabric]]
		  - [[BC-0427-hyperledger-besu]]
		  - [[BC-0428-enterprise-blockchain-architecture]]
		  - [[BC-0430-private-channels]]

		  ## See Also
		  - [[BC-0001-blockchain]]
		  - [[BC-0120-consensus-mechanism]]
		  - [[BC-0245-proof-of-authority]]

		  ```

    - requires:: [[BC-0120-consensus-mechanism]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
