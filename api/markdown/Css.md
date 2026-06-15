public:: true

# Css

```json
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:css", "@type": "Page", "title": "Css", "vc:slug": "css", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:css",
  "@type": "Class",
  "label": "Css",
  "definition": "Cascading Style Sheets (CSS) is the standard language for describing the presentation of documents written in markup languages such as HTML, controlling layout, colour, typography and responsive behaviour. It separates content from presentation, with rules that cascade and inherit according to specificity and source order. Maintained as a family of W3C specifications, CSS is a foundational web technology alongside HTML and JavaScript.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:web-standard",
      "label": "Web Standard"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:web-standard",
        "label": "Web Standard"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:accessibility",
        "label": "Accessibility"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3c",
        "label": "W3C"
      },
      {
        "@id": "urn:ngm:class:web-standard",
        "label": "Web Standard"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:html",
        "label": "HTML"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:html",
        "label": "HTML"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:accessibility",
        "label": "Accessibility"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:web-standard",
        "label": "Web Standard"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:html",
        "label": "HTML"
      },
      {
        "@id": "urn:ngm:class:web-standard",
        "label": "Web Standard"
      },
      {
        "@id": "urn:ngm:class:semantic-web",
        "label": "Semantic Web"
      },
      {
        "@id": "urn:ngm:class:accessibility",
        "label": "Accessibility"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:html",
        "label": "HTML"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:semantic-web",
        "label": "Semantic Web"
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
  - Cascading Style Sheets (CSS) is the standard language for describing the presentation of documents written in markup languages such as HTML, controlling layout, colour, typography and responsive behaviour. It separates content from presentation, with rules that cascade and inherit according to specificity and source order. Maintained as a family of W3C specifications, CSS is a foundational web technology alongside HTML and JavaScript.
  - Related concepts: [[Web Standard]], [[Accessibility]], [[W3C]], [[HTML]], [[Semantic Web]]
- ### Overview
  - CSS is the presentation layer of the web platform. By decoupling how a document looks from what it contains, it enables a single body of content to be styled consistently across pages, themed, and adapted responsively to different devices and accessibility needs.
- ### Key aspects
  - The cascade, specificity and inheritance that resolve competing rules
  - Box model, flexbox and grid layout systems
  - Responsive design via media queries and fluid units
  - Separation of presentation from semantic markup
- ### Applications
  - Styling and theming of web pages and applications
  - Responsive and adaptive layouts across devices
  - Design systems and component libraries
  - Accessible, readable typography and colour
- ### Relationships
  - subClassOf:: [[Web Standard]]
  - partOf:: [[Web Standard]]
  - hasPart:: [[Accessibility]]
  - standardizedBy:: [[W3C]]
  - standardizedBy:: [[Web Standard]]
  - uses:: [[HTML]]
  - requires:: [[HTML]]
  - enables:: [[Accessibility]]
  - supports:: [[Web Standard]]
  - relatedTo:: [[HTML]]
  - relatedTo:: [[Web Standard]]
  - relatedTo:: [[Semantic Web]]
  - relatedTo:: [[Accessibility]]
  - contrastsWith:: [[HTML]]
  - bridgesTo:: [[Semantic Web]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - generatedAt:: 2026-06-15T00:00:00Z
  - updated:: 2026-06-15
