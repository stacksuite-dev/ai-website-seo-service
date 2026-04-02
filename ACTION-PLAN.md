# ACTION PLAN
**Prioritized SEO Remediation Roadmap**

## Critical Priority (Fix Before Launch)
- [ ] **Generate Sitemap**: Install `@astrojs/sitemap` and add `site` to `astro.config.mjs` to auto-generate `sitemap-index.xml` and `sitemap-0.xml`.
- [ ] **Create `robots.txt`**: Add `public/robots.txt` to point to the sitemap and allow all crawlers (e.g., `User-agent: *`, `Allow: /`).
- [ ] **Fix Meta Descriptions**: The `<meta name="description">` still says "Astro description" globally in `Layout.astro`. Update it dynamically per page or set a strong default for the B2B AI SEO engine.
- [ ] **Canonical Tags**: Inject a global `<link rel="canonical" href="...">` in `Layout.astro`.

## High Priority (Fix within 1 Week of Launch)
- [ ] **Implement JSON-LD Schema**:
  - Add `Organization` schema to the homepage (`index.astro`).
  - Add `WebSite` schema.
  - Add `BreadcrumbList` schema to showcase pages.
- [ ] **Open Graph (Social) Tags**: Add `og:title`, `og:description`, `og:image`, `twitter:card` tags to `Layout.astro` for professional sharing on LinkedIn, WhatsApp, and Facebook.
- [ ] **Create `llms.txt`**: Add `public/llms.txt` summarizing the AI SEO engine's value prop, pricing, and process specifically for ChatGPT/Perplexity crawling.

## Medium Priority (Optimization Opportunities)
- [ ] **Image Alt Text**: Ensure all `<img>` tags, especially the dynamic ones in `Showcase.astro` and individual `[slug].astro` pages, have descriptive, keyword-rich `alt` attributes based on the business name.
- [ ] **Hreflang Tags**: If targeting multiple regions (e.g., `zh-HK` vs `zh-TW`), add `hreflang` tags to the `<head>`. Currently, `lang="zh-HK"` is set correctly.
- [ ] **FAQ Section**: Add an accordion FAQ to the homepage to capture "What is AI SEO?" and "How much does SEO cost in HK?" long-tail queries.

## Low Priority (Backlog)
- [ ] **Blog Schema**: Once the blog is populated (`/blog`), ensure `Article` or `BlogPosting` schema is automatically injected per markdown/MDX file.
- [ ] **Performance Monitoring**: Set up Google Search Console and submit the sitemap once live.

---