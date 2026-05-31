public:: true

# Digital Divide
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:91602468c77fde2aaef98cae2d424f86ca94a97905ba2eff278eedf3d37c04f4",
  "@type": "Page",
  "vc:slug": "digital-divide",
  "title": "Digital Divide",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:telecommunications",
      "vc:label": "Telecommunications"
    },
    {
      "@id": "urn:visionflow:linked:digital-transformation",
      "vc:label": "Digital Transformation"
    },
    {
      "@id": "urn:visionflow:linked:privacy",
      "vc:label": "Privacy"
    },
    {
      "@id": "urn:visionflow:linked:digital-economy",
      "vc:label": "Digital Economy"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Divide"
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
  "@id": "urn:ngm:class:digital-divide",
  "@type": "Class",
  "label": "Digital Divide",
  "definition": "The gap between groups in their access to, use of and benefit from information and communication technologies, including internet connectivity and digital skills.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-economy",
      "label": "Digital Economy"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:telecommunications",
        "label": "Telecommunications"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-transformation",
        "label": "Digital Transformation"
      }
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:digital-divide:bbd09d72ad40",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:91602468c77fde2aaef98cae2d424f86ca94a97905ba2eff278eedf3d37c04f4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Telecommunications]]",
      "resolved": "urn:visionflow:linked:telecommunications",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Transformation]]",
      "resolved": "urn:visionflow:linked:digital-transformation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy]]",
      "resolved": "urn:visionflow:linked:privacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Economy]]",
      "resolved": "urn:visionflow:linked:digital-economy",
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
  - The gap between groups in their access to, use of and benefit from information and communication technologies, including internet connectivity and digital skills.

- ### Semantic Classification
  - owl-class:: general:DigitalDivide
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Digital Economy]]
  - bridges-to:: [[Privacy]]
  - requires:: [[Telecommunications]]
  - enables:: [[Digital Transformation]]

- ### Content
  - The digital divide describes inequalities in access to digital infrastructure such as broadband, devices and reliable electricity, as well as differences in the skills and resources needed to use them effectively. These gaps occur between countries, regions and social groups.
  - Because participation in education, employment, public services and civic life increasingly depends on digital access, the divide can reinforce wider social and economic inequality. Policy responses include connectivity investment, affordability measures and digital literacy programmes.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
