public:: true

# Bank for International Settlements
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:bank-for-international-settlements", "@type":"Page", "title":"Bank for International Settlements", "vc:slug":"bank-for-international-settlements", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bank-for-international-settlements",
  "@type": "Class",
  "label": "Bank for International Settlements",
  "definition": "The Bank for International Settlements (BIS) is an international financial institution, established in 1930 and headquartered in Basel, that serves as a bank for central banks and fosters international monetary and financial cooperation. It provides banking services to its central bank members, hosts standard-setting bodies such as the Basel Committee on Banking Supervision, and conducts economic research on global financial stability. Through its Innovation Hub it also coordinates experimentation with central bank digital currencies and the modernisation of cross-border payments.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [
    { "@id": "urn:ngm:class:central-bank", "label": "Central Bank" }
  ],
  "relations": {
    "hasPart": [
      { "@id": "urn:ngm:class:basel-committee-on-banking-supervision", "label": "Basel Committee on Banking Supervision" },
      { "@id": "urn:ngm:class:bis-innovation-hub", "label": "BIS Innovation Hub" }
    ],
    "partOf": [
      { "@id": "urn:ngm:class:international-financial-system", "label": "International Financial System" }
    ],
    "standardizedBy": [
      { "@id": "urn:ngm:class:basel-accords", "label": "Basel Accords" }
    ],
    "supports": [
      { "@id": "urn:ngm:class:financial-stability", "label": "Financial Stability" },
      { "@id": "urn:ngm:class:monetary-policy-coordination", "label": "Monetary Policy Coordination" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:cross-border-payments", "label": "Cross-Border Payments" },
      { "@id": "urn:ngm:class:central-bank-cooperation", "label": "Central Bank Cooperation" }
    ],
    "implements": [
      { "@id": "urn:ngm:class:banking-regulation", "label": "Banking Regulation" }
    ],
    "uses": [
      { "@id": "urn:ngm:class:economic-research", "label": "Economic Research" }
    ],
    "requires": [
      { "@id": "urn:ngm:class:international-cooperation", "label": "International Cooperation" }
    ],
    "bridgesTo": [
      { "@id": "urn:ngm:class:central-bank-digital-currency", "label": "Central Bank Digital Currency" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:international-monetary-fund", "label": "International Monetary Fund" },
      { "@id": "urn:ngm:class:financial-stability-board", "label": "Financial Stability Board" },
      { "@id": "urn:ngm:class:swift", "label": "SWIFT" }
    ]
  },
  "sameAs": [
    { "@id": "urn:ngm:class:bis", "label": "BIS" }
  ],
  "quality": 0.62,
  "provenance": { "attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-06-15T00:00:00Z", "inferenceRule": "GapMaterialisation" }
}
```

- ### Definition
  - The [[Bank for International Settlements]] is an international institution that acts as a [[Central Bank]] for central banks, hosting the [[Basel Committee on Banking Supervision]] and supporting [[Financial Stability]]. It coordinates [[Central Bank Cooperation]] and experiments with the [[Central Bank Digital Currency]].

- ### Overview
  - Founded in 1930, the BIS is the world's oldest international financial organisation. It provides banking, custody, and settlement services exclusively to central banks and international organisations, manages a portion of global foreign-exchange reserves, and serves as a forum where central bank governors meet to coordinate policy.
  - Beyond banking, the BIS is the institutional home of several global standard-setting committees. The Basel Committee on Banking Supervision develops the Basel Accords on bank capital and liquidity, while the Committee on Payments and Market Infrastructures shapes payment-system standards. Its Innovation Hub runs technical projects on tokenised settlement, wholesale and retail CBDCs, and faster cross-border payments.

- ### Key aspects
  - Membership composed of central banks and monetary authorities.
  - Host of the Basel Committee and other global standard setters.
  - Research and statistics on banking, credit, and financial stability.
  - Innovation Hub coordinating CBDC and payments experimentation.

- ### Applications
  - Setting international bank capital and liquidity standards via the Basel framework.
  - Facilitating cooperation and information exchange among central banks.
  - Piloting next-generation cross-border and digital-currency settlement systems.

- ### Relationships
  - subClassOf:: [[Central Bank]]
  - hasPart:: [[Basel Committee on Banking Supervision]]
  - hasPart:: [[BIS Innovation Hub]]
  - partOf:: [[International Financial System]]
  - standardizedBy:: [[Basel Accords]]
  - supports:: [[Financial Stability]]
  - enables:: [[Cross-Border Payments]]
  - enables:: [[Central Bank Cooperation]]
  - implements:: [[Banking Regulation]]
  - bridgesTo:: [[Central Bank Digital Currency]]
  - relatedTo:: [[International Monetary Fund]]
  - relatedTo:: [[SWIFT]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
