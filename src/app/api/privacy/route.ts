import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export async function GET(request: NextRequest) {
  try {
    const zai = await ZAI.create()

    const prompt = `
    Buatkan kebijakan privasi yang komprehensif untuk PT XINYU INDONESIA JAYA, 
    perusahaan yang bergerak di bidang perdagangan besar peralatan telekomunikasi di Indonesia.
    
    Informasi perusahaan:
    - Nama: PT XINYU INDONESIA JAYA
    - Bidang Usaha: Perdagangan Besar Peralatan Telekomunikasi
    - Alamat: JALAN PALAGAN COLOMBUS NOMOR 88, Desa/Kelurahan Talaga, Kec. Cikupa, Kab. Tangerang, Provinsi Banten
    - Telepon: 085353876138
    - Email: info@xinyuindonesiajaya.co.id
    
    Buat kebijakan privasi yang mencakup:
    1. Pendahuluan dan komitmen privasi
    2. Jenis data yang dikumpulkan (data pelanggan, data transaksi, data penggunaan website)
    3. Tujuan pengumpulan data
    4. Cara pengumpulan data
    5. Penggunaan dan pembagian data
    6. Keamanan data
    7. Hak pelanggan atas data pribadi
    8. Kebijakan cookie
    9. Penyimpanan data
    10. Perubahan kebijakan
    11. Kontak untuk pertanyaan privasi
    
    Format dalam HTML dengan heading yang jelas (h2, h3) dan paragraf yang terstruktur.
    Gunakan bahasa Indonesia yang formal namun mudah dipahami.
    Pastikan kebijakan ini sesuai dengan hukum perlindungan data Indonesia.
    `

    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a legal expert specializing in privacy policies for Indonesian companies. Create comprehensive, legally-compliant privacy policies in Indonesian.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 3000
    })

    const privacyContent = completion.choices[0]?.message?.content || ''

    return NextResponse.json({
      success: true,
      content: privacyContent
    })

  } catch (error) {
    console.error('Error generating privacy policy:', error)
    
    // Fallback content if AI fails
    const fallbackContent = `
    <h2>Kebijakan Privasi PT XINYU INDONESIA JAYA</h2>
    
    <h3>1. Pendahuluan</h3>
    <p>PT XINYU INDONESIA JAYA ("kami") berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan layanan kami.</p>
    
    <h3>2. Data yang Kami Kumpulkan</h3>
    <p>Kami dapat mengumpulkan jenis informasi berikut:</p>
    <ul>
      <li>Data identifikasi pribadi (nama, alamat, email, telepon)</li>
      <li>Data transaksi (riwayat pembelian, informasi pembayaran)</li>
      <liData penggunaan website (IP address, cookie, data browsing)</li>
    </ul>
    
    <h3>3. Tujuan Penggunaan Data</h3>
    <p>Data pribadi Anda kami gunakan untuk:</p>
    <ul>
      <li>Memproses transaksi dan pengiriman produk</li>
      <li>Memberikan layanan pelanggan</li>
      <li>Menginformasikan produk dan layanan terbaru</li>
      <li>Meningkatkan kualitas layanan kami</li>
    </ul>
    
    <h3>4. Keamanan Data</h3>
    <p>Kami menerapkan langkah-langkah keamanan yang tepat untuk melindungi data pribadi Anda dari akses tidak sah, perubahan, penghancuran, atau pengungkapan.</p>
    
    <h3>5. Hak Anda</h3>
    <p>Anda memiliki hak untuk:</p>
    <ul>
      <li>Mengakses data pribadi Anda</li>
      <li>Memperbaiki data yang tidak akurat</li>
      <li>Meminta penghapusan data pribadi</li>
      <li>Menolak penggunaan data untuk tujuan pemasaran</li>
    </ul>
    
    <h3>6. Kontak</h3>
    <p>Untuk pertanyaan mengenai kebijakan privasi, hubungi:</p>
    <p>Email: privacy@xinyuindonesiajaya.co.id<br/>
    Telepon: 085353876138</p>
    `

    return NextResponse.json({
      success: true,
      content: fallbackContent
    })
  }
}