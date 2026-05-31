public:: true

# Verra VCS Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:25068757fd02f0f58fb2b608b9439b41c9bb3a710ab66041611c8deaea43266b",
  "@type": "Page",
  "vc:slug": "verra-vcs-standard",
  "title": "Verra VCS Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:carbon-markets",
      "vc:label": "Carbon Markets"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-compliance",
      "vc:label": "Regulatory Compliance"
    },
    {
      "@id": "urn:visionflow:linked:carbon-registry",
      "vc:label": "Carbon Registry"
    },
    {
      "@id": "urn:visionflow:linked:sustainability-domain",
      "vc:label": "Sustainability Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Verra VCS Standard"
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
  "@id": "urn:ngm:class:verra-vcs-standard",
  "@type": "Class",
  "label": "Verra VCS Standard",
  "definition": "The Verra Verified Carbon Standard is a widely used programme for certifying voluntary carbon credits, setting rules for quantifying, verifying and issuing emission reductions and removals.",
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
        "@id": "urn:ngm:class:carbon-markets",
        "label": "Carbon Markets"
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
  "@id": "urn:visionflow:annotation:link-resolutions:verra-vcs-standard:cf94dc6720a1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:25068757fd02f0f58fb2b608b9439b41c9bb3a710ab66041611c8deaea43266b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Carbon Markets]]",
      "resolved": "urn:visionflow:linked:carbon-markets",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Compliance]]",
      "resolved": "urn:visionflow:linked:regulatory-compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Carbon Registry]]",
      "resolved": "urn:visionflow:linked:carbon-registry",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sustainability Domain]]",
      "resolved": "urn:visionflow:linked:sustainability-domain",
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
  - The Verra Verified Carbon Standard is a widely used programme for certifying voluntary carbon credits, setting rules for quantifying, verifying and issuing emission reductions and removals.

- ### Semantic Classification
  - owl-class:: metaverse:VerraVCSStandard
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Carbon Markets]]
  - bridges-to:: [[Carbon Registry]], [[Sustainability Domain]]
  - requires:: [[Carbon Markets]]
  - enables:: [[Regulatory Compliance]]

- ### Content
  - The Verified Carbon Standard defines methodologies for measuring greenhouse gas reductions, requires independent validation and verification, and issues tradable credits tracked in a registry. It is among the most used standards in the voluntary carbon market.
  - Credibility depends on additionality, permanence and accurate baselines, which have drawn scrutiny of some methodologies. The standard connects carbon markets to registries and sustainability reporting.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
