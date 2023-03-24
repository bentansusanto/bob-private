
import React from 'react'
import { ListMataPelajaran } from '../../../Data/ListMataPelajaran'

const MataPelajaran = ({matches}) => {

  const getImagePath = (fileName) => {
    return '../../assets/' + fileName;
  };

  return (
    <div className='mt-10' id='matapelajaran'>
        {
            matches? 
            (<div>
                <div>
                    <h2 className='text-[24px] font-bold text-center'>Ada 15 mata pelajaran yang akan kami ajarkan</h2>
                    {/* <div className='mt-5 grid grid-cols-2 gap-5 px-5'>
                      {
                        ListMataPelajaran.map((val, idx) => (
                          <div key={idx}>
                            <img src={getImagePath(val.foto)} alt='mapel' className='rounded-md brightness-50'/>
                            <h4 className='relative -mt-12 mb-2 text-[16px] text-center text-white'>{val.mapel}</h4>
                          </div>
                        ))
                      }
                    </div> */}
                </div>
            </div>) : 
            // Desktop View
            (<div>Desktop View</div>)
        }
    </div>
  )
}

export default MataPelajaran