public:: true

# Carbon Offsetting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:43d71c4215928b032f8bf7dc8854b6a5df3f10e9bfa5986c35052268e2717dcb",
  "@type": "Page",
  "vc:slug": "carbon-offsetting",
  "title": "Carbon Offsetting",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:carbon-accounting",
      "vc:label": "Carbon Accounting"
    },
    {
      "@id": "urn:visionflow:linked:sustainability",
      "vc:label": "Sustainability"
    },
    {
      "@id": "urn:visionflow:linked:carbon-credits",
      "vc:label": "Carbon Credits"
    },
    {
      "@id": "urn:visionflow:linked:voluntary-carbon-market",
      "vc:label": "Voluntary Carbon Market"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Carbon Offsetting"
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
  "@id": "urn:ngm:class:carbon-offsetting",
  "@type": "Class",
  "label": "Carbon Offsetting",
  "definition": "The practice of compensating for emissions of carbon dioxide or other greenhouse gases by funding an equivalent reduction or removal of emissions elsewhere.",
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
        "@id": "urn:ngm:class:carbon-accounting",
        "label": "Carbon Accounting"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:sustainability",
        "label": "Sustainability"
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
  "@id": "urn:visionflow:annotation:link-resolutions:carbon-offsetting:be2e7251b518",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:43d71c4215928b032f8bf7dc8854b6a5df3f10e9bfa5986c35052268e2717dcb"
  },
  "vc:resolutions": [
    {
      "raw": "[[Carbon Accounting]]",
      "resolved": "urn:visionflow:linked:carbon-accounting",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sustainability]]",
      "resolved": "urn:visionflow:linked:sustainability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Carbon Credits]]",
      "resolved": "urn:visionflow:linked:carbon-credits",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Voluntary Carbon Market]]",
      "resolved": "urn:visionflow:linked:voluntary-carbon-market",
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
  - The practice of compensating for emissions of carbon dioxide or other greenhouse gases by funding an equivalent reduction or removal of emissions elsewhere.

- ### Semantic Classification
  - owl-class:: governance:CarbonOffsetting
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Sustainability]]
  - bridges-to:: [[Carbon Credits]], [[Voluntary Carbon Market]]
  - requires:: [[Carbon Accounting]]
  - enables:: [[Sustainability]]

- ### Content
  - Carbon offsetting allows an organisation or individual to balance emissions they cannot eliminate by purchasing credits representing reductions or removals achieved through projects such as reforestation, renewable energy or methane capture.
  - The credibility of offsetting depends on whether the underlying reductions are additional, permanent and accurately measured. Verification standards and independent registries are used to assess project quality and to track the issuance and retirement of credits.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
