# Recap & Practice

## Recap

- **Layers**: TCP/IP has four layers. "Layer 4" means connections and ports. "Layer 7" means HTTP-aware.
- **TCP vs UDP**: TCP is reliable and ordered, with flow and congestion control. UDP is bare datagrams.
- **DNS**: a cached, hierarchical lookup (root, TLD, authoritative). TTL decides how fast changes spread.
- **HTTP**: semantics stay the same. HTTP/2 multiplexes on TCP. HTTP/3 uses QUIC over UDP and removes TCP head-of-line blocking.
- **TLS**: gives privacy, integrity and server identity. Certificates are getting shorter-lived, so automate renewal.
- **API styles**: REST for public and cacheable, gRPC for internal and typed, GraphQL for flexible client queries.
- **Real-time**: SSE for one-way streams such as LLM tokens. WebSocket for two-way. Long polling as a fallback.
- **Edge of the system**: load balancers (L4 or L7) spread traffic, CDNs cache near users, and gateways apply policies and rate limits with a token bucket.

## Practice questions

1. A user in Chennai opens your app. List every network step from typing the URL to seeing the first byte. *Hint: DNS, TCP or QUIC handshake, TLS, HTTP request, possibly CDN and load balancer.*
2. Why does HTTP/2 still suffer from head-of-line blocking, and how does HTTP/3 fix it? *Hint: one TCP connection, one lost packet; QUIC streams are independent.*
3. You are designing a chat assistant that streams answers. SSE or WebSocket, and why? When would you switch? *Hint: one-way token flow, plain HTTP; switch for two-way audio or collaboration.*
4. Design rate limiting for a public LLM API used by thousands of tenants. *Hint: token bucket per API key, limits on input and output tokens, 429 with Retry-After, shared counters.*
5. Your service moves to a new region. DNS TTL is 24 hours. What goes wrong, and what should you have done? *Hint: caches keep old answers; lower the TTL before the move.*
6. When would you choose an L4 over an L7 load balancer, and when would you use both? *Hint: static IP and raw speed versus path-based routing and TLS termination.*

## Sources

- RFC 9293, Transmission Control Protocol: https://www.rfc-editor.org/rfc/rfc9293.html
- RFC 768, User Datagram Protocol: https://www.rfc-editor.org/rfc/rfc768
- RFC 5681, TCP Congestion Control: https://www.rfc-editor.org/rfc/rfc5681.html
- RFC 1122, Requirements for Internet Hosts: https://www.rfc-editor.org/rfc/rfc1122.html
- OSI model overview (Wikipedia): https://en.wikipedia.org/wiki/OSI_model
- RFC 1034 and RFC 1035, Domain Names: https://www.rfc-editor.org/rfc/rfc1034.html and https://www.rfc-editor.org/rfc/rfc1035.html
- RFC 3596, DNS Extensions for IPv6 (AAAA): https://www.rfc-editor.org/rfc/rfc3596.html
- RFC 8484, DNS over HTTPS: https://www.rfc-editor.org/rfc/rfc8484.html
- Amazon Route 53 routing policies: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html
- RFC 9112, HTTP/1.1: https://www.rfc-editor.org/rfc/rfc9112.html
- RFC 9113, HTTP/2: https://www.rfc-editor.org/rfc/rfc9113.html
- RFC 9114, HTTP/3: https://www.rfc-editor.org/rfc/rfc9114.html
- RFC 9000, QUIC: https://www.rfc-editor.org/rfc/rfc9000.html
- RFC 8446, TLS 1.3: https://www.rfc-editor.org/rfc/rfc8446.html
- RFC 7301, ALPN: https://www.rfc-editor.org/rfc/rfc7301.html
- MDN, Transport Layer Security: https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security
- CA/Browser Forum, Ballot SC081v3: https://cabforum.org/2025/04/11/ballot-sc081v3-introduce-schedule-of-reducing-validity-and-data-reuse-periods/
- Fielding, REST dissertation chapter 5: https://roy.gbiv.com/pubs/dissertation/rest_arch_style.htm
- MDN, HTTP request methods: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods
- gRPC core concepts: https://grpc.io/docs/what-is-grpc/core-concepts/
- gRPC over HTTP/2 protocol: https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md
- GraphQL specification versions: https://spec.graphql.org/
- GraphQL, Serving over HTTP: https://graphql.org/learn/serving-over-http/
- GraphQL, Performance: https://graphql.org/learn/performance/
- RFC 6202, Long polling: https://www.rfc-editor.org/rfc/rfc6202.html
- RFC 6455, WebSocket: https://www.rfc-editor.org/rfc/rfc6455.html
- WHATWG HTML, Server-sent events: https://html.spec.whatwg.org/multipage/server-sent-events.html
- MDN, Using server-sent events: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
- Anthropic, Streaming messages: https://platform.claude.com/docs/en/build-with-claude/streaming
- AWS, Elastic Load Balancing features: https://aws.amazon.com/elasticloadbalancing/features/
- nginx, HTTP load balancing: https://nginx.org/en/docs/http/load_balancing.html
- MDN, CDN glossary: https://developer.mozilla.org/en-US/docs/Glossary/CDN
- Cloudflare, Default cache behaviour: https://developers.cloudflare.com/cache/concepts/default-cache-behavior/
- RFC 9111, HTTP Caching: https://www.rfc-editor.org/rfc/rfc9111.html
- AWS, What is Amazon API Gateway: https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html
- AWS, Throttle requests in API Gateway: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html
- RFC 6585, 429 Too Many Requests: https://www.rfc-editor.org/rfc/rfc6585.html
- IETF draft, RateLimit header fields: https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers/
- Anthropic, Rate limits: https://platform.claude.com/docs/en/api/rate-limits
