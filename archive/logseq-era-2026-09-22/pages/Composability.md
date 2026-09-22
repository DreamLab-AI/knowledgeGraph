public:: true

# Composability

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:composability", "@type":"Page", "title":"Composability", "vc:slug":"composability", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:composability",
  "@type":"Class",
  "label":"Composability",
  "definition":"Composability is the property by which independent components can be combined into larger systems whose behaviour is predictable from the behaviour of the parts. In blockchain and decentralised finance it describes how permissionless smart contracts can call and build upon one another so that protocols interlock like building blocks, often called money legos. Composability accelerates innovation but couples systems together, propagating both functionality and risk across the stack.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"}],
  "relations":{
    "supports":[{"@id":"urn:ngm:class:decentralized-finance","label":"Decentralized Finance"},{"@id":"urn:ngm:class:defi-protocol","label":"DeFi Protocol"}],
    "enables":[{"@id":"urn:ngm:class:interoperability","label":"Interoperability"},{"@id":"urn:ngm:class:decentralized-finance","label":"Decentralized Finance"}],
    "dependsOn":[{"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"}],
    "uses":[{"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"}],
    "partOf":[{"@id":"urn:ngm:class:blockchain","label":"Blockchain"}],
    "requires":[{"@id":"urn:ngm:class:interoperability","label":"Interoperability"}],
    "relatedTo":[{"@id":"urn:ngm:class:decentralized-exchange","label":"Decentralized Exchange"},{"@id":"urn:ngm:class:defi-protocol","label":"DeFi Protocol"},{"@id":"urn:ngm:class:interoperability","label":"Interoperability"}],
    "bridgesTo":[{"@id":"urn:ngm:class:decentralized-finance","label":"Decentralized Finance"}],
    "contrastsWith":[{"@id":"urn:ngm:class:interoperability","label":"Interoperability"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Composability]] is the property that independent components can be combined into larger systems whose behaviour follows from the parts. In [[Blockchain]] it describes how permissionless [[Smart Contract]]s call and build on one another.
- It is the foundation of "money legos" in [[Decentralized Finance]], where protocols interlock to create new financial primitives, and it is closely tied to [[Interoperability]].
- ### Overview
- Composability lets developers treat deployed contracts as public infrastructure: any contract can invoke another's functions, so a new application can reuse existing liquidity, oracles and tokens rather than rebuilding them.
- This permissionless reuse is what gives DeFi its rapid, combinatorial innovation, but it also means a flaw or economic exploit in one protocol can cascade to everything that composes with it.
- Composability differs from interoperability: the former is about combining contracts within a shared execution environment, while the latter spans heterogeneous systems and chains.
- ### Key aspects
- Atomic composability: multiple contract calls succeed or revert together within a single transaction.
- Permissionless integration: no approval is needed to build on a public contract.
- Money legos: financial primitives stack into complex strategies.
- Shared state: contracts read and write a common ledger, enabling tight coupling.
- Risk propagation: dependencies inherit each other's failure modes.
- ### Applications
- Yield aggregators that route capital across lending and exchange protocols.
- Structured products assembled from primitive swaps, loans and derivatives.
- On-chain governance and treasury tools built atop token standards.
- Cross-protocol [[Decentralized Exchange]] routing and aggregation.
- ### Relationships
- supports:: [[Decentralized Finance]]
- supports:: [[DeFi Protocol]]
- enables:: [[Interoperability]]
- enables:: [[Decentralized Finance]]
- dependsOn:: [[Smart Contract]]
- uses:: [[Smart Contract]]
- partOf:: [[Blockchain]]
- requires:: [[Interoperability]]
- relatedTo:: [[Decentralized Exchange]]
- relatedTo:: [[DeFi Protocol]]
- relatedTo:: [[Interoperability]]
- bridgesTo:: [[Decentralized Finance]]
- contrastsWith:: [[Interoperability]]
- ### Provenance
- updated:: 2026-06-15
