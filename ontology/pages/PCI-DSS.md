public:: true

# PCI-DSS

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:pci-dss",
  "@type": "Page",
  "title": "PCI-DSS",
  "vc:slug": "pci-dss",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:pci-dss",
  "@type": "Class",
  "label": "PCI-DSS",
  "definition": "The Payment Card Industry Data Security Standard (PCI-DSS) is a security standard governing the handling of cardholder data by organisations that store, process, or transmit payment card information. It defines a set of requirements covering network security, encryption, access control, monitoring, and vulnerability management to reduce the risk of card data breaches. Compliance is mandated by the major card brands and verified through self-assessment questionnaires or external audits depending on transaction volume.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:compliance",
      "label": "Compliance"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:kyc-aml-compliance",
        "label": "KYC AML Compliance"
      },
      {
        "@id": "urn:ngm:class:fraud-detection",
        "label": "Fraud Detection"
      },
      {
        "@id": "urn:ngm:class:payment-network",
        "label": "Payment Network"
      },
      {
        "@id": "urn:ngm:class:payment-gateway",
        "label": "Payment Gateway"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:vulnerability-management",
        "label": "Vulnerability Management"
      },
      {
        "@id": "urn:ngm:class:audit",
        "label": "Audit"
      },
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenization"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:e-commerce",
        "label": "E-Commerce"
      },
      {
        "@id": "urn:ngm:class:financial-services",
        "label": "Financial Services"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:information-security",
        "label": "Information Security"
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
  - The Payment Card Industry Data Security Standard (PCI-DSS) is a security standard governing the handling of cardholder data by organisations that store, process, or transmit payment card information. It defines a set of requirements covering network security, encryption, access control, monitoring, and vulnerability management to reduce the risk of card data breaches. Compliance is mandated by the major card brands and verified through self-assessment questionnaires or external audits depending on transaction volume.
  - Related concepts: [[Compliance]] [[Payment Network]] [[Encryption]] [[Access Control]]
- ### Overview
  - PCI-DSS originated from the consolidation of separate card-brand security programmes into a single industry baseline maintained by the PCI Security Standards Council.
  - Its scope covers the cardholder data environment (CDE) — any system component that stores, processes, or transmits primary account numbers and related authentication data.
  - Validation levels scale with transaction volume, ranging from self-assessment questionnaires for small merchants to on-site assessment by a Qualified Security Assessor for large processors.
- ### Key aspects
  - Build and maintain a secure network through firewalls and the removal of vendor-default credentials.
  - Protect stored cardholder data using strong [[Encryption]] and limit retention to what is operationally necessary.
  - Encrypt transmission of cardholder data across open, public networks.
  - Maintain a [[Vulnerability Management]] programme including anti-malware controls and secure software development.
  - Implement strong [[Access Control]] measures restricting data access on a need-to-know basis.
  - Regularly monitor and test networks, logging access to data and systems.
- ### Applications
  - E-commerce checkout flows that must protect card data in transit and at rest.
  - Point-of-sale terminals and the payment processors that clear card transactions.
  - [[Tokenization]] services that substitute card numbers with non-sensitive tokens to reduce CDE scope.
  - Audit and certification engagements verifying merchant and service-provider compliance.
- ### Relationships
  - subClassOf:: [[Compliance]]
  - relatedTo:: [[KYC AML Compliance]]
  - relatedTo:: [[Fraud Detection]]
  - relatedTo:: [[Payment Network]]
  - relatedTo:: [[Payment Gateway]]
  - requires:: [[Encryption]]
  - requires:: [[Access Control]]
  - requires:: [[Vulnerability Management]]
  - requires:: [[Audit]]
  - requires:: [[Tokenization]]
  - standardizedBy:: [[Standards]]
  - standardizedBy:: [[Regulatory Compliance]]
  - supports:: [[E-Commerce]]
  - supports:: [[Financial Services]]
  - partOf:: [[Information Security]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
