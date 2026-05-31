public:: true

# CDLA
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cdla",
  "@type": "Page",
  "vc:slug": "cdla",
  "title": "CDLA",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cdla",
  "@type": "Class",
  "label": "CDLA",
  "definition": "The Community Data License Agreement (CDLA) is a family of open data licences published by the Linux Foundation to govern the sharing and reuse of curated datasets. Its principal variants are CDLA-Permissive, which allows broad reuse with attribution, and CDLA-Sharing, which adds a copyleft-style obligation to share derived datasets under the same terms. CDLA matters for AI because it provides clear, machine-readable licensing for training-data corpora, reducing legal uncertainty over data provenance and downstream use.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-legal-and-regulatory", "label": "Infrastructure Legal and Regulatory"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - CDLA (Community Data License Agreement) is a Linux Foundation open data licence family that standardises permissions for sharing datasets, frequently applied to govern the use of [[Training Data]].
- ### Content
  - CDLA distinguishes data content from any accompanying software and focuses on rights to use, modify, and redistribute data. The Sharing variant's reciprocal obligation aims to keep enhanced datasets in the commons, while the Permissive variant prioritises frictionless adoption in commercial and research pipelines.
