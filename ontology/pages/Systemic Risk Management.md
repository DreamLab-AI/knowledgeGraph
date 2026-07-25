public:: true

# Systemic Risk Management

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:systemic-risk-management", "@type":"Page", "title":"Systemic Risk Management", "vc:slug":"systemic-risk-management", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:systemic-risk-management",
  "@type":"Class",
  "label":"Systemic Risk Management",
  "definition":"Systemic risk management is the set of practices, institutions and policy tools aimed at identifying, monitoring and mitigating risks that could destabilise an entire financial system rather than a single firm. It combines macroprudential regulation, stress testing, capital and liquidity buffers, and resolution regimes to limit contagion across interconnected institutions and markets. Coordinated by bodies such as the Financial Stability Board and central banks, it seeks to preserve financial stability and prevent crises from cascading through the economy.",
  "domain":"finance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:financial-stability","label":"Financial Stability"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:stress-testing","label":"Stress Testing"}],
    "uses":[{"@id":"urn:ngm:class:stress-testing","label":"Stress Testing"},{"@id":"urn:ngm:class:macroprudential-policy","label":"Macroprudential Policy"}],
    "enables":[{"@id":"urn:ngm:class:financial-stability","label":"Financial Stability"}],
    "supports":[{"@id":"urn:ngm:class:financial-stability","label":"Financial Stability"},{"@id":"urn:ngm:class:prudential-regulation","label":"Prudential Regulation"}],
    "requires":[{"@id":"urn:ngm:class:risk-management","label":"Risk Management"}],
    "dependsOn":[{"@id":"urn:ngm:class:systemic-risk","label":"Systemic Risk"}],
    "implements":[{"@id":"urn:ngm:class:macroprudential-policy","label":"Macroprudential Policy"}],
    "standardizedBy":[{"@id":"urn:ngm:class:basel-iii","label":"Basel III"},{"@id":"urn:ngm:class:fsb","label":"FSB"}],
    "contrastsWith":[{"@id":"urn:ngm:class:prudential-regulation","label":"Prudential Regulation"}],
    "bridgesTo":[{"@id":"urn:ngm:class:central-bank","label":"Central Bank"}],
    "relatedTo":[{"@id":"urn:ngm:class:systemic-risk","label":"Systemic Risk"},{"@id":"urn:ngm:class:financial-regulation","label":"Financial Regulation"},{"@id":"urn:ngm:class:basel-committee","label":"Basel Committee"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Systemic risk management identifies and mitigates threats to whole-system [[Financial Stability]] rather than to individual firms.
- It addresses [[Systemic Risk]] through [[Macroprudential Policy]], [[Stress Testing]] and capital buffers.
- It is coordinated internationally via the [[FSB]] and grounded in [[Basel III]] standards.
- ### Overview
- Where microprudential supervision keeps individual institutions sound, systemic risk management asks whether the system as a whole can absorb shocks without seizing up. It treats interconnection, common exposures and procyclicality as first-order concerns.
- The 2008 crisis catalysed the modern toolkit: countercyclical capital buffers, designation and tighter oversight of systemically important institutions, system-wide stress tests and orderly resolution regimes that avoid taxpayer bailouts.
- [[Central Bank]] authorities and macroprudential committees monitor leverage, liquidity and contagion channels, adjusting policy to lean against the build-up of vulnerabilities.
- ### Mechanisms
- Macroprudential capital and liquidity buffers, including countercyclical add-ons.
- System-wide and reverse stress testing of banks and markets.
- Designation and enhanced supervision of systemically important institutions.
- Resolution and recovery planning to contain failures without contagion.
- Surveillance of leverage, interconnectedness and shadow-banking exposures.
- ### Applications
- Macroprudential oversight by central banks and financial stability committees.
- International standard-setting and peer review through the FSB and Basel framework.
- Crisis management and resolution of large, interconnected firms.
- ### Relationships
- hasPart:: [[Stress Testing]]
- uses:: [[Stress Testing]]
- uses:: [[Macroprudential Policy]]
- enables:: [[Financial Stability]]
- supports:: [[Financial Stability]]
- supports:: [[Prudential Regulation]]
- requires:: [[Risk Management]]
- dependsOn:: [[Systemic Risk]]
- implements:: [[Macroprudential Policy]]
- standardizedBy:: [[Basel III]]
- standardizedBy:: [[FSB]]
- contrastsWith:: [[Prudential Regulation]]
- bridgesTo:: [[Central Bank]]
- relatedTo:: [[Systemic Risk]]
- relatedTo:: [[Financial Regulation]]
- relatedTo:: [[Basel Committee]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
