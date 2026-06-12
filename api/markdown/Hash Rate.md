public:: true
alias:: HashRate

# Hash Rate
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:hash-rate",
  "@type": "Page",
  "vc:slug": "hash-rate",
  "title": "Hash Rate",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hash-rate",
  "@type": "Class",
  "label": "Hash Rate",
  "definition": "Hash rate is the aggregate computational throughput of a proof-of-work blockchain network, measured as the number of hash function evaluations performed per unit of time across all participating mining nodes. It serves as the primary quantitative indicator of a network's security: a higher hash rate means an attacker must control and operate more hardware to execute a 51% attack, making double-spend attacks proportionally more expensive. Hash rate is typically expressed in hashes per second (H/s) with SI prefixes (kH/s, MH/s, GH/s, TH/s, PH/s, EH/s) and fluctuates with the entry or exit of miners, hardware efficiency improvements, and changes in mining profitability.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:network-hash-rate", "label": "Network Hash Rate"},
      {"@id": "urn:ngm:class:difficulty", "label": "Difficulty"},
      {"@id": "urn:ngm:class:difficulty-adjustment", "label": "Difficulty Adjustment"},
      {"@id": "urn:ngm:class:mining", "label": "Mining"},
      {"@id": "urn:ngm:class:mining-pool", "label": "Mining Pool"},
      {"@id": "urn:ngm:class:51-attack", "label": "51% Attack"},
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining", "label": "Bitcoin Mining"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:hash-function", "label": "Hash Function"},
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"},
      {"@id": "urn:ngm:class:compute-resources", "label": "Compute Resources"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Hash Rate]] is the total number of [[Hash Function]] evaluations performed per second by all nodes participating in [[Proof Of Work]] consensus, quantifying network security by expressing the computational cost an attacker must match or exceed to execute a [[51% Attack]] through controlling [[Difficulty Adjustment]]-governed mining competition.

- ### Relationships
  - Hash rate is the primary output metric of [[Mining]] activity, aggregated across individual miners and [[Mining Pool]] collectives into the [[Network Hash Rate]]. It is causally linked to [[Difficulty]], which the [[Difficulty Adjustment]] algorithm increases or decreases to maintain the target block interval as hash rate changes. Hash rate is produced by applying [[Cryptographic Hash Function]] operations to candidate block headers using [[Compute Resources]], and its total value determines the economic cost of a [[51% Attack]] against [[Bitcoin Mining]] and other proof-of-work networks.

- ### Content
  - Hash rate as a concept emerged with Bitcoin in 2009 as the natural metric for Nakamoto consensus security. The fundamental security argument of proof-of-work is that the cost of rewriting history is proportional to the computational work — and therefore energy expenditure — required to reproduce the chain. Hash rate operationalises this: a network with 500 EH/s (exahashes per second, Bitcoin's approximate level in 2024) requires an attacker to deploy and operate hardware capable of matching that rate for the duration of the attack, currently representing billions of dollars in equipment and ongoing electricity costs.

  - The hash rate of a network is not directly measured but estimated. Block production follows a Poisson process with a known target inter-block time (e.g. 10 minutes for Bitcoin). By observing the actual time between blocks and the current difficulty target, observers can infer the expected hash rate needed to produce blocks at that rate. This estimation has statistical variance, so reported hash rates are typically smoothed over a rolling window of blocks. Individual miners measure their own hash rate directly from hardware telemetry; the network hash rate is the sum of all participant rates, though the distribution across pools is observable only through block attribution.

  - Hash rate exhibits strong correlation with mining economics. When Bitcoin's price rises, marginal mining becomes profitable for operators with higher electricity costs, causing new hardware to come online and hash rate to increase. Conversely, price drops or electricity cost spikes cause marginal miners to exit, reducing hash rate. The difficulty adjustment algorithm — which recalculates every 2016 blocks (~2 weeks for Bitcoin) — ensures that block times remain near the 10-minute target regardless of hash rate fluctuations. ASIC hardware generations also create step-changes in hash rate: the introduction of a new, more efficient miner can simultaneously increase total hash rate and reduce the operational profitability of previous-generation hardware.

  - As of 2024–2025, Bitcoin's hash rate reached new all-time highs following the April 2024 halving, despite the block reward dropping from 6.25 to 3.125 BTC, reflecting a combination of new-generation ASIC deployment, access to cheap stranded energy sources, and elevated Bitcoin price. The geographic distribution of hash rate has diversified significantly from the 2021 period when China's mining ban displaced approximately 50% of global hash rate; the USA, Kazakhstan, Russia, and various energy-surplus regions now each contribute significant fractions. Ethereum, having transitioned to proof-of-stake in September 2022, no longer has a hash rate, and its former GPU mining hash rate partially migrated to Ethereum Classic and other GPU-mineable chains.

