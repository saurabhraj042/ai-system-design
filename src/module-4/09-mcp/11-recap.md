# Recap & Practice

This chapter followed MCP specification revision **2026-07-28**, the current one on modelcontextprotocol.io as of 2 November 2026.

## Recap

- MCP is an open standard that connects AI apps to tools and data. It turns many custom integrations into one shared protocol. It complements function calling and A2A.
- Roles: the **host** runs the LLM, creates one **client** per **server**, and enforces consent.
- Messages are JSON-RPC 2.0. The protocol is **stateless**: every request carries its version and capabilities in `_meta`. There is no `initialize` handshake, and servers must implement `server/discover`.
- Servers offer **tools** (model-controlled), **resources** (application-controlled) and **prompts** (user-controlled). Fixable tool failures use `isError: true`.
- Servers cannot send their own requests. They return `input_required`, and the client retries with answers. This is **MRTR**, used by elicitation. Sampling, Roots and Logging are deprecated.
- **stdio** is for local child processes. **Streamable HTTP** uses one POST per message, with mirrored headers and no sessions.
- Remote servers use OAuth: 401 with metadata link, PKCE, `resource` parameter, audience checks, no token passthrough, least-privilege scopes.
- Use `subscriptions/listen` for change alerts, `ttlMs` and `cacheScope` for caching, and the Tasks extension for long jobs.

## Practice questions

1. **A teammate says "MCP replaces function calling". How do you respond?** Hint: function calling is the model API feature that emits a tool call. MCP standardises how the app discovers and reaches tools behind it.
2. **Design a remote MCP server for an order-tracking service that must scale to many instances.** Hint: stateless requests, standard load balancer, OAuth with audience checks, explicit handles in a shared store, Tasks for slow jobs.
3. **Your tool needs the user's GitHub API key. How should the server collect it?** Hint: never use form-mode elicitation for secrets. Use URL mode so the key never passes through the client or model.
4. **An agent host is connected to 40 servers and the prompt is full of tool definitions. What do you do?** Hint: progressive discovery with a `search_tools` meta-tool, caching with `ttlMs`, and a stable tool order for prompt caching.
5. **What changed between the 2025-11-25 and 2026-07-28 revisions, and how does a new client talk to an old server?** Hint: no sessions or handshake, `server/discover`, MRTR, no GET stream. Probe with `server/discover` on stdio, or try a modern POST on HTTP and fall back to `initialize`.
6. **How would you stop a company's employees from connecting to random MCP servers?** Hint: Enterprise-Managed Authorization via the identity provider, an internal registry, sandboxed local servers, scope limits and audit logs.

## Sources

- MCP specification overview: https://modelcontextprotocol.io/specification
- Key Changes (2026-07-28): https://modelcontextprotocol.io/specification/2026-07-28/changelog
- Architecture: https://modelcontextprotocol.io/specification/2026-07-28/architecture
- Base protocol overview: https://modelcontextprotocol.io/specification/2026-07-28/basic
- Versioning and Compatibility: https://modelcontextprotocol.io/specification/2026-07-28/basic/versioning
- Streamable HTTP: https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/streamable-http
- stdio: https://modelcontextprotocol.io/specification/2026-07-28/basic/transports/stdio
- Multi Round-Trip Requests: https://modelcontextprotocol.io/specification/2026-07-28/basic/patterns/mrtr
- Subscriptions: https://modelcontextprotocol.io/specification/2026-07-28/basic/patterns/subscriptions
- Tools, Resources, Prompts, Discovery, Caching: https://modelcontextprotocol.io/specification/2026-07-28/server/tools (and `/resources`, `/prompts`, `/discover`, `/utilities/caching` under `/server/`)
- Elicitation: https://modelcontextprotocol.io/specification/2026-07-28/client/elicitation
- Authorization, Server Discovery, Client Registration: https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization (and `/authorization-server-discovery`, `/client-registration`)
- Security Best Practices: https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices
- MCP docs: intro, architecture, server concepts, versioning, SDKs: https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro (and `/learn/architecture`, `/learn/server-concepts`, `/learn/versioning`, `/sdk`)
- Build an MCP server and client best practices: https://modelcontextprotocol.io/docs/2026-07-28/develop/build-server (and `/develop/clients/client-best-practices`)
- Python SDK: https://github.com/modelcontextprotocol/python-sdk
- Tasks extension: https://modelcontextprotocol.io/extensions/tasks/overview
- Enterprise-Managed Authorization: https://modelcontextprotocol.io/extensions/auth/enterprise-managed-authorization
- MCP Registry: https://modelcontextprotocol.io/registry/about
- Governance, Feature Lifecycle, Roadmap: https://modelcontextprotocol.io/community/governance (and `/community/feature-lifecycle`, `/development/roadmap`)
- Anthropic, Introducing MCP (25 Nov 2024): https://www.anthropic.com/news/model-context-protocol
- Anthropic, donating MCP to the Agentic AI Foundation (9 Dec 2025): https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation
- A2A and MCP: https://a2a-protocol.org/latest/topics/a2a-and-mcp/
- Tool use with Claude: https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview
- Writing effective tools for agents: https://www.anthropic.com/engineering/writing-tools-for-agents
