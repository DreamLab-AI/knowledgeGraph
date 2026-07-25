public:: true

# Tron Blockchain

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:tron-blockchain", "@type": "Page", "title": "Tron Blockchain", "vc:slug": "tron-blockchain", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tron-blockchain",
  "@type": "Class",
  "label": "Tron Blockchain",
  "definition": "Tron is a public, high-throughput layer-1 blockchain launched in 2018 that uses a delegated proof-of-stake consensus mechanism to achieve low transaction fees and fast block times, positioning itself as an alternative settlement layer for content and payments. It has become one of the largest hosts of USD-pegged stablecoin transfers, particularly Tether (USDT), owing to its low fees relative to Ethereum. Its EVM-compatible virtual machine allows Ethereum smart contracts to be ported to the network with minimal modification.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:layer-1-blockchain",
      "label": "Layer 1 Blockchain"
    }
  ],
  "relations": {
    "uses": [],
    "requires": [],
    "enables": [
      {
        "@id": "urn:ngm:class:tether",
        "label": "Tether"
      },
      {
        "@id": "urn:ngm:class:usdt",
        "label": "USDT"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:layer-1-blockchain",
        "label": "Layer 1 Blockchain"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Tron is a public, high-throughput layer-1 blockchain launched in 2018 that uses a delegated proof-of-stake consensus mechanism to achieve low transaction fees and fast block times, positioning itself as an alternative settlement layer for content and payments. It has become one of the largest hosts of USD-pegged stablecoin transfers, particularly Tether (USDT), owing to its low fees relative to Ethereum. Its EVM-compatible virtual machine allows Ethereum smart contracts to be ported to the network with minimal modification.
- ### Relationships
	- enables:: [[Tether]]
	- enables:: [[USDT]]
	- partOf:: [[Layer 1 Blockchain]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
