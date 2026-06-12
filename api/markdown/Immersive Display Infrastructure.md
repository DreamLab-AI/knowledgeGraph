public:: true

elevatedFrom:: [[Installation and display tech]]
# Immersive Display Infrastructure
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0dea95a36a9cb630baa2268c55f5aed36aaf1f692c67f0891bcf3c54025f9503",
  "@type": "Page",
  "vc:slug": "immersive-display-infrastructure",
  "title": "Immersive Display Infrastructure",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:light-field",
      "vc:label": "Light field"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Installation and display tech"
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
  "@id": "urn:ngm:class:immersive-display-infrastructure",
  "@type": "Class",
  "label": "Immersive Display Infrastructure",
  "definition": "The hardware and software infrastructure used to install, calibrate, and drive immersive visual displays in XR, digital signage, and spatial computing contexts. This encompasses projection mapping, light-field displays, LED walls, head-mounted display optics, and the rendering pipelines that feed them.",
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
      {"@id": "urn:ngm:class:light-field", "label": "Light field"},
      {"@id": "urn:ngm:class:xr-hardware", "label": "XR Hardware"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:mixed-reality", "label": "Mixed Reality"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:virtual-reality", "label": "Virtual Reality"},
      {"@id": "urn:ngm:class:xr-device", "label": "XR Device"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:installation-and-display-tech:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0dea95a36a9cb630baa2268c55f5aed36aaf1f692c67f0891bcf3c54025f9503"
  },
  "vc:resolutions": [
    {
      "raw": "[[Light field]]",
      "resolved": "urn:visionflow:owl:class:light-field",
      "kind": "ResolvedLink"
    }
  ],
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
  - Installation and display tech is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:InstallationAndDisplayTech
  - owl-role:: Concept

- ### Relationships
  - **uses**: [[Light field]], [[XR Hardware]]
  - **enables**: [[Augmented Reality]], [[Mixed Reality]]
  - **relatedTo**: [[Virtual Reality]], [[XR Device]]

- ### Content
  - [[Light field]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
