'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, FileText, Scale, Shield, Users, AlertTriangle, CheckCircle } from 'lucide-react'

export default function TermsPage() {
  const [termsContent, setTermsContent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTermsContent()
  }, [])

  const fetchTermsContent = async () => {
    try {
      const response = await fetch('/api/terms')
      const data = await response.json()
      setTermsContent(data.content)
    } catch (error) {
      console.error('Error fetching terms content:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Button variant="ghost" onClick={() => window.history.back()} className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    PT XINYU INDONESIA JAYA
                  </h1>
                  <p className="text-xs text-gray-600">Syarat & Ketentuan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Scale className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Syarat & Ketentuan
          </h1>
          <p className="text-xl text-gray-600">
            Selamat datang di <span className="font-semibold text-blue-600">PT XINYU INDONESIA JAYA</span>. 
            {' '}Dengan menggunakan layanan kami, Anda menyetujui syarat dan ketentuan berikut.
          </p>
        </div>

        <div className="space-y-8">
          {/* Key Principles */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-8 w-8 text-green-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Kualitas Terjamin</h3>
                  <p className="text-gray-600">
                    Semua produk yang kami jual telah melalui quality control yang ketat.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-start space-x-4">
                <Shield className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Garansi Produk</h3>
                  <p className="text-gray-600">
                    Kami menyediakan garansi untuk semua produk yang dibeli.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-start space-x-4">
                <Users className="h-8 w-8 text-purple-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Layanan Pelanggan</h3>
                  <p className="text-gray-600">
                    Tim kami siap membantu Anda dengan profesional dan responsif.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Terms Content */}
          <Card className="p-8 border-0 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: termsContent }} />
            </div>
          </Card>

          {/* Important Notes */}
          <Card className="p-6 border-0 shadow-lg bg-yellow-50 border-l-4 border-yellow-400">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Penting Diperhatikan</h3>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>Harap membaca semua syarat dan ketentuan dengan seksama sebelum melakukan transaksi</li>
                  <li>Transaksi yang telah dilakukan tidak dapat dibatalkan kecuali sesuai dengan kebijakan pengembalian</li>
                  <li>Harga dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu</li>
                  <li>Kami berhak menolak pesanan jika tidak memenuhi syarat yang ditentukan</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="p-6 border-0 shadow-lg bg-blue-50">
            <div className="flex items-start space-x-4">
              <FileText className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Pertanyaan tentang Syarat & Ketentuan?</h3>
                <p className="text-gray-600 mb-4">
                  Jika Anda memiliki pertanyaan atau klarifikasi mengenai syarat dan ketentuan kami, 
                  jangan ragu untuk menghubungi tim hukum atau customer service kami.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email Legal:</strong> legal@xinyuindonesiajaya.co.id</p>
                  <p><strong>Customer Service:</strong> 085353876138</p>
                  <p><strong>Alamat:</strong> JALAN PALAGAN COLOMBUS NOMOR 88, Talaga, Cikupa, Tangerang, Banten</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Last Updated */}
          <div className="text-center text-gray-500 text-sm">
            <p>Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <h3 className="font-bold">PT XINYU INDONESIA JAYA</h3>
          </div>
          <p className="text-gray-400 mb-4">
            Perusahaan terpercaya dalam perdagangan besar peralatan telekomunikasi.
          </p>
          <div className="space-x-4 text-sm">
            <a href="/" className="text-gray-400 hover:text-white transition-colors">Beranda</a>
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
          </div>
          <p className="text-gray-500 text-xs mt-6">
            &copy; 2024 PT XINYU INDONESIA JAYA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}