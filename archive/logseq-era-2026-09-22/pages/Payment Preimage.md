public:: true

# Payment Preimage

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:payment-preimage",
  "@type": "Page",
  "title": "Payment Preimage",
  "vc:slug": "payment-preimage",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:payment-preimage",
  "@type": "Class",
  "label": "Payment Preimage",
  "definition": "A payment preimage is the secret value whose cryptographic hash forms a payment hash used to lock funds in a Hash Time-Locked Contract on the Lightning Network. Revealing the preimage proves that the intended recipient received the payment and simultaneously releases the locked funds along every hop of the payment route. It is the mechanism that lets protocols such as BOLT11 invoices and L402 guarantee atomic, trustless settlement across multi-hop payment channels.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:lightning-network",
      "label": "Lightning Network"
    }
  ],
  "relations": {},
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
	- A payment preimage is the secret value whose cryptographic hash forms a payment hash used to lock funds in a Hash Time-Locked Contract on the Lightning Network. Revealing the preimage proves that the intended recipient received the payment and simultaneously releases the locked funds along every hop of the payment route. It is the mechanism that lets protocols such as BOLT11 invoices and L402 guarantee atomic, trustless settlement across multi-hop payment channels.
- ### Relationships
	- subClassOf:: [[Lightning Network]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
