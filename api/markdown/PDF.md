public:: true

# PDF
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3d55e4598f26fbc23ffeb73b55ff253531c9f58314b0d85697645f23242e047f",
  "@type": "Page",
  "vc:slug": "pdf",
  "title": "PDF",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "PDF"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:pdf",
  "@type": "Class",
  "label": "PDF",
  "definition": "Portable Document Format: an ISO-standardised file format (ISO 32000) that encodes documents with fixed layout, fonts, graphics, and metadata in a device-independent, platform-agnostic representation. In AI and knowledge-graph contexts, PDFs serve as primary carriers of academic papers, technical specifications, and legal documents that are ingested via extraction pipelines for training, retrieval-augmented generation, and knowledge-base construction.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "qualityScore": 0.7,
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:knowledge-management", "label": "Knowledge Management"},
      {"@id": "urn:ngm:class:documentation-standards", "label": "Documentation Standards"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:knowledge-base", "label": "Knowledge Base"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:pdf:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3d55e4598f26fbc23ffeb73b55ff253531c9f58314b0d85697645f23242e047f"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Portable Document Format: an ISO-standardised file format (ISO 32000) that encodes documents with fixed layout, fonts, graphics, and metadata in a device-independent, platform-agnostic representation. In AI and knowledge-graph contexts, PDFs serve as primary carriers of academic papers, technical specifications, and legal documents that are ingested via extraction pipelines for training, retrieval-augmented generation, and knowledge-base construction.

- ### Semantic Classification
  - owl-class:: infrastructure:PDF
  - owl-role:: Concept

- ### Relationships
  - uses: [[Knowledge Management]], [[Documentation Standards]]
  - enables: [[Knowledge Base]], [[Large Language Models]]
  - relatedTo: [[Natural Language Processing]], [[Knowledge Graph]]

- ### Content
  - [ChatDOC
	 - AI Chat with PDF Documents](https://www.chatdoc.com/)
  - [2401.12599.pdf (arxiv.org)](https://arxiv.org/pdf/2401.12599.pdf)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
