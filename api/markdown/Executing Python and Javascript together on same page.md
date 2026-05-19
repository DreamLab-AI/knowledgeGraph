public:: true

# Executing Python and Javascript together on same page
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1c576f9e7f3652c1740412f5247b50809b5ab5565f14d3a4fafad6d2a152b2af",
  "@type": "Page",
  "vc:slug": "executing-python-and-javascript-together-on-same-page",
  "title": "Executing Python and Javascript together on same page",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Executing Python and Javascript together on same page"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```



```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:executing-python-and-javascript-together-on-same-page:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1c576f9e7f3652c1740412f5247b50809b5ab5565f14d3a4fafad6d2a152b2af"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Executing Python and Javascript together on same page is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:ExecutingPythonAndJavascriptTogetherOnSamePage
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - Code
  - {{runpage}}
  - ```javascript
	  logseq.can_run = "java?";
  - ```javascript
	  logseq.can_run = logseq.kits.pyfun("script");
  - ```javascript
	  alert("Logseq can edit & run: clojure & " + logseq.can_run + " & r-language");

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
