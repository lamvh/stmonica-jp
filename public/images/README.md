# Imagery

Drop the St Monica photography here to replace the warm gradient placeholders.
Until a file exists, `MediaFrame` shows its beige gradient + Japanese caption and
fades the photo in once it loads — so the layout stays intentional either way.

## How to get the images

The source photos live in the Claude Design project **"Website viện dưỡng lão
Nhật"** (`87a1d9ad-13e2-4e3c-a82e-b7c2266b71a1`) under its `images/` folder.
They are larger than the design API's 256 KiB per-file read cap, so export them
from the design UI and copy the PNGs into **this** folder. The filenames must
match exactly:

```
hero.png            entrance.png        director.png
svc-morning.png     svc-care.png        svc-calligraphy.png
fac-garden.png      fac-room.png        fac-dining.png
fac-bath.png        fac-lounge.png
room-private.png    room-garden.png     room-care.png
festival.png
staff1.png          staff2.png          staff3.png          staff4.png
```

That's the full set referenced by the pages under `app/*` and
`components/media-frame.tsx`. No code change is needed once the files are here.
