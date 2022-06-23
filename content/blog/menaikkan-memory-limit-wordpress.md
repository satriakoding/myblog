---
title: "Menaikkan Memory Limit Wordpress"
date: 2022-02-28T16:47:35Z
draft: false
categories: 
    - wordpress
    - web development
tags:
    - wordpress
    - web development
cover:
    title: wp memory limit
    seo: Cara menaikkan memory limit pada Wordpress
    image: /img/post/wp-memorylimit.jpg
    sourceImage:
    placeholder: /img/placeholder.jpg
author: Surur
url:
aliases:
    - cara menaikkan memory limit pada wordpress
description: Secara default wordpress membatasi limit memory upload, namun tak perku khawatir, berikut cara-cara termudah untuj mengatasinya...
---
Didalam CMS Wordpress secara default membatasi limit memory 2mb, artinya kita hanya bisa megupload file (media/plugin) dengan ukuran maksimal 2mb, lebih dari itu otomatis akan gagal.

**Solution**<br>
Banyak jalan menuju Roma, begitulah pepatah bijak berkata.
Sama halnya dengan probem diatas, banyak cara untuk menatasinya.
Berikut alternatif cara termudahnya :

###  wp-config.php
Jika kita menggunakan cpanel, cukup tambahkan syntax berikut pada file <mark>wp-config.php</mark>
```php
define('WP_MEMORY_LIMIT', '256M');
```

### httaccess
```php
php_value memory_limit 256M
php_value upload_max_filesize 64M
php_value post_max_size 64M
```

### php.ini

```php
memory_limit = 256M
upload_max_filesize = 128M
post_max_size = 64M
file_uploads = On
max_execution_time = 300
```

Silahkan pilih metode yang sesuai dengan panel server kita.
