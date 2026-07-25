public:: true

# Prudential Regulation Authority

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:prudential-regulation-authority", "@type":"Page", "title":"Prudential Regulation Authority", "vc:slug":"prudential-regulation-authority", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:prudential-regulation-authority",
  "@type":"Class",
  "label":"Prudential Regulation Authority",
  "definition":"The Prudential Regulation Authority (PRA) is the United Kingdom regulator responsible for the prudential supervision of banks, building societies, credit unions, insurers and major investment firms. Operating as part of the Bank of England, it sets capital, liquidity and governance standards to promote the safety and soundness of individual firms and to protect insurance policyholders. The PRA shares the UK's twin-peaks regulatory model with the conduct-focused Financial Conduct Authority.",
  "domain":"finance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:financial-regulation","label":"Financial Regulation"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:bank-of-england","label":"Bank of England"}],
    "hasPart":[{"@id":"urn:ngm:class:prudential-regulation","label":"Prudential Regulation"},{"@id":"urn:ngm:class:regulatory-compliance","label":"Regulatory Compliance"}],
    "implements":[{"@id":"urn:ngm:class:basel-iii","label":"Basel III"}],
    "enables":[{"@id":"urn:ngm:class:financial-stability","label":"Financial Stability"}],
    "requires":[{"@id":"urn:ngm:class:risk-management","label":"Risk Management"}],
    "dependsOn":[{"@id":"urn:ngm:class:central-bank","label":"Central Bank"}],
    "supports":[{"@id":"urn:ngm:class:systemic-risk","label":"Systemic Risk"}],
    "contrastsWith":[{"@id":"urn:ngm:class:financial-conduct-authority","label":"Financial Conduct Authority"}],
    "relatedTo":[{"@id":"urn:ngm:class:financial-regulation","label":"Financial Regulation"},{"@id":"urn:ngm:class:finance","label":"Finance"}]
  },
  "sameAs":[{"@id":"urn:ngm:class:prudential-regulation","label":"Prudential Regulation"}],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - The **Prudential Regulation Authority** (PRA) supervises the financial soundness of UK banks, insurers and large investment firms as part of the [[Bank of England]].
  - It is a form of [[Financial Regulation]] focused on firm resilience rather than market conduct.
  - The PRA sets capital and liquidity rules, implementing international standards such as [[Basel III]], to limit the chance and impact of firm failure.
  - It works alongside the [[Financial Conduct Authority]] under the UK's twin-peaks model.
- ### Overview
  - Created by the Financial Services Act 2012 following the global financial crisis, the PRA replaced part of the former unified regulator with a dedicated prudential body.
  - Its statutory objectives are to promote the safety and soundness of regulated firms and, for insurers, to secure an appropriate degree of policyholder protection.
  - The PRA applies judgement-based, forward-looking supervision rather than relying solely on rule compliance, intervening before problems crystallise.
  - It contributes to [[Financial Stability]] by ensuring firms hold sufficient buffers to absorb losses without taxpayer support.
- ### Key aspects
  - **Microprudential supervision** — assessing the resilience of individual firms through capital, liquidity and stress testing.
  - **Capital and liquidity standards** — translating [[Basel III]] into binding requirements that scale with firm risk.
  - **Governance and resolution** — requiring credible recovery and resolution plans so failing firms can be wound down safely.
  - **Twin-peaks coordination** — dividing responsibilities with the [[Financial Conduct Authority]], which handles conduct and consumer protection.
  - **Risk-based judgement** — focusing supervisory intensity where the potential impact on the financial system is greatest.
- ### Mechanisms
  - The Prudential Regulation Committee sets policy and key supervisory decisions.
  - Regular stress tests probe whether firms can withstand severe but plausible shocks.
  - Supervisory reviews and capital add-ons tailor requirements to each firm's risk profile.
  - Coordination with the Financial Policy Committee links firm-level oversight to system-wide [[Systemic Risk]].
- ### Applications
  - Authorising and supervising deposit-takers, insurers and major investment firms.
  - Enforcing [[Regulatory Compliance]] with prudential rules and intervening when firms breach thresholds.
  - Underpinning [[Risk Management]] expectations across the regulated sector.
  - Safeguarding depositors, policyholders and the wider [[Finance]] system.
- ### Relationships
  - partOf:: [[Bank of England]]
  - hasPart:: [[Prudential Regulation]]
  - hasPart:: [[Regulatory Compliance]]
  - implements:: [[Basel III]]
  - enables:: [[Financial Stability]]
  - requires:: [[Risk Management]]
  - dependsOn:: [[Central Bank]]
  - supports:: [[Systemic Risk]]
  - contrastsWith:: [[Financial Conduct Authority]]
  - relatedTo:: [[Financial Regulation]]
  - relatedTo:: [[Finance]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
