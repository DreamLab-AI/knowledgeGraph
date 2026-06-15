public:: true

# Fiscal Policy
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:fiscal-policy",
  "@type": "Page",
  "title": "Fiscal Policy",
  "vc:slug": "fiscal-policy",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fiscal-policy",
  "@type": "Class",
  "label": "Fiscal Policy",
  "definition": "Fiscal policy is the use of government spending and taxation to influence aggregate demand, employment, inflation and economic growth within an economy. It is enacted by a government's treasury or finance ministry through budgets that adjust expenditure programmes, tax rates and public borrowing, and it is the principal counterpart to the monetary policy operated by a central bank. Expansionary fiscal policy raises spending or cuts taxes to stimulate a weak economy, while contractionary policy does the reverse to restrain overheating or reduce public debt.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:macroeconomics",
      "label": "Macroeconomics"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:macroeconomics",
        "label": "Macroeconomics"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:hm-treasury",
        "label": "HM Treasury"
      },
      {
        "@id": "urn:ngm:class:treasury-management",
        "label": "Treasury Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:economic-growth",
        "label": "Economic Growth"
      },
      {
        "@id": "urn:ngm:class:inflation-control",
        "label": "Inflation Control"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:quantitative-easing",
        "label": "Quantitative Easing"
      },
      {
        "@id": "urn:ngm:class:econometrics",
        "label": "Econometrics"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:economic-governance",
        "label": "Economic Governance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
      },
      {
        "@id": "urn:ngm:class:inflation",
        "label": "Inflation"
      },
      {
        "@id": "urn:ngm:class:economics",
        "label": "Economics"
      },
      {
        "@id": "urn:ngm:class:political-economy",
        "label": "Political Economy"
      },
      {
        "@id": "urn:ngm:class:economic-systems",
        "label": "Economic Systems"
      },
      {
        "@id": "urn:ngm:class:economic-model",
        "label": "Economic Model"
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
  - Fiscal policy is the use of government spending and taxation to influence aggregate demand, employment, inflation and economic growth within an economy. It is enacted by a government's treasury or finance ministry through budgets that adjust expenditure programmes, tax rates and public borrowing, and it is the principal counterpart to the monetary policy operated by a central bank. Expansionary fiscal policy raises spending or cuts taxes to stimulate a weak economy, while contractionary policy does the reverse to restrain overheating or reduce public debt.
  - Related core concepts: [[Macroeconomics]] [[Monetary Policy]] [[Inflation]] [[Central Bank]]
- ### Overview
  - Fiscal policy operates on the demand side of the economy through the government budget, complementing the monetary policy of the central bank.
  - Its principal instruments are public spending, taxation and the resulting level of public borrowing and debt.
  - Discretionary measures are supplemented by automatic stabilisers such as progressive taxes and unemployment benefits that dampen the cycle without new legislation.
- ### Key aspects
  - Expansionary stance: increased spending or tax cuts raise aggregate demand to combat recession and unemployment.
  - Contractionary stance: reduced spending or higher taxes restrain demand to control inflation or reduce deficits.
  - Budget balance: the gap between revenue and expenditure determines borrowing needs and the trajectory of public debt.
  - Coordination: fiscal and monetary policy interact, and credibility of debt sustainability shapes their effectiveness.
- ### Applications
  - Stabilising output and employment over the business cycle.
  - Funding public goods, infrastructure and welfare programmes.
  - Counter-cyclical stimulus during downturns and consolidation during expansions.
  - Influencing income distribution through the structure of taxes and transfers.
- ### Relationships
  - partOf:: [[Macroeconomics]]
  - requires:: [[HM Treasury]]
  - requires:: [[Treasury Management]]
  - enables:: [[Economic Growth]]
  - enables:: [[Inflation Control]]
  - uses:: [[Quantitative Easing]]
  - uses:: [[Econometrics]]
  - supports:: [[Economic Governance]]
  - contrastsWith:: [[Monetary Policy]]
  - relatedTo:: [[Central Bank]]
  - relatedTo:: [[Inflation]]
  - relatedTo:: [[Economics]]
  - relatedTo:: [[Political Economy]]
  - relatedTo:: [[Economic Systems]]
  - relatedTo:: [[Economic Model]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - attributedTo:: did:nostr:ontology-mesh
