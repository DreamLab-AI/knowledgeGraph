---
okf_version: "0.2"
type: Class
title: PCI-DSS
resource: urn:ngm:class:pci-dss
domain: finance
description: The Payment Card Industry Data Security Standard (PCI-DSS) is a security standard governing the handling of cardholder data by organisations that store, process, or transmit payment card information. It defines a set of requirements covering network security, encryption, access control, monitoring, and vulnerability management to reduce the risk of card data breaches. Compliance is mandated by the
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:compliance
requires:
  - urn:ngm:class:encryption
  - urn:ngm:class:access-control
  - urn:ngm:class:vulnerability-management
  - urn:ngm:class:audit
  - urn:ngm:class:tokenization
supports:
  - urn:ngm:class:e-commerce
  - urn:ngm:class:financial-services
standardizedBy:
  - urn:ngm:class:standards
  - urn:ngm:class:regulatory-compliance
partOf:
  - urn:ngm:class:information-security
relatedTo:
  - urn:ngm:class:kyc-aml-compliance
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:payment-network
  - urn:ngm:class:payment-gateway
---

# PCI-DSS

The Payment Card Industry Data Security Standard (PCI-DSS) is a security standard governing the handling of cardholder data by organisations that store, process, or transmit payment card information. It defines a set of requirements covering network security, encryption, access control, monitoring, and vulnerability management to reduce the risk of card data breaches. Compliance is mandated by the major card brands and verified through self-assessment questionnaires or external audits depending on transaction volume.
