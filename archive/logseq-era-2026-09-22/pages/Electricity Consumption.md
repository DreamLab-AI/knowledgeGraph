public:: true

# Electricity Consumption
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:electricity-consumption",
  "@type": "Page",
  "vc:slug": "electricity-consumption",
  "title": "Electricity Consumption",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:electricity-consumption",
  "@type": "Class",
  "label": "Electricity Consumption",
  "definition": "Electricity Consumption is the total quantity of electrical energy used by a system over a period, typically measured in kilowatt- or terawatt-hours. For blockchains it quantifies the energy drawn by mining, validation, and node operation, and is a central metric in debates over their environmental impact. Indices such as the Cambridge Bitcoin Electricity Consumption Index estimate network-wide consumption from hardware and hashrate data.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sustainability", "label": "Sustainability"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:blockchain-energy-consumption", "label": "Blockchain Energy Consumption"}, {"@id": "urn:ngm:class:cbeci", "label": "CBECI"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Electricity Consumption is the total electrical energy a system uses over time, measured in kilowatt- or terawatt-hours. It is a core component of [[Blockchain Energy Consumption]] and is estimated by indices such as the [[CBECI]].
- ### Content
  - For proof-of-work networks, consumption scales with hashrate and the efficiency of mining hardware, while proof-of-stake networks consume orders of magnitude less. Accurate estimation combines hashrate, hardware mix, and power-usage assumptions, informing sustainability policy and carbon-footprint accounting.
