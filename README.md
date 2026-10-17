# Jack Zhang — Magic & Mentalism

A single continuously scrolling page for Jack’s magic and mentalism portfolio.
Source for `www.jackzmagic.com`, hosted from `jackzhangjc/miracle1949.github.io`.

## Preview

From this directory, run:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Open <http://127.0.0.1:8080/>. No package installation or build step is needed.
The preview server must remain running. Stop it with Control-C.

## Editing

- `index.html`: page content, contact details and Instagram links.
- `styles.css`: responsive layout, typography and colors.
- `app.js`: mobile navigation and the photo dialog.
- `assets/`: local photographs and favicon.

## Photography

The stage images were selected from Jack’s Google Photos collection and saved
locally. No signed-in Google Photos URLs are used by the website.

| Image | Selection / use |
| --- | --- |
| `stage-2020.jpg` | January 26, 2020 stage performance. Hero. Original BLACK214 credit preserved in the source image. |
| `stage-portrait-2026.jpg` | February 7, 2026 performance, cards beside the host. Stage service image. Sunwil Studios watermark preserved. |
| `audience-2026.jpg` | February 7, 2026 audience interaction. About section. Sunwil Studios watermark preserved. |
| `close-up.jpg` | Optimized copy of `magic1.jpg` from the original portfolio. Close-up service image. |
| `copperfield.jpg` | Jack’s public Instagram post `BuMl0sVBR05`, meeting David Copperfield. |

Uncropped local photographs open in an accessible dialog; crops on the page are
only layout treatments. Original repository photographs remain in the checkout.

## Instagram

The Instagram card video (`BAAfwKmA3km`) and DNA show poster (`B3_e-VyBsp1`)
use HTTPS native embeds with direct post links. This replaces the original
HTTP embed script that caused mixed-content blocking on the HTTPS website.
The Copperfield photo is local and links to its original post. Additional
supplied Instagram links are available under “More Instagram moments.”
Instagram embeds need internet access and remain subject to the platform’s
availability and visitor privacy settings. Local photographs do not depend
on those embeds.

## Design and copy sources

The photo-led restraint of Derren Brown’s and David Blaine’s official websites
informed the visual direction, without copying their layouts or text:

- <https://derrenbrown.co.uk/>
- <https://davidblaine.com/>

Biographical details and past clients come from Jack’s supplied notes and the
original website. Robinhood and the 100+ show count were supplied by Jack.
Genentech, Moloco and Paula LeDuc Fine Catering & Events were added after
checking completed Entire Productions bookings in Gmail. Inquiries, released
holds and future events were excluded from the past-client list.

The event-team quote is an exact excerpt from Megan Moses at Entire
Productions following the Genentech reception, with the agency attribution
shown beside it. It is not an endorsement attributed to Genentech itself.
New promotional copy is written for this draft; there are no invented
testimonials or ratings. Private email-source notes are kept outside this
public website directory.

## Local verification

- Desktop (1440px) and phone (390px) visual review.
- Mobile menu, anchor navigation, photo dialog, Escape and close controls.
- Instagram post / video loading.
- YouTube section removed; remaining sections numbered consecutively.
- JavaScript syntax, local asset paths, internal anchor targets and duplicate IDs.
