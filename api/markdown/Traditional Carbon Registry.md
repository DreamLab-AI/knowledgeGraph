public:: true

# Traditional Carbon Registry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:657aa2b2bcb448f6d1fb5feb633ff1bee7a3507430fc314061848d675dfc1611",
  "@type": "Page",
  "vc:slug": "traditional-carbon-registry",
  "title": "Traditional Carbon Registry",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:carbon-registry",
      "vc:label": "Carbon Registry"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-compliance",
      "vc:label": "Regulatory Compliance"
    },
    {
      "@id": "urn:visionflow:linked:verra-vcs-standard",
      "vc:label": "Verra VCS Standard"
    },
    {
      "@id": "urn:visionflow:linked:sustainability-domain",
      "vc:label": "Sustainability Domain"
    },
    {
      "@id": "urn:visionflow:linked:carbon-markets",
      "vc:label": "Carbon Markets"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Traditional Carbon Registry"
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
  "@id": "urn:ngm:class:traditional-carbon-registry",
  "@type": "Class",
  "label": "Traditional Carbon Registry",
  "definition": "A traditional carbon registry is a centralised database that records the issuance, ownership, transfer and retirement of carbon credits to prevent double counting in carbon markets.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:carbon-markets",
      "label": "Carbon Markets"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:carbon-registry",
        "label": "Carbon Registry"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:traditional-carbon-registry:a397cf792611",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:657aa2b2bcb448f6d1fb5feb633ff1bee7a3507430fc314061848d675dfc1611"
  },
  "vc:resolutions": [
    {
      "raw": "[[Carbon Registry]]",
      "resolved": "urn:visionflow:linked:carbon-registry",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Compliance]]",
      "resolved": "urn:visionflow:linked:regulatory-compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Verra VCS Standard]]",
      "resolved": "urn:visionflow:linked:verra-vcs-standard",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sustainability Domain]]",
      "resolved": "urn:visionflow:linked:sustainability-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Carbon Markets]]",
      "resolved": "urn:visionflow:linked:carbon-markets",
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
  - A traditional carbon registry is a centralised database that records the issuance, ownership, transfer and retirement of carbon credits to prevent double counting in carbon markets.

- ### Semantic Classification
  - owl-class:: metaverse:TraditionalCarbonRegistry
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Carbon Markets]]
  - bridges-to:: [[Verra VCS Standard]], [[Sustainability Domain]]
  - requires:: [[Carbon Registry]]
  - enables:: [[Regulatory Compliance]]

- ### Content
  - A traditional carbon registry assigns unique serial numbers to credits and tracks their lifecycle from issuance to retirement, ensuring each credit is counted and claimed only once. Operators are typically standards bodies or designated administrators.
  - These centralised ledgers are the system of record against which trades and offset claims are reconciled, and they are sometimes contrasted with proposals to use blockchains for the same purpose. They connect carbon standards to market integrity.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
