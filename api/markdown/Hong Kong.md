public:: true

# Hong Kong
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6176ebd120fe9648ffc34bead6a4dd387556ef2aba209584258e1982c9daec2b",
  "@type": "Page",
  "vc:slug": "hong-kong",
  "title": "Hong Kong",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:financial-technology",
      "vc:label": "Financial Technology"
    },
    {
      "@id": "urn:visionflow:linked:central-bank-digital-currency",
      "vc:label": "Central Bank Digital Currency"
    },
    {
      "@id": "urn:visionflow:linked:bis-innovation-hub",
      "vc:label": "BIS Innovation Hub"
    },
    {
      "@id": "urn:visionflow:linked:entity",
      "vc:label": "Entity"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Hong Kong"
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
  "@id": "urn:ngm:class:hong-kong",
  "@type": "Class",
  "label": "Hong Kong",
  "definition": "A special administrative region of China and a major international financial centre active in fintech and digital currency experimentation.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:entity",
      "label": "Entity"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:financial-technology",
        "label": "Financial Technology"
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
  "@id": "urn:visionflow:annotation:link-resolutions:hong-kong:f59372f70dc7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6176ebd120fe9648ffc34bead6a4dd387556ef2aba209584258e1982c9daec2b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Financial Technology]]",
      "resolved": "urn:visionflow:linked:financial-technology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Central Bank Digital Currency]]",
      "resolved": "urn:visionflow:linked:central-bank-digital-currency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[BIS Innovation Hub]]",
      "resolved": "urn:visionflow:linked:bis-innovation-hub",
      "kind": "StubLink"
    },
    {
      "raw": "[[Entity]]",
      "resolved": "urn:visionflow:linked:entity",
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
  - A special administrative region of China and a major international financial centre active in fintech and digital currency experimentation.

- ### Semantic Classification
  - owl-class:: governance:HongKong
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Entity]]
  - bridges-to:: [[Central Bank Digital Currency]], [[BIS Innovation Hub]]
  - enables:: [[Financial Technology]]

- ### Content
  - Hong Kong is a special administrative region of China and one of the world's leading international financial centres. It hosts a deep capital market, a concentration of banks, and an active financial technology sector.
  - Its monetary authority has run prominent pilots in central bank digital currency and cross-border settlement, including work conducted through a BIS Innovation Hub centre based in the territory.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
