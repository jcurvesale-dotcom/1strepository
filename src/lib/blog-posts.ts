/**
 * ============================================================
 *  BLOG POSTS — Ajay Shastri Ji
 * ============================================================
 *
 *  👉 NEW ARTICLE ADD KARNE KA TARIKA:
 *
 *  1. Neeche `BLOG_POSTS` array me SABSE UPAR ek naya object add karo.
 *  2. `slug` UNIQUE hona chahiye (URL me use hoga, e.g. /blog/my-new-article).
 *     - Sirf small letters, numbers aur dash (-) use karo. Space mat do.
 *  3. `category` in me se koi ek: "Love" | "Career" | "Marriage" | "Vastu" | "Remedies"
 *  4. `title`, `excerpt`, `date`, `tag`, `author`, `readTime`, `cover` bharo.
 *  5. `content` me article likho. Simple markdown-like format:
 *       - Blank line = naya paragraph
 *       - Line jo "## " se start ho = heading
 *       - Line jo "- " se start ho = bullet point
 *  6. File save karo — Lovable preview automatic update ho jayega.
 *
 *  🚀 HOSTINGER PE LIVE KARNE KA TARIKA:
 *     Article add karne ke baad → `HOSTING_GUIDE.md` dekho project root me.
 *     Short version: local me `npm run build:static` chalao, phir `dist/` ka
 *     content Hostinger `public_html/` me upload kar do.
 * ============================================================
 */

export const BLOG_CATEGORIES = [
  "Love",
  "Career",
  "Marriage",
  "Vastu",
  "Remedies",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  category: BlogCategory;
  author: string;
  readTime: string;
  cover: string;
  content: string;
};

const AUTHOR = "Ajay Shastri Ji";

