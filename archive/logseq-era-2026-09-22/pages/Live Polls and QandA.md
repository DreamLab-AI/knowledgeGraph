public:: true

# Live Polls and QandA
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-live-polls-and-qanda",
  "@type": "Page",
  "vc:slug": "live-polls-and-qanda",
  "title": "Live Polls and QandA",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:live-polls-and-qanda",
  "@type": "Class",
  "label": "Live Polls and QandA",
  "definition": "Live polls and Q&A are interactive audience-engagement features embedded in virtual meetings and webinars that allow participants to submit questions and vote on answer options in real time. Polls provide immediate quantitative feedback and gauge audience sentiment, while Q&A queues enable structured moderation of participant questions. Together they transform passive viewing into participatory events, increasing engagement across distributed audiences.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-communication", "label": "Communication Technology"}
  ],
  "relations": {
    "enables": [{"@id": "urn:ngm:class:audience-engagement", "label": "Audience Engagement"}],
    "relatedTo": [
      {"@id": "urn:ngm:class:webinar-broadcast", "label": "Webinar Broadcast"},
      {"@id": "urn:ngm:class:group-chat-channel", "label": "Group Chat Channel"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - Interactive real-time features in virtual events that let participants vote on poll questions and submit moderated queries, converting passive audiences into active contributors.
