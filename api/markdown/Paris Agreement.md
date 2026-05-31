public:: true

# Paris Agreement
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9087fa5930e92627dfd061ea7d585ae73f25c0011e39428b8472293726517ff7",
  "@type": "Page",
  "vc:slug": "paris-agreement",
  "title": "Paris Agreement",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:sustainability",
      "vc:label": "Sustainability"
    },
    {
      "@id": "urn:visionflow:linked:carbon-accounting",
      "vc:label": "Carbon Accounting"
    },
    {
      "@id": "urn:visionflow:linked:voluntary-carbon-market",
      "vc:label": "Voluntary Carbon Market"
    },
    {
      "@id": "urn:visionflow:linked:carbon-credits",
      "vc:label": "Carbon Credits"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Paris Agreement"
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
  "@id": "urn:ngm:class:paris-agreement",
  "@type": "Class",
  "label": "Paris Agreement",
  "definition": "An international treaty on climate change adopted in 2015 under which parties commit to limiting global temperature rise and to reporting on their emissions reduction efforts.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sustainability",
      "label": "Sustainability"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:sustainability",
        "label": "Sustainability"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:carbon-accounting",
        "label": "Carbon Accounting"
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
  "@id": "urn:visionflow:annotation:link-resolutions:paris-agreement:745e49065a1d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9087fa5930e92627dfd061ea7d585ae73f25c0011e39428b8472293726517ff7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Sustainability]]",
      "resolved": "urn:visionflow:linked:sustainability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Carbon Accounting]]",
      "resolved": "urn:visionflow:linked:carbon-accounting",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Voluntary Carbon Market]]",
      "resolved": "urn:visionflow:linked:voluntary-carbon-market",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Carbon Credits]]",
      "resolved": "urn:visionflow:linked:carbon-credits",
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
  - An international treaty on climate change adopted in 2015 under which parties commit to limiting global temperature rise and to reporting on their emissions reduction efforts.

- ### Semantic Classification
  - owl-class:: governance:ParisAgreement
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Sustainability]]
  - bridges-to:: [[Voluntary Carbon Market]], [[Carbon Credits]]
  - requires:: [[Sustainability]]
  - enables:: [[Carbon Accounting]]

- ### Content
  - The Paris Agreement is a legally binding international treaty under which signatory parties pledge to limit the increase in global average temperature and to pursue efforts to keep it well below specified thresholds relative to pre-industrial levels.
  - Parties submit nationally determined contributions describing their planned emissions reductions and report progress under a transparency framework. The agreement also references mechanisms for cooperative approaches and market-based instruments.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
