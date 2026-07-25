public:: true

# Trusted Setup Ceremony

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:trusted-setup-ceremony", "@type":"Page", "title":"Trusted Setup Ceremony", "vc:slug":"trusted-setup-ceremony", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:trusted-setup-ceremony",
  "@type": "Class",
  "label": "Trusted Setup Ceremony",
  "definition": "A trusted setup ceremony is a one-time, multi-party procedure used to generate the public parameters required by certain zero-knowledge proof systems, such as zk-SNARKs, in which participants jointly compute the parameters while each contributes and then destroys a private random value, known as toxic waste. The scheme remains secure provided at least one participant honestly destroys their contribution, so ceremonies are typically run with many independent participants across jurisdictions to make full collusion implausible. Protocols such as Zcash have run public, auditable trusted setup ceremonies to generate the parameters underlying their privacy-preserving transactions.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:zero-knowledge-proof",
      "label": "Zero-Knowledge Proof"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:zcash",
        "label": "Zcash"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-blockchain",
        "label": "Privacy Preserving Blockchain"
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
	- A trusted setup ceremony is a one-time, multi-party procedure used to generate the public parameters required by certain zero-knowledge proof systems, such as zk-SNARKs, in which participants jointly compute the parameters while each contributes and then destroys a private random value, known as toxic waste. The scheme remains secure provided at least one participant honestly destroys their contribution, so ceremonies are typically run with many independent participants across jurisdictions to make full collusion implausible. Protocols such as Zcash have run public, auditable trusted setup ceremonies to generate the parameters underlying their privacy-preserving transactions.
- ### Relationships
	- partOf:: [[Zero-Knowledge Proof]]
	- relatedTo:: [[Zcash]]
	- relatedTo:: [[Privacy Preserving Blockchain]]
