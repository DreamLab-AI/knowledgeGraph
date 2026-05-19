schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/blockchain#Sidechain
legacy_uri:: urn:visionclaw:concept:blockchain:sidechain
public:: true

# Sidechain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e3e8e53247925b96c8fb6447b919d46b9d671f0bf34767040ba3962e14dfcbc0",
  "@type": "Page",
  "vc:slug": "sidechain",
  "title": "Sidechain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:federated-byzantine-agreement",
      "vc:label": "Federated Byzantine Agreement"
    },
    {
      "@id": "urn:visionflow:linked:gnosis-chain",
      "vc:label": "Gnosis Chain"
    },
    {
      "@id": "urn:visionflow:linked:layer-1",
      "vc:label": "Layer 1"
    },
    {
      "@id": "urn:visionflow:linked:liquid-network",
      "vc:label": "Liquid Network"
    },
    {
      "@id": "urn:visionflow:linked:polygon-po-s",
      "vc:label": "Polygon PoS"
    },
    {
      "@id": "urn:visionflow:linked:rollup",
      "vc:label": "Rollup"
    },
    {
      "@id": "urn:visionflow:linked:ronin",
      "vc:label": "Ronin"
    },
    {
      "@id": "urn:visionflow:linked:scalability-solutions",
      "vc:label": "Scalability Solutions"
    },
    {
      "@id": "urn:visionflow:linked:two-way-peg",
      "vc:label": "Two-Way Peg"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:cross-chain-bridge",
      "vc:label": "Cross-Chain Bridge"
    },
    {
      "@id": "urn:visionflow:owl:class:state-channel",
      "vc:label": "State Channel"
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
      "vc:value": "sha256-12-e1c2edb76d01"
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
      "vc:value": "http://narrativegoldmine.com/blockchain#Sidechain"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-8016"
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
      "vc:value": "Sidechain"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:blockchain:sidechain"
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:blockchain:sidechain"
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
    "@id": "urn:visionflow:page:e3e8e53247925b96c8fb6447b919d46b9d671f0bf34767040ba3962e14dfcbc0@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:sidechain",
  "@type": "OntologyClass",
  "label": "Sidechain",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    }
  ],
  "vc:sourceDomain": "blockchain",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:e3e8e53247925b96c8fb6447b919d46b9d671f0bf34767040ba3962e14dfcbc0"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:e3e8e53247925b96c8fb6447b919d46b9d671f0bf34767040ba3962e14dfcbc0@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Independent blockchain connected to a parent blockchain via a two-way peg mechanism that operates with its own consensus and validation rules while enabling asset transfers between chains, providing scalability and experimental capabilities without impacting the main chain.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:implements": [
    {
      "@id": "urn:visionflow:linked:two-way-peg",
      "vc:label": "Two-Way Peg"
    }
  ],
  "vc:uses": [
    {
      "@id": "urn:visionflow:owl:class:cross-chain-bridge",
      "vc:label": "Cross-Chain Bridge"
    }
  ],
  "vc:contrastsWith": [
    {
      "@id": "urn:visionflow:linked:rollup",
      "vc:label": "Rollup"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:sidechain:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e3e8e53247925b96c8fb6447b919d46b9d671f0bf34767040ba3962e14dfcbc0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Federated Byzantine Agreement]]",
      "resolved": "urn:visionflow:linked:federated-byzantine-agreement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Gnosis Chain]]",
      "resolved": "urn:visionflow:linked:gnosis-chain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Layer 1]]",
      "resolved": "urn:visionflow:linked:layer-1",
      "kind": "StubLink"
    },
    {
      "raw": "[[Liquid Network]]",
      "resolved": "urn:visionflow:linked:liquid-network",
      "kind": "StubLink"
    },
    {
      "raw": "[[Polygon PoS]]",
      "resolved": "urn:visionflow:linked:polygon-po-s",
      "kind": "StubLink"
    },
    {
      "raw": "[[Rollup]]",
      "resolved": "urn:visionflow:linked:rollup",
      "kind": "StubLink"
    },
    {
      "raw": "[[Ronin]]",
      "resolved": "urn:visionflow:linked:ronin",
      "kind": "StubLink"
    },
    {
      "raw": "[[Scalability Solutions]]",
      "resolved": "urn:visionflow:linked:scalability-solutions",
      "kind": "StubLink"
    },
    {
      "raw": "[[Two-Way Peg]]",
      "resolved": "urn:visionflow:linked:two-way-peg",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cross-Chain Bridge]]",
      "resolved": "urn:visionflow:owl:class:cross-chain-bridge",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[State Channel]]",
      "resolved": "urn:visionflow:owl:class:state-channel",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:e3e8e53247925b96c8fb6447b919d46b9d671f0bf34767040ba3962e14dfcbc0@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Independent blockchain connected to a parent blockchain via a two-way peg mechanism that operates with its own consensus and validation rules while enabling asset transfers between chains, providing scalability and experimental capabilities without impacting the main chain.

