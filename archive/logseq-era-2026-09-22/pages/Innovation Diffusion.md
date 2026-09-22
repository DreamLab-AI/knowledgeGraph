public:: true

# Innovation Diffusion
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:10fd74d4844e267b22f3820bf7dfc491c64ad432cb756c9118a891ac7d2cdd51",
  "@type": "Page",
  "vc:slug": "innovation-diffusion",
  "title": "Innovation Diffusion",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:technology-adoption",
      "vc:label": "Technology Adoption"
    },
    {
      "@id": "urn:visionflow:linked:agent-based-modelling",
      "vc:label": "Agent-Based Modelling"
    },
    {
      "@id": "urn:visionflow:linked:economics",
      "vc:label": "Economics"
    },
    {
      "@id": "urn:visionflow:linked:simulation",
      "vc:label": "Simulation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Innovation Diffusion"
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
  "@id": "urn:ngm:class:innovation-diffusion",
  "@type": "Class",
  "label": "Innovation Diffusion",
  "definition": "Innovation diffusion is the process by which a new technology, practice or idea spreads through a population over time. It is studied with adoption curves that describe how successive groups take up an innovation.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technology-adoption",
      "label": "Technology Adoption"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:technology-adoption",
        "label": "Technology Adoption"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:agent-based-modelling",
        "label": "Agent-Based Modelling"
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
  "@id": "urn:visionflow:annotation:link-resolutions:innovation-diffusion:1233cfb765f2",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:10fd74d4844e267b22f3820bf7dfc491c64ad432cb756c9118a891ac7d2cdd51"
  },
  "vc:resolutions": [
    {
      "raw": "[[Technology Adoption]]",
      "resolved": "urn:visionflow:linked:technology-adoption",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Agent-Based Modelling]]",
      "resolved": "urn:visionflow:linked:agent-based-modelling",
      "kind": "StubLink"
    },
    {
      "raw": "[[Economics]]",
      "resolved": "urn:visionflow:linked:economics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Simulation]]",
      "resolved": "urn:visionflow:linked:simulation",
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
  - Innovation diffusion is the process by which a new technology, practice or idea spreads through a population over time. It is studied with adoption curves that describe how successive groups take up an innovation.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:InnovationDiffusion
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Technology Adoption]]
  - bridges-to:: [[Economics]], [[Simulation]]
  - requires:: [[Technology Adoption]]
  - enables:: [[Agent-Based Modelling]]

- ### Content
  - Innovation diffusion describes how an innovation moves from early adopters to the wider population, often following an S-shaped cumulative adoption curve. Factors include the relative advantage of the innovation, its compatibility with existing practice and the influence of social contacts.
  - In computational settings the process is modelled with agent-based simulations and aggregate adoption equations, which are used to forecast uptake of products and behaviours. The framing connects work in economics, sociology and the study of technology adoption.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
