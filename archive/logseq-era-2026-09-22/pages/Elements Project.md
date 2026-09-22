public:: true

# Elements Project
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:elements-project", "@type":"Page", "title":"Elements Project", "vc:slug":"elements-project", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:elements-project",
  "@type":"Class",
  "label":"Elements Project",
  "definition":"The Elements Project is an open-source blockchain platform, derived from Bitcoin Core, that serves as a testbed and reference implementation for advanced features such as confidential transactions, asset issuance, and federated sidechains. Maintained primarily by Blockstream, it provides the codebase underpinning the Liquid Network and allows developers to experiment with extensions that may later be proposed for Bitcoin itself. It packages cryptographic enhancements like confidential assets and amounts into a deployable, Bitcoin-compatible client.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:open-source-software","label":"Open Source Software"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:blockstream","label":"Blockstream"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:bitcoin-core","label":"Bitcoin Core"},
      {"@id":"urn:ngm:class:cryptography","label":"Cryptography"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:bitcoin-core","label":"Bitcoin Core"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:confidential-transactions","label":"Confidential Transactions"},
      {"@id":"urn:ngm:class:sidechain","label":"Sidechain"},
      {"@id":"urn:ngm:class:segregated-witness","label":"Segregated Witness"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:liquid-network","label":"Liquid Network"},
      {"@id":"urn:ngm:class:confidential-transactions","label":"Confidential Transactions"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:sidechain","label":"Sidechain"},
      {"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"}
    ],
    "standardizedBy":[
      {"@id":"urn:ngm:class:blockstream","label":"Blockstream"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:bitcoin","label":"Bitcoin"},
      {"@id":"urn:ngm:class:schnorr-signature","label":"Schnorr Signature"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:liquid-network","label":"Liquid Network"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- The [[Elements Project]] is an [[Open Source Software|open-source]] blockchain platform forked from [[Bitcoin Core]] to prototype advanced ledger features.
	- It is stewarded by [[Blockstream]] and supplies the codebase for the [[Liquid Network]].
	- It bundles cryptographic extensions such as [[Confidential Transactions]] and confidential assets into a deployable client.
- ### Overview
	- Elements began as a sidechain-elements platform: a way to demonstrate features that the conservative Bitcoin protocol does not yet ship, while remaining structurally compatible with Bitcoin.
	- Among its headline capabilities are confidential transactions (hiding amounts), confidential assets (issuing and transacting multiple asset types privately), and a federated two-way peg architecture.
	- Because it tracks Bitcoin Core closely, improvements proven in Elements can flow upstream as Bitcoin Improvement Proposals, and Bitcoin upgrades flow downstream into Elements.
	- The most prominent production deployment of the Elements codebase is the Liquid Network, a federated sidechain for exchanges and institutions.
- ### Mechanisms
	- Maintains a Bitcoin-compatible UTXO and scripting model while layering optional confidentiality.
	- Implements range-proof-backed confidential amounts and asset-tagged commitments.
	- Provides federated peg and block-signing logic for sidechain consensus.
	- Ships as a full node client that developers can run, test, and extend.
- ### Applications
	- Powering the [[Liquid Network]] for fast, confidential settlement between exchanges.
	- Issuing security tokens and stablecoins as confidential assets.
	- Serving as a research vehicle for features destined for [[Bitcoin]].
	- Prototyping privacy-preserving financial instruments on a Bitcoin-like base layer.
- ### Relationships
	- partOf:: [[Blockstream]]
	- uses:: [[Bitcoin Core]]
	- uses:: [[Cryptography]]
	- dependsOn:: [[Bitcoin Core]]
	- implements:: [[Confidential Transactions]]
	- implements:: [[Sidechain]]
	- implements:: [[Segregated Witness]]
	- enables:: [[Liquid Network]]
	- enables:: [[Confidential Transactions]]
	- supports:: [[Sidechain]]
	- supports:: [[Smart Contract]]
	- standardizedBy:: [[Blockstream]]
	- relatedTo:: [[Bitcoin]]
	- relatedTo:: [[Schnorr Signature]]
	- bridgesTo:: [[Liquid Network]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
