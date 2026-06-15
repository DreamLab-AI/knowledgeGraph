public:: true

# Web Application

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:web-application",
  "@type": "Page",
  "title": "Web Application",
  "vc:slug": "web-application",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:web-application",
  "@type": "Class",
  "label": "Web Application",
  "definition": "A web application is interactive software delivered over the web and executed primarily within a browser, combining client-side code with server-side services accessed over HTTP. It renders user interfaces, manages state, and communicates with back-end APIs to provide functionality comparable to native applications without installation. Web applications rely on open web standards for portability across devices and platforms.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "Infrastructure"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      },
      {
        "@id": "urn:ngm:class:user-interface",
        "label": "User Interface"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ecmascript",
        "label": "Ecmascript"
      },
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      },
      {
        "@id": "urn:ngm:class:css",
        "label": "CSS"
      },
      {
        "@id": "urn:ngm:class:html",
        "label": "HTML"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:web-standards",
        "label": "Web Standards"
      },
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:web-standards",
        "label": "Web Standards"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:compute-infrastructure",
        "label": "Compute Infrastructure"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:api",
        "label": "API"
      },
      {
        "@id": "urn:ngm:class:user-interface-standard",
        "label": "User Interface Standard"
      },
      {
        "@id": "urn:ngm:class:w3c",
        "label": "W3C"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:devops",
        "label": "DevOps"
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
  - A web application is browser-delivered interactive software over [[HTTP]].
  - It is built on [[Web Standards]] and frequently authored in [[Ecmascript]].
  - It consumes server-side [[REST API]] services and renders a [[User Interface]].
  - It is a form of [[Software Application]] distributed without installation.
- ### Overview
  - Web applications run in the browser and synchronise state with server-side services.
  - They use open standards so the same code runs across operating systems and devices.
  - Modern architectures split a rich client front-end from API-driven back-ends.
  - They eliminate install friction at the cost of network dependence and browser constraints.
- ### Key aspects
  - Client-side rendering and state management deliver responsive interactivity.
  - HTTP and REST APIs decouple the front-end from server-side business logic.
  - Open web standards ensure cross-platform portability without per-device builds.
  - Progressive enhancement and caching mitigate network variability.
- ### Applications
  - Software-as-a-service products delivered entirely through the browser.
  - Collaborative editing and real-time dashboards.
  - E-commerce and content platforms reaching any connected device.
  - Internal enterprise tools deployed without client installation.
- ### Relationships
  - enables:: [[REST API]]
  - enables:: [[User Interface]]
  - uses:: [[Ecmascript]]
  - uses:: [[HTTP]]
  - uses:: [[CSS]]
  - uses:: [[HTML]]
  - dependsOn:: [[Web Standards]]
  - dependsOn:: [[HTTP]]
  - implements:: [[Web Standards]]
  - requires:: [[Compute Infrastructure]]
  - relatedTo:: [[API]]
  - relatedTo:: [[User Interface Standard]]
  - relatedTo:: [[W3C]]
  - partOf:: [[Infrastructure]]
  - bridgesTo:: [[DevOps]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
