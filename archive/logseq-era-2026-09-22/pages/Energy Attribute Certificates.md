public:: true

# Energy Attribute Certificates
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:energy-attribute-certificates",
  "@type": "Page",
  "vc:slug": "energy-attribute-certificates",
  "title": "Energy Attribute Certificates",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:energy-attribute-certificates",
  "@type": "Class",
  "label": "Energy Attribute Certificates",
  "definition": "Energy Attribute Certificates (EACs) are tradable instruments that each represent proof that one megawatt-hour of electricity was generated from a specific source, typically renewable. They decouple the environmental attributes of energy from the underlying physical electricity, allowing those attributes to be sold, retired, or tracked independently. In blockchain contexts they are increasingly tokenised to provide auditable, fraud-resistant accounting of clean-energy consumption and to offset network energy use.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:economic-mechanism", "label": "Economic Mechanism"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:green-blockchain-initiatives", "label": "Green Blockchain Initiatives"}, {"@id": "urn:ngm:class:sustainability", "label": "Sustainability"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Energy Attribute Certificates are tradable proofs that a unit of electricity was generated from a defined source, used within [[Green Blockchain Initiatives]] to evidence renewable consumption and support [[Sustainability]] goals.
- ### Content
  - Each certificate corresponds to one MWh and carries metadata such as generation source, location, and vintage. Tokenising EACs on-chain enables transparent retirement and prevents double-counting, which is central to credible green-blockchain and carbon-offset claims.
