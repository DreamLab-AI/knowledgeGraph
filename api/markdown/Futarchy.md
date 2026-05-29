public:: true

# Futarchy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:futarchy",
  "@type": "Page",
  "vc:slug": "futarchy",
  "title": "Futarchy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:futarchy",
  "@type": "Class",
  "label": "Futarchy",
  "definition": "Futarchy is a governance mechanism proposed by economist Robin Hanson in which policy decisions are made by first defining measurable societal welfare metrics and then adopting whichever policy candidate is predicted by speculative prediction markets to maximise those metrics. Under futarchy, democratic institutions vote on the values or welfare criteria to optimise, while market prices — which aggregate information from many participants through financial incentives — determine the means by which those values are pursued, on the premise that markets are better information aggregators than committees for empirical questions about causal consequences.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:voting-mechanism", "label": "Voting Mechanism"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:mechanism-design", "label": "Mechanism Design"},
      {"@id": "urn:ngm:class:collective-decision-making", "label": "Collective Decision Making"},
      {"@id": "urn:ngm:class:on-chain-voting", "label": "On Chain Voting"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralized-governance", "label": "Decentralized Governance"},
      {"@id": "urn:ngm:class:dao-governance", "label": "DAO Governance"},
      {"@id": "urn:ngm:class:transparent-decision-making", "label": "Transparent Decision Making"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:quadratic-voting", "label": "Quadratic Voting"},
      {"@id": "urn:ngm:class:conviction-voting", "label": "Conviction Voting"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Futarchy]] is a [[Voting Mechanism]] and governance philosophy that delegates empirical policy choices to prediction market prices, separating the democratic determination of welfare goals from the market-based determination of optimal means, with potential applications in [[Decentralized Governance]] and [[DAO Governance]] contexts.

- ### Relationships
  - Futarchy is a specialised [[Voting Mechanism]] that integrates [[Mechanism Design]] insights about information aggregation with [[Collective Decision Making]] theory. It extends beyond conventional [[On Chain Voting]] by using market prices rather than headcounts as the signal for which policy produces the desired outcome. This approach supports [[Decentralized Governance]] aspirations in DAO ecosystems by potentially reducing plutocratic bias in proposal outcomes, and it serves as an alternative to purely token-weighted systems. It shares the design space with alternative mechanisms such as [[Quadratic Voting]] and [[Conviction Voting]], all aimed at improving [[Transparent Decision Making]] quality in decentralised organisations.

- ### Content
  - Futarchy was proposed by economist Robin Hanson in a 2000 paper titled "Shall We Vote on Values, But Bet on Beliefs?" The core observation was that democratic majority voting, while effective for aggregating preferences about values, is poorly suited to resolving empirical questions about consequences — what policy will actually produce the best outcomes. Prediction markets, by contrast, have a documented track record of producing well-calibrated probability estimates by rewarding participants financially when they are accurate and penalising overconfidence. Hanson's proposal was to exploit this information aggregation property at the level of governance: create conditional prediction markets for each policy option predicting the value of the chosen welfare metric if that option is adopted, and implement whichever option the market prices higher.

  - In practice, a futarchic system operates in two stages. First, the governed community votes to adopt a measurable welfare criterion — GDP per capita, token price at a future date, a composite health index, or any quantifiable proxy for collective wellbeing. Second, for each contested policy decision, conditional futures markets are opened: "welfare metric conditional on Policy A" versus "welfare metric conditional on Policy B." Rational traders with private information about the likely effects of each policy have financial incentive to buy the contract that corresponds to the better outcome, driving prices to reflect the aggregated market belief about which policy is superior. The policy with the higher conditional market price is automatically enacted; markets are settled based on subsequent observed outcomes.

  - The appeal of futarchy in Web3 contexts is significant because DAOs face a version of the core governance problem that is particularly acute: token-weighted voting concentrates power in large holders, voter apathy plagues most proposals, and information about the technical consequences of protocol parameter changes is unevenly distributed. Futarchic mechanisms promise to surface the informed views of domain experts through market prices rather than relying on participation by the uniformed majority. Projects including Gnosis (through their Omen and Augur integrations) and MetaDAO have conducted experimental futarchy implementations on-chain, using conditional token markets as the prediction vehicle.

  - Through 2024-2025, futarchy remains theoretically compelling but practically challenging to implement robustly. Key obstacles include the choice of welfare metric (which must be measurable, manipulation-resistant, and actually reflective of community values), market liquidity (thin markets produce noisy prices that fail to aggregate information reliably), the time horizon problem (many governance consequences manifest over years while prediction markets require nearer-term settlement), and the potential for circular dependencies when the governance token itself is the welfare metric. Research continues on combining futarchy with quadratic mechanisms, using AI-generated market making to bootstrap liquidity, and applying it to narrow sub-decisions within larger DAO governance structures where these problems are more tractable.

