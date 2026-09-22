public:: true

# Gig Economy

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:gig-economy", "@type":"Page", "title":"Gig Economy", "vc:slug":"gig-economy", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:gig-economy",
  "@type":"Class",
  "label":"Gig Economy",
  "definition":"The gig economy is a labour market structured around short-term, task-based, and on-demand work mediated largely by digital platforms, rather than long-term salaried employment. Workers are typically engaged as independent contractors, gaining flexibility and autonomy while bearing income volatility and reduced access to traditional employment protections. It is enabled by platform technology that matches supply and demand at scale and managed through algorithmic coordination, raising ongoing questions about worker classification and social protection.",
  "domain":"finance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:platform-economy","label":"Platform Economy"}],
  "relations":{
    "enables":[{"@id":"urn:ngm:class:automation","label":"Automation"}],
    "uses":[{"@id":"urn:ngm:class:payment-system","label":"Payment System"}],
    "requires":[{"@id":"urn:ngm:class:regulatory-compliance","label":"Regulatory Compliance"}],
    "dependsOn":[{"@id":"urn:ngm:class:platform-economy","label":"Platform Economy"}],
    "contrastsWith":[{"@id":"urn:ngm:class:universal-basic-income","label":"Universal Basic Income"}],
    "supports":[{"@id":"urn:ngm:class:payment-service-provider","label":"Payment Service Provider"}],
    "bridgesTo":[{"@id":"urn:ngm:class:governance","label":"Governance"}],
    "relatedTo":[{"@id":"urn:ngm:class:finance","label":"Finance"},{"@id":"urn:ngm:class:decentralized-identity","label":"Decentralized Identity"},{"@id":"urn:ngm:class:incentive-alignment","label":"Incentive Alignment"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- The gig economy is a labour market built around short-term, task-based, on-demand work mediated by digital platforms rather than long-term salaried employment.
- A specialisation of the [[Platform Economy]], it engages workers as independent contractors with flexibility but income volatility.
- It is enabled by platform technology that matches supply and demand at scale and coordinated through algorithmic management.
- ### Overview
- Digital platforms unbundle work into discrete tasks and route them to a flexible pool of workers, compressing the distance between demand and supply.
- This grants autonomy and low barriers to entry but shifts risk onto workers who lack many traditional employment protections.
- Worker classification, the contractor-versus-employee question, sits at the heart of regulatory and policy debate.
- The model connects to broader questions of [[Automation]], social protection, and proposals such as [[Universal Basic Income]].
- ### Key aspects
- Platform mediation: marketplaces match clients and workers and handle payments.
- Algorithmic management: ratings, dispatch, and pricing are governed by software.
- Flexibility and volatility: workers choose hours but face unpredictable income.
- Classification: legal status as contractor or employee determines rights and obligations.
- Social protection gaps: limited access to benefits, pensions, and collective bargaining.
- ### Applications
- Ride-hailing, delivery, and logistics platforms.
- Freelance marketplaces for digital and creative services.
- On-demand domestic, care, and skilled-trade services.
- Microtask and crowdwork platforms supplying data and content labour.
- ### Relationships
- enables:: [[Automation]]
- uses:: [[Payment System]]
- requires:: [[Regulatory Compliance]]
- dependsOn:: [[Platform Economy]]
- contrastsWith:: [[Universal Basic Income]]
- supports:: [[Payment Service Provider]]
- bridgesTo:: [[Governance]]
- relatedTo:: [[Finance]]
- relatedTo:: [[Decentralized Identity]]
- relatedTo:: [[Incentive Alignment]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
