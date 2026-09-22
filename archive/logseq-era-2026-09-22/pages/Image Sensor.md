public:: true

# Image Sensor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:image-sensor",
  "@type": "Page",
  "vc:slug": "image-sensor",
  "title": "Image Sensor",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:image-sensor",
  "@type": "Class",
  "label": "Image Sensor",
  "definition": "An image sensor is a solid-state device that converts incident light into electrical signals to capture a digital image, typically implemented as a CMOS or CCD array of photodetector pixels. Each pixel accumulates charge proportional to received photons, which is read out, digitised, and assembled into a frame. Image sensors are the core capture element in cameras and many computer-vision and tracking systems.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sensor", "label": "Sensor"}],
  "relations": {
    "partOf": [{"@id": "urn:ngm:class:camera", "label": "Camera"}],
    "enables": [{"@id": "urn:ngm:class:eye-tracking", "label": "Eye Tracking"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - An image sensor converts light into a digital image and is the central capture component of a [[Camera]], also providing the raw input for techniques such as [[Eye Tracking]].
- ### Content
  - Modern CMOS sensors integrate the photodiode array with on-chip amplification and analogue-to-digital conversion, enabling high frame rates, low noise, and global or rolling shutter readout. Sensor characteristics such as resolution, pixel pitch, dynamic range, and spectral sensitivity directly determine the fidelity available to downstream vision algorithms.
