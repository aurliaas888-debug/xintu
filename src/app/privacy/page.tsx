'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Lock, UserCheck, FileText, AlertCircle } from 'lucide-react'

export default function PrivacyPage() {
  const [privacyContent, setPrivacyContent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPrivacyContent()
  }, [])

  const fetchPrivacyContent = async () => {
    try {
      const response = await fetch('/api/privacy')
      const data = await response.json()
      setPrivacyContent(data.content)
    } catch (error) {
      console.error('Error fetching privacy content:', error)
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
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    PT XINYU INDONESIA JAYA
                  </h1>
                  <p className="text-xs text-gray-600">Privacy Policy</p>
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
            <Shield className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-xl text-gray-600">
            <span className="font-semibold text-blue-600">PT XINYU INDONESIA JAYA</span> 
            {' '}berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda.
          </p>
        </div>

        <div className="space-y-8">
          {/* Privacy Principles */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-start space-x-4">
                <Eye className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Transparansi</h3>
                  <p className="text-gray-600">
                    Kami memberikan informasi yang jelas tentang bagaimana data Anda dikumpulkan dan digunakan.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-start space-x-4">
                <Lock className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Keamanan</h3>
                  <p className="text-gray-600">
                    Data pribadi Anda dilindungi dengan teknologi keamanan terkini.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-start space-x-4">
                <UserCheck className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Kontrol Pengguna</h3>
                  <p className="text-gray-600">
                    Anda memiliki kontrol penuh atas data pribadi yang Anda berikan.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-start space-x-4">
                <FileText className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Kepatuhan</h3>
                  <p className="text-gray-600">
                    Kami mematuhi semua peraturan perlindungan data yang berlaku di Indonesia.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Privacy Content */}
          <Card className="p-8 border-0 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: privacyContent }} />
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="p-6 border-0 shadow-lg bg-blue-50">
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Pertanyaan tentang Privasi?</h3>
                <p className="text-gray-600 mb-4">
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin 
                  mengakses, mengubah, atau menghapus data pribadi Anda, silakan hubungi kami.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> privacy@xinyuindonesiajaya.co.id</p>
                  <p><strong>Telepon:</strong> 085353876138</p>
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
              <Shield className="h-5 w-5 text-white" />
            </div>
            <h3 className="font-bold">PT XINYU INDONESIA JAYA</h3>
          </div>
          <p className="text-gray-400 mb-4">
            Perusahaan terpercaya dalam perdagangan besar peralatan telekomunikasi.
          </p>
          <div className="space-x-4 text-sm">
            <a href="/" className="text-gray-400 hover:text-white transition-colors">Beranda</a>
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
          </div>
          <p className="text-gray-500 text-xs mt-6">
            &copy; 2024 PT XINYU INDONESIA JAYA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}