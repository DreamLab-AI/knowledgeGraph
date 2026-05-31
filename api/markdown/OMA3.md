public:: true

# OMA3
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8dd58bf34bc05c237f0afe6a83c57e50a27b049dc564f685efc47520ece14ea9",
  "@type": "Page",
  "vc:slug": "oma-3",
  "title": "OMA3",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:interoperability-standards",
      "vc:label": "Interoperability Standards"
    },
    {
      "@id": "urn:visionflow:linked:metaverse",
      "vc:label": "Metaverse"
    },
    {
      "@id": "urn:visionflow:linked:web-3",
      "vc:label": "Web3"
    },
    {
      "@id": "urn:visionflow:linked:standards-body",
      "vc:label": "Standards Body"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "OMA3"
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
  "@id": "urn:ngm:class:oma-3",
  "@type": "Class",
  "label": "OMA3",
  "definition": "The Open Metaverse Alliance for Web3, an industry consortium of companies working to develop open standards and interoperability for metaverse platforms and digital assets.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards-body",
      "label": "Standards Body"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:interoperability-standards",
        "label": "Interoperability Standards"
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
  "@id": "urn:visionflow:annotation:link-resolutions:oma-3:7e34084d61fd",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8dd58bf34bc05c237f0afe6a83c57e50a27b049dc564f685efc47520ece14ea9"
  },
  "vc:resolutions": [
    {
      "raw": "[[Interoperability Standards]]",
      "resolved": "urn:visionflow:linked:interoperability-standards",
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
    },
    {
      "raw": "[[Standards Body]]",
      "resolved": "urn:visionflow:linked:standards-body",
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
  - The Open Metaverse Alliance for Web3, an industry consortium of companies working to develop open standards and interoperability for metaverse platforms and digital assets.

- ### Semantic Classification
  - owl-class:: governance:OMA3
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Standards Body]]
  - bridges-to:: [[Metaverse]], [[Web3]]
  - enables:: [[Interoperability Standards]]

- ### Content
  - OMA3, the Open Metaverse Alliance for Web3, is a consortium of companies that aims to promote open, interoperable standards across metaverse platforms. Its goal is to ensure that digital assets, identities and virtual spaces can move between systems rather than being locked into proprietary silos.
  - Operating as a member-governed body, it develops shared specifications and reference implementations intended to support a more open metaverse built on Web3 principles such as user ownership and portability of assets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
