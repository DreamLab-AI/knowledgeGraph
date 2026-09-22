public:: true

# Blended Finance

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:blended-finance", "@type":"Page", "title":"Blended Finance", "vc:slug":"blended-finance", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:blended-finance",
  "@type":"Class",
  "label":"Blended Finance",
  "definition":"Blended finance is the strategic use of concessional public or philanthropic capital to mobilise additional private investment toward development and sustainability goals. By absorbing early-stage or disproportionate risk, the concessional tranche improves the risk-adjusted return of a project enough to attract commercial investors who would not otherwise participate. It is widely applied to fund infrastructure, climate, and social projects in markets perceived as too risky for purely commercial capital.",
  "domain":"finance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:finance","label":"Finance"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:risk-management","label":"Risk Management"},{"@id":"urn:ngm:class:capital-allocation","label":"Capital Allocation"}],
    "enables":[{"@id":"urn:ngm:class:impact-investing","label":"Impact Investing"},{"@id":"urn:ngm:class:sustainable-development","label":"Sustainable Development"},{"@id":"urn:ngm:class:social-impact","label":"Social Impact"}],
    "supports":[{"@id":"urn:ngm:class:green-finance","label":"Green Finance"},{"@id":"urn:ngm:class:sustainable-development","label":"Sustainable Development"}],
    "uses":[{"@id":"urn:ngm:class:risk-management","label":"Risk Management"},{"@id":"urn:ngm:class:capital-allocation","label":"Capital Allocation"}],
    "requires":[{"@id":"urn:ngm:class:risk-management","label":"Risk Management"}],
    "relatedTo":[{"@id":"urn:ngm:class:impact-investing","label":"Impact Investing"},{"@id":"urn:ngm:class:esg","label":"ESG"},{"@id":"urn:ngm:class:interest-rate","label":"Interest Rate"}],
    "implements":[{"@id":"urn:ngm:class:capital-allocation","label":"Capital Allocation"}],
    "contrastsWith":[{"@id":"urn:ngm:class:impact-investing","label":"Impact Investing"}],
    "bridgesTo":[{"@id":"urn:ngm:class:green-finance","label":"Green Finance"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Blended Finance]] uses concessional public or philanthropic capital to mobilise additional private investment toward development goals.
	- A concessional tranche absorbs early or disproportionate risk, improving the risk-adjusted return for commercial investors.
	- It is a structuring approach within [[Finance]] closely tied to [[Impact Investing]] and [[Sustainable Development]].
- ### Overview
	- Many high-impact projects in emerging markets are economically viable yet too risky to attract commercial capital on their own.
	- Blended finance addresses this gap by layering different forms of capital with different risk and return expectations in a single structure.
	- Public, development, or philanthropic funds take subordinate or first-loss positions, de-risking the investment enough for private capital to enter.
	- The goal is leverage: each unit of concessional capital should mobilise several units of private investment toward measurable outcomes.
- ### Key aspects
	- Concessional capital: below-market funding that improves project economics for others.
	- Catalytic leverage: mobilising private investment that would not otherwise occur.
	- Risk layering: tranches with differentiated risk-return profiles within one structure.
	- Outcome orientation: alignment with development, climate, and social objectives.
	- Additionality: ensuring concessional support attracts rather than displaces private capital.
- ### Mechanisms
	- First-loss guarantees or subordinated tranches shield senior commercial investors from initial losses.
	- Technical assistance and grants reduce project preparation and operational risk.
	- Blended structures align returns across investors with differing mandates and risk appetites.
- ### Applications
	- Financing infrastructure, climate, and social projects through [[Impact Investing]].
	- Channelling capital toward [[Sustainable Development]] objectives.
	- Supporting [[Green Finance]] and climate-aligned investment.
	- Structuring funds that balance returns with [[Social Impact]] and [[ESG]] goals.
- ### Relationships
	- subClassOf:: [[Finance]]
	- hasPart:: [[Risk Management]]
	- hasPart:: [[Capital Allocation]]
	- enables:: [[Impact Investing]]
	- enables:: [[Sustainable Development]]
	- enables:: [[Social Impact]]
	- supports:: [[Green Finance]]
	- supports:: [[Sustainable Development]]
	- uses:: [[Risk Management]]
	- uses:: [[Capital Allocation]]
	- requires:: [[Risk Management]]
	- relatedTo:: [[Impact Investing]]
	- relatedTo:: [[ESG]]
	- relatedTo:: [[Interest Rate]]
	- implements:: [[Capital Allocation]]
	- contrastsWith:: [[Impact Investing]]
	- bridgesTo:: [[Green Finance]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
