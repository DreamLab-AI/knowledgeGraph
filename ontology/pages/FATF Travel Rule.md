public:: true

# fatf travel rule
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7ecadb220667290bf3e0cc10371b7e888991b9bf491f44190a8a7d3b67152227",
  "@type": "Page",
  "vc:slug": "fatf-travel-rule",
  "title": "fatf travel rule",
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
  "@id": "urn:ngm:class:fatf-travel-rule",
  "@type": "Class",
  "label": "FATF Travel Rule",
  "definition": "The FATF Travel Rule (Recommendation 16 extended to virtual assets) requires Virtual Asset Service Providers (VASPs) to collect, verify, and transmit originator and beneficiary identity information alongside cryptocurrency transactions that meet or exceed a jurisdictional threshold, typically USD/EUR 1,000. Issued by the Financial Action Task Force, it extends the longstanding wire-transfer obligation — rooted in the FATF 40 Recommendations and aligned with SWIFT messaging norms — to crypto-asset transfers, obligating sending VASPs to share identifying data with receiving VASPs before or simultaneously with the transfer. Compliance demands interoperability protocols, counterparty discovery infrastructure, and shared data standards such as IVMS 101 between exchanges, custodians, and wallet providers across different jurisdictions. The rule has been progressively transposed into national and regional law, including the EU Transfer of Funds Regulation, UK Money Laundering Regulations, and Singapore Payment Services Act.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-governance-and-regulation",
      "label": "Governance and Regulation"
    }
  ],
  "relations": {
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:fatf",
        "label": "FATF"
      },
      {
        "@id": "urn:ngm:class:financial-action-task-force",
        "label": "Financial Action Task Force"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      },
      {
        "@id": "urn:ngm:class:ivms-101",
        "label": "IVMS 101"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:financial-intelligence",
        "label": "Financial Intelligence"
      },
      {
        "@id": "urn:ngm:class:transaction-monitoring",
        "label": "Transaction Monitoring"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:fatf-recommendation-16",
        "label": "FATF Recommendation 16"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:trisa",
        "label": "TRISA"
      },
      {
        "@id": "urn:ngm:class:travel-rule-protocol",
        "label": "Travel Rule Protocol"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:privacy-coin",
        "label": "Privacy Coin"
      },
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Self-Hosted Wallet"
      },
      {
        "@id": "urn:ngm:class:decentralised-exchange",
        "label": "Decentralised Exchange"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:virtual-asset",
        "label": "Virtual Asset"
      },
      {
        "@id": "urn:ngm:class:compliance-framework",
        "label": "Compliance Framework"
      },
      {
        "@id": "urn:ngm:class:bc-0456-virtual-asset-service-providers",
        "label": "Virtual Asset Service Provider"
      },
      {
        "@id": "urn:ngm:class:transfer-of-funds-regulation",
        "label": "Transfer of Funds Regulation"
      },
      {
        "@id": "urn:ngm:class:sanctions-screening",
        "label": "Sanctions Screening"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:recommendation-16-virtual-assets",
      "label": "Recommendation 16 Virtual Assets"
    },
    {
      "@id": "urn:ngm:class:vasp-travel-rule",
      "label": "VASP Travel Rule"
    }
  ],
  "quality": 0.74,
  "qualityScore": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - The **FATF Travel Rule** — formally [[FATF]] Recommendation 16 as extended to [[Virtual Asset]] transfers — requires [[Virtual Asset Service Provider]] entities to collect, verify, and transmit originator and beneficiary identity information alongside cryptocurrency transactions at or above a threshold, typically USD/EUR 1,000. It extends the wire-transfer identification obligation long established in traditional [[Anti-Money Laundering]] frameworks to the crypto-asset sector, obligating sending VASPs to share personally identifying data with receiving VASPs before or simultaneously with the on-chain transfer. Compliance depends on interoperability protocols, counterparty discovery mechanisms, and standardised data schemas such as [[IVMS 101]] to enable encrypted, authenticated exchange of [[Digital Identity]] payloads across jurisdictions.

- ### Overview
  - The Travel Rule originates from Recommendation 16 of the FATF 40 Recommendations, which has governed wire transfers between traditional financial institutions for decades. In 2019, FATF extended this obligation explicitly to [[Virtual Asset Service Provider]] entities through updated guidance, recognising the rising systemic risk posed by pseudonymous blockchain transfers.
  - The rule addresses a fundamental asymmetry: on-chain transactions carry no native identity metadata, yet regulators require the same originator/beneficiary data flows as conventional correspondent banking. This gap makes compliance technically non-trivial, driving industry development of bespoke messaging infrastructure.
  - From a [[Financial Intelligence]] perspective, the rule supports the detection of money laundering, terrorist financing, and sanctions evasion by ensuring that identifiable actors can be traced across VASP boundaries — a capability absent in peer-to-peer blockchain transfers to [[Self-Hosted Wallet]] addresses.
  - Adoption has accelerated since 2021, with the EU [[Transfer of Funds Regulation]] coming into force in 2023, extending Travel Rule requirements to all crypto-asset transfers irrespective of amount, which goes beyond the FATF minimum threshold. This signals a trajectory toward stricter regimes globally.

