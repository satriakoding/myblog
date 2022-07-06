---
title: "Cara Mudah Upgrade Hugo"
date: 2022-06-20T14:24:35Z
draft: false
categories: 
    - teknologi
tags:
    - hugo
    - solved
    - tips & trick
cover:
    title: 
    seo:
    image: /img/post/hugo-install.jpg 
    sourceImage:
    placeholder: /img/placeholder.jpg
author: Surur
url: cara-upgrade-hugo
aliases:
    - cara mudah upgrade hugo
description:
---

Bagaimana cara upgrade Hugo?<br>
Dalam beberapa kasus versi hugo di website officialnya tidak sinkron dengan versi rilis di github resminya, entah karena madih belum stabil ataupun faktor lainnya. Yang pasti ada kalanya kita ingin mencoba & menikmati versi terbaru, sehingga kita harus meng-upgrade manual. Tapi tenang saja karena caranyapun cukup mudah & tidak memerlukan waktu yang lama.

### Cara Upgrade Hugo
* Pilih versi hugo yang ingin di install
* Copy link versi hugo yang ber-ekstensi .deb
* Buka terminal kemudian download
  ```bash
  wget -i link
  ```
* Install file .deb yang telah didownload
  ```bash
  sudo dpkg -i namaFile.deb
  ```
* Selesai (Silahkan ulang versi hugo)
  ```bash
   hugo version
  ```
