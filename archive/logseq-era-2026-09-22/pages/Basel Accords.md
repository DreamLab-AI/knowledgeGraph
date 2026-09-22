public:: true

# Basel Accords

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:basel-accords",
  "@type": "Page",
  "title": "Basel Accords",
  "vc:slug": "basel-accords",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:basel-accords",
  "@type": "Class",
  "label": "Basel Accords",
  "definition": "The Basel Accords are a series of international banking-supervision agreements developed by the Basel Committee on Banking Supervision under the Bank for International Settlements, establishing minimum standards for bank capital, leverage, and liquidity. Successive accords progressively strengthened requirements for risk-weighted capital, introduced leverage and liquidity ratios, and refined the treatment of credit, market, and operational risk. They are non-binding recommendations that member jurisdictions transpose into national law to enhance the resilience and stability of the global financial system.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-regulation",
      "label": "Financial Regulation"
    }
  ],
  "relations": {
    "subClassOf": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:basel-iii",
        "label": "Basel III"
      },
      {
        "@id": "urn:ngm:class:capital-adequacy",
        "label": "Capital Adequacy"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:capital-adequacy",
        "label": "Capital Adequacy"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:bank-for-international-settlements",
        "label": "Bank for International Settlements"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:stress-testing",
        "label": "Stress Testing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:systemic-risk",
        "label": "Systemic Risk"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:basel-iii",
        "label": "Basel III"
      },
      {
        "@id": "urn:ngm:class:capital-adequacy",
        "label": "Capital Adequacy"
      },
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- The [[Basel Accords]] are international [[Financial Regulation]] standards for bank capital, leverage, and liquidity.
	- They are developed under the [[Bank for International Settlements]] and transposed into national law.
	- Their goal is to strengthen [[Capital Adequacy]] and overall banking resilience.
- ### Overview
	- Successive accords, culminating in [[Basel III]], progressively raised risk-weighted capital requirements and added leverage and liquidity ratios.
	- They refine the treatment of credit, market, and operational risk within [[Risk Management]] frameworks.
	- As non-binding recommendations they rely on jurisdictions to enact equivalent rules.
- ### Key aspects
	- Minimum risk-weighted capital ratios underpinning [[Capital Adequacy]].
	- Leverage and liquidity coverage requirements to limit fragility.
	- Supervisory review and disclosure pillars to enhance market discipline.
	- [[Stress Testing]] expectations to probe resilience under adverse scenarios.
- ### Applications
	- National prudential rulebooks implemented by bank supervisors.
	- Internal [[Risk Management]] and capital-planning processes at banks.
	- Mitigation of [[Systemic Risk]] across the global financial system.
	- Liquidity management constrained by [[Liquidity]] coverage standards.
- ### Relationships
	- partOf:: [[Financial Regulation]]
	- hasPart:: [[Basel III]]
	- hasPart:: [[Capital Adequacy]]
	- implements:: [[Capital Adequacy]]
	- standardizedBy:: [[Bank for International Settlements]]
	- dependsOn:: [[Risk Management]]
	- requires:: [[Stress Testing]]
	- enables:: [[Systemic Risk]]
	- supports:: [[Liquidity]]
	- relatedTo:: [[Basel III]]
- ### Provenance
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
	- updated:: 2026-06-15
