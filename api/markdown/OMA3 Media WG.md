public:: true

# OMA3 Media WG
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:aa40e9688325468c50e1f31af1150425106fc255a742b3ecf40e19410e34359f",
  "@type": "Page",
  "vc:slug": "oma-3-media-wg",
  "title": "OMA3 Media WG",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:oma-3",
      "vc:label": "OMA3"
    },
    {
      "@id": "urn:visionflow:linked:metaverse",
      "vc:label": "Metaverse"
    },
    {
      "@id": "urn:visionflow:linked:web-3",
      "vc:label": "Web3"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "OMA3 Media WG"
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
  "@id": "urn:ngm:class:oma-3-media-wg",
  "@type": "Class",
  "label": "OMA3 Media WG",
  "definition": "A working group within the Open Metaverse Alliance for Web3 (OMA3) focused on media-related interoperability standards for metaverse and Web3 applications. It coordinates specifications among member organisations.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:oma-3",
      "label": "OMA3"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:oma-3",
        "label": "OMA3"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
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
  "@id": "urn:visionflow:annotation:link-resolutions:oma-3-media-wg:c2916384d678",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:aa40e9688325468c50e1f31af1150425106fc255a742b3ecf40e19410e34359f"
  },
  "vc:resolutions": [
    {
      "raw": "[[OMA3]]",
      "resolved": "urn:visionflow:linked:oma-3",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse]]",
      "resolved": "urn:visionflow:linked:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Web3]]",
      "resolved": "urn:visionflow:linked:web-3",
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
  - A working group within the Open Metaverse Alliance for Web3 (OMA3) focused on media-related interoperability standards for metaverse and Web3 applications. It coordinates specifications among member organisations.

- ### Semantic Classification
  - owl-class:: metaverse:OMA3MediaWG
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[OMA3]]
  - bridges-to:: [[Web3]]
  - requires:: [[OMA3]]
  - enables:: [[Metaverse]]

- ### Content
  - OMA3 is an industry association whose members work on open standards intended to make virtual worlds and digital assets portable across platforms. Working groups within it address specific technical domains.
  - A media working group typically addresses topics such as asset formats, streaming, and rights handling for content used across metaverse environments, aligning member implementations with shared specifications.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
