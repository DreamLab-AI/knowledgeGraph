public:: true

# Ownership Record
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ownership-record",
  "@type": "Page",
  "vc:slug": "ownership-record",
  "title": "Ownership Record",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ownership-record",
  "@type": "Class",
  "label": "Ownership Record",
  "definition": "An Ownership Record is a persistent entry that attests who holds title to an asset at a given time. On a blockchain it is an immutable, timestamped ledger entry binding an asset identifier to a controlling address, providing tamper-evident provenance and transfer history. Such records underpin tokenized assets like certificates and royalty instruments where verifiable, auditable ownership is essential.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-token-and-asset", "label": "Blockchain Token and Asset"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:renewable-energy-certificates", "label": "Renewable Energy Certificates"},
      {"@id": "urn:ngm:class:creator-royalty-token", "label": "Creator Royalty Token"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - An Ownership Record is a tamper-evident ledger entry binding an asset to its holder, a component of instruments such as [[Renewable Energy Certificates]] and the [[Creator Royalty Token]].
- ### Content
  - On-chain ownership records timestamp each transfer, producing an auditable provenance chain that resists forgery. This verifiable title history is what lets tokenized certificates and royalty-bearing assets prove rightful ownership and entitlement without a trusted central registrar.
