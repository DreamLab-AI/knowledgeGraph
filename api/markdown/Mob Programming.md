public:: true

# Mob Programming
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mob-programming",
  "@type": "Page",
  "vc:slug": "mob-programming",
  "title": "Mob Programming",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mob-programming",
  "@type": "Class",
  "label": "Mob Programming",
  "definition": "Mob programming is a software development practice in which the whole team works on the same task at the same time, on the same computer, rotating the roles of driver and navigators. It extends pair programming to the full group, concentrating collective knowledge to improve code quality, shorten feedback loops, and spread learning. It trades raw parallelism for higher alignment and fewer hand-offs.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:software-development", "label": "Software Development"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:remote-pair-programming", "label": "Remote Pair Programming"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Mob programming has the whole team build software together at one workstation, rotating driver and navigator roles. It generalises pair programming and is often realised through [[Remote Pair Programming]] tooling.
- ### Content
  - Continuous review by the group catches defects and design issues immediately and eliminates knowledge silos, at the cost of dedicating several people to one stream of work. Distributed teams run mobs over screen-sharing and remote control tools with timed driver rotations to keep everyone engaged.
