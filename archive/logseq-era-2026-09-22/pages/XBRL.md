public:: true

# XBRL
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:xbrl",
  "@type": "Page",
  "vc:slug": "xbrl",
  "title": "XBRL",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:xbrl",
  "@type": "Class",
  "label": "XBRL",
  "definition": "XBRL (eXtensible Business Reporting Language) is an open XML-based standard for tagging and exchanging business and financial reporting data in a machine-readable form. It uses taxonomies of defined concepts to attach semantic meaning, units, and context to each reported fact, enabling automated validation, comparison, and analysis. It matters because regulators worldwide mandate it for filings, making financial disclosures consistently structured and computable.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:regulatory-reporting", "label": "Regulatory Reporting"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - XBRL is an XML-based standard for structured, machine-readable financial and business reporting, widely required for [[Regulatory Reporting]].
- ### Content
  - XBRL separates the reported data (instance documents) from the definitions that give them meaning (taxonomies), so each fact carries explicit concept, period, unit, and entity context. This lets regulators and analysts validate filings automatically against business rules and compare disclosures across companies and jurisdictions, with the Inline XBRL variant embedding tags directly in human-readable HTML.
