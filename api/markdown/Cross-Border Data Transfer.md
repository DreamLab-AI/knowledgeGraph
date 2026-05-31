public:: true

# Cross-Border Data Transfer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cross-border-data-transfer",
  "@type": "Page",
  "vc:slug": "cross-border-data-transfer",
  "title": "Cross-Border Data Transfer",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cross-border-data-transfer",
  "@type": "Class",
  "label": "Cross-Border Data Transfer",
  "definition": "Cross-border data transfer is the movement of personal or regulated data across national jurisdictions, governed by data-protection laws that restrict where and how such data may be processed. Compliance mechanisms include adequacy decisions, standard contractual clauses, binding corporate rules, and localisation requirements. It is a central concern of privacy regimes such as GDPR and various Asia-Pacific frameworks.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:asia-pacific-regulation", "label": "Asia-Pacific Regulation"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Cross-border data transfer is the transmission of regulated data between jurisdictions under legal constraints on where data may flow and be processed. It is a focus of [[Asia-Pacific Regulation]] and comparable privacy regimes worldwide.
- ### Content
  - Lawful transfer typically rests on adequacy findings, contractual safeguards, or explicit consent, with some regimes adding data-localisation mandates. Diverging regional rules force multinationals to map data flows precisely and adopt layered safeguards, since a single non-compliant transfer can trigger significant regulatory penalties.
