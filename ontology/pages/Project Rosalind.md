public:: true

# Project Rosalind
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7bdf6a4567af6e4006c85e4095688def8c1178e99b2d594b3b6ff18696e13526",
  "@type": "Page",
  "vc:slug": "project-rosalind",
  "title": "Project Rosalind",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:central-bank-digital-currency",
      "vc:label": "Central Bank Digital Currency"
    },
    {
      "@id": "urn:visionflow:linked:bank-of-england",
      "vc:label": "Bank of England"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Project Rosalind"
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
  "@id": "urn:ngm:class:project-rosalind",
  "@type": "Class",
  "label": "Project Rosalind",
  "definition": "A joint experiment by the Bank of England and the Bank for International Settlements Innovation Hub that explored how an application programming interface layer could support retail central bank digital currency payments. It tested programmability and interoperability.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:central-bank-digital-currency",
      "label": "Central Bank Digital Currency"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
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
  "@id": "urn:visionflow:annotation:link-resolutions:project-rosalind:8b2e98e4f1a2",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7bdf6a4567af6e4006c85e4095688def8c1178e99b2d594b3b6ff18696e13526"
  },
  "vc:resolutions": [
    {
      "raw": "[[Central Bank Digital Currency]]",
      "resolved": "urn:visionflow:linked:central-bank-digital-currency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bank of England]]",
      "resolved": "urn:visionflow:linked:bank-of-england",
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
  - A joint experiment by the Bank of England and the Bank for International Settlements Innovation Hub that explored how an application programming interface layer could support retail central bank digital currency payments. It tested programmability and interoperability.

- ### Semantic Classification
  - owl-class:: finance:ProjectRosalind
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Central Bank Digital Currency]]
  - bridges-to:: [[Bank of England]]
  - requires:: [[Central Bank Digital Currency]]

- ### Content
  - Project Rosalind was carried out by the Bank for International Settlements Innovation Hub London Centre together with the Bank of England. It developed and tested an application programming interface layer that could connect a central bank ledger to private sector payment services.
  - The project examined how such an interface could enable a range of retail use cases for a central bank digital currency, including programmable payments, while keeping the core ledger separate from customer-facing services.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
