public:: true

# WAI-ARIA

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:wai-aria", "@type":"Page", "title":"WAI-ARIA", "vc:slug":"wai-aria", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:wai-aria",
  "@type":"Class",
  "label":"WAI-ARIA",
  "definition":"WAI-ARIA (Web Accessibility Initiative Accessible Rich Internet Applications) is a W3C technical specification that defines a set of HTML attributes for roles, states, and properties, enabling assistive technologies such as screen readers to correctly interpret dynamic web content and custom user-interface widgets. It supplements native HTML semantics where markup alone cannot convey a component's purpose or current state, for example custom sliders, tab panels, and live regions. WAI-ARIA is a foundational standard underpinning modern web accessibility conformance.",
  "domain":"standards",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:accessibility","label":"Accessibility"}],
  "relations":{
    "uses":[],
    "enables":[
      {"@id":"urn:ngm:class:accessibility","label":"Accessibility"}
    ],
    "requires":[],
    "partOf":[]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- WAI-ARIA (Web Accessibility Initiative Accessible Rich Internet Applications) is a W3C technical specification that defines a set of HTML attributes for roles, states, and properties, enabling assistive technologies such as screen readers to correctly interpret dynamic web content and custom user-interface widgets. It supplements native HTML semantics where markup alone cannot convey a component's purpose or current state, for example custom sliders, tab panels, and live regions. WAI-ARIA is a foundational standard underpinning modern web accessibility conformance.
- ### Relationships
	- subClassOf:: [[Accessibility]]
	- enables:: [[Accessibility]]
