public:: true

# Update Cycle
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f550d4fc002af7f81da1497871e4bcf49dab06241c54094a05f01f99860fceeb",
  "@type": "Page",
  "vc:slug": "update-cycle",
  "title": "Update Cycle",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Update Cycle"
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
  "@id": "urn:ngm:class:update-cycle",
  "@type": "Class",
  "label": "Update Cycle",
  "definition": "An Update Cycle is the recurring interval at which knowledge artefacts, links, or system components are reviewed and refreshed to maintain accuracy and relevance. In knowledge graph and documentation contexts, update cycles are defined per content type based on the rate of underlying change, balancing maintenance effort against information staleness.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:knowledge-management", "label": "Knowledge Management"},
      {"@id": "urn:ngm:class:version-control", "label": "Version Control"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:knowledge-management-system", "label": "Knowledge Management System"},
      {"@id": "urn:ngm:class:documentation-standards", "label": "Documentation Standards"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:update-cycle:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f550d4fc002af7f81da1497871e4bcf49dab06241c54094a05f01f99860fceeb"
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
  An Update Cycle is the recurring interval at which knowledge artefacts, links, or system components are reviewed and refreshed to maintain accuracy and relevance. In knowledge graph and documentation contexts, update cycles are defined per content type based on the rate of underlying change, balancing maintenance effort against information staleness.

- ### Semantic Classification
  - owl-class:: infrastructure:UpdateCycle
  - owl-role:: Concept

- ### Relationships
  - **relatedTo**: Knowledge Management, Version Control
  - **supports**: Knowledge Management System, Documentation Standards

- ### Content
  - These links are numbers that likely need revisiting every couple of months to update them.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
