public:: true

# Welfare Economics
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:welfare-economics", "@type":"Page", "title":"Welfare Economics", "vc:slug":"welfare-economics", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:welfare-economics",
  "@type":"Class",
  "label":"Welfare Economics",
  "definition":"Welfare economics is the branch of economics that evaluates the allocation of resources and the distribution of outcomes in terms of aggregate social well-being. It formalises notions of efficiency, principally Pareto efficiency, alongside frameworks for comparing distributions through social welfare functions, and provides the normative basis for assessing market outcomes, market failures, and policy interventions. In tokenised and blockchain economies it informs mechanism design, public-goods funding, and the analysis of incentive structures that determine whether decentralised systems produce socially desirable equilibria.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:microeconomics","label":"Microeconomics"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:economics","label":"Economics"}],
    "hasPart":[{"@id":"urn:ngm:class:utility-theory","label":"Utility Theory"},{"@id":"urn:ngm:class:public-goods","label":"Public Goods"}],
    "uses":[{"@id":"urn:ngm:class:utility-theory","label":"Utility Theory"},{"@id":"urn:ngm:class:game-theory","label":"Game Theory"}],
    "enables":[{"@id":"urn:ngm:class:mechanism-design","label":"Mechanism Design"}],
    "supports":[{"@id":"urn:ngm:class:public-goods","label":"Public Goods"}],
    "requires":[{"@id":"urn:ngm:class:microeconomics","label":"Microeconomics"}],
    "dependsOn":[{"@id":"urn:ngm:class:utility-theory","label":"Utility Theory"}],
    "bridgesTo":[{"@id":"urn:ngm:class:mechanism-design","label":"Mechanism Design"},{"@id":"urn:ngm:class:behavioural-economics","label":"Behavioural Economics"}],
    "contrastsWith":[{"@id":"urn:ngm:class:behavioural-economics","label":"Behavioural Economics"}],
    "relatedTo":[{"@id":"urn:ngm:class:game-theory","label":"Game Theory"},{"@id":"urn:ngm:class:economics","label":"Economics"},{"@id":"urn:ngm:class:public-goods","label":"Public Goods"}]
  },
  "sameAs":[{"@id":"urn:ngm:class:normative-economics","label":"Normative Economics"}],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - [[Welfare Economics]] is the branch of [[Microeconomics]] that evaluates resource allocation and the distribution of outcomes in terms of aggregate social well-being.
  - It formalises efficiency, chiefly Pareto efficiency, and frameworks such as social welfare functions for comparing distributions, drawing heavily on [[Utility Theory]].
  - It provides the normative basis for assessing market outcomes, market failures, and policy interventions, and informs [[Mechanism Design]] in tokenised and blockchain economies.

- ### Overview
  - Welfare economics asks not only how resources are allocated but whether an allocation is good, requiring explicit normative criteria layered on positive economic analysis.
  - The two fundamental theorems of welfare economics link competitive equilibria to Pareto efficiency and show that any efficient allocation can be supported by suitable initial endowments and prices.
  - Because Pareto efficiency is silent on distribution, the field introduces social welfare functions to make interpersonal and distributional comparisons, intersecting questions of equity and value judgements.
  - In decentralised systems it underpins reasoning about whether token incentives, fee structures, and governance rules steer participants toward socially desirable equilibria or toward [[Public Goods]] underprovision.

- ### Key aspects
  - #### Efficiency criteria
    - Pareto efficiency: no reallocation can make someone better off without making another worse off.
    - Kaldor-Hicks compensation tests extend comparisons to allocations where winners could in principle compensate losers.
  - #### Social welfare functions
    - Aggregate individual utilities into a societal objective, encoding distributional weights and equity preferences.
    - Connect to [[Utility Theory]] and to debates over cardinal versus ordinal interpersonal comparison.
  - #### Market failure and externalities
    - Analysis of [[Public Goods]], externalities, and information asymmetries where decentralised markets fail to reach efficient outcomes.
    - Motivates corrective interventions, taxes, and incentive redesign via [[Mechanism Design]].
  - #### Behavioural critiques
    - [[Behavioural Economics]] challenges the rational-agent assumptions underlying classical welfare analysis, prompting richer well-being measures.

- ### Applications
  - #### Policy evaluation
    - Cost-benefit analysis and the design of taxation, subsidy, and regulation grounded in welfare criteria.
  - #### Mechanism and market design
    - [[Game Theory]] and [[Mechanism Design]] use welfare objectives to design auctions, matching markets, and incentive-compatible protocols.
  - #### Public-goods funding in crypto-economies
    - Quadratic funding, retroactive public-goods funding, and token incentives evaluated against welfare and [[Public Goods]] provision objectives.

- ### Relationships
  - subClassOf:: [[Microeconomics]]
  - partOf:: [[Economics]]
  - hasPart:: [[Utility Theory]]
  - hasPart:: [[Public Goods]]
  - uses:: [[Utility Theory]]
  - uses:: [[Game Theory]]
  - enables:: [[Mechanism Design]]
  - supports:: [[Public Goods]]
  - requires:: [[Microeconomics]]
  - dependsOn:: [[Utility Theory]]
  - bridgesTo:: [[Mechanism Design]]
  - bridgesTo:: [[Behavioural Economics]]
  - contrastsWith:: [[Behavioural Economics]]
  - relatedTo:: [[Game Theory]]
  - relatedTo:: [[Economics]]
  - relatedTo:: [[Public Goods]]

- ### Provenance
  - sources::
  - updated:: 2026-06-15
