public:: true

# Domain Access Control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:domain-access-control",
  "@type": "Page",
  "vc:slug": "domain-access-control",
  "title": "Domain Access Control",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:domain-access-control",
  "@type": "Class",
  "label": "Domain Access Control",
  "definition": "Domain Access Control is the set of mechanisms that govern which users, avatars, or services may enter, view, or modify resources within a bounded virtual-world domain or server cluster. In metaverse platforms it enforces ownership and permission boundaries at the level of a hosted domain, mediating connection requests and content rights. It is foundational to multi-tenant virtual environments where independent operators host interoperable spaces.",
  "domain": "metaverse",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:sc-governance-and-safety", "label": "Governance and Safety"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:vircadia", "label": "Vircadia"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Domain Access Control defines who may connect to and act within a virtual-world domain, enforcing ownership and permission boundaries. Platforms such as [[Vircadia]] use it to mediate domain entry and content rights across federated spaces.
- ### Content
  - Access decisions typically combine identity verification, allow/deny lists, and role- or capability-based permissions scoped to a single domain server. This lets domain operators run independent, interoperable worlds while retaining control over moderation, content modification, and connection policy.
