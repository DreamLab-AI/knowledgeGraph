public:: true

# GS1 EPCIS
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:gs1-epcis",
  "@type": "Page",
  "vc:slug": "gs1-epcis",
  "title": "GS1 EPCIS",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gs1-epcis",
  "@type": "Class",
  "label": "GS1 EPCIS",
  "definition": "GS1 EPCIS (Electronic Product Code Information Services) is a global standard that defines a common data model and interface for capturing and sharing supply-chain visibility events, answering what, when, where, why, and how for product movements. It standardises event-based traceability across trading partners using GS1 identifiers. EPCIS is widely deployed in pharmaceuticals, food safety, and logistics to enable end-to-end provenance.",
  "domain": "supply-chain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:cold-chain-monitoring", "label": "Cold Chain Monitoring"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - GS1 EPCIS is an event-based supply-chain visibility standard that systems such as [[Cold Chain Monitoring]] implement and use to record and exchange traceability data.
- ### Content
  - EPCIS structures observations into capture and query interfaces with a shared vocabulary (CBV), letting partners reconstruct an object's full journey. Combined with sensor data and distributed ledgers, it supports verifiable provenance, recall management, and regulatory compliance such as drug serialisation mandates.
