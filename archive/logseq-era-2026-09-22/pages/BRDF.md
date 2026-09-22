public:: true

# BRDF
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:brdf",
  "@type": "Page",
  "vc:slug": "brdf",
  "title": "BRDF",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:brdf",
  "@type": "Class",
  "label": "BRDF",
  "definition": "A Bidirectional Reflectance Distribution Function (BRDF) is a function that defines how light is reflected at an opaque surface, giving the ratio of reflected radiance to incident irradiance for each pair of incoming and outgoing directions. It encodes material appearance such as diffuse, glossy, and specular behaviour and is the core of physically based shading. Renderers evaluate the BRDF at surface intersections to compute realistic light transport.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:rendering-technique", "label": "Rendering Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:ray-tracing", "label": "Ray Tracing"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A BRDF describes how a surface reflects light for every incoming and outgoing direction, providing the material model that [[Ray Tracing]] evaluates to produce realistic shading.
- ### Content
  - Physically based BRDFs obey energy conservation and reciprocity and combine diffuse and microfacet specular terms to model real materials. During ray tracing, the BRDF is sampled at each surface hit to weight reflected light and to importance-sample directions for Monte Carlo integration of the rendering equation.
