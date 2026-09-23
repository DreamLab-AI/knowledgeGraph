---
okf_version: "0.2"
type: Class
title: Network Security
resource: urn:ngm:class:network-security
domain: security
description: "Network security is the practice of protecting computer networks and the data transmitted across them from unauthorised access, misuse, modification, or denial of service through a combination of hardware controls, software policies, and operational procedures. It encompasses perimeter defence, intrusion detection and prevention, traffic analysis, encryption of data in transit, and access control "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cybersecurity
hasPart:
  - urn:ngm:class:firewall
  - urn:ngm:class:intrusion-detection-system
  - urn:ngm:class:virtual-private-network
  - urn:ngm:class:network-segmentation
  - urn:ngm:class:security-information-and-event-management
requires:
  - urn:ngm:class:authentication-mechanism
  - urn:ngm:class:access-control
  - urn:ngm:class:identity-management
enables:
  - urn:ngm:class:data-security
  - urn:ngm:class:digital-security
  - urn:ngm:class:secure-communication
  - urn:ngm:class:compliance-management
dependsOn:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:cryptography
contrastsWith:
  - urn:ngm:class:perimeter-security
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:software-defined-networking
uses:
  - urn:ngm:class:encryption
  - urn:ngm:class:network-protocol
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:tls
  - urn:ngm:class:deep-packet-inspection
standardizedBy:
  - urn:ngm:class:nist-cybersecurity-framework
  - urn:ngm:class:iso-iec-27001
relatedTo:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:information-security
  - urn:ngm:class:endpoint-security
  - urn:ngm:class:threat-intelligence
  - urn:ngm:class:vulnerability-management
---

# Network Security

Network security is the practice of protecting computer networks and the data transmitted across them from unauthorised access, misuse, modification, or denial of service through a combination of hardware controls, software policies, and operational procedures. It encompasses perimeter defence, intrusion detection and prevention, traffic analysis, encryption of data in transit, and access control applied at network boundaries and within internal segments. As networks have evolved from isolated LANs to globally distributed cloud and edge architectures, network security has broadened to encompass zero-trust models, software-defined perimeters, and AI-driven anomaly detection. It forms a foundational layer of broader cybersecurity strategy, intersecting with identity management, cryptographic standards, and regulatory compliance frameworks.
