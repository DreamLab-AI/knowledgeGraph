public:: true

# Calldata
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:calldata", "@type":"Page", "title":"Calldata", "vc:slug":"calldata", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:calldata",
  "@type":"Class",
  "label":"Calldata",
  "definition":"Calldata is the read-only, immutable byte array supplied with a transaction or message call on the Ethereum Virtual Machine, carrying the function selector and ABI-encoded arguments that tell a smart contract what to execute. Because it lives outside contract storage and is comparatively cheap to include, calldata is the primary channel through which external inputs reach contracts. It is especially significant for rollups, which post compressed transaction batches as calldata to the base layer to inherit its data availability and security.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:transaction","label":"Transaction"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:transaction","label":"Transaction"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:ethereum-smart-contract-platform-virtual-machine","label":"Ethereum Virtual Machine"},
      {"@id":"urn:ngm:class:gas","label":"Gas"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:rollup","label":"Rollup"},
      {"@id":"urn:ngm:class:data-availability","label":"Data Availability"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:optimistic-rollup","label":"Optimistic Rollup"},
      {"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:ethereum","label":"Ethereum"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:gas","label":"Gas"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:transaction","label":"Transaction"},
      {"@id":"urn:ngm:class:data-availability","label":"Data Availability"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:eip-4844","label":"EIP-4844"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Calldata]] is the read-only byte array passed with a [[Transaction]] on the [[Ethereum Virtual Machine]], carrying the function selector and encoded arguments.
	- It is the cheap, immutable channel by which external inputs reach a [[Smart Contract]].
	- It is central to [[Rollup|rollups]], which post compressed batches as calldata to inherit base-layer [[Data Availability]].
- ### Overview
	- When an account or contract invokes another contract, the input it sends is calldata: a packed sequence beginning with a four-byte function selector followed by ABI-encoded parameters.
	- Calldata is immutable within a call and cannot be written to; the EVM exposes opcodes to read its size and copy slices into memory. It is cheaper than storage and, historically, cheaper per byte than other persistent data channels.
	- For Layer 2 scaling, optimistic and zero-knowledge rollups publish their compressed transaction data as calldata on Ethereum, so anyone can reconstruct L2 state and challenge or verify it.
	- This made calldata the dominant cost component for rollups, motivating EIP-4844 blob transactions as a cheaper, dedicated data channel.
- ### Mechanisms
	- The leading four-byte selector identifies which contract function to dispatch.
	- ABI encoding lays out arguments in a deterministic, padded layout the contract decodes.
	- EVM opcodes read calldata size and copy regions into memory for processing.
	- Gas is charged per byte, with zero bytes cheaper than non-zero bytes.
- ### Applications
	- Encoding function calls and arguments for every contract interaction.
	- Posting compressed rollup batches to the base layer for data availability.
	- Passing immutable parameters to view and pure functions efficiently.
	- Carrying signed messages and proofs into verifier contracts.
- ### Relationships
	- partOf:: [[Transaction]]
	- uses:: [[Ethereum Virtual Machine]]
	- uses:: [[Gas]]
	- enables:: [[Rollup]]
	- enables:: [[Data Availability]]
	- supports:: [[Optimistic Rollup]]
	- supports:: [[Smart Contract]]
	- dependsOn:: [[Ethereum]]
	- requires:: [[Gas]]
	- relatedTo:: [[Transaction]]
	- relatedTo:: [[Data Availability]]
	- contrastsWith:: [[EIP-4844]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
