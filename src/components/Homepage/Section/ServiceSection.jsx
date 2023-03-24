import React from 'react'
import Icon from '../../../assets/icon-price.svg'
import Icon1 from '../../../assets/icon-walikelas.svg'
import Icon2 from '../../../assets/icon-ortu.svg'
import Icon3 from '../../../assets/icon-time.svg'
import Icon4 from '../../../assets/icon-jaminpuas.svg'

const ListService = [
  {
      service : "Harga Lebih Murah",
      description : "Harga mahal bukan jaminan tetapi guru terbaik dari kami adalah kepastian.",
      icon : Icon
  },
  {
      service : "Wali Kelas",
      description : "Wali kelas akan mengatur jadwal dan mempersiapkan pengajar, dan membantu orang tua solving problem belajar siswa.",
      icon : Icon1
  },
  {
      service : "Kontrolling Orang Tua",
      description : "Orang tua akan menerima laporan bulanan tentang perkembangan anak dan rencana pembelajaran berikutnya.",
      icon : Icon2
  },
  {
      service : "Bebas atur jadwal belajar",
      description : "Flexibel atur jadwal belajar, hingga kriteria pengajarmu. Bebas belajar online dan/atau offline sesuai kebutuhan.",
      icon :Icon3
  },
  {
      service : "Jaminan Puas",
      description : "Jika tidak cocok, orang tua dapat mengganti pengajar dan tidak dihitung pertemuan pada saat itu.",
      icon :Icon4
  }
]

const ServiceSection = ({matches}) => {
  // const url = '../../../assets/'
  return (
    <section className='mt-40' id='service'>
      {
        matches? 
        (<div className='px-5'>
            <h2 className='text-[24px] font-bold text-center'>Mengapa memilih les private di Bob’s Private?</h2>
          <div className='mt-10 space-y-5'>
          {
              ListService.map((val, idx) => (
                <div key={idx} className='bg-white rounded-lg p-4'>
                  <img src={val.icon} alt="service image" />
                  <h4 className='text-[18px] pt-2 pb-1 font-bold'>{val.service}</h4>
                  <p>{val.description}</p>
                </div>
              ))
            }
          </div>
        </div>) : 
        (<div>
          Service Desktop
        </div>)
      }
    </section>
  )
}

export default ServiceSection