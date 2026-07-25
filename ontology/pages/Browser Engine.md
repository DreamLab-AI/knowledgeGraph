public:: true

# Browser Engine
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:browser-engine",
  "@type": "Page",
  "title": "Browser Engine",
  "vc:slug": "browser-engine",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:browser-engine",
  "@type": "Class",
  "label": "Browser Engine",
  "definition": "A browser engine is the software component that parses and renders web content, implementing the HTML, CSS and JavaScript execution semantics defined by web standards to turn markup and script into an interactive display. Examples include Blink, Gecko and WebKit, each of which independently implements the same standards with varying levels of conformance and performance. Browser engines form the runtime substrate on which web applications, and automated agents that operate a browser, ultimately depend.",
  "domain": "standards",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:runtime-environment",
      "label": "Runtime Environment"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:runtime-environment",
        "label": "Runtime Environment"
      }
    ]
  },
  "quality": 0.65
}
```

- ### Definition
  - A browser engine is the software component that parses and renders web content, implementing the HTML, CSS and JavaScript execution semantics defined by web standards to turn markup and script into an interactive display.
  - It is a subclass of [[Runtime Environment]].
- ### Content
  - A browser engine is the software component that parses and renders web content, implementing the HTML, CSS and JavaScript execution semantics defined by web standards to turn markup and script into an interactive display. Examples include Blink, Gecko and WebKit, each of which independently implements the same standards with varying levels of conformance and performance. Browser engines form the runtime substrate on which web applications, and automated agents that operate a browser, ultimately depend.
