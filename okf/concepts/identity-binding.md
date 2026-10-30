---
okf_version: "0.2"
type: Class
title: Identity Binding
resource: urn:ngm:class:identity-binding
domain: artificial-intelligence
description: An identity binding is a member of an agent's identity set that ties one identity to the key management arrangement behind it. In the SAC-CG Agent Ontology it is the class `IdentityBinding`, declared without a definition; this one follows from its properties.[^1] An `IdentitySet` reaches it through the `identity` property, and its declared property `keyManagementSystem` is a datatype property with
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:identity-management
relatedTo:
  - urn:ngm:class:agent-identity
  - urn:ngm:class:security-binding
---

# Identity Binding

An identity binding is a member of an agent's identity set that ties one identity to the key management arrangement behind it. In the SAC-CG Agent Ontology it is the class `IdentityBinding`, declared without a definition; this one follows from its properties.[^1] An `IdentitySet` reaches it through the `identity` property, and its declared property `keyManagementSystem` is a datatype property with a string value. The value names the [[Key Management System]] that holds the keys for the identity.
