public:: true

# Planetary Exploration
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:planetary-exploration",
  "@type": "Page",
  "vc:slug": "planetary-exploration",
  "title": "Planetary Exploration",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:planetary-exploration",
  "@type": "Class",
  "label": "Planetary Exploration",
  "definition": "Planetary exploration is the robotic investigation of planets, moons, and other bodies using rovers, landers, and orbiters operating in remote, unstructured, communication-delayed environments. It demands highly autonomous navigation and perception because round-trip signal delays make teleoperation impractical, requiring robots to plan paths and avoid hazards on their own. It is a demanding proving ground for autonomous ground-robot capability.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Robotics Navigation and Planning"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:navigation", "label": "Navigation"}, {"@id": "urn:ngm:class:ground-robot", "label": "Ground Robot"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Planetary exploration uses autonomous rovers and landers to study remote bodies, depending on robust [[Navigation]] and capable [[Ground Robot]] platforms.
- ### Content
  - Because communication latency to Earth precludes real-time control, exploration robots perform onboard hazard detection, visual odometry, and autonomous path planning across rough, unmapped terrain. Power, thermal, and radiation constraints, combined with the impossibility of repair, force conservative autonomy and extensive redundancy, making planetary missions a driver of advances in self-reliant navigation and perception.
