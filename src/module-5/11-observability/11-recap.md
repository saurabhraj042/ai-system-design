# Recap & Practice

## Recap

- Monitoring watches known signals; observability lets you ask new questions. You need both.
- Logs say what happened, metrics say how much, and traces say where. Link them with a trace ID.
- OpenTelemetry is the open standard for these signals. Its GenAI conventions are still in Development status (November 2026), so pin versions.
- Watch the four golden signals. For LLMs, count tokens as well as requests, and treat empty, cut-off or invalid outputs as errors.
- Trace every model call, retrieval step and tool call as a span. Capture prompt and response content only when needed, with redaction.
- Record token usage by type on every call, compute cost from one price table, and watch cache hit ratio.
- Alert on user-visible symptoms with burn rates, plus AI-specific alerts for spend, agent loops and tool failures.
- Use tail sampling to keep errors and slow traces, and keep metric labels low-cardinality.
- Quality needs feedback, proxy metrics and checks on live traffic, all tied to trace IDs.
- In an incident, mitigate first with prepared switches, then investigate what changed.

## Practice questions

1. Your chatbot shows 99.9% HTTP success but users complain about bad answers. What would you add to your monitoring?
   *Hint: implicit errors, proxy metrics, user feedback tied to trace IDs, sampled online checks.*
2. Design the telemetry for an agent that calls five tools. What spans and attributes do you record?
   *Hint: invoke_agent root span, model-call and tool spans, token counts, finish reasons, step count, versions.*
3. Your LLM bill doubled in one week. How do you find the cause?
   *Hint: tokens by type, by feature, model and tier; cache hit ratio; retries; agent steps per task; recent prompt changes.*
4. How would you sample traces for a service with high traffic and large prompts?
   *Hint: light head sampling, then tail sampling for errors, slow, costly and thumbs-down traces; metrics stay unsampled.*
5. Why is user ID a bad metric label, and where should it go instead?
   *Hint: cardinality creates one series per value; put it on spans and logs.*
6. A model provider silently updates a model and your answer quality drops. How do you detect it and respond?
   *Hint: record the response model, compare quality proxies by version, pin or roll back, fall back to another model.*

## Sources

- OpenTelemetry, Observability primer: https://opentelemetry.io/docs/concepts/observability-primer/
- OpenTelemetry, Signals: https://opentelemetry.io/docs/concepts/signals/
- OpenTelemetry, Context propagation: https://opentelemetry.io/docs/concepts/context-propagation/
- OpenTelemetry, Sampling: https://opentelemetry.io/docs/concepts/sampling/
- OpenTelemetry, Collector: https://opentelemetry.io/docs/collector/
- OpenTelemetry, Logs data model: https://opentelemetry.io/docs/specs/otel/logs/data-model/
- OpenTelemetry Python API docs (trace and metrics): https://opentelemetry-python.readthedocs.io/en/latest/api/trace.html
- OpenTelemetry GenAI semantic conventions repository: https://github.com/open-telemetry/semantic-conventions-genai
- OpenTelemetry GenAI client inference conventions: https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/client-inference.md
- OpenTelemetry GenAI agent spans: https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-agent-spans.md
- OpenTelemetry GenAI metrics: https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-metrics.md
- OpenTelemetry MCP conventions: https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/mcp.md
- OpenTelemetry blog, AI agent observability: https://opentelemetry.io/blog/2025/ai-agent-observability/
- OpenTelemetry Python contrib, OpenAI instrumentation: https://opentelemetry-python-contrib.readthedocs.io/en/latest/instrumentation-genai/openai.html
- W3C Trace Context: https://www.w3.org/TR/trace-context/
- Google SRE Book, Monitoring Distributed Systems: https://sre.google/sre-book/monitoring-distributed-systems/
- Google SRE Book, Practical Alerting: https://sre.google/sre-book/practical-alerting/
- Google SRE Book, Managing Incidents: https://sre.google/sre-book/managing-incidents/
- Google SRE Book, Postmortem Culture: https://sre.google/sre-book/postmortem-culture/
- Google SRE Workbook, Alerting on SLOs: https://sre.google/workbook/alerting-on-slos/
- Prometheus, Metric and label naming: https://prometheus.io/docs/practices/naming/
- Prometheus, Histograms and summaries: https://prometheus.io/docs/practices/histograms/
- Anthropic, Prompt caching docs: https://platform.claude.com/docs/en/build-with-claude/prompt-caching
- Anthropic Engineering, A postmortem of three recent issues: https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues
- Claude Code, OpenTelemetry monitoring: https://code.claude.com/docs/en/monitoring-usage
- Langfuse, Observability overview: https://langfuse.com/docs/observability/overview
