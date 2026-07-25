public:: true

# Front-Running
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:front-running",
  "@type": "Page",
  "vc:slug": "front-running",
  "title": "Front-Running",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-07-25T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:front-running",
  "@type": "Class",
  "label": "Front-Running",
  "definition": "Front-running is a form of market manipulation in which an actor with advance knowledge of a pending transaction executes their own trade ahead of it to profit from the anticipated price impact. In blockchain systems this typically takes the form of maximal extractable value, where searchers or validators observe pending transactions in the mempool and insert their own transactions ahead of them. Front-running erodes trust in fair transaction ordering and has motivated countermeasures such as private mempools and fair-ordering protocols.",
  "domain": "finance",
  "maturity": "emerging",
  "qualityScore": 0.5,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:market-manipulation",
      "label": "Market Manipulation"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "DanglingRelationFix-batch6-2026-07-25"
  }
}
```

- ### Definition
  - Front-running is a form of market manipulation in which an actor with advance knowledge of a pending transaction executes their own trade ahead of it to profit from the anticipated price impact. In blockchain systems this typically takes the form of maximal extractable value, where searchers or validators observe pending transactions in the mempool and insert their own transactions ahead of them. Front-running erodes trust in fair transaction ordering and has motivated countermeasures such as private mempools and fair-ordering protocols.
