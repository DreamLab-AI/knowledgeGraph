public:: true

# Webinar Broadcast
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-webinar-broadcast",
  "@type": "Page",
  "vc:slug": "webinar-broadcast",
  "title": "Webinar Broadcast",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:webinar-broadcast",
  "@type": "Class",
  "label": "Webinar Broadcast",
  "definition": "A webinar broadcast is a one-to-many online event in which one or more presenters stream audio and video to a large remote audience with limited bidirectional interaction. Participants typically engage through moderated Q&A, polls, and chat rather than direct audio or video contribution. Webinars are used for training, product launches, and large-scale knowledge dissemination across geographically distributed audiences.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-communication", "label": "Communication Technology"}
  ],
  "relations": {
    "enables": [{"@id": "urn:ngm:class:large-scale-knowledge-dissemination", "label": "Large-Scale Knowledge Dissemination"}],
    "relatedTo": [
      {"@id": "urn:ngm:class:live-polls-and-qanda", "label": "Live Polls and QandA"},
      {"@id": "urn:ngm:class:live-captions", "label": "Live Captions"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - A one-to-many streamed online event where presenters deliver content to a large remote audience who engage through moderated chat, polls, and Q&A rather than direct audio-video participation.