- ### Semantic Classification
  - owl-class:: blockchain:Sidechain
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Blockchain]]
  - implements:: [[Two-Way Peg]]

- ### Content

  ## Definition
  - Independent blockchain connected to parent blockchain via two-way peg
  - Operates with own consensus mechanism and validation rules
  - Enables asset transfer between main chain and sidechain while maintaining separate security model

  ## Core Components
  - **Two-Way Peg**: Mechanism for locking assets on main chain and issuing on sidechain
  - **Federated Validators**: Custodians managing cross-chain asset transfers
  - **Consensus Layer**: Independent block production and finalization
  - **Bridge Contract**: Smart contract coordinating asset transfers

  ## Technical Characteristics
  - **Independent Security**: Own validator set and consensus rules
  - **Flexible Design**: Custom block time, transaction format, and VM
  - **Asset Portability**: Native token representation across chains
  - **Scalability**: Parallel transaction processing off main chain

  ## Peg Mechanisms
  - **Symmetric Peg**: Equal value representation on both chains
  - **Asymmetric Peg**: Different tokenomics on sidechain
  - **SPV Proof**: Simplified payment verification for cross-chain validation
  - **Federated Signatures**: Multi-sig control of locked assets

  ## Use Cases
  - High-throughput transaction processing
  - Experimental feature deployment
  - Privacy-enhanced transactions
  - Gaming and microtransaction platforms

  ## Examples
  - [[Polygon PoS]]: Ethereum sidechain with plasma bridge
  - [[Liquid Network]]: Bitcoin sidechain for fast settlement
  - [[Ronin]]: Gaming-focused Ethereum sidechain
  - [[Gnosis Chain]]: Prediction market sidechain

  ## Relationships
  - connected-to:: [[Layer 1]]
  - implements:: [[Two-Way Peg]]
  - uses:: [[Cross-Chain Bridge]]
  - contrasts-with:: [[Rollup]]
  - alternative-to:: [[State Channel]]

  ## Security Model
  - Trust assumptions in bridge validators
  - Economic security independent from main chain
  - Potential centralization in federated pegs
  - Reorganization risks with different finality guarantees

  ## Advantages
  - No parent chain throughput constraints
  - Flexible consensus and execution rules
  - Lower transaction costs
  - Isolated security incidents

  ## Limitations
  - Weaker security guarantees than main chain
  - Bridge vulnerability attack surface
  - Asset liquidity fragmentation
  - Validator set trust requirements

  ## Performance Metrics
  - Cross-chain transfer latency
  - Bridge validator decentralization
  - Transaction throughput vs main chain
  - Asset lock duration requirements

  #### Related Concepts
  - [[Cross-Chain Bridge]]
  - [[Scalability Solutions]]
  - [[Two-Way Peg]]
  - [[Federated Byzantine Agreement]]

  #blockchain #sidechain #scalability #bridge

  ### Relationships
  - is-subclass-of:: [[Blockchain]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
