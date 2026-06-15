public:: true

# Version History
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-version-history",
  "@type": "Page",
  "vc:slug": "version-history",
  "title": "Version History",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:version-history",
  "@type": "Class",
  "label": "Version History",
  "definition": "Version History is a chronological record of all changes made to a shared document or workspace, capturing who made each change and when. It enables collaborators to review past states, compare diffs, and restore previous versions if an edit introduces errors. This audit trail is critical for accountability and safe experimentation in distributed teams.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-workspace-tools",
      "label": "Workspace Tools"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Change Audit Trail"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:live-co-authoring",
        "label": "Live Co-authoring"
      }
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - A chronological log of document changes with author attribution that lets teams audit edits and restore any prior state.
