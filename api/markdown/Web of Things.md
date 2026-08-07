public:: true

# Web of Things
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b6a4769d2b1f2ae91209660ccd43d853c4a05e61d50dfa5fb7020e2e649c67d4",
  "@type": "Page",
  "vc:slug": "web-of-things",
  "title": "Web of Things",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:web-standards",
      "vc:label": "Web Standards"
    },
    {
      "@id": "urn:visionflow:linked:internet-of-things",
      "vc:label": "Internet of Things"
    },
    {
      "@id": "urn:visionflow:linked:semantic-web",
      "vc:label": "Semantic Web"
    },
    {
      "@id": "urn:visionflow:linked:world-wide-web-consortium",
      "vc:label": "World Wide Web Consortium"
    },
    {
      "@id": "urn:visionflow:linked:agent-to-agent-protocol",
      "vc:label": "Agent-to-Agent Protocol"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:web-of-things",
  "@type": "Class",
  "label": "Web of Things",
  "definition": "A W3C standardisation effort that applies web architecture, protocols, and semantics to the Internet of Things, describing physical devices through machine-readable Thing Descriptions based on JSON-LD so that heterogeneous sensors, actuators, and services can be discovered, composed, and controlled through uniform web interfaces regardless of the underlying transport protocol, providing an interoperability layer that bridges fragmented IoT ecosystems and makes device capabilities legible to software agents.",
  "domain": "standards",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:web-standards",
    "label": "Web Standards"
  },
  "relations": {
    "dependsOn": [
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:semantic-web",
        "label": "Semantic Web"
      },
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:agent-to-agent-protocol",
        "label": "Agent-to-Agent Protocol"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:world-wide-web-consortium",
        "label": "World Wide Web Consortium"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A W3C standardisation effort that applies web architecture, protocols, and semantics to the Internet of Things, describing physical devices through machine-readable Thing Descriptions based on JSON-LD so that heterogeneous sensors, actuators, and services can be discovered, composed, and controlled through uniform web interfaces regardless of the underlying transport protocol, providing an interoperability layer that bridges fragmented IoT ecosystems and makes device capabilities legible to software agents."

- ### Semantic Classification
  - owl-class:: standards:WebOfThings
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Web Standards]]
  - depends-on:: [[Internet of Things]]
  - uses:: [[Semantic Web]]
  - bridges-to:: [[Agent-to-Agent Protocol]]

- ### Content

  ## Definition

  The **Web of Things** (WoT) is the [[World Wide Web Consortium]]'s answer to IoT fragmentation: rather than inventing yet another device protocol, it layers the web's proven architectural style — URIs for identification, hypermedia for discovery, standard verbs for interaction — over whatever protocols devices already speak. Its centrepiece is the **Thing Description** (TD), a JSON-LD document that declares a device's *properties* (readable/observable state such as temperature), *actions* (invocable operations such as toggling a relay), and *events* (asynchronous notifications), together with the security schemes and protocol bindings needed to reach them. A TD makes a thing self-describing: any consumer that can parse the description can interact with the device without prior, vendor-specific integration.

  Because Thing Descriptions are JSON-LD, they inherit [[Semantic Web]] machinery. Terms can be annotated with ontologies (the iot.schema.org vocabulary, SAREF, domain ontologies for buildings or agriculture), enabling semantic search — "find every occupancy sensor on this floor" — and automated composition of devices that were never designed together. The WoT Binding Templates map the abstract interaction model onto concrete protocols (HTTP, CoAP, MQTT, Modbus), while the WoT Scripting API and open-source runtimes such as Eclipse Thingweb node-wot give developers a uniform programming surface. W3C published the core WoT Architecture and Thing Description specifications as Recommendations in 2020, with version 1.1 following in 2023.

  In this knowledge graph, WoT matters chiefly as a bridging construct: it is the standardised device-capability layer that agentic systems can consume. Where an [[Agent-to-Agent Protocol]] lets software agents advertise and negotiate capabilities with one another, WoT does the equivalent for physical endpoints — a Thing Description plays the same role for a lamp or a robot arm that an agent card plays for a service, and the two vocabularies together sketch a web in which agents discover and orchestrate both digital and physical actors.

  ## Current Landscape

  Adoption is strongest in industrial and smart-building integration, where WoT acts as a neutral overlay above brownfield protocols; Siemens, Oracle, and Intel contributed heavily to the working group, and Eclipse Thingweb provides the reference implementation. WoT deliberately complements rather than competes with transport-level ecosystems: Matter standardises the radio-to-application stack for consumer devices, whereas WoT standardises *description and interaction metadata* and can wrap Matter, OPC UA, or proprietary APIs alike. Active work items include TD 2.0, richer discovery mechanisms, and profiles for out-of-the-box interoperability. The main critique — that heavyweight semantic descriptions add friction for constrained devices — is being addressed through slimmer profiles and canonical serialisations, while interest from the agentic-AI community in machine-readable capability descriptions has given the standard a second wind.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
