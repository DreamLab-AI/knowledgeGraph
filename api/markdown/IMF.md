public:: true

# IMF
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:imf",
  "@type": "Page",
  "vc:slug": "imf",
  "title": "IMF",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:imf",
  "@type": "Class",
  "label": "IMF",
  "definition": "The International Monetary Fund (IMF) is an intergovernmental organisation of 190 member countries established in 1944 under the Bretton Woods system to promote international monetary cooperation, exchange rate stability, and balanced trade, providing financial assistance and policy advice to members facing balance-of-payments difficulties and conducting surveillance of the global financial system.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:bis", "label": "BIS"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:imf-cbdc-framework", "label": "IMF CBDC Framework"},
      {"@id": "urn:ngm:class:imf-crypto-asset-classification-framework", "label": "IMF Crypto Asset Classification Framework"},
      {"@id": "urn:ngm:class:fsb", "label": "FSB"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:central-bank-digital-currency-cbdc", "label": "Central Bank Digital Currency (CBDC)"},
      {"@id": "urn:ngm:class:cbdc-cross-border-settlement", "label": "CBDC Cross-Border Settlement"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The [[IMF]] (International Monetary Fund) is the 190-member intergovernmental institution at the centre of the global monetary system, providing balance-of-payments financing, economic surveillance, and technical assistance while setting norms for exchange rate policy, capital flows, and, increasingly, digital asset and [[Central Bank Digital Currency (CBDC)]] frameworks.

- ### Relationships
  - The [[IMF]] is contextualised alongside the [[BIS]] as a pillar of the international financial architecture and co-ordinates closely with the [[FSB]] on financial stability recommendations. It has published the [[IMF Crypto Asset Classification Framework]] and the [[IMF CBDC Framework]], positioning it as a standard-setter for sovereign digital money. Its technical assistance supports central bank capacity for [[CBDC Cross-Border Settlement]] infrastructure.

- ### Content
  - The IMF was conceived at the 1944 Bretton Woods Conference in New Hampshire, alongside the World Bank, as the institutional response to the interwar monetary chaos that contributed to the Great Depression. Its founding mandate—to prevent competitive currency devaluations, promote exchange rate stability, and provide short-term balance-of-payments financing—reflected the collapse of the gold standard and the failure of bilateral trade agreements. The Fund commenced operations in 1945 with 29 founding members and has expanded to encompass virtually every sovereign state.

  - The IMF exercises its mandate through three primary instruments. Surveillance involves bilateral Article IV consultations with each member country, assessing economic policies and issuing recommendations, supplemented by the World Economic Outlook and Global Financial Stability Report. Lending provides conditional financial assistance—through Stand-By Arrangements, Extended Fund Facility programmes, and the Poverty Reduction and Growth Trust—to members facing acute balance-of-payments crises, subject to structural adjustment conditionality that has been a persistent source of controversy. Technical assistance transfers institutional capacity in monetary policy, fiscal management, statistics, and financial sector supervision to developing member states.

  - The IMF's relevance to digital assets has grown substantially since the cryptocurrency market expansion of 2017–2018. Its Monetary and Capital Markets Department has published frameworks for classifying crypto assets within the existing monetary taxonomy, assessed CBDC design options for financial stability and monetary sovereignty, and evaluated El Salvador's Bitcoin legal tender experiment—concluding the risks outweighed the financial inclusion benefits and recommending reversal. The IMF's Finternet vision (2024)—a global unified ledger framework for central bank money—represents its most ambitious contribution to the post-cash monetary architecture.

  - By 2024–2025, the IMF is navigating tensions between its traditional role as dollar-system stabiliser and the fragmentation pressures from BRICS alternative payment architectures, yuan internationalisation, and wholesale CBDC networks that might reduce dependence on SWIFT. The Fund's CBDC Virtual Handbook—a technical reference for central banks designing digital currencies—has been adopted by over 40 central banks in their feasibility studies. Simultaneously, the IMF's governance reform agenda—increasing voting weight for emerging economies—remains stalled, creating legitimacy questions about its capacity to set norms for the next generation of monetary infrastructure.