- ### Key Components
  - #### Originator and Beneficiary Data
    - Required originator fields (minimum): full name, account number or wallet address, and — where available — national identity number, customer identification number, date and place of birth, or physical address.
    - Required beneficiary fields (minimum): name and account number or wallet address.
    - Jurisdictions may require additional fields above the FATF minimum, creating a heterogeneous compliance landscape.
  - #### IVMS 101 Data Standard
    - [[IVMS 101]] (interVASP Messaging Standard) is the canonical data schema for Travel Rule messages, developed by the Joint Working Group on interVASP Messaging Standards and endorsed by FATF and FinCEN.
    - It defines JSON data types for person names, national identity documents, addresses, and dates of birth, enabling machine-readable, jurisdiction-portable data exchange.
    - IVMS 101 is embedded within multiple [[Travel Rule Protocol]] and [[TRISA]] implementations, ensuring structural interoperability even where transport layers differ.
  - #### Counterparty Discovery
    - [[VASP Counterparty Discovery]] is the pre-transfer step of identifying the receiving VASP from a wallet address or blockchain account identifier.
    - Mechanisms include the VASP directory model (centralised registries), TRISA PKI-based directory (decentralised lookup), and blockchain address attribution from analytics vendors such as [[Chainalysis]] or [[Elliptic]].
    - Self-hosted wallets present a special challenge: they are not operated by a VASP, so many jurisdictions require the originating VASP to apply enhanced due diligence before sending to unhosted wallets.
  - #### Travel Rule Protocols
    - [[TRISA]] (Travel Rule Information Sharing Architecture): an open-source, PKI-anchored protocol using mutual TLS and a global VASP directory for peer-to-peer IVMS 101 message exchange.
    - [[Travel Rule Protocol]] (TRP): a REST/HTTP-based protocol using well-known URI discovery, originally developed by a consortium including ING, BitGo, and others.
    - [[OpenVASP]]: an Ethereum-based protocol using smart-contract session initiation and off-chain messaging for IVMS 101 payloads.
    - Commercial solutions (Notabene, Sygna, 21 Analytics, VerifyVASP) offer hosted Travel Rule platforms integrating multiple protocols.
  - #### Threshold and Jurisdictional Variation
    - FATF recommends a USD/EUR 1,000 threshold below which simplified due diligence may apply. Several jurisdictions diverge:
    - EU TFR: no threshold — all crypto-asset transfers require Travel Rule data regardless of amount.
    - UK: GBP 1,000 threshold (subject to revision).
    - Singapore MAS: SGD 1,500 threshold under the Payment Services Act.
    - USA: USD 3,000 threshold for "funds transfers" under FinCEN rules, with ongoing rulemaking to align with FATF.

- ### Mechanisms
  - #### Pre-Transfer Flow
    - Sending VASP collects originator KYC data from its onboarded customer at account opening.
    - Before or at the moment of transmitting the on-chain transaction, the sending VASP dispatches a Travel Rule message to the receiving VASP containing originator and beneficiary data.
    - The receiving VASP validates the message, screens the originator against [[Sanctions Screening]] lists, and either accepts or rejects the transfer.
  - #### Authentication and Encryption
    - Messages are typically encrypted end-to-end using the receiving VASP's [[Public Key Infrastructure]] certificate, preventing data exposure to third parties or the transport layer.
    - Mutual authentication (e.g., TRISA mTLS) ensures that only registered, verified VASPs can exchange data, reducing the risk of spoofing or phishing attacks.
  - #### Privacy-Preserving Extensions
    - The requirement to share PII between VASPs creates privacy tension; emerging proposals use [[Zero-Knowledge Proof]] techniques to enable attribute-selective disclosure (e.g., "this originator is not sanctioned") without revealing raw identity data.
    - [[Verifiable Credential]] frameworks (W3C VC-DATA-MODEL) are being explored to allow VASPs to attach cryptographically signed identity assertions to Travel Rule messages, reducing the need for raw PII transfer.
    - [[Decentralised Identity]] (DID) solutions could enable VASPs to resolve identity proofs on-chain without centralised registries.

- ### Applications and Use Cases
  - **Centralised Exchange Compliance**: Major exchanges such as Coinbase, Kraken, and Binance deploy Travel Rule solutions to comply with local regulations before permitting withdrawals to other VASPs.
  - **Custodian-to-Custodian Transfers**: Institutional custodians transferring assets on behalf of funds or family offices use Travel Rule messaging to comply with bank-grade wire-transfer rules.
  - **Cross-Border Transfers**: International remittances in crypto-assets require Travel Rule data to be transmitted across borders, intersecting with correspondent banking obligations and FinCEN requirements.
  - **DeFi and Unhosted Wallet Edge Cases**: Regulators debate whether decentralised protocols or self-hosted wallet interactions trigger Travel Rule obligations; current FATF guidance places the obligation on the VASP leg of the transaction only.
  - **Stablecoin Issuers**: Under the EU MiCA regime and aligned Travel Rule requirements, stablecoin issuers operating payment rails are subject to full Travel Rule obligations.
  - **NFT Marketplaces**: High-value NFT transfers that meet virtual-asset criteria may trigger Travel Rule data obligations when processed through a regulated marketplace.

