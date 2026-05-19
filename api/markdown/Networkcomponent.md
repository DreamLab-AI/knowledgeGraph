schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/distributed-collaboration#Networkcomponent
legacy_uri:: urn:visionclaw:concept:distributed-collaboration:networkcomponent
public:: true

# Networkcomponent
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9a91056492ebd03e13e76392ca927c7eefa03f601ce46741e5bdd845b8711fe8",
  "@type": "Page",
  "vc:slug": "networkcomponent",
  "title": "Networkcomponent",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:configuration-management",
      "vc:label": "ConfigurationManagement"
    },
    {
      "@id": "urn:visionflow:linked:core-router",
      "vc:label": "CoreRouter"
    },
    {
      "@id": "urn:visionflow:linked:edge-router",
      "vc:label": "EdgeRouter"
    },
    {
      "@id": "urn:visionflow:linked:firewall",
      "vc:label": "Firewall"
    },
    {
      "@id": "urn:visionflow:linked:gateway",
      "vc:label": "Gateway"
    },
    {
      "@id": "urn:visionflow:linked:hub",
      "vc:label": "Hub"
    },
    {
      "@id": "urn:visionflow:linked:ipaddressing",
      "vc:label": "IPAddressing"
    },
    {
      "@id": "urn:visionflow:linked:load-balancer",
      "vc:label": "LoadBalancer"
    },
    {
      "@id": "urn:visionflow:linked:managed-switch",
      "vc:label": "ManagedSwitch"
    },
    {
      "@id": "urn:visionflow:linked:network-management",
      "vc:label": "NetworkManagement"
    },
    {
      "@id": "urn:visionflow:linked:network-monitoring",
      "vc:label": "NetworkMonitoring"
    },
    {
      "@id": "urn:visionflow:linked:osimodel",
      "vc:label": "OSIModel"
    },
    {
      "@id": "urn:visionflow:linked:router",
      "vc:label": "Router"
    },
    {
      "@id": "urn:visionflow:linked:snmp",
      "vc:label": "SNMP"
    },
    {
      "@id": "urn:visionflow:linked:switch",
      "vc:label": "Switch"
    },
    {
      "@id": "urn:visionflow:linked:unmanaged-switch",
      "vc:label": "UnmanagedSwitch"
    },
    {
      "@id": "urn:visionflow:linked:vlan",
      "vc:label": "VLAN"
    },
    {
      "@id": "urn:visionflow:linked:wireless-access-point",
      "vc:label": "WirelessAccessPoint"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure-domain",
      "vc:label": "InfrastructureDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:network-infrastructure",
      "vc:label": "NetworkInfrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:network-topology",
      "vc:label": "NetworkTopology"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "bridges-to",
      "vc:value": "[[DID Nostr Identity]]"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-8f2219f3abb7"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "distributed-collaboration"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/distributed-collaboration#Networkcomponent"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-7000"
    },
    {
      "vc:key": "maturity",
      "vc:value": "reviewed"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Networkcomponent"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:distributed-collaboration:networkcomponent"
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:distributed-collaboration:networkcomponent"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:9a91056492ebd03e13e76392ca927c7eefa03f601ce46741e5bdd845b8711fe8@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:networkcomponent",
  "@type": "Class",
  "label": "Networkcomponent",
  "definition": "Network Components are the physical and virtual hardware devices that comprise telecommunications and computer network infrastructure, enabling network connectivity, communication, and data routing between users, devices, applications, and the internet.",
  "domain": "distributed-collaboration",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-infrastructure",
      "label": "Network Infrastructure"
    }
  ],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:networkcomponent:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9a91056492ebd03e13e76392ca927c7eefa03f601ce46741e5bdd845b8711fe8"
  },
  "vc:resolutions": [
    {
      "raw": "[[ConfigurationManagement]]",
      "resolved": "urn:visionflow:linked:configuration-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[CoreRouter]]",
      "resolved": "urn:visionflow:linked:core-router",
      "kind": "StubLink"
    },
    {
      "raw": "[[EdgeRouter]]",
      "resolved": "urn:visionflow:linked:edge-router",
      "kind": "StubLink"
    },
    {
      "raw": "[[Firewall]]",
      "resolved": "urn:visionflow:linked:firewall",
      "kind": "StubLink"
    },
    {
      "raw": "[[Gateway]]",
      "resolved": "urn:visionflow:linked:gateway",
      "kind": "StubLink"
    },
    {
      "raw": "[[Hub]]",
      "resolved": "urn:visionflow:linked:hub",
      "kind": "StubLink"
    },
    {
      "raw": "[[IPAddressing]]",
      "resolved": "urn:visionflow:linked:ipaddressing",
      "kind": "StubLink"
    },
    {
      "raw": "[[LoadBalancer]]",
      "resolved": "urn:visionflow:linked:load-balancer",
      "kind": "StubLink"
    },
    {
      "raw": "[[ManagedSwitch]]",
      "resolved": "urn:visionflow:linked:managed-switch",
      "kind": "StubLink"
    },
    {
      "raw": "[[NetworkManagement]]",
      "resolved": "urn:visionflow:linked:network-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[NetworkMonitoring]]",
      "resolved": "urn:visionflow:linked:network-monitoring",
      "kind": "StubLink"
    },
    {
      "raw": "[[OSIModel]]",
      "resolved": "urn:visionflow:linked:osimodel",
      "kind": "StubLink"
    },
    {
      "raw": "[[Router]]",
      "resolved": "urn:visionflow:linked:router",
      "kind": "StubLink"
    },
    {
      "raw": "[[SNMP]]",
      "resolved": "urn:visionflow:linked:snmp",
      "kind": "StubLink"
    },
    {
      "raw": "[[Switch]]",
      "resolved": "urn:visionflow:linked:switch",
      "kind": "StubLink"
    },
    {
      "raw": "[[UnmanagedSwitch]]",
      "resolved": "urn:visionflow:linked:unmanaged-switch",
      "kind": "StubLink"
    },
    {
      "raw": "[[VLAN]]",
      "resolved": "urn:visionflow:linked:vlan",
      "kind": "StubLink"
    },
    {
      "raw": "[[WirelessAccessPoint]]",
      "resolved": "urn:visionflow:linked:wireless-access-point",
      "kind": "StubLink"
    },
    {
      "raw": "[[InfrastructureDomain]]",
      "resolved": "urn:visionflow:owl:class:infrastructure-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NetworkInfrastructure]]",
      "resolved": "urn:visionflow:owl:class:network-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NetworkTopology]]",
      "resolved": "urn:visionflow:owl:class:network-topology",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:9a91056492ebd03e13e76392ca927c7eefa03f601ce46741e5bdd845b8711fe8@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Network Components are the physical and virtual hardware devices that comprise telecommunications and computer network infrastructure, enabling network connectivity, communication, and data routing between users, devices, applications, and the internet. Core components include switches for local traffic routing, routers for inter-network packet forwarding, and firewalls for security enforcement, forming the foundation of modern digital communications.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:Networkcomponent
  - owl-role:: Concept
  - belongs-to-domain:: [[InfrastructureDomain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content

  - ### Core Components
  - [[Router]] - Directs packets between networks using routing algorithms
  - [[Switch]] - Routes traffic within LANs, full-duplex communication
  - [[Firewall]] - Security enforcement and traffic filtering
  - [[Hub]] - Basic network connectivity (legacy)
  - [[Gateway]] - Protocol translation between networks

  #### Related Concepts
  - [[NetworkInfrastructure]] - Overall infrastructure framework
  - [[NetworkTopology]] - Physical and logical network design
  - [[OSIModel]] - Network layer reference model
  - [[IPAddressing]] - Network addressing scheme
  - [[VLAN]] - Virtual network segmentation
  - [[LoadBalancer]] - Traffic distribution across servers

  - ### Component Types
  - [[ManagedSwitch]] - Configurable with SNMP monitoring
  - [[UnmanagedSwitch]] - Plug-and-play basic switching
  - [[EdgeRouter]] - Border routing and internet connectivity
  - [[CoreRouter]] - High-capacity backbone routing
  - [[WirelessAccessPoint]] - WiFi connectivity

  - ### Management
  - [[NetworkManagement]] - Configuration and monitoring
  - [[SNMP]] - Simple Network Management Protocol
  - [[ConfigurationManagement]] - Device configuration control
  - [[NetworkMonitoring]] - Performance and health tracking

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
