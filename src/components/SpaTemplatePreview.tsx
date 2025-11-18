import { ImageWithFallback } from './figma/ImageWithFallback';
import { Phone, MapPin, Clock, Star, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

interface SpaTemplatePreviewProps {
  lang: 'th' | 'en';
}

const content = {
  th: {
    name: 'บ้านสุขภาพ สปา & นวด',
    tagline: 'ผ่อนคลายกายใจ ด้วยมือนวดมืออาชีพ',
    rating: '4.9',
    reviews: '128 รีวิว',
    openNow: 'เปิดอยู่',
    hours: '09:00 - 21:00',
    address: '123 ถนนสุขุมวิท แขวงคลองเตย กรุงเทพฯ',
    phone: '02-123-4567',
    line: '@baansukkhaphap',
    about: 'เกี่ยวกับเรา',
    aboutText: 'บ้านสุขภาพ สปา & นวด ให้บริการนวดแผนไทย นวดน้ำมันหอมระเหย และสปาครบวงจร ด้วยทีมนักนวดมืออาชีพที่ผ่านการอบรมจากกระทรวงสาธารณสุข บรรยากาศสงบเงียบ สะอาด ส่วนตัว',
    services: 'บริการของเรา',
    gallery: 'บรรยากาศ',
    contact: 'ติดต่อเรา',
    bookNow: 'จองเลย',
    callNow: 'โทรเลย',
    lineChat: 'แชท Line',
    menu: [
      {
        name: 'นวดแผนไทย',
        duration: '60 นาที',
        price: '350 บาท',
        description: 'นวดผ่อนคลายตามแผนไทยโบราณ',
      },
      {
        name: 'นวดน้ำมันหอมระเหย',
        duration: '90 นาที',
        price: '550 บาท',
        description: 'นวดด้วยน้ำมันหอมระเหยธรรมชาติ',
      },
      {
        name: 'นวดฝ่าเท้า',
        duration: '45 นาที',
        price: '300 บาท',
        description: 'กดจุดฝ่าเท้าเพื่อสุขภาพ',
      },
      {
        name: 'สปาแพ็กเกจ',
        duration: '120 นาที',
        price: '999 บาท',
        description: 'นวดตัว + สครับ + แช่น้ำสมุนไพร',
      },
    ],
  },
  en: {
    name: 'Baan Sukkhaphap Spa & Massage',
    tagline: 'Relax Your Body and Mind with Professional Hands',
    rating: '4.9',
    reviews: '128 reviews',
    openNow: 'Open Now',
    hours: '09:00 AM - 09:00 PM',
    address: '123 Sukhumvit Rd, Khlong Toei, Bangkok',
    phone: '02-123-4567',
    line: '@baansukkhaphap',
    about: 'About Us',
    aboutText: 'Baan Sukkhaphap Spa & Massage offers traditional Thai massage, aromatherapy, and complete spa services with certified professional therapists from the Ministry of Public Health. Quiet, clean, and private atmosphere.',
    services: 'Our Services',
    gallery: 'Gallery',
    contact: 'Contact Us',
    bookNow: 'Book Now',
    callNow: 'Call Now',
    lineChat: 'Line Chat',
    menu: [
      {
        name: 'Thai Traditional Massage',
        duration: '60 min',
        price: '฿350',
        description: 'Ancient Thai relaxation massage',
      },
      {
        name: 'Aromatherapy Massage',
        duration: '90 min',
        price: '฿550',
        description: 'Massage with natural essential oils',
      },
      {
        name: 'Foot Massage',
        duration: '45 min',
        price: '฿300',
        description: 'Reflexology for health',
      },
      {
        name: 'Spa Package',
        duration: '120 min',
        price: '฿999',
        description: 'Massage + Scrub + Herbal Bath',
      },
    ],
  },
};

export function SpaTemplatePreview({ lang }: SpaTemplatePreviewProps) {
  const t = content[lang];

  return (
    <div className="max-w-md mx-auto bg-white">
      {/* Hero Section */}
      <div className="relative h-72 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBtYXNzYWdlJTIwcmVsYXhpbmd8ZW58MXx8fHwxNzYzMzc2NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Spa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11181c]/80 via-[#11181c]/40 to-transparent"></div>
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h1 className="text-3xl mb-2">{t.name}</h1>
          <p className="text-white/90 mb-4">{t.tagline}</p>
          
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-[#ed6526] text-[#ed6526]" />
              <span>{t.rating}</span>
              <span className="text-white/70">({t.reviews})</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>{t.openNow}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-2 p-4 bg-[#f8f6f3]">
        <Button className="bg-[#ed6526] hover:bg-[#ed6526]/90 text-white flex-col h-auto py-3">
          <Phone className="h-5 w-5 mb-1" />
          <span className="text-xs">{t.callNow}</span>
        </Button>
        <Button variant="outline" className="border-[#11181c] flex-col h-auto py-3">
          <MessageCircle className="h-5 w-5 mb-1" />
          <span className="text-xs">{t.lineChat}</span>
        </Button>
        <Button variant="outline" className="border-[#11181c] flex-col h-auto py-3">
          <MapPin className="h-5 w-5 mb-1" />
          <span className="text-xs">{lang === 'th' ? 'แผนที่' : 'Map'}</span>
        </Button>
      </div>

      {/* Info Section */}
      <div className="p-6 space-y-4 border-b border-[#11181c]/10">
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 text-[#ed6526] mt-0.5" />
          <div>
            <div className="text-sm text-[#11181c]/60">{lang === 'th' ? 'เวลาทำการ' : 'Opening Hours'}</div>
            <div className="text-[#11181c]">{t.hours}</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-[#ed6526] mt-0.5" />
          <div>
            <div className="text-sm text-[#11181c]/60">{lang === 'th' ? 'ที่อยู่' : 'Address'}</div>
            <div className="text-[#11181c]">{t.address}</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="h-5 w-5 text-[#ed6526] mt-0.5" />
          <div>
            <div className="text-sm text-[#11181c]/60">{lang === 'th' ? 'เบอร์โทร' : 'Phone'}</div>
            <div className="text-[#11181c]">{t.phone}</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MessageCircle className="h-5 w-5 text-[#ed6526] mt-0.5" />
          <div>
            <div className="text-sm text-[#11181c]/60">Line ID</div>
            <div className="text-[#11181c]">{t.line}</div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="p-6 border-b border-[#11181c]/10">
        <h2 className="text-2xl text-[#11181c] mb-3">{t.about}</h2>
        <p className="text-[#11181c]/70 leading-relaxed">{t.aboutText}</p>
      </div>

      {/* Services/Menu */}
      <div className="p-6 border-b border-[#11181c]/10">
        <h2 className="text-2xl text-[#11181c] mb-6">{t.services}</h2>
        <div className="space-y-4">
          {t.menu.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 border border-[#11181c]/10 hover:border-[#ed6526]/30 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg text-[#11181c]">{item.name}</h3>
                <span className="text-xl text-[#ed6526]">{item.price}</span>
              </div>
              <p className="text-sm text-[#11181c]/60 mb-2">{item.description}</p>
              <div className="flex items-center gap-2 text-sm text-[#11181c]/50">
                <Clock className="h-4 w-4" />
                <span>{item.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="p-6 border-b border-[#11181c]/10">
        <h2 className="text-2xl text-[#11181c] mb-6">{t.gallery}</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="aspect-square rounded-xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1649124112083-39748ff81ca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGFpJTIwbWFzc2FnZSUyMHRoZXJhcHl8ZW58MXx8fHwxNzYzMzc2NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Gallery 1"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square rounded-xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1761470575018-135c213340eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHNwYSUyMGludGVyaW9yfGVufDF8fHx8MTc2MzMwMDcwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Gallery 2"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square rounded-xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBtYXNzYWdlJTIwcmVsYXhpbmd8ZW58MXx8fHwxNzYzMzc2NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Gallery 3"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="aspect-square rounded-xl overflow-hidden bg-[#ed6526] flex items-center justify-center">
            <div className="text-center text-white">
              <span className="text-3xl block mb-2">+12</span>
              <span className="text-sm">{lang === 'th' ? 'รูปภาพ' : 'Photos'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="p-6 bg-[#f8f6f3]">
        <h2 className="text-2xl text-[#11181c] mb-4 text-center">{t.contact}</h2>
        <Button className="w-full bg-[#ed6526] hover:bg-[#ed6526]/90 text-white py-6 text-lg">
          <MessageCircle className="h-5 w-5 mr-2" />
          {t.bookNow}
        </Button>
      </div>
    </div>
  );
}
