public:: true

# Access Control Policy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:access-control-policy",
  "@type": "Page",
  "vc:slug": "access-control-policy",
  "title": "Access Control Policy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:access-control-policy",
  "@type": "Class",
  "label": "Access Control Policy",
  "definition": "An Access Control Policy is a machine-readable specification of the rules that determine which agents may read, write, or append to a given resource. In decentralized web-data systems such as Solid, policies are expressed as RDF documents (e.g. WAC or ACP) attached to resources, granting or denying modes of access to identified WebID principals or groups. The policy is the declarative source of truth that an authorization engine evaluates on each request.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-security-and-identity", "label": "Security and Identity"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:solid", "label": "Solid"},
      {"@id": "urn:ngm:class:identity-management", "label": "Identity Management"}
    ]
  },
  "quality": 0.72
}
```
- ### Definition
  - An Access Control Policy declaratively states who may access a resource and in what mode. In [[Solid]] pods such policies are stored as RDF and bound to resources, enabling user-controlled sharing of personal data.
- ### Content
  - Policies reference principals by [[Identity Management]] identifiers such as WebIDs and grant access modes like read, write, append, and control. Authorization servers interpret the policy at request time, separating the rules from the enforcement code so that permissions can be edited without changing application logic.
