---
okf_version: "0.2"
type: Class
title: Access Control Policy
resource: urn:ngm:class:access-control-policy
domain: security
description: An Access Control Policy is a machine-readable specification of the rules that determine which agents may read, write, or append to a given resource. In decentralized web-data systems such as Solid, policies are expressed as RDF documents (e.g. WAC or ACP) attached to resources, granting or denying modes of access to identified WebID principals or groups. The policy is the declarative source of tr
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:infra-security-and-identity
relatedTo:
  - urn:ngm:class:solid
  - urn:ngm:class:identity-management
---

# Access Control Policy

An Access Control Policy is a machine-readable specification of the rules that determine which agents may read, write, or append to a given resource. In decentralized web-data systems such as Solid, policies are expressed as RDF documents (e.g. WAC or ACP) attached to resources, granting or denying modes of access to identified WebID principals or groups. The policy is the declarative source of truth that an authorization engine evaluates on each request.
