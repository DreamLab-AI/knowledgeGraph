public:: true

# Basel Committee
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:basel-committee",
  "@type": "Page",
  "vc:slug": "basel-committee",
  "title": "Basel Committee",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:basel-committee",
  "@type": "Class",
  "label": "Basel Committee",
  "definition": "The Basel Committee on Banking Supervision (BCBS) is an international standard-setting body hosted by the Bank for International Settlements (BIS) in Basel, Switzerland, that develops global regulatory standards for the prudential supervision of banks. Its accords — Basel I (1988), Basel II (2004), and Basel III (2010, finalised 2017) — set internationally agreed minimum capital adequacy, liquidity, and leverage requirements for commercial banks.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"}],
  "relations": {
    "standardizedBy": [
      {"@id": "urn:ngm:class:bis", "label": "BIS"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:financial-stability-board", "label": "Financial Stability Board"},
      {"@id": "urn:ngm:class:systemic-risk", "label": "Systemic Risk"},
      {"@id": "urn:ngm:class:risk-management-framework", "label": "Risk Management Framework"},
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:financial-stability", "label": "Financial Stability"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The Basel Committee on Banking Supervision is the primary global forum for cooperation on banking regulatory matters, comprising supervisors and central bank representatives from 28 jurisdictions. Its mandate is to strengthen the regulation, supervision, and practices of banks worldwide to enhance global [[Financial Stability]]. The Committee issues standards, guidelines, and best practices that member jurisdictions implement into national law — its capital frameworks are implemented through EU law (CRR/CRD), US federal bank regulations, and equivalent national statutes globally.

- ### Relationships
  - The Basel Committee is hosted by and closely associated with the [[BIS]], which provides its secretariat and research support. Its outputs directly inform [[Financial Stability Board]] policy and national [[Financial Regulation]] regimes. The capital requirements it develops form the cornerstone of bank [[Risk Management Framework]]s — including credit risk, market risk, and operational risk modelling. Compliance with Basel standards is operationalised through national [[Compliance Framework]]s such as the EU's Capital Requirements Regulation. The Committee actively monitors and responds to [[Systemic Risk]] threats including digital assets and climate risk.

- ### Content
  - The Basel Committee was established in 1974 following the failure of Bankhaus Herstatt in Germany and Franklin National Bank in the US — events that exposed dangerous gaps in international banking supervision. The original Basel Accord (Basel I, 1988) introduced the first international capital standard: an 8% minimum ratio of capital to risk-weighted assets. Basel II (2004) dramatically refined risk weighting by allowing internal model approaches and adding operational risk capital charges. Basel III, developed in response to the 2008 global financial crisis, introduced the leverage ratio, liquidity coverage ratio (LCR), net stable funding ratio (NSFR), and countercyclical capital buffers.

  - Technically, Basel III capital requirements rest on three pillars: minimum regulatory capital requirements (Pillar 1), supervisory review process (Pillar 2), and market discipline through disclosure (Pillar 3). Risk-weighted assets are computed across credit, market, and operational risk categories using standardised approaches or, for large banks, internal model-based approaches that must be validated and approved by supervisors. The 2017 Basel III finalisation (sometimes called "Basel IV") constrained the use of internal models by introducing output floors that cap the benefit of modelling relative to standardised approaches.

  - The Committee's influence extends well beyond its 28 member jurisdictions through mutual evaluation processes, peer review, and IMF/World Bank Financial Sector Assessment Programmes that assess compliance with Basel standards. Non-member jurisdictions voluntarily adopt Basel standards to maintain correspondent banking relationships and access to international capital markets.

  - By 2024–2025, the Basel Committee's primary attention has turned to three frontier areas: cryptoasset exposures (SCO60, requiring the highest prudential treatment for unbacked cryptoassets held by banks), operational resilience (building on sound practices guidance and DORA alignment), and the use of AI and machine learning in bank risk modelling (consultation papers examining model risk and governance). The transition to the Basel III output floors — being phased in from 2025 to 2030 in most jurisdictions — represents the most significant capital framework change in a decade.

