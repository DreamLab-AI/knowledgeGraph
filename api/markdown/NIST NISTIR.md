public:: true

# NIST NISTIR
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ab1014d40afe3d66ba826baf939baed87985752164b690d6b08766e5aa63832c",
  "@type": "Page",
  "vc:slug": "nist-nistir",
  "title": "NIST NISTIR",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:nist",
      "vc:label": "NIST"
    },
    {
      "@id": "urn:visionflow:linked:technical-standard",
      "vc:label": "Technical Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "NIST NISTIR"
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
  "@id": "urn:ngm:class:nist-nistir",
  "@type": "Class",
  "label": "NIST NISTIR",
  "definition": "A reference to the NIST Interagency or Internal Report (NISTIR) series, a publication series used by NIST for technical reports. The specific report is not identified by this label alone.",
  "domain": "standards",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technical-standard",
      "label": "Technical Standard"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:nist",
        "label": "NIST"
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
  "@id": "urn:visionflow:annotation:link-resolutions:nist-nistir:c413312dfcd1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ab1014d40afe3d66ba826baf939baed87985752164b690d6b08766e5aa63832c"
  },
  "vc:resolutions": [
    {
      "raw": "[[NIST]]",
      "resolved": "urn:visionflow:linked:nist",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Technical Standard]]",
      "resolved": "urn:visionflow:linked:technical-standard",
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
  - A reference to the NIST Interagency or Internal Report (NISTIR) series, a publication series used by NIST for technical reports. The specific report is not identified by this label alone.

- ### Semantic Classification
  - owl-class:: standards:NISTNISTIR
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[NIST]]

- ### Content
  - A reference to the NIST Interagency or Internal Report (NISTIR) series, a publication series used by NIST for technical reports. The specific report is not identified by this label alone.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
