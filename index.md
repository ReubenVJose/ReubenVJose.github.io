---
layout: single
title: "Welcome"
author_profile: true
permalink: /
---

Hi, I’m **Reuben Varghese Jose** — welcome to my personal site!

This space is where I share my journey in consulting, sustainable impact, storytelling, and career development. You can explore my [resume](/resume/), [projects](/projects/), or [read my blog](/blog/).

---

## 📝 Recent Blog Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span style="color: #888;">({{ post.date | date: "%B %d, %Y" }})</span>
    </li>
  {% endfor %}
</ul>
