public:: true

# Cambridge Bitcoin Electricity Consumption Index
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c1bd5dec4c0a67d3d333b3424a5367229d4b9b810d2c6ef484a391ecfbe0fb83",
  "@type": "Page",
  "vc:slug": "cambridge-bitcoin-electricity-consumption-index",
  "title": "Cambridge Bitcoin Electricity Consumption Index",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:mining",
      "vc:label": "Mining"
    },
    {
      "@id": "urn:visionflow:linked:carbon-accounting",
      "vc:label": "Carbon Accounting"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-network",
      "vc:label": "Bitcoin Network"
    },
    {
      "@id": "urn:visionflow:linked:sustainability",
      "vc:label": "Sustainability"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-mining",
      "vc:label": "Bitcoin Mining"
    },
    {
      "@id": "urn:visionflow:linked:https-ccaf-io-cbnsi-cbeci",
      "vc:label": "https://ccaf.io/cbnsi/cbeci"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Cambridge Bitcoin Electricity Consumption Index"
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
  "@id": "urn:ngm:class:cambridge-bitcoin-electricity-consumption-index",
  "@type": "Class",
  "label": "Cambridge Bitcoin Electricity Consumption Index",
  "definition": "An index published by the University of Cambridge that estimates the electricity consumption of the Bitcoin network from mining hardware efficiency and network hashrate. It provides a transparent methodology and range of estimates rather than a single fixed figure.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining",
      "label": "Bitcoin Mining"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:mining",
        "label": "Mining"
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
  "@id": "urn:visionflow:annotation:link-resolutions:cambridge-bitcoin-electricity-consumption-index:9b1d6a559eaa",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c1bd5dec4c0a67d3d333b3424a5367229d4b9b810d2c6ef484a391ecfbe0fb83"
  },
  "vc:resolutions": [
    {
      "raw": "[[Mining]]",
      "resolved": "urn:visionflow:linked:mining",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Carbon Accounting]]",
      "resolved": "urn:visionflow:linked:carbon-accounting",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Network]]",
      "resolved": "urn:visionflow:linked:bitcoin-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sustainability]]",
      "resolved": "urn:visionflow:linked:sustainability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Mining]]",
      "resolved": "urn:visionflow:linked:bitcoin-mining",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://ccaf.io/cbnsi/cbeci]]",
      "resolved": "urn:visionflow:linked:https-ccaf-io-cbnsi-cbeci",
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
  - An index published by the University of Cambridge that estimates the electricity consumption of the Bitcoin network from mining hardware efficiency and network hashrate. It provides a transparent methodology and range of estimates rather than a single fixed figure.

- ### Semantic Classification
  - owl-class:: blockchain:CambridgeBitcoinElectricityConsumptionIndex
  - owl-role:: NamedIndividual

- ### Relationships
  - is-subclass-of:: [[Bitcoin Mining]]
  - bridges-to:: [[Bitcoin Network]], [[Sustainability]]
  - requires:: [[Mining]]
  - enables:: [[Carbon Accounting]]

- ### Content
  - The Cambridge Bitcoin Electricity Consumption Index models the energy used by Bitcoin mining by combining the network's measured hashrate with assumptions about the efficiency profile of active mining hardware. It reports lower-bound, upper-bound and best-guess estimates to reflect uncertainty.
  - The index is widely cited in debates about the environmental footprint of proof-of-work and informs work on carbon accounting and renewable energy sourcing in mining. Its open methodology lets others reproduce and critique the estimates.

- ### Provenance
  - sources:: [[https://ccaf.io/cbnsi/cbeci]]
  - migration-date:: 2026-05-29T00:00:00Z
