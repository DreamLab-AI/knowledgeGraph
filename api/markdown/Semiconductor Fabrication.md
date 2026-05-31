public:: true

# Semiconductor Fabrication
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4eaa9a51768cd7c722b97380ff6a6a508de1a73b1059a8dac60e2dda34fc704d",
  "@type": "Page",
  "vc:slug": "semiconductor-fabrication",
  "title": "Semiconductor Fabrication",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:computer-science",
      "vc:label": "Computer Science"
    },
    {
      "@id": "urn:visionflow:linked:energy-consumption",
      "vc:label": "Energy Consumption"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Semiconductor Fabrication"
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
  "@id": "urn:ngm:class:semiconductor-fabrication",
  "@type": "Class",
  "label": "Semiconductor Fabrication",
  "definition": "Semiconductor fabrication is the manufacturing process that builds integrated circuits on semiconductor wafers through repeated steps of deposition, patterning, and etching.",
  "domain": "manufacturing",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:computer-science",
        "label": "Computer Science"
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
  "@id": "urn:visionflow:annotation:link-resolutions:semiconductor-fabrication:3ad36ea794f8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4eaa9a51768cd7c722b97380ff6a6a508de1a73b1059a8dac60e2dda34fc704d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Computer Science]]",
      "resolved": "urn:visionflow:linked:computer-science",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Energy Consumption]]",
      "resolved": "urn:visionflow:linked:energy-consumption",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - Semiconductor fabrication is the manufacturing process that builds integrated circuits on semiconductor wafers through repeated steps of deposition, patterning, and etching.

- ### Semantic Classification
  - owl-class:: manufacturing:SemiconductorFabrication
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Energy Consumption]]
  - enables:: [[Computer Science]]

- ### Content
  - Semiconductor fabrication takes place in cleanroom facilities where silicon wafers undergo many cycles of photolithography, doping, deposition, and etching to form transistors and interconnects. Process nodes are described by feature sizes measured in nanometres.
  - The process is capital intensive and precise, with yield depending on contamination control and accurate alignment. It underpins the supply of processors, memory, and other chips used across computing.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
