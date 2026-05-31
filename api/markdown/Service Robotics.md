public:: true

# Service Robotics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:service-robotics",
  "@type": "Page",
  "vc:slug": "service-robotics",
  "title": "Service Robotics",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:service-robotics",
  "@type": "Class",
  "label": "Service Robotics",
  "definition": "Service robotics is the branch of robotics concerned with robots that perform useful tasks for humans outside industrial manufacturing, including cleaning, logistics, hospitality, healthcare, and domestic assistance. These systems emphasise autonomous navigation in unstructured human environments, safe interaction, and task planning under uncertainty. It is a rapidly growing application domain of mobile and collaborative robots.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:robotics", "label": "Robotics"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:robotics-core-concepts", "label": "Robotics Core Concepts"}, {"@id": "urn:ngm:class:task-planning", "label": "Task Planning"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Service robotics covers robots that assist humans outside manufacturing, in settings such as cleaning, delivery, hospitality, and care. It builds on [[Robotics Core Concepts]] and depends on [[Task Planning]] to operate in unstructured human spaces.
- ### Content
  - Unlike caged industrial robots, service robots must navigate dynamic environments, perceive people, and act safely alongside them. Key enablers are robust SLAM, semantic perception, and high-level task planning that decomposes goals into safe, executable behaviours under real-world uncertainty.
