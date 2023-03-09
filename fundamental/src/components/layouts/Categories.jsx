import Photo3 from '../../photo3.jfif';
import Photo2 from '../../photo2.jfif';
import Photo1 from '../../photo1.jfif';

export default function Categories() {
  return (
    <>
    <div className='container mx-auto flex mt-12 text-center gap-3'>
        <div className='w-1/3 justify-center'>
          <h1 className='text-2xl text-blue-900 mb-3'>Web Development</h1>
          <img src={Photo3} className='h-40 w-40 mx-auto rounded-full shrink-0  mb-3' alt="" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, nemo. Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='w-1/3 justify-center '>
          <h1 className='text-2xl text-blue-900 mb-3'>Design Mockup</h1>
          <img src={Photo2} className='h-40 w-40 mx-auto rounded-full shrink-0 mb-3' alt="" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, nemo.  Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='w-1/3 justify-center'>
          <h1 className='text-2xl text-blue-900 mb-3'>Mobile Development</h1>
          <img src={Photo1} className='h-40 w-40 mx-auto rounded-full shrink-0 mb-3' alt="" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, nemo.  Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </>
  )
}