public:: true

# Travel Rule Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:travel-rule-protocol",
  "@type": "Page",
  "vc:slug": "travel-rule-protocol",
  "title": "Travel Rule Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:travel-rule-protocol",
  "@type": "Class",
  "label": "Travel Rule Protocol",
  "definition": "A travel rule protocol is a technical standard that lets virtual asset service providers securely exchange the originator and beneficiary information required by the FATF Travel Rule when transferring crypto-assets. Implementations such as the IVMS101 data model and the TRP and OpenVASP messaging schemes define how counterparty identity data is formatted, transmitted, and verified between regulated entities.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:travel-rule", "label": "Travel Rule"}, {"@id": "urn:ngm:class:aml-kyc-compliance", "label": "AML KYC Compliance"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A technical standard enabling virtual asset service providers to exchange originator and beneficiary data mandated by the FATF Travel Rule. It is a core mechanism within the broader [[Travel Rule]] regime and supports [[AML KYC Compliance]].
- ### Content
  - These protocols standardise the secure, privacy-preserving messaging of counterparty identity using the IVMS101 data model and transport schemes such as TRP, OpenVASP, and TRISA. Interoperability between providers is the central challenge, since both sender and receiver must support compatible protocols to complete a compliant transfer.
