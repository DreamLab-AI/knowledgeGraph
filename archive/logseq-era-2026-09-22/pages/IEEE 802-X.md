public:: true

# IEEE 802-X
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ieee-802-x",
  "@type": "Page",
  "vc:slug": "ieee-802-x",
  "title": "IEEE 802-X",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ieee-802-x",
  "@type": "Class",
  "label": "IEEE 802-X",
  "definition": "IEEE 802 is the family of IEEE standards governing local area, metropolitan area, and personal area networks, defining the physical and data-link layers for technologies such as Ethernet (802.3), Wi-Fi (802.11), and low-rate wireless PANs (802.15.4). The suite standardises framing, medium access control, and addressing so that heterogeneous equipment can interoperate. It forms the backbone of most wired and wireless networking in use today.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:ieee-802-15-4", "label": "IEEE 802.15.4"}],
    "hasPart": [{"@id": "urn:ngm:class:ieee-802-15-4", "label": "IEEE 802.15.4"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - IEEE 802-X is the standards family covering LAN, MAN, and PAN networking, encompassing sub-standards such as [[IEEE 802.15.4]] for low-rate wireless networks.
- ### Content
  - The 802 working groups partition the data-link layer into logical link control and medium access control sublayers, with each numbered standard addressing a specific medium or topology. This modularity lets new physical layers be added while preserving a common framing and addressing model across the family.
