public:: true

# V2X Communication
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:v2x-communication", "@type":"Page", "title":"V2X Communication", "vc:slug":"v2x-communication", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:v2x-communication",
  "@type": "Class",
  "label": "V2X Communication",
  "definition": "Vehicle-to-everything (V2X) communication is a wireless technology that lets vehicles exchange real-time information with other vehicles, roadside infrastructure, pedestrians, and networks. It extends the perception of automated and connected vehicles beyond their onboard sensors by sharing position, speed, intent, and hazard data, improving safety and traffic efficiency. Implemented through cellular C-V2X or dedicated short-range radio standards, it is a key enabler of cooperative driving and intelligent transport systems.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:wireless-communication",
      "label": "Wireless Communication"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:autonomous-driving",
        "label": "Autonomous Driving"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:5-g",
        "label": "5G"
      },
      {
        "@id": "urn:ngm:class:wireless-communication",
        "label": "Wireless Communication"
      },
      {
        "@id": "urn:ngm:class:communication-protocol",
        "label": "Communication Protocol"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:5-g",
        "label": "5G"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-vehicle",
        "label": "Autonomous Vehicle"
      },
      {
        "@id": "urn:ngm:class:traffic-management",
        "label": "Traffic Management"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:autonomous-driving",
        "label": "Autonomous Driving"
      },
      {
        "@id": "urn:ngm:class:smart-city",
        "label": "Smart City"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:smart-city",
        "label": "Smart City"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:etsi-gr-mec-032",
        "label": "ETSI GR MEC 032"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:5-g-network",
        "label": "5G Network"
      },
      {
        "@id": "urn:ngm:class:traffic-management",
        "label": "Traffic Management"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- [[V2X Communication]] is a [[Wireless Communication]] technology letting vehicles exchange real-time data with other vehicles, infrastructure, pedestrians, and networks.
	- It extends an [[Autonomous Vehicle]]'s perception beyond onboard [[Sensor Fusion]] by sharing position, intent, and hazard information.
	- It is a key enabler of cooperative [[Autonomous Driving]] and intelligent transport within the [[Smart City]].
- ### Overview
	- Onboard sensors see only line of sight; V2X adds a non-line-of-sight channel so a vehicle can learn about a hidden hazard, a stopped car around a bend, or a changing signal phase before its own sensors could.
	- It spans several link types: vehicle-to-vehicle, vehicle-to-infrastructure, vehicle-to-pedestrian, and vehicle-to-network, collectively abbreviated V2X.
	- Two technology families compete and coexist: cellular C-V2X (evolving with 5G) and dedicated short-range radio. Both broadcast standardised safety messages with low latency.
	- Edge computing nodes aggregate and redistribute V2X data, enabling cooperative manoeuvres and city-scale traffic optimisation.
- ### Mechanisms
	- Periodic broadcast of basic safety messages carrying kinematics and status.
	- Event-triggered hazard and signal-phase-and-timing notifications.
	- Low-latency links over C-V2X sidelink or 5G network slices.
	- Edge aggregation for cooperative perception and traffic coordination.
- ### Applications
	- Collision avoidance and intersection-movement assistance.
	- Cooperative adaptive cruise control and platooning.
	- Signal-phase awareness for smoother, lower-emission driving.
	- Emergency-vehicle priority and vulnerable-road-user protection.
- ### Relationships
	- partOf:: [[Autonomous Driving]]
	- uses:: [[5G]]
	- uses:: [[Wireless Communication]]
	- uses:: [[Communication Protocol]]
	- dependsOn:: [[5G]]
	- dependsOn:: [[Edge Computing]]
	- enables:: [[Autonomous Vehicle]]
	- enables:: [[Traffic Management]]
	- supports:: [[Autonomous Driving]]
	- supports:: [[Smart City]]
	- requires:: [[Sensor Fusion]]
	- bridgesTo:: [[Edge Computing]]
	- bridgesTo:: [[Smart City]]
	- standardizedBy:: [[ETSI GR MEC 032]]
	- relatedTo:: [[5G Network]]
	- relatedTo:: [[Traffic Management]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
