public:: true

# Additive Manufacturing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:additive-manufacturing",
  "@type": "Page",
  "vc:slug": "additive-manufacturing",
  "title": "Additive Manufacturing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:additive-manufacturing",
  "@type": "Class",
  "label": "Additive Manufacturing",
  "definition": "Additive manufacturing (AM) is a family of processes that construct three-dimensional objects by depositing, sintering, or photopolymerising material layer by layer from a digital design file, in contrast to subtractive methods that remove material from a solid block. Processes include fused deposition modelling, selective laser sintering, stereolithography, binder jetting, and directed energy deposition, each suited to particular materials and resolution requirements. AM enables on-demand production of complex geometries, personalised products, and distributed manufacturing without the tooling investment of conventional production.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:digital-fabrication", "label": "Digital Fabrication"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:cad-software", "label": "CAD Software"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:digital-fabrication", "label": "Digital Fabrication"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-twin-creation", "label": "Digital Twin Creation"},
      {"@id": "urn:ngm:class:computer-vision-system", "label": "Computer Vision System"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:collaborative-robotics", "label": "Collaborative Robotics"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Additive manufacturing encompasses a set of processes—collectively described under the ISO/ASTM 52900 standard—that build physical objects by joining material in successive layers under the direction of a [[CAD Software]]-derived digital model. The fundamental contrast with subtractive and formative manufacturing is that material is added only where the design requires it, reducing waste and enabling previously impossible internal geometries such as lattice structures and conformal cooling channels. Integration with [[Digital Twin]] platforms closes the loop between virtual design validation and physical production, enabling continuous process improvement.

- ### Relationships
  - Additive manufacturing is a core realisation of [[Digital Fabrication]], bridging digital design environments and physical artefacts. [[CAD Software]] is the primary upstream dependency, producing the STL or 3MF geometry files that slice into layer instructions. [[Digital Twin Creation]] pipelines increasingly use AM components, and in-process [[Computer Vision System]] monitoring enables real-time defect detection and closed-loop process control. AM contrasts with [[Collaborative Robotics]] in its mode of production but increasingly integrates with robotic systems for part handling and post-processing.

- ### Content
  - The origins of additive manufacturing lie in rapid prototyping technologies developed in the 1980s: stereolithography was patented by Chuck Hull (3D Systems) in 1984, fused deposition modelling by Scott Crump (Stratasys) in 1989, and selective laser sintering by Carl Deckard at the University of Texas in the same period. Initially confined to prototype model creation—hence the colloquial name "3D printing"—the technology expanded into functional part production during the 2000s as material properties and dimensional accuracy improved. ISO/ASTM 52900 (2015) standardised the taxonomy of seven AM process categories.

  - Technically, all AM processes share a workflow: digital design → mesh repair and optimisation → slicing (conversion to layer instructions) → material deposition or consolidation → post-processing (support removal, surface finishing, heat treatment). Process parameters such as layer height, scan speed, energy density, and build environment atmosphere critically determine material microstructure and mechanical performance. Polymer AM (FDM, SLA, SLS) dominates in volume, while metal AM (DMLS, EBM, DED) is transformative in aerospace, medical implants, and tooling for its ability to produce near-net-shape parts with internal features unrealisable by machining.

  - The application ecosystem spans aerospace (GE Aviation turbine blades, Airbus brackets), medical devices (personalised orthopaedic implants, dental crowns), automotive (Ford, BMW topology-optimised components), consumer electronics, architecture, and food. Distributed manufacturing models use AM to localise production closer to demand, reducing logistics costs and enabling mass customisation. The RepRap movement democratised desktop polymer printing, generating an open-source hardware ecosystem with millions of units deployed globally.

  - By 2024–2025, AI-driven topology optimisation and generative design tools (Autodesk Fusion, nTopology) are tightly integrated with AM workflows, automatically producing material-efficient geometries that traditional design methods would not explore. Multi-material and multi-process AM systems are enabling gradient material structures and embedded electronics. Carbon's continuous liquid interface production (CLIP) and HP's Multi Jet Fusion have demonstrated industrial throughput. Sustainability considerations—including powder recyclability, energy consumption, and bio-based material feedstocks—are driving standards development and regulatory scrutiny as AM scales into mainstream manufacturing.

