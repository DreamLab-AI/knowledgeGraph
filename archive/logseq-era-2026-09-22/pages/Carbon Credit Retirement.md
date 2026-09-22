public:: true

# Carbon Credit Retirement
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:carbon-credit-retirement",
  "@type": "Page",
  "vc:slug": "carbon-credit-retirement",
  "title": "Carbon Credit Retirement",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:carbon-credit-retirement",
  "@type": "Class",
  "label": "Carbon Credit Retirement",
  "definition": "Carbon credit retirement is the permanent cancellation of a carbon credit in a registry so that it can no longer be sold, transferred, or double-counted, formally claiming the underlying emission reduction or removal. Retirement is the terminal step that converts a tradable credit into a fulfilled offset claim against a specific buyer's emissions. It is fundamental to carbon market integrity because it guarantees that each tonne of avoided or removed CO2 is claimed only once.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:economic-mechanism", "label": "Economic Mechanism"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:icvcm-core-carbon-principles", "label": "ICVCM Core Carbon Principles"},
      {"@id": "urn:ngm:class:climate-action-dao", "label": "Climate Action DAO"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Carbon Credit Retirement permanently cancels a credit in a registry to claim its emission reduction, a step governed by integrity frameworks such as the [[ICVCM Core Carbon Principles]] and increasingly automated by a [[Climate Action DAO]].
- ### Content
  - On-chain carbon markets tokenise credits and execute retirement via smart contracts, emitting an immutable retirement record that prevents resale or double-counting. Robust retirement accounting, with serial-number tracking and beneficiary attribution, is the linchpin of credible offset claims.
