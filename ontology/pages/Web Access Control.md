public:: true

# Web Access Control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:web-access-control",
  "@type": "Page",
  "vc:slug": "web-access-control",
  "title": "Web Access Control",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:web-access-control",
  "@type": "Class",
  "label": "Web Access Control",
  "definition": "Web Access Control (WAC) is a decentralised authorisation system for web resources that uses RDF-based access control lists to specify which agents may read, write, append, or control linked-data resources identified by URIs. It is a core mechanism in the Solid ecosystem, letting individuals govern access to their personal data pods using WebID-based identity. WAC decouples authorisation from any central server, aligning with self-sovereign data principles.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:infra-security-and-identity", "label": "Security and Identity"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:solid", "label": "Solid"}, {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Web Access Control is an RDF-based authorisation scheme for linked-data resources, implemented by [[Solid]] to let individuals enforce per-resource permissions tied to WebID [[Digital Identity]].
- ### Content
  - Each protected resource references an ACL document whose authorizations grant Read, Write, Append, or Control modes to specific agents, groups, or the public. Because rules are themselves linked data, access policies are portable across servers; the model's trade-offs include the complexity of managing fine-grained ACLs at scale and reliance on robust WebID authentication.
