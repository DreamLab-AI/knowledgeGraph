public:: true

# ISA-95
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cfb0f5d73956416791c08c0e184c997a52cb6f8ba33124b4be3190eb42685fc4",
  "@type": "Page",
  "vc:slug": "isa-95",
  "title": "ISA-95",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:opc-ua",
      "vc:label": "OPC UA"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "ISA-95"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:isa-95",
  "@type": "Class",
  "label": "ISA-95",
  "definition": "ISA-95 is an international standard for integrating enterprise and control systems in manufacturing, defining models for the interface between business and production operations.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:opc-ua",
      "label": "OPC UA"
    }
  ],
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:isa-95:e47abab1b43b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cfb0f5d73956416791c08c0e184c997a52cb6f8ba33124b4be3190eb42685fc4"
  },
  "vc:resolutions": [
    {
      "raw": "[[OPC UA]]",
      "resolved": "urn:visionflow:linked:opc-ua",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - ISA-95 is an international standard for integrating enterprise and control systems in manufacturing, defining models for the interface between business and production operations.

- ### Semantic Classification
  - owl-class:: manufacturing:ISA95
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[OPC UA]]
  - bridges-to:: [[OPC UA]]

- ### Content
  - ISA-95, developed by the International Society of Automation and adopted as IEC 62264, organises manufacturing functions into hierarchical levels, from business planning down to physical processes, and defines how information passes between them.
  - The standard provides object models for activities such as production scheduling and tracking, and it is used to structure the integration between enterprise resource planning systems and manufacturing execution systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
