public:: true

# Open Data
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:open-data",
  "@type": "Page",
  "vc:slug": "open-data",
  "title": "Open Data",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-data",
  "@type": "Class",
  "label": "Open Data",
  "definition": "Open Data is data that is freely available for anyone to access, use, modify, and share, subject at most to attribution and share-alike requirements. It is typically published in machine-readable formats with open licenses to maximize reuse, transparency, and interoperability across organizations. Open Data underpins public-sector transparency, research reproducibility, and decentralized web ecosystems built on user-controlled data stores.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:solid", "label": "Solid"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Open Data is openly licensed, machine-readable data that anyone may reuse and redistribute, enabling transparency and interoperable ecosystems such as [[Solid]] that put data under user control.
- ### Content
  - Best practice publishes Open Data in standard formats with clear provenance and permissive licenses. It powers reproducible research, civic transparency, and decentralized web architectures where applications query portable, user-owned datasets rather than siloed proprietary stores.
