public:: true

# Message Format
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:message-format",
  "@type": "Page",
  "vc:slug": "message-format",
  "title": "Message Format",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:message-format",
  "@type": "Class",
  "label": "Message Format",
  "definition": "A message format is the agreed structure, encoding, and field schema for data exchanged between systems over a protocol. It specifies headers, payload layout, data types, and serialisation so that senders and receivers can unambiguously parse and validate messages. Standardised message formats are essential to interoperability in communication protocols and transaction standards.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"}, {"@id": "urn:ngm:class:transaction-standard", "label": "Transaction Standard"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A message format defines the structure, encoding, and fields of data exchanged between systems so it can be parsed unambiguously. It is a constituent part of any [[Communication Protocol]] and of every [[Transaction Standard]].
- ### Content
  - Formats range from text-based JSON and XML to compact binary schemas such as Protocol Buffers and ISO 20022 financial messages. Versioning, backward compatibility, and validation rules are central concerns, since format mismatches break interoperability and can corrupt downstream processing.
