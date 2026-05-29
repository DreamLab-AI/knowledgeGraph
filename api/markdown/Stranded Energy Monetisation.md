public:: true

# Stranded Energy Monetisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:stranded-energy-monetisation",
  "@type": "Page",
  "vc:slug": "stranded-energy-monetisation",
  "title": "Stranded Energy Monetisation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:stranded-energy-monetisation",
  "@type": "Class",
  "label": "Stranded Energy Monetisation",
  "definition": "Stranded energy monetisation is the practice of converting otherwise wasted or non-transmittable electricity—including curtailed renewable generation, flared natural gas, and grid-overflow surplus—into economic value through flexible, interruptible load processes such as Bitcoin mining or electrolyser hydrogen production. By co-locating computation or industrial loads at the energy source, it captures value that cannot reach load centres due to grid constraints.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:stranded-energy", "label": "Stranded Energy"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:bitcoin-mining", "label": "Bitcoin Mining"},
      {"@id": "urn:ngm:class:demand-response", "label": "Demand Response"},
      {"@id": "urn:ngm:class:methane-abatement", "label": "Methane Abatement"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:demand-response-mining", "label": "Demand Response Mining"},
      {"@id": "urn:ngm:class:methane-mitigation-mining", "label": "Methane Mitigation Mining"},
      {"@id": "urn:ngm:class:blockchain-sustainability", "label": "Blockchain Sustainability"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Stranded Energy Monetisation]] describes converting non-transmittable, curtailed, or waste energy into economic value by deploying interruptible computational or industrial loads—most notably [[Bitcoin Mining]]—directly at generation sites unable to deliver power to consumers through existing grid infrastructure.

- ### Relationships
  - [[Stranded Energy Monetisation]] is a sub-concept of [[Stranded Energy]] and operationalises [[Demand Response]] by making mining hardware the dispatchable load. It encompasses [[Methane Abatement]] through flared-gas mining, and its profitability dynamics are closely coupled to [[Demand Response Mining]] contracts. Proponents argue it improves [[Blockchain Sustainability]] by shifting hash rate to waste energy sources.

- ### Content
  - The concept emerged from two separate industrial contexts. In the oil and gas sector, producers flaring associated natural gas at remote wellheads—unable to justify pipeline construction—began trialling on-site gas-to-electricity generation feeding containerised Bitcoin mining units around 2017–2018. Simultaneously, grid operators in markets with high renewable penetration (Texas ERCOT, parts of China, Australia) were regularly curtailing wind and solar generation during overnight low-demand periods, creating a pricing signal exploitable by interruptible loads.

  - The economic logic rests on the marginal cost of curtailed energy being near zero or even negative (grid operators sometimes pay industrial consumers to absorb surplus). Mining hardware consuming this electricity earns block rewards and transaction fees at a cost of production far below the industry average. Containerised, trailer-mounted mining rigs provide the mobility and rapid deployment necessary to exploit remote or ephemeral surpluses. Flared-gas operations convert methane—a potent greenhouse gas—to CO2 through combustion, with the byproduct electricity funding operations; some studies report 50–80% reductions in methane emissions versus venting.

  - From an energy policy perspective, stranded energy monetisation functions as a demand-side mechanism that improves renewable curtailment economics, potentially accelerating investment in grid-scale renewables in areas where transmission buildout is slow. Texas became the most prominent example: after ERCOT opened its market to large industrial loads in 2020, several gigawatts of mining capacity enrolled as dispatchable interruptible loads, curtailing voluntarily during the February 2021 storm and the 2022 summer heat waves in exchange for demand response payments.

  - By 2024–2025, stranded energy monetisation has become a recognised category in energy regulatory frameworks. The US Department of Energy published a landscape analysis of Bitcoin mining's grid interactions in 2023, and several FERC proceedings have addressed miner participation in capacity markets. International projects span Iceland's geothermal surplus, Bhutan's hydroelectric excess, and Ethiopian dam overflow. Critics note that not all stranded energy claimed by miners is genuinely curtailed—some operations consume power that would otherwise have served other loads—and verification standards remain nascent. Initiatives like the [[Sustainable Bitcoin Protocol]] are developing attestation frameworks to formally certify stranded and renewable energy claims.

