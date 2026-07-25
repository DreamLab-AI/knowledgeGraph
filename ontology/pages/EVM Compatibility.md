public:: true

# EVM Compatibility
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:evm-compatibility", "@type":"Page", "title":"EVM Compatibility", "vc:slug":"evm-compatibility", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:evm-compatibility",
  "@type":"Class",
  "label":"EVM Compatibility",
  "definition":"EVM compatibility is the property of a blockchain or execution environment that allows it to run smart contracts compiled for the Ethereum Virtual Machine without modification, supporting the same bytecode, opcodes and account model. Compatible chains can reuse Ethereum tooling, wallets, contracts and developer skills, which lowers the cost of porting applications and bootstrapping liquidity. It is the foundation of the wider EVM ecosystem spanning Layer-2 rollups, sidechains and alternative Layer-1 networks.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:smart-contract-platform","label":"Smart Contract Platform"}],
  "relations":{
    "dependsOn":[
      {"@id":"urn:ngm:class:evm","label":"EVM"},
      {"@id":"urn:ngm:class:solidity","label":"Solidity"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:interoperability","label":"Interoperability"},
      {"@id":"urn:ngm:class:cross-chain-bridge","label":"Cross-Chain Bridge"},
      {"@id":"urn:ngm:class:optimistic-rollup","label":"Optimistic Rollup"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:layer-2-scaling","label":"Layer 2 Scaling"},
      {"@id":"urn:ngm:class:rollup","label":"Rollup"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:ethereum","label":"Ethereum"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:zk-sync","label":"zkSync"},
      {"@id":"urn:ngm:class:arbitrum","label":"Arbitrum"},
      {"@id":"urn:ngm:class:bnb-chain","label":"BNB Chain"},
      {"@id":"urn:ngm:class:polygon","label":"Polygon"},
      {"@id":"urn:ngm:class:connext","label":"Connext"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- EVM compatibility lets a chain execute [[Smart Contract]] bytecode written for the [[EVM]], reusing the same account and gas model.
	- It makes a network part of the [[Smart Contract Platform]] family that shares [[Ethereum]] tooling and standards.
	- Compatible environments inherit [[Solidity]] contracts, wallets and indexers, dramatically reducing porting cost.
- ### Overview
	- The Ethereum Virtual Machine defines a stack-based instruction set that contracts compile to; compatibility means faithfully reproducing that machine.
	- Chains range from fully equivalent (bytecode-identical) to merely compatible (same source language, slightly different runtime behaviour).
	- Compatibility is the dominant strategy for [[Layer 2 Scaling]] solutions and alternative Layer-1s seeking developer adoption.
	- It underpins composability across the [[Cross-Chain Bridge]] ecosystem by keeping execution semantics aligned.
- ### Mechanisms
	- Bytecode-level equivalence executes the exact opcode set so existing compiled contracts deploy unchanged.
	- Language-level compatibility supports the same high-level languages while permitting a different underlying virtual machine.
	- Precompiles and gas schedules are mirrored to preserve contract economics and cryptographic operations.
	- Tooling parity (RPC API, wallet standards, indexers) ensures the developer experience transfers across chains.
- ### Applications
	- Layer-2 rollups such as [[Optimistic Rollup]] and [[zkSync]] inherit the contract base of mainnet.
	- Alternative Layer-1 chains like [[BNB Chain]] attract applications by promising drop-in deployment.
	- Scaling networks such as [[Arbitrum]] and [[Polygon]] reuse the entire Ethereum developer stack.
	- Bridges and messaging layers like [[Connext]] route assets between compatible execution environments.
- ### Relationships
	- subClassOf:: [[Smart Contract Platform]]
	- dependsOn:: [[EVM]]
	- dependsOn:: [[Solidity]]
	- enables:: [[Interoperability]]
	- enables:: [[Cross-Chain Bridge]]
	- enables:: [[Optimistic Rollup]]
	- implements:: [[Smart Contract]]
	- supports:: [[Layer 2 Scaling]]
	- supports:: [[Rollup]]
	- uses:: [[Ethereum]]
	- relatedTo:: [[zkSync]]
	- relatedTo:: [[Arbitrum]]
	- relatedTo:: [[BNB Chain]]
	- relatedTo:: [[Polygon]]
	- relatedTo:: [[Connext]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
