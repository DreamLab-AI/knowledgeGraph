public:: true

# fatf
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:624ecacfed98c6096ec9c4b77a7c8db749dcb7a0e413577f69f437dd1a3b30bf",
  "@type": "Page",
  "vc:slug": "fatf",
  "title": "fatf",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fatf",
  "@type": "Class",
  "label": "FATF",
  "definition": "The Financial Action Task Force (FATF) is an intergovernmental policy-making body established in 1989 by the G7 that sets internationally recognised standards for combating money laundering, terrorist financing, and proliferation financing. Its Forty Recommendations and Nine Special Recommendations constitute the normative AML/CFT/CPF framework that member jurisdictions implement through national legislation and regulatory action. FATF conducts mutual evaluations of members' technical compliance and effectiveness, publishes grey and black lists of high-risk jurisdictions, and issues binding guidance on emerging risks including virtual assets, decentralised finance, and central bank digital currencies.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:regulatory-framework",
      "label": "Regulatory Framework"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:fatf-travel-rule", "label": "FATF Travel Rule"},
      {"@id": "urn:ngm:class:forty-recommendations", "label": "Forty Recommendations"},
      {"@id": "urn:ngm:class:mutual-evaluation", "label": "Mutual Evaluation"},
      {"@id": "urn:ngm:class:grey-list", "label": "Grey List"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:anti-money-laundering", "label": "Anti-Money Laundering"},
      {"@id": "urn:ngm:class:counter-terrorist-financing", "label": "Counter-Terrorist Financing"},
      {"@id": "urn:ngm:class:financial-stability", "label": "Financial Stability"},
      {"@id": "urn:ngm:class:proliferation-financing-controls", "label": "Proliferation Financing Controls"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:customer-due-diligence", "label": "Customer Due Diligence"},
      {"@id": "urn:ngm:class:suspicious-activity-report", "label": "Suspicious Activity Report"},
      {"@id": "urn:ngm:class:know-your-customer", "label": "Know Your Customer"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:financial-intelligence-unit", "label": "Financial Intelligence Unit"},
      {"@id": "urn:ngm:class:risk-based-approach", "label": "Risk-Based Approach"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:correspondent-banking", "label": "Correspondent Banking"},
      {"@id": "urn:ngm:class:international-sanctions", "label": "International Sanctions"},
      {"@id": "urn:ngm:class:financial-crime-prevention", "label": "Financial Crime Prevention"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"},
      {"@id": "urn:ngm:class:virtual-asset", "label": "Virtual Asset"},
      {"@id": "urn:ngm:class:virtual-asset-service-provider", "label": "Virtual Asset Service Provider"},
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"},
      {"@id": "urn:ngm:class:central-bank-digital-currency", "label": "Central Bank Digital Currency"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:standards-organization", "label": "Standards Organization"},
      {"@id": "urn:ngm:class:g7", "label": "G7"},
      {"@id": "urn:ngm:class:financial-stability-board", "label": "Financial Stability Board"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:self-regulatory-organisation", "label": "Self-Regulatory Organisation"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:blockchain-analytics", "label": "Blockchain Analytics"},
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:financial-action-task-force", "label": "Financial Action Task Force"},
    {"@id": "urn:ngm:class:gafi", "label": "GAFI"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - The **Financial Action Task Force (FATF)** is an intergovernmental policy-making body established in 1989 by the G7 Summit to combat [[Money Laundering]], [[Terrorist Financing]], and [[Proliferation Financing]]. Its Forty Recommendations define the international AML/CFT/CPF framework that member jurisdictions implement through national legislation. FATF's mutual evaluation process assesses both technical compliance and the effectiveness of each country's system, while its grey and black lists carry significant economic consequences that incentivise legislative reform. In the digital asset space, FATF has extended its requirements to [[Virtual Asset Service Provider]]s and has issued guidance on [[Decentralised Finance]] and [[Central Bank Digital Currency]].

- ### Overview
  - FATF is headquartered in Paris and operates as the global standard-setter for financial crime prevention. Founded in 1989 at the G7 Paris Summit, its original mandate focused on [[Money Laundering]]; this was subsequently expanded after 2001 to cover [[Counter-Terrorist Financing]], and later [[Proliferation Financing]] in line with UN Security Council resolutions.
  - Membership encompasses 37 member jurisdictions, two regional organisations (the European Commission and the Gulf Co-operation Council), and a network of FATF-Style Regional Bodies (FSRBs) that extend the standards globally to over 200 jurisdictions.
  - The body is not a treaty organisation; its standards are soft law — normatively powerful but not directly legally binding. Despite this, compliance is effectively compulsory: correspondent banks, international financial institutions, and foreign investors treat FATF ratings as a primary risk indicator. A poor mutual evaluation outcome or grey-list placement can lead to de-risking, loss of correspondent banking relationships, and restricted access to international capital markets.
  - FATF operates on four-year plenary cycles, with Ministerial-level meetings setting strategic direction and rotating presidency held by member countries.

- ### Key Components
  - #### Forty Recommendations
    - The FATF Forty Recommendations (last revised 2012, updated incrementally thereafter) form the core normative framework. They cover:
      - **Recommendations 1–2**: [[Risk-Based Approach]] and national co-operation
      - **Recommendations 3–11**: [[Money Laundering]] criminalisation, confiscation, and [[Counter-Terrorist Financing]]
      - **Recommendations 12–23**: [[Customer Due Diligence]], [[Correspondent Banking]], and [[Know Your Customer]]
      - **Recommendation 16**: The [[FATF Travel Rule]] — requires originator and beneficiary information to accompany wire transfers and, since 2019, [[Virtual Asset]] transfers
      - **Recommendations 24–25**: Beneficial ownership transparency for companies and trusts, directly relevant to [[Digital Identity]]
      - **Recommendations 26–35**: Supervisory frameworks, [[Financial Intelligence Unit]]s, and [[Suspicious Activity Report]]ing
      - **Recommendations 36–40**: International co-operation and information sharing
  - #### Mutual Evaluation Process
    - [[Mutual Evaluation]] is FATF's peer-review mechanism. Teams of expert assessors from other member jurisdictions conduct on-site evaluations examining both technical compliance (whether laws exist) and effectiveness (whether they work in practice). Outcomes are published and revisited through follow-up reports until a jurisdiction achieves a satisfactory rating.
  - #### Grey List and Black List
    - The **[[Grey List]]** (Jurisdictions Under Increased Monitoring) flags countries with strategic AML/CFT deficiencies working with FATF to address them under a defined action plan. The **Black List** (Call for Action list) identifies Non-Cooperative Countries or Territories requiring enhanced due diligence from financial institutions globally. Listing triggers automatic defensive measures by FATF member banks and regulators.
  - #### Virtual Assets and VASPs
    - In 2019 FATF extended its Recommendations to cover [[Virtual Asset]]s and [[Virtual Asset Service Provider]]s (VASPs). The updated Recommendation 15 requires jurisdictions to license or register VASPs and apply the full AML/CFT framework. Guidance updated in 2021 addressed peer-to-peer transactions, unhosted wallets, and [[Decentralised Finance]] protocols, and explored implications for [[Non-Fungible Token]]s.
  - #### Risk-Based Approach
    - Central to FATF's current methodology is the [[Risk-Based Approach]] (RBA): obliged entities must identify, assess, and understand their ML/TF risks and calibrate their controls proportionally. This replaced a rules-based tick-box approach and requires sophisticated risk assessment capability from both supervisors and financial institutions.

- ### Mechanisms
  - **Plenary meetings**: Held three times per year, Plenary is the decision-making body that adopts new standards, guidance documents, and listing decisions.
  - **Working groups**: Specialised groups (e.g., the Virtual Assets Contact Group, the Policy Development Group) develop technical guidance and standard revisions.
  - **FSRB network**: FSRBs such as MONEYVAL, the Asia/Pacific Group on Money Laundering (APG), and ESAAMLG conduct mutual evaluations and provide technical assistance in their regions, extending FATF's reach globally.
  - **Targeted Financial Sanctions**: FATF oversees implementation of UN Security Council [[International Sanctions]] regimes under Recommendations 6 and 7, requiring jurisdictions to freeze assets of designated entities without delay.
  - **Correspondent Banking guidance**: FATF works with the Financial Stability Board to address de-risking — the withdrawal of [[Correspondent Banking]] services from high-risk jurisdictions — recognising the tension between compliance pressure and financial inclusion.

- ### Applications and Use Cases
  - **National AML/CFT legislation**: Jurisdictions use FATF recommendations as the template for designing their financial crime statutes, supervisory regimes, and [[Financial Intelligence Unit]] mandates.
  - **Bank compliance programmes**: Globally systemically important banks (G-SIBs) and smaller institutions design their [[Know Your Customer]], [[Customer Due Diligence]], and transaction monitoring systems to meet or exceed FATF standards.
  - **Crypto-asset regulation**: Regulators in the EU (MiCA), UK, Singapore, UAE, and US have built their [[Virtual Asset Service Provider]] licensing regimes explicitly on FATF's Recommendation 15 guidance, including [[FATF Travel Rule]] implementation via solutions such as TRUST, Sygna, and TRP.
  - **Blockchain analytics**: Companies such as Chainalysis, Elliptic, and TRM Labs develop [[Blockchain Analytics]] tooling specifically to help VASPs meet FATF screening, monitoring, and [[Suspicious Activity Report]]ing obligations.
  - **Digital identity**: FATF guidance endorses digital [[Know Your Customer]] solutions and has explored whether [[Digital Identity]] frameworks (eIDAS, NIST 800-63) can satisfy CDD obligations, bridging to [[Digital Identity]] infrastructure.
  - **De-risking assessment**: International development banks and the IMF use FATF listing status as a diagnostic indicator when assessing financial sector vulnerabilities and designing technical assistance programmes.
  - **Central bank digital currencies**: FATF has engaged with central banks designing [[Central Bank Digital Currency]] systems, advising on how privacy-preserving designs can still satisfy AML/CFT traceability requirements.

- ### Relationships
  - hasPart:: [[FATF Travel Rule]]
  - hasPart:: [[Forty Recommendations]]
  - hasPart:: [[Mutual Evaluation]]
  - hasPart:: [[Grey List]]
  - enables:: [[Anti-Money Laundering]]
  - enables:: [[Counter-Terrorist Financing]]
  - enables:: [[Financial Stability]]
  - enables:: [[Proliferation Financing Controls]]
  - requires:: [[Customer Due Diligence]]
  - requires:: [[Suspicious Activity Report]]
  - requires:: [[Know Your Customer]]
  - implements:: [[Financial Intelligence Unit]]
  - implements:: [[Risk-Based Approach]]
  - supports:: [[Correspondent Banking]]
  - supports:: [[International Sanctions]]
  - supports:: [[Financial Crime Prevention]]
  - standardizedBy:: [[Standards Organization]]
  - standardizedBy:: [[G7]]
  - standardizedBy:: [[Financial Stability Board]]
  - relatedTo:: [[Compliance Framework]]
  - relatedTo:: [[Virtual Asset]]
  - relatedTo:: [[Virtual Asset Service Provider]]
  - relatedTo:: [[Decentralised Finance]]
  - relatedTo:: [[Central Bank Digital Currency]]
  - contrastsWith:: [[Self-Regulatory Organisation]]
  - bridgesTo:: [[Blockchain Analytics]]
  - bridgesTo:: [[Digital Identity]]

- ### Standards and Context
  - **FATF 40 Recommendations (2012, updated)**: The primary normative instrument defining the global AML/CFT/CPF framework.
  - **Recommendation 16 — Travel Rule**: Requires originator and beneficiary identifying information to travel with wire transfers and, since 2019, with [[Virtual Asset]] transfers above a threshold (USD/EUR 1,000). Implementation is enforced via the VASP-to-VASP messaging protocols (IVMS 101 data standard).
  - **IVMS 101**: The interVASP Messaging Standard that specifies the data format for Travel Rule compliance in crypto-asset transfers, developed by the Joint Working Group on interVASP Messaging Standards.
  - **EU AMLD Directives**: The EU's Anti-Money Laundering Directives (4AMLD through 6AMLD) directly transpose FATF standards into EU law; the forthcoming EU AML Authority (AMLA) will centralise supervision.
  - **US Bank Secrecy Act / FinCEN**: The US implements FATF standards principally through the Bank Secrecy Act and FinCEN regulations, with the Corporate Transparency Act (2021) addressing Recommendation 24 on beneficial ownership.
  - **UK POCA / Proceeds of Crime Act**: The UK's primary legislative vehicle for FATF compliance, complemented by the Terrorism Act 2000 and Money Laundering Regulations updated post-Brexit.
  - **FATF-Style Regional Bodies (FSRBs)**: MONEYVAL (Europe), APG (Asia-Pacific), ESAAMLG (Eastern and Southern Africa), GAFILAT (Latin America), GIABA (West Africa), MENAFATF (Middle East and North Africa) conduct evaluations in non-FATF-member jurisdictions.
  - **Financial Stability Board (FSB)**: The FSB coordinates with FATF on issues overlapping financial stability and AML/CFT, particularly in the areas of correspondent banking de-risking and crypto-asset regulation.
  - **Egmont Group**: The Egmont Group of Financial Intelligence Units facilitates information sharing between [[Financial Intelligence Unit]]s globally, complementing FATF's standard-setting role.

- ### Provenance
  - sources:: FATF official website (fatf-gafi.org); FATF 40 Recommendations (2012 consolidated); FATF Guidance on Virtual Assets and VASPs (2019, 2021); IMF Working Papers on FATF listing effects; Financial Stability Board publications on correspondent banking
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
