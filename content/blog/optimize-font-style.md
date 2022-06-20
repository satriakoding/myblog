---
title: "Optimize Font Style"
date: 2022-02-15T09:23:27Z
draft: false
categories: 
    - web development
    - tips
tags:
    - optimasi
    - font-style
cover:
    title: optimize font
    seo: Cara optimasi font pada website
    image: /img/post/optimize-font.jpg
    sourceImage: seniwent_artwork on Freepik
author: Surur
url: cara-optimasi-font-pada-website
aliases: 
    - cara optimasi font pada website
description: Tak hanya image, ternyata optimasi font-style juga dapat mempercepat loading website loh..
---

Halo Sobat Jejak..,<br>
Semoga sehat & bahagia selalu..

Pernah dengar gak sih optimasi font-style bisa mempercepat loading website? Mungkin yang sering terlintas dibenak kita adalah optimasi server, image, css, js, dll.

Ceritanya hari ini saya sedang iseng menguji kecepatan website saya di <em>GtMetrix.com</em> & <em>PageSpeed.web.dev</em>, dan hasilnya cukup mengejutkan, keduanya menyatakan bahwa web saya memerlukan waktu sekian detik untuk me-load font-style sesesuai yang diharapkan.

Anyway, Seperti web pada umumnya diluar sana, saya menggunakan font khusus agar terlihat lebih keren, hehe. Tapi Seperti yang kita tahu tidak semua perangkat (smartphone/pc) user support semua jenis font sehingga sistem perlu me-load font external agar web bisa tampil sempurna seperti yang diharapakan.

**Problem**<br>
Dari pengujian diatas kita bisa melihat bahwa sistem memerlukan waktu tambahan untuk me-load font-style custom, artinya selama proses tersebut tampilan web kita akan kosong sampai font tersebut berhasil ditampilkan, sehingga disimpulkan secara keseluruhan web kita dinilai sedikit lambat. Ya walaupun hanya sekian milidetik (ms), bagi google ini tetap saja perlu diperbaiki.

**Solution**<br>
Setelah mengikuti petunjuk dari situs pengujian tersebut, ternyata sangat sederhana solusinya, yaitu dengan mengatur <mark>font-display: swap</mark> sebagai font standar.

Sebelumnya pengaturan font di web saya seperti ini<br>
```css
@font-face {
  font-family: Sacramento;
  src: url(/fonts/Sacramento-Regular.ttf);
}
```
Sekarang tambahkan parameter <mark>font-display: swap</mark>
dan hasilnya seperti berikut

```css
@font-face {
  font-family: Sacramento;
  src: url(/fonts/Sacramento-Regular.ttf);
  font-display: swap;
}
```

**Conclusion**<br>
Hasil akhir setiap pengguna mungkin akan berbeda, tapi bagi saya pribadi tips tersebut cukup bagus untuk diterapkan. Ingat, sekecil apapun perubahan, selama itu menjadi lebih baik maka layak untuk diterapkan.

#SalamJejak

**Reference**<br>
<small class="inside-out"><a href="https://web.dev/avoid-invisible-text" target="_BLANK">https://web.dev/avoid-invisible-text</a></small>
