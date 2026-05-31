public:: true

# ACM
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ae58ac7e541abe946a6737f9778e8435f417b284a492e4445c88123a3d16cfdd",
  "@type": "Page",
  "vc:slug": "acm",
  "title": "ACM",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:standards-body",
      "vc:label": "Standards Body"
    },
    {
      "@id": "urn:visionflow:linked:software-engineering",
      "vc:label": "Software Engineering"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "ACM"
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
  "@id": "urn:ngm:class:acm",
  "@type": "Class",
  "label": "ACM",
  "definition": "The Association for Computing Machinery, an international learned society for computing that publishes research, sets professional standards and organises conferences across computer science.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards-body",
      "label": "Standards Body"
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
  "@id": "urn:visionflow:annotation:link-resolutions:acm:62380b77e7bb",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ae58ac7e541abe946a6737f9778e8435f417b284a492e4445c88123a3d16cfdd"
  },
  "vc:resolutions": [
    {
      "raw": "[[Standards Body]]",
      "resolved": "urn:visionflow:linked:standards-body",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Software Engineering]]",
      "resolved": "urn:visionflow:linked:software-engineering",
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
  - The Association for Computing Machinery, an international learned society for computing that publishes research, sets professional standards and organises conferences across computer science.

- ### Semantic Classification
  - owl-class:: general:ACM
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Standards Body]]
  - bridges-to:: [[Standards Body]], [[Software Engineering]]

- ### Content
  - The Association for Computing Machinery is a long-established professional organisation for the computing field. It publishes journals and conference proceedings, maintains a large digital library of computing research, and runs special interest groups spanning subfields of computer science.
  - The ACM also articulates a code of professional ethics and conduct and confers recognitions such as the Turing Award. It serves as a central institution for the dissemination of computing knowledge and professional standards.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
