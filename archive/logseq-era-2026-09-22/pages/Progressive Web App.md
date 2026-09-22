public:: true

# Progressive Web App

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:progressive-web-app",
  "@type": "Page",
  "title": "Progressive Web App",
  "vc:slug": "progressive-web-app",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:progressive-web-app",
  "@type": "Class",
  "label": "Progressive Web App",
  "definition": "A Progressive Web App (PWA) is a web application built with standard web technologies that delivers an app-like experience by being installable, working offline, and supporting capabilities such as background synchronisation and push notifications. PWAs use service workers and a web app manifest to bridge the gap between web pages and native mobile applications, allowing a single codebase to run across platforms. They are designed to be reliable on poor networks, fast to load, and engaging enough to live on a device home screen.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:web-technology",
      "label": "Web Technology"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:web-technology",
        "label": "Web Technology"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:user-experience",
        "label": "User Experience"
      },
      {
        "@id": "urn:ngm:class:digital-economy",
        "label": "Digital Economy"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:caching",
        "label": "Caching"
      },
      {
        "@id": "urn:ngm:class:web-standard",
        "label": "Web Standard"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:web-standard",
        "label": "Web Standard"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:user-experience",
        "label": "User Experience"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:web-standard",
        "label": "Web Standard"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:web-technology",
        "label": "Web Technology"
      },
      {
        "@id": "urn:ngm:class:caching",
        "label": "Caching"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:digital-economy",
        "label": "Digital Economy"
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
  - A [[Progressive Web App]] is built on [[Web Technology]] and [[Web Standard]].
  - It relies on [[Caching]] for offline reliability.
  - It improves [[User Experience]] across devices.
  - It supports [[Interoperability]] through open standards.
- ### Overview
  - PWAs combine the reach of the web with the engagement of native apps.
  - A service worker intercepts network requests to enable offline operation and resource caching.
  - A web app manifest describes how the app appears when installed on a device.
  - PWAs are progressively enhanced, degrading gracefully on older browsers.
- ### Key aspects
  - Service workers for offline support and background tasks.
  - Installability via a web app manifest and home-screen icons.
  - Responsive layouts that adapt to any viewport.
  - Secure delivery over HTTPS as a baseline requirement.
  - Re-engagement through push notifications.
- ### Applications
  - E-commerce storefronts needing fast, reliable mobile access.
  - News and media platforms delivering content offline.
  - Productivity tools requiring cross-platform reach without app-store friction.
  - Emerging-market services where bandwidth and storage are constrained.
- ### Relationships
  - partOf:: [[Web Technology]]
  - enables:: [[User Experience]]
  - enables:: [[Digital Economy]]
  - uses:: [[Caching]]
  - uses:: [[Web Standard]]
  - requires:: [[Web Standard]]
  - supports:: [[Interoperability]]
  - dependsOn:: [[Infrastructure]]
  - bridgesTo:: [[User Experience]]
  - standardizedBy:: [[Web Standard]]
  - relatedTo:: [[Web Technology]]
  - relatedTo:: [[Caching]]
  - relatedTo:: [[Interoperability]]
  - relatedTo:: [[Digital Economy]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
