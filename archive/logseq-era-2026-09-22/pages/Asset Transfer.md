public:: true

# Asset Transfer

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:asset-transfer",
  "@type": "Page",
  "title": "Asset Transfer",
  "vc:slug": "asset-transfer",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:asset-transfer",
  "@type": "Class",
  "label": "Asset Transfer",
  "definition": "Asset transfer is the act of moving ownership or control of a digital asset from one party or address to another, recorded as a state change on a ledger. It is the basic operation that custody arrangements must secure and that digital-ownership systems rely on to change the recorded holder of a token or asset. Cross-chain and tokenised real-world-asset transfer are specialised forms that move value across ledgers or between on-chain and off-chain representations.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:custody",
      "label": "Custody"
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
	- Asset transfer is the act of moving ownership or control of a digital asset from one party or address to another, recorded as a state change on a ledger. It is the basic operation that custody arrangements must secure and that digital-ownership systems rely on to change the recorded holder of a token or asset. Cross-chain and tokenised real-world-asset transfer are specialised forms that move value across ledgers or between on-chain and off-chain representations.
- ### Relationships
	- subClassOf:: [[Custody]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
