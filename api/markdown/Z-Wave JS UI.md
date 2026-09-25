Z-Wave JS UI is an open-source application that wraps the Z-Wave JS driver to manage a Z-Wave mesh network of smart-home devices through a web interface and to bridge it to home-automation platforms via MQTT. It handles device inclusion, configuration, firmware updates, and network healing, exposing Z-Wave nodes as controllable entities. It matters as a primary integration path between Z-Wave hardware and Home Assistant.

### Content

- Built on the Z-Wave JS driver, it provides a web UI for including and configuring devices, monitoring network topology, applying firmware updates, and healing the mesh. It can run as a Home Assistant add-on or standalone container, publishing device state and accepting commands over MQTT or a WebSocket server consumed by the Z-Wave JS integration.

