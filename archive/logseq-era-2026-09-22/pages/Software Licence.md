public:: true

# Software Licence
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-software-licence",
  "@type": "Page",
  "vc:slug": "software-licence",
  "title": "Software Licence",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:software-licence",
  "@type": "Class",
  "label": "Software Licence",
  "definition": "A Software Licence is a legal instrument that governs the conditions under which software may be used, copied, modified, and distributed by parties other than the copyright holder. Licences range from permissive open-source agreements such as MIT and Apache 2.0 to copyleft licences such as GPL, and to proprietary end-user licence agreements. The licence type determines the legal obligations of users and downstream distributors with respect to attribution, source disclosure, and commercial use.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:infra-legal-and-regulatory", "label": "Legal and Regulatory"}
  ],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:intellectual-property", "label": "Intellectual Property"}]
  },
  "quality": 0.7
}
```

- ### Definition
  - A Software Licence is a legal agreement specifying the permissions, restrictions, and obligations under which software may be used, modified, and redistributed, ranging from permissive open-source to proprietary terms.
