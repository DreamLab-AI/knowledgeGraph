public:: true

# Hateoas
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:hateoas", "@type":"Page", "title":"Hateoas", "vc:slug":"hateoas", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:hateoas",
  "@type":"Class",
  "label":"Hateoas",
  "definition":"HATEOAS, hypermedia as the engine of application state, is the REST constraint requiring that a client interact with an application entirely through hypermedia links and controls supplied dynamically by the server in its responses. Rather than hard-coding endpoint structures, the client discovers available actions and transitions at runtime by following links the server provides, mirroring how a browser navigates the web. This constraint decouples clients from fixed URI schemes and is the distinguishing feature of a fully RESTful, self-describing API.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:rest","label":"REST"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:rest","label":"REST"}],
    "implements":[{"@id":"urn:ngm:class:rest","label":"REST"}],
    "hasPart":[{"@id":"urn:ngm:class:http","label":"HTTP"}],
    "uses":[{"@id":"urn:ngm:class:http","label":"HTTP"}],
    "requires":[{"@id":"urn:ngm:class:client-server-architecture","label":"Client-Server Architecture"}],
    "supports":[{"@id":"urn:ngm:class:api-design","label":"API Design"},{"@id":"urn:ngm:class:interoperability","label":"Interoperability"}],
    "enables":[{"@id":"urn:ngm:class:interoperability","label":"Interoperability"}],
    "dependsOn":[{"@id":"urn:ngm:class:web-standards","label":"Web Standards"}],
    "relatedTo":[{"@id":"urn:ngm:class:api-design","label":"API Design"},{"@id":"urn:ngm:class:web-standards","label":"Web Standards"},{"@id":"urn:ngm:class:http","label":"HTTP"}],
    "bridgesTo":[{"@id":"urn:ngm:class:client-server-architecture","label":"Client-Server Architecture"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - [[Hateoas]] is the [[REST]] constraint that drives application state through hypermedia links the server supplies in its responses.
  - Clients discover available actions at runtime by following links over [[HTTP]] rather than hard-coding URIs.
  - It is the distinguishing feature of a fully RESTful, self-describing [[API Design]].
- ### Overview
  - In a HATEOAS-compliant API, a response not only carries data but also the links and controls describing what the client may do next.
  - This mirrors web browsing: a person follows links discovered on each page rather than memorising URL structures.
  - Because transitions come from the server, clients tolerate URI changes and new capabilities without redeployment.
  - HATEOAS is the highest level of the Richardson maturity model for REST APIs.
- ### Key aspects
  - Hypermedia controls: links and forms embedded in representations define legal state transitions.
  - Runtime discovery: clients navigate the API by following links, not by prior knowledge of endpoints.
  - Decoupling: servers may evolve their URI space while clients keep working through link relations.
  - Self-description: media types and link relations make responses understandable without out-of-band documentation.
- ### Applications
  - Long-lived public APIs that must evolve without breaking existing clients.
  - Workflow and process APIs where available next steps depend on current resource state.
  - Hypermedia formats such as HAL, JSON:API and Siren that operationalise the constraint.
  - Service ecosystems prioritising loose coupling and discoverability.
- ### Relationships
  - partOf:: [[REST]]
  - implements:: [[REST]]
  - hasPart:: [[HTTP]]
  - uses:: [[HTTP]]
  - requires:: [[Client-Server Architecture]]
  - supports:: [[API Design]]
  - enables:: [[Interoperability]]
  - dependsOn:: [[Web Standards]]
  - relatedTo:: [[API Design]]
  - bridgesTo:: [[Client-Server Architecture]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
