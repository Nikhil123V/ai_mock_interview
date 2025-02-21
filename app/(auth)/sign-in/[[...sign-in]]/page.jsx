import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (


<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    
    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
  
      <img
        alt="sign-in background"
        src=
        //"https://i.ibb.co/g9HRw8x/Untitled-design.png"
        "https://i.ibb.co/3pQwr8c/sigin.jpg"
        width={100}
        height={100}
        //"https://i.ibb.co/GT0v80n/sigin.jpg"
        
        //"https://i.ibb.co/2MKhngJ/Gemini-Generated-Image-ppboklppboklppbo.jpg"
        className="absolute inset-0 h-full w-full object-cover opacity-80 "
      />


      <div className="hidden lg:relative lg:block lg:p-12">
        <a className="block text-white" href="#">
          <span className="sr-only">Home</span>
       
        </a>
        

        
      </div>
      <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl ">
            Welecome back to AIQuest Sign in to your account
          </h1>
    </section>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <div className="relative -mt-16 block lg:hidden">
          <a
            className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
            href="#"
          >
            <span className="sr-only">Home</span>
          
          </a>

          <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Welecome back to AIQuest Sign in to your account
          </h1>

        
        </div>

        <SignIn />

      </div>
    </main>
  </div>
</section>

  )
  
}