- ### Relationships
  - standardizedBy:: [[FATF]]
  - standardizedBy:: [[Financial Action Task Force]]
  - requires:: [[Anti-Money Laundering]]
  - requires:: [[Digital Identity]]
  - requires:: [[Know Your Customer]]
  - requires:: [[IVMS 101]]
  - requires:: [[VASP Counterparty Discovery]]
  - enables:: [[Crypto-Asset Compliance]]
  - enables:: [[Financial Intelligence]]
  - enables:: [[Transaction Monitoring]]
  - implements:: [[FATF Recommendation 16]]
  - implements:: [[Wire Transfer Rule]]
  - uses:: [[TRISA]]
  - uses:: [[Travel Rule Protocol]]
  - uses:: [[OpenVASP]]
  - uses:: [[Public Key Infrastructure]]
  - contrastsWith:: [[Privacy Coin]]
  - contrastsWith:: [[Self-Hosted Wallet]]
  - contrastsWith:: [[Decentralised Exchange]]
  - relatedTo:: [[Virtual Asset]]
  - relatedTo:: [[Compliance Framework]]
  - relatedTo:: [[Virtual Asset Service Provider]]
  - relatedTo:: [[Transfer of Funds Regulation]]
  - relatedTo:: [[Sanctions Screening]]
  - bridges-to:: [[Decentralised Identity]]
  - bridges-to:: [[Verifiable Credential]]
  - bridges-to:: [[Zero-Knowledge Proof]]

- ### Standards and Regulatory Context
  - **FATF 40 Recommendations**: The foundational international AML/CFT policy framework, updated periodically; Recommendation 16 covers wire transfers and its 2019 virtual asset guidance extends it to VASPs.
  - **FATF Guidance on Virtual Assets and VASPs (2019, updated 2021)**: Provides interpretive notes clarifying VASP definition, threshold application, and counterparty due diligence for unhosted wallets.
  - **IVMS 101**: The canonical interoperability data schema, jointly developed by the Global Digital Finance (GDF), the International Digital Asset Exchange Association (IDAXA), and the Chamber of Digital Commerce. Version 2023 update incorporated additional field types.
  - **EU Transfer of Funds Regulation (TFR) — Regulation (EU) 2023/1113**: The EU implementation of the Travel Rule for crypto-assets; notably removes the EUR 1,000 threshold entirely, requiring data for all transfers.
  - **EU Markets in Crypto-Assets Regulation (MiCA)**: Runs in parallel with TFR, establishing licensing obligations for CASPs (Crypto-Asset Service Providers) who are also subject to Travel Rule obligations.
  - **UK Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017** (as amended): UK implementation that applies Travel Rule to crypto-asset transfers.
  - **FinCEN Notice of Proposed Rulemaking (USA)**: Ongoing US rulemaking to align the existing USD 3,000 bank-secrecy threshold with FATF's USD 1,000 virtual-asset guidance.
  - **MAS Payment Services Act (Singapore)**: Singapore's implementation covering Digital Payment Token services with a SGD 1,500 threshold.
  - **TRISA White Paper / TRISA Directory Service**: Technical specification for the open-source PKI-based Travel Rule protocol governed by the TRISA Working Group.
  - **W3C Decentralised Identifier (DID) Core** and **Verifiable Credentials Data Model**: Emerging W3C standards relevant to privacy-preserving Travel Rule identity attestation.

- ### Challenges and Criticisms
  - **Sunrise Problem**: VASPs in jurisdictions that have not yet transposed the Travel Rule cannot legally receive PII messages from compliant VASPs, creating asymmetric obligations and potential compliance deadlock.
  - **Unhosted Wallet Risk**: The rule does not apply to self-hosted (unhosted) wallets used in peer-to-peer transfers, creating a regulatory gap exploited by bad actors who route funds through unhosted wallets.
  - **Protocol Fragmentation**: Multiple competing Travel Rule protocols (TRISA, TRP, OpenVASP, Shyft, VerifyVASP, Sygna) impede interoperability; no single protocol has universal adoption, imposing multi-protocol integration costs.
  - **Data Privacy Tensions**: Transmitting PII between VASPs across jurisdictions raises GDPR and cross-border data transfer concerns, particularly under EU SCCs (Standard Contractual Clauses) frameworks.
  - **DeFi Regulatory Uncertainty**: Decentralised protocols without a legal operator do not map cleanly to the VASP definition, leaving a substantial portion of the crypto-asset ecosystem outside the Travel Rule's reach.

- ### Provenance
  - sources:: FATF Guidance on Virtual Assets and VASPs (2019, 2021); IVMS 101 standard (JWG-IVMS); EU TFR Regulation 2023/1113; TRISA White Paper; FinCEN regulatory notices
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
