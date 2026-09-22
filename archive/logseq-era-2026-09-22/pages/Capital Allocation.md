public:: true

# Capital Allocation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:capital-allocation", "@type":"Page", "title":"Capital Allocation", "vc:slug":"capital-allocation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:capital-allocation",
  "@type":"Class",
  "label":"Capital Allocation",
  "definition":"Capital allocation is the process by which firms, investors and markets distribute scarce financial resources across competing uses to maximise risk-adjusted return or strategic value. It spans corporate decisions about investing, returning capital and funding, as well as investor decisions about deploying funds across assets and opportunities. Effective allocation channels capital towards its most productive uses, making it central to both firm performance and the efficiency of the wider financial system.",
  "domain":"finance",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:investment-management","label":"Investment Management"}],
  "relations":{
    "enables":[{"@id":"urn:ngm:class:capital-efficiency","label":"Capital Efficiency"},{"@id":"urn:ngm:class:price-discovery","label":"Price Discovery"}],
    "requires":[{"@id":"urn:ngm:class:risk-management","label":"Risk Management"},{"@id":"urn:ngm:class:portfolio-management","label":"Portfolio Management"}],
    "uses":[{"@id":"urn:ngm:class:resource-allocation","label":"Resource Allocation"}],
    "supports":[{"@id":"urn:ngm:class:capital-markets","label":"Capital Markets"}],
    "dependsOn":[{"@id":"urn:ngm:class:liquidity","label":"Liquidity"}],
    "partOf":[{"@id":"urn:ngm:class:investment-management","label":"Investment Management"}],
    "implements":[{"@id":"urn:ngm:class:portfolio-management","label":"Portfolio Management"}],
    "bridgesTo":[{"@id":"urn:ngm:class:financial-services","label":"Financial Services"}],
    "relatedTo":[{"@id":"urn:ngm:class:financial-system","label":"Financial System"},{"@id":"urn:ngm:class:risk-management","label":"Risk Management"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Capital Allocation]] distributes scarce financial resources across competing uses to maximise risk-adjusted return or strategic value.
	- It is a core function of [[Investment Management]] and is operationalised through [[Portfolio Management]] and [[Risk Management]].
	- Well-functioning allocation underpins [[Capital Efficiency]] and supports efficient [[Price Discovery]].
- ### Overview
	- At the firm level, capital allocation covers how managers reinvest in operations, pursue acquisitions, repay debt or return cash to shareholders.
	- At the market level, it concerns how savings are channelled through intermediaries and markets towards the most productive investments.
	- Decisions weigh expected return, risk, cost of capital and strategic fit, frequently under uncertainty and resource constraints.
	- The quality of capital allocation is a primary driver of long-run firm value and of aggregate economic productivity.
- ### Key aspects
	- Evaluation of competing investment opportunities on a risk-adjusted basis.
	- Trade-offs between reinvestment, distribution and deleveraging.
	- Cost of capital as the hurdle for acceptable returns.
	- Diversification and risk budgeting across the portfolio.
	- Alignment of allocation with strategy and constraints.
- ### Mechanisms
	- Discounted-cash-flow and net-present-value appraisal of projects.
	- Hurdle rates and capital-rationing rules.
	- Portfolio construction and rebalancing across asset classes.
	- Scenario analysis and stress testing of allocation decisions.
	- Performance attribution feeding back into future allocation.
- ### Applications
	- Corporate capital budgeting and treasury management.
	- Asset-management and fund construction.
	- Bank balance-sheet and regulatory-capital deployment.
	- Venture and private-equity portfolio decisions.
	- Sovereign and endowment long-horizon investment.
- ### Relationships
	- subClassOf:: [[Investment Management]]
	- enables:: [[Capital Efficiency]]
	- enables:: [[Price Discovery]]
	- requires:: [[Risk Management]]
	- requires:: [[Portfolio Management]]
	- uses:: [[Resource Allocation]]
	- supports:: [[Capital Markets]]
	- dependsOn:: [[Liquidity]]
	- partOf:: [[Investment Management]]
	- implements:: [[Portfolio Management]]
	- bridgesTo:: [[Financial Services]]
	- relatedTo:: [[Financial System]]
	- relatedTo:: [[Risk Management]]
- ### Provenance
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
	- updated:: 2026-06-15
