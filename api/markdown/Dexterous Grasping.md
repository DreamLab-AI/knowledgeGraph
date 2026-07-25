public:: true

# Dexterous Grasping

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:dexterous-grasping", "@type":"Page", "title":"Dexterous Grasping", "vc:slug":"dexterous-grasping", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:dexterous-grasping",
  "@type":"Class",
  "label":"Dexterous Grasping",
  "definition":"Dexterous grasping is the capability of a robotic hand with multiple independently actuated fingers to acquire and reposition objects using coordinated, in-hand manipulation rather than a simple two-jaw pinch. It requires fine control over contact forces and finger placement, often informed by tactile sensing to detect slip and adjust grip in real time without relying solely on vision. Reinforcement learning has become a dominant approach for training dexterous grasping policies, since the high dimensionality of multi-fingered hand kinematics and contact dynamics is difficult to model and plan for analytically. It is a prerequisite for robots handling irregular, deformable, or fragile objects that a rigid parallel gripper cannot reliably grip.",
  "domain":"robotics",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:robotic-grasping","label":"Robotic Grasping"}],
  "relations":{}
}
```

- ### Definition
	- Dexterous grasping is the capability of a robotic hand with multiple independently actuated fingers to acquire and reposition objects using coordinated, in-hand manipulation rather than a simple two-jaw pinch. It requires fine control over contact forces and finger placement, often informed by tactile sensing to detect slip and adjust grip in real time without relying solely on vision. Reinforcement learning has become a dominant approach for training dexterous grasping policies, since the high dimensionality of multi-fingered hand kinematics and contact dynamics is difficult to model and plan for analytically. It is a prerequisite for robots handling irregular, deformable, or fragile objects that a rigid parallel gripper cannot reliably grip.
- ### Relationships
	- subClassOf:: [[Robotic Grasping]]
