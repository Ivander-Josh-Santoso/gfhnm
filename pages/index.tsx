import Yolo from '../components/models/Yolo';

export default function Home() {
  return (
    <>
      <main className="font-mono flex flex-col justify-center items-center  w-screen">
        <h1 className="m-5 text-xl font-bold">Real Time Detection</h1>
        <Yolo />
        <p className="m-5">
          Created by{' '}
          <a className="underline underline-offset-1 hover:translate-y-1" href="https://github.com/Ivander-Josh-Santoso">
            @ivanderjoshsantoso
          </a>
        </p>
      </main>
    </>
  );
}
