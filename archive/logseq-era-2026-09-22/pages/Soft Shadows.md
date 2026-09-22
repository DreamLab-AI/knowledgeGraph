public:: true

# Soft Shadows

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:soft-shadows", "@type":"Page", "title":"Soft Shadows", "vc:slug":"soft-shadows", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:soft-shadows",
  "@type":"Class",
  "label":"Soft Shadows",
  "definition":"Soft shadows are shadows with a graduated penumbra rather than a single hard edge, produced when a light source has physical area rather than being an idealised point. Rendering them requires sampling multiple points across the light's surface, or approximating the effect with techniques such as percentage-closer soft shadows, variance shadow maps, or area-light ray tracing. They are a significant contributor to perceived realism in rendered scenes because hard-edged shadows are rare under natural lighting conditions. Real-time soft shadow techniques trade accuracy for performance, while offline and ray-traced renderers can compute them with physically accurate light transport as part of global illumination.",
  "domain":"spatial-computing",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:shadow-mapping","label":"Shadow Mapping"}],
  "relations":{}
}
```

- ### Definition
	- Soft shadows are shadows with a graduated penumbra rather than a single hard edge, produced when a light source has physical area rather than being an idealised point. Rendering them requires sampling multiple points across the light's surface, or approximating the effect with techniques such as percentage-closer soft shadows, variance shadow maps, or area-light ray tracing. They are a significant contributor to perceived realism in rendered scenes because hard-edged shadows are rare under natural lighting conditions. Real-time soft shadow techniques trade accuracy for performance, while offline and ray-traced renderers can compute them with physically accurate light transport as part of global illumination.
- ### Relationships
	- subClassOf:: [[Shadow Mapping]]
