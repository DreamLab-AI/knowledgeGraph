public:: true

# Financial Action Task Force

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:financial-action-task-force", "@type":"Page", "title":"Financial Action Task Force", "vc:slug":"financial-action-task-force", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:financial-action-task-force",
  "@type":"Class",
  "label":"Financial Action Task Force",
  "definition":"The Financial Action Task Force (FATF) is an intergovernmental body that sets international standards to combat money laundering, terrorist financing and proliferation financing. It issues the FATF Recommendations, conducts mutual evaluations of member jurisdictions, and maintains lists of high-risk and non-cooperative jurisdictions. Its guidance — including the Travel Rule for virtual assets — strongly shapes national anti-money-laundering and know-your-customer regimes worldwide.",
  "domain":"finance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:standards-body","label":"Standards Body"}],
  "relations":{
    "standardizedBy":[{"@id":"urn:ngm:class:regulatory-framework","label":"Regulatory Framework"}],
    "implements":[{"@id":"urn:ngm:class:anti-money-laundering","label":"Anti-Money Laundering"},{"@id":"urn:ngm:class:travel-rule","label":"Travel Rule"}],
    "enables":[{"@id":"urn:ngm:class:compliance","label":"Compliance"},{"@id":"urn:ngm:class:know-your-customer","label":"Know Your Customer"}],
    "requires":[{"@id":"urn:ngm:class:know-your-customer","label":"Know Your Customer"}],
    "dependsOn":[{"@id":"urn:ngm:class:regulatory-framework","label":"Regulatory Framework"}],
    "supports":[{"@id":"urn:ngm:class:financial-regulation","label":"Financial Regulation"},{"@id":"urn:ngm:class:anti-money-laundering","label":"Anti-Money Laundering"}],
    "relatedTo":[{"@id":"urn:ngm:class:anti-money-laundering","label":"Anti-Money Laundering"},{"@id":"urn:ngm:class:compliance","label":"Compliance"},{"@id":"urn:ngm:class:travel-rule","label":"Travel Rule"}],
    "bridgesTo":[{"@id":"urn:ngm:class:governance","label":"Governance"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - The [[Financial Action Task Force]] is the intergovernmental [[Standards Body]] that sets global standards against money laundering and terrorist financing, shaping [[Anti-Money Laundering]], [[Know Your Customer]] and [[Travel Rule]] requirements.
  - Its recommendations drive national [[Regulatory Framework]] and [[Compliance]] regimes.
- ### Overview
  - FATF issues the FATF Recommendations, the principal international standard for anti-money-laundering and counter-terrorist-financing controls.
  - It conducts mutual evaluations assessing how effectively member jurisdictions implement those standards.
  - It maintains the grey and black lists identifying jurisdictions with strategic deficiencies, exerting strong reputational and market pressure.
  - Its guidance on virtual assets, including the Travel Rule, has reshaped compliance obligations for crypto-asset service providers.
- ### Key aspects
  - Standard-setting rather than direct enforcement.
  - Peer-based mutual evaluation methodology.
  - Risk-based approach to supervision.
  - Extension of traditional controls to virtual assets.
- ### Applications
  - National AML/CFT legislation and supervision.
  - Bank and virtual-asset-service-provider compliance programmes.
  - Sanctions and correspondent-banking risk assessment.
  - Cross-border information sharing and de-risking decisions.
- ### Relationships
  - standardizedBy:: [[Regulatory Framework]]
  - implements:: [[Anti-Money Laundering]]
  - implements:: [[Travel Rule]]
  - enables:: [[Compliance]]
  - enables:: [[Know Your Customer]]
  - requires:: [[Know Your Customer]]
  - dependsOn:: [[Regulatory Framework]]
  - supports:: [[Financial Regulation]]
  - supports:: [[Anti-Money Laundering]]
  - relatedTo:: [[Anti-Money Laundering]]
  - relatedTo:: [[Compliance]]
  - relatedTo:: [[Travel Rule]]
  - bridgesTo:: [[Governance]]
- ### Provenance
  - updated:: 2026-06-15
