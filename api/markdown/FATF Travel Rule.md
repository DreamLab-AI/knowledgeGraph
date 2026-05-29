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
  "definition": "The FATF Travel Rule (Recommendation 16 as applied to virtual assets) requires Virtual Asset Service Providers (VASPs) to collect, verify, and transmit originator and beneficiary identity information alongside cryptocurrency transactions that meet or exceed the applicable threshold. Issued by the Financial Action Task Force, it extends traditional wire-transfer obligations to crypto-asset transfers, obligating sending VASPs to share identifying data with receiving VASPs before or simultaneously with the transfer. Compliance demands interoperability protocols and data-sharing infrastructure between exchanges, wallets, and custodians operating in different jurisdictions.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-governance-and-regulation",
      "label": "Blockchain Governance and Regulation"
    }
  ],
  "relations": {
    "standardizedBy": [
      {"@id": "urn:ngm:class:fatf", "label": "FATF"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:anti-money-laundering", "label": "Anti-Money Laundering"},
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:virtual-asset", "label": "Virtual Asset"},
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - The FATF Travel Rule (Recommendation 16 as applied to virtual assets) requires Virtual Asset Service Providers (VASPs) to collect, verify, and transmit originator and beneficiary identity information alongside cryptocurrency transactions that meet or exceed the applicable threshold. Issued by the Financial Action Task Force, it extends traditional wire-transfer obligations to crypto-asset transfers, obligating sending VASPs to share identifying data with receiving VASPs before or simultaneously with the transfer. Compliance demands interoperability protocols and data-sharing infrastructure between exchanges, wallets, and custodians operating in different jurisdictions.

- ### Semantic Classification
  - owl-class:: fatf-travel-rule:FATF Travel Rule
  - owl-role:: Concept

- ### Relationships
  - standardizedBy [[FATF]]
  - requires [[Anti-Money Laundering]]
  - requires [[Digital Identity]]
  - relatedTo [[Virtual Asset]]
  - relatedTo [[Compliance Framework]]

- ### Content
  - The FATF Travel Rule — formally, Recommendation 16 extended to virtual assets via updated FATF guidance — is one of the most operationally significant compliance obligations facing the crypto-asset industry. The rule requires that, when a Virtual Asset Service Provider (VASP) sends a cryptocurrency transaction at or above the applicable threshold (typically USD/EUR 1,000 in most jurisdictions), it must simultaneously transmit originator and beneficiary information to the receiving VASP. Required data typically includes full name, account number or wallet address, and national identity information for the originator; beneficiary name and account are required at minimum.
  - Implementation is technically challenging because blockchain transactions do not natively carry structured identity metadata; purpose-built counterparty identification and messaging protocols are required. Industry solutions include the IVMS 101 data standard (developed by the Joint Working Group on interVASP Messaging Standards), which defines a common data schema for Travel Rule messages, and protocols such as TRP (Travel Rule Protocol) and TRISA (Travel Rule Information Sharing Architecture). These operate by allowing VASPs to discover each other's endpoints, establish authenticated channels, and exchange encrypted identity payloads alongside the on-chain transaction.
  - Non-compliance creates regulatory risk in jurisdictions where the Travel Rule has been transposed into national law, including the EU under the Transfer of Funds Regulation (TFR), the UK under updated Money Laundering Regulations, and Singapore under the Payment Services Act. The rule also drives demand for Digital Identity infrastructure and AML/KYC tooling.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
