import ButtonVite from './components/ButtonVite';
import DataCard from './components/DataCard';
import { articles } from './data/articles';

function App() {
  return (
    <main className='min-h-screen font-sans bg-neutral-900'>
      <article className='pt-36 pb-16 px-12 flex justify-center'>
        <div className='container grid grid-cols-1 content-center gap-4 md:grid-cols-2 md:gap-16'>
          <div className='text-area order-2 md:order-1'>
            <div className='flex flex-col items-center md:items-start'>
              <h1 className='text-5xl font-bold text-transparent mx-36 text-center leading-[56px] whitespace-pre-wrap tracking-widest md:mx-0 bg-clip-text bg-gradient-to-br from-sky-500 via-purple-400 to-purple-500'>
                Vite
              </h1>
              <p className='text-5xl font-bold text-white mx-6 text-center leading-[56px] whitespace-pre-wrap break-words tracking-wider md:text-left md:mx-0 lg:pr-72'>
                Next Generation Frontend Tooling
              </p>
              <p className='text-xl pt-3 font-medium text-neutral-500 mx-6 text-center leading-8	whitespace-pre-wrap break-words md:text-left md:mx-0 lg:pr-72'>
                Get ready for a development environment that can finally catch
                up with you.
              </p>
              <div className='flex flex-nowrap whitespace-nowrap mx-36 h-10 pt-12 md:mx-0'>
                <ButtonVite isPrimary content='Get Started' />
                <ButtonVite content='Why Vite?' />
                <ButtonVite content='View on GitHub' />
              </div>
            </div>
          </div>
          <div className='image flex justify-center order-1 md:order-2 md:justify-center'>
            <div className='image-container'>
              <div className='img-background bg-gradient-to-br from-sky-500 via-purple-400 to-purple-500 rounded-full block blur-2xl absolute h-80 w-80'></div>
              <img
                src='https://vitejs.dev/logo-with-shadow.png'
                alt=''
                className='h-80 w-80 relative'
              />
            </div>
          </div>
        </div>
      </article>
      <section className='cards-container px-12 flex justify-center'>
        <div className='container'>
          <div className='items'>
            <div className='p-2 text-white grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:grid-1'>
              {articles.map((article, index) => {
                return (
                  <DataCard
                    key={`data-card-${index}`}
                    icon={article.icon}
                    title={article.title}
                    content={article.content}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
