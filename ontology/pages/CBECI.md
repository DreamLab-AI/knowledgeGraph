public:: true

# CBECI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cbeci",
  "@type": "Page",
  "vc:slug": "cbeci",
  "title": "CBECI",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cbeci",
  "@type": "Class",
  "label": "CBECI",
  "definition": "The Cambridge Bitcoin Electricity Consumption Index (CBECI) is a real-time model produced by the Cambridge Centre for Alternative Finance that estimates the annualised electricity consumption and carbon footprint of the Bitcoin proof-of-work mining network. It aggregates hardware efficiency data from known ASIC models, network hash rate, and electricity price assumptions to produce lower-, central-, and upper-bound estimates.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:benchmark-evaluation",
      "label": "Benchmark Evaluation"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:hash-rate",
        "label": "Hash Rate"
      },
      {
        "@id": "urn:ngm:class:electricity-consumption",
        "label": "Electricity Consumption"
      },
      {
        "@id": "urn:ngm:class:cbeci-methodology",
        "label": "CBECI Methodology"
      },
      {
        "@id": "urn:ngm:class:asic-hardware",
        "label": "ASIC Mining Hardware"
      },
      {
        "@id": "urn:ngm:class:difficulty",
        "label": "Network Difficulty"
      },
      {
        "@id": "urn:ngm:class:mining-pool",
        "label": "Mining Pool Data"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:proof-of-work-energy-consumption",
        "label": "Proof-of-Work Energy Consumption"
      },
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-environmental-issues",
        "label": "Bitcoin Environmental Issues"
      },
      {
        "@id": "urn:ngm:class:cambridge-centre-for-alternative-finance",
        "label": "Cambridge Centre for Alternative Finance"
      },
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining",
        "label": "Bitcoin Mining"
      },
      {
        "@id": "urn:ngm:class:carbon-footprint",
        "label": "Carbon Footprint"
      },
      {
        "@id": "urn:ngm:class:sustainable-bitcoin-protocol",
        "label": "Sustainable Bitcoin Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:carbon-accounting",
        "label": "Carbon Accounting"
      },
      {
        "@id": "urn:ngm:class:renewable-energy-certificates",
        "label": "Renewable Energy Certification"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof of Work"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:bc-0482-eu-mica-regulation",
        "label": "MiCA Regulation"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency-regulation",
        "label": "Cryptocurrency Regulation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:cambridge-bitcoin-electricity-consumption-index",
      "label": "Cambridge Bitcoin Electricity Consumption Index"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[CBECI]] is the Cambridge Bitcoin Electricity Consumption Index, a continuously updated model that estimates the annualised electrical energy consumed by the [[Bitcoin Mining]] network, using ASIC efficiency curves and observed [[Hash Rate]] data to bound total consumption.

- ### Relationships
  - [[CBECI]] is produced by the [[Cambridge Centre for Alternative Finance]] and is grounded in the [[CBECI Methodology]] that weights hardware efficiency distributions against network [[Hash Rate]]. It quantifies [[Proof-of-Work Energy Consumption]] and informs debate on [[Bitcoin Environmental Issues]]. Estimates feed into carbon accounting and renewable energy certification schemes like [[Sustainable Bitcoin Protocol]].

- ### Content
  - The CBECI was launched in 2019 by the Cambridge Centre for Alternative Finance (CCAF) at the Cambridge Judge Business School, responding to conflicting and poorly sourced claims about Bitcoin's energy use. Earlier estimates ranged by orders of magnitude because analysts lacked a principled model accounting for miner hardware diversity. The CCAF assembled a database of commercially available ASIC miners—their terahash-per-second ratings and watt consumption—and combined this with the publicly observable aggregate hash rate to produce the first rigorous, peer-reviewed consumption estimate.

  - The model works by constructing a probability distribution over the efficiency of the active miner fleet. Because miners retire hardware at different rates depending on profitability, the index models scenarios where older, less efficient machines are still operating (upper bound) versus only the most efficient machines are active (lower bound). The central estimate weights these scenarios. Electricity price assumptions are derived from mining-pool geographic surveys and national tariff data. Annualised terawatt-hour figures are updated at five-minute intervals as new block data arrives.

  - CBECI data underpins policy discussions at the EU, US Congress, and international forums. It provided the primary empirical reference for the European Commission's MiCA energy disclosure consultation and has been cited in over 500 academic papers. Its geographic mining map—launched in 2020—enables attribution of consumption to specific electricity grids and their carbon intensities, enabling estimates of Bitcoin's actual CO2 equivalent footprint rather than merely its energy footprint.

  - In 2024–2025, the CBECI methodology was extended to cover Ethereum's historical proof-of-work phase (for archival comparison) and to incorporate updated ASIC efficiency data following the emergence of 5-nm and 3-nm Bitcoin mining chips. The index now also tracks mining pool renewable energy self-reporting and integrates data from the Bitcoin Mining Council, though with transparency caveats about self-reporting bias. Regulatory bodies including the IEA and the European Securities and Markets Authority reference CBECI as the authoritative benchmark for Bitcoin energy policy.

