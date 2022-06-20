---
title: "Disable Zoom Out"
date: 2022-02-14T10:34:46Z
draft: false
categories:
  - teknologi
tags:
  - meta
  - solved
cover:
    title: disable zoom
    seo: Cara menonaktifkan zoom out pada website
    image: "/img/post/disable-zoom-out.jpg"
    sourceImage: Upklyak on Freepik.com
author: Surur
url: cara-menonaktifkan-zoom-web
description: Ada beberapa alasan mengapa kita ingin menonaktifkan zoom out pada halaman web kita, diantaranya . . .
---

Ada berbagai alasan mengapa seseorang ingin menonaktifkan zoom out dihalaman website-nya. Saya tidak akan bertanya apa alasannya kepada sobat semua, yang pasti cara termudahnya yaitu dengan men-setting parameter pada Tag <mark>meta viewport</mark>

Silahkan tambahkan tag meta berikut kedalam tag <mark>\<head></mark>

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
```

#### Kesimpulan<br>
Beberapa sumber mengatakan bahwa menonaktifkan zoom out pada halaman website bukanlah hal yang direkomendasikan, karena bisa saja hal tersebut justru mengganggu para pembaca, seperti font size terlalu kecil misalnya. Hal tersebut juga berdampak bagi pengguna yang mengakses dengan ponsel yg berukuran kecil, orang dengan penglihatan minus, atau orang tua yang daya penglihatannya sudah menurun.

So, apapun itu semua kembali ke Anda sebagai pemilik website. Saya pribadi sih juga lebih suka menonaktifkan zoom out pada web saya. Hehe 😁
