# How to Build Great APIs
### A Practical, Human-Friendly Guide to API Design and Documentation

> *By a developer who's broken enough APIs to know what not to do · ~10 min read · 2025*

---

Let's be honest — most API documentation is written for people who already know how to use the API. You've been there: you land on a "Getting Started" page, follow the instructions step by step, get a cryptic `401` error, and spend the next 45 minutes on Stack Overflow wondering if you missed something obvious.

This post is about doing better. It's a guide to building APIs that developers actually enjoy using, and writing documentation that doesn't make them want to close the tab. Whether you're building a public API for thousands of users or an internal one for your own team, the same principles apply.

---

## Table of Contents

1. [Designing Your API Like a Human Being](#part-1-designing-your-api-like-a-human-being)
2. [Authentication Done Right](#part-2-authentication-done-right)
3. [Error Messages That Actually Help](#part-3-error-messages-that-actually-help)
4. [Writing Documentation People Will Actually Read](#part-4-writing-documentation-people-will-actually-read)
5. [Rate Limiting and Pagination](#part-5-rate-limiting-and-pagination)
6. [Testing Your Own API Like a Developer](#part-6-testing-your-own-api-like-a-developer)

---

## Part 1: Designing Your API Like a Human Being

### Start with the developer experience, not the database schema

One of the most common API design mistakes is building around your internal data model. Your database has a `user_account_profiles` table, so your endpoint becomes `/user_account_profiles`. Your callers don't care what your tables are named. They care about what they're trying to do.

Think about the tasks your API users will actually perform, and design your endpoints around those tasks. `/users` is clear. `/user_account_profiles` is noise.

### Use nouns, not verbs — and be consistent

REST APIs use HTTP methods (GET, POST, PUT, DELETE, PATCH) to express actions. Your URLs should identify resources, not describe operations. Here's a quick sanity check:

✅ `GET /articles` — get a list of articles  
✅ `POST /articles` — create a new article  
❌ `GET /getArticles` — redundant verb in the URL  
❌ `POST /createNewArticle` — describes the action, not the resource  

Once you pick a convention, stick with it across every endpoint. Inconsistency is the fastest way to make developers distrust your API.

### Version from day one

Even if you're "just starting out" and "it'll change later anyway," version your API from the first endpoint you ship. Prefix everything with `/v1/`. It costs you nothing now and saves you a painful migration conversation later when you need to make breaking changes.

> 💡 **Quick tip:** Use `/v1/`, `/v2/` in the URL path rather than headers. URL versioning is more visible, easier to test in a browser, and less likely to cause headaches for less-experienced API consumers.

---

## Part 2: Authentication Done Right

Nothing kills the developer experience faster than a confusing auth setup. Here's what actually works in practice:

### Use API keys for simple integrations

For straightforward use cases — server-to-server communication, scripts, simple automation — API keys are hard to beat. They're easy to issue, easy to revoke, and easy for developers to understand. The main things to get right:

- Generate long, random keys (at least 32 bytes of entropy)
- Always transmit keys in headers, never in URLs (URLs get logged)
- Make it easy to rotate or revoke keys from a dashboard
- Scope keys where possible — a key that can only read data can't cause a data deletion incident

### Use OAuth 2.0 when users are involved

If your API will act on behalf of end users — reading their data, posting on their behalf, accessing their accounts — OAuth 2.0 is the right call. It's the industry standard for a reason. Use the authorization code flow for web apps, and PKCE for mobile and SPA clients. Don't roll your own auth scheme.

> ⚠️ **Caution:** Never store API keys or secrets in client-side JavaScript or mobile app bundles. This is one of the most common security mistakes and one of the easiest to avoid.

---

## Part 3: Error Messages That Actually Help

Error handling is where many APIs show their true character. A bad error message wastes developer time. A good one points them directly at the fix.

> *A 200 OK with an error body is a lie wrapped in a status code.*

### The anatomy of a useful error response

Every error response should include at minimum:

- An HTTP status code that actually reflects the problem
- A machine-readable error code (e.g. `invalid_token`, `rate_limit_exceeded`)
- A human-readable message that explains what went wrong
- Where possible: what the developer should do next

### Use HTTP status codes correctly

This sounds obvious, but it gets violated constantly. Here's a quick reference:

| Code | Meaning |
|------|---------|
| `400` | Bad Request — the client sent something malformed |
| `401` | Unauthorized — authentication is required or failed |
| `403` | Forbidden — authenticated, but not allowed to do this |
| `404` | Not Found — the resource doesn't exist |
| `422` | Unprocessable Entity — valid request, semantically wrong data |
| `429` | Too Many Requests — rate limit hit |
| `500` | Internal Server Error — never your caller's fault |

Do not return `200 OK` with an error body. Do not return `500` for every error regardless of cause. Your callers will thank you.

---

## Part 4: Writing Documentation People Will Actually Read

Here's a hard truth: a beautifully designed API with bad documentation will be used less than a mediocre API with great docs. Documentation is product.

### Every endpoint needs an example

Developers are hands-on learners. They scan for a code example before they read anything else. Every endpoint in your docs should have at least one complete, copy-pasteable example — request headers included, real (or realistic) values, expected response shown in full.

Tools like Redoc, Swagger UI, or Scalar can auto-generate interactive docs from an OpenAPI spec. This is worth doing. It cuts down on repetitive documentation work and keeps your docs in sync with the actual API.

### Write a real Getting Started guide

The Getting Started guide has one job: get a developer from zero to their first successful API call in under 10 minutes. Not an overview of every feature. Not a deep dive into architecture. Just: here's what you need, here's the first call to make, here's what you should see.

Write it like you're pair programming with someone who's never seen your API before. What's the first thing they need to do? What's the first mistake they're likely to make? Answer those questions upfront.

### Keep docs close to the code

Documentation drift — where the docs describe an old version of the API — is one of the most frustrating things a developer can encounter. It erodes trust fast. The best fix is to generate docs directly from code annotations or an OpenAPI spec maintained as part of the codebase. If docs live in a separate wiki, they will fall behind.

> 📌 **Pro tip:** Add a "Last verified" date to guides and tutorials. It sets expectations honestly and helps developers know when to look for more recent information.

---

## Part 5: Rate Limiting and Pagination

### Rate limits: be transparent, be generous with information

Rate limits are necessary. What's not necessary is leaving developers to discover them by hitting a wall. Always document your rate limits clearly, and always return rate limit information in response headers — `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Reset` are the conventional names.

When a caller hits the limit, return a `429` with a `Retry-After` header telling them exactly how long to wait. Don't make them guess.

### Pagination that doesn't surprise people

If your API returns lists, it needs pagination. Cursor-based pagination is generally preferred over offset pagination for large datasets — it's more consistent when records are being added or deleted.

Whatever you choose, document these clearly:

- Default page size and maximum page size
- What happens when you request beyond the last page
- How to tell when you've reached the end of results

---

## Part 6: Testing Your Own API Like a Developer

Before you ship, use your own API the way a developer who's never seen it before would. Start with your Getting Started guide. Follow it exactly. Notice where you get confused, where you have to guess, where the error messages don't help. Those moments are your to-do list.

### Pre-launch checklist

- [ ] What happens when required parameters are missing from a request?
- [ ] What happens with malformed JSON bodies?
- [ ] What happens when an API key is missing vs expired vs invalid?
- [ ] What does the error response look like in each of these cases?
- [ ] Can a developer authenticate and make their first call using only the docs?

This kind of testing surfaces the rough edges that developers will hit in the real world. Smooth them out before they become support tickets.

---

## Wrapping Up

Building a good API is mostly about empathy. Every design decision, every error message, every line of documentation is a message to the developer on the other side. The goal is to make their experience as smooth and unsurprising as possible.

You won't get everything right on the first version — no one does. But if you start with clear conventions, helpful errors, real documentation, and a habit of testing your own work from the outside, you'll be ahead of most APIs out there.

Happy building. 🚀

---

*© 2025 · Best Practices in API Design & Documentation · Developer Guide*
