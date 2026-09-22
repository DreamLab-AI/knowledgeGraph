public:: true

# Programmable Privacy

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:programmable-privacy", "@type":"Page", "title":"Programmable Privacy", "vc:slug":"programmable-privacy", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:programmable-privacy",
  "@type":"Class",
  "label":"Programmable Privacy",
  "definition":"Programmable Privacy is the capability to define custom, application-specific privacy rules for blockchain transactions and smart-contract state using zero-knowledge proofs, allowing developers to selectively disclose or conceal data rather than relying on an all-or-nothing privacy model. It lets a single protocol support both private and public execution paths within the same contract. Protocols such as Aztec expose this as a first-class primitive for confidential smart contracts.",
  "domain":"blockchain",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:zero-knowledge-proof-zkp","label":"Zero-Knowledge Proof (ZKP)"}],
  "relations":{},
  "sameAs":[],
  "quality":0.55,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Programmable Privacy is the capability to define custom, application-specific privacy rules for blockchain transactions and smart-contract state using zero-knowledge proofs, allowing developers to selectively disclose or conceal data rather than relying on an all-or-nothing privacy model. It lets a single protocol support both private and public execution paths within the same contract. Protocols such as Aztec expose this as a first-class primitive for confidential smart contracts.
- ### Relationships
	- subClassOf:: [[Zero-Knowledge Proof (ZKP)]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
