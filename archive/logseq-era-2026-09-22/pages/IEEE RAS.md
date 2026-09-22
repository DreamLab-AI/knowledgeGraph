public:: true

# IEEE RAS
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ieee-ras",
  "@type": "Page",
  "vc:slug": "ieee-ras",
  "title": "IEEE RAS",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ieee-ras",
  "@type": "Class",
  "label": "IEEE RAS",
  "definition": "The IEEE Robotics and Automation Society (RAS) is the professional society within IEEE dedicated to advancing robotics and automation through publications, conferences, and the development of technical standards. It sponsors standards such as IEEE 1872 (ontologies for robotics and automation) and maintains working groups covering terminology, safety, and interoperability. RAS is a primary standards-developing body for the robotics field.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:standards-body", "label": "Standards Body"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:topological-map", "label": "Topological Map"}, {"@id": "urn:ngm:class:force-control", "label": "Force Control"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - IEEE RAS is the IEEE society and standards body for robotics, publishing ontologies and standards that inform techniques such as the [[Topological Map]] and [[Force Control]].
- ### Content
  - Beyond its flagship conferences and journals, RAS develops consensus standards on robot terminology, mapping data formats, and force-controlled manipulation. These standards give researchers and integrators a shared vocabulary and interoperable interfaces, reducing fragmentation across robotics platforms.
