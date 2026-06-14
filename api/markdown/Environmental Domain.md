public:: true

# Environmental Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:23bcaa114be736dfbeef1be0433c02c5088f17e78a0b872225bdcd0553780f1e",
  "@type": "Page",
  "vc:slug": "environmental-domain",
  "title": "Environmental Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:climate-modelling",
      "vc:label": "Climate Modelling"
    },
    {
      "@id": "urn:visionflow:linked:environmental-sensing",
      "vc:label": "Environmental Sensing"
    },
    {
      "@id": "urn:visionflow:linked:sustainability-assessment",
      "vc:label": "Sustainability Assessment"
    },
    {
      "@id": "urn:visionflow:linked:resource-management",
      "vc:label": "Resource Management"
    },
    {
      "@id": "urn:visionflow:linked:ecological-modelling",
      "vc:label": "Ecological Modelling"
    },
    {
      "@id": "urn:visionflow:linked:earth-science",
      "vc:label": "Earth Science"
    },
    {
      "@id": "urn:visionflow:linked:statistics",
      "vc:label": "Statistics"
    },
    {
      "@id": "urn:visionflow:linked:sensor-networks",
      "vc:label": "Sensor Networks"
    },
    {
      "@id": "urn:visionflow:linked:environmental-monitoring",
      "vc:label": "Environmental Monitoring"
    },
    {
      "@id": "urn:visionflow:linked:carbon-accounting",
      "vc:label": "Carbon Accounting"
    },
    {
      "@id": "urn:visionflow:linked:conservation-planning",
      "vc:label": "Conservation Planning"
    },
    {
      "@id": "urn:visionflow:linked:infrastructure-domain",
      "vc:label": "Infrastructure Domain"
    },
    {
      "@id": "urn:visionflow:linked:financial-markets-domain",
      "vc:label": "Financial Markets Domain"
    },
    {
      "@id": "urn:visionflow:linked:regulation-domain",
      "vc:label": "Regulation Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:iso-14001-2015",
      "vc:label": "ISO 14001:2015"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Environmental Domain"
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
  "@id": "urn:ngm:class:environmental-domain",
  "@type": "Class",
  "label": "Environmental Domain",
  "definition": "The Environmental Domain covers the modelling, monitoring and management of natural and built environments and their resources. Its scope includes climate and ecological modelling, environmental sensing, sustainability assessment and resource management. It is a top-level subject classification applied across many technologies. The boundary excludes economic and market analysis of resources, which belongs to the Financial Markets Domain.",
  "domain": "governance",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Infra Legal And Regulatory"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:climate-modelling",
        "label": "Climate Modelling"
      },
      {
        "@id": "urn:ngm:class:environmental-sensing",
        "label": "Environmental Sensing"
      },
      {
        "@id": "urn:ngm:class:sustainability-assessment",
        "label": "Sustainability Assessment"
      },
      {
        "@id": "urn:ngm:class:resource-management",
        "label": "Resource Management"
      },
      {
        "@id": "urn:ngm:class:ecological-modelling",
        "label": "Ecological Modelling"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:earth-science",
        "label": "Earth Science"
      },
      {
        "@id": "urn:ngm:class:statistics",
        "label": "Statistics"
      },
      {
        "@id": "urn:ngm:class:sensor-networks",
        "label": "Sensor Networks"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:environmental-monitoring",
        "label": "Environmental Monitoring"
      },
      {
        "@id": "urn:ngm:class:carbon-accounting",
        "label": "Carbon Accounting"
      },
      {
        "@id": "urn:ngm:class:conservation-planning",
        "label": "Conservation Planning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:environmental-domain:fb04abb1da49",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:23bcaa114be736dfbeef1be0433c02c5088f17e78a0b872225bdcd0553780f1e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Climate Modelling]]",
      "resolved": "urn:visionflow:linked:climate-modelling",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Environmental Sensing]]",
      "resolved": "urn:visionflow:linked:environmental-sensing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sustainability Assessment]]",
      "resolved": "urn:visionflow:linked:sustainability-assessment",
      "kind": "StubLink"
    },
    {
      "raw": "[[Resource Management]]",
      "resolved": "urn:visionflow:linked:resource-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ecological Modelling]]",
      "resolved": "urn:visionflow:linked:ecological-modelling",
      "kind": "StubLink"
    },
    {
      "raw": "[[Earth Science]]",
      "resolved": "urn:visionflow:linked:earth-science",
      "kind": "StubLink"
    },
    {
      "raw": "[[Statistics]]",
      "resolved": "urn:visionflow:linked:statistics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sensor Networks]]",
      "resolved": "urn:visionflow:linked:sensor-networks",
      "kind": "StubLink"
    },
    {
      "raw": "[[Environmental Monitoring]]",
      "resolved": "urn:visionflow:linked:environmental-monitoring",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Carbon Accounting]]",
      "resolved": "urn:visionflow:linked:carbon-accounting",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Conservation Planning]]",
      "resolved": "urn:visionflow:linked:conservation-planning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Infrastructure Domain]]",
      "resolved": "urn:visionflow:linked:infrastructure-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Markets Domain]]",
      "resolved": "urn:visionflow:linked:financial-markets-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regulation Domain]]",
      "resolved": "urn:visionflow:linked:regulation-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISO 14001:2015]]",
      "resolved": "urn:visionflow:linked:iso-14001-2015",
      "kind": "StubLink"
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
  - The Environmental Domain covers the modelling, monitoring and management of natural and built environments and their resources. Its scope includes climate and ecological modelling, environmental sensing, sustainability assessment and resource management. It is a top-level subject classification applied across many technologies. The boundary excludes economic and market analysis of resources, which belongs to the Financial Markets Domain.

- ### Semantic Classification
  - owl-class:: env:EnvironmentalDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Infrastructure Domain]], [[Financial Markets Domain]], [[Regulation Domain]]
  - has-part:: [[Climate Modelling]], [[Environmental Sensing]], [[Sustainability Assessment]], [[Resource Management]], [[Ecological Modelling]]
  - requires:: [[Earth Science]], [[Statistics]], [[Sensor Networks]]
  - enables:: [[Environmental Monitoring]], [[Carbon Accounting]], [[Conservation Planning]]

- ### Content
  - The Environmental Domain addresses the scientific and operational understanding of environments and the resources they hold. Its scope covers the modelling of climate and ecosystems, the sensing of environmental variables, the assessment of sustainability and the management of finite resources. The boundary is the physical environment and its stewardship; valuation and trading of environmental assets fall to the Financial Markets Domain.
  - Member concepts include Climate Modelling, Environmental Sensing, Sustainability Assessment, Resource Management and Ecological Modelling. These depend on earth science for physical models, statistics for inference under uncertainty and sensor networks for data collection.
  - The domain bridges to the Infrastructure Domain through monitoring systems, to the Financial Markets Domain through carbon markets and resource pricing, and to the Regulation Domain through environmental standards. It enables environmental monitoring, carbon accounting and conservation planning.

- ### Provenance
  - sources:: [[ISO 14001:2015]]
  - migration-date:: 2026-05-29T00:00:00Z
