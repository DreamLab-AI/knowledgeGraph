public:: true

# Sustainable Bitcoin Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sustainable-bitcoin-protocol",
  "@type": "Page",
  "vc:slug": "sustainable-bitcoin-protocol",
  "title": "Sustainable Bitcoin Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sustainable-bitcoin-protocol",
  "@type": "Class",
  "label": "Sustainable Bitcoin Protocol",
  "definition": "The Sustainable Bitcoin Protocol (SBP) is a certification and tokenisation framework that attests the use of renewable or stranded energy in Bitcoin mining and issues on-chain Sustainable Bitcoin Certificates to verified miners. It enables green bitcoin premiums and provides institutional investors with auditable environmental provenance for Bitcoin holdings.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:blockchain-sustainability", "label": "Blockchain Sustainability"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:sustainable-bitcoin-certificates", "label": "Sustainable Bitcoin Certificates"},
      {"@id": "urn:ngm:class:renewable-energy-certificates", "label": "Renewable Energy Certificates"},
      {"@id": "urn:ngm:class:green-mining-pool", "label": "Green Mining Pool"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:stranded-energy-monetisation", "label": "Stranded Energy Monetisation"},
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-environmental-issues", "label": "Bitcoin Environmental Issues"},
      {"@id": "urn:ngm:class:carbon-neutral-blockchain", "label": "Carbon Neutral Blockchain"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Sustainable Bitcoin Protocol]] is a voluntary certification system that audits miner energy sources and issues on-chain [[Sustainable Bitcoin Certificates]] to Bitcoin produced from verified renewable or [[Stranded Energy Monetisation]] sources, enabling a traceable green provenance layer for Bitcoin.

- ### Relationships
  - [[Sustainable Bitcoin Protocol]] depends on [[Renewable Energy Certificates]] and third-party energy auditing to validate miner claims and issues [[Sustainable Bitcoin Certificates]] as tokenised proof. It works in conjunction with [[Green Mining Pool]] operators who aggregate certified hashrate. It directly addresses [[Bitcoin Environmental Issues]] and contributes to achieving [[Carbon Neutral Blockchain]] outcomes.

- ### Content
  - The Sustainable Bitcoin Protocol was founded in 2021 by a coalition of energy industry participants, Bitcoin miners, and ESG investors in response to growing institutional pressure over Bitcoin's energy footprint. The initiative recognised that existing renewable energy certificate (REC) markets, designed for grid-connected consumers, were inadequate for behind-the-meter mining operations using curtailed or stranded power. SBP developed a parallel attestation framework tailored to Bitcoin's unique proof-of-work production process.

  - The protocol operates through a three-tier verification system. Energy auditors—qualified third-party firms—assess miner facilities, verifying metering data, energy purchase agreements, and grid interconnection documents. Verified miners receive Sustainable Bitcoin Certificates (SBCs), each associated with specific mined bitcoin through block-level attestation. These certificates are issued on a public blockchain, creating an immutable provenance record. Institutional buyers of bitcoin can then match holdings to SBCs, demonstrating renewable provenance to their own ESG reporting frameworks.

  - The practical impact encompasses both market and policy dimensions. ESG-constrained investors—sovereign wealth funds, pension funds, and some asset managers—face internal mandates restricting exposure to high-carbon assets. A verifiable green premium on certified bitcoin widens the investable universe for such entities, potentially increasing demand and improving liquidity in the certified segment. At the policy level, SBP data contributes to regulatory discussions about whether proof-of-work mining is categorically incompatible with net-zero commitments or conditionally acceptable under verified renewable sourcing.

  - By 2024–2025, SBP has certified mining operations across North America, Iceland, and parts of Sub-Saharan Africa. Competing frameworks—the Bitcoin Mining Council's voluntary reporting and the Rocky Mountain Institute's clean bitcoin initiative—have created a fragmented landscape. Standardisation efforts are ongoing, with ISO and GRI working groups examining whether existing environmental attribute certificate standards can be extended to cover Bitcoin mining. Challenges remain around double-counting risks, the additionality of renewable procurement, and the treatment of stranded gas operations where methane combustion improves versus flaring but still produces CO2.

