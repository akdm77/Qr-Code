import Head from "next/head";
import Image from "next/image";
import img from "./assets/image-qr-code.png";
import "./globals.css";
export default function Home() {

  return(
  

    <div>
      <Head>
        <link rel="apple-touch-icon"  sizes="any" href="./favicon.ico" />
        <title>QR-Code</title>
      </Head>

      <main className=" flex min-h-screen flex-col items-center justify-center p-24 bg-blue-200">
          
          <div className="bg-white zb-10  rounded-md max-w-5xl content-center  items-center justify-center  text-sm  w-60">
            <div className='flex rounded-md m-4 b-5 size-52 items-center justify-center text-center'>
              <Image
                className="rounded-md"
                src={img}
                alt="Qr-Code"
                width={500}
                height={300} />
            </div>
            <h1 className="flex text-center m-5"> <strong>Improve your front-end skills by building projects</strong> </h1>
            <h6 className="flex text-center m-4">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</h6>

          </div>
        </main>
    </div>



  )
}
