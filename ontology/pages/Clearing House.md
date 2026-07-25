public:: true

# Clearing House
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:clearing-house", "@type":"Page", "title":"Clearing House", "vc:slug":"clearing-house", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:clearing-house",
  "@type":"Class",
  "label":"Clearing House",
  "definition":"A clearing house is a financial market intermediary that stands between the buyers and sellers of a trade to guarantee its completion, most often acting as a central counterparty that legally interposes itself through novation. By collecting margin, mutualising risk across a default fund, and netting offsetting obligations, it reduces counterparty credit risk and systemic contagion in securities, derivatives, and payment markets. Clearing houses are critical financial market infrastructure, subject to stringent prudential supervision because their failure could propagate across the financial system.",
  "domain":"finance",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:financial-market-infrastructure","label":"Financial Market Infrastructure"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:central-counterparty","label":"Central Counterparty"},
      {"@id":"urn:ngm:class:netting","label":"Netting"},
      {"@id":"urn:ngm:class:margin","label":"Margin"},
      {"@id":"urn:ngm:class:default-management","label":"Default Management"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:financial-market-infrastructure","label":"Financial Market Infrastructure"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:settlement","label":"Settlement"},
      {"@id":"urn:ngm:class:clearing","label":"Clearing"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:collateral","label":"Collateral"},
      {"@id":"urn:ngm:class:risk-management","label":"Risk Management"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:settlement-finality","label":"Settlement Finality"},
      {"@id":"urn:ngm:class:financial-stability","label":"Financial Stability"}
    ],
    "mitigates":[
      {"@id":"urn:ngm:class:counterparty-risk","label":"Counterparty Risk"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:derivatives","label":"Derivatives"}
    ],
    "regulatedBy":[
      {"@id":"urn:ngm:class:regulation","label":"Regulation"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:central-bank","label":"Central Bank"},
      {"@id":"urn:ngm:class:institutional-trust","label":"Institutional Trust"}
    ]
  },
  "sameAs":[
    {"@id":"urn:ngm:class:central-counterparty","label":"Central Counterparty"}
  ],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A [[Clearing House]] is a financial intermediary that stands between buyers and sellers to guarantee a trade's completion.
	- As a [[Central Counterparty]] it interposes itself through novation, collecting [[Margin]] and mutualising risk.
	- It is critical [[Financial Market Infrastructure]] that reduces [[Counterparty Risk]] and supports [[Financial Stability]].
- ### Overview
	- After a trade is agreed, it must be cleared (obligations confirmed, netted, and risk-managed) and then settled (assets and cash exchanged). The clearing house owns the clearing stage and, as a central counterparty, becomes the buyer to every seller and the seller to every buyer.
	- This novation concentrates and then actively manages counterparty credit risk. The clearing house demands initial and variation margin, maintains a mutualised default fund, and operates a default-management process to handle a member's failure without disrupting the wider market.
	- Netting is central to its efficiency: offsetting positions across many trades are compressed into a single net obligation per member, sharply reducing the gross exposures that must be collateralised and settled.
- ### Mechanisms
	- Novation: legal substitution of the clearing house as counterparty to each leg.
	- Margining: initial margin for potential future exposure and variation margin for daily mark-to-market.
	- Default waterfall: the ordered use of margin, default fund, and own capital to absorb losses.
	- Multilateral [[Netting]] to compress gross exposures.
- ### Applications
	- Central clearing of exchange-traded and OTC [[Derivatives]].
	- Equities and bond [[Settlement]] guarantees.
	- Payment and securities settlement systems.
	- Systemic risk reduction mandated by post-crisis regulation.
- ### Relationships
	- hasPart:: [[Central Counterparty]]
	- hasPart:: [[Netting]]
	- hasPart:: [[Margin]]
	- hasPart:: [[Default Management]]
	- partOf:: [[Financial Market Infrastructure]]
	- implements:: [[Settlement]]
	- implements:: [[Clearing]]
	- uses:: [[Collateral]]
	- uses:: [[Risk Management]]
	- enables:: [[Settlement Finality]]
	- enables:: [[Financial Stability]]
	- mitigates:: [[Counterparty Risk]]
	- supports:: [[Derivatives]]
	- regulatedBy:: [[Regulation]]
	- relatedTo:: [[Central Bank]]
	- relatedTo:: [[Institutional Trust]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
