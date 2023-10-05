import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='h-[calc(100vh-130px)] items-center flex flex-col gap-3'>
      <h1 className='text-center bg-text bg-clip-text text-transparent text-8xl mt-44'>
        Sebastian Barranca
      </h1>
      <p className='text-center text-2xl w-[40ch] mx-auto'>lorem jsjjsksakkfkacak kaskdak rkak kakrkajcaj aj rackakrkk ak rkakc jarjaj ajjdaj jdjasjajsj sjdsj  jsjdj jadjsjd sjdja</p>
      <Link className='bg-button text-white px-6 py-2 text-2xl rounded-full' href={"/1.pdf"} download='application/pdf'>Sobre Nosotros</Link>
      <a download='application/pdf' href='/1.pdf' target='_blank'>sdd</a>
    </div>
  )
}
