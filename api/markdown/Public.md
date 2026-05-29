public:: true

# Public
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:05ab35616b3e8425900a53ac6a6e61b464a5df1109fdd64ffc0041aae8058196",
  "@type": "Page",
  "vc:slug": "public",
  "title": "Public",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Public"
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
  "@id": "urn:ngm:class:public",
  "@type": "Class",
  "label": "Public",
  "definition": "Public, as a Logseq property tag (`public:: true`), marks a knowledge-graph page as intended for external publication. In the NarrativeGoldmine ontology it acts as an access-control classifier: pages bearing this annotation are included in export pipelines targeting the open WebVOWL visualisation and the public-facing OWL2 dataset. It is a metadata concept rather than a domain-level class, functioning analogously to an access-control label within the data-governance layer.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:metadata-standard", "label": "Metadata Standard"},
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"},
      {"@id": "urn:ngm:class:linked-data", "label": "Linked Data"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:public:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:05ab35616b3e8425900a53ac6a6e61b464a5df1109fdd64ffc0041aae8058196"
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
  - `public:: true` is a Logseq property tag marking a knowledge-graph page for external publication. In the NarrativeGoldmine ontology it acts as an access-control classifier: pages bearing this annotation are included in export pipelines targeting the open WebVOWL visualisation and the public-facing OWL2 dataset. It functions analogously to an access-control label within the data-governance layer.

- ### Semantic Classification
  - owl-class:: infrastructure:Public
  - owl-role:: Concept

- ### Relationships
  - uses:: [[Knowledge Graph]], [[Data Governance]]
  - relatedTo:: [[Metadata Standard]], [[Access Control]], [[Linked Data]]

- ### Content
  The `public:: true` property gates page inclusion in NarrativeGoldmine export pipelines. Only pages carrying this tag contribute nodes and edges to the published OWL2 EL++ graph and WebVOWL visualisation.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
