# 🚀 Hostinger Deployment Guide — Ajay Shastri Ji Website

Ye guide aapko step-by-step batayegi kaise apni website ko Hostinger shared hosting pe deploy karna hai, aur naye articles kaise add karne hain.

---

## 📁 Naya Article Kaise Add Karein

### Step 1: Article file open karo

Lovable editor me ye file kholo:

```
src/lib/blog-posts.ts
```

### Step 2: Naya article object add karo

`BLOG_POSTS` array me **sabse upar** (line 47 ke aaspaas) ye template paste karo aur values bharo:

```ts
{
  slug: "aapke-article-ka-url",       // ⚠️ UNIQUE hona chahiye. Sirf small letters + dash. Space nahi!
  title: "Article Ka Full Title",
  excerpt: "2-3 line ka short summary jo blog listing pe dikhega...",
  date: "15 July 2026",                // Publish date
  tag: "Love Astrology",                // Short badge label
  category: "Love",                     // ⚠️ Sirf ye 5 me se: "Love" | "Career" | "Marriage" | "Vastu" | "Remedies"
  author: AUTHOR,                       // Default hai — mat badlo
  readTime: "6 min read",               // Estimate
  cover: "https://images.unsplash.com/photo-XXXX?w=1200&q=80",  // Cover image URL
  content: `
Yaha article ka intro paragraph likho. Ye pehla paragraph hai.

## Ye Heading Hai

Iske neeche paragraph. Blank line dene se naya paragraph banta hai.

- Bullet point ek
- Bullet point do
- Bullet point teen

## Doosri Heading

Aur content...

## Conclusion

Closing paragraph aur CTA.
  `.trim(),
},
```

### Step 3: Save karo — Lovable automatically update kar dega

Preview me `/blog` pe jaake dekh lo naya article dikh raha hai ya nahi. Category filter, search, aur article detail page — sab auto-work karega.

---

## 🌐 Hostinger Pe Upload Karne Ke Steps

Article add karne ke baad website ko live update karne ke liye:

### Ek baar setup (sirf pehli baar):

1. **Lovable → GitHub connect karo** (Settings → GitHub → Connect)
2. Apne computer pe project **clone** karo:
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   cd <your-repo>
   npm install
   ```

### Har baar jab naya article add karo:

1. **Lovable me article add karo** (upar wale steps)
2. Apne computer pe:
   ```bash
   git pull
   npm run build:static
   ```
3. `dist/` folder create hoga (ya `.output/public/`). Iska **poora content** copy karo.
4. **Hostinger hPanel** kholo → **File Manager** → `public_html/` folder me jao
5. `public_html/` ke saare purane files **delete** karo (backup le lo pehle)
6. Copied `dist/` ka poora content `public_html/` me **paste/upload** karo
   - Make sure `.htaccess` file bhi upload ho (hidden file — File Manager me "Show Hidden Files" enable karo)
7. 1-2 minute me site live ho jayegi ✅

### Verification

Browser me kholo:

- `https://yourdomain.com/` — Homepage
- `https://yourdomain.com/blog` — Blog list
- `https://yourdomain.com/blog/your-new-slug` — Naya article

---

## 🔧 Troubleshooting

**Problem:** URL /blog/xyz pe 404 aa raha hai

- **Solution:** `.htaccess` file `public_html/` me hai ya nahi check karo. Hidden files show karke verify karo. Agar nahi hai, `public/.htaccess` file manually upload karo.

**Problem:** Images load nahi ho rahi

- **Solution:** Sab files (including `assets/` folder) upload hue ya nahi confirm karo.

**Problem:** HTTPS nahi laga

- **Solution:** Hostinger hPanel → SSL → GODSSL install karo (Let's Encrypt).

---

## 📞 Contact Details Update

Agar phone/WhatsApp number change karna ho, ye file me search-replace karo:

- `src/routes/index.tsx` — main site
- Number format: `+91 93109 01707` aur `919310901707` (WhatsApp link)

---

## 🎯 Domain Setup

1. Hostinger me domain add karo (agar already nahi hai)
2. `public_html/` me site upload karo
3. SSL install karo (Free Let's Encrypt)
4. Google Search Console me domain verify karo
5. `sitemap.xml` submit karo: `https://yourdomain.com/sitemap.xml`

---

**Questions ho toh Lovable chat me pooch lena — main help kar dunga.**
