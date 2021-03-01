---
title: Serverless Compute Manifesto
tags:
- serverless
- manifesto
- aws
- cloud
thumbnail: /images/serverless-manifesto.png
---

While updating and preparing my _"Serverless (Web/Microservice) Architectures"_ slides for upcoming conference talks, I stumbled upon the **Serverless Compute Manifesto**, which was introduced during 2016 at various conferences by AWS people. I didn't find a unique source, but a dedicated [Google search](https://www.google.de/search?q=serverless%20compute%20manifesto) shows some interesting entries!

The full manifesto:

## Serverless Compute Manifesto

- Functions are the unit of deployment and scaling.
- No machines, VMs, or containers visible in the programming model.
- Permanent storage lives elsewhere.
- Scales per request. Users cannot over- or under-provision capacity.
- Never pay for idle (no cold servers/containers or their costs).
- Implicitly fault-tolerant because functions can run anywhere.
- BYOC - Bring Your Own Code.
- Metrics and logging are a universal right.