export const BLOG_POSTS: BlogPost[] = [
  // ================= LOVE =================
  {
    slug: "venus-in-kundli-for-love-life",
    title: "Understanding Venus in Your Kundli for a Blissful Love Life",
    excerpt:
      "Venus (Shukra) is the karaka of love, beauty and relationships. Learn how its placement in your kundli shapes your love life and simple remedies to strengthen it.",
    date: "5 July 2026",
    tag: "Love Astrology",
    category: "Love",
    author: AUTHOR,
    readTime: "6 min read",
    cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80",
    content: `
Venus, known as Shukra in Vedic astrology, is the planet of love, romance, beauty and harmony. Its position in your birth chart deeply influences how you attract and experience love.

## What Venus Represents

Venus governs your capacity for pleasure, art, luxury and emotional bonding. A strong Venus brings charm, magnetism and a joyful love life.

- Placement in 5th, 7th or 11th house is highly favourable
- Conjunction with Jupiter enhances marital happiness
- Weak Venus can cause delays and misunderstandings in relationships

## Simple Vedic Remedies

- Offer white flowers to Goddess Lakshmi on Fridays
- Wear white or light pink clothes on Fridays
- Donate sugar, rice or curd to a needy woman
- Chant "Om Shukraya Namah" 108 times daily

## When to Consult an Astrologer

If you are facing repeated heartbreaks, delayed marriage or a strained relationship, a personal kundli analysis reveals the exact dasha and dosha at play.
`.trim(),
  },
  {
    slug: "how-to-get-your-ex-love-back",
    title: "How to Get Your Ex Love Back — Vedic Astrology Guide",
    excerpt:
      "Genuine astrological insights and mantra-based remedies to reunite with a lost love — without harming anyone's free will.",
    date: "4 July 2026",
    tag: "Love Problems",
    category: "Love",
    author: AUTHOR,
    readTime: "6 min read",
    cover: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&q=80",
    content: `
Losing someone you love is painful, but Vedic astrology offers gentle remedies rooted in devotion rather than control.

## Check the 5th and 7th House

The 5th house shows romance; the 7th house shows partnership. Afflictions from Saturn, Rahu or Ketu often cause breakups.

## Ethical Remedies

- Chant "Om Kleem Krishnaya Namah" 108 times daily
- Offer red roses to Radha-Krishna on Thursdays
- Donate sweets to young girls on Fridays
- Light a ghee diya before sleeping

## Important

Never use black magic or vashikaran to force someone. True love returns only when karma aligns — remedies work by clearing your own blockages.
`.trim(),
  },
  {
    slug: "signs-of-a-love-marriage-in-kundli",
    title: "5 Clear Signs of a Love Marriage in Your Kundli",
    excerpt:
      "Will you have an arranged or love marriage? These planetary combinations reveal the answer clearly.",
    date: "3 July 2026",
    tag: "Love Marriage",
    category: "Love",
    author: AUTHOR,
    readTime: "5 min read",
    cover: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=80",
    content: `
Certain yogas in a kundli almost guarantee a love marriage. Here are the top 5.

## The 5 Signs

- Venus and Mars conjunction in 5th, 7th or 11th house
- Rahu with Venus in the 7th house
- Lord of 5th and 7th house exchange (Parivartan Yoga)
- Moon-Venus conjunction in kendra houses
- Strong 11th house with benefic aspects

## What if the Signs Are Absent

An arranged marriage can be equally blissful. Compatibility (guna milan) matters far more than the type of marriage.
`.trim(),
  },
  {
    slug: "vashikaran-truth-and-myths",
    title: "Vashikaran — The Truth Behind the Myth",
    excerpt:
      "Is vashikaran real? Is it safe? A clear, honest explanation from a traditional Vedic perspective.",
    date: "2 July 2026",
    tag: "Love Problems",
    category: "Love",
    author: AUTHOR,
    readTime: "5 min read",
    cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    content: `
Vashikaran literally means "to attract". In classical texts it refers to attracting positive energy, not controlling minds.

## What It Is Not

- It is not black magic
- It is not a way to force someone against their will
- It does not guarantee instant results

## Positive Attraction Mantras

- "Om Namah Shivaya" — for inner magnetism
- "Om Kleem Namah" — for love vibration
- Devotion to Ma Katyayani for finding a life partner

Always seek guidance from a genuine astrologer before attempting any ritual.
`.trim(),
  },

  // ================= CAREER =================
  {
    slug: "dasha-cycles-for-career-timing",
    title: "Reading the Dasha Cycles for Perfect Career Timing",
    excerpt:
      "Vimshottari Dasha is the master key to timing in Vedic astrology. Read your current dasha for career, promotion and business decisions.",
    date: "1 July 2026",
    tag: "Career",
    category: "Career",
    author: AUTHOR,
    readTime: "7 min read",
    cover: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    content: `
Every planet rules a period of your life called a Mahadasha. Understanding your current cycle is the difference between struggling and thriving.

## The 9 Mahadasha Periods

- Ketu — 7 years
- Venus — 20 years
- Sun — 6 years
- Moon — 10 years
- Mars — 7 years
- Rahu — 18 years
- Jupiter — 16 years
- Saturn — 19 years
- Mercury — 17 years

## Best Dashas for Career Growth

Jupiter, Mercury and Sun dashas are excellent for promotion and public recognition. Saturn dasha rewards discipline and hard work.

## When to Start a Business

Never launch in the last 6 months of a challenging dasha. Wait for a favourable Antardasha shift.
`.trim(),
  },
  {
    slug: "10th-house-and-your-ideal-career",
    title: "The 10th House — What It Says About Your Ideal Career",
    excerpt:
      "The 10th house is the karma bhava — the true indicator of your profession. Here's how to read it.",
    date: "30 June 2026",
    tag: "Career",
    category: "Career",
    author: AUTHOR,
    readTime: "6 min read",
    cover: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80",
    content: `
The 10th house reveals your natural profession, public image and long-term success.

## Planet in 10th and Career

- Sun — Government, leadership, politics
- Moon — Public dealing, hospitality, healing
- Mars — Engineering, army, sports, real estate
- Mercury — Writing, teaching, communication, IT
- Jupiter — Teaching, law, finance, spirituality
- Venus — Art, fashion, media, luxury goods
- Saturn — Labour, mining, long-term service
- Rahu — Foreign, technology, unconventional fields
- Ketu — Research, occult, spirituality

## Remedy for Weak 10th House

Offer water to the Sun every morning at sunrise for 40 days.
`.trim(),
  },
  {
    slug: "saturn-transit-effects-on-career",
    title: "Saturn Transit (Sade Sati) — Effects on Career and How to Cope",
    excerpt:
      "Sade Sati is Saturn's 7.5-year transit that reshapes career, finances and mindset. Learn its three phases, real effects on job & business, and time-tested Vedic remedies to turn hardship into lifelong success.",
    date: "29 June 2026",
    tag: "Sade Sati",
    category: "Career",
    author: AUTHOR,
    readTime: "9 min read",
    cover: "/__l5e/assets-v1/8d9df377-f8d9-41af-9616-731fa3832415/sade-sati-saturn-transit.jpg",
    content: `
Sade Sati is one of the most talked-about — and most misunderstood — periods in Vedic astrology. It is the 7.5-year transit of Shani (Saturn) over the natal Moon sign and the two signs adjacent to it. Nearly every human being goes through Sade Sati two or three times in a lifetime, and each pass reshapes career, finances and inner character in a very specific way.

Instead of fearing it, a wise person prepares for it. This detailed guide explains what Sade Sati really does to your professional life, what the three phases feel like, and the practical remedies that turn Saturn from a strict teacher into a lifelong benefactor.

## What Sade Sati Actually Is

Saturn moves very slowly — spending about 2.5 years in each zodiac sign. When Saturn enters the sign that is 12th from your natal Moon, Sade Sati begins. It ends when Saturn leaves the sign that is 2nd from your Moon. Total duration: 7.5 years (Sade means "and a half", Sati means "seven").

Saturn is not a cruel planet. He is the karmic accountant of the zodiac. During Sade Sati, he simply presents the bill for actions taken (or avoided) over many years. Those who have worked honestly receive rewards. Those who have taken shortcuts feel the pressure.

## The Three Phases and Their Career Impact

### 1. Rising Phase — Saturn in the 12th from Moon (First 2.5 years)

This is the phase of hidden preparation. You may not see obvious problems, but subtle changes begin.

- Unexpected expenses drain savings
- Sleep gets disturbed; anxiety about the future increases
- Foreign travel or relocation opportunities may appear
- Old projects wind down; a chapter is quietly closing
- You feel restless in the current job even if there is no visible reason

Career action: This is the time to save aggressively, clear debts and avoid new loans.

### 2. Peak Phase — Saturn on the Moon (Middle 2.5 years)

This is the most intense phase and the one people fear most.

- Sudden job changes, transfers or business slowdowns
- Conflict with bosses, partners or authority figures
- Emotional exhaustion — everything feels heavier than it should
- Health issues, especially related to bones, joints or nerves
- Reputation may be tested; be careful with words and documents

Career action: Do NOT quit your job impulsively. Do NOT start a new business during this phase unless a strong Jupiter dasha is running in parallel. Focus on delivering quality, keeping records clean, and building patience.

### 3. Setting Phase — Saturn in the 2nd from Moon (Last 2.5 years)

The pressure begins shifting from career to family and finances.

- Family responsibilities increase — parents, children, in-laws
- Speech-related issues may cause misunderstandings
- Slow but steady financial recovery begins
- Long-pending payments and dues start clearing
- The seeds planted during the peak phase begin to sprout

Career action: This is the ideal time to consolidate — stable job growth, small business expansion, and long-term investments give excellent results.

## Common Career Effects During Sade Sati

- **Job loss or forced role change** — usually pushing you toward your true calling
- **Delayed promotions** despite good performance — Saturn tests patience
- **Business slowdowns** — cash flow tightens, forcing better systems
- **Shift from glamour to substance** — flashy work fades, real skill matters
- **Rise through hard work** — many CEOs and successful entrepreneurs credit Sade Sati as the phase that built their character

## Who Feels Sade Sati Most

Sade Sati is heavier for those with:

- A weak or afflicted Moon in the birth chart
- Saturn already placed in the 1st, 4th, 5th, 7th, 8th or 10th house
- Chandra-Mangal or Chandra-Rahu combinations
- Running Rahu or Saturn Mahadasha at the same time

For people with a strong Saturn (own sign, exalted, or well-aspected by Jupiter), Sade Sati often brings promotion, property and lasting respect.

## How to Cope — Practical Remedies

Saturn respects discipline, honesty and service. These remedies are not superstition; they are behavioural resets that align you with Saturn's energy.

- Serve elders, workers, cleaners and the disabled with genuine respect
- Donate black sesame seeds, mustard oil, iron items or blankets on Saturdays
- Recite the Hanuman Chalisa daily — Hanuman ji is the only deity Saturn bows to
- Chant "Om Sham Shanicharaya Namah" 108 times every Saturday
- Light a mustard oil diya under a peepal tree on Saturday evenings
- Feed crows, black dogs or ants regularly
- Never cheat employees, clients or tax authorities — Saturn punishes deception mercilessly
- Wake up early; maintain a fixed daily routine; avoid laziness

## What You Should Avoid

- Buying blue sapphire (Neelam) without a proper kundli check — it can amplify problems
- Signing risky partnership contracts during the peak phase
- Speculating in stocks, crypto or gambling
- Speaking harshly to parents, teachers or older colleagues
- Ignoring health warnings — Saturn punishes negligence of the body

## The Hidden Gift of Sade Sati

Almost everyone who has completed Sade Sati says the same thing — it was the hardest phase of life, but also the phase that shaped them the most. Habits improved, priorities became clear, and hollow relationships fell away.

Saturn does not destroy — he removes what was never meant to stay. What remains after Sade Sati is your real strength, your real work and your real people.

## When to Consult an Astrologer

If you are entering, currently in, or recently exited Sade Sati, a personal kundli reading reveals:

- Which exact phase is impacting you the most
- Which house Saturn is activating in YOUR chart
- Which Antardasha is running alongside — this often changes the intensity dramatically
- Personalised remedies based on your specific planetary strengths

A well-timed consultation during Sade Sati can save years of struggle and unlock the tremendous rewards Saturn quietly stores for the disciplined seeker.
`.trim(),
  },
  {
    slug: "business-vs-job-in-kundli",
    title: "Business or Job? What Your Kundli Really Says",
    excerpt:
      "Confused between a stable job and starting your own business? Your kundli has a clear answer.",
    date: "28 June 2026",
    tag: "Business",
    category: "Career",
    author: AUTHOR,
    readTime: "5 min read",
    cover: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    content: `
Not everyone is meant to be an entrepreneur. Vedic astrology gives clear signals.

## Signs You Should Do Business

- Strong Mars and Rahu
- Powerful 7th and 11th house
- Sun aspecting 10th house
- Mercury in kendra or trikona

## Signs Job Suits You Better

- Strong Saturn in 6th or 10th house
- Weak Rahu
- Sun in own sign but afflicted 7th house

## Remedy for Business Success

Offer red flowers to Ganesha every Wednesday before making a big decision.
`.trim(),
  },

  // ================= MARRIAGE =================
  {
    slug: "manglik-dosh-myths-and-remedies",
    title: "Manglik Dosh: Myths, Facts & Practical Remedies",
    excerpt:
      "Manglik Dosh is one of the most feared terms in Indian matchmaking — but most of the fear is based on myth.",
    date: "27 June 2026",
    tag: "Marriage",
    category: "Marriage",
    author: AUTHOR,
    readTime: "5 min read",
    cover: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80",
    content: `
Manglik Dosh forms when Mars sits in the 1st, 4th, 7th, 8th or 12th house of a kundli.

## The Biggest Myths

- "Manglik cannot marry a non-Manglik" — false in most cases
- "Manglik Dosh always breaks marriages" — false; strength matters
- "There is no remedy" — completely false

## Effective Remedies

- Kumbh Vivah before actual marriage
- Recitation of Hanuman Chalisa daily
- Fasting on Tuesdays
- Donation of red masoor dal and jaggery

Never wear a gemstone without personal consultation.
`.trim(),
  },
  {
    slug: "guna-milan-explained",
    title: "Guna Milan — Do 36 Gunas Really Matter?",
    excerpt:
      "The 8-fold compatibility check used in Hindu marriages. Here's what each guna actually means.",
    date: "26 June 2026",
    tag: "Kundli Matching",
    category: "Marriage",
    author: AUTHOR,
    readTime: "6 min read",
    cover: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    content: `
Guna Milan (Ashtakoot) scores compatibility out of 36 points.

## The 8 Kootas

- Varna — 1 point — spiritual compatibility
- Vashya — 2 points — mutual attraction
- Tara — 3 points — health and destiny
- Yoni — 4 points — physical & sexual harmony
- Graha Maitri — 5 points — mental compatibility
- Gana — 6 points — temperament
- Bhakoot — 7 points — family life and finance
- Nadi — 8 points — health & progeny

## Minimum Score for Marriage

- Below 18 — not recommended
- 18-24 — acceptable
- 25-32 — very good
- 33-36 — excellent

## Beyond Points

Nadi and Bhakoot dosha need extra attention regardless of total score.
`.trim(),
  },
  {
    slug: "delayed-marriage-causes-and-remedies",
    title: "Why Marriage Gets Delayed — Astrological Causes & Powerful Vedic Remedies",
    excerpt:
      "Marriage not fixing even after the right age? Discover the real planetary reasons behind delayed marriage in Vedic astrology and the time-tested remedies that actually work.",
    date: "25 June 2026",
    tag: "Marriage",
    category: "Marriage",
    author: AUTHOR,
    readTime: "10 min read",
    cover: "/__l5e/assets-v1/3b8dfbfe-565e-451d-b23d-6c53e1607566/delayed-marriage.jpg",
    content: `
Delayed marriage is one of the most emotionally heavy concerns families bring to a Vedic astrologer. Parents worry, relatives ask uncomfortable questions, and the person going through it silently carries the pressure. But in Vedic astrology, a delay is rarely random — it is almost always written in the kundli, and once the reason is understood, the right remedies can genuinely change the timeline.

This article explains, in depth, why marriage gets delayed, which planetary combinations create the block, how dashas control the timing, and which remedies have helped thousands of clients over the years.

## What "Delayed Marriage" Really Means in Vedic Astrology

In Jyotish, delay is not defined by age alone. It is defined by whether the 7th house, its lord, Venus (for men), Jupiter (for women), and the Navamsa chart are activated in a favourable dasha. A person can be 34 and marry exactly on time astrologically, while another can be 27 and already be in a delayed phase. The kundli always tells the truth — the calendar does not.

## The Main Astrological Causes of Delayed Marriage

### 1. Saturn's influence on the 7th house
Saturn is the karaka of delay, discipline and karma. When Saturn sits in, aspects, or rules the 7th house, marriage is almost always postponed until the person is mature enough to hold a lifelong commitment. This is not a curse — it is Saturn making sure the marriage lasts.

### 2. Rahu in the 7th house
Rahu creates confusion, unusual choices, sudden attractions and equally sudden withdrawals. Alliances break at the last moment, engagements get called off, or the person keeps rejecting perfectly good matches for reasons they cannot explain.

### 3. Weak, debilitated or combust Venus
Venus (Shukra) is the significator of marriage, love, and marital happiness for men, and a supporting karaka for women. A weak Venus — debilitated in Virgo, combust near the Sun, or hemmed between malefics — delays love, affection and formal marriage.

### 4. Weak or afflicted Jupiter (for women)
For a woman's kundli, Jupiter represents the husband. If Jupiter is retrograde, debilitated, or aspected by Saturn/Rahu, finding the right partner and finalising the match takes longer than usual.

### 5. Mars-Saturn conjunction or aspect
This combination creates ego conflicts, arguments during matchmaking, and repeated last-minute breakdowns of otherwise perfect alliances.

### 6. Manglik Dosha (Kuja Dosha)
When Mars sits in the 1st, 4th, 7th, 8th or 12th house, matching with a non-Manglik chart becomes difficult, and families often reject the match — which delays things further.

### 7. Afflicted 7th lord
If the lord of your 7th house is in the 6th, 8th or 12th house, or combust, or with malefics, the marriage yog activates much later in life.

### 8. Kalatra Dosha in the Navamsa (D9) chart
The Navamsa is the true chart of marriage. Even if the main kundli looks fine, a damaged Navamsa 7th house or a weak Navamsa Venus/Jupiter can delay marriage significantly.

### 9. Pitra Dosha and ancestral karma
When ancestral rites are incomplete, the 9th house suffers, and blessings for family expansion — including marriage — get blocked until the dosha is pacified.

### 10. Running an unfavourable Mahadasha or Antardasha
Sade Sati, Rahu Mahadasha, Ketu Antardasha or Saturn-Saturn periods are notorious for pausing marriage plans no matter how many proposals come.

## How Dashas Decide the Timing

Marriage in Vedic astrology usually happens during the Mahadasha or Antardasha of:

- Venus (for men) or Jupiter (for women)
- The 7th lord
- The lord of the 2nd house (family expansion) or 11th house (fulfilment of desires)
- A benefic connected to the 7th house

If none of these are active, the kundli is simply not "open" for marriage yet — and no amount of matchmaking will force it. This is why a proper dasha analysis is more important than any single remedy.

## Powerful Vedic Remedies for Delayed Marriage

These remedies are traditional, safe, and have shown consistent results when performed with faith and discipline. Always start remedies on an auspicious day recommended by your astrologer.

### For unmarried women
- Observe fast on **16 consecutive Mondays (Solah Somvar Vrat)** dedicated to Lord Shiva and Mata Parvati.
- Chant the **Katyayani Mantra** — *"Katyayani Mahamaye Mahayoginyadhishwari, Nandagopasutam Devi Patim Me Kuru Te Namah"* — 108 times daily.
- Offer yellow flowers, chana dal and turmeric to Lord Vishnu every Thursday.
- Recite the **Swayamvara Parvati Mantra** for a suitable husband.

### For unmarried men
- Chant **"Om Shukraya Namah"** 108 times on Fridays.
- Donate white items — rice, sugar, milk, white cloth — on Friday mornings.
- Worship Goddess Lakshmi and offer white lotus or jasmine flowers.
- Feed cows on Fridays; this strengthens Venus quickly.

### Universal remedies
- Recite the **Gauri-Shankar Mantra** together with parents' blessings.
- Perform **Kumbh Vivah, Vishnu Vivah, or Ashwattha Vivah** if strong Manglik Dosha is present.
- Perform a **Navagraha Shanti Puja** to pacify all afflicted planets.
- Keep a **Gauri Shankar Rudraksha** after proper consultation.
- Donate at temples of Shiva-Parvati on Mondays and Fridays.

### Gemstones — only after consultation
- **Pearl (Moti)** for a weak Moon
- **Yellow Sapphire (Pukhraj)** for women with weak Jupiter
- **Diamond or White Sapphire** for men with weak Venus

Never wear a gemstone without checking the full kundli — a wrong stone can delay marriage further instead of helping.

## Lifestyle Changes That Support the Remedies

Astrology works fastest when your daily behaviour supports it. Along with mantras and pujas:

- Speak respectfully to elders — this strengthens Jupiter.
- Avoid non-veg food and alcohol on Mondays, Thursdays and Fridays.
- Do not sleep in the evening (sandhya kaal); it weakens Venus.
- Keep the northeast corner of the home clean and clutter-free (Vastu of marriage).
- Wear light pink, cream or yellow on Fridays and Thursdays.

## When Should You Actually Consult an Astrologer?

Book a proper consultation if:

- You are past the average marriageable age in your family and nothing is finalising.
- Every alliance breaks near the engagement stage.
- You are in Sade Sati or Rahu-Ketu Mahadasha.
- There is a Manglik or Nadi dosha reported in matching.
- You feel emotionally stuck and unable to accept marriage even when good matches come.

A personalised kundli reading reveals the exact planet blocking marriage, the exact timing when the block opens, and the exact remedy for **your** chart — not a generic one from the internet.

## Final Word from Ajay Shastri Ji

Delayed marriage is never a punishment. It is the universe preparing you for the right person, the right family, and the right karmic bond. With the correct kundli analysis and honest remedies, the delay can be shortened and the marriage that finally arrives will be far more peaceful and long-lasting than a hurried one.

If your marriage is getting delayed and you want clarity on the real reason, get a personal kundli analysis and a customised remedy plan on WhatsApp or call directly.
`.trim(),
  },

  {
    slug: "second-marriage-in-kundli",
    title: "Second Marriage Yogas — What the Kundli Reveals",
    excerpt:
      "Divorce or widowhood is painful, but many kundlis show clear second marriage yogas leading to happiness.",
    date: "24 June 2026",
    tag: "Marriage",
    category: "Marriage",
    author: AUTHOR,
    readTime: "5 min read",
    cover: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
    content: `
Second marriage is not a failure — often it is the marriage that was truly meant to be.

## Yogas Indicating Second Marriage

- Multiple planets in 7th house
- 7th lord in dual sign (Gemini, Virgo, Sagittarius, Pisces)
- Venus in dual sign with Rahu aspect
- 8th house strongly activated

## Remedies Before Remarriage

- Complete a Rudrabhishek
- Donate to a widow ashram
- Wear turmeric-dyed clothes on Thursday for 21 weeks
- Personal muhurat is essential for the wedding date
`.trim(),
  },

  // ================= VASTU =================
  {
    slug: "vastu-tips-for-home-prosperity",
    title: "10 Vastu Tips for a Prosperous Home",
    excerpt:
      "Small Vastu corrections that bring visible improvement in wealth, health and family harmony within weeks.",
    date: "23 June 2026",
    tag: "Vastu",
    category: "Vastu",
    author: AUTHOR,
    readTime: "6 min read",
    cover: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
    content: `
Vastu Shastra harmonises your home with the five elements. Try these before spending on major renovation.

## The 10 Tips

- Main door should open clockwise
- Keep the north-east corner clean and clutter-free
- Never place a mirror facing the bed
- Kitchen fits best in the south-east
- Cash locker should face north
- Toilet should never be in the north-east
- Broken items must be removed immediately
- Salt water bowl in south-west absorbs negativity
- Tulsi plant in the north or east brings positive energy
- Avoid dark colours in the pooja room

## Quick Cleansing

Sprinkle Ganga jal in every corner on Amavasya to reset the home's energy.
`.trim(),
  },
  {
    slug: "vastu-for-bedroom-happy-marriage",
    title: "Vastu for Bedroom — Secrets of a Happy Marriage",
    excerpt:
      "The bedroom directly influences marital harmony. These Vastu corrections can transform your relationship.",
    date: "22 June 2026",
    tag: "Vastu",
    category: "Vastu",
    author: AUTHOR,
    readTime: "5 min read",
    cover: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    content: `
An imbalanced bedroom silently damages love, sleep and health.

## Rules for a Blissful Bedroom

- Master bedroom should be in the south-west
- Bed head towards south or east
- Never sleep with feet pointing south
- Avoid mirror in front of the bed
- No electronics or TV inside
- Use soft pink, cream or peach colours
- Never keep water pots or fountains in the bedroom
- Couple photos in the south-west wall strengthen bond

## Small Add-On

Two pink roses in a small vase on the south-west corner — refresh weekly.
`.trim(),
  },
  {
    slug: "vastu-for-office-and-shop",
    title: "Vastu for Office and Shop — Attract Wealth & Clients",
    excerpt:
      "Positioning of your seat, cash counter and entrance decides how quickly money flows to you.",
    date: "21 June 2026",
    tag: "Vastu",
    category: "Vastu",
    author: AUTHOR,
    readTime: "5 min read",
    cover: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    content: `
Business Vastu is about energy flow — not superstition.

## Key Rules

- Owner should sit facing north or east
- Cash counter in the north or east side
- Entrance in the north, east or north-east
- Heavy furniture in the south-west
- Kubera yantra on the north wall
- Clean the entrance daily — dust blocks Lakshmi
- Never keep broken chairs or unused files

## Quick Boost

Light a ghee diya near the entrance every Friday evening.
`.trim(),
  },

  // ================= REMEDIES =================
  {
    slug: "powerful-mantras-for-daily-life",
    title: "7 Powerful Mantras for Daily Life",
    excerpt:
      "Simple mantras that clear negativity, strengthen planets and align you with divine energy — 108 times a day is enough.",
    date: "20 June 2026",
    tag: "Mantras",
    category: "Remedies",
    author: AUTHOR,
    readTime: "5 min read",
    cover: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200&q=80",
    content: `
A mantra chanted with faith is more powerful than the costliest gemstone.

## The 7 Essential Mantras

- Gayatri Mantra — universal wisdom
- Mahamrityunjaya — health and longevity
- Om Namah Shivaya — peace and moksha
- Om Namo Narayanaya — protection
- Ganesha Mantra — remove obstacles
- Hanuman Chalisa — courage and strength
- Lakshmi Mantra — wealth and abundance

## Best Time to Chant

Brahma Muhurta (4:30-5:30 AM) is ideal. Use a rudraksha or tulsi mala.
`.trim(),
  },
  {
    slug: "kaal-sarp-dosh-remedies",
    title: "Kaal Sarp Dosh — Truth, Types and Real Remedies",
    excerpt:
      "Kaal Sarp Dosh scares many people. Here's what it actually is and the remedies that genuinely work.",
    date: "19 June 2026",
    tag: "Doshas",
    category: "Remedies",
    author: AUTHOR,
    readTime: "6 min read",
    cover: "https://images.unsplash.com/photo-1519821172144-4f87d40b1116?w=1200&q=80",
    content: `
Kaal Sarp Dosh forms when all planets fall between Rahu and Ketu.

## 12 Types Based on Rahu's Position

Each type produces different results — from career blocks to relationship struggles.

## Genuine Remedies

- Kaal Sarp Puja at Trimbakeshwar or Ujjain
- Recite Mahamrityunjaya mantra 108 times daily
- Donate silver snakes on Nag Panchami
- Feed grains to birds daily
- Rudra Abhishek every Monday

## Reassurance

Kaal Sarp Dosh does not destroy life — it only delays results. Patience and remedies eventually bring double the rewards.
`.trim(),
  },
  {
    slug: "gemstones-benefits-and-warnings",
    title: "Gemstones — Benefits, Warnings & How to Choose Correctly",
    excerpt:
      "The right gemstone changes life; the wrong one destroys it. Read this before buying any stone.",
    date: "18 June 2026",
    tag: "Gemstones",
    category: "Remedies",
    author: AUTHOR,
    readTime: "6 min read",
    cover: "https://images.unsplash.com/photo-1611425143678-08fc480cafde?w=1200&q=80",
    content: `
Gemstones are concentrated planetary energy. They should never be worn based on birth sign alone.

## Common Stones and Their Planet

- Ruby — Sun
- Pearl — Moon
- Red Coral — Mars
- Emerald — Mercury
- Yellow Sapphire — Jupiter
- Diamond — Venus
- Blue Sapphire — Saturn (most powerful, most dangerous)
- Hessonite — Rahu
- Cat's Eye — Ketu

## Rules Before Wearing

- Always check kundli first
- Weight should be minimum 3+ carats
- Wear on correct finger, day and muhurat
- Blue Sapphire — test for 3 days first

## Free Alternative

Chanting the planet's mantra gives 70% of the gemstone's benefit — safely.
`.trim(),
  },
  {
    slug: "pitru-dosh-signs-and-remedies",
    title: "Pitru Dosh — Signs, Causes and Remedies",
    excerpt:
      "If nothing seems to work despite honest effort, Pitru Dosh may be blocking the family's good karma.",
    date: "17 June 2026",
    tag: "Doshas",
    category: "Remedies",
    author: AUTHOR,
    readTime: "6 min read",
    cover: "https://images.unsplash.com/photo-1528738039343-b8d9c11e2333?w=1200&q=80",
    content: `
Pitru Dosh appears when ancestors' souls remain unsatisfied.

## Common Signs

- Repeated financial losses despite hard work
- Delay or difficulty in having children
- Family disputes with no clear reason
- Health issues that doctors cannot fully explain
- Sun or Moon afflicted by Rahu/Ketu in 9th house

## Effective Remedies

- Perform Pitru Paksha shraddh every year
- Tarpan at a sacred river (Gaya, Haridwar, Prayag)
- Feed crows, cows and Brahmins on Amavasya
- Donate black sesame with water on Saturdays
- Plant a peepal tree and water it daily

## Result

Once ancestors are pleased, blockages dissolve and prosperity returns to the whole family.
`.trim(),
  },
  {
    slug: "friday-lakshmi-remedies-for-wealth",
    title: "Friday Lakshmi Remedies — Simple Rituals to Attract Wealth",
    excerpt:
      "Friday is Lakshmi's day. These simple weekly rituals invite steady prosperity into your home.",
    date: "16 June 2026",
    tag: "Wealth",
    category: "Remedies",
    author: AUTHOR,
    readTime: "5 min read",
    cover: "https://images.unsplash.com/photo-1604608672516-f1b9b1d1f1ea?w=1200&q=80",
    content: `
Ma Lakshmi visits homes that are clean, peaceful and full of gratitude.

## Friday Ritual

- Take bath before sunrise
- Wear white or pink clothes
- Clean the pooja room and main entrance
- Light a ghee diya before Lakshmi's photo
- Offer white sweets, kheer or batasha
- Chant "Om Shreem Mahalakshmyai Namah" 108 times

## Daily Practice

- Never sweep the house after sunset
- Keep the north-east corner clutter-free
- Water the tulsi plant every morning

Consistency for 7 Fridays brings visible results.
`.trim(),
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory | "All"): BlogPost[] {
  if (category === "All") return BLOG_POSTS;
  return BLOG_POSTS.filter((p) => p.category === category);
}
