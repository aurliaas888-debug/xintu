import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export async function GET(request: NextRequest) {
  try {
    const zai = await ZAI.create()

    const prompt = `
    Buatkan syarat dan ketentuan yang komprehensif untuk PT XINYU INDONESIA JAYA, 
    perusahaan yang bergerak di bidang perdagangan besar peralatan telekomunikasi di Indonesia.
    
    Informasi perusahaan:
    - Nama: PT XINYU INDONESIA JAYA
    - Bidang Usaha: Perdagangan Besar Peralatan Telekomunikasi
    - Alamat: JALAN PALAGAN COLOMBUS NOMOR 88, Desa/Kelurahan Talaga, Kec. Cikupa, Kab. Tangerang, Provinsi Banten
    - Telepon: 085353876138
    - Email: info@xinyuindonesiajaya.co.id
    
    Buat syarat dan ketentuan yang mencakup:
    1. Pendahuluan dan penerimaan syarat
    2. Definisi istilah penting
    3. Produk dan layanan yang ditawarkan
    4. Proses pemesanan dan pembelian
    5. Harga dan pembayaran
    6. Pengiriman dan pengiriman
    7. Kebijakan pengembalian dan garansi
    8. Hak dan kewajiban pelanggan
    9. Hak dan kewajiban perusahaan
    10. Pembatalan transaksi
    11. Kekayaan intelektual
    12. Pembatasan tanggung jawab
    13. Force majeure
    14. Penyelesaian sengketa
    15. Perubahan syarat dan ketentuan
    16. Kontak informasi
    
    Format dalam HTML dengan heading yang jelas (h2, h3) dan paragraf yang terstruktur.
    Gunakan bahasa Indonesia yang formal namun mudah dipahami.
    Pastikan syarat dan ketentuan ini sesuai dengan hukum perdagangan Indonesia.
    `

    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a legal expert specializing in terms and conditions for Indonesian trading companies. Create comprehensive, legally-compliant terms and conditions in Indonesian.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 3500
    })

    const termsContent = completion.choices[0]?.message?.content || ''

    return NextResponse.json({
      success: true,
      content: termsContent
    })

  } catch (error) {
    console.error('Error generating terms and conditions:', error)
    
    // Fallback content if AI fails
    const fallbackContent = `
    <h2>Syarat dan Ketentuan PT XINYU INDONESIA JAYA</h2>
    
    <h3>1. Pendahuluan</h3>
    <p>Syarat dan ketentuan ini mengatur penggunaan layanan dan produk dari PT XINYU INDONESIA JAYA. Dengan menggunakan layanan kami, Anda menyetujui syarat dan ketentuan ini.</p>
    
    <h3>2. Definisi</h3>
    <p><strong>Perusahaan:</strong> PT XINYU INDONESIA JAYA<br/>
    <strong>Pelanggan:</strong> Pihak yang membeli produk atau menggunakan layanan kami<br/>
    <strong>Produk:</strong> Peralatan telekomunikasi yang kami jual</p>
    
    <h3>3. Produk dan Layanan</h3>
    <p>Kami menyediakan berbagai peralatan telekomunikasi meliputi:</p>
    <ul>
      <li>Perangkat jaringan (router, switch, dll)</li>
      <li>Kabel dan konektor</li>
      <li>Antena dan aksesoris</li>
      <li>Power supply dan UPS</li>
      <li>Peralatan test dan measurement</li>
    </ul>
    
    <h3>4. Pemesanan</h3>
    <p>Pemesanan dapat dilakukan melalui:</p>
    <ul>
      <li>Website resmi perusahaan</li>
      <li>Telepon: 085353876138</li>
      <li>Email: info@xinyuindonesiajaya.co.id</li>
      <li>Kunjungan langsung ke kantor</li>
    </ul>
    
    <h3>5. Harga dan Pembayaran</h3>
    <ul>
      <li>Harga yang tercantum dapat berubah sewaktu-waktu</li>
      <li>Pembayaran dapat dilakukan secara tunai atau transfer</li>
      <li>Untuk pembelian besar, tersedia opsi pembayaran tempo</li>
    </ul>
    
    <h3>6. Pengiriman</h3>
    <ul>
      <li>Pengiriman dilakukan setelah pembayaran diterima</li>
      <li>Biaya pengiriman ditanggung oleh pembeli</li>
      <li>Waktu pengiriman tergantung lokasi dan ketersediaan produk</li>
    </ul>
    
    <h3>7. Garansi dan Pengembalian</h3>
    <ul>
      <li>Semua produk memiliki garansi resmi dari produsen</li>
    </ul>
    
    <h3>8. Kewajiban Pelanggan</h3>
    <ul>
      <li>Memberikan informasi yang akurat</li>
      <li>Melakukan pembayaran tepat waktu</li>
      <li>Memeriksa produk saat diterima</li>
    </ul>
    
    <h3>9. Pembatalan</h3>
    <p>Pembatalan pesanan dapat dilakukan maksimal 24 jam setelah pemesanan dengan syarat produk belum dikirim.</p>
    
    <h3>10. Penyelesaian Sengketa</h3>
    <p>Semua sengketa akan diselesaikan secara musyawarah. Jika tidak tercapai kesepakatan, penyelesaian akan dilakukan melalui pengadilan di wilayah hukum Tangerang.</p>
    
    <h3>11. Kontak</h3>
    <p>Untuk informasi lebih lanjut, hubungi:</p>
    <p>Email: info@xinyuindonesiajaya.co.id<br/>
    Telepon: 085353876138<br/>
    Alamat: JALAN PALAGAN COLOMBUS NOMOR 88, Talaga, Cikupa, Tangerang, Banten</p>
    `

    return NextResponse.json({
      success: true,
      content: fallbackContent
    })
  }
}