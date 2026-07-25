public:: true

# Reproducible Builds

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:reproducible-builds", "@type":"Page", "title":"Reproducible Builds", "vc:slug":"reproducible-builds", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:reproducible-builds",
  "@type":"Class",
  "label":"Reproducible Builds",
  "definition":"Reproducible builds are a software build practice in which compiling the same source code under the same recorded conditions always yields bit-for-bit identical artifacts. By removing sources of non-determinism such as timestamps, build paths, and ordering, independent parties can verify that a published binary corresponds exactly to its claimed source. This independent verifiability strengthens software supply-chain security and trust in distributed binaries.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:supply-chain-security","label":"Supply Chain Security"}],
  "relations":{
    "enables":[{"@id":"urn:ngm:class:verification","label":"Verification"},{"@id":"urn:ngm:class:trust","label":"Trust"},{"@id":"urn:ngm:class:attestation","label":"Attestation"}],
    "supports":[{"@id":"urn:ngm:class:software-supply-chain","label":"Software Supply Chain"},{"@id":"urn:ngm:class:supply-chain-security","label":"Supply Chain Security"}],
    "hasPart":[{"@id":"urn:ngm:class:provenance","label":"Provenance"},{"@id":"urn:ngm:class:reproducibility","label":"Reproducibility"}],
    "requires":[{"@id":"urn:ngm:class:version-control","label":"Version Control"},{"@id":"urn:ngm:class:continuous-integration","label":"Continuous Integration"}],
    "uses":[{"@id":"urn:ngm:class:content-addressed-storage","label":"Content-Addressed Storage"},{"@id":"urn:ngm:class:hash-function","label":"Hash Function"}],
    "relatedTo":[{"@id":"urn:ngm:class:provenance","label":"Provenance"},{"@id":"urn:ngm:class:caching","label":"Caching"},{"@id":"urn:ngm:class:reproducibility","label":"Reproducibility"}],
    "dependsOn":[{"@id":"urn:ngm:class:continuous-integration","label":"Continuous Integration"}],
    "bridgesTo":[{"@id":"urn:ngm:class:attestation","label":"Attestation"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Reproducible Builds]] ensure that compiling the same source under the same recorded conditions always yields bit-for-bit identical artifacts.
- By eliminating non-determinism they let independent parties perform [[Verification]] that a binary matches its source, strengthening [[Trust]].
- The practice is a pillar of [[Supply Chain Security]] and the [[Software Supply Chain]].
- ### Overview
- A build is reproducible when any party, given the same source, dependencies, and a documented build environment, can regenerate the exact same output. Achieving this requires removing non-deterministic inputs such as embedded timestamps, absolute build paths, locale settings, and non-stable file or symbol ordering.
- The motivation is verifiable trust. Rather than trusting a single build server or publisher, downstream users and auditors can rebuild the software themselves and compare cryptographic hashes. If the hashes match, the binary provably corresponds to the audited source, closing a major supply-chain attack vector where compromised build infrastructure injects malicious code.
- Reproducible builds complement provenance and attestation efforts: provenance records how and from what an artifact was built, while reproducibility lets anyone independently confirm those claims. Content-addressed storage and hashing provide the comparison backbone, and continuous integration systems automate rebuild-and-compare checks.
- ### Mechanisms
- Determinism control: normalising timestamps, paths, environment, and ordering so output is invariant.
- Recorded build environment: pinning toolchain and dependency versions to make rebuilds faithful.
- Hash comparison: using cryptographic digests to confirm two builds are byte-identical.
- Independent rebuild: allowing third parties to regenerate and verify artifacts.
- Automated verification: integrating rebuild-and-compare steps into CI pipelines.
- ### Applications
- Verifying that distributed binaries match audited source in the [[Software Supply Chain]].
- Producing trustworthy [[Attestation]] and [[Provenance]] records for release artifacts.
- Detecting tampering in build infrastructure via [[Hash Function]] comparison.
- Enabling deterministic [[Caching]] and rebuilds within [[Continuous Integration]] systems.
- ### Relationships
- enables:: [[Verification]]
- enables:: [[Trust]]
- enables:: [[Attestation]]
- supports:: [[Software Supply Chain]]
- supports:: [[Supply Chain Security]]
- hasPart:: [[Provenance]]
- hasPart:: [[Reproducibility]]
- requires:: [[Version Control]]
- requires:: [[Continuous Integration]]
- uses:: [[Content-Addressed Storage]]
- uses:: [[Hash Function]]
- relatedTo:: [[Provenance]]
- relatedTo:: [[Caching]]
- relatedTo:: [[Reproducibility]]
- dependsOn:: [[Continuous Integration]]
- bridgesTo:: [[Attestation]]
- ### Provenance
- updated:: 2026-06-15
