public:: true

# On-Chain MRV
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:on-chain-mrv",
  "@type": "Page",
  "vc:slug": "on-chain-mrv",
  "title": "On-Chain MRV",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:on-chain-mrv",
  "@type": "Class",
  "label": "On-Chain MRV",
  "definition": "On-Chain MRV (Measurement, Reporting, and Verification) is the practice of recording carbon and environmental impact data directly on a blockchain to create tamper-evident, auditable proof of climate actions. It combines sensor data, satellite imagery, and oracle feeds with on-chain attestations so that carbon credits and sustainability claims can be independently verified. By anchoring MRV data to an immutable ledger, it reduces double-counting and greenwashing in voluntary and compliance carbon markets.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:sustainability", "label": "Sustainability"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:green-blockchain-initiatives", "label": "Green Blockchain Initiatives"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - On-Chain MRV anchors Measurement, Reporting, and Verification data to an immutable ledger, supporting auditable climate claims for [[Green Blockchain Initiatives]] and verifiable carbon markets.
- ### Content
  - The approach ingests sensor, satellite, and oracle data, attesting it on-chain so carbon credits carry a transparent provenance trail. This mitigates double-counting and greenwashing by making verification continuous and publicly inspectable rather than reliant on periodic manual audits.
