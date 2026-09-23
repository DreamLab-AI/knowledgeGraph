
A mesh network is a network topology in which each node relays data for the network, cooperating to distribute information so that traffic can take multiple paths between source and destination. Mesh networks self-organise and self-heal: when a link or node fails, traffic is rerouted around the fault without manual reconfiguration. They are widely used in wireless sensor networks, smart-home protocols, and community and industrial deployments where infrastructure-free, resilient connectivity is required.

- ### Overview
  - Mesh networks contrast with star and bus topologies by removing the single central point of dependency. In a full mesh every node connects to every other; in the more common partial mesh, nodes connect to several neighbours and forward traffic on behalf of others. Wireless mesh networks have become especially prominent because they extend coverage without wiring and tolerate the unreliable links typical of radio environments.

- ### Mechanisms
  - Multi-hop forwarding: packets traverse intermediate nodes, allowing networks to span distances far greater than any single radio link.
  - Self-organisation: nodes discover neighbours and establish routes automatically, so the network forms without centralised planning.
  - Self-healing: routing protocols detect failed links and converge on alternative paths, preserving connectivity under node churn.
  - Routing protocols: distance-vector, link-state, and gradient-based schemes balance overhead, convergence speed, and energy use, which matters for battery-powered nodes.

- ### Applications
  - Smart-home device networks using Zigbee, Z-Wave, and Thread, where low-power devices relay traffic for one another.
  - Wireless sensor networks for environmental, industrial, and agricultural monitoring across wide areas.
  - Community and municipal networks that provide resilient connectivity without centralised infrastructure.
  - Edge and IoT deployments requiring local resilience and reduced dependence on backhaul links.

- ### Provenance

