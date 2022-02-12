---
title: "Disable Rightclick Image"
date: 2022-02-12T13:38:40Z
draft: false
categories: 
tags:
cover:
    title: disable right-click
    image: "https://plchldr.co/i/500x250?fc=111111"
author: Surur
url:
description:
---

**Halo Sobat Jejak..,**<br>
Semoga sehat & bahagia selalu

Dalam kondisi tertentu, adakalanya kita ingin melindungi konten atau asset (foto) yang ada didalam website kita, entah alasan privacy, pembajakan, ataupun lainnya. Dan salah satu cara paling umum yaitu dengan menonaktifkan klik kanan _(disable right-click)_

**Problem**<br>
Dengan men-disable klik kanan artinya kita juga tidak bisa melakukan copy-paste jika suatu ketika ingin meng-copy tulisan di website kita, seperti source code, syntax, dll.

**Solution**<br>
Untuk mengatasi kendala tersebut, salah satu alternatif yang bisa digunakan yaitu cukup men-disable rightclick untuk image saja, jadi 
semua image (foto/gambar) di web kita tidak bisa di klik kanan sehingga tidak bisa didownload. Sedangkan untuk tulisan kita tetap bisa melakukan copy-paste.

_Syntax_<br>
Tambahkan syntak javascript berikut kedalam tag \<head> atau sebel yag penutup \</body>
```javascript
<script type="text/javascript">
  document.addEventListener("contextmenu", function(e){
    if (e.target.nodeName === "IMG") {
        e.preventDefault();
    }
  }, false);
</script>
```

**Conclusion**<br>
_"No system is safe"_
Kita semua tahu, tidak ada yang benar² aman didunia internet. Cara diatas tidak menjamin 100% aman, hanya saja cukup untuk sedikit mempersulit aksi² ilegal diwebsite kita. Selalu ingat, bagikan apa yang perlu dibagikan dan simpan apa yang tak perlu dipublikasikan.

#SalamPersaudaraan

**Reference**<br>
https://stackoverflow.com/questions/737022/how-do-i-disable-right-click-on-my-web-page