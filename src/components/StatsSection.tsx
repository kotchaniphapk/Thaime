import { motion } from 'motion/react';
import { TrendingUp, Users, Clock, Star } from 'lucide-react';

interface StatsSectionProps {
  lang: 'th' | 'en';
}

const content = {
  th: {
    title: 'ประสิทธิภาพที่พิสูจน์แล้ว',
    subtitle: 'ตัวเลขที่บอกเล่าความสำเร็จของเรา',
    stats: [
      {
        icon: TrendingUp,
        value: '95%',
        label: 'อัตราความพึงพอใจ',
        description: 'ลูกค้าพึงพอใจและกลับมาใช้บริการซ้ำ',
      },
      {
        icon: Users,
        value: '500+',
        label: 'ลูกค้าที่ไว้วางใจ',
        description: 'ร้านค้าทั่วประเทศที่เลือกใช้บริการเรา',
      },
      {
        icon: Clock,
        value: '24 ชม.',
        label: 'เวลาทำงานเฉลี่ย',
        description: 'เว็บส่วนใหญ่เสร็จภายใน 1 วันทำการ',
      },
      {
        icon: Star,
        value: '4.9/5',
        label: 'คะแนนรีวิว',
        description: 'จากลูกค้าที่ใช้บริการจริง',
      },
    ],
  },
  en: {
    title: 'Proven Performance',
    subtitle: 'Numbers that tell our success story',
    stats: [
      {
        icon: TrendingUp,
        value: '95%',
        label: 'Satisfaction Rate',
        description: 'Customers satisfied and return for more',
      },
      {
        icon: Users,
        value: '500+',
        label: 'Trusted Clients',
        description: 'Businesses nationwide using our service',
      },
      {
        icon: Clock,
        value: '24 hrs',
        label: 'Average Delivery',
        description: 'Most websites completed within 1 business day',
      },
      {
        icon: Star,
        value: '4.9/5',
        label: 'Review Score',
        description: 'From real customers who used our service',
      },
    ],
  },
};

export function StatsSection({ lang }: StatsSectionProps) {
  const t = content[lang];

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl tracking-tight text-[#11181c]">
            {t.title}
          </h2>
          <p className="text-xl text-[#11181c]/70 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg shadow-[#11181c]/5 border border-[#11181c]/10 hover:shadow-xl hover:shadow-[#ed6526]/10 hover:border-[#ed6526]/30 transition-all duration-500 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex w-14 h-14 rounded-2xl bg-[#ed6526] items-center justify-center shadow-lg shadow-[#ed6526]/30">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  {/* Value */}
                  <div className="mb-3">
                    <span className="text-4xl text-[#11181c]">
                      {stat.value}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="text-lg text-[#11181c] mb-2">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#11181c]/60 leading-relaxed">
                    {stat.description}
                  </p>

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#ed6526]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
