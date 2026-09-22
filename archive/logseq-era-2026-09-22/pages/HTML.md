public:: true

# HTML
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:html",
  "@type": "Page",
  "title": "HTML",
  "vc:slug": "html",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:html",
  "@type": "Class",
  "label": "HTML",
  "definition": "HTML (HyperText Markup Language) is the standard markup language for creating and structuring documents and applications on the World Wide Web. It uses a system of nested elements and attributes to describe the semantic structure of content such as headings, paragraphs, links, images, and interactive controls. Web browsers parse HTML into a document object model that is rendered visually and made accessible to assistive technologies and scripts.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards",
      "label": "Standards"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:user-interface",
        "label": "User Interface"
      },
      {
        "@id": "urn:ngm:class:accessibility",
        "label": "Accessibility"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:xml",
        "label": "XML"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:css",
        "label": "CSS"
      },
      {
        "@id": "urn:ngm:class:web-browser",
        "label": "Web Browser"
      },
      {
        "@id": "urn:ngm:class:semantic-web",
        "label": "Semantic Web"
      },
      {
        "@id": "urn:ngm:class:progressive-web-app",
        "label": "Progressive Web App"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:accessibility",
        "label": "Accessibility"
      },
      {
        "@id": "urn:ngm:class:user-interface",
        "label": "User Interface"
      },
      {
        "@id": "urn:ngm:class:rendering-engine",
        "label": "Rendering Engine"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "enables": [
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
  - HTML (HyperText Markup Language) is the standard markup language for creating and structuring documents and applications on the World Wide Web. It uses a system of nested elements and attributes to describe the semantic structure of content such as headings, paragraphs, links, images, and interactive controls. Web browsers parse HTML into a document object model that is rendered visually and made accessible to assistive technologies and scripts.
  - Related concepts: [[CSS]] [[Web Browser]] [[Rendering Engine]] [[Accessibility]]
- ### Overview
  - HTML is the foundational layer of the open web platform, working alongside CSS for presentation and scripting for behaviour. Its design favours graceful degradation: browsers ignore elements and attributes they do not understand rather than failing, which has allowed the language to evolve continuously while preserving compatibility with older documents. Successive revisions have added native multimedia, semantic sectioning elements, and rich form controls.
- ### Key aspects
  - Documents are trees of nested elements delimited by tags and qualified by attributes.
  - Semantic elements convey the meaning of content to browsers, search engines, and assistive technologies.
  - Browsers parse HTML into a Document Object Model that scripts and styles can manipulate.
  - The language is designed for robustness, tolerating malformed markup through well-defined error recovery.
- ### Applications
  - Structuring web pages and web application interfaces.
  - Embedding multimedia, forms, and interactive controls natively.
  - Conveying document semantics for accessibility and search indexing.
  - Serving as the rendering target for templating and frontend frameworks.
- ### Relationships
  - subClassOf:: [[Standards]]
  - hasPart:: [[User Interface]]
  - hasPart:: [[Accessibility]]
  - contrastsWith:: [[XML]]
  - relatedTo:: [[CSS]]
  - relatedTo:: [[Web Browser]]
  - relatedTo:: [[Semantic Web]]
  - relatedTo:: [[Progressive Web App]]
  - uses:: [[Standards]]
  - supports:: [[Accessibility]]
  - supports:: [[User Interface]]
  - supports:: [[Rendering Engine]]
  - standardizedBy:: [[Standards]]
  - standardizedBy:: [[Interoperability]]
  - enables:: [[Interoperability]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
