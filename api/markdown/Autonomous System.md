```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@type": "Page",
  "@id": "urn:visionflow:page:autonomous-system",
  "title": "Autonomous System",
  "vc:slug": "autonomous-system",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:autonomous-system",
  "@type": "Class",
  "label": "Autonomous System",
  "definition": "An Autonomous System is a robotic or computational entity capable of perceiving its environment through sensors, making decisions based on that perception, and executing actions to achieve goals without continuous human intervention. Autonomous systems span platforms from autonomous vehicles and industrial robots to unmanned aerial vehicles and intelligent software agents, unified by their capacity for closed-loop perception-action cycles.",
  "domain": "robotics",
  "maturity": "emerging",
  "quality": 0.3,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:sensor", "label": "Sensor"},
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:autonomous-vehicle", "label": "Autonomous Vehicle"},
      {"@id": "urn:ngm:class:autonomous-robot", "label": "Autonomous Robot"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:robot-safety", "label": "Robot Safety"}
    ]
  }
}
```

## Autonomous System

An Autonomous System is a robotic or computational entity capable of perceiving its environment through sensors, making decisions based on that perception, and executing actions to achieve goals without continuous human intervention. Autonomous systems span platforms from autonomous vehicles and industrial robots to unmanned aerial vehicles and intelligent software agents, unified by their capacity for closed-loop perception-action cycles.

### Relationships
  - requires:: [[Sensor]]
  - requires:: [[Motion Planning]]
  - enables:: [[Autonomous Vehicle]]
  - enables:: [[Autonomous Robot]]
  - uses:: [[Reinforcement Learning]]
  - relatedTo:: [[Robot Safety]]
