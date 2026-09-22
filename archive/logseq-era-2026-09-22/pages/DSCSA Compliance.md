public:: true

# DSCSA Compliance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dscsa-compliance",
  "@type": "Page",
  "vc:slug": "dscsa-compliance",
  "title": "DSCSA Compliance",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:dscsa-compliance",
  "@type": "Class",
  "label": "DSCSA Compliance",
  "definition": "DSCSA Compliance refers to meeting the requirements of the U.S. Drug Supply Chain Security Act, which mandates electronic, interoperable tracing of prescription drugs at the unit (package) level throughout the supply chain. It requires serialisation, product identifiers, transaction history exchange, and verification of suspect or illegitimate product. Full enforcement of unit-level traceability obligates manufacturers, distributors, and dispensers to maintain auditable end-to-end records.",
  "domain": "supply-chain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:pharmaceutical-supply-chain", "label": "Pharmaceutical Supply Chain"}, {"@id": "urn:ngm:class:cold-chain-monitoring", "label": "Cold Chain Monitoring"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - DSCSA Compliance is adherence to the U.S. Drug Supply Chain Security Act, mandating serialised, interoperable, unit-level tracing of prescription drugs. It is a core requirement of the [[Pharmaceutical Supply Chain]] and is supported by [[Cold Chain Monitoring]].
- ### Content
  - Compliance entails applying unique product identifiers, exchanging transaction information between trading partners, and verifying suspect product to prevent counterfeit drugs. Track-and-trace systems, often built on serialisation databases or distributed ledgers, provide the auditable provenance the Act requires.
