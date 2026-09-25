XACML (eXtensible Access Control Markup Language) is an OASIS standard that defines a declarative, XML-based language for expressing access-control policies and the requests and responses used to evaluate them. It specifies a reference architecture separating policy decision, enforcement, administration and information points, enabling fine-grained, attribute-based authorisation across heterogeneous systems. XACML lets organisations externalise authorisation logic from applications into centrally managed policies.

### Overview

- XACML provides a vendor-neutral way to define and enforce authorisation policies based on attributes of the subject, resource, action and environment. Its architecture cleanly separates the policy enforcement point, which intercepts requests, from the policy decision point, which evaluates applicable rules and returns permit, deny or not-applicable results. This externalisation lets security teams manage authorisation centrally and consistently rather than embedding logic in every application.

### Key aspects

- Declarative XML policy language with rules, policies and policy sets
- Reference architecture of PEP, PDP, PAP and PIP components
- Attribute-based evaluation over subject, resource, action and environment
- Combining algorithms that resolve conflicting rule outcomes
- Obligations and advice attached to access decisions

### Applications

- Enterprise fine-grained authorisation across applications
- Externalised access control for service-oriented architectures
- Healthcare and finance regulatory access policies
- Federated authorisation in multi-domain environments
- API and microservice authorisation gateways

### Provenance

