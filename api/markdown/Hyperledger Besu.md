schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/blockchain#HyperledgerBesu
legacy_uri:: urn:visionclaw:concept:blockchain:hyperledger-besu
public:: true

# Hyperledger Besu
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d049053df1cf9b4d57ee78bd9af6401b7b156825db3ed717c54ec02cdcee358f",
  "@type": "Page",
  "vc:slug": "hyperledger-besu",
  "title": "Hyperledger Besu",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bc-0001-blockchain",
      "vc:label": "BC-0001-blockchain"
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
      "@id": "urn:visionflow:linked:bc-0426-hyperledger-fabric",
      "vc:label": "BC-0426-hyperledger-fabric"
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
      "@id": "urn:visionflow:linked:bc-0431-privacy-preserving-blockchain",
      "vc:label": "BC-0431-privacy-preserving-blockchain"
    },
    {
      "@id": "urn:visionflow:linked:hyperledger-foundation",
      "vc:label": "Hyperledger Foundation"
    },
    {
      "@id": "urn:visionflow:linked:hyperledger-foundation",
      "vc:label": "HyperledgerFoundation"
    },
    {
      "@id": "urn:visionflow:linked:interledger-protocol",
      "vc:label": "InterledgerProtocol"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-domain",
      "vc:label": "BlockchainDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:consensus-protocol",
      "vc:label": "ConsensusProtocol"
    },
    {
      "@id": "urn:visionflow:owl:class:hyperledger-fabric",
      "vc:label": "Hyperledger Fabric"
    },
    {
      "@id": "urn:visionflow:owl:class:practical-byzantine-fault-tolerance",
      "vc:label": "Practical Byzantine Fault Tolerance"
    },
    {
      "@id": "urn:visionflow:owl:class:private-channels",
      "vc:label": "PrivateChannels"
    },
    {
      "@id": "urn:visionflow:owl:class:proof-of-authority",
      "vc:label": "ProofOfAuthority"
    },
    {
      "@id": "urn:visionflow:owl:class:proof-of-work",
      "vc:label": "ProofOfWork"
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
      "vc:value": "sha256-12-d155494f07bd"
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
      "vc:value": "http://narrativegoldmine.com/blockchain#HyperledgerBesu"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0427"
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
      "vc:value": "Hyperledger Besu"
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
      "vc:value": "urn:visionclaw:concept:blockchain:hyperledger-besu"
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
      "vc:value": "urn:visionclaw:concept:blockchain:hyperledger-besu"
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
    "@id": "urn:visionflow:page:d049053df1cf9b4d57ee78bd9af6401b7b156825db3ed717c54ec02cdcee358f@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:hyperledger-besu",
  "@type": "Class",
  "label": "Hyperledger Besu",
  "definition": "Enterprise-grade ereum client developed by [[Hyperledger Foundation]] supporting both public and private blockchain deployments with multiple consensus mechanisms—[[ProofOfWork]], [[ProofOfAuthority]], [[Practical Byzantine Fault Tolerance|PBFT]].",
  "domain": "blockchain",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "blockchain"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:consensus-protocol",
        "label": "ConsensusProtocol"
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
  "@id": "urn:visionflow:annotation:link-resolutions:hyperledger-besu:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d049053df1cf9b4d57ee78bd9af6401b7b156825db3ed717c54ec02cdcee358f"
  },
  "vc:resolutions": [
    {
      "raw": "[[BC-0001-blockchain]]",
      "resolved": "urn:visionflow:linked:bc-0001-blockchain",
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
      "raw": "[[BC-0426-hyperledger-fabric]]",
      "resolved": "urn:visionflow:linked:bc-0426-hyperledger-fabric",
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
      "raw": "[[BC-0431-privacy-preserving-blockchain]]",
      "resolved": "urn:visionflow:linked:bc-0431-privacy-preserving-blockchain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Hyperledger Foundation]]",
      "resolved": "urn:visionflow:linked:hyperledger-foundation",
      "kind": "StubLink"
    },
    {
      "raw": "[[HyperledgerFoundation]]",
      "resolved": "urn:visionflow:linked:hyperledger-foundation",
      "kind": "StubLink"
    },
    {
      "raw": "[[InterledgerProtocol]]",
      "resolved": "urn:visionflow:linked:interledger-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[BlockchainDomain]]",
      "resolved": "urn:visionflow:owl:class:blockchain-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConsensusProtocol]]",
      "resolved": "urn:visionflow:owl:class:consensus-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hyperledger Fabric]]",
      "resolved": "urn:visionflow:owl:class:hyperledger-fabric",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Practical Byzantine Fault Tolerance|PBFT]]",
      "resolved": "urn:visionflow:owl:class:practical-byzantine-fault-tolerance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[PrivateChannels]]",
      "resolved": "urn:visionflow:owl:class:private-channels",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ProofOfAuthority]]",
      "resolved": "urn:visionflow:owl:class:proof-of-authority",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ProofOfWork]]",
      "resolved": "urn:visionflow:owl:class:proof-of-work",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:d049053df1cf9b4d57ee78bd9af6401b7b156825db3ed717c54ec02cdcee358f@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Enterprise-grade Ethereum client developed by [[Hyperledger Foundation]] supporting both public and private blockchain deployments with multiple consensus mechanisms—[[ProofOfWork]], [[ProofOfAuthority]], [[Practical Byzantine Fault Tolerance|PBFT]]. Besu provides full Ethereum compatibility whilst enabling permissioned networks through identity verification and privacy features like [[PrivateChannels]], making it suitable for enterprise consortia and regulatory compliance. The client integrates with [[Hyperledger Fabric]] and [[InterledgerProtocol]] for cross-chain interoperability.

- ### Semantic Classification
  - owl-class:: blockchain:HyperledgerBesu
  - owl-role:: Concept
  - belongs-to-domain:: [[BlockchainDomain]]

- ### Relationships
  - implements:: [[ConsensusProtocol]] (domain: blockchain, type: consensus)
  - part-of:: [[HyperledgerFoundation]] (domain: blockchain, type: organization)
  - ### Original Content
		- ```
  # BC-0427: Hyperledger Besu

  #### Related Concepts
  - [[BC-0426-hyperledger-fabric]]
		  - [[BC-0428-enterprise-blockchain-architecture]]
		  - [[BC-0429-permissioned-blockchain]]
		  - [[BC-0431-privacy-preserving-blockchain]]

		  ## See Also
		  - [[BC-0001-blockchain]]
		  - [[BC-0142-smart-contract]]
		  - [[BC-0315-zero-knowledge-proof]]

		  ```

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
