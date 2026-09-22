public:: true

# World Wide Web Consortium
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:world-wide-web-consortium", "@type":"Page", "title":"World Wide Web Consortium", "vc:slug":"world-wide-web-consortium", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:world-wide-web-consortium",
  "@type": "Class",
  "label": "World Wide Web Consortium",
  "definition": "The World Wide Web Consortium (W3C) is the principal international standards organisation for the World Wide Web, founded in 1994 by Tim Berners-Lee to develop interoperable technical specifications and guidelines. Through a consensus process its member organisations and working groups produce Recommendations covering core web technologies such as HTML, CSS, the Document Object Model, and accessibility, as well as Semantic Web standards including RDF, OWL, and SPARQL. The W3C promotes a single, open, royalty-free Web that is accessible, secure, and consistent across browsers and devices.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards-body",
      "label": "Standards Body"
    }
  ],
  "relations": {
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3c-recommendation-process",
        "label": "W3C Recommendation Process"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:working-group",
        "label": "Working Group"
      },
      {
        "@id": "urn:ngm:class:web-accessibility-initiative",
        "label": "Web Accessibility Initiative"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:internet-governance",
        "label": "Internet Governance"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:consensus-standardisation",
        "label": "Consensus Standardisation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:web-standards",
        "label": "Web Standards"
      },
      {
        "@id": "urn:ngm:class:semantic-web",
        "label": "Semantic Web"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:web-interoperability",
        "label": "Web Interoperability"
      },
      {
        "@id": "urn:ngm:class:web-accessibility",
        "label": "Web Accessibility"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:html",
        "label": "HTML"
      },
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:open-standard",
        "label": "Open Standard"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-identifiers",
        "label": "Decentralised Identifiers"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:proprietary-standard",
        "label": "Proprietary Standard"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:internet-engineering-task-force",
        "label": "Internet Engineering Task Force"
      },
      {
        "@id": "urn:ngm:class:digital-identity-standards",
        "label": "Digital Identity Standards"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:w3c",
      "label": "W3C"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - The [[World Wide Web Consortium]] is the principal [[Standards Body]] for the Web, developing royalty-free [[Web Standards]] such as [[HTML]] and Semantic Web specifications including [[RDF]]. It enables [[Web Interoperability]] and [[Web Accessibility]] through a consensus process.

- ### Overview
  - Founded by Tim Berners-Lee in 1994, the W3C coordinates the technical evolution of the Web. Member organisations — browser vendors, technology companies, universities, and public bodies — participate in working groups that draft specifications, which advance through Working Drafts and Candidate Recommendations to the status of W3C Recommendation, the consortium's mark of a stable, interoperable standard.
  - The W3C's remit spans the foundational presentation and document model of the Web (HTML, CSS, DOM), accessibility through the Web Content Accessibility Guidelines, and the Semantic Web stack of RDF, RDFS, OWL, and SPARQL. More recently it has standardised decentralised identifiers and verifiable credentials, extending its identity and trust work relevant to security.

- ### Key aspects
  - Consensus-driven, member-based standardisation process.
  - Royalty-free patent policy ensuring open implementation.
  - Coverage from core web markup to Semantic Web and identity.
  - Strong emphasis on accessibility and internationalisation.

- ### Applications
  - Cross-browser interoperability of web content and applications.
  - Accessible web design conforming to WCAG.
  - Decentralised identity systems using DIDs and verifiable credentials.

- ### Relationships
  - subClassOf:: [[Standards Body]]
  - standardizedBy:: [[W3C Recommendation Process]]
  - hasPart:: [[Working Group]]
  - hasPart:: [[Web Accessibility Initiative]]
  - partOf:: [[Internet Governance]]
  - implements:: [[Consensus Standardisation]]
  - supports:: [[Web Standards]]
  - supports:: [[Semantic Web]]
  - enables:: [[Web Interoperability]]
  - uses:: [[HTML]]
  - uses:: [[RDF]]
  - bridgesTo:: [[Decentralised Identifiers]]
  - bridgesTo:: [[Verifiable Credentials]]
  - relatedTo:: [[Internet Engineering Task Force]]
  - relatedTo:: [[Digital Identity Standards]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
