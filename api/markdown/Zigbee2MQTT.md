Zigbee2MQTT is an open-source bridge that connects Zigbee smart-home devices to MQTT, allowing them to be controlled independently of any proprietary vendor hub or cloud. Using an inexpensive Zigbee coordinator radio, it translates device messages into MQTT topics with a large database of supported devices. It matters as a vendor-neutral, locally controlled integration path for Zigbee hardware into platforms like Home Assistant.

### Content

- Running with a supported Zigbee coordinator dongle, it forms its own Zigbee network and exposes each device's state and commands as MQTT topics, drawing on an extensive community-maintained device database. This removes dependence on manufacturer bridges and cloud services, keeping automation entirely on the local network.

