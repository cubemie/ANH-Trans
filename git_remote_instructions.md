 # Cara Mengubah URL Remote Git

Dokumen ini berisi panduan singkat untuk mengubah URL remote Git di repositori Anda.

## Mengubah ke URL Biasa (HTTPS)

Jika Anda ingin mengubah kembali remote URL Git Anda dari SSH ke HTTPS (URL biasa), jalankan perintah berikut di terminal:

```bash
git remote set-url origin https://github.com/cubemie/ANH-Trans.git
```

## Mengubah ke URL SSH

Jika Anda ingin menggunakan autentikasi SSH kembali, gunakan perintah berikut:

```bash
git remote set-url origin git@github.com:cubemie/ANH-Trans.git
```

## Memeriksa Status URL Remote

Untuk memastikan apakah URL remote sudah berhasil diubah, Anda bisa mengeceknya dengan menjalankan perintah ini:

```bash
git remote -v
```

Perintah di atas akan menampilkan URL remote yang sedang aktif untuk `fetch` dan `push`.
