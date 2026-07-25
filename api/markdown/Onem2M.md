public:: true

# Onem2M
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:oneM2M", "@type":"Page", "title":"Onem2M", "vc:slug":"oneM2M", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:oneM2M",
  "@type": "Class",
  "label": "Onem2M",
  "definition": "oneM2M is a global standards initiative that defines a common service layer for machine-to-machine and Internet of Things communication, enabling interoperable connection of devices, applications, and platforms across vertical industries. Developed by a partnership of regional standards bodies including ETSI, it specifies a horizontal middleware exposing reusable capabilities such as data management, device management, security, and discovery through a RESTful resource model. By abstracting these common functions, oneM2M reduces fragmentation and lets IoT solutions span domains like smart cities, transport, and energy.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:io-t-infrastructure",
      "label": "IoT Infrastructure"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:io-t-infrastructure",
        "label": "IoT Infrastructure"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:service-layer",
        "label": "Service Layer"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:etsi",
        "label": "ETSI"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:io-t",
        "label": "IoT"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:rest",
        "label": "REST"
      },
      {
        "@id": "urn:ngm:class:co-ap",
        "label": "CoAP"
      },
      {
        "@id": "urn:ngm:class:mqtt",
        "label": "MQTT"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:smart-city",
        "label": "Smart City"
      },
      {
        "@id": "urn:ngm:class:io-t",
        "label": "IoT"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:service-layer",
        "label": "Service Layer"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
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
	- [[Onem2M]] is a global standard defining a common [[Service Layer]] for machine-to-machine and [[IoT]] communication.
	- It is developed by a partnership of regional standards bodies including [[ETSI]] to deliver cross-domain [[Interoperability]].
	- It exposes reusable [[IoT Infrastructure]] capabilities through a RESTful resource model.
- ### Overview
	- IoT deployments historically grew as vertical silos, each with bespoke protocols and data models, preventing reuse across smart-home, transport, energy, and industrial domains.
	- oneM2M addresses this by specifying a horizontal middleware — the Common Services Layer — that sits between connectivity protocols below and applications above.
	- It defines standard resource types, a uniform RESTful API, and bindings over transports such as HTTP, CoAP, and MQTT, so a device or application written once can interoperate broadly.
	- The standard also covers security, access control, subscription and notification, group management, and semantic discovery.
- ### Mechanisms
	- A resource-oriented architecture where everything is a uniformly addressable resource.
	- Common service functions for registration, data management, device management, and discovery.
	- Protocol bindings to [[REST]], [[CoAP]], and [[MQTT]] for transport flexibility.
	- Semantic annotation to enable cross-vertical data interpretation.
- ### Applications
	- Interoperable [[Smart City]] platforms integrating sensors across departments.
	- Connected-vehicle and transport telematics backends.
	- Smart-energy and utility metering infrastructures.
	- Industrial and building-automation IoT gateways.
- ### Relationships
	- partOf:: [[IoT Infrastructure]]
	- hasPart:: [[Service Layer]]
	- standardizedBy:: [[ETSI]]
	- enables:: [[Interoperability]]
	- enables:: [[IoT]]
	- uses:: [[REST]]
	- uses:: [[CoAP]]
	- uses:: [[MQTT]]
	- supports:: [[Smart City]]
	- supports:: [[IoT]]
	- implements:: [[Service Layer]]
	- relatedTo:: [[Standards]]
	- relatedTo:: [[Interoperability]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
