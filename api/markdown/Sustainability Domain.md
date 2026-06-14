public:: true

# Sustainability Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a7a9073afe960ef80672c4f740acb79faeecb124091ecb0c29b713b8603f9747",
  "@type": "Page",
  "vc:slug": "sustainability-domain",
  "title": "Sustainability Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:carbon-footprint",
      "vc:label": "Carbon Footprint"
    },
    {
      "@id": "urn:visionflow:linked:energy-efficiency",
      "vc:label": "Energy Efficiency"
    },
    {
      "@id": "urn:visionflow:linked:circular-economy",
      "vc:label": "Circular Economy"
    },
    {
      "@id": "urn:visionflow:linked:lifecycle-assessment",
      "vc:label": "Lifecycle Assessment"
    },
    {
      "@id": "urn:visionflow:linked:resource-consumption",
      "vc:label": "Resource Consumption"
    },
    {
      "@id": "urn:visionflow:linked:data-management-domain",
      "vc:label": "Data Management Domain"
    },
    {
      "@id": "urn:visionflow:linked:emissions-reduction",
      "vc:label": "Emissions Reduction"
    },
    {
      "@id": "urn:visionflow:linked:resource-optimisation",
      "vc:label": "Resource Optimisation"
    },
    {
      "@id": "urn:visionflow:linked:infrastructure-domain",
      "vc:label": "Infrastructure Domain"
    },
    {
      "@id": "urn:visionflow:linked:supply-chain-domain",
      "vc:label": "Supply Chain Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:iso-14040",
      "vc:label": "ISO 14040"
    },
    {
      "@id": "urn:visionflow:linked:ghg-protocol",
      "vc:label": "GHG Protocol"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Sustainability Domain"
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
  "@id": "urn:ngm:class:sustainability-domain",
  "@type": "Class",
  "label": "Sustainability Domain",
  "definition": "The Sustainability Domain classifies concepts concerning the environmental, social and economic effects of systems over their full lifecycle. It covers resource consumption, emissions, circularity and the measurement of long-term viability. As a top-level subject axis it provides criteria by which designs in other domains are assessed against ecological and societal limits.",
  "domain": "governance",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:carbon-footprint",
        "label": "Carbon Footprint"
      },
      {
        "@id": "urn:ngm:class:energy-efficiency",
        "label": "Energy Efficiency"
      },
      {
        "@id": "urn:ngm:class:circular-economy",
        "label": "Circular Economy"
      },
      {
        "@id": "urn:ngm:class:life-cycle-assessment",
        "label": "Lifecycle Assessment"
      },
      {
        "@id": "urn:ngm:class:resource-consumption",
        "label": "Resource Consumption"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-management-domain",
        "label": "Data Management Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:emissions-reduction",
        "label": "Emissions Reduction"
      },
      {
        "@id": "urn:ngm:class:resource-optimisation",
        "label": "Resource Optimisation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:sustainability-domain:04295b87d604",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a7a9073afe960ef80672c4f740acb79faeecb124091ecb0c29b713b8603f9747"
  },
  "vc:resolutions": [
    {
      "raw": "[[Carbon Footprint]]",
      "resolved": "urn:visionflow:linked:carbon-footprint",
      "kind": "StubLink"
    },
    {
      "raw": "[[Energy Efficiency]]",
      "resolved": "urn:visionflow:linked:energy-efficiency",
      "kind": "StubLink"
    },
    {
      "raw": "[[Circular Economy]]",
      "resolved": "urn:visionflow:linked:circular-economy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Lifecycle Assessment]]",
      "resolved": "urn:visionflow:linked:lifecycle-assessment",
      "kind": "StubLink"
    },
    {
      "raw": "[[Resource Consumption]]",
      "resolved": "urn:visionflow:linked:resource-consumption",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Management Domain]]",
      "resolved": "urn:visionflow:linked:data-management-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Emissions Reduction]]",
      "resolved": "urn:visionflow:linked:emissions-reduction",
      "kind": "StubLink"
    },
    {
      "raw": "[[Resource Optimisation]]",
      "resolved": "urn:visionflow:linked:resource-optimisation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Infrastructure Domain]]",
      "resolved": "urn:visionflow:linked:infrastructure-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Supply Chain Domain]]",
      "resolved": "urn:visionflow:linked:supply-chain-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISO 14040]]",
      "resolved": "urn:visionflow:linked:iso-14040",
      "kind": "StubLink"
    },
    {
      "raw": "[[GHG Protocol]]",
      "resolved": "urn:visionflow:linked:ghg-protocol",
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
  - The Sustainability Domain classifies concepts concerning the environmental, social and economic effects of systems over their full lifecycle. It covers resource consumption, emissions, circularity and the measurement of long-term viability. As a top-level subject axis it provides criteria by which designs in other domains are assessed against ecological and societal limits.

- ### Semantic Classification
  - owl-class:: sus:SustainabilityDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Infrastructure Domain]], [[Supply Chain Domain]]
  - has-part:: [[Carbon Footprint]], [[Energy Efficiency]], [[Circular Economy]], [[Lifecycle Assessment]], [[Resource Consumption]]
  - requires:: [[Data Management Domain]]
  - enables:: [[Emissions Reduction]], [[Resource Optimisation]]

- ### Content
  - Sustainability concerns the capacity of systems to operate within environmental and social limits over the long term. It assesses inputs such as energy, water and materials and outputs such as emissions and waste across the lifecycle from extraction to disposal. Lifecycle assessment provides a structured method for quantifying these effects and comparing alternatives.
  - The domain promotes efficiency and circularity, designing so that resources are reused rather than discarded and energy is minimised per unit of useful work. It addresses the carbon intensity of computation, manufacturing and transport, and the measurement and reporting frameworks that make claims verifiable. Social dimensions include labour conditions and equitable distribution of benefits and burdens.
  - Sustainability bridges to infrastructure and supply chain concerns, where the largest material and energy flows occur. It depends on data management to gather the reliable measurements that any credible assessment requires.

- ### Provenance
  - sources:: [[ISO 14040]], [[GHG Protocol]]
  - migration-date:: 2026-05-29T00:00:00Z
