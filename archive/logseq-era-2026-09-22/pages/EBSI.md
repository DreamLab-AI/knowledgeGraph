public:: true

# EBSI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ebsi",
  "@type": "Page",
  "vc:slug": "ebsi",
  "title": "EBSI",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ebsi",
  "@type": "Class",
  "label": "EBSI",
  "definition": "The European Blockchain Services Infrastructure (EBSI) is a pan-European permissioned blockchain network operated by EU member states and the European Commission to deliver cross-border public services. It anchors verifiable credentials and decentralised identifiers, enabling trusted exchange of diplomas, official documents, and identity attestations between governments. EBSI is a leading example of a public-sector consortium blockchain supporting self-sovereign identity.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:bc-network-component", "label": "Network Component"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:consortium-blockchain", "label": "Consortium Blockchain"}, {"@id": "urn:ngm:class:decentralized-identifiers", "label": "Decentralized Identifiers"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - EBSI (European Blockchain Services Infrastructure) is an EU-operated [[Consortium Blockchain]] supporting cross-border public services. It anchors verifiable credentials and [[Decentralized Identifiers]] for trusted document and identity exchange.
- ### Content
  - Run by nodes across member states, EBSI provides shared infrastructure for use cases such as diploma verification, document traceability, and self-sovereign identity. Its permissioned design balances decentralisation with the governance and accountability required of public-sector services.
