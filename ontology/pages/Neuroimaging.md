public:: true

# Neuroimaging

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:neuroimaging", "@type":"Page", "title":"Neuroimaging", "vc:slug":"neuroimaging", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:neuroimaging",
  "@type":"Class",
  "label":"Neuroimaging",
  "definition":"Neuroimaging is the set of techniques used to visualise the structure, function, or physiology of the nervous system, including magnetic resonance imaging (MRI and fMRI), positron emission tomography (PET), and electroencephalography (EEG). It provides the empirical measurements that cognitive science and cognitive psychology use to relate observed brain activity to mental processes such as perception, memory, and decision-making. Neuroimaging data increasingly feeds machine learning pipelines that decode cognitive states or diagnose neurological conditions from scan data.",
  "domain":"artificial-intelligence",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:neuroscience","label":"Neuroscience"}],
  "relations":{
    "uses":[],
    "enables":[
      {"@id":"urn:ngm:class:cognitive-science","label":"Cognitive Science"}
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
	- Neuroimaging is the set of techniques used to visualise the structure, function, or physiology of the nervous system, including magnetic resonance imaging (MRI and fMRI), positron emission tomography (PET), and electroencephalography (EEG). It provides the empirical measurements that cognitive science and cognitive psychology use to relate observed brain activity to mental processes such as perception, memory, and decision-making. Neuroimaging data increasingly feeds machine learning pipelines that decode cognitive states or diagnose neurological conditions from scan data.
- ### Relationships
	- subClassOf:: [[Neuroscience]]
	- enables:: [[Cognitive Science]]
