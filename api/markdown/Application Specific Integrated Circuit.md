public:: true

# Application Specific Integrated Circuit

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:application-specific-integrated-circuit", "@type":"Page", "title":"Application Specific Integrated Circuit", "vc:slug":"application-specific-integrated-circuit", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:application-specific-integrated-circuit",
  "@type":"Class",
  "label":"Application Specific Integrated Circuit",
  "definition":"An application-specific integrated circuit (ASIC) is a chip designed and fabricated to perform a single, fixed function with maximum efficiency rather than to run general-purpose programs. In blockchain, ASICs are built to compute a particular proof-of-work hash function at far higher speed and energy efficiency than general processors, making them dominant in mining for hashes such as SHA-256. Because the silicon is customised for one task, ASICs offer superior performance per watt but cannot be repurposed for other workloads.",
  "domain":"blockchain",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:mining-hardware","label":"Mining Hardware"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:mining","label":"Mining"}],
    "uses":[{"@id":"urn:ngm:class:cryptographic-hash-function","label":"Cryptographic Hash Function"},{"@id":"urn:ngm:class:sha-256","label":"SHA-256"}],
    "enables":[{"@id":"urn:ngm:class:proof-of-work","label":"Proof of Work"},{"@id":"urn:ngm:class:mining","label":"Mining"},{"@id":"urn:ngm:class:hardware-acceleration","label":"Hardware Acceleration"}],
    "requires":[{"@id":"urn:ngm:class:energy-consumption","label":"Energy Consumption"}],
    "implements":[{"@id":"urn:ngm:class:sha-256","label":"SHA-256"},{"@id":"urn:ngm:class:hardware-acceleration","label":"Hardware Acceleration"}],
    "supports":[{"@id":"urn:ngm:class:bitcoin","label":"Bitcoin"},{"@id":"urn:ngm:class:consensus-mechanism","label":"Consensus Mechanism"},{"@id":"urn:ngm:class:block-reward","label":"Block Reward"}],
    "relatedTo":[{"@id":"urn:ngm:class:mining-hardware","label":"Mining Hardware"},{"@id":"urn:ngm:class:gpu","label":"GPU"}],
    "contrastsWith":[{"@id":"urn:ngm:class:fpga","label":"FPGA"},{"@id":"urn:ngm:class:gpu","label":"GPU"},{"@id":"urn:ngm:class:field-programmable-gate-array","label":"Field Programmable Gate Array"}]
  },
  "sameAs":[{"@id":"urn:ngm:class:asic","label":"ASIC"}],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- An [[Application Specific Integrated Circuit]] is a chip fabricated for one fixed function rather than general computation.
	- In blockchain it computes a specific [[Proof of Work]] hash, such as [[SHA-256]], with extreme efficiency.
	- ASICs dominate [[Mining]] because they offer unmatched performance per watt at the cost of flexibility.
- ### Overview
	- General processors trade efficiency for programmability; an ASIC instead bakes a single algorithm directly into silicon.
	- For proof-of-work mining, where the same hash is computed billions of times per second, this specialisation yields enormous gains in speed and energy efficiency.
	- The shift from CPUs to GPUs to FPGAs and finally to ASICs has repeatedly reshaped mining economics, concentrating capability among those who can deploy purpose-built hardware.
	- Because an ASIC cannot be reprogrammed, it becomes obsolete if the target algorithm changes, tying its value to a specific network.
- ### Key aspects
	- Fixed-function design: the circuit is optimised for one algorithm only.
	- Performance per watt: superior energy efficiency compared with general-purpose hardware.
	- Non-reconfigurability: the silicon cannot be repurposed once fabricated.
	- High design cost: custom fabrication requires substantial up-front investment.
	- Centralisation pressure: ASIC dominance can concentrate mining among well-capitalised operators.
- ### Mechanisms
	- The target hash function is implemented directly as dedicated logic gates rather than executed as software.
	- Massive parallel hashing pipelines maximise throughput for the proof-of-work search.
	- Power and thermal design are tuned around the single workload to minimise energy per hash.
- ### Applications
	- Mining [[Bitcoin]] and other [[SHA-256]] proof-of-work networks.
	- Securing networks by contributing hash power to a [[Consensus Mechanism]].
	- Competing for [[Block Reward]] issuance in [[Mining]] operations.
	- Serving as specialised [[Hardware Acceleration]] for fixed cryptographic workloads.
- ### Relationships
	- subClassOf:: [[Mining Hardware]]
	- partOf:: [[Mining]]
	- uses:: [[Cryptographic Hash Function]]
	- uses:: [[SHA-256]]
	- enables:: [[Proof of Work]]
	- enables:: [[Mining]]
	- enables:: [[Hardware Acceleration]]
	- requires:: [[Energy Consumption]]
	- implements:: [[SHA-256]]
	- implements:: [[Hardware Acceleration]]
	- supports:: [[Bitcoin]]
	- supports:: [[Consensus Mechanism]]
	- supports:: [[Block Reward]]
	- relatedTo:: [[Mining Hardware]]
	- relatedTo:: [[GPU]]
	- contrastsWith:: [[FPGA]]
	- contrastsWith:: [[GPU]]
	- contrastsWith:: [[Field Programmable Gate Array]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
