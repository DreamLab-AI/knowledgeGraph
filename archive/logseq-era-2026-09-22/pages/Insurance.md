public:: true

# Insurance

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:insurance", "@type":"Page", "title":"Insurance", "vc:slug":"insurance", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:insurance",
  "@type":"Class",
  "label":"Insurance",
  "definition":"Insurance is a financial arrangement in which a party pays a premium to transfer the risk of an uncertain future loss to an insurer, which pools premiums from many policyholders and pays valid claims out of that pool. It relies on the law of large numbers and actuarial estimation to price risk so that aggregate premiums cover expected losses, expenses and a margin. Insurance underpins economic resilience by smoothing the financial impact of accidents, illness, property damage and other contingencies.",
  "domain":"governance",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:risk-management","label":"Risk Management"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:finance","label":"Finance"}],
    "hasPart":[{"@id":"urn:ngm:class:parametric-insurance","label":"Parametric Insurance"}],
    "requires":[{"@id":"urn:ngm:class:risk-management","label":"Risk Management"}],
    "enables":[{"@id":"urn:ngm:class:risk-management","label":"Risk Management"}],
    "uses":[{"@id":"urn:ngm:class:predictive-analytics","label":"Predictive Analytics"}],
    "dependsOn":[{"@id":"urn:ngm:class:governance","label":"Governance"}],
    "supports":[{"@id":"urn:ngm:class:finance","label":"Finance"}],
    "implements":[{"@id":"urn:ngm:class:risk-management","label":"Risk Management"}],
    "relatedTo":[{"@id":"urn:ngm:class:parametric-insurance","label":"Parametric Insurance"},{"@id":"urn:ngm:class:finance","label":"Finance"}],
    "bridgesTo":[{"@id":"urn:ngm:class:governance","label":"Governance"}],
    "contrastsWith":[{"@id":"urn:ngm:class:parametric-insurance","label":"Parametric Insurance"}],
    "standardizedBy":[{"@id":"urn:ngm:class:governance","label":"Governance"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - Insurance is a form of [[Risk Management]] that transfers the financial consequences of uncertain losses from an individual to a risk pool.
  - Policyholders pay premiums, and the insurer pays valid claims, pricing the pool so that income covers expected outgo.
  - It is a core institution of [[Finance]] and is closely regulated under [[Governance]] frameworks.
- ### Overview
  - The central idea of insurance is risk pooling: many parties each contribute a small, predictable premium so that the few who suffer a loss can be compensated from the shared pool.
  - Actuaries estimate the probability and severity of losses, allowing premiums to be set so that, across a large book of policies, income reliably exceeds claims and costs.
  - Insurance spans personal lines such as health, life, motor and home cover, and commercial lines including liability, property and specialty risks.
- ### Key aspects
  - Premium: the price paid to transfer risk, derived from expected loss plus loadings.
  - Underwriting: assessment and selection of risks and setting of terms.
  - Claims: the process by which losses are reported, verified and paid.
  - Reserving and capital: provisions held to meet future and outstanding claims.
  - Reinsurance: insurers transferring portions of their own risk to other insurers.
- ### Mechanisms
  - The law of large numbers makes aggregate losses across a large pool statistically predictable.
  - [[Predictive Analytics]] and actuarial models translate historical data into risk-adjusted prices.
  - Indemnity contracts compensate proven loss, while [[Parametric Insurance]] pays a fixed amount on a defined trigger without proving loss.
  - Regulatory [[Governance]] enforces solvency, conduct and consumer-protection standards.
- ### Applications
  - Protection of households against health, mortality, property and liability risks.
  - Corporate risk transfer for catastrophe, cyber, marine and professional exposures.
  - Index-based and [[Parametric Insurance]] for weather and disaster cover.
  - Stabilisation of credit and investment within the wider [[Finance]] system.
- ### Relationships
  - partOf:: [[Finance]]
  - hasPart:: [[Parametric Insurance]]
  - requires:: [[Risk Management]]
  - enables:: [[Risk Management]]
  - uses:: [[Predictive Analytics]]
  - dependsOn:: [[Governance]]
  - supports:: [[Finance]]
  - implements:: [[Risk Management]]
  - relatedTo:: [[Parametric Insurance]]
  - relatedTo:: [[Finance]]
  - bridgesTo:: [[Governance]]
  - contrastsWith:: [[Parametric Insurance]]
  - standardizedBy:: [[Governance]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
