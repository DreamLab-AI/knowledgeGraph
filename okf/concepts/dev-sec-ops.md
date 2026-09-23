---
okf_version: "0.2"
type: Class
title: DevSecOps
resource: urn:ngm:class:dev-sec-ops
domain: ai
description: DevSecOps is a software engineering practice that integrates security controls, testing, and policy enforcement directly into the continuous integration and delivery pipeline, making security a shared responsibility across development, operations, and security teams. It applies the principle of shift-left security, automating vulnerability scanning, dependency auditing, and policy-as-code checks a
maturity: established
quality: 0.95
is-a:
  - urn:ngm:class:agile-software-development
  - urn:ngm:class:software-engineering
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:continuous-delivery
hasPart:
  - urn:ngm:class:security-testing
  - urn:ngm:class:penetration-testing
  - urn:ngm:class:continuous-monitoring
  - urn:ngm:class:policy-as-code
  - urn:ngm:class:vulnerability-scanner
  - urn:ngm:class:software-bill-of-materials
  - urn:ngm:class:container-security
  - urn:ngm:class:infrastructure-as-code
  - urn:ngm:class:cloud-security
requires:
  - urn:ngm:class:ci-cd-automation
  - urn:ngm:class:vulnerability-scanner
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:cloud-security
  - urn:ngm:class:continuous-deployment
  - urn:ngm:class:cybersecurity-framework
  - urn:ngm:class:source-control
  - urn:ngm:class:infrastructure-as-code
enables:
  - urn:ngm:class:vulnerability-management
  - urn:ngm:class:supply-chain-security
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:software-bill-of-materials
  - urn:ngm:class:ai-security
  - urn:ngm:class:mlsecops
  - urn:ngm:class:secure-software-development-lifecycle
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:continuous-monitoring
dependsOn:
  - urn:ngm:class:source-control
  - urn:ngm:class:container-security
  - urn:ngm:class:infrastructure-as-code
  - urn:ngm:class:cloud-security
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:agile-software-development
  - urn:ngm:class:ci-cd-automation
implements:
  - urn:ngm:class:shift-left-security
  - urn:ngm:class:slsa-framework
  - urn:ngm:class:nist-cybersecurity-framework
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:policy-as-code
  - urn:ngm:class:nist-ai-rmf
  - urn:ngm:class:secure-software-development-lifecycle
contrastsWith:
  - urn:ngm:class:manual-security-audit
  - urn:ngm:class:perimeter-security
  - urn:ngm:class:waterfall-security-model
  - urn:ngm:class:periodic-penetration-testing
uses:
  - urn:ngm:class:open-policy-agent
  - urn:ngm:class:sigstore
  - urn:ngm:class:software-bill-of-materials
  - urn:ngm:class:vulnerability-scanner
  - urn:ngm:class:penetration-testing
  - urn:ngm:class:security-testing
  - urn:ngm:class:continuous-monitoring
  - urn:ngm:class:cryptographic-security
supports:
  - urn:ngm:class:platform-engineering
  - urn:ngm:class:continuous-delivery
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:api-security
  - urn:ngm:class:data-security
  - urn:ngm:class:cyber-security-and-cryptography
  - urn:ngm:class:cybersecurity-policy
standardizedBy:
  - urn:ngm:class:nist-cybersecurity-framework
  - urn:ngm:class:nist-ai-rmf
  - urn:ngm:class:slsa-framework
  - urn:ngm:class:ncsc-cybersecurity-framework
  - urn:ngm:class:cybersecurity-standard
relatedTo:
  - urn:ngm:class:vulnerability-management
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:ai-security
  - urn:ngm:class:cybersecurity-risk-management
  - urn:ngm:class:mlsecops
  - urn:ngm:class:ai-trust-risk-and-security-management
  - urn:ngm:class:api-security
  - urn:ngm:class:cloud-security
  - urn:ngm:class:data-security
  - urn:ngm:class:cyber-security-and-cryptography
  - urn:ngm:class:cybersecurity-policy
  - urn:ngm:class:cybersecurity-standard
  - urn:ngm:class:continuous-training
  - urn:ngm:class:nist-ai-standards
  - urn:ngm:class:nist-cybersecurity-framework
---

# DevSecOps

DevSecOps is a software engineering practice that integrates security controls, testing, and policy enforcement directly into the continuous integration and delivery pipeline, making security a shared responsibility across development, operations, and security teams. It applies the principle of shift-left security, automating vulnerability scanning, dependency auditing, and policy-as-code checks at every stage from code commit through production deployment.